import "./saved.css";

const mobileMenuButton = document.querySelector('.header__mobileico');
const mobileMenu = document.querySelector('.menumobile');

let isOpenMenu = false;


window.addEventListener('resize', () => {
    if (window.innerWidth > 720 && isOpenMenu == true) {
        isOpenMenu = false;
        mobileMenu.classList.remove('menumobile__isopened');
        mobileMenuButton.classList.remove('header__mobileico_black-closed');
    }
})


mobileMenuButton.addEventListener('click', () => {
    if (isOpenMenu == false) {
        mobileMenuButton.classList.toggle('header__mobileico_black-closed');
        isOpenMenu = true;
        mobileMenu.classList.toggle('menumobile__isopened');
    } else {
        mobileMenuButton.classList.toggle('header__mobileico_black-closed');
        isOpenMenu = false;
        mobileMenu.classList.toggle('menumobile__isopened');
    }
})