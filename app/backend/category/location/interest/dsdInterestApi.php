<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$conn = new mysqli("localhost", "root", "", "egis");
$dsd_id=$user->dsd_id;
$result=$conn->query("SELECT t1.id as id, t1.name as name,t1.icon as icon,t1.color as color,t2.browse_count, t3.order_count FROM category t1 LEFT JOIN (SELECT id, COUNT( id ) AS browse_count FROM location_browse WHERE dsd_id ='$dsd_id' GROUP BY id) AS t2 ON t1.id = t2.id LEFT JOIN (SELECT id, name, COUNT( id ) AS order_count FROM location_order_view WHERE dsd_id ='$dsd_id' GROUP BY id) AS t3 ON t3.id = t1.id order by t3.order_count desc,t2.browse_count desc limit 6");
$outp = "";
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
	 if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"category_name":"' . $rs["name"] . '",';
	$outp .= '"category_id":"' . $rs["id"] . '",';
	$outp .= '"category_icon":"' . $rs["icon"] . '",';
	$outp .= '"category_color":"' . $rs["color"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>