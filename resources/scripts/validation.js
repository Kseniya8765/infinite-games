export default class Validation {
  constructor() {
    this.submit = document.querySelector('.contact__btn');
    this.form = document.querySelector('.contact__email');
    this.success = document.querySelector('.contact-success');
    this.email = document.querySelector('.contact__input');
    this.debounce = require('lodash.debounce');
    this.reg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    this.isMailValid = false;
    this.init();
  }

  handleForm = (event) => {
    event.preventDefault();
  };

  reflectChanges = (e) => {
    e.target.value;
  };

  validation = () => {
    if (this.reg.test(this.email.value) === false) {
      this.isMailValid;
      this.email.classList.add('contact__error');
      const p = document.createElement('p');
      p.textContent = 'Please enter a valid email';
      p.classList.add = 'body-small';
      p.style.color = '#ee3c3c';
      p.style.textAlign = 'right';

      this.email.after(p);
    } else {
      this.isMailValid = true;
      this.email.classList.remove('contact__error');
    }
  };

  checkValidity = () => {
    return this.isMailValid;
  };

  check = () => {
    this.submit.disabled = !this.checkValidity();
  };

  submited = () => {
    if (this.checkValidity()) {
      this.form.reset();
      this.form.style.display = 'none';
      this.success.classList.add('contact-success_active');
    }
  };
  init() {
    this.email.addEventListener('change', () => this.validation());
    this.form.addEventListener('submit', (event) => this.handleForm(event));
    this.email.addEventListener('change', () => this.check());
    this.submit.addEventListener('click', () => this.submited());
    this.email.addEventListener(
      'change',
      this.debounce((e) => (e) => this.reflectChanges(e), 300)
    );
  }
}
