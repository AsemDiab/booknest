<?php


$servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "firstdb";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


// $data=json_decode($_POST['Data']);
// $data="../images/fly.jpg";
// $fp=fopen("images\\fly.jpg",'r');
// $pic = base64_encode($data);

$image = $_FILES['image']['tmp_name'];
$imageData = base64_encode(file_get_contents($image));


$sql="INSERT INTO `images` (`imageID`, `imageContant`) VALUES (NULL,'$imageData');";
if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();
