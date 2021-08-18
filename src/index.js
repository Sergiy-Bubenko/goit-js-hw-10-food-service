import './sass/main.scss';
import menuTemplate from './templates/menu.hbs';

const menuList = document.querySelector('.js-menu');
const menuDate = require('./menu.json');
const templatePreparation = menuTemplate(menuDate);
const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
const bodyClass = document.body.classList;

menuList.insertAdjacentHTML("beforeend", templatePreparation);
themeSwitchToggle.addEventListener('change', onThemeSwitchToggleChange);

function onThemeSwitchToggleChange() {
  bodyClass.toggle('light-theme');
  bodyClass.toggle('dark-theme');
  if(bodyClass.contains('light-theme')) {
    localStorage.setItem('theme', 'light-theme')
  } else if(bodyClass.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark-theme')
  }
};

if (localStorage.getItem('theme') === 'dark-theme') {
  themeSwitchToggle.checked = true;
  onThemeSwitchToggleChange();
};