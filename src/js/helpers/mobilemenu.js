
const header = document.querySelector('.header');
const mobileMenu = document.querySelector('.menumobile');

export class Mobilemenu {
    constructor(mobileMenuButton, iconColor) {
        this.mobileMenuButton = mobileMenuButton;
        this.iconColor = iconColor;
    }
    resize() {
        mobileMenu.classList.remove('menumobile__isopened');
        this.mobileMenuButton.classList.remove(this.iconColor);
    }
    header(headerColor) {
        header.style.backgroundColor = headerColor;
    }
    open() {
        this.mobileMenuButton.classList.toggle(this.iconColor);
        mobileMenu.classList.toggle('menumobile__isopened');
    }
    close() {
        mobileMenu.classList.toggle('menumobile__isopened');
        this.mobileMenuButton.classList.toggle(this.iconColor);
    }
}




