<?php

echo"
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Document</title>
    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
    <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN' crossorigin='anonymous'>  
   <link rel='stylesheet' href='css/searchPage.css'>
   <link rel='stylesheet' href='css/commonStyles.css'>
</head>
<body>
    <div class='container-fluid noPadd position-relative' id='displayer'>
        <div class='row flex-nowarp '> 
        <div class='bg-dark col-auto col-md-3 col-lg-3 min-vh-100 d-flex flex-column justify-content-between manu'>
          <div class='bg-dark '>
            <a class='d-flex text-decoration-none align-items-center'>
              <img src='../images/booknest.2jfif.jfif'><br>
            </a>
            <ul class='nav nav-pills flex-column  mt-4'>
              
      
              <li class='nav-items sideOption'>
                <a href='homePage.html' class='nav-link text-white'>
                  <i class='fs-1 fa fa-house '></i><span class='fs-4 d-none ms-2 d-sm-inline'>Home</span>
      
                </a>
              </li>
              
              <li class='nav-items sideOption'>
                <a href='cartPage.html' class='nav-link text-white'>
                  <i class='fs-1 fa fa-table-list'></i><span class='fs-4 ms-2 d-none d-sm-inline'>catagry</span>
      
                </a>
              </li>
              
              <li class='nav-items sideOption'>
                <a href='cartPage.html' class='nav-link text-white'>
                  <i class='fs-1 fa fa-cart-shopping' id='cartpage'></i><span class='fs-4 ms-2 d-none d-sm-inline'>cart</span>
      
                </a>
              </li>
              
              <li class='nav-items sideOption selectedsideOption'>
                <a href='s.php' class='nav-link text-white'>
                  <i class=' fs-1 fa fa-search'></i><span class='fs-4 ms-2 d-none d-sm-inline'>search</span>
      
                </a>
              </li>
              
              <li class='nav-items sideOption '>
                <a href='editInformation.html' class='nav-link text-white'>
                  <i class=' fs-1 fa fa-user'></i><span class='fs-4 ms-2 d-none d-sm-inline'>personal Information</span>
      
                </a>
              </li>
              
              <li class='nav-items sideOption '>
                <a href='../index.html' class='nav-link text-white'>
                  <i class='fs-1 fa  fa-sign-out-alt '></i><span class='fs-4  ms-2  d-none d-sm-inline'></span>
      
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class='col-9 noPadd position-absolute rightSide '>
            <div class='card w-100 h-100 noPadd bg-transparent border-0'>
                <div class='card-header bg-transparent  head'>
                    <div class = 'search-box'>
                        <input class = 'search-text' id='search-text' type='text' placeholder = 'Search Anything'>
                      <a href='#' class = 'search-btn'>
                        <i class='fas fa-search' id='searchButton'></i>
                      </a>
                      <a href='#' class = 'close-btn'>
                        <i class='fas fa-close' id='closeButton'></i>
                      </a>
                      </div>
                </div>


                <div class='card-body bg-transparent noPadd border-0 '>
                    <div class='card-body  container' id='container'>
                     
                       
                        

                        
                         
                </div>
                </div>
            </div>
    
    </div></div></div>

    <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js'></script>
    <script src='../script/catgory.js'></script>

    <script>
        let searchButton=document.getElementById('searchButton')
        let searchBox=document.getElementById('search-text')
        let closeButton=document.getElementById('closeButton')
        let isOpen=false;
        closeButton.style.opacity='0'

        searchButton.onclick=function(){
            if(isOpen){


              
$.ajax({
  url: 'search.php',
  type: 'POST',
 data: {STR:searchBox.value} ,
success: function(response) {
console.log(response)
datas=JSON.parse(response);
console.log(122)


// .innerHTML='
let container=document.getElementById('container')
container.innerHTML=''
for(let j=0;j<datas.length;j++){
  console.log(122)
  buildCard(datas[j]);
    // let bookCard=document.createElement('div')
    // bookCard.classList.add('bookCard')
    // bookCard.style.backgroundImage='url('../images/lastClosedDoors.png') '
    // bookCard.onclick=function(){
    //     window.location.href='../pages/bookPage.html'
    // }
    // container.appendChild(bookCard);  
}

},
error: function(error) {
console.error(error);
}
});
      
            }
            else{
                searchBox.style.width='240px'
                closeButton.style.opacity='1'
                isOpen=true
            }
        }
        closeButton.onclick=function(){
            if(isOpen){
                searchBox.style.width='0px'
                closeButton.style.opacity='0'
                isOpen=false
            }
        }
       </script>

       
    
</body>
</html>
";

?>