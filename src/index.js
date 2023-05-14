import './index.html';
import './page.html';
import 'swiper/scss';
import 'swiper/scss/pagination';

import { slidersInit } from './modules/sliders';
import { menuControl } from './modules/menuControl';
import { videoBackgroundInit } from './modules/videoBackground';
import { locationHover } from './modules/locationHover';
import { initScrollTopButton } from './modules/scrollTopButton';
/* Все остальные стили стараемся подключать перед index.scss */
import './index.scss';
import { pageControlInit } from './modules/pageControl';


videoBackgroundInit();
menuControl();
locationHover();
initScrollTopButton('arrow-top', {
  hover: false,
});
pageControlInit() ;

slidersInit('.about__slider', {
  pagination: {
    el: '.about__slider-pagination', 
    enabled: true,
    // bulletClass: 'about__bullet',
    // bulletActiveClass: 'about__bullet_active'
  }
})

const careerImageItems = document.querySelectorAll('.career__image-item');
careerImageItems.forEach((item, i) => {
  item.classList.add(`career__image-item_${i % 2 ? 'even' : 'odd'}`);
})

slidersInit('.career__slider', {
  pagination: {
    el: '.career__slider-pagination', 
    enabled: true,
  }, 
  breakpoints: {
    576: {
      slidesPerView: 'auto',
      spaceBetween: 20, 
      pagination: {
        enabled: false,
      },
    },
    1024: {
      slidesPerView: 'auto',
      spaceBetween: 26,
      pagination: {
        enabled: false,
      },
    },
    1240: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: {
        enabled: false,
      },
    }
  }
})
