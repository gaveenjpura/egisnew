<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$total_price=$user->total_price;
$user_id=$user->user_id;
$type=$user->status;
//$cart_array=$user->cart_array;
//$cart_array=json_decode($cart_array);
$date=$user->date;
$conn = new mysqli("localhost", "root", "", "egis");
$outp ="";
if($type=='buyer'){
	$result_buyer=$conn->query("select * from buyer where user_id='$user_id'");
	$rs_buyer = $result_buyer->fetch_array(MYSQLI_ASSOC);
	$buyer_id=$rs_buyer["buyer_id"];
    $result_order_header=$conn->query("insert into order_header (order_date,total_price,buyer_id,order_time) values('$date','$total_price','$buyer_id',current_time())");
	$result=$conn->query("select * from order_header order by order_id desc limit 1");
	while($rs = $result->fetch_array(MYSQLI_ASSOC)){
		 if ($outp != "") {
        $outp .= ",";
    }
	 $outp .= '{"order_id":"' . $rs["order_id"] . '"}';
	}
	
}
else{
	$result_buyer_seller=$conn->query("select * from buyer_and_seller where user_id='$user_id'");
	$rs_buyer_seller = $result_buyer_seller->fetch_array(MYSQLI_ASSOC);
	$buyer_seller_id=$rs_buyer_seller["buyer_seller_id"];
	$result_order_header=$conn->query("insert into order_header (order_date,total_price,buyer_seller_id,order_time) values('$date','$total_price','$buyer_seller_id',current_time())");
	$result=$conn->query("select * from order_header order by order_id desc limit 1");
	while($rs = $result->fetch_array(MYSQLI_ASSOC)){
		if ($outp != "") {
        $outp .= ",";
    }
	$outp .= '{"order_id":"' . $rs["order_id"] . '"}';
	}
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>