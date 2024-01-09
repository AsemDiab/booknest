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


$data=json_decode($_POST['arrayData']);
foreach ($data as $key=>$value ) {
$sql1="SELECT * from `booktype` where `TypeCode`='".((array)$value)['id']." ' ";
$result1=$conn->query($sql1);

if(mysqli_num_rows($result1)==0&&((array)$value)['prevID']==-1 ){
$sql="INSERT INTO `booktype` (`TypeCode`, `TypeNAme`) VALUES (".((array)$value)['id'] .", '". ((array)$value)['name'] ."');";
if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else 
{
  echo "Error: " . $sql . "<br>" . $conn->error;
}
}
else{


  $sql="UPDATE `booktype` SET `TypeCode`= ".((array)$value)['id'] .", `TypeNAme`= '". ((array)$value)['name'] ."' where `TypeCode`=".((array)$value)['prevID'] .";";
if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

}
// echo''. $key .''. ((array)$value)['id'] .'';
}
$conn->close();
