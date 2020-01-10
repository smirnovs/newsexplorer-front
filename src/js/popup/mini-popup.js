export class Minipopup {
    constructor(popup, miniPopup) {
        this.popup = popup;
        this.miniPopup = miniPopup;
        this.miniPopupEnter = this.miniPopup.querySelector('.mini-popup__enter');
        this.miniPopupClose = this.miniPopup.querySelector('.mini-popup__close');
        this._gotoenter = this._gotoenter.bind(this);
        this._close = this._close.bind(this);
    }
    _gotoenter() {
        this.miniPopup.classList.toggle('mini-popup_is-opened');
        this.popup.open();
        this.popup.tologin();
    }
    _close() {
        this.miniPopup.classList.toggle('mini-popup_is-opened');
    }
    addListeners() {
        this.miniPopupEnter.addEventListener('click', this._gotoenter);
        this.miniPopupClose.addEventListener('click', this._close);
    }
}
