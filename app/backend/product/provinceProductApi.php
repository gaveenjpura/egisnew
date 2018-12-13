<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$conn = new mysqli("localhost", "root", "", "egis");
$province_id=$user->province_id;
$cat_id=$user->cat_id;
$user_id=$user->user_id;
$result=$conn->query("SELECT distinct p.product_id as product_id,p.name as product_name,p.price as product_price,p.qty as product_qty,p.description as product_description,p.image as image,u.lat as home_lat,u.lon as home_lon,bra.lat as branch_lat,bra.lon as branch_lon,(select COALESCE(sum(qty),0) from order_detail where product_id=p.product_id) as purchased_qty FROM product p, category c, user u, gnd g,dsd d,district dis,province pro,branch bra WHERE p.cat_id = c.id AND p.seller_id = u.user_id AND u.gnd = g.gnd_id AND c.id ='$cat_id' AND g.dsd_id=d.dsd_id and d.district_id=dis.district_id and dis.province_id=pro.province_id and pro.province_id='$province_id' AND p.seller_id<>'$user_id' and u.branch_id=bra.branch_id having (product_qty-purchased_qty)>0");
$outp = "";
$travel_time="0";
$travel_branch_home=0;
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
	 if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"name":"' . $rs["product_name"] . '",';
	$outp .= '"id":"' . $rs["product_id"] . '",';
	$outp .= '"price":"' . $rs["product_price"] . '",';
	$outp .= '"qty":"' . $rs["product_qty"] . '",';
	$outp .= '"purchased_qty":"' . $rs["purchased_qty"] . '",';
	$outp .= '"remain_qty":"' . "" . '",';
	$outp .= '"image":"' . $rs["image"] . '",';
	$outp .= '"home_lat":"' . $rs["home_lat"] . '",';
	$outp .= '"home_lon":"' . $rs["home_lon"] . '",';
	$outp .= '"branch_lat":"' . $rs["branch_lat"] . '",';
	$outp .= '"branch_lon":"' . $rs["branch_lon"] . '",';
	$outp .= '"travel_time":"' . $travel_time . '",';
	$outp .= '"description":"' . $rs["product_description"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>


