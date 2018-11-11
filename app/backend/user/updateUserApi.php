<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$conn = new mysqli("localhost", "root", "", "egis");
$user_id = $user->user_id;
$add_1=$user->add1;
$add_2=$user->add2;
$add_3=$user->add3;
$lat=$user->lat;
$lon=$user->lon;
$result=$conn->query("update user set add_1='$add_1',add_2='$add_2',add_3='$add_3',lat='$lat',lon='$lon' where user_id='$user_id'");
$outp = "";
$response = array("yes"=>"success", "no"=>"error");
if($result){
	if ($outp != "") {
        $outp .= ",";
    }
	$outp .= '{"response":"' . $response["yes"] . '"}';
}
else{
	if ($outp != "") {
        $outp .= ",";
    }
	$outp .= '{"response":"' . $response["no"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>