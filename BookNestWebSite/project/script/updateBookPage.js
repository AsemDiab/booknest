
let addToDatabase=document.getElementById('addToDatabase')
let bookType=document.getElementById('bookType')

 let datas=[];

 document.body.onload=function(){
 var formData = new FormData();
if(localStorage.getItem('selectedUpdateBookID')==null)
window.location="../pages/updateBook.html"
formData.append('Id',  localStorage.getItem('selectedUpdateBookID'));

var xhr = new XMLHttpRequest();
xhr.open('POST', '../pages/selectBook.php', true);

xhr.onload = function () {
    if (xhr.status === 200) {
        // document.getElementById('result').innerHTML = xhr.responseText;
        datas2=JSON.parse(xhr.response);
        // datas2=xhr.response


        if(datas2!=null)
        {

            document.querySelector('#bookTitle').value=datas2['Title']
            document.getElementById('price').value=datas2['Price']
            
            // document.querySelector('').innerText=datas2['Title']
            document.getElementById('Auther').value=datas2['Auther']
            
            document.getElementById('copiesNumber').value=datas2['CopiesCount']

            document.getElementById("bookDescription").innerText=datas2['Description']
            document.getElementById("bookPicture").src='../images/bookImages/'+datas2['cover']
            bookType.value=datas2['Type']
            
        }

    } else {
        alert('Error occurred while uploading the image. Please try again.');
    }
};

xhr.send(formData);
 }

$.ajax({
   url: "selectsTyps.php",
   type: "POST",
  data: {} ,
 success: function(response) {


 datas=JSON.parse(response);

bookType.innerHTML=""
 for(let i=0;i<datas.length;i++){
    bookType.innerHTML+=" <option value="+datas[i]['TypeCode']+">"+datas[i]['TypeNAme']+"</option>"
}

 },
 error: function(error) {
 console.error(error);
}
});




addToDatabase.onclick=function(){
    // imageinput bookTitle Auther  copiesNumber  price bookType bookDescription
    let bookDescription =document.getElementById('bookDescription')
    let bookTitle=document.getElementById('bookTitle')
    let Auther=document.getElementById('Auther')
    let copiesNumber=document.getElementById('copiesNumber')
    let price=document.getElementById('price')
    let bookType=document.getElementById('bookType')
    var formData = new FormData();

    // formData.append('image', file.files[0]);
    formData.append('bookID',localStorage.getItem('selectedUpdateBookID'))
    formData.append('bookTitle', bookTitle.value);
    formData.append('Auther',Auther.value );
    formData.append('copiesNumber',copiesNumber.value );
    formData.append('price',price.value );
    formData.append('bookType',bookType.value );
    formData.append('bookDescription',bookDescription.value );
  

    
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'updateBook.php', true);

    xhr.onload = function () {
        if (xhr.status === 200) {

            alert('the book Data update successfully')
            
        } else {
            alert('Error occurred while uploading the image. Please try again.11111111111');
        }
    };

    xhr.send(formData);
}

