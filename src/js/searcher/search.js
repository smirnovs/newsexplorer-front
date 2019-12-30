import { Card } from '../card/card.js';
import { Api } from '../api/api.js';
import { Showmore } from './showmore.js'
import { Render } from './render.js'
import { NEWSAPI_URL, SEARCH_NEWS } from '../helpers/messages.js';


const searchInput = document.forms.search;
const question = searchInput.elements.question;
const searchButton = document.querySelector('.search__button');
const preloader = document.querySelector('.preloader')
const preloaderAwait = document.querySelector('.preloader__await-block');
const preloaderNotfound = document.querySelector('.preloader__notfound-block');
export const searchResult = document.querySelector('.search-result__container');
export const cardContainer = document.querySelector('.search-result__cards');
const notFoundTitle = document.querySelector('.preloader__notfound-title');
const notFoundText = document.querySelector('.preloader__notfound-text');

export class Search {
    constructor() {
        this.checkAuth = this.checkAuth.bind(this);
        searchButton.addEventListener('click', this.checkAuth);
    }
    successSearchStyling(cards) {
        preloader.style.display = 'none';
        searchResult.style.display = 'flex';
        if (cards.totalResults > 3) {
            this.showmorebutton();
        }
    }
    showmorebutton() {
        const showMore = document.createElement('button');
        showMore.classList.add('button');
        showMore.classList.add('search-result__button');
        showMore.textContent = 'Показать еще';
        searchResult.appendChild(showMore);
    }
    showMoreLogic(showButton, cards, myQuestion, isLoggedIn) {
        const btnLogic = new Showmore({ cards, myQuestion, showButton, isLoggedIn });
        showButton.addEventListener('click', function () { btnLogic.showcards() });
    }
    render(where, count, cards, myQuestion, isLoggedIn) {
        for (let i = where; i < count; i++) {
            const { cardElement } = new Card(myQuestion, cards.articles[i].url, cards.articles[i].urlToImage, cards.articles[i].publishedAt, cards.articles[i].title, cards.articles[i].description, cards.articles[i].source.name, isLoggedIn);
            cardContainer.appendChild(cardElement);
        }
    }
    checkAuth() {
        event.preventDefault();
        const check = new Api({
            baseUrl: NEWSAPI_URL,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        check.checkAuth().then(res => {
            if (res.ok) {
                return Promise.resolve(res.json());
            } else {
                return Promise.reject(res.status);
            }
        }).then(() => {
            const isLoggedIn = true;
            this.find(isLoggedIn)

        }).catch(() => {
            const isLoggedIn = false;
            this.find(isLoggedIn)
        });
    }
    find(isLoggedIn) {
        startSearchStyling();
        const week = 6;
        let today = new Date();
        let weekAgo = new Date();
        weekAgo.setDate(today.getDate() - week);

        today = today.toISOString().slice(0, 10)
        weekAgo = weekAgo.toISOString().slice(0, 10)

        const myQuestion = question.value;
        if (myQuestion.length === 0) {
            preloaderNotfound.style.display = 'flex';
            notFoundTitle.textContent = 'Введите хотя бы одно ключевое слово'
            preloaderAwait.style.display = 'none';
            notFoundText.textContent = ''
        } else {
            api.getCards(myQuestion, weekAgo, today).then(cards => {
                if (cards.totalResults === 0) {
                    preloaderAwait.style.display = 'none';
                    preloaderNotfound.style.display = 'flex';
                    notFoundTitle.textContent = 'Ничего не найдено'
                    notFoundText.textContent = 'К сожалению по вашему запросу ничего не найдено.'
                    searchResult.style.display = 'none'
                } else {
                    this.successSearchStyling(cards);
                    if (cards.articles.length < 3) {
                        const count = cards.articles.length
                        load.render(0, count, cards, myQuestion, isLoggedIn);
                    } else {
                        const count = 3
                        load.render(0, count, cards, myQuestion, isLoggedIn);
                    }
                    if (document.querySelector('.search-result__button')) {
                        const showMore = document.querySelector('.search-result__button');
                        this.showMoreLogic(showMore, cards, myQuestion, isLoggedIn);
                    }
                }
            }).catch(() => {
                preloaderAwait.style.display = 'none';
                preloaderNotfound.style.display = 'flex';
            });
        }
    }
}

// const search = new Search();
const load = new Render();
const startSearchStyling = () => {
    while (cardContainer.hasChildNodes()) {
        cardContainer.removeChild(cardContainer.lastChild);
    }
    preloaderNotfound.style.display = 'none';
    if (document.querySelector('.search-result__button')) {
        const showMore = document.querySelector('.search-result__button');
        showMore.parentNode.removeChild(showMore);
    }
    preloader.style.display = 'flex';
    preloaderAwait.style.display = 'flex';
};

const api = new Api({
    baseUrl: SEARCH_NEWS,
    headers: {
        authorization: '67fcbb6d7e14456f995c19d4a0f3cfbc',
        // 'Content-Type': 'application/json'
    }
});

