import { api } from '../api/api.js';
import { Card } from '../card/card.js';


const searchInput = document.forms.search;
const question = searchInput.elements.question;
const searchButton = document.querySelector('.search__button');
const preloader = document.querySelector('.preloader')
const preloaderAwait = document.querySelector('.preloader__await-block');
const preloaderNotfound = document.querySelector('.preloader__notfound-block');
const searchResult = document.querySelector('.search-result__container');
const showMore = document.querySelector('.search-result__button');
const cardContainer = document.querySelector('.search-result__cards');
// const cardContainer = document.querySelector('.search-result__container');


export class Search {
    constructor() {
        // this.search = this.search.bind(this);
        // this.addListeners();
        // this.find = this.find.bind(this);
    }
    find() {
        // console.log('1223123')
        event.preventDefault();
        startSearchStyling();
        let myQuestion = question.value;
        console.log(myQuestion);
        api.getCards(myQuestion).then(cards => {
            if (cards.totalResults === 0) {
                preloaderAwait.style.display = 'none';
                preloaderNotfound.style.display = 'flex';
            } else {
                successSearchStyling(cards);
                // console.log(cards.totalResults)
                console.log(cards.articles)
                console.log(cards)
                // for (let i = 0; i < 3; i++) {
                //     console.log(cards.articles);
                //     const { cardElement } = new Card(cards.articles[i].urlToImage, cards.articles[i].publishedAt, cards.articles[i].title, cards.articles[i].description, cards.articles[i].source.name);
                //     cardContainer.appendChild(cardElement);
                // }
                // showMore.addEventListener('click', () => {
                //     if (cards.articles.length < 6) {
                //         let n = cards.articles.length;
                //         return n;
                //     }
                //     for (let i = 3; i < n; i++) {
                //         console.log(cards.articles);
                //         const { cardElement } = new Card(cards.articles[i].urlToImage, cards.articles[i].publishedAt, cards.articles[i].title, cards.articles[i].description, cards.articles[i].source.name);
                //         cardContainer.appendChild(cardElement);
                //         console.log(cards.articles.length);
                //     }
                // });
                for (let card of cards.articles) {
                    // console.log(card.source.name)
                    // console.log(card)
                    const { cardElement } = new Card(card.urlToImage, card.publishedAt, card.title, card.description, card.source.name);
                    // console.log(cardElement)
                    // console.log(card)
                    let cardList = [];
                    // console.log(cardList);
                    cardList.push(cardElement)
                    // console.log(cardList.length);
                    return cardList;
                    // cardContainer.appendChild(cardElement);

                }


            }
        });
    }
}

const search = new Search();

const startSearchStyling = () => {
    while (cardContainer.hasChildNodes()) {
        cardContainer.removeChild(cardContainer.lastChild);
    }
    preloaderNotfound.style.display = 'none';
    showMore.style.display = 'none';
    preloader.style.display = 'flex';
    preloaderAwait.style.display = 'flex';
};

const successSearchStyling = (cards) => {
    preloader.style.display = 'none';
    searchResult.style.display = 'flex';
    if (cards.totalResults > 3) {
        showMore.style.display = 'inline-block';
    }
}

searchButton.addEventListener('click', function () { search.find() });