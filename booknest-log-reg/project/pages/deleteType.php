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


$data=json_decode($_POST['arrayData']);

echo$_POST['id'];

$sql="DELETE FROM `booktype` WHERE `booktype`.`TypeCode` = ".$_POST['id'];
if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
// echo''. $key .''. ((array)$value)['id'] .'';
$conn->close();
