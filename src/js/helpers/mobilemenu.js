import { windowWidth } from '../helpers/messages.js';

const header = document.querySelector('.header');
const mobileMenuButton = document.querySelector('.header__mobileico');

export class Mobilemenu {
    constructor(mobileMenu, iconColor, isOpenMenu, isHeader, headerColor) {
        this._action = this._action.bind(this);
        this._header = this._header.bind(this);
        this._clickClothe = this._clickClothe.bind(this);
        this.mobileMenu = mobileMenu;
        this.iconColor = iconColor;
        this.headerColor = headerColor;
        this.isOpenMenu = isOpenMenu;
        this.isHeader = isHeader;
    }
    _header() {
        if (window.innerWidth > windowWidth && this.isOpenMenu == true && this.isHeader) {
            this.isOpenMenu = false;
            this.mobileMenu.classList.remove('menumobile__isopened');
            mobileMenuButton.classList.remove(this.iconColor);
            header.style.backgroundColor = 'transparent'
        }
        else if (window.innerWidth > windowWidth && this.isOpenMenu == true && typeof (this.isHeader) == 'undefined') {
            this.isOpenMenu = false;
            this.mobileMenu.classList.remove('menumobile__isopened');
            mobileMenuButton.classList.remove(this.iconColor);
        }
    }
    _action() {
        if (!this.isOpenMenu && this.isHeader) {
            mobileMenuButton.classList.toggle(this.iconColor);
            this.mobileMenu.classList.toggle('menumobile__isopened');
            header.style.backgroundColor = this.headerColor;
            this.isOpenMenu = true;
            document.body.style.overflow = 'hidden';
        } else if (!this.isOpenMenu && !this.isHeader) {
            mobileMenuButton.classList.toggle(this.iconColor);
            this.mobileMenu.classList.toggle('menumobile__isopened');
            this.isOpenMenu = true;
            document.body.style.overflow = 'hidden';
        }
        else {
            this.isOpenMenu = false;
            header.style.backgroundColor = 'transparent'
            this.mobileMenu.classList.toggle('menumobile__isopened');
            mobileMenuButton.classList.toggle(this.iconColor);
            document.body.style.overflow = 'overlay';
        }
    }
    _clickClothe() {
        if(event.target.classList.contains('menumobile__isopened')|| event.target.classList.contains('menumobile__login')) {
            this.isOpenMenu = false;
            header.style.backgroundColor = 'transparent'
            this.mobileMenu.classList.toggle('menumobile__isopened');
            mobileMenuButton.classList.toggle(this.iconColor);
            document.body.style.overflow = 'overlay';
        }
    }
    addListeners() {
        mobileMenuButton.addEventListener('click', this._action);
        window.addEventListener('resize', this._header);
        this.mobileMenu.addEventListener('click', this._clickClothe);
    }
}




