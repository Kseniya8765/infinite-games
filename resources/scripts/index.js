import Slider from './slider';
import Accordion from './accordion';
import Validation from './validation';
import Animation from './animation';
import PositionSlider from './position-slider';
import Smooth from './smooth';


window.addEventListener('DOMContentLoaded', async () => {
  window.refs = {

    slider: {
      init: () => new Slider(),
      selectors: ['.slider'],
    },

    accordion: {
      init: () => new Accordion(),
      selectors: ['.slider-pagination_mob'],
    },

    validation: {
      init: () => new Validation(),
      selectors: ['.contact__form'],
    },
    
    animation: {
      init: () => new Animation(),
      selectors: ['.animation'],
    },

    sliderPosition: {
      init: () => new PositionSlider(),
      selectors: ['.team'],
    },

    smooth: {
      init: () => new Smooth(),
      selectors: ['.scrollup'],
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