const authMenu = document.querySelector('.header__link_saved');
const unauthButton = document.querySelector('.header__login_unauth');
export const authButton = document.querySelector('.header__login_auth');
const userName = document.querySelector('.header__login_name');

export class Header {
    constructor(props) {
        this.props = props;
        const { isLoggedIn, userLogin } = props;
        this.isLoggedIn = isLoggedIn;
        this.userLogin = userLogin;
    }
    render() {
        if (this.isLoggedIn) {
            authMenu.classList.toggle('header__link_saved');
            unauthButton.style.display = 'none';
            authButton.style.display = 'inline-flex';
            userName.textContent = this.userLogin;
        } else if (!this.isLoggedIn) {
            authMenu.classList.toggle('header__link_saved');
            authButton.style.display = 'none';
            unauthButton.style.display = 'inline-flex';
        }
    }
}