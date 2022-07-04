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
      const pagination = [...s.querySelectorAll('.team__pagination')];

      const mySwiper = new Swiper(s.querySelector('.team__hidden'), {
        modules: [Autoplay, Pagination],
        autoplay: {
          delay: 3000,
        },
        // breakpoints: {
        //   320: {
        //     autoplay: false
        //   }
        // },
        direction: 'vertical',
        pagination: {
          el: '.team__pagination',
          clickable: true,
            renderBullet: function (index, className) {
              return '<h2 class="' + className + ' team__name">' + (menu[index]) + '<span class="headline-4 team__position">'+' '+(position[index])+'</span>' +' </h2>';
            },
        },
      });

      pagination.forEach((p) => {
        p.addEventListener('mouseover', function (e) {
          e.preventDefault();
          mySwiper.autoplay.stop();
        });
      })

      pagination.forEach((p) => {
        p.addEventListener('mouseleave', function (e) {
          e.preventDefault();
          mySwiper.autoplay.start();
        });
      })
    });
 
  }
}
