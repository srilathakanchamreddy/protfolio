const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navLinks = document.querySelectorAll(".nav-items");
let showCover = false;
btn.addEventListener('click', togglebtn);
function togglebtn(){
    if(!showCover){
        btn.classList.add('close');
        menu.classList.add('show');
        menuBranding.classList.add('show');
        menuNav.classList.add('show');
        navLinks.forEach(item=>item.classList.add('show'));
        showCover = true;
    }
    else{
        btn.classList.remove('close');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        menuNav.classList.remove('show');
        navLinks.forEach(item=>item.classList.remove('show'));
        showCover = false;
    }
}
