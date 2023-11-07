const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY)
});
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navmenu");
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('open')
}