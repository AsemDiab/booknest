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
$password = $_POST['password'];
$url = $_POST['social_Input'];
$phone_number = $_POST['phoneNumber'];
$position = "POINT(12.3456 , -78.9012)";
$lat="12.3456";
$lng= "-78.9012";

$sql= "INSERT INTO `users` (`userName`, `password`, `social`, `phoneNumber`, `position`) VALUES ('".$user_name."', '".sha1($password)."', '".$url."', '".$phone_number."', Point(".$lat.", ".$lng."))";


if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


?>

