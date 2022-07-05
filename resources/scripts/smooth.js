export default class Smooth {
  constructor() {
    this.goTopBtn = document.querySelector('.scrollup');
    this.init();
  }

  trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      this.goTopBtn.classList.add('scrollup_show');
    }
    if (scrolled < coords) {
      this.goTopBtn.classList.remove('scrollup_show');
    }
  }

  backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  init() {
    window.addEventListener('scroll', () => this.trackScroll());
    this.goTopBtn.addEventListener('click', () => this.backToTop());
  }
}
