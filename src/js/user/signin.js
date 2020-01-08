import { popupEnter } from '../popup/popup.js';
import { userMail, userPwd } from '../popup/popup-validate.js';


const errorAuth = document.querySelector('.popup__error_auth');

export class Signin {
    constructor(popup, headerCallback, api) {
        this.popup = popup;
        this.headerCallback = headerCallback;
        this.api = api;
        this._signin = this._signin.bind(this);
    }
    _signin() {
        event.preventDefault();
        
        this.api.loginUser(userMail.value, userPwd.value).then((res) => {
            if (res.ok) {
                this.api.checkAuth()
                .then((user) => {
                    const isLoggedIn = true;
                    const userLogin = user.name;
                    this.headerCallback({ isLoggedIn, userLogin });
                    this.popup.close();
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
        popupEnter.addEventListener('click', this._signin);
    }
}