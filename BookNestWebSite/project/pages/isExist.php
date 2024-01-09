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

if(isset($_POST["UserName"]) || !is_null($_POST['UserName'])){
$username= $_POST['UserName'];
$sql= "SELECT * FROM `users`  WHERE userName='$username' ";

$result=$conn->query($sql);
while ($row=$result->fetch_assoc()) {
  $data[]=$row;
  echo 1;
  
    }
    echo 0;

}
else
echo 1;
$conn->close();


?>

