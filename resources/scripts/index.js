import Slider from './slider';
import Accordion from './accordion';
import Validation from './validation';
import Tabs from './tabs';
import Animation from './animation';



window.addEventListener('DOMContentLoaded', async () => {
  window.refs = {

    slider: {
      init: () => new Slider(),
      selectors: ['.slider-text'],
    },

    accordion: {
      init: () => new Accordion(),
      selectors: ['.slider-pagination_mob'],
    },


    validation: {
      init: () => new Validation(),
      selectors: ['.contact__form'],
    },
  

    // tabs: {
    //   init: () => new PositionSlider(),
    //   selectors: ['.team__slider'],
    // },

    animation: {
      init: () => new Animation(),
      selectors: ['.animation'],
    },
  };

  

  Object.keys(window.refs).forEach((ref) => {
    if (
      window.refs[ref].hasOwnProperty('init') &&
      document.querySelectorAll(window.refs[ref].selectors.join(', ')).length >
        0
    ) {
      window.refs[ref].class = window.refs[ref].init();
    }
  });
});