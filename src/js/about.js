import "../pages/about/about.css";
import { Mobilemenu } from './helpers/mobilemenu.js';
import { glide } from './glider/glider.js';

const ICON_COLOR = 'header__mobileico_black-closed';
const ghButton = document.querySelector('.github__button');

let isOpenMenu = false;
new Mobilemenu(ICON_COLOR, isOpenMenu);

ghButton.addEventListener('click', () => {
    window.open(
        'https://github.com/smirnovs/diplom-frontend',
        '_blank'
    )
});

glide.mount();