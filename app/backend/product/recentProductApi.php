<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$conn = new mysqli("localhost", "root", "", "egis");
$result = $conn->query("select * from product order by added_date desc limit 8");
$outp = "";
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"id":"' . $rs["product_id"] . '",';
    $outp .= '"title":"' . $rs["name"] . '",';
    $outp .= '"price":"' . $rs["price"] . '",';
    $outp .= '"image":"' . $rs["image"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>
