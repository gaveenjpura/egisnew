<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$conn = new mysqli("localhost", "root", "", "egis");
$province_id=$user->province_id;
$result=$conn->query("select distinct c.name as category_name,c.id as category_id,c.icon as category_icon,c.color as category_color from product p,user u,category c,gnd g,dsd d,district dis,province pro where p.cat_id=c.id and p.seller_id=u.user_id and u.gnd=g.gnd_id and g.dsd_id=d.dsd_id and d.district_id=dis.district_id and dis.province_id=pro.province_id and pro.province_id='$province_id'");
$outp = "";
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
	 if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"category_name":"' . $rs["category_name"] . '",';
	$outp .= '"category_id":"' . $rs["category_id"] . '",';
	$outp .= '"category_icon":"' . $rs["category_icon"] . '",';
	$outp .= '"category_color":"' . $rs["category_color"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>