import Swiper from "swiper";

var mySwiper = new Swiper('.js-testimonials', {
  // Optional parameters
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    disabledClass: 'not-active',
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    991: {
      slidesPerView: 3,
    }
  }
})