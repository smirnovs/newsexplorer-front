import { PopupValidate, userMail, userPwd, userName, shortPwdError } from '../popup/popup-validate.js';

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
    constructor() {
        this.addListeners();
    }

    open() {
        popUp.classList.toggle('popup_is-opened');
        validate.disableButton();
    }
    close() {
        popUp.classList.toggle('popup_is-opened');
        validate.clearFields();
    }

    toregister() {
        shortPwdError.style.bottom = '180px';
        popupTitle.textContent = 'Регистрация';
        toRegister.style.display = 'none'
        popupEnter.style.display = 'none'
        popupReg.style.display = 'inline-block'
        toLogin.style.display = 'inline-block';
        wrongData.style.display = 'none'
        validate.clearFields();
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
        validate.clearFields();
        display('none');
    }
    addListeners() {
        authButton.addEventListener('click', this.open);
        mobileAuth.addEventListener('click', this.open);
        popupCloseButton.addEventListener('click', this.close);
        toRegister.addEventListener('click', this.toregister);
        toLogin.addEventListener('click', this.tologin);
        userMail.addEventListener('input', validate.isMail);
        userPwd.addEventListener('input', validate.isPwd);
        userName.addEventListener('input', validate.isName);

    }
}
const validate = new PopupValidate();
const display = (status) => {
    popupInputNameSbt.style.display = status;
    popupInputName.style.display = status;
}