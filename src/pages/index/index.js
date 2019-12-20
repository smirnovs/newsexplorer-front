import "./index.css";

const mobileMenuButton = document.querySelector('.header__mobileico');
const header = document.querySelector('.header');

const authButton = document.querySelector('.header__login');
const popupCloseButton = document.querySelector('.popup__close');
const popUp = document.querySelector('.popup');
const mobileMenu = document.querySelector('.header__menu_mobile');
const mobileAuth = document.querySelector('.header__login_mobile');

let isOpenMenu = false;

authButton.addEventListener('click', () => {
    popUp.classList.toggle('popup_is-opened');
});

popupCloseButton.addEventListener('click', () => {
    popUp.classList.toggle('popup_is-opened');
});

mobileAuth.addEventListener('click', () => {
    popUp.classList.toggle('popup_is-opened');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 720 && mobileMenu.classList.contains('header__menu_mobile') && !mobileMenu.classList.contains('header__menu')) {
        header.style.backgroundColor = 'transparent'
        isOpenMenu = false;
        mobileMenu.classList.remove('header__menu_isopened');
        mobileMenuButton.classList.remove('header__mobileico_white-closed');
    }
})


mobileMenuButton.addEventListener('click', () => {
    if (isOpenMenu == false) {
        mobileMenuButton.classList.toggle('header__mobileico_white-closed');
        isOpenMenu = true;
        mobileMenu.classList.toggle('header__menu_isopened');
        header.style.backgroundColor = '#1A1B22'
    } else {
        isOpenMenu = false;
        mobileMenu.classList.toggle('header__menu_isopened');
        mobileMenuButton.classList.toggle('header__mobileico_white-closed');
        header.style.backgroundColor = 'transparent'
    }
})

