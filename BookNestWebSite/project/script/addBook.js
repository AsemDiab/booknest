
let addToDatabase=document.getElementById('addToDatabase')
let bookType=document.getElementById('bookType')

 let datas=[];

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
    let file=document.getElementById('imageinput')
    var formData = new FormData();

    formData.append('image', file.files[0]);
    formData.append('bookTitle', bookTitle.value);
    formData.append('Auther',Auther.value );
    formData.append('copiesNumber',copiesNumber.value );
    formData.append('price',price.value );
    formData.append('bookType',bookType.value );
    formData.append('bookDescription',bookDescription.value );
  

    
    
    if(file.files[0]!=undefined && price.value!='' && copiesNumber.value!=""){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'addBook.php', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            
        } else {
            alert('Error occurred while uploading the image. Please try again.11111111111');
        }
    };

    xhr.send(formData);
}


}

