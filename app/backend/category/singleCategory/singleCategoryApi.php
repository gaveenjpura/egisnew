<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$cat_id=$user->cat_id;
$conn = new mysqli("localhost", "root", "", "egis");
$result = $conn->query("select * from product where cat_id='$cat_id'");
$outp = "";
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"product_id":"' . $rs["product_id"] . '",';
    $outp .= '"name":"' . $rs["name"] . '",';
    $outp .= '"price":"' . $rs["price"] . '",';
	$outp .= '"qty":"' . $rs["qty"] . '",';
	$outp .= '"added_date":"' . $rs["added_date"] . '",';
	$outp .= '"cat_id":"' . $rs["cat_id"] . '",';
	$outp .= '"description":"' . $rs["description"] . '",';
    $outp .= '"image":"' . $rs["image"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>