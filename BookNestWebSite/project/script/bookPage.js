
let selectedBookID=localStorage.getItem("selectedBookID")
// localStorage.removeItem("cart")
let bookPicture=document.getElementsByClassName('bookPicture');
bookPicture[0].src='../images/lastClosedDoors.png'


// let file=document.getElementById('img')
// console.log(file.files[0])
var formData = new FormData();

console.log(selectedBookID)
formData.append('Id', selectedBookID);

var xhr = new XMLHttpRequest();
xhr.open('POST', '../pages/selectBook.php', true);

xhr.onload = function () {
    if (xhr.status === 200) {
        // document.getElementById('result').innerHTML = xhr.responseText;
        datas2=JSON.parse(xhr.response);
        // datas2=xhr.response


        if(datas2!=null)
        {

            document.querySelector('#bookTitle h3').innerText=datas2['Title']
            document.getElementById('price').innerText=datas2['Price']
            
            // document.querySelector('').innerText=datas2['Title']
            document.getElementById('Auther').innerText=datas2['Auther']
            
           if(datas2['CopiesCount']>0){
            document.getElementById('isAvalible').innerText='Avalible'
            document.getElementById('isAvalible').className="avalible"
        }
            else{

                document.getElementById('isAvalible').innerText='Unavalible'
                document.getElementById('isAvalible').className="finished"

            }
            document.getElementById("desc").innerText=datas2['Description']
            console.log('../images/bookImages/ '+datas2['cover'])
            document.getElementById("bookPicture").src=('../images/bookImages/'+datas2['cover']).replace(" ","")
            
        }

    } else {
        alert('Error occurred while uploading the image. Please try again.');
    }
};

xhr.send(formData);







function addToCart(){

    let xhr=new XMLHttpRequest();
    xhr.open('POST', '../pages/bookCount.php', true);
    let formData=new FormData();
    formData.append('bookID',selectedBookID)

xhr.onload = function () {
    if (xhr.status === 200) {
        // document.getElementById('result').innerHTML = xhr.responseText;
        console.log(xhr.response)
        // datas2=JSON.parse(xhr.response);
        // datas2=xhr.response

        if(xhr.response>0)
        {

            
    let title=document.querySelector('#bookTitle h3')
    let price=document.getElementById('price')
    let x=bookPicture[0].outerHTML+','+title.innerHTML+','+price.innerHTML+',1'
    let map=new Map();
    if(localStorage.getItem("cart")!=null)
    {

        map=new Map(JSON.parse(localStorage.getItem("cart")))
    }

    
    if(map.get(selectedBookID)==undefined)
    map.set(selectedBookID,0)
map.set(selectedBookID,map.get(selectedBookID)+1)
    let mySerialMap = JSON.stringify(Array.from(map.entries()))
localStorage.setItem("cart",mySerialMap)
   
   console.log(map)


        }

    } else {
        alert('Error occurred while uploading the image. Please try again.');
    }
};

xhr.send(formData);





   
   
    // if(window.localStorage.getItem('cart')!=null)
    // window.localStorage.setItem('cart', window.localStorage.getItem('cart')+'\n'+x);
    // else
    // window.localStorage.setItem('cart', x);



    // let order=window.localStorage.getItem('cart')
    // order.
    // window.localStorage.setItem('cart',arr)
// window.localStorage.clear()
}

// document.