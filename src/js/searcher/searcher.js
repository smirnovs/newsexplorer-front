import { api } from '../api/api.js';
import { Card } from '../card/card.js';


const searchInput = document.forms.search;
const question = searchInput.elements.question;
const searchButton = document.querySelector('.search__button');
const preloader = document.querySelector('.preloader')
const preloaderAwait = document.querySelector('.preloader__await-block');
const preloaderNotfound = document.querySelector('.preloader__notfound-block');
const searchResult = document.querySelector('.search-result__container');
// const showMore = document.querySelector('.search-result__button');
const cardContainer = document.querySelector('.search-result__cards');
// const cardContainer = document.querySelector('.search-result__container');
let isShowMore = false;

let n = 3;
export class Search {
    showmorebutton() {
        const showMore = document.createElement('button');
        showMore.classList.add('button');
        showMore.classList.add('search-result__button');
        showMore.textContent = 'Показать еще';
        searchResult.appendChild(showMore);
    }
    find() {
        event.preventDefault();
        startSearchStyling();
        let myQuestion = question.value;
        api.getCards(myQuestion).then(cards => {
            if (cards.totalResults === 0) {
                preloaderAwait.style.display = 'none';
                preloaderNotfound.style.display = 'flex';
            } else {
                successSearchStyling(cards);
                if (cards.articles.length < 3) {
                    let n = cards.articles.length
                    for (let i = 0; i < n; i++) {
                        const { cardElement } = new Card(cards.articles[i].urlToImage, cards.articles[i].publishedAt, cards.articles[i].title, cards.articles[i].description, cards.articles[i].source.name);
                        cardContainer.appendChild(cardElement);
                    }
                } else {
                    for (let i = 0; i < 3; i++) {
                        const { cardElement } = new Card(cards.articles[i].urlToImage, cards.articles[i].publishedAt, cards.articles[i].title, cards.articles[i].description, cards.articles[i].source.name);
                        cardContainer.appendChild(cardElement);
                    }
                }
                if (document.querySelector('.search-result__button')) {
                    const showMore = document.querySelector('.search-result__button');
                    let n = 3;
                    showMore.addEventListener('click', function showMoreHandler() {
                        if (cards.articles.length <= 6) {
                            for (let i = 3; i < n; i++) {
                                const { cardElement } = new Card(cards.articles[i].urlToImage, cards.articles[i].publishedAt, cards.articles[i].title, cards.articles[i].description, cards.articles[i].source.name);
                                cardContainer.appendChild(cardElement);
                                showMore.style.display = 'none'
                                n = 3;
                            }
                        } else if (cards.articles.length > 6) {
                            if (n + 3 > cards.articles.length) {
                                let s = cards.articles.length;
                                for (let i = n; i < s; i++) {
                                    const { cardElement } = new Card(cards.articles[i].urlToImage, cards.articles[i].publishedAt, cards.articles[i].title, cards.articles[i].description, cards.articles[i].source.name);
                                    cardContainer.appendChild(cardElement);
                                }
                            } else {
                                let s = n + 3;
                                for (let i = n; i < s; i++) {
                                    const { cardElement } = new Card(cards.articles[i].urlToImage, cards.articles[i].publishedAt, cards.articles[i].title, cards.articles[i].description, cards.articles[i].source.name);
                                    cardContainer.appendChild(cardElement);
                                }
                            }

                            n = n + 3;
                            if (n >= cards.articles.length) {
                                showMore.style.display = 'none';
                                showMore.removeEventListener('click', showMoreHandler);
                                n = 3;
                            }
                        }
                    })
                }
            }
        }).catch(() => {
            preloaderAwait.style.display = 'none';
            preloaderNotfound.style.display = 'flex';
        });
    }
}

const search = new Search();

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

const successSearchStyling = (cards) => {
    preloader.style.display = 'none';
    searchResult.style.display = 'flex';
    if (cards.totalResults > 3) {
        search.showmorebutton();
    }
}

searchButton.addEventListener('click', function () { search.find() });