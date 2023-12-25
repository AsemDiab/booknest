
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

// echo json_decode($_POST['STR']);
$sql="SELECT * FROM book WHERE `Auther` LIKE '%".json_decode($_POST['STR'])."%'  OR `Title` LIKE '%".$_POST['STR']."%' OR `Description` LIKE '%".$_POST['STR']."%';";
$result=$conn->query($sql);
// $data=array();
while ($row=$result->fetch_assoc()) {
// $str=json_encode($row);
$data[] = $row;
echo json_decode($_POST['STR']);
// echo $str;
}

echo json_encode($data);
// echo''. $key .''. ((array)$value)['id'] .'';

$conn->close();
