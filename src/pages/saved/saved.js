import "./saved.css";

const mobileMenuButton = document.querySelector('.header__mobileico');
const mobileMenu = document.querySelector('.header__menu_mobile');
const mobileLinks = document.querySelector('.header__menu_mobile-links');


let isOpenMenu = false;


window.addEventListener('resize', () => {
    if (window.innerWidth > 720 && mobileMenu.classList.contains('header__menu_mobile') && !mobileMenu.classList.contains('header__menu')) {
        isOpenMenu = false;
        mobileMenu.classList.remove('header__menu_isopened');
        mobileMenuButton.classList.remove('header__mobileico_black-closed');
    }
})


mobileMenuButton.addEventListener('click', () => {
    if (isOpenMenu == false) {
        mobileMenuButton.classList.toggle('header__mobileico_black-closed');
        isOpenMenu = true;
        mobileMenu.classList.toggle('header__menu_isopened');
    } else {
        mobileMenuButton.classList.toggle('header__mobileico_black-closed');
        isOpenMenu = false;
        mobileMenu.classList.toggle('header__menu_isopened');
    }
})
