import { userMail, userPwd } from '../popup/popup-validate.js';

const authButton = document.querySelector('.header__login_unauth');
const popupCloseButton = document.querySelector('.popup__close');
export const popUp = document.querySelector('.popup');
const mobileAuth = document.querySelector('.menumobile__login');
const toRegister = document.querySelector('.popup__reg');
// const offerText = document.querySelector('.popup__offer');
const popupTitle = document.querySelector('.popup__title');
const popupInputNameSbt = document.querySelector('.popup__input_name-sbt');
const popupInputName = document.querySelector('.popup__input_name');
const popupErrorUser = document.querySelector('.popup__error_user');
const toLogin = document.querySelector('.popup__auth');
export const popupEnter = popUp.querySelector('.popup__button_enter');
export const popupReg = popUp.querySelector('.popup__button_reg');

export class Popup {
    constructor() {
        this.addListeners();
    }
    open() {
        popUp.classList.toggle('popup_is-opened');
    }
    close() {
        popUp.classList.toggle('popup_is-opened');
        userMail.value = '';
        userPwd.value = '';
    }
    toregister() {
        popupTitle.textContent = 'Регистрация';
        toRegister.style.display = 'none'
        popupEnter.style.display = 'none'
        popupReg.style.display = 'inline-block'
        toLogin.style.display = 'inline-block';
        display('inline-block');
    }
    tologin() {
        console.log('slasd')
        popupTitle.textContent = 'Вход';
        toRegister.style.display = 'inline-block'
        toLogin.style.display = 'none';
        popupReg.style.display = 'none'
        popupEnter.style.display = 'inline-block'
        display('none');
    }
    addListeners() {
        authButton.addEventListener('click', this.open);
        mobileAuth.addEventListener('click', this.open);
        popupCloseButton.addEventListener('click', this.close);
        toRegister.addEventListener('click', this.toregister);
        toLogin.addEventListener('click', this.tologin);
    }
}

const display = (status) => {
    popupInputNameSbt.style.display = status;
    popupInputName.style.display = status;
    popupErrorUser.style.display = status;
}