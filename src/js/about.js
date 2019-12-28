import "../pages/about/about.css";
import { Mobilemenu } from './helpers/mobilemenu.js';
import { glide } from './glider/glider.js';
import { MAIN_PAGE } from './helpers/messages';
import { Gitcard } from './card/gitcard.js';

const ICON_COLOR = 'header__mobileico_black-closed';
const ghButton = document.querySelector('.github__button');

let isOpenMenu = false;
new Mobilemenu(ICON_COLOR, isOpenMenu);
new Gitcard();

ghButton.addEventListener('click', () => {
    window.open(
        MAIN_PAGE,
        '_blank'
    )
});

glide.mount();