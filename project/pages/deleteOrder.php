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

$orderID=$_POST['orderID'];


$sql= "SELECT * FROM `ordertable` WHERE `ORDERid`='$orderID'";

$result=$conn->query($sql);



while ($row=$result->fetch_assoc()) {
  $sql="UPDATE  `book` set book.CopiesCount=book.CopiesCount+1 WHERE book.BookID=15";
  if($conn->query($sql)==true ){
    echo "new row update";
  }

}






$sql= "DELETE * FROM `ordertable` WHERE `ORDERid`='$orderID'";

echo $conn->query($sql);

$result=$conn->query($sql);



while ($row=$result->fetch_assoc()) {
  $data[]=$row;
    }



$conn->close();


?>

