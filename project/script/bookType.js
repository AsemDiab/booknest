
//database all value
// row.forEach(function(e){
//     console.log('baka')
//     col=e.split(',')}
// )


function addRow(){
    let tableBody=document.querySelector('tbody');
    let tr=document.createElement('tr')
    tr.style.textAlign='center'
    let td=
 [
    document.createElement('td'),
    document.createElement('td'),
    document.createElement('td')
]
 
    let i=document.createElement('i')
    i.classList.add("fa")
    i.classList.add("fa-trash")
    i.classList.add("fs-1")
    let bookType=document.createElement('input')
    bookType.type='text'
    bookType.id='Type'
    let bookTypeid=document.createElement('input')
    bookTypeid.type='number'
    bookTypeid.min='1'
    bookTypeid.id='Type'
    bookType.required=''

    

    // a.appendChild(i)
    // div.innerHTML=col[1]
    td[0].appendChild(bookTypeid)
    td[2].appendChild(i)
    td[1].appendChild(bookType)
    
    i.onclick=function(){
    tr.remove();
}

// function openDescrptionOFOrder(){
    
// };



td.forEach(e=>{
    console.log('baka')
    e.classList.add('fs-3')
    tr.appendChild(e)
})
tableBody.appendChild(tr)



}


// document.getElementById('updateToDatabase').onclick=function(){
//     //database save
//     let i=0
// }
