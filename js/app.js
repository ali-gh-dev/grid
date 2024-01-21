const app = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");

// fix app on top of the page
window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
        app.classList.add("app-fixed");
    } else {
        app.classList.remove("app-fixed");
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
