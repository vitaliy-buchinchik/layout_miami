'use strict';

const nav = document.querySelector('.header__nav');
const menu = document.querySelector('#menu');

menu.addEventListener('click', () => {
  nav.classList.toggle('header__nav--active');
});
