 let tbody=document.getElementById('tbody')
 let form=new FormData()
 form.append('orderID',localStorage.getItem('selectedOrder'))

 console.log(localStorage.getItem('selectedOrder'))
console.log("scripting")

let status2=document.getElementById('status')
let selectOrdersRequest= new XMLHttpRequest();
selectOrdersRequest.open("POST","../pages/selectOrder.php",true)
console.log("scripting")
selectOrdersRequest.onload=function(){
    let contantDiv=document.getElementById('contantDiv')
    if(selectOrdersRequest.status==200){
        console.log(selectOrdersRequest.response)
        let data=JSON.parse(selectOrdersRequest.response)
        data.forEach(element => {

            tbody.innerHTML+='  <tr class="order">'+
            '<td><img src="../images/bookImages/'+element['cover']+'" class="  productImage"></td>'+
            '<td> <span class="fs-6">'+element['Title']+'</span></td>'+
            '<td class="price fs-6">'+element['Price']+'$</td>'+
            '<td><span class="fs-6">'+element['quntaty']+'</span></td>'+
            '<td class="fs-6 totalCost"> '+element['quntaty']*element['Price']+'$</td></tr>'

            status2.innerText=element['status']

            contantDiv.innerHTML="<span style='font-size: large;' >"+element['userName']+"</span><br><span style='font-size: large;'>"+element['phoneNumber']+"</span><br><a href='"+element['social']+"' style='font-size: large;'> social</a><br>"+
            "<span style='font-size: large;'>latuide &Tab; "+element['latitude']+"</span> <br> <span style='font-size: large;'>longitude &Tab; "+element['longitude']+"</span>"
     
            
        });


        let totalcost=document.getElementById('cost')
        let arr=document.querySelectorAll('.totalCost')
        totalcost.innerHTML='0'
        arr.forEach(function(e){
            console.log('nani')
            let s=e.innerHTML
            s.replace('$','')
            totalcost.innerHTML=parseFloat(totalcost.innerHTML)+parseFloat(s)
        })

       }
    else{
        console.log("REQUEST FAILED")
    }
}


status2.onclick=function(){

    let form1=new FormData()
    form1.append('orderID',localStorage.getItem('selectedOrder'))
    // form1.append('status',"done")
    let updateStatusRequest=new XMLHttpRequest()
    updateStatusRequest.open("POST","../pages/updateStatus.php")
    updateStatusRequest.onload=function(){
        if(updateStatusRequest.status==200){
            console.log(updateStatusRequest.response)
            // if(updateStatusRequest.responseType!="")
            status2.innerText=updateStatusRequest.response;
        }
        else{
            console.log("there an error in request ")
        }
    }
    console.log("shiped".length)
    console.log(status2.innerText)
    console.log(status2.innerText.charCodeAt(6))

    if(status2.innerText=="not shiped")
    {
        console.log("1")
        form1.append("status","shiped")
        updateStatusRequest.send(form1)
    } else if(status2.innerText.includes("shiped")){
        console.log("2")
        form1.append("status","done")
        updateStatusRequest.send(form1)
    }
    


}




selectOrdersRequest.send(form)




function openMsg(){

    document.getElementsByClassName("closed")[0].style.visibility="visible"
    console.log(1111)
    }
    function close1(){
    document.getElementsByClassName("closed")[0].style.visibility="hidden"
    console.log(22222)
    
    }
