export class Signin {
    constructor(popup, popupElement, headerCallback, api, validate) {
        this.popup = popup;
        this.popupElement = popupElement;
        this.headerCallback = headerCallback;
        this.api = api;
        this.validate = validate;
        this._signin = this._signin.bind(this);
        this.popupEnter = this.popupElement.querySelector('.popup__button_enter');
        this.errorAuth = this.popupElement.querySelector('.popup__error_auth');
        this.popupForm = this.popupElement.querySelector('.popup__form');
        this.userMail = this.popupForm.elements.usermail;
        this.userPwd = this.popupForm.elements.userpwd;
    }
    _signin() {
        event.preventDefault();
        this.validate.disableInputs();
        this.api.loginUser(this.userMail.value, this.userPwd.value).then((res) => {
            if (res.ok) {
                this.api.checkAuth()
                    .then((user) => {
                        const isLoggedIn = true;
                        const userLogin = user.name;
                        this.headerCallback({ isLoggedIn, userLogin });
                        this.popup.close();
                        if (document.querySelector('.search-result__container')) {
                            const searchResult = document.querySelector('.search-result__container')
                            searchResult.style.display = 'none';
                        }
                    }).catch(() => {
                        console.log('Не удалось авторизоваться');
                    });
                return Promise.resolve();
            } else {
                res.json().then((res) => {
                    return Promise.reject(res);
                }).catch((err) => {
                    console.log(err)
                    this.errorAuth.style.display = 'block';
                    this.errorAuth.textContent = err.message;
                    this.validate.enableInputs();
                })
                return Promise.reject(res);
            }
        }).catch((err) => {
            console.log('Не удалось авторизоваться');
            return err;
        });
    }
    addListener() {
        this.popupEnter.addEventListener('click', this._signin);
    }
}