import { Api } from '../api/api.js'
import { Popup, popupReg, miniPopup } from '../popup/popup.js';
import { userMail, userPwd, userName, notMailError } from '../popup/popup-validate.js';
import { NEWSAPI_URL } from '../helpers/messages.js';
import { Minipopup } from '../popup/mini-popup.js';

export class Signup {
    constructor() {
        this.addListener();
    }
    signup() {
        event.preventDefault();
        api.createUser(userMail.value, userPwd.value, userName.value)
            .then(res => {
                if (res.ok) {
                    return Promise.resolve(res);
                } else {
                    return Promise.resolve(res.json());
                }
            })
            .then(res => {
                if (res.status === 201) {
                    miniPopup.classList.add('mini-popup_is-opened');
                    popup.close();
                    new Minipopup();
                } else {
                    notMailError.style.display = 'inline-block'
                    notMailError.textContent = res.message;
                }
            }).catch(err => {
                console.log(err);
            });
    }
    addListener() {
        popupReg.addEventListener('click', this.signup)
    }
}

const popup = new Popup();

const api = new Api({
    baseUrl: NEWSAPI_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});