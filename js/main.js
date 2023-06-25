let nav  = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 50)
        nav.classList.add("header-scrolled");
    else nav.classList.remove("header-scrolled");
}

let abthead  = document.querySelector(".about-tag");
window.screen = function(){
    if(document.documentElement.screenWidth > 400)
        abthead.classList.add("abthead");
    else abthead.classList.remove("abthead");
}


let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse")
navBar.forEach(function(e){
    e.addEventListner("click", function(){
        navCollapse.classList.remove("show");
    })

})


