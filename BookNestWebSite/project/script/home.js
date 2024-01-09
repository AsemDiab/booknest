onload=function(){
    document.getElementById("homeButton").onclick = function () {
        location.href = "homePage.html";
    };

    document.getElementById("aboutUsButton").onclick=function(){
        location.href="#aboutUs";
    }

    document.getElementById("loginBtn").onclick = function () {
        location.href = "index.html";
    };


    document.getElementById("signBtn").onclick = function () {
        location.href = "pages/register.html";
    };
    this.document.getElementById('radio1').checked=true;

    var counter=1;
    this.setInterval(function(){
        document.getElementById('radio'+ counter).checked =true;
        counter++;
        if(counter>3) 
        counter=1;

    },3500);

}