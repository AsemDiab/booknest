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
// $sql= "SELECT * FROM `orderitems`,`book` WHERE book.BookID = orderitems.bookID   and orderID='$orderID' ";
$sql1="SELECT ordertable.orderID,orderitems.quntaty,book.BookID,book.cover,users.userName ,book.Title,book.Price , ordertable.status ,ST_X(position) AS longitude, ST_Y(position) AS latitude,users.social,users.phoneNumber FROM `orderitems`,`ordertable`,`users` ,`book` WHERE book.BookID = orderitems.bookID and ordertable.userName=users.userName and ordertable.orderID=orderitems.orderID   and ordertable.orderID= $orderID ";
// $result=$conn->query($sql);



// while ($row=$result->fetch_assoc()) {
//   $data[]=$row;
  
//     }
//     // echo json_encode($data);



// echo $sql1;
$result1=$conn->query($sql1);

  while( $row=$result1->fetch_assoc() )
  $data1[]=$row;

   
    echo json_encode($data1);




    // echo $result->num_rows;

$conn->close();


?>

