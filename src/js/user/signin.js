import { Api } from '../api/api.js'
import { Popup, popupEnter } from '../popup/popup.js';
import { userMail, userPwd } from '../popup/popup-validate.js';
import { Header } from '../header/header.js';
// import { Search } from '../searcher/searcher.js';
import { NEWSAPI_URL } from '../helpers/messages.js';
import { Mobileheader } from '../header/mobileheader.js';
// import { searchResult } from "../searcher/searcher.js";

// const searchResult = document.querySelector('.search-result__container')

const errorAuth = document.querySelector('.popup__error_auth');
// const regUrl = 'https://api.myedudomen.ml';

export class Signin {
    constructor() {
        this.addListener();
    }
    signin() {
        event.preventDefault();
        api.loginUser(userMail.value, userPwd.value).then((res) => {
            if (res.ok) {
                api.checkAuth().then(res => {
                    // console.log(res)
                    if (res.ok) {
                        return Promise.resolve(res.json());
                    } else {
                        return Promise.reject(res.status);
                    }
                }).then((user) => {
                    let isLoggedIn = true;
                    let userLogin = user.name;
                    new Header({ isLoggedIn, userLogin });
                    new Mobileheader({ isLoggedIn, userLogin });
                    // new Search(isLoggedIn);
                    popup.close();
                    if (document.querySelector('.search-result__container')) {
                        const searchResult = document.querySelector('.search-result__container')
                        searchResult.style.display = 'none';
                    }
                    // window.location.replace(MAIN_PAGE);
                }).catch(() => {
                    // console.log(err);
                    console.log('Не удалось авторизоваться');
                });
                return Promise.resolve();
            } else {
                res.json().then((res) => {
                    return Promise.reject(res);
                }).catch((err) => {
                    console.log(err)
                    errorAuth.style.display = 'block';
                    errorAuth.textContent = err.message;
                })
                // console.log(res.json())
                return Promise.reject(res);
            }
        }).catch((err) => {
            console.log('Не удалось авторизоваться');
            return err;
        });
    }
    addListener() {
        popupEnter.addEventListener('click', this.signin);
    }
}

const popup = new Popup();

const api = new Api({
    baseUrl: NEWSAPI_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});