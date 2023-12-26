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



session_start();
$user_name = $_SESSION['userName'] ;

$sql1= "SELECT * FROM `users` WHERE `userName`='".$user_name."'";

$result=$conn->query($sql1);
if ($result->num_rows < 0)
die("Connection failed: " . $conn->connect_error); 


$row=$result->fetch_assoc();

$oldpassword = $_POST['oldpassword'];



$newpassword = $_POST['password'];
$url = $_POST['social_Input'];

if($oldpassword!=$row['password']||empty(trim($newpassword))||empty(trim($newpassword))){

  $newpassword=$row['password'];

}

if(empty(trim($url)) || isset($url) ){
  $url=$row['social'];
}
$phone_number = $_POST['phoneNumber'];
if(empty($phone_number) ){
  $phone_number = $row['phoneNumber'];
}
$lat=$_POST['globallatitude'];
$lng= $_POST['globallongitude'];



if(empty($lat) || empty($lng) || !isset($lat) || !isset($lng) || $lng=="undefined" || !$lat  ){


  $position=$row['position'];
  $sql= "Update `users` set  `password`='".$newpassword."', `social`='".$url."', `phoneNumber`='".$phone_number."', `position`='$position' WHERE `userName`='".$user_name."'";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
}
else{
  echo $lng ."". $lat;

  $sql= "Update `users` set  `password`='".$newpassword."', `social`='".$url."', `phoneNumber`='".$phone_number."', `position`=Point(".$lat.", ".$lng.") WHERE `userName`='".$user_name."'";


if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
}



$conn->close();


?>

