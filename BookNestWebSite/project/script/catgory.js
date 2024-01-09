
let container=document.getElementById('container')
// buildCard();
function buildCard(x){
    let bookCard=document.createElement('div')
    bookCard.classList.add('bookCard')
  
    bookCard.style.backgroundImage="url('../images/bookImages/"+x['cover']+"')"
    // "url('../images/bookImages/ 657cb0529b61f.tmp')"
    bookCard.onclick=function(){
        localStorage.setItem("selectedBookID",x['BookID'])
        window.location.href='../pages/bookPage.html'
    }
    container.appendChild(bookCard);
}


function buildCard1(x){
    let bookCard=document.createElement('div')
    bookCard.classList.add('bookCard')
 bookCard.style.backgroundImage="url('../images/bookImages/ "+x['cover']+"')"
    bookCard.onclick=function(){
        localStorage.setItem("selectedBookID",x['BookID'])
        window.location.href='../pages/bookPage.html'
    }
    container.appendChild(bookCard);
}
