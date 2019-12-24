import "../pages/about/about.css";
import { Mobilemenu } from './helpers/mobilemenu.js';
import { glide } from './glider/glider.js';

const mobileMenuButton = document.querySelector('.header__mobileico');
const ICON_COLOR = 'header__mobileico_black-closed';
const ghButton = document.querySelector('.github__button');

let isOpenMenu = false;

const mobilemenu = new Mobilemenu(mobileMenuButton, ICON_COLOR);

ghButton.addEventListener('click', () => {
    window.open(
        'https://github.com/smirnovs/diplom-frontend',
        '_blank'
    )
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 720 && isOpenMenu == true) {
        isOpenMenu = false;
        mobilemenu.resize();
    }
});

mobileMenuButton.addEventListener('click', () => {
    if (isOpenMenu == false) {
        mobilemenu.open();
        isOpenMenu = true;
    } else {
        isOpenMenu = false;
        mobilemenu.close();
    }
});

glide.mount();