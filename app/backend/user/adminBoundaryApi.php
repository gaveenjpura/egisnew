<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user= json_decode(file_get_contents("php://input"));
$user_id=$user->user_id;
$conn = new mysqli("localhost", "root", "", "egis");
$result = $conn->query("SELECT g.gnd_id as gnd_id, g.gnd_name as gnd_name,d.dsd_id as dsd_id,d.name as dsd_name,dis.district_id as district_id,dis.name as district_name,pro.province_id as province_id,pro.name as province_name FROM gnd g,user u,dsd d,district dis,province pro where u.gnd=g.gnd_id and u.user_id='$user_id' and g.dsd_id=d.dsd_id and dis.district_id=d.district_id and pro.province_id=dis.province_id");
$outp = "";
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"gnd_id":"' . $rs["gnd_id"] . '",';
    $outp .= '"gnd_name":"' . $rs["gnd_name"] . '",';
    $outp .= '"dsd_id":"' . $rs["dsd_id"] . '",';
	$outp .= '"dsd_name":"' . $rs["dsd_name"] . '",';
	$outp .= '"district_id":"' . $rs["district_id"] . '",';
	$outp .= '"district_name":"' . $rs["district_name"] . '",';
	$outp .= '"province_id":"' . $rs["province_id"] . '",';
    $outp .= '"province_name":"' . $rs["province_name"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>