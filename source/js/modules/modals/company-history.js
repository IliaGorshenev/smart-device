const OPEN_COMPANY_HISTORY_MAKER = function () {
  document.querySelector('[data-history="details"]').parentNode.classList.toggle('is-open');
  let buttonName = document.querySelector('[data-history="button"]');
  if (buttonName.textContent === 'Подробнее') {
    buttonName.textContent = 'Свернуть';
  } else {
    buttonName.textContent = 'Подробнее';
  }
};

const OPEN_COMPANY_HISTORY = function () {
  if (document.querySelector('[data-history="button"]')) {
    document.querySelector('[data-history="button"]').addEventListener('click', OPEN_COMPANY_HISTORY_MAKER);
  }
};

export {OPEN_COMPANY_HISTORY};
