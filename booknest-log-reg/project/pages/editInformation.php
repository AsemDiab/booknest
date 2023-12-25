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


$user_name = "JohnDoe";
$password = "123456";
$url = "https://example.com";
$phone_number = "123-456-7890";
$position = "POINT(12.3456 , -78.9012)";
$lat="12.3456";
$lng= "-78.9012";

$sql= "Update `users` set  `password`='".$password."', `social`='".$url."', `phoneNumber`='".$phone_number."', `position`=Point(".$lat.", ".$lng.") WHERE `userName`='".$user_name."'";


if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


?>

