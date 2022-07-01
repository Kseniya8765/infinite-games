import Swiper , { Autoplay} from 'swiper';

export default class PositionSlider {
  constructor() {
    this.init();
  }

  init() {
    const sections = document.querySelectorAll('.team');
    sections.forEach((s) => {
      const pagination = [...s.querySelectorAll('.team-list__name')];
      const mySwiper = new Swiper(s.querySelector('.team__slider'), {
       modules: [ Autoplay] ,
       autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
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