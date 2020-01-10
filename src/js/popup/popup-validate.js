const isEmail = require('is-email');
import { count, maxShowed } from '../helpers/messages.js';

export class PopupValidate {
    constructor(popupElement) {
        this.popupElement = popupElement;
        this.popupEnter = this.popupElement.querySelector('.popup__button_enter');
        this.popupReg = this.popupElement.querySelector('.popup__button_reg');
        this.wrongData = this.popupElement.querySelector('.popup__error_auth');
        this.popupForm = this.popupElement.querySelector('.popup__form');
        this.shortPwdError = this.popupElement.querySelector('.popup__error_pwd');
        this.shortNameError = this.popupElement.querySelector('.popup__error_user');
        this.notMailError = this.popupElement.querySelector('.popup__error_email');
        this.userMail = this.popupForm.elements.usermail;
        this.userPwd = this.popupForm.elements.userpwd;
        this.userName = this.popupForm.elements.username;
        this.isMail = this.isMail.bind(this);
        this.isPwd = this.isPwd.bind(this);
        this.isName = this.isName.bind(this);
    }
    clearFields() {
        this.popupForm.reset();
        this.notMailError.style.display = 'none';
        this.shortPwdError.style.display = 'none'
        this.shortNameError.style.display = 'none'
        this.wrongData.style.display = 'none'
    }
    disableInputs() {
        this.userMail.readOnly = true;
        this.userPwd.readOnly = true;
        this.userName.readOnly = true;

        this.userMail.classList.add('readonly');
        this.userPwd.classList.add('readonly');
        this.userName.classList.add('readonly');
    }
    enableInputs() {
        this.userMail.readOnly = false;
        this.userPwd.readOnly = false;
        this.userName.readOnly = false;

        this.userMail.classList.remove('readonly');
        this.userPwd.classList.remove('readonly');
        this.userName.classList.remove('readonly');
    }
    disableButton() {
        this.popupEnter.setAttribute('disabled', true);
        this.popupEnter.classList.add('popup__button_disabled')
        this.popupReg.setAttribute('disabled', true);
        this.popupReg.classList.add('popup__button_disabled')
    }
    enableButton(button) {
        button.removeAttribute('disabled');
        button.classList.remove('popup__button_disabled')
    }
    isMail() {
        this.notMailError.textContent = 'Неправильный формат email';
        if (!isEmail(this.userMail.value)) {
            this.notMailError.style.display = 'inline-block'
            this.disableButton(this.popupEnter);
            return false;
        } else {
            this.notMailError.style.display = 'none'
            if (this.userPwd.value.length >= count && this.userName.value.length >= maxShowed) {
                this.enableButton(this.popupReg);
            }
            if (this.userPwd.value.length >= count) {
                this.enableButton(this.popupEnter);
                return true;
            } else {
                this.disableButton();
                return false;
            }
        }
    }
    isPwd() {
        if (this.userPwd.validity.tooShort) {
            this.shortPwdError.style.display = 'inline-block'
            this.disableButton();
            return false;
        } else {
            this.shortPwdError.style.display = 'none';
            if (isEmail(this.userMail.value) && this.userName.value.length >= maxShowed) {
                this.enableButton(this.popupReg);
            }
            if (isEmail(this.userMail.value)) {
                this.enableButton(this.popupEnter)
                return true;
            } else {
                this.disableButton();
                return false;
            }
        }
    }
    isName() {
        if (this.userName.validity.tooShort) {
            this.shortNameError.style.display = 'inline-block';
            this.disableButton();
        } else {
            this.shortNameError.style.display = 'none';
            if (isEmail(this.userMail.value) && this.userPwd.value.length >= count) {
                this.enableButton(this.popupReg);
            } else {
                this.disableButton();
            }
        }
    }
}