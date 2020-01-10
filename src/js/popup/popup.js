const authButton = document.querySelector('.header__login_unauth');
const mobileAuth = document.querySelector('.menumobile__login');

export class Popup {
    constructor(validate, popupElement) {
        this.validate = validate;
        this.popupElement = popupElement;
        this.closeButton = this.popupElement.querySelector('.popup__close');
        this.toRegister = this.popupElement.querySelector('.popup__reg');
        this.toLogin = this.popupElement.querySelector('.popup__auth');
        this.popupTitle = this.popupElement.querySelector('.popup__title');
        this.popupInputNameSbt = this.popupElement.querySelector('.popup__input_name-sbt');
        this.popupInputName = this.popupElement.querySelector('.popup__input_name');
        this.popupEnter = this.popupElement.querySelector('.popup__button_enter');
        this.popupReg = this.popupElement.querySelector('.popup__button_reg');
        this.wrongData = this.popupElement.querySelector('.popup__error_auth');
        this.shortPwdError = this.popupElement.querySelector('.popup__error_pwd');

        this.popupForm = this.popupElement.querySelector('.popup__form');
        this.userMail = this.popupForm.elements.usermail;
        this.userPwd = this.popupForm.elements.userpwd;
        this.userName = this.popupForm.elements.username;
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.clickClose = this.clickClose.bind(this);
        this.escClose = this.escClose.bind(this);
        this._toregister = this._toregister.bind(this);
        this.tologin = this.tologin.bind(this);
    }
    display(status) {
        this.popupInputNameSbt.style.display = status;
        this.popupInputName.style.display = status;
    }
    open() {
        this.popupElement.classList.toggle('popup_is-opened');
        this.validate.disableButton();
        this.validate.enableInputs();
    }
    close() {
        this.popupElement.classList.toggle('popup_is-opened');
        this.validate.clearFields();
    }
    clickClose() {
        if (event.target.classList.contains('popup')) {
            this.close();
        }
    }
    escClose() {
        if (event.keyCode == 27 && this.popupElement.classList.contains('popup_is-opened')) {
            this.close();
        }
    }
    _toregister() {
        this.shortPwdError.style.bottom = '180px';
        this.popupTitle.textContent = 'Регистрация';
        this.toRegister.style.display = 'none'
        this.toLogin.style.display = 'inline-block';
        this.popupEnter.style.display = 'none'
        this.popupReg.style.display = 'inline-block'
        this.wrongData.style.display = 'none'
        this.validate.clearFields();
        this.display('inline-block');
    }
    tologin() {
        this.shortPwdError.style.bottom = '129px';
        this.wrongData.style.display = 'none'
        this.popupTitle.textContent = 'Вход';
        this.toRegister.style.display = 'inline-block'
        this.toLogin.style.display = 'none';
        this.popupReg.style.display = 'none'
        this.popupEnter.style.display = 'inline-block'
        this.validate.clearFields();
        this.display('none');
    }

    addListeners() {
        authButton.addEventListener('click', this.open);
        mobileAuth.addEventListener('click', this.open);
        this.popupElement.addEventListener('click', this.clickClose);
        document.addEventListener('keydown', this.escClose);
        this.closeButton.addEventListener('click', this.close);
        this.toRegister.addEventListener('click', this._toregister);
        this.toLogin.addEventListener('click', this.tologin);
        this.userMail.addEventListener('input', this.validate.isMail);
        this.userPwd.addEventListener('input', this.validate.isPwd);
        this.userName.addEventListener('input', this.validate.isName);

    }
}

