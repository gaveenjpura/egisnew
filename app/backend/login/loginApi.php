<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$conn = new mysqli("localhost", "root", "", "egis");
$pass = $user->password;
$username=$user->username;
$result = $conn->query("SELECT username,password,user_id FROM login where username='$username' and password='$pass'");
$outp = "";
$type="";
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
	$user_id=$rs["user_id"];
	$result_buyer=$conn->query("select * from buyer where user_id='$user_id'");
	$rs_buyer=$result_buyer->fetch_array(MYSQLI_ASSOC);
	if($rs_buyer){
		$type="buyer";
	}
	else{
		$result_seller=$conn->query("select * from seller where user_id='$user_id'");
		$rs_seller=$result_seller->fetch_array(MYSQLI_ASSOC);
		if($rs_seller){
			$type="seller";
		}
		else{
			$type="buyer_and_seller";
		}
	}
    if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"username":"' . $rs["username"] . '",';
    $outp .= '"password":"' . $rs["password"] . '",';
	$outp .= '"type":"' . $type . '",';
    $outp .= '"user_id":"' . $rs["user_id"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);

?>