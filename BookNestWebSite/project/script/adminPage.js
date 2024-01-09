let tbody=document.getElementById('tbody')

// document.body.onload=function(){



    var xhr = new XMLHttpRequest();
xhr.open('POST', '../pages/selectORders.php', true);
xhr.onload=function(){
    if(xhr.status==200){



    let row=JSON.parse(xhr.response)


    row.forEach(function(e){
       
        let tr=document.createElement('tr')
        tr.classList.add('order')
        let td=
     [
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td')]
     
        let a=document.createElement('a')
        let i=document.createElement('i')
        let div=document.createElement('div')
        i.classList.add("fa")
        i.classList.add("fa-trash")
        i.classList.add("fs-1")
    
    
  
        td[0].innerHTML=e['userName']
        td[2].appendChild(i)
        td[1].innerText=e['status']
        
        i.onclick=function(){
        tr.remove();

        let deleteRequest=new XMLHttpRequest()
        deleteRequest.open("Post","../pages/deleteOrder.php",true)

        deleteRequest.onload=function(){
            if(deleteRequest.status==200){
            }
            else{

            }

            this.send({'orderID': e['orderID']})
        }


    }
    
    function openDescrptionOFOrder(){
        localStorage.setItem('selectedOrder',e['orderID'])
        window.location.href='../pages/OrderDetails.html'

    };
    
    
    
    td.forEach(e=>{
        e.onclick=function(){
            openDescrptionOFOrder();
        };
        e.classList.add('fs-3')
        e.align='center'
        tr.appendChild(e)
    })
    tbody.appendChild(tr)
    
    
    
    })


}
else{
    alert('Error occurred while uploading the image. Please try again.');
}
}
xhr.send("x")


// }
