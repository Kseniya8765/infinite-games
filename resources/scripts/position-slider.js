import Swiper, { Autoplay } from 'swiper';

export default class PositionSlider {
  constructor() {
    this.init();
  }

  init() {
    const sections = document.querySelectorAll('.team');
    sections.forEach((s) => {
      const mySwiper = new Swiper(s.querySelector('.team__slider'), {
        modules: [Autoplay],
        // autoplay: {
        //   delay: 3000,
        // },
        slidesPerView:7,
        direction: 'vertical',
      });


    });
  }
}
