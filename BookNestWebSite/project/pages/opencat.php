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



$sql="SELECT * FROM `book` where `Type`='".$_POST['ID']."'";
$result=$conn->query($sql);
$data=array();
while ($row=$result->fetch_assoc()) {
// $str=json_encode($row);
$data[] = $row;
// echo $str;
}

echo json_encode($data);
// echo''. $key .''. ((array)$value)['id'] .'';

$conn->close();
