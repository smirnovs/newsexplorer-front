
const header = document.querySelector('.header');
const mobileMenu = document.querySelector('.menumobile');
const mobileMenuButton = document.querySelector('.header__mobileico');

export class Mobilemenu {
    constructor(iconColor, isOpenMenu, isHeader, headerColor) {
        this._action = this._action.bind(this);
        this._header = this._header.bind(this);
        this.iconColor = iconColor;
        this.headerColor = headerColor;
        this.isOpenMenu = isOpenMenu;
        this.isHeader = isHeader;
    }
    _header() {
        if (window.innerWidth > 720 && this.isOpenMenu == true && this.isHeader) {
            this.isOpenMenu = false;
            mobileMenu.classList.remove('menumobile__isopened');
            mobileMenuButton.classList.remove(this.iconColor);
            header.style.backgroundColor = 'transparent'
        }
        else if (window.innerWidth > 720 && this.isOpenMenu == true && typeof (this.isHeader) == 'undefined') {
            this.isOpenMenu = false;
            mobileMenu.classList.remove('menumobile__isopened');
            mobileMenuButton.classList.remove(this.iconColor);
        }
    }
    _action() {
        if (!this.isOpenMenu && this.isHeader) {
            mobileMenuButton.classList.toggle(this.iconColor);
            mobileMenu.classList.toggle('menumobile__isopened');
            header.style.backgroundColor = this.headerColor;
            this.isOpenMenu = true;
        } else if (!this.isOpenMenu && !this.isHeader) {
            mobileMenuButton.classList.toggle(this.iconColor);
            mobileMenu.classList.toggle('menumobile__isopened');
            this.isOpenMenu = true;
        }
        else {
            this.isOpenMenu = false;
            header.style.backgroundColor = 'transparent'
            mobileMenu.classList.toggle('menumobile__isopened');
            mobileMenuButton.classList.toggle(this.iconColor);
        }
    }
    addListeners() {
        mobileMenuButton.addEventListener('click', this._action);
        window.addEventListener('resize', this._header);
    }
}




