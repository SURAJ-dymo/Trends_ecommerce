let menuBtn=document.getElementById("menus");
let mobile_item=document.getElementById("mobile_item");

menuBtn.addEventListener("click",function(){
    mobile_item.style.display="block"
})
let closeBtn=document.getElementById("closee");
closeBtn.addEventListener("click",function(){
    mobile_item.style.display="none"
})





let mainPage=document.getElementById("mens");
let blogPage=document.getElementById("blogTrend");
let cards1=document.getElementById("trend1");
let cards2=document.getElementById("trend2");
let cards3=document.getElementById("trend3");
let footer=document.getElementById("ft");


let shopbtn=document.getElementById("shop")
let homebtn=document.getElementById("home")
let blogbtn=document.getElementById("blog")
let aboutbtn=document.getElementById("about")
let contactbtn=document.getElementById("contact")

console.log(cards)
console.log(mainPage)

function shops(){
   
    mainPage.style.display="none";
    blogPage.style.display="none";

    cards1.style.display="block";
    cards2.style.display="block";
    cards3.style.display="block";

    shopbtn.style.color="rgb(4,138,138)"
    homebtn.style.color="black"
    blogbtn.style.color="black"
    aboutbtn.style.color="black"
    contactbtn.style.color="black"

}
function blogs(){
    mainPage.style.display="none";
    cards1.style.display="none";
    cards2.style.display="none";
    cards3.style.display="none";
    blogPage.style.display="block";

    blogbtn.style.color="rgb(4,138,138)"
    shopbtn.style.color="black"
    homebtn.style.color="black"
    aboutbtn.style.color="black"
    contactbtn.style.color="black"
   
}
function home(){
    mainPage.style.display="flex";
    cards1.style.display="block";
    cards2.style.display="block";
    cards3.style.display="block";
    blogPage.style.display="block";

    blogPage.style.color="black"
    shopbtn.style.color="black"
    homebtn.style.color="rgb(4,138,138)"
    aboutbtn.style.color="black"
    contactbtn.style.color="black"

}

function about(){
    mainPage.style.display="none";
    cards1.style.display="none";
    cards2.style.display="none";
    cards3.style.display="none";
    blogPage.style.display="none";

    blogbtn.style.color="black"
    shopbtn.style.color="black"
    homebtn.style.color="black"
    aboutbtn.style.color="rgb(4,138,138)"
    contactbtn.style.color="black"
    
}
function contact(){
    mainPage.style.display="none";
    cards1.style.display="none";
    cards2.style.display="none";
    cards3.style.display="none";
    blogPage.style.display="none";

    blogbtn.style.color="black"
    shopbtn.style.color="black"
    homebtn.style.color="black"
    aboutbtn.style.color="black"
    contactbtn.style.color="rgb(4,138,138)"
    
}
function cart(){
    alert("Sorry page is under mantainance")
}