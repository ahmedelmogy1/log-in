//^get elment
let logOut=document.querySelector(".logOut")
let nameHome=document.querySelector(".nameHome")
//^ variable▐◘
let emails=JSON.parse(localStorage.getItem("emails"))
//^ Event
logOut.addEventListener("click",()=>{
    location.href="/log-in/index.html";
})

nameHome.innerHTML=emails[emails.length-1].userName

if(window.location.pathname ==="/pageHome.html"){
    nameHome.innerHTML=emails[emails.length-1].userName
}

