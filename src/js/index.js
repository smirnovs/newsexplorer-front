import "../pages/index/index.css";
import { popup } from './popup/popup.js';
import { Mobilemenu } from './helpers/mobilemenu.js';
import { api } from './api/api.js';

const mobileMenuButton = document.querySelector('.header__mobileico');
const ICON_COLOR = 'header__mobileico_white-closed';
let isOpenMenu = false;

const mobilemenu = new Mobilemenu(mobileMenuButton, ICON_COLOR);

window.addEventListener('resize', () => {
    if (window.innerWidth > 720 && isOpenMenu == true) {
        isOpenMenu = false;
        mobilemenu.resize();
        mobilemenu.header('transparent');
    }
})

mobileMenuButton.addEventListener('click', () => {
    if (isOpenMenu == false) {
        mobilemenu.open();
        mobilemenu.header('#1A1B22');
        isOpenMenu = true;
    } else {
        isOpenMenu = false;
        mobilemenu.close();
        mobilemenu.header('transparent');
    }
})
let question = 'Чай'

api.getCards(question).then(cards => {
    if (cards && cards.length > 0) { }
    console.log(cards);

});
