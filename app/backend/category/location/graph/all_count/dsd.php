<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$conn = new mysqli("localhost", "root", "", "egis");
$dsd_id=$user->dsd_id;
$result=$conn->query("select count(name) as all_count from location_order_view where dsd_id='$dsd_id'");
$outp = "";
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
	 if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"all_count":"' . $rs["all_count"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>