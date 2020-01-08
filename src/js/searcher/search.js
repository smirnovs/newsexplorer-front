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
    constructor(api, newsloader, load, showMoreCallback) {
        this.api = api;
        this.newsloader = newsloader;
        this.load = load;
        this.showMoreCallback = showMoreCallback;
        this._checkAuth = this._checkAuth.bind(this);
        
        searchButton.addEventListener('click', this._checkAuth);
    }
    _successSearchStyling(cards) {
        preloader.style.display = 'none';
        searchResult.style.display = 'flex';
        if (cards.totalResults > 3) {
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
    _checkAuth() {
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
            this.newsloader.getCards(myQuestion, weekAgo, today).then(cards => {
                if (cards.totalResults === 0) {
                    preloaderAwait.style.display = 'none';
                    preloaderNotfound.style.display = 'flex';
                    notFoundTitle.textContent = 'Ничего не найдено'
                    notFoundText.textContent = 'К сожалению по вашему запросу ничего не найдено.'
                    searchResult.style.display = 'none'
                } else {
                    this._successSearchStyling(cards);
                    if (cards.articles.length < 3) {
                        const count = cards.articles.length
                        this.load.render(0, count, cards, myQuestion, isLoggedIn);
                    } else {
                        const count = 3
                        this.load.render(0, count, cards, myQuestion, isLoggedIn);
                    }
                    if (document.querySelector('.search-result__button')) {
                        const showMore = document.querySelector('.search-result__button');
                        this._showMoreLogic(showMore, cards, myQuestion, isLoggedIn);
                    }
                }
            }).catch(() => {
                preloaderAwait.style.display = 'none';
                preloaderNotfound.style.display = 'flex';
            });
        }
    }
}

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


