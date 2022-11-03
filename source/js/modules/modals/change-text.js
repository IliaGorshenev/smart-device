const makeScrollButtonShort = function () {
  if (document.querySelector('[data-scroll-button]') !== null) {
    document.querySelector('[data-scroll-button]').textContent = 'бесплатная консультация';
  }
};

const makeScrollButtonLong = function () {
  if (document.querySelector('[data-scroll-button]') !== null) {
    document.querySelector('[data-scroll-button]').textContent = 'Получить бесплатную консультацию';
  }
};

const makeServicesTitleShort = function () {
  if (document.querySelector('[data-title="services"]') !== null) {
    document.querySelector('[data-title="services"]').textContent = 'Товары и услуги Smart Device';
  }
};

const makeServicesTitleLong = function () {
  if (document.querySelector('[data-title="services"]') !== null) {
    document.querySelector('[data-title="services"]').textContent = 'Smart Device предлагает следующие товары и услуги';
  }
};

export {makeScrollButtonShort, makeScrollButtonLong,
  makeServicesTitleShort, makeServicesTitleLong};
