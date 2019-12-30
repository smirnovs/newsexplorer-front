import "../pages/saved/saved.css";
import { Mobilemenu } from './helpers/mobilemenu.js';
import { api } from "./api/api.js";
import { Card } from './card/card.js';
import { MAIN_PAGE, ICON_COLOR_BLACK } from './helpers/messages';
// import { Mobileheader, mobileAuthButton } from "./header/mobileheader.js";

const userName = document.querySelector('.header__login_name');
const authButton = document.querySelector('.header__login_logged');
const cardContainer = document.querySelector('.saved-news__cards');
const allCardsContainer = document.querySelector('.saved-news__container');
const keyWords = document.querySelector('.user-greetings__keywords');
const greetingsName = document.querySelector('.user-greetings__username');
const newsCount = document.querySelector('.user-greetings__newscount');
const keywordKeys = document.querySelector('.user-greetings__keywords-keys');
const mobileAuthButton = document.querySelector('.menumobile__login_logged');

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
    // let myName = user.name;
    userName.textContent = user.name;
    greetingsName.textContent = user.name;
    // let isLoggedIn = true;
    // new Mobileheader({ isLoggedIn, myName });

}).catch(err => {
    console.log(err);
});

api.getSavedCards().then(res => {
    if (res.ok) {
        return Promise.resolve(res.json());
    } else {
        allCardsContainer.style.display = 'none'
        keyWords.style.display = 'none'
        newsCount.textContent = 'нет'
        return Promise.reject(res.status);
    }
}).then(cards => {
    let isExist = true;
    let isSaved = true;
    let isLoggedIn = true;
    newsCount.textContent = cards.data.length;
    let keys = []
    for (const card of cards.data) {
        const { cardElement } = new Card(isLoggedIn, isSaved, isExist, card.pseudoId, card.keyword, card.link, card.image, card.date, card.title, card.text, card.source, card._id);
        cardContainer.appendChild(cardElement);
        keys.push(card.keyword)
    }
    const result = {};
    keys.forEach(function (a) {
        result[a] = result[a] + 1 || 1;
    });
    const keysSort = []
    for (const key in result) {
        keysSort.push([key, result[key]])
    }
    keysSort.sort((a, b) => {
        return b[1] - a[1];
    });

    let keysFinal = []
    for (let key of keysSort) {
        keysFinal.push(key[0])
    }
    if (keysSort.length === 1) {
        let keyPhrase = `${keysFinal[0]}`
        keywordKeys.textContent = keyPhrase;
    } else if (keysSort.length === 2) {
        let keyPhrase = `${keysFinal[0]}, ${keysFinal[1]}`
        keywordKeys.textContent = keyPhrase;
    } else if (keysSort.length === 3) {
        let keyPhrase = `${keysFinal[0]}, ${keysFinal[1]}, ${keysFinal[2]}`
        keywordKeys.textContent = keyPhrase;
    }
    else if (keysSort.length > 3) {
        let otherKeys = keysSort.length - 2
        let keyPhrase = `${keysFinal[0]}, ${keysFinal[1]} и ${otherKeys} других`
        keywordKeys.textContent = keyPhrase;
    } else if (keysSort.length === 0 || typeof card.keyword === 'undefined') {
        let keyPhrase = 'У вас нет ключевых слов'
        keywordKeys.textContent = keyPhrase;
    }

}).catch(err => {
    console.log(err)
})


authButton.addEventListener('click', () => {
    api.unAuth().then(res => {
        if (res.ok) {
            window.location.replace(MAIN_PAGE);
            return Promise.resolve(res.json());
        } else {
            return Promise.reject(res.status);
        }

    });
})


mobileAuthButton.addEventListener('click', () => {
    api.unAuth().then(res => {
        if (res.ok) {
            window.location.replace(MAIN_PAGE);
            return Promise.resolve(res.json());
        } else {
            return Promise.reject(res.status);
        }

    }).catch(err => {
        console.log(err);
    });
})