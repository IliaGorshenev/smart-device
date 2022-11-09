const MAKE_TEXT_SHORT = function () {
  document.querySelector('[data-scroll-button]').textContent = 'бесплатная консультация';
  document.querySelector('[data-title="services"]').textContent = 'Товары и услуги Smart Device';
};

const MAKE_TEXT_LONG = function () {
  document.querySelector('[data-scroll-button]').textContent = 'Получить бесплатную консультацию';
  document.querySelector('[data-title="services"]').textContent = 'Smart Device предлагает следующие товары и услуги';
};

export {MAKE_TEXT_LONG, MAKE_TEXT_SHORT};
