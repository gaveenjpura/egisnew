<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$conn = new mysqli("localhost", "root", "", "egis");
$province_id=$user->province_id;
$cat_id=$user->cat_id;
$user_id=$user->user_id;
$result=$conn->query("SELECT distinct p.product_id as product_id,p.name as product_name,p.price as product_price,p.qty as product_qty,p.description as product_description,p.image as image FROM product p, category c, user u, gnd g,dsd d,district dis,province pro WHERE p.cat_id = c.id AND p.seller_id = u.user_id AND u.gnd = g.gnd_id AND c.id ='$cat_id' AND g.dsd_id=d.dsd_id and d.district_id=dis.district_id and dis.province_id=pro.province_id and pro.province_id='$province_id' AND p.seller_id<>'$user_id'");
$outp = "";
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
	 if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"name":"' . $rs["product_name"] . '",';
	$outp .= '"id":"' . $rs["product_id"] . '",';
	$outp .= '"price":"' . $rs["product_price"] . '",';
	$outp .= '"qty":"' . $rs["product_qty"] . '",';
	$outp .= '"image":"' . $rs["image"] . '",';
	$outp .= '"description":"' . $rs["product_description"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>


