import Swiper, { Autoplay, Pagination } from 'swiper';

export default class PositionSlider {
  constructor() {
    this.init();
  }

  init() {
    const sections = document.querySelectorAll('.team');
    const menu = ['Sam Kim', 'Twain Martin', 'Jonathan Moses','John Chen','Sam Goldberg','Justin Lucas','Miguel Morales'];
    const position= ['CEO','CTO','Executive Producer','Head of Marketing','General Counsel','Director of Marketing','Blockchain Architect'];

    sections.forEach((s) => {
      const mySwiper = new Swiper(s.querySelector('.team__hidden'), {
        modules: [Autoplay, Pagination],
        autoplay: {
          delay: 3000,
        },
        direction: 'vertical',
        pagination: {
          el: '.team__pagination',
          clickable: true,
            renderBullet: function (index, className) {
              return '<h2 class="' + className + '">' + (menu[index]) + '<span class="headline-4 team__position">'+' '+(position[index])+'</span>' +' </h2>';
            },
        },
      });
    });
  }
}
