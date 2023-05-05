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
      slidesPerView: 3,
      spaceBetween: 20
    },
    1024: {
      // slidesPerView: 3,
      spaceBetween: 26
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
})


// переместить
const videoBG = document.querySelector('.video-bg');
videoBG.innerHTML = `
  <source src="video/video.webm" type="video/webm">
  <source src="video/video.mp4" type="video/mp4">
`;
