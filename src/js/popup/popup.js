const authButton = document.querySelector('.header__login');
const popupCloseButton = document.querySelector('.popup__close');
const popUp = document.querySelector('.popup');
const mobileAuth = document.querySelector('.menumobile__login');


class Popup {
    open() {
        popUp.classList.toggle('popup_is-opened');
    }
    close() {
        popUp.classList.toggle('popup_is-opened');
    }
}

export const popup = new Popup();


authButton.addEventListener('click', () => {
    popup.open();
});

mobileAuth.addEventListener('click', () => {
    popup.open();
});

popupCloseButton.addEventListener('click', () => {
    popup.close();
});

