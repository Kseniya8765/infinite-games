
export default class Animation {
    constructor() {
      this.animations = document.querySelectorAll('.animation');
      this.init();
    }
  
    init() {
      if (!this.animations.length) {
        return;
      }
  
      this.animations.forEach((el) => {
        this.bindAction(el);
      });
    }
  
    bindAction() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (
            typeof getCurrentAnimationPreference === 'function' &&
            !getCurrentAnimationPreference()
          ) {
            return;
          }
  
          if (entry.isIntersecting) {
            entry.target.classList.add('animation_active');
          }
        });
      });
  
      this.animations.forEach((animation) => observer.observe(animation));
    }
  }