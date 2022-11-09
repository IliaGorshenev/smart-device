import {iosVhFix} from './utils/ios-vh-fix';
import {INITIAL_MODALS} from './modules/modals/init-modals';
import {TOGGLE_ACCORDION} from './modules/modals/accordion.js';
import {OPEN_COMPANY_HISTORY} from './modules/modals/company-history.js';
import {MAKE_SCROLL} from './modules/modals/scroll.js';
import {MAKE_TEXT_LONG, MAKE_TEXT_SHORT} from './modules/modals/change-text.js';
import {VALIDATE_PHONE} from './modules/modals/validate-phone.js';

const DELETE_NO_JS = function () {
  document.querySelectorAll('[data-accordion]').forEach((item) =>
    item.classList.remove('no-js'));

  if (document.querySelector('[data-history="details"]')) {
    document.querySelector('[data-history="details"]').parentNode.classList.remove('no-js');
  }
};

const BREAKPOINT = window.matchMedia(`(max-width:768px)`);
const BREAKPOINTCHECKER = () => {
  if (BREAKPOINT.matches) {
    MAKE_TEXT_SHORT();
  } else {
    MAKE_TEXT_LONG();
  }
};
BREAKPOINT.addListener(BREAKPOINTCHECKER);
BREAKPOINTCHECKER();

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  VALIDATE_PHONE();

  window.addEventListener('load', () => {
    INITIAL_MODALS();
    TOGGLE_ACCORDION();
    OPEN_COMPANY_HISTORY();
    MAKE_SCROLL();
    DELETE_NO_JS();
  });
});
