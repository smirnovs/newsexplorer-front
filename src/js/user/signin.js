import { Api } from '../api/api.js'
import { Popup, popupEnter } from '../popup/popup.js';
import { userMail, userPwd } from '../popup/popup-validate.js';
import { Header } from '../header/header.js';
import { NEWSAPI_URL } from '../helpers/messages.js';
import { Mobileheader } from '../header/mobileheader.js';


const errorAuth = document.querySelector('.popup__error_auth');

export class Signin {
    constructor() {
        this.addListener();
    }
    signin() {
        event.preventDefault();
        api.loginUser(userMail.value, userPwd.value).then((res) => {
            if (res.ok) {
                api.checkAuth().then(res => {
                    if (res.ok) {
                        return Promise.resolve(res.json());
                    } else {
                        return Promise.reject(res.status);
                    }
                }).then((user) => {
                    const isLoggedIn = true;
                    const userLogin = user.name;
                    new Header({ isLoggedIn, userLogin });
                    new Mobileheader({ isLoggedIn, userLogin });
                    popup.close();
                    if (document.querySelector('.search-result__container')) {
                        const searchResult = document.querySelector('.search-result__container')
                        searchResult.style.display = 'none';
                    }
                }).catch(() => {
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