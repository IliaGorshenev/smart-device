const makeScroll = function () {
  if (document.querySelector('[data-scroll-button]')) {
    document.querySelector('[data-scroll-button]').addEventListener('click', (e) => {
      e.preventDefault();

      const scrollTarget = document.getElementById('destination');

      const topOffset = document.querySelector('.main-header').offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  }
};

export {makeScroll};
