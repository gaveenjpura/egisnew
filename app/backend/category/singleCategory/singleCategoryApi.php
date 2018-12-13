<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$cat_id=$user->cat_id;
$conn = new mysqli("localhost", "root", "", "egis");
$result = $conn->query("select p.product_id as product_id,p.name as name,p.price as price,p.qty as qty,p.added_date as added_date,p.cat_id as cat_id,p.description as description,p.image as image,(select COALESCE(sum(qty),0) from order_detail where product_id=p.product_id) as purchased_qty from product p where p.cat_id='$cat_id' having (qty-purchased_qty)>0");
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
	$outp .= '"purchased_qty":"' . $rs["purchased_qty"] . '",';
	$outp .= '"remain_qty":"' ."". '",';
    $outp .= '"image":"' . $rs["image"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>