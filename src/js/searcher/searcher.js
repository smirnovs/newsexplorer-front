// import { api } from '../api/api.js';
import { Card } from '../card/card.js';
import { Api } from '../api/api.js';
import { Showmore } from './showmore.js'
import { Render } from './render.js'
import { NEWSAPI_URL, SEARCH_NEWS } from '../helpers/messages.js';

// const regUrl = 'https://api.myedudomen.ml';
// const newsUrl = 'https://newsapi.org/v2/top-headlines?q='

const searchInput = document.forms.search;
const question = searchInput.elements.question;
const searchButton = document.querySelector('.search__button');
const preloader = document.querySelector('.preloader')
const preloaderAwait = document.querySelector('.preloader__await-block');
const preloaderNotfound = document.querySelector('.preloader__notfound-block');
const searchResult = document.querySelector('.search-result__container');
export const cardContainer = document.querySelector('.search-result__cards');

export class Search {
    constructor() {
        // this.find = this.find.bind(this);
        // searchButton.addEventListener('click', this.find);
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
    render(where, count, cards, myQuestion) {
        for (let i = where; i < count; i++) {
            const { cardElement } = new Card(myQuestion, cards.articles[i].url, cards.articles[i].urlToImage, cards.articles[i].publishedAt, cards.articles[i].title, cards.articles[i].description, cards.articles[i].source.name);
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
            let isLoggedIn = true;
            this.find(isLoggedIn)
            // let userLogin = user.name;
            // new Header({ isLoggedIn, userLogin });
            // return isLoggedIn;
            // new Search(isLoggedIn);
            // new CheckLog(isLoggedIn);

        }).catch(() => {
            // console.log(err);
            let isLoggedIn = false;

            this.find(isLoggedIn)
            // return isLoggedIn;
            // new Search(isLoggedIn);
            // new CheckLog(isLoggedIn);
        });
    }
    find(isLoggedIn) {
        // event.preventDefault();
        // console.log(isLoggedIn);
        startSearchStyling();
        let myQuestion = question.value;
        api.getCards(myQuestion).then(cards => {
            // console.log(isLoggedIn);
            if (cards.totalResults === 0) {
                preloaderAwait.style.display = 'none';
                preloaderNotfound.style.display = 'flex';
            } else {
                this.successSearchStyling(cards);
                // console.log(isLoggedIn);
                // let count = cards.articles.length
                // load.render(0, count, cards, myQuestion, isLoggedIn);
                if (cards.articles.length < 3) {
                    let count = cards.articles.length
                    load.render(0, count, cards, myQuestion, isLoggedIn);
                } else {
                    let count = 3
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

// const successSearchStyling = (cards) => {
//     preloader.style.display = 'none';
//     searchResult.style.display = 'flex';
//     if (cards.totalResults > 3) {
//         search.showmorebutton();
//     }
// }

// searchButton.addEventListener('click', function () { search.find() });

const api = new Api({
    baseUrl: SEARCH_NEWS,
    headers: {
        authorization: '67fcbb6d7e14456f995c19d4a0f3cfbc',
        // 'Content-Type': 'application/json'
    }
});

