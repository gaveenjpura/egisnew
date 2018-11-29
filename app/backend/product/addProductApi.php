<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$product = json_decode(file_get_contents("php://input"));
$name = $product->name;
$description=$product->description;
$price=$product->price;
$qty=$product->qty;
$cat=$product->cat;
$last_date=$product->last_date;
$image=$product->display;
$date=$product->date;
$user=$product->user;
$image = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $image));
$conn = new mysqli("localhost", "root", "", "egis");
$result_product_table=$conn->query("insert into product (name,price,qty,added_date,cat_id,description,seller_id) values('$name','$price','$qty','$date','$cat','$description','$user')");
$result_product_id=$conn->query("SELECT product_id FROM product order by product_id DESC limit 1");
$rs_product_id = $result_product_id->fetch_array(MYSQLI_ASSOC);
$product_id=$rs_product_id["product_id"];
$img_location='../product_photos/'.$product_id.'.jpg';
file_put_contents($img_location, $image);
$result_update_product=$conn->query("update product set image='$img_location' where product_id='$product_id'");
$outp = "";
        if ($outp != "") {
            $outp .= ",";
        }
         $outp .= '{"id":"' .$rs_product_id["product_id"] . '"}';
 
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>