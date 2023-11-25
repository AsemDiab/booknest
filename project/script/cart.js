let tableBody=document.querySelector('tbody');
let str=window.localStorage.getItem('cart');
let row=str.split('\n')
let col=row[0].split(',')
console.log(row.length)
 row.forEach(function(e){
        console.log('baka')
        col=e.split(',')
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
        input.max='3'
        let a=document.createElement('a')
        let i=document.createElement('i')
        let div=document.createElement('div')
        i.classList.add("fa")
        i.classList.add("fa-trash")
        i.classList.add("fs-1")
        input.classList.add('in')

        a.appendChild(i)
        div.innerHTML=col[1]
        td[0].appendChild(a);
        div.classList.add('fs-5')
        div.classList.add('text-warp')
        td[2].appendChild(div)
        td[3].classList.add('price')
        td[3].innerHTML=col[2]+'$'
        td[4].appendChild(input)
        input.value=col[3]
        td[5].classList.add('totalCost')
        td[5].innerHTML=col[2]*col[3]+'$'
        td[5].classList.add('fs-6')
        td[1].innerHTML=col[0]
        i.onclick=function(){
        tr.remove();
    }

    input.onkeyup=function (){
        td[5].innerHTML=parseInt(input.value)*parseFloat(col[2])+'$';
        calTotalCost()
    }
    input.onkeydown=function (){
        console.log(input.value)
        td[5].innerHTML=parseInt(input.value)*parseFloat(col[2])+'$';
        console.log(td[5].innerHTML)
        console.log(td[5].innerHTML==undefined)
        if(td[5].innerHTML==undefined)
        td[5].innerHTML='0$'
    calTotalCost()
    }

    td.forEach(e=>{
        tr.appendChild(e)
    })
    tableBody.appendChild(tr)
  


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