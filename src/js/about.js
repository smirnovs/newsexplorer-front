import '../pages/about/about.css';
import { Mobilemenu } from './helpers/mobilemenu.js';
import { NEWSAPI_URL, GIT_API, GH_PAGE } from './helpers/messages';
import { GitApi } from './api/git-api.js';
import { Api } from './api/api.js';
import { Header, authButton } from './header/header.js';
import { Popup } from './popup/popup.js';
import { Signup } from './user/signup';
import { Signin } from './user/signin';
import { Mobileheader } from './header/mobileheader.js';
import { GitCommitLoader } from './card/git-commit-loader.js';
import { GitCard } from './card/git-card.js';
import { glide } from './glider/glide.js';
import { PopupValidate } from './popup/popup-validate.js';
import { Minipopup } from './popup/mini-popup.js';

const popupElement = document.querySelector('.popup');
const ICON_COLOR = 'header__mobileico_black-closed';
const ghButton = document.querySelector('.github__button');
const mobileAuthButton = document.querySelector('.menumobile__login_auth');
const slideBlock = document.querySelector('.glide__slides');
const miniAuthPopup = document.querySelector('.mini-popup');
const mobileMenu = document.querySelector('.menumobile');

const isOpenMenu = false;

const api = new Api({
    baseUrl: NEWSAPI_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

const gitapi = new GitApi({
    baseUrl: GIT_API,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

const headerCallback = ({ isLoggedIn, userLogin }) => {
    const header = new Header({ isLoggedIn, userLogin });
    const mobileheader = new Mobileheader({ isLoggedIn, userLogin });
    header.render();
    mobileheader.render();
}

const miniPopupCallback = (popup) => {
    const miniPopup = new Minipopup(popup, miniAuthPopup);
    miniPopup.addListeners();
    document.body.style.overflow = 'hidden';
}

const createCardCallback = (name, email, date, message, url) => {
    const gitcard = new GitCard(name, email, date, message, url, slideBlock);
    gitcard.createCard();
}

const unAuthCallback = () => {
    api.unAuth().then(res => {
        if (res.ok) {
            const isLoggedIn = false;
            const userLogin = '';
            headerCallback({ isLoggedIn, userLogin });
        } else {
            return Promise.reject(res.status);
        }

    }).catch(err => {
        console.log(err);
    });
}

const mobilemenu = new Mobilemenu(mobileMenu, ICON_COLOR, isOpenMenu);
const validate = new PopupValidate(popupElement);
const popup = new Popup(validate, popupElement);
const signin = new Signin(popup, popupElement, headerCallback, api, validate);
const signup = new Signup(popup, popupElement, miniAuthPopup, miniPopupCallback, api, validate);
const gitLoader = new GitCommitLoader(gitapi, createCardCallback, glide);

api.checkAuth()
    .then((user) => {
        const isLoggedIn = true;
        const userLogin = user.name;
        headerCallback({ isLoggedIn, userLogin });
    }).catch((err) => {
        console.log('Посетитель не авторизован');
    });

mobilemenu.addListeners();
popup.addListeners();
signin.addListener();
signup.addListener();
gitLoader.getGitCards();

authButton.addEventListener('click', unAuthCallback)


mobileAuthButton.addEventListener('click', unAuthCallback)

ghButton.addEventListener('click', function openGhHandler() {
    window.open(
        GH_PAGE,
        '_blank'
    )
});

