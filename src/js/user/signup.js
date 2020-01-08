import { popupReg, miniPopup } from '../popup/popup.js';
import { userMail, userPwd, userName, notMailError } from '../popup/popup-validate.js';

export class Signup {
    constructor(popup, miniPopupCallback, api) {
        this.popup = popup;
        this.miniPopupCallback = miniPopupCallback;
        this.api = api;
        this._signup = this._signup.bind(this);
    }
    _signup() {
        event.preventDefault();
        this.api.createUser(userMail.value, userPwd.value, userName.value)
            .then(res => {
                if (res.status === 201) {
                    miniPopup.classList.add('mini-popup_is-opened');
                    this.popup.close();
                    this.miniPopupCallback(this.popup);
                } else {
                    notMailError.style.display = 'inline-block'
                    notMailError.textContent = res.message;
                }
            }).catch(err => {
                console.log(err);
            });
    }
    addListener() {
        popupReg.addEventListener('click', this._signup)
    }
}
