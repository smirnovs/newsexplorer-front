const isEmail = require('is-email');
import { popupEnter, popupReg, wrongData } from './popup.js'
const popupForm = document.forms.logincontrol;
export const userMail = popupForm.elements.usermail;
export const userPwd = popupForm.elements.userpwd;
export const userName = popupForm.elements.username;
export const notMailError = document.querySelector('.popup__error_email');
export const shortPwdError = document.querySelector('.popup__error_pwd');
const shortNameError = document.querySelector('.popup__error_user');




export class PopupValidate {
    constructor() {
        this.isMail = this.isMail.bind(this);
        this.isPwd = this.isPwd.bind(this);
        this.isName = this.isName.bind(this);
    }
    clearFields() {
        popupForm.reset();
        notMailError.style.display = 'none';
        shortPwdError.style.display = 'none'
        shortNameError.style.display = 'none'
        wrongData.style.display = 'none'
    }
    disableButton() {
        popupEnter.setAttribute('disabled', true);
        popupEnter.classList.add('popup__button_disabled')
        popupReg.setAttribute('disabled', true);
        popupReg.classList.add('popup__button_disabled')
    }
    _enableButton(button) {
        button.removeAttribute('disabled');
        button.classList.remove('popup__button_disabled')
    }
    isMail() {
        notMailError.textContent = 'Неправильный формат email';
        if (!isEmail(userMail.value)) {
            notMailError.style.display = 'inline-block'
            this.disableButton(popupEnter);
            return false;
        } else {
            notMailError.style.display = 'none'
            if (userPwd.value.length >= 6 && userName.value.length >= 3) {
                this._enableButton(popupReg);
            }
            if (userPwd.value.length >= 6) {
                this._enableButton(popupEnter);
                return true;
            } else {
                this.disableButton();
                return false;
            }
        }
    }
    isPwd() {
        if (userPwd.validity.tooShort) {
            shortPwdError.style.display = 'inline-block'
            this.disableButton();
            return false;
        } else {
            shortPwdError.style.display = 'none';
            if (isEmail(userMail.value) && userName.value.length >= 3) {
                this._enableButton(popupReg);
            }
            if (isEmail(userMail.value)) {
                this._enableButton(popupEnter)
                return true;
            } else {
                this.disableButton();
                return false;
            }
        }
    }
    isName() {
        if (userName.validity.tooShort) {
            shortNameError.style.display = 'inline-block';
            this.disableButton();
        } else {
            shortNameError.style.display = 'none';
            if (isEmail(userMail.value) && userPwd.value.length >= 6) {
                this._enableButton(popupReg);
            } else {
                this.disableButton();
            }
        }
    }
}