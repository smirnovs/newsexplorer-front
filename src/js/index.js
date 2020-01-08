import "../pages/index/index.css";
import { Popup } from './popup/popup.js';
import { Mobilemenu } from './helpers/mobilemenu.js';
import { Search, searchResult } from './searcher/search.js';
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

const isOpenMenu = false;
const isHeader = true;

const createCardCallback = (api, cardContainer, isLoggedIn, isSaved, isExist, pseudoId, myQuestion, url, urlToImage, publishedAt, title, description, source, id) =>{
    const { cardElement } = new Card(api, isLoggedIn, isSaved, isExist, pseudoId, myQuestion, url, urlToImage, publishedAt, title, description, source, id);
    cardContainer.appendChild(cardElement);
}

const load = new Render(api, createCardCallback);

const showMoreCallback = (showButton, cards, myQuestion, isLoggedIn, render) => {
    const btnLogic = new Showmore({ cards, myQuestion, showButton, isLoggedIn, render });
    showButton.addEventListener('click', function () { btnLogic.showcards() });
}

new Search(api, newsloader, load, showMoreCallback);

const mobilemenu = new Mobilemenu(ICON_MOBILE_WHITE_CLOSED, isOpenMenu, isHeader, HEADER_COLOR);
mobilemenu.addListeners();

const validate = new PopupValidate();
const popup = new Popup(validate);
popup.addListeners();

const headerCallback = ({ isLoggedIn, userLogin }) => {
    const header = new Header({ isLoggedIn, userLogin });
    const mobileheader = new Mobileheader({ isLoggedIn, userLogin });
    header.render();
    mobileheader.render();
}

const signin = new Signin(popup, headerCallback, api);
signin.addListener();

const miniPopupCallback = (popup) => {
    const miniPopup = new Minipopup(popup);
    miniPopup.addListeners();
}
const signup = new Signup(popup, miniPopupCallback, api);
signup.addListener();

api.checkAuth().then((user) => {
    const isLoggedIn = true;
    const userLogin = user.name;
    headerCallback({ isLoggedIn, userLogin });
}).catch((err) => {
    console.log('Посетитель не авторизован');
});


authButton.addEventListener('click', () => {
    api.unAuth().then(res => {
        if (res.ok) {
            const isLoggedIn = false;
            const userLogin = '';
            headerCallback({ isLoggedIn, userLogin });
            searchResult.style.display = 'none';
        } else {
            return Promise.reject(res.status);
        }

    }).catch(err => {
        console.log(err);
    });
})

mobileAuthButton.addEventListener('click', () => {
    api.unAuth().then(res => {
        if (res.ok) {
            const isLoggedIn = false;
            const userLogin = '';
            headerCallback({ isLoggedIn, userLogin });
            searchResult.style.display = 'none';
        } else {
            return Promise.reject(res.status);
        }

    }).catch(err => {
        console.log(err);
    });
})