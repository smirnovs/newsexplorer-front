import { Api } from '../api/api.js'
import { Popup, popupEnter } from '../popup/popup.js';
import { userMail, userPwd } from '../popup/popup-validate.js';
import { Header } from '../header/header.js';
import { Search } from '../searcher/searcher.js';

const errorAuth = document.querySelector('.popup__error_auth');
const regUrl = 'https://api.myedudomen.ml';

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
                    let isLoggedIn = true;
                    let userLogin = user.name;
                    new Header({ isLoggedIn, userLogin });
                    // new Search(isLoggedIn);
                    popup.close();
                }).catch(() => {
                    console.log(err);
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
            return err;
        });
    }
    addListener() {
        popupEnter.addEventListener('click', this.signin);
    }
}

const popup = new Popup();

const api = new Api({
    baseUrl: regUrl,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});