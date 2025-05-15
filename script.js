let section=document.querySelectorAll("section");
let active=document.querySelectorAll("header nav a");

const manuIcon=document.querySelector("#manu-icon");
const nav=document.querySelector(".navigation");

    manuIcon.addEventListener("click", ()=>{
        nav.classList.toggle("open");
        
    })
