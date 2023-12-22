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


// $data=json_decode($_POST['arrayData']);

// echo$_POST['id'];

$sql="SELECT * FROM `booktype`" ;

$result=$conn->query($sql);
while ($row=$result->fetch_assoc()) {
// $str=json_encode($row);
$data[] = $row;
// echo $str;
}
echo json_encode($data);

$conn->close();


?>
