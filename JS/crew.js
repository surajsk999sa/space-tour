const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

 
//gsap animation 
let timeL = gsap.timeline();
timeL.from(".meet-the-crew", {duration:1.1,x:-200,stagger:0.20});
timeL.from("#crew-image",{duration:1,opacity:0,y:100,stagger:0.20});
timeL.from(".crew-information-container",{duration:0.5,opacity:0,x:-100,stagger:0.20});
// timeL.from(".crew-name",{duration:0.8,opacity:0,x:-100,stagger:0.50});
// timeL.from(".crew-info-text",{duration:1,opacity:0,ease:"slow"});