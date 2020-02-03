export class Minipopup {
    constructor(popup, miniPopup) {
        this.popup = popup;
        this.miniPopup = miniPopup;
        this.miniPopupEnter = this.miniPopup.querySelector('.mini-popup__enter');
        this.miniPopupClose = this.miniPopup.querySelector('.mini-popup__close');
        this._gotoenter = this._gotoenter.bind(this);
        this._close = this._close.bind(this);
        this._clickClose = this._clickClose.bind(this);
        this._escClose = this._escClose.bind(this);
    }
    _gotoenter() {
        this.miniPopup.classList.toggle('mini-popup_is-opened');
        this.popup.open();
        this.popup.tologin();
    }
    _close() {
        this.miniPopup.classList.toggle('mini-popup_is-opened');
        document.body.style.overflow = 'overlay';
    }
    _clickClose() {
        if (event.target.classList.contains('mini-popup')) {
            this._close();
        }
    }
    _escClose() {
        if (event.keyCode == 27 && this.miniPopup.classList.contains('mini-popup_is-opened')) {
            this._close();
        }
    }
    addListeners() {
        this.miniPopupEnter.addEventListener('click', this._gotoenter);
        this.miniPopupClose.addEventListener('click', this._close);
        this.miniPopup.addEventListener('click', this._clickClose);
        document.addEventListener('keydown', this._escClose);
    }
}
