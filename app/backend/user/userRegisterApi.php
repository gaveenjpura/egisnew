<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$user = json_decode(file_get_contents("php://input"));
$age = array( "Ben" => "37", "Joe" => "43");
$fname = $user->fname;
$lname = $user->lname;
$type = $user->type;
$dob = $user->dob;
$phone_num = $user->phone_num;
$email = $user->email;
$add1 = $user->add1;
$add2 = $user->add2;
$add3 = $user->add3;
$lat = $user->lat;
$lon = $user->lon;
$username = $user->username;
$password = $user->password;
$image=$user->image;
$image = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $image));
$conn = new mysqli("localhost", "root", "", "egis");
$result_user_table = $conn->query("INSERT INTO user (fname,lname,user_type,dob,phone_num,email,add_1,add_2,add_3,lat,lon) values('$fname','$lname','$type','$dob','$phone_num','$email','$add1','$add2','$add3','$lat','$lon')");
$result_user_id = $conn->query("SELECT user_id FROM user order by user_id DESC limit 1");
$rs = $result_user_id->fetch_array(MYSQLI_ASSOC);
$user_id = $rs["user_id"];
if ($result_user_table) {
    $result_login_table = $conn->query("INSERT INTO login (username,password,user_id) values('$username','$password','$user_id')");
}
$img_location='../profile_photos/'.$user_id.'.jpg';
file_put_contents($img_location, $image);
$result_update_user=$conn->query("update user set photo='$img_location' where user_id='$user_id'");
$outp = "";
if ($result_login_table) {
    $result_user_id = $conn->query("SELECT user_id FROM user order by user_id DESC limit 1");
    while ($rs = $result_user_id->fetch_array(MYSQLI_ASSOC)) {
        if ($outp != "") {
            $outp .= ",";
        }
        $outp .= '{"username":"' . $rs["user_id"] . '"}';
    }
} else {
    $result_user_id = $conn->query("SELECT user_id FROM user order by user_id DESC limit 1");
    while ($rs = $result_user_id->fetch_array(MYSQLI_ASSOC)) {
        if ($outp != "") {
            $outp .= ",";
        }
        $outp .= '{"username":"' . $rs["user_id"] . '"}';
    }
}
$outp = '{"records":[' . $outp . ']}';
$conn->close();
echo($outp);
?>