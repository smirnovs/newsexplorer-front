import "../pages/index/index.css";
import { Popup } from './popup/popup.js';
import { Mobilemenu } from './helpers/mobilemenu.js';
import { Search } from './searcher/search.js';
import { Signup } from "./user/signup";
import { Signin } from "./user/signin";
import { Api } from "./api/api.js";
import { NewsLoaderApi } from "./api/news-loader-api.js";
import { Header, authButton } from "./header/header.js";
import { ICON_MOBILE_WHITE_CLOSED, HEADER_COLOR, NEWSAPI_URL, SEARCH_NEWS } from "./helpers/messages.js";
import { Mobileheader, mobileAuthButton } from "./header/mobileheader.js";
import { PopupValidate } from './popup/popup-validate.js';
import { Minipopup } from './popup/mini-popup.js';
import { Render } from './searcher/render.js'
import { Showmore } from './searcher/showmore.js'
import { Card } from './card/card.js';

const popupElement = document.querySelector('.popup');
const searchButton = document.querySelector('.search__button');
const miniAuthPopup = document.querySelector('.mini-popup');
const mobileMenu = document.querySelector('.menumobile');

const isOpenMenu = false;
const isHeader = true;

const api = new Api({
    baseUrl: NEWSAPI_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

const newsloader = new NewsLoaderApi({
    baseUrl: SEARCH_NEWS,
    headers: {
        authorization: '67fcbb6d7e14456f995c19d4a0f3cfbc',
    }
})

const createCardCallback = (api, cardContainer, isLoggedIn, isSaved, isExist, pseudoId, myQuestion, url, urlToImage, publishedAt, title, description, source, id) => {
    const cardElement = new Card(api, isLoggedIn, isSaved, isExist, pseudoId, myQuestion, url, urlToImage, publishedAt, title, description, source, id);
    const card = cardElement.create();
    cardElement.addListeners(card);
    cardContainer.appendChild(card);
}

const showMoreCallback = (showButton, cards, myQuestion, isLoggedIn, render) => {
    const btnLogic = new Showmore({ cards, myQuestion, showButton, isLoggedIn, render });
    showButton.addEventListener('click', function () { btnLogic.showcards() });
}

const headerCallback = ({ isLoggedIn, userLogin }) => {
    const header = new Header({ isLoggedIn, userLogin });
    const mobileheader = new Mobileheader({ isLoggedIn, userLogin });
    header.render();
    mobileheader.render();
}

const miniPopupCallback = (popup) => {
    const miniPopup = new Minipopup(popup, miniAuthPopup);
    miniPopup.addListeners();
    document.body.style.overflow = 'hidden';
}

const unAuthCallback = () => {
    api.unAuth().then(res => {
        if (res.ok) {
            const isLoggedIn = false;
            const userLogin = '';
            headerCallback({ isLoggedIn, userLogin });
        } else {
            return Promise.reject(res.status);
        }

    }).catch(err => {
        console.log(err);
    });
}

const load = new Render(api, createCardCallback);
const search = new Search(api, newsloader, load, showMoreCallback, searchButton);
const mobilemenu = new Mobilemenu(mobileMenu, ICON_MOBILE_WHITE_CLOSED, isOpenMenu, isHeader, HEADER_COLOR);
const validate = new PopupValidate(popupElement);
const popup = new Popup(validate, popupElement);
const signin = new Signin(popup, popupElement, headerCallback, api, validate);
const signup = new Signup(popup, popupElement, miniAuthPopup, miniPopupCallback, api, validate);

api.checkAuth().then((user) => {
    const isLoggedIn = true;
    const userLogin = user.name;
    headerCallback({ isLoggedIn, userLogin });
}).catch((err) => {
    console.log('Посетитель не авторизован');
});

searchButton.addEventListener('click', search.checkAuth);
mobilemenu.addListeners();
popup.addListeners();
signin.addListener();
signup.addListener();

authButton.addEventListener('click', unAuthCallback)

mobileAuthButton.addEventListener('click', unAuthCallback)