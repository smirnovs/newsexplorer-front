const authMenu = document.querySelector('.menumobile__link_saved');
const unauthButton = document.querySelector('.menumobile__login_unauth');
export const mobileAuthButton = document.querySelector('.menumobile__login_auth');
const userName = document.querySelector('.menumobile__login_name');

export class Mobileheader {
    constructor(props) {
        this.props = props;
        const { isLoggedIn, userLogin } = props;
        this.isLoggedIn = isLoggedIn;
        this.userLogin = userLogin;
        this.render();
    }
    render() {
        if (this.isLoggedIn) {
            authMenu.classList.toggle('menumobile__link_saved');
            unauthButton.style.display = 'none';
            mobileAuthButton.style.display = 'inline-flex';
            userName.textContent = this.userLogin;
        } else if (!this.isLoggedIn) {
            authMenu.classList.toggle('menumobile__link_saved');
            mobileAuthButton.style.display = 'none';
            unauthButton.style.display = 'inline-flex';
        }
    }
}