import { miniPopup } from '../popup/popup.js';

const miniPopupEnter = document.querySelector('.mini-popup__enter');
const miniPopupClose = document.querySelector('.mini-popup__close');

export class Minipopup {
    constructor(popup){
        this.popup = popup;
        this._gotoenter = this._gotoenter.bind(this);
        this._close = this._close.bind(this);
    }
   _gotoenter(){
        miniPopup.classList.toggle('mini-popup_is-opened');
        this.popup.open();
        this.popup.tologin();
    }
    _close() {
        miniPopup.classList.toggle('mini-popup_is-opened');
    }
    addListeners() {
        miniPopupEnter.addEventListener('click', this._gotoenter);
        miniPopupClose.addEventListener('click', this._close);
    }
}
