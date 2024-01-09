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
session_start();


$username=  $_SESSION["userName"];
echo $username;

$stmt = $conn->prepare("INSERT INTO `ordertable` (`status`, `userName`) VALUES ('not Shiped', ?)");
$stmt->bind_param("s", $username);
$stmt->execute();


$conn->close();


?>

