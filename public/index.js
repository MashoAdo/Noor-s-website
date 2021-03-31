const navMenu = document.getElementById("nav-menu"),
    navClose = document.getElementById("nav-close"),
    toggleMenu = document.getElementById("nav-toggle");

toggleMenu.addEventListener('click',() => {
    navMenu.classList.toggle("show")
})

navClose.addEventListener('click',() => {
    navMenu.classList.remove("show")
})


const navlink = document.querySelectorAll(".nav-link");
 

function linkAction(){
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show")
}

navlink.forEach(n => n.addEventListener("click", linkAction))