import { userMail, userPwd, userName, shortPwdError } from '../popup/popup-validate.js';

const authButton = document.querySelector('.header__login_unauth');
const popupCloseButton = document.querySelector('.popup__close');
export const popUp = document.querySelector('.popup');
const mobileAuth = document.querySelector('.menumobile__login');
const toRegister = document.querySelector('.popup__reg');
const popupTitle = document.querySelector('.popup__title');
const popupInputNameSbt = document.querySelector('.popup__input_name-sbt');
const popupInputName = document.querySelector('.popup__input_name');
export const wrongData = document.querySelector('.popup__error_auth');
const toLogin = document.querySelector('.popup__auth');
export const popupEnter = popUp.querySelector('.popup__button_enter');
export const popupReg = popUp.querySelector('.popup__button_reg');
export const miniPopup = document.querySelector('.mini-popup');


export class Popup {
    constructor(validate) {
        this.validate = validate;
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this._toregister = this._toregister.bind(this);
        this.tologin = this.tologin.bind(this);
    }

    open() {
        popUp.classList.toggle('popup_is-opened');
        this.validate.disableButton();
    }
    close() {
        popUp.classList.toggle('popup_is-opened');
        this.validate.clearFields();
    }

    _toregister() {
        shortPwdError.style.bottom = '180px';
        popupTitle.textContent = 'Регистрация';
        toRegister.style.display = 'none'
        popupEnter.style.display = 'none'
        popupReg.style.display = 'inline-block'
        toLogin.style.display = 'inline-block';
        wrongData.style.display = 'none'
        this.validate.clearFields();
        display('inline-block');
    }
    tologin() {
        shortPwdError.style.bottom = '129px';
        wrongData.style.display = 'none'
        popupTitle.textContent = 'Вход';
        toRegister.style.display = 'inline-block'
        toLogin.style.display = 'none';
        popupReg.style.display = 'none'
        popupEnter.style.display = 'inline-block'
        this.validate.clearFields();
        display('none');
    }
    addListeners() {
        authButton.addEventListener('click', this.open);
        mobileAuth.addEventListener('click', this.open);
        popupCloseButton.addEventListener('click', this.close);
        toRegister.addEventListener('click', this._toregister);
        toLogin.addEventListener('click', this.tologin);
        userMail.addEventListener('input', this.validate.isMail);
        userPwd.addEventListener('input', this.validate.isPwd);
        userName.addEventListener('input', this.validate.isName);

    }
}

const display = (status) => {
    popupInputNameSbt.style.display = status;
    popupInputName.style.display = status;
}