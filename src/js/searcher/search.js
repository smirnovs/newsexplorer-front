import { maxShowed, firstElement, dateLength, count } from '../helpers/messages.js';

const searchInput = document.forms.search;
const question = searchInput.elements.question;
const preloader = document.querySelector('.preloader')
const preloaderAwait = document.querySelector('.preloader__await-block');
const preloaderNotfound = document.querySelector('.preloader__notfound-block');
export const searchResult = document.querySelector('.search-result__container');
export const cardContainer = document.querySelector('.search-result__cards');
const notFoundTitle = document.querySelector('.preloader__notfound-title');
const notFoundText = document.querySelector('.preloader__notfound-text');

export class Search {
    constructor(api, newsloader, load, showMoreCallback, searchButton) {
        this.api = api;
        this.newsloader = newsloader;
        this.load = load;
        this.showMoreCallback = showMoreCallback;
        this.searchButton = searchButton;
        this.checkAuth = this.checkAuth.bind(this);
        this._startSearchStyling = this._startSearchStyling.bind(this);
    }
    _activateForm() {
        this.searchButton.removeAttribute('disabled');
        this.searchButton.classList.remove('search__button_disabled');
        question.readOnly = false;
        question.classList.remove('readonly');
    }
    _startSearchStyling() {
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
        this.searchButton.setAttribute('disabled', true);
        this.searchButton.classList.add('search__button_disabled');
        question.readOnly = true;
        question.classList.add('readonly');
    }
    _successSearchStyling(cards) {
        preloader.style.display = 'none';
        searchResult.style.display = 'flex';
        this._activateForm();
        if (cards.totalResults > maxShowed) {
            this._showmorebutton();
        }
    }
    _showmorebutton() {
        const showMore = document.createElement('button');
        showMore.classList.add('button');
        showMore.classList.add('search-result__button');
        showMore.textContent = 'Показать еще';
        searchResult.appendChild(showMore);
    }
    _showMoreLogic(showButton, cards, myQuestion, isLoggedIn) {
        this.showMoreCallback(showButton, cards, myQuestion, isLoggedIn, this.load);
    }
    checkAuth() {
        event.preventDefault();
        this.api.checkAuth()
            .then(() => {
                const isLoggedIn = true;
                this._find(isLoggedIn)

            }).catch(() => {
                const isLoggedIn = false;
                this._find(isLoggedIn)
            });
    }
    _find(isLoggedIn) {
        this._startSearchStyling();
        const week = count;
        let today = new Date();
        let weekAgo = new Date();
        weekAgo.setDate(today.getDate() - week);

        today = today.toISOString().slice(firstElement, dateLength)
        weekAgo = weekAgo.toISOString().slice(firstElement, dateLength)

        const myQuestion = question.value;
        if (myQuestion.length === firstElement) {
            preloaderNotfound.style.display = 'flex';
            notFoundTitle.textContent = 'Ошибка! Необходимо ввести хотя бы одно ключевое слово!'
            preloaderAwait.style.display = 'none';
            notFoundText.textContent = '';
            this._activateForm();
        } else {
            this.newsloader.getCards(myQuestion, weekAgo, today).then(cards => {
                if (cards.totalResults === firstElement) {
                    preloaderAwait.style.display = 'none';
                    preloaderNotfound.style.display = 'flex';
                    notFoundTitle.textContent = 'Ничего не найдено';
                    notFoundText.textContent = 'К сожалению по вашему запросу ничего не найдено.';
                    searchResult.style.display = 'none';
                    this._activateForm();
                } else {
                    this._successSearchStyling(cards);
                    this.load.render(cards, myQuestion, isLoggedIn);
                    if (document.querySelector('.search-result__button')) {
                        const showMore = document.querySelector('.search-result__button');
                        this._showMoreLogic(showMore, cards, myQuestion, isLoggedIn);
                    }
                }
            }).catch(() => {
                preloaderAwait.style.display = 'none';
                preloaderNotfound.style.display = 'flex';
                notFoundTitle.textContent = ''
                notFoundText.textContent = 'Произошла ошибка. Повторите попытку поиска.'
                this._activateForm();
            });
        }
    }
}


