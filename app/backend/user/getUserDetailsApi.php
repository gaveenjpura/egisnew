<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$conn = new mysqli("localhost", "root", "", "egis");
$user_id=$user->user_id;
$result = $conn->query("SELECT * from user where user_id='$user_id'");
$outp = "";
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"user_id":"' . $rs["user_id"] . '",';
    $outp .= '"fname":"' . $rs["fname"] . '",';
    $outp .= '"lname":"' . $rs["lname"] . '",';
    $outp .= '"user_type":"' . $rs["user_type"] . '",';
    $outp .= '"dob":"' . $rs["dob"] . '",';
    $outp .= '"phone_num":"' . $rs["phone_num"] . '",';
    $outp .= '"email":"' . $rs["email"] . '",';
    $outp .= '"photo":"' . $rs["photo"] . '",';
    $outp .= '"add_1":"' . $rs["add_1"] . '",';
    $outp .= '"add_2":"' . $rs["add_2"] . '",';
    $outp .= '"add_3":"' . $rs["add_3"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>