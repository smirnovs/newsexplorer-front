import "../pages/saved/saved.css";
import { Mobilemenu } from './helpers/mobilemenu.js';
import { Api } from "./api/api.js";
import { Card } from './card/card.js';
import { MAIN_PAGE, ICON_COLOR_BLACK, NEWSAPI_URL, firstElement, secondElement, thirdElement, maxShowed } from './helpers/messages';

const userName = document.querySelector('.header__login_name');
const authButton = document.querySelector('.header__login_logged');
const cardContainer = document.querySelector('.saved-news__cards');
const allCardsContainer = document.querySelector('.saved-news__container');
const keyWords = document.querySelector('.user-greetings__keywords');
const greetingsName = document.querySelector('.user-greetings__username');
const newsCount = document.querySelector('.user-greetings__newscount');
const keywordKeys = document.querySelector('.user-greetings__keywords-keys');
const mobileAuthButton = document.querySelector('.menumobile__login_logged');
const mobileMenu = document.querySelector('.menumobile');

const isOpenMenu = false;

const api = new Api({
    baseUrl: NEWSAPI_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

const cardCounter = () => {
    const cardsTotal = document.querySelectorAll('.card');
    const cardsCount = cardsTotal.length;
    if(cardsCount === firstElement) {
        newsCount.textContent = 'нет'
    } else {
        newsCount.textContent = cardsCount;
    }
}

const mobilemenu = new Mobilemenu(mobileMenu, ICON_COLOR_BLACK, isOpenMenu);

mobilemenu.addListeners();

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

api.checkAuth()
    .then((user) => {
        userName.textContent = user.name;
        greetingsName.textContent = user.name;
    }).catch(err => {
        console.log(err);
        window.location.replace(MAIN_PAGE);
    });

api.getSavedCards()
    .then(cards => {
        const isExist = true;
        const isSaved = true;
        const isLoggedIn = true;
        newsCount.textContent = cards.data.length;
        const keys = []
        cards.data.forEach((card) => {
            const cardElement = new Card(api, isLoggedIn, isSaved, isExist, card.pseudoId, card.keyword, card.link, card.image, card.date, card.title, card.text, card.source, card._id, cardCounter);
            const currentCard = cardElement.create();
            cardElement.addListeners(currentCard);
            cardContainer.appendChild(currentCard);
            keys.push(card.keyword)
        })
        const result = {};
        keys.forEach(function (a) {
            result[a] = result[a] + secondElement || secondElement;
        });
        const keysSort = []

        //result это объект, потому использую фор ин а не форИч
        for (const key in result) {
            keysSort.push([key, result[key]])
        }

        keysSort.sort((a, b) => {
            return b[secondElement] - a[secondElement];
        });

        const keysFinal = []

        keysSort.forEach(key => {
            keysFinal.push(key[firstElement])
        })

        if (keysSort.length === secondElement) {
            const keyPhrase = `${keysFinal[firstElement]}`
            keywordKeys.textContent = keyPhrase;
        } else if (keysSort.length === thirdElement) {
            const keyPhrase = `${keysFinal[firstElement]}, ${keysFinal[secondElement]}`
            keywordKeys.textContent = keyPhrase;
        } else if (keysSort.length === maxShowed) {
            const keyPhrase = `${keysFinal[firstElement]}, ${keysFinal[secondElement]}, ${keysFinal[thirdElement]}`
            keywordKeys.textContent = keyPhrase;
        }
        else if (keysSort.length > maxShowed) {
            const otherKeys = keysSort.length - thirdElement
            const keyPhrase = `${keysFinal[firstElement]}, ${keysFinal[secondElement]} и ${otherKeys} других`
            keywordKeys.textContent = keyPhrase;
        } else if (keysSort.length === firstElement || typeof card.keyword === 'undefined') {
            const keyPhrase = 'У вас нет ключевых слов'
            keywordKeys.textContent = keyPhrase;
        }

    }).catch(err => {
        allCardsContainer.style.display = 'none'
        keyWords.style.display = 'none'
        newsCount.textContent = 'нет'
    })