//nav bar style
const menu = document.querySelector('.hamburger-icon');
const close = document.querySelector('.close-icon');
const navBar = document.querySelector('.nav-item');

//navbar open function
let openNavbar = () =>{
    if(navBar.classList.contains('show-navbar')){
        navBar.classList.remove('show-navbar');
    }else{
        navBar.classList.add('show-navbar');
    }
}
//menu open function call
menu.addEventListener('click',openNavbar);
//close navbar function call
close.addEventListener('click', openNavbar);

//gsap text effect
let tl = gsap.timeline();
tl.from(".see-you-text", {duration:1, opacity:0.1, x: -500, stagger:{
    each:0.1,
}});
tl.from(".space-text", {duration:1.5, opacity:0, x: -800, stagger:{
    each:0.1,
}})

tl.from(".info", {duration:0.5, opacity:0, stagger:{
    each:0.1,
}})
// tl.from(".explore-button",{duration:1.3,opacity:0,stagger:0.20});
tl.from(".button-container",{duration:1.3, opacity:0,scale:10, stagger:0.10});
