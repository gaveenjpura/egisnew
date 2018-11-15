<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$conn = new mysqli("localhost", "root", "", "egis");
$result = $conn->query("SELECT b.lat as blat,b.lon as blon,u.lat as ulat,u.lon as ulon from branch b, user u where u.branch_id=b.branch_id and u.user_id=45");
$outp = "";
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"blat":"' . $rs["blat"] . '",';
	 $outp .= '"blon":"' . $rs["blon"] . '",';
	  $outp .= '"ulat":"' . $rs["ulat"] . '",';
    $outp .= '"ulon":"' . $rs["ulon"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>