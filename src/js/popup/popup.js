const authButton = document.querySelector('.header__login');
const popupCloseButton = document.querySelector('.popup__close');
const popUp = document.querySelector('.popup');
const mobileAuth = document.querySelector('.menumobile__login');


export class Popup {
    constructor() {
        this.addListeners();
    }
    open() {
        popUp.classList.toggle('popup_is-opened');
    }
    close() {
        popUp.classList.toggle('popup_is-opened');
    }
    addListeners() {
        authButton.addEventListener('click', this.open);
        mobileAuth.addEventListener('click', this.open);
        popupCloseButton.addEventListener('click', this.close);
    }
}

