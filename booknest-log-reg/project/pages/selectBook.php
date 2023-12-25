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



$sql="SELECT * FROM `book` where `BookID`='".$_POST['Id']."'";
$result=$conn->query($sql);
$data=array();
// while () {
// // $str=json_encode($row);
// $data[] = $row;
// // echo $str;
// }

$row=$result->fetch_assoc();

echo json_encode($row);
// echo''. $key .''. ((array)$value)['id'] .'';

$conn->close();
