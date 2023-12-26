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


$query = "SELECT * FROM `ordertable` ORDER BY orderID DESC LIMIT 1; ";
$result = $conn->query($query);
// echo $result;
$row=$result->fetch_assoc();
echo $result->num_rows;
$orderID=$row['orderID']; 

// $orderID=4;

$qty=$_POST['qty'];
$bookID=$_POST['bookID'];


$stmt = $conn->prepare("INSERT INTO `orderitems` (`orderID`, `bookID`, `quntaty`) VALUES (?, ?, ?)");
$stmt->bind_param("iii", $orderID,$bookID,$qty);
$stmt->execute();


$conn->close();



?>

