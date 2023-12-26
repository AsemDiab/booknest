<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "booknest";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$columns = ["userName", "password", "social", "phoneNumber", "position"];

$user_name = $_POST['UserName'];
// echo $user_name;
$password1 =sha1($_POST["Password"]);
// echo $password;
$url = "https://example.com";
$phone_number = "123-456-7890";
$position = "POINT(12.3456 , -78.9012)";
$lat="12.3456";
$lng= "-78.9012";

$sql= "SELECT * FROM `users` WHERE `userName`='".$user_name."' and `password`='".$password1."'";

$result=$conn->query($sql);

session_start();



$i=0;
while ($row=$result->fetch_assoc()) {
  $_SESSION["userName"] = $row["userName"];
  $_SESSION['valide']=true;
  $i++;
    }
    echo $i;
$conn->close();


?>

