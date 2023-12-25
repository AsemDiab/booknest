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

$bookTitle=$_POST['bookTitle'];
$Auther=$_POST['Auther'];
$copiesNumber=$_POST['copiesNumber'];
$price=$_POST['price'];
$bookType=$_POST['bookType'];
$Descr=$_POST['bookDescription'];

// $image = $_FILES['image']['tmp_name'];
// $imageData = base64_encode(file_get_contents($image));



$image = $_FILES['image']['tmp_name'];

$filename = uniqid().'.' . pathinfo($image, PATHINFO_EXTENSION);

$url =  "..\images\bookImages\ ".$filename;


// Validate image
if (!is_uploaded_file($image) || !getimagesize($image)) {
  die('Invalid image');
}

// Generate unique filename
$filename = uniqid().'.' . pathinfo($image, PATHINFO_EXTENSION);

// Store image
if (!move_uploaded_file($image,  $url)) {
  die('Error uploading image');
}
$stmt = $conn->prepare("INSERT INTO `book` (`Title`, `Auther`, `CopiesCount`, `Price`, `Type`, `cover`, `Description`) VALUES (?, ?, ?, ?, ?, '".$filename."', ?)");
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

