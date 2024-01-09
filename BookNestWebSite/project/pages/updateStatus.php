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

$status=$_POST['status'];
$orderID=$_POST['orderID'];

$sql= " UPDATE  `ordertable` SET `status`='$status' where `orderID`='$orderID'";
// echo $sql;
if($conn->query($sql)==true)
{

    echo $status;
}
else{
    echo "";
}




$conn->close();


?>

