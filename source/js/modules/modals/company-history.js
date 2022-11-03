const openCompanyHistoryMaker = function () {
  document.querySelector('[data-history="details"]').parentNode.classList.toggle('is-open');
  let buttonName = document.querySelector('[data-history="button"]');
  if (buttonName.textContent === 'Подробнее') {
    buttonName.textContent = 'Свернуть';
  } else {
    buttonName.textContent = 'Подробнее';
  }
};

const openCompanyHistory = function () {
  if (document.querySelector('[data-history="button"]')) {
    document.querySelector('[data-history="button"]').addEventListener('click', openCompanyHistoryMaker);
  }
};

export {openCompanyHistory};
