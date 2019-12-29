import { Popup, miniPopup } from '../popup/popup.js';

const miniPopupEnter = document.querySelector('.mini-popup__enter');
const miniPopupClose = document.querySelector('.mini-popup__close');

export class Minipopup {
    constructor(){
        this.addListeners();
    }
   gotoenter(){
        miniPopup.classList.toggle('mini-popup_is-opened');
        popup.open();
        popup.tologin();
    }
    close() {
        miniPopup.classList.toggle('mini-popup_is-opened');
    }
    addListeners() {
        miniPopupEnter.addEventListener('click', this.gotoenter);
        miniPopupClose.addEventListener('click', this.close);
    }
}

const popup = new Popup();

