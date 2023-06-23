let nav  = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 50)
        nav.classList.add("header-scrolled");
    else nav.classList.remove("header-scrolled");
}


let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse")
navBar.forEach(function(e){
    e.addEventListner("click", function(){
        navCollapse.classList.remove("show");
    })

})
// let navbar = document.querySelectorAll(".header");
// let navFixed = document.querySelector(".header.fixing-on-scroll")
// navbar.forEach(function(e){
//     e.onscroll("click", function(){
//         navCollapse.classList.remove("show");
//     })
// })

