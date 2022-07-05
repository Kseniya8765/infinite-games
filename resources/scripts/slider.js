import Swiper, { EffectFade, Pagination } from 'swiper';

export default class Slider {
  constructor() {
    this.sections = document.querySelectorAll('.slider');

    this.init();
  }

  sliderInit(s) {
    const menu = ['Technology', 'Production', 'Marketing', 'Advisory'];

    const mySwiper = new Swiper(s.querySelector('.slider-text'), {
      modules: [EffectFade, Pagination],
      pagination: {
        el: '.slider-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<h2 class="' +
            className +
            ' slider-pagination__title">' +
            menu[index] +
            ' </h2>'
          );
        },
      },
      effect: 'fade',
    });

    const pagination = s.querySelectorAll('.swiper-pagination-bullet');

    pagination.forEach((p, index) => {
      p.addEventListener('mouseover', () => {
        mySwiper.slideTo(index);
      });
    });
  }

  init() {
    if (!this.sections) return;

    this.sections.forEach((s) => {
      this.sliderInit(s);
    });
  }
}
