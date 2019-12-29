import { Api } from '../api/api.js'
import { Popup, popupReg, miniPopup } from '../popup/popup.js';
import { userMail, userPwd, userName, notMailError } from '../popup/popup-validate.js';
import { NEWSAPI_URL } from '../helpers/messages.js';
import { Minipopup } from '../popup/mini-popup.js';


// const regUrl = 'https://api.myedudomen.ml';

export class Signup {
    constructor() {
        this.addListener();
    }
    signup() {
        event.preventDefault();
        api.createUser(userMail.value, userPwd.value, userName.value)
        .then(res => {
            // miniPopup.classList.add('mini-popup_is-opened');
            if(res.ok) {
                return Promise.resolve(res);
            } else {
                return Promise.resolve(res.json());
            }
        })
        .then(res => {
            if(res.status === 201){
                miniPopup.classList.add('mini-popup_is-opened');
                popup.close();
                new Minipopup();
            } else {
                notMailError.style.display = 'inline-block'
                notMailError.textContent = res.message;
                console.log(res)
            }
        }).catch(err => {
            console.log(err);
        });
        // console.log(userMail.value);
    }
    addListener() {
        popupReg.addEventListener('click', this.signup)
        // userMail.addEventListener('input', this.signup)
        // userPwd.addEventListener('input', this.signup)
        // userName.addEventListener('input', this.signup)
    }
}

const popup = new Popup();

const api = new Api({
    baseUrl: NEWSAPI_URL,
    headers: {
        // authorization: '67fcbb6d7e14456f995c19d4a0f3cfbc',
        'Content-Type': 'application/json'
    }
});