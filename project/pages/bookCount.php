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

$bookID=$_POST['bookID'];


$query = "SELECT * FROM `book` where `BookID`='$bookID' ";
$result = $conn->query($query);
$row=$result->fetch_assoc();
$count=$row['CopiesCount'];

echo $count;



$conn->close();


?>

