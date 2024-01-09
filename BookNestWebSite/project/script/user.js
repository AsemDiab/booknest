//  https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js

  let  userName;
  let password;
  let valide;
  console.log("ooooooooo");

    function constructor(_userName,_password) {
       
        userName=_userName;
        password=_password;
        valid=false;

        var formData = new FormData();
        formData.append('UserName', userName);
        formData.append('Password', password);

    

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '.\\pages\\sign.php', true);

    xhr.onload = function () {
        if (xhr.status === 200) {

            if(xhr.response==1)valide=true;
    
          
            if(valide==true) 
            window.location.href="pages/homePage.html"
            else 
            alert("user name or password is wrong")
        } else {
            alert('Error occurred while uploading the image. Please try again.11111111111');
        }
    };

    xhr.send(formData);





      }

      // export function getUserNAme() {
      //   return userName;
      // }

      //  export function getPassword(){
      //   return password;
      // }
    



      //   export function getvalide(){
      //     return valide;
      //   }

        
        function si(){
            
          let UserName=document.getElementById('UserName')
          let password=document.getElementById('Password')
          constructor(UserName.value,password.value)
          
          } 