'use strict';

const form = document.getElementById('main-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  console.log("Formularz został wysłany!");
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    setTimeout(() => {
      document.body.classList.add('page__body--with-menu');
    }, 500)
  } else {
    setTimeout(() => {
      document.body.classList.remove('page__body--with-menu');
    }, 0)
  }
});