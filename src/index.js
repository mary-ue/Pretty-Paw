import './index.html';
import 'swiper/scss';
import 'swiper/scss/pagination';

import { slidersInit } from './modules/sliders';
import { menuControl } from './modules/menuControl';
import { videoBackgroundInit } from './modules/videoBackground';
/* Все остальные стили стараемся подключать перед index.scss */
import './index.scss';

videoBackgroundInit();
menuControl();

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
