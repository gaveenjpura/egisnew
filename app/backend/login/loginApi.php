<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$conn = new mysqli("localhost", "root", "", "egis");
$pass = $user->password;
$result = $conn->query("SELECT username,password FROM login where password='$pass'");
$outp = "";
while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"username":"' . $rs["username"] . '",';
    $outp .= '"password":"' . $rs["password"] . '"}';
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);

?>