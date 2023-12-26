


let globallatitude;
      let globallongitude;
      console.log("hello , ithot its work-1")

        function getLocation() {
            console.log("hello , ithot its work0")

            if (navigator.geolocation) {
                console.log("hello , ithot its work1")

                navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
                document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            
            // document.getElementById("location").innerHTML = "Your location: " + latitude + ", " + longitude;
            globallatitude=latitude;
            globallongitude=longitude;
            console.log(globallatitude+","+globallongitude)

        }

        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    // document.getElementById("location").innerHTML =
                    alert( "User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    // document.getElementById("location").innerHTML =
                    alert( "Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    // document.getElementById("location").innerHTML =
                    alert( "The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    // document.getElementById("location").innerHTML =
                    alert( "An unknown error occurred.");
                    break;
            }
        }

function updateInformation(){
    console.log("hello , ithot its work2")

let formData=new FormData();

let social_Input=document.getElementById('social_Input').value
let phoneNumber=document.getElementById('phoneNumber').value
let oldpassward=document.getElementById('oldpassword').value
let password=document.getElementById('password').value

console.log( "point("+globallatitude +","+globallongitude+")")

formData.append('social_Input', social_Input);
formData.append('phoneNumber', phoneNumber);
formData.append('oldpassword', oldpassward);
formData.append('password', password);
formData.append('globallongitude', globallongitude);
formData.append('globallatitude', globallatitude);



var xhr = new XMLHttpRequest();
xhr.open('POST', '../pages/editInformation.php', true);

xhr.onload = function () {
    if (xhr.status === 200) {
        console.log(xhr.response)

        console.log("hello , ithot its work3")
   

    } else {
        alert('Error occurred while uploading the image. Please try again.');
    }
};

xhr.send(formData);




}
