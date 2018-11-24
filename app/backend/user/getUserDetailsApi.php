<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$conn = new mysqli("localhost", "root", "", "egis");
$user_id = $user->user_id;
$result_buyer=$conn->query("select * from buyer where user_id='$user_id'");
if(mysqli_num_rows($result_buyer)!=0){
	$type="1";
}
$result_seller=$conn->query("select * from seller where user_id='$user_id'");
if(mysqli_num_rows($result_seller)!=0){
	$type="2";
}
$result_buyer_seller=$conn->query("select * from buyer_and_seller where user_id='$user_id'");
if(mysqli_num_rows($result_buyer_seller)!=0){
	$type="3";
}
$result = $conn->query("SELECT u.user_id as user_id,u.fname as fname,u.lname as lname,u.dob as dob,u.phone_num as phone_num,u.email as email,u.photo as photo,u.lat as lat,u.lon as lon,u.add_1 as add_1,u.add_2 as add_2,u.add_3 as add_3,g.gnd_name as gnd,d.name as dsd,dis.name as district,pro.name as province from user u,gnd g,dsd d,district dis,province pro where u.user_id='$user_id' and g.gnd_id=u.gnd and g.dsd_id=d.dsd_id and dis.district_id=d.district_id and pro.province_id=dis.province_id");
$outp = "";
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"user_id":"' . $rs["user_id"] . '",';
    $outp .= '"fname":"' . $rs["fname"] . '",';
    $outp .= '"lname":"' . $rs["lname"] . '",';
    $outp .= '"user_type":"' . $type . '",';
    $outp .= '"dob":"' . $rs["dob"] . '",';
    $outp .= '"phone_num":"' . $rs["phone_num"] . '",';
    $outp .= '"email":"' . $rs["email"] . '",';
    $outp .= '"photo":"' . $rs["photo"] . '",';
    $outp .= '"lat":"' . $rs["lat"] . '",';
    $outp .= '"lon":"' . $rs["lon"] . '",';
    $outp .= '"add_1":"' . $rs["add_1"] . '",';
    $outp .= '"add_2":"' . $rs["add_2"] . '",';
	$outp .= '"add_3":"' . $rs["add_3"] . '",';
	$outp .= '"dsd":"' . $rs["dsd"] . '",';
	$outp .= '"district":"' . $rs["district"] . '",';
	$outp .= '"province":"' . $rs["province"] . '",';
    $outp .= '"gnd":"' . $rs["gnd"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>