
let container=document.getElementById('container')
buildCard();
function buildCard(){
    let bookCard=document.createElement('div')
    bookCard.classList.add('bookCard')
    bookCard.style.backgroundImage="url('../images/lastClosedDoors.png') "
    bookCard.onclick=function(){
        window.location.href='../pages/bookPage.html'
    }
    container.appendChild(bookCard);
}
function addToNovel(book){

}
function addToManga(){

}
function addToAcadamic(){

}
function addToFanatasy(){

}
