export default class Validation {
  constructor() {
    this.submit = document.querySelector('.contact__btn');
    this.label = document.querySelector('.contact__label');
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
      p.className = 'contact__error-label';
      this.label.append(p);
    } else {
      this.isMailValid = true;
      this.email.classList.remove('contact__error');
      p.className.remove('contact__error-label');
    }
  };

  checkValidity = () => {
    return this.isMailValid;
  };

  check = () => {
    this.submit.disabled = !this.checkValidity();
  };

  submited = (e) => {
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
