import { goodStatus } from '../helpers/messages.js';

export class Signup {
    constructor(popup, popupElement, miniPopup, miniPopupCallback, api, validate) {
        this.popup = popup;
        this.popupElement = popupElement;
        this.miniPopupCallback = miniPopupCallback;
        this.api = api;
        this.validate = validate;
        this.miniPopup = miniPopup;
        this._signup = this._signup.bind(this);
        this.popupReg = this.popupElement.querySelector('.popup__button_reg');
        this.notMailError = this.popupElement.querySelector('.popup__error_email');
        this.popupForm = this.popupElement.querySelector('.popup__form');
        this.userMail = this.popupForm.elements.usermail;
        this.userPwd = this.popupForm.elements.userpwd;
        this.userName = this.popupForm.elements.username;
    }
    _signup() {
        event.preventDefault();
        this.validate.disableInputs();
        this.api.createUser(this.userMail.value, this.userPwd.value, this.userName.value)
            .then(res => {
                if (res.status === goodStatus) {
                    this.miniPopup.classList.add('mini-popup_is-opened');
                    this.popup.close();
                    this.miniPopupCallback(this.popup);
                } else {
                    this.notMailError.style.display = 'inline-block'
                    this.notMailError.textContent = res.message;
                    this.validate.enableInputs();
                }
            }).catch(err => {
                console.log(err);
            });
    }
    addListener() {
        this.popupReg.addEventListener('click', this._signup)
    }
}
