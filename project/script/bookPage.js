

let bookPicture=document.getElementsByClassName('bookPicture');
bookPicture[0].src='../images/lastClosedDoors.png'
// window.localStorage.clear()
// addToCart()
function addToCart(){
    let title=document.querySelector('#bookTitle h3')
    let price=document.getElementById('price')
    let x=bookPicture[0].outerHTML+','+title.innerHTML+','+price.innerHTML+',1'
    if(window.localStorage.getItem('cart')!=null)
    window.localStorage.setItem('cart', window.localStorage.getItem('cart')+'\n'+x);
    else
    window.localStorage.setItem('cart', x);

    // let order=window.localStorage.getItem('cart')
    // order.
    // window.localStorage.setItem('cart',arr)
// window.localStorage.clear()
}