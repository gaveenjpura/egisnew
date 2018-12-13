<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$order_id=$user->order_id;
$product_id=$user->product_id;
$qty=$user->qty;
$total_price=$user->total_price;
$conn = new mysqli("localhost", "root", "", "egis");
$outp = "";
$result_set=$conn->query("insert into order_detail (order_id,product_id,qty,product_total_price) values('$order_id','$product_id','$qty','$total_price')");
$result_get=$conn->query("select * from order_detail order by order_id desc limit 1");
while ($rs = $result_get->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"order_id":"' . $rs["order_id"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>