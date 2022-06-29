export default class Accordion {
    constructor() {
      this.tabs = document.querySelectorAll('.slider-pagination__title_mob');
      this.openTabs = document.querySelectorAll('.slider-text__content_mob');
      this.activeClass = 'slider-text__content_mob_active';
      this.init();
    }
  
    hideAll() {
      this.tabs.forEach((tab) => {
        tab.classList.remove('slider-pagination__title_mob_active');
        tab.nextElementSibling.classList.remove(
          'slider-text__content_mob_active'
        );
      });
    }
  
    addActiveClass(tab) {
      tab.classList.add('slider-pagination__title_mob_active');
      tab.nextElementSibling.classList.add('slider-text__content_mob_active');
    }

    hideAllAccordionSections() {
      this.openTabs.forEach((openTab) => {
        openTab.style.height = 'unset';
        openTab.style.maxHeight = openTab.style.setProperty('--max-height', '0');
  
        openTab.addEventListener(
          'transitionend',
          () => {
            openTab.style.maxHeight = openTab.style.setProperty(
              '--max-height',
              '0'
            );
          },
          {
            once: true,
          }
        );
      });
    }
  
    showOneAccordionSection(section) {
      let height = section.scrollHeight;
  
      section.style.height = 'auto';
      section.style.maxHeight = section.style.setProperty(
        '--max-height',
        height + 'px'
      );
  
      section.addEventListener(
        'transitionend',
        () => {
          section.style.maxHeight = section.style.setProperty(
            '--max-height',
            height + 'px'
          );
        },
        {
          once: true,
        }
      );
    }
  
    setInitialHeightAccordionSections() {
      this.openTabs.forEach((tab) => {
        if (!tab.classList.contains(this.activeClass)) {
          tab.style.maxHeight = tab.style.setProperty('--max-height', '0');
        } else {
          this.showOneAccordionSection(tab);
        }
      });
    }
  
    smooth() {
      this.hideAllAccordionSections();
  
      this.openTabs.forEach((openTab) => {
        if (openTab.classList.contains(this.activeClass)) {
          this.showOneAccordionSection(openTab);
        }
      });
    }
  
    init() {
      this.setInitialHeightAccordionSections();

      this.tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
          this.hideAll();
          this.addActiveClass(tab);
          this.smooth();
        });
      });
    }
  }