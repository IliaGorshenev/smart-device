import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {toggleAccordion} from './modules/modals/accordion.js';
import {openCompanyHistory} from './modules/modals/company-history.js';
import {makeScroll} from './modules/modals/scroll.js';
import {makeScrollButtonShort, makeScrollButtonLong,
  makeServicesTitleShort, makeServicesTitleLong} from './modules/modals/change-text.js';
import {validatePhone} from './modules/modals/validate-phone.js';

const deleteNoJs = function () {
  document.querySelectorAll('[data-accordion]').forEach((item) =>
    item.classList.remove('no-js'));

  if (document.querySelector('[data-history="details"]')) {
    document.querySelector('[data-history="details"]').parentNode.classList.remove('no-js');
  }
};

const breakpoint = window.matchMedia(`(max-width:768px)`);
const breakpointChecker = () => {
  if (breakpoint.matches) {
    makeScrollButtonShort();
    makeServicesTitleShort();
  } else {
    makeScrollButtonLong();
    makeServicesTitleLong();
  }
};
breakpoint.addListener(breakpointChecker);
breakpointChecker();
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  validatePhone();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    toggleAccordion();
    openCompanyHistory();
    makeScroll();
    deleteNoJs();
  });
});

// ---------------------------------


// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
