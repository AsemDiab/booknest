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
$bookID=$_POST['bookID'];
$bookTitle=$_POST['bookTitle'];
$Auther=$_POST['Auther'];
$copiesNumber=$_POST['copiesNumber'];
$price=$_POST['price'];
$bookType=$_POST['bookType'];
$Descr=$_POST['bookDescription'];

// $image = $_FILES['image']['tmp_name'];
// $imageData = base64_encode(file_get_contents($image));


$stmt = $conn->prepare("UPDATE `book` SET `Title`=?,`Auther`=?,`CopiesCount`=?,`Price`=?,`Type`=?,`Description`=? WHERE `BookID`='$bookID'");
$stmt->bind_param("ssiiis", $bookTitle, $Auther, $copiesNumber, $price, $bookType, $Descr);
$stmt->execute();

// Get image URL






// if ($conn->query($sql) === TRUE) {
//   echo "New record created successfully";
// } else {
//   echo "Error: " . $sql . "<br>" . $conn->error;
// }


$conn->close();


?>

