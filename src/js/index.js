import "../pages/index/index.css";
import { Popup } from './popup/popup.js';
import { Mobilemenu } from './helpers/mobilemenu.js';
import { Search, searchResult } from './searcher/search.js';
import { Signup } from "./user/signup";
import { Signin } from "./user/signin";
// import { api } from "./api/api.js";
import { Api } from "./api/api.js";
import { Header, authButton } from "./header/header.js";
import { ICON_MOBILE_WHITE_CLOSED, HEADER_COLOR, NEWSAPI_URL } from "./helpers/messages.js";
import { Mobileheader, mobileAuthButton } from "./header/mobileheader.js";

const isOpenMenu = false;
const isHeader = true;

new Search();
new Popup();
new Signup();
new Signin();
new Mobilemenu(ICON_MOBILE_WHITE_CLOSED, isOpenMenu, isHeader, HEADER_COLOR);
const api = new Api({
    baseUrl: NEWSAPI_URL,
    headers: {
        // authorization: '67fcbb6d7e14456f995c19d4a0f3cfbc',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

api.checkAuth().then((user) => {
    // console.log(user)
    const isLoggedIn = true;
    const userLogin = user.name;
    new Header({ isLoggedIn, userLogin });
    new Mobileheader({ isLoggedIn, userLogin });

}).catch((err) => {
    console.log('Посетитель не авторизован');
});


authButton.addEventListener('click', () => {
    api.unAuth().then(res => {
        if (res.ok) {
            const isLoggedIn = false;
            const userLogin = '';
            new Header({ isLoggedIn, userLogin });
            new Mobileheader({ isLoggedIn, userLogin });
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
            new Header({ isLoggedIn, userLogin });
            new Mobileheader({ isLoggedIn, userLogin });
            searchResult.style.display = 'none';
        } else {
            return Promise.reject(res.status);
        }

    }).catch(err => {
        console.log(err);
    });
})