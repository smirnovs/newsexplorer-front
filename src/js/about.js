import "../pages/about/about.css";
import { Mobilemenu } from './helpers/mobilemenu.js';
// import { glide } from './glider/glider.js';
import { MAIN_PAGE } from './helpers/messages';
import { api } from "./api/api.js";
import { Header, authButton } from "./header/header.js";
import { Popup } from './popup/popup.js';
import { Signup } from "./user/signup";
import { Signin } from "./user/signin";
// import { Search } from './searcher/searcher.js';
import { Mobileheader } from "./header/mobileheader.js";
import { GetGit } from "./card/getgitcard";

const ICON_COLOR = 'header__mobileico_black-closed';
const ghButton = document.querySelector('.github__button');

let isOpenMenu = false;
new Mobilemenu(ICON_COLOR, isOpenMenu);
new GetGit();
new Popup();
new Signup();
new Signin();

api.checkAuth().then(res => {
    console.log(res.status)
    if (res.status === 200) {
        return Promise.resolve(res.json());
    } else {
        return Promise.reject(res);
    }
}).then((user) => {
    // console.log(user);
    let isLoggedIn = true;
    let userLogin = user.name;
    new Header({ isLoggedIn, userLogin });
    new Mobileheader({ isLoggedIn, userLogin });
    // new Search(isLoggedIn);
    // new CheckLog(isLoggedIn);

}).catch((err) => {
    console.log('Посетитель не авторизован');
});


authButton.addEventListener('click', () => {
    api.unAuth().then(res => {
        if (res.ok) {
            console.log('разлогинило');
            let isLoggedIn = false;
            let userLogin = '';
            new Header({ isLoggedIn, userLogin });
            new Mobileheader({ isLoggedIn, userLogin });
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

