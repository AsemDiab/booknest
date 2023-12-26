let tableBody=document.querySelector('tbody');
// let str=window.localStorage.getItem('cart');
// let row=str.split('\n')
// let col=row[0].split(',')
// console.log(row.length)
alert("hello welocme bye")

let map; 
 map=new Map(JSON.parse(localStorage.getItem("cart")))
console.log(Array.from(map)[0][1])
let row=Array.from(map);
 row.forEach(function(e){
let formData=new FormData();
    formData.append('Id', e[0]);


    var xhr = new XMLHttpRequest();
xhr.open('POST', '../pages/selectBook.php', true);

xhr.onload = function () {
    if (xhr.status === 200) {
        // document.getElementById('result').innerHTML = xhr.responseText;
        console.log(xhr.response)
        datas2=JSON.parse(xhr.response);
        // datas2=xhr.response

        console.log(datas2)

        if(datas2!=null)
        {

            console.log('baka')
            // col=e.split(',')
            let tr=document.createElement('tr')
            tr.classList.add('order')
            let td=
         [
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td')]
    
    
            let input=document.createElement('input')
            input.type='number'
            input.min='1'
            input.max=datas2["CopiesCount"]
            let a=document.createElement('a')
            let i=document.createElement('i')
            let div=document.createElement('div')
            i.classList.add("fa")
            i.classList.add("fa-trash")
            i.classList.add("fs-1")
            input.classList.add('in')
    
            a.appendChild(i)
            div.innerHTML=datas2['Title']
            td[0].appendChild(a);
            div.classList.add('fs-5')
            div.classList.add('text-warp')
            td[2].appendChild(div)
            td[3].classList.add('price')
            td[3].innerHTML=datas2['Price']+'$'
            td[4].appendChild(input)
            input.value=e[1]
            td[5].classList.add('totalCost')
            td[5].innerHTML=datas2['Price']*e[1]+'$'
            td[5].classList.add('fs-6')
            let url='../images/bookImages/ '+datas2['cover'];
            td[1].innerHTML="<img src='" +url+ "' class='  productImage fs-6'>"
            i.onclick=function(){
            tr.remove();
        }

       
    
        // input.onkeyup=function (){
        //     td[5].innerHTML=parseInt(input.value)*parseFloat(datas2['Price'])+'$';
        //     calTotalCost()
        // }
        input.onchange=function (){
           
            console.log(datas2['CopiesCount'])
          
            console.log(input.value)
            td[5].innerHTML=parseInt(input.value)*parseFloat(datas2['Price'])+'$';
            console.log(td[5].innerHTML)
            console.log("here")
            console.log(input.value>datas2['copiesCount'])
            if((input.value-datas2['copiesCount'])>0){
               
            input.value=datas2['copiesCount'];}
         if(input.value<1)
             input.value=1;
            console.log(td[5].innerHTML==undefined)
            if(td[5].innerHTML==undefined)
            td[5].innerHTML='0$'
            map.set(datas2['BookID'],input.value)
            let mySerialMap = JSON.stringify(Array.from(map.entries()))
            localStorage.setItem("cart",mySerialMap)
        calTotalCost()
        }
    
        td.forEach(e=>{
            tr.appendChild(e)
        })
        tableBody.appendChild(tr)
      
    

        }
        calTotalCost()

    } else {
        alert('Error occurred while uploading the image. Please try again.');
    }
};

xhr.send(formData);


    



    })

    function calTotalCost(){

    
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
    calTotalCost()

   function  addOrder(){
     let contants=Array.from(new Map(map))
     console.log(contants.length)
    if(contants.length!=0){
        for(let i=0;i<contants.length;i++)
        console.log(contants[i][0]+" : "+contants[i][1]+"\n")
     let formData= new FormData()
     formData.append('n',12)
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../pages/createOrder.php', true);
     
     xhr.onload = function () {
         if (xhr.status === 200) {
            contants.forEach( e =>{
           
            let formData1= new FormData()
            formData1.append('qty',e[1])
            formData1.append('bookID',e[0])
            var xhr1 = new XMLHttpRequest();
            xhr1.open('POST', '../pages/insertItems.php', true);
            
            xhr1.onload = function () {
                if (xhr1.status === 200) {
                    console.log(xhr1.response)


                    var xhr2 = new XMLHttpRequest();
                    xhr2.open('POST', '../pages/getItems.php', true);
                    
                    xhr2.onload = function () {
                        if (xhr.status === 200) {
                            console.log(xhr.response)
                            alert("patata")
                           
                        } else {
                            alert('Error occurred while uploading the image. Please try again.');
                        }
                    };
                    
                    
                    xhr2.send(formData1);

                    localStorage.removeItem('cart')

                    // window.location="../pages/cartPage.html"









                   
                } else {
                    alert('Error occurred while uploading the image. Please try again.');
                }
            };
            
            
            xhr1.send(formData1);
        })
         } else {
             alert('Error occurred while uploading the image. Please try again.');
         }
     };

     
     xhr.send(formData);
     
     console.log()
    }


    }