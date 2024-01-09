function buildCard(x){
    let bookCard=document.createElement('div')
    bookCard.classList.add('bookCard')
 bookCard.style.backgroundImage="url('../images/bookImages/"+x['cover']+"')"
    bookCard.onclick=function(){
        localStorage.setItem("selectedUpdateBookID",x['BookID'])
        window.location.href='../pages/updateBookPage.html'
    }
    container.appendChild(bookCard);
}





