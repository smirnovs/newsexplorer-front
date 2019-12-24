import "../pages/saved/saved.css";
import { Mobilemenu } from './helpers/mobilemenu.js';

const mobileMenuButton = document.querySelector('.header__mobileico');
const ICON_COLOR = 'header__mobileico_black-closed';

let isOpenMenu = false;

const mobilemenu = new Mobilemenu(mobileMenuButton, ICON_COLOR);

window.addEventListener('resize', () => {
    if (window.innerWidth > 720 && isOpenMenu == true) {
        isOpenMenu = false;
        mobilemenu.resize();
    }
})

mobileMenuButton.addEventListener('click', () => {
    if (isOpenMenu == false) {
        mobilemenu.open();
        isOpenMenu = true;
    } else {
        isOpenMenu = false;
        mobilemenu.close();
    }
})