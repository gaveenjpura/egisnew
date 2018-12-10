<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$product_id=$user->product_id;
$conn = new mysqli("localhost", "root", "", "egis");
$result = $conn->query("select p.product_id as product_id,p.name as name,p.price as price,p.qty as qty,p.added_date as added_date,p.cat_id as cat_id,p.description as description,p.image as image,u.lat as user_lat,u.lon as user_lon,b.lat as branch_lat,b.lon as branch_lon from product p,user u,branch b where p.seller_id=u.user_id and u.branch_id=b.branch_id and p.product_id='$product_id'");
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
	$outp .= '"user_lat":"' . $rs["user_lat"] . '",';
	$outp .= '"user_lon":"' . $rs["user_lon"] . '",';
	$outp .= '"branch_lat":"' . $rs["branch_lat"] . '",';
	$outp .= '"branch_lon":"' . $rs["branch_lon"] . '",';
    $outp .= '"image":"' . $rs["image"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>