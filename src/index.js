import './index.html';
import 'swiper/scss';
import 'swiper/scss/pagination';

import { slidersInit } from './modules/sliders';
/* Все остальные стили стараемся подключать перед index.scss */
import './index.scss';


slidersInit('.about__slider', {
  pagination: {
    el: '.about__slider-pagination', 
    // bulletClass: 'about__bullet',
    // bulletActiveClass: 'about__bullet_active'
  }
})

slidersInit('.career__slider', {
  pagination: {
    el: '.career__slider-pagination', 
  }, 
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 20, 
      pagination: false,
    },
    1024: {
      slidesPerView: 'auto',
      spaceBetween: 26,
      pagination: false,
    },
    1240: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: false,
    }
  }
})


// переместить
const videoBGHero = document.querySelector('.video-bg-hero');
videoBGHero.innerHTML = `
  <source src="video/video.webm" type="video/webm">
  <source src="video/video.mp4" type="video/mp4">
`;

const videoBGLocation = document.querySelector('.video-bg-location');
videoBGLocation.innerHTML = `
  <source src="video/video.webm" type="video/webm">
  <source src="video/video.mp4" type="video/mp4">
`;
