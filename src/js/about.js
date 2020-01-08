import '../pages/about/about.css';
import { Mobilemenu } from './helpers/mobilemenu.js';
import { MAIN_PAGE, NEWSAPI_URL, GIT_API } from './helpers/messages';
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

const ICON_COLOR = 'header__mobileico_black-closed';
const ghButton = document.querySelector('.github__button');
const mobileAuthButton = document.querySelector('.menumobile__login_auth');
const slideBlock = document.querySelector('.glide__slides');

const isOpenMenu = false;
const mobilemenu = new Mobilemenu(ICON_COLOR, isOpenMenu);
mobilemenu.addListeners();

const api = new Api({
    baseUrl: NEWSAPI_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

const validate = new PopupValidate();
const popup = new Popup(validate);
popup.addListeners();

const headerCallback = ({ isLoggedIn, userLogin }) => {
    const header = new Header({ isLoggedIn, userLogin });
    const mobileheader = new Mobileheader({ isLoggedIn, userLogin });
    header.render();
    mobileheader.render();
}

const signin = new Signin(popup, headerCallback, api);
signin.addListener();

const miniPopupCallback = (popup) => {
    const miniPopup = new Minipopup(popup);
    miniPopup.addListeners();
}
const signup = new Signup(popup, miniPopupCallback, api);
signup.addListener();

const gitapi = new GitApi({
    baseUrl: GIT_API,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

const createCardCallback = (name, email, date, message, url) => {
    const gitcard = new GitCard(name, email, date, message, url, slideBlock);
    gitcard.createCard();
}
const gitLoader = new GitCommitLoader(gitapi, createCardCallback, glide);
gitLoader.getGitCards();

api.checkAuth()
    .then((user) => {
        const isLoggedIn = true;
        const userLogin = user.name;
        headerCallback({ isLoggedIn, userLogin });
    }).catch((err) => {
        console.log('Посетитель не авторизован');
    });


authButton.addEventListener('click', () => {
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
})


mobileAuthButton.addEventListener('click', () => {
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
})

ghButton.addEventListener('click', () => {
    window.open(
        MAIN_PAGE,
        '_blank'
    )
});

