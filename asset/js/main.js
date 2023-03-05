let swiper = new Swiper(".portfolio__container", {
    loop:true,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      clickable:true,
        el: ".swiper-pagination",
    },
    
  });