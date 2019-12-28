import "../pages/saved/saved.css";
import { Mobilemenu } from './helpers/mobilemenu.js';
import { api } from "./api/api.js";
import { Card } from './card/card.js';
import { MAIN_PAGE, ICON_COLOR_BLACK } from './helpers/messages';

const userName = document.querySelector('.header__login_name');
const authButton = document.querySelector('.header__login_logged');
const cardContainer = document.querySelector('.saved-news__cards');
const allCardsContainer = document.querySelector('.saved-news__container');
const keyWords = document.querySelector('.user-greetings__keywords');
const greetingsName = document.querySelector('.user-greetings__username');
const newsCount = document.querySelector('.user-greetings__newscount');

// const ICON_COLOR = 'header__mobileico_black-closed';
let isOpenMenu = false;

new Mobilemenu(ICON_COLOR_BLACK, isOpenMenu);

api.checkAuth().then(res => {
    if (res.ok) {
        return Promise.resolve(res.json());
    } else {
        window.location.replace(MAIN_PAGE);
        return Promise.reject(res.status);
    }
}).then((user) => {
    userName.textContent = user.name;
    greetingsName.textContent = user.name;

}).catch(err => {
    console.log(err);
});

api.getSavedCards().then(res => {
    if (res.ok) {
        return Promise.resolve(res.json());
    } else {
        console.log('статей нет')
        allCardsContainer.style.display = 'none'
        keyWords.style.display = 'none'
        newsCount.textContent = 'нет'
        return Promise.reject(res.status);
    }
}).then(cards => {
    let isExist = true;
    let isSaved = true;
    newsCount.textContent = cards.data.length;
    for (const card of cards.data) {
        // console.log(card._id)
        const { cardElement } = new Card(isSaved, isExist, card.pseudoId, card.keyword, card.link, card.image, card.date, card.title, card.text, card.source, card._id);
        cardContainer.appendChild(cardElement);
    }
})

authButton.addEventListener('click', () => {
    api.unAuth().then(res => {
        if (res.ok) {
            console.log('разлогинило')
            window.location.replace(MAIN_PAGE);
            return Promise.resolve(res.json());
        } else {
            return Promise.reject(res.status);
        }

    });
})