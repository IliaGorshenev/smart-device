const TOGGLE_ACCORDION = function () {
  document.querySelectorAll('[data-accordion]').forEach((item) =>
    item.addEventListener('click', () => {

      if (item.classList.contains('is-open')) {
        item.classList.remove('is-open');
      } else {
        document
            .querySelectorAll('[data-accordion]').forEach((accordion) =>
              accordion.classList.remove('is-open')
            );

        item.classList.add('is-open');
      }
    })
  );
};

export {TOGGLE_ACCORDION};
