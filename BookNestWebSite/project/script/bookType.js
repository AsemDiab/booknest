


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


alert("addnew row")
 
    let i=document.createElement('i')
    i.classList.add("fa")
    i.classList.add("fa-trash")
    i.classList.add("fs-2")
    let bookType=document.createElement('input')
    bookType.type='text'
    bookType.classList.add('Type')

    let bookTypeid=document.createElement('input')
    bookTypeid.type='number'
    bookTypeid.min='1'
    bookTypeid.classList.add('Typeid')

    bookType.required=''

    

    // a.appendChild(i)
    // div.innerHTML=col[1]
    td[0].appendChild(bookTypeid)
    td[2].appendChild(i)
    td[1].appendChild(bookType)
    
    i.onclick=function(){
    tr.remove();
    $.ajax({
        url: "deleteType.php",
        type: "POST",
       data: { id: bookTypeid.value },
      success: function(response) {
      console.log(response);
      },
      error: function(error) {
      console.error(error);
  }
  });
  alert('remove')
}

// function openDescrptionOFOrder(){
    
// };



td.forEach(e=>{
    e.classList.add('fs-3')
    tr.appendChild(e)
})
tableBody.appendChild(tr)



}


function addRow( TypeId , name,prevID){
    console.log(prevID)
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
    i.classList.add("fs-2")
    let bookType=document.createElement('input')
    bookType.type='text'
    bookType.value=name
    bookType.classList.add('Type')
    bookType.value=name

    let bookTypeid=document.createElement('input')
    bookTypeid.type='number'
    bookTypeid.min='1'
    bookTypeid.classList.add('Typeid')
    bookTypeid.value=TypeId
    bookType.required=''

    

    // a.appendChild(i)
    // div.innerHTML=col[1]
    td[0].appendChild(bookTypeid)
    td[2].appendChild(i)
    td[1].appendChild(bookType)
    
    i.onclick=function(){
        console.log(prevID)
        prevID.splice(i)
    tr.remove();
    $.ajax({
        url: "deleteType.php",
        type: "POST",
       data: { id: bookTypeid.value },
      success: function(response) {
      console.log(response);
      },
      error: function(error) {
      console.error(error);
  }
  });
  alert('remov1e')
}

// function openDescrptionOFOrder(){
    
// };


console.log("pizzaaaaaaaaaaaa")
td.forEach(e=>{
    console.log('baka')
    e.classList.add('fs-3')
    tr.appendChild(e)
})
tableBody.appendChild(tr)



}



