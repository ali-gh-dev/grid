const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");

// fix app on top of the page
window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }
});

// show sidebar
navBtn.addEventListener("click", function (){
    sidebar.classList.add("show-sidebar");
});


// hide sidebar
closeBtn.addEventListener("click", function (){
    sidebar.classList.remove("show-sidebar");
});

//set current year
date.innerHTML = new Date().getFullYear();
