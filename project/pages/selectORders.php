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


$sql= "SELECT * FROM `ordertable`  WHERE status='not shiped' ";

$result=$conn->query($sql);
while ($row=$result->fetch_assoc()) {
  $data[]=$row;
  
    }


    $sql= "SELECT * FROM `ordertable`  WHERE status='shiped' ";

$result=$conn->query($sql);

while ($row=$result->fetch_assoc()) {
  $data[]=$row;
  
    }
    $sql= "SELECT * FROM `ordertable`  WHERE status='done' ";

$result=$conn->query($sql);

while ($row=$result->fetch_assoc()) {
  $data[]=$row;
  
    }
    echo json_encode($data);
$conn->close();


?>

