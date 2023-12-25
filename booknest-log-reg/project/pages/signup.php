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

$user_name = "JohnDoe";
$password = "123456";
$url = "https://example.com";
$phone_number = "123-456-7890";
$position = "POINT(12.3456 , -78.9012)";
$lat="12.3456";
$lng= "-78.9012";

$sql= "INSERT INTO `users` (`userName`, `password`, `social`, `phoneNumber`, `position`) VALUES ('".$user_name."', '".$password."', '".$url."', '".$phone_number."', Point(".$lat.", ".$lng."))";


if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


?>

