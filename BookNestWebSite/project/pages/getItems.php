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

$qty=$_POST['qty'];
$bookID=$_POST['bookID'];


$query = "SELECT * FROM `book` where `BookID`='$bookID' ";
$result = $conn->query($query);
$row=$result->fetch_assoc();
$count=$row['CopiesCount'];

$count=$count-$qty;


$query = " UPDATE `book` set `CopiesCount`='$count' where `BookID`='$bookID' ";
$conn->query($query);



$conn->close();


?>

