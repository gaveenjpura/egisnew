<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$user_id=$user->user_id;
$product_id=$user->product_id;
$browse_date=$user->browse_date;
$conn = new mysqli("localhost", "root", "", "egis");
$result_seller_id = $conn->query("select * from buyer where user_id='$user_id'");
$rs_seller_id = $result_seller_id->fetch_array(MYSQLI_ASSOC);
$seller_id=$rs_seller_id["buyer_id"];
$result_add_browse=$conn->query("insert into buyer_browse_product (buyer_id,product_id,browse_time,browse_date) values ('$seller_id',$product_id,current_timestamp(),'$browse_date')");
$outp = "";
$status="ok";
if($result_add_browse){
    if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"product_id":"' . $status . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>