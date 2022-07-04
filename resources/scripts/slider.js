import Swiper , { EffectFade } from 'swiper';

export default class Slider {
  constructor() {
    this.init();
  }

  init() {
    const sections = document.querySelectorAll('.slider');
    sections.forEach((s) => {
      const pagination = [...s.querySelectorAll('.slider-pagination__title')];
     
      const mySwiper = new Swiper(s.querySelector('.slider-text'), {
       modules: [ EffectFade] ,
       effect: 'fade',
      });
      
      pagination.forEach((p, index) => {
        p.addEventListener('mouseover', function (e) {
          e.preventDefault();
          mySwiper.slideTo(index);
        });
      });
    });
  }
}