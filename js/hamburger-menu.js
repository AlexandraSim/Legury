const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-ul");
const links = document.querySelectorAll(".nav-ul li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});