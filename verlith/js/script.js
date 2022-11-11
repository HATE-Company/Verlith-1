console.log('Hello, World')

var swiper = new Swiper(".mySwiper1", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: -0.1,
      stretch: -15,
      depth: 100,
      modifier: 1.68,
      slideShadows: false,
      
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 5,
      depth: 180,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });