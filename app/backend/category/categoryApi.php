<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$conn = new mysqli("localhost", "root", "", "egis");
$result = $conn->query("SELECT id,name,icon FROM category");
$outp = "";
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"id":"' . $rs["id"] . '",';
    $outp .= '"name":"' . $rs["name"] . '",';
    $outp .= '"icon":"' . $rs["icon"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>