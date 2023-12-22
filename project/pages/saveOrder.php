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

$user_name = $_SESSION["userName"];


$sql= "SELECT * FROM `users` WHERE `userName`='".$user_name."' and `password`='".$password."'";

$result=$conn->query($sql);

session_start();



$i=0;
while ($row=$result->fetch_assoc()) {
  $_SESSION["userName"] = $row["userName"];
  $_SESSION['valide']=true;
  $i++;
    }
    echo $i;
$conn->close();


?>

