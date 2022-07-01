import Slider from './slider';
import Accordion from './accordion';
import PositionSlider from './position-slider';


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

    positionSlider: {
      init: () => new PositionSlider(),
      selectors: ['.team'],
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