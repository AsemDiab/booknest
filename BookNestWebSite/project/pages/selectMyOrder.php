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
$user_name=$_SESSION['userName'];

$sql= "SELECT * FROM `ordertable`  WHERE status='not shiped' and userName='$user_name' ";

$result=$conn->query($sql);
while ($row=$result->fetch_assoc()) {
  $data[]=$row;
  
    }


    $sql= "SELECT * FROM `ordertable`  WHERE status='shiped'  and userName='$user_name' ";

$result=$conn->query($sql);

while ($row=$result->fetch_assoc()) {
  $data[]=$row;
  
    }
    $sql= "SELECT * FROM `ordertable`  WHERE status='done'  and userName='$user_name'";

$result=$conn->query($sql);

while ($row=$result->fetch_assoc()) {
  $data[]=$row;
  
    }
    echo json_encode($data);
$conn->close();


?>

