row.forEach(function(e){
    console.log('baka')
    col=e.split(',')
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


    // a.appendChild(i)
    // div.innerHTML=col[1]
    td[0].innerHTML=custmerName
    td[2].appendChild(i)
    td[1].innerText=orderStatus
    
    i.onclick=function(){
    tr.remove();
}

function openDescrptionOFOrder(){
    
};



td.forEach(e=>{
    td.onclick=openDescrptionOFOrder();
    tr.appendChild(e)
})
tableBody.appendChild(tr)



})
