import "../pages/index/index.css";
import { Popup } from './popup/popup.js';
import { Mobilemenu } from './helpers/mobilemenu.js';
import { Search, searchResult } from './searcher/searcher.js';
import { Signup } from "./user/signup";
import { Signin } from "./user/signin";
import { api } from "./api/api.js";
import { Header, authButton } from "./header/header.js";
import { ICON_MOBILE_WHITE_CLOSED, HEADER_COLOR } from "./helpers/messages.js";
import { Mobileheader, mobileAuthButton } from "./header/mobileheader.js";

let isOpenMenu = false;
let isHeader = true;

new Search();
new Popup();
new Signup();
new Signin();
new Mobilemenu(ICON_MOBILE_WHITE_CLOSED, isOpenMenu, isHeader, HEADER_COLOR);


api.checkAuth().then(res => {
    console.log(res.status)
    if (res.status===200) {
        return Promise.resolve(res.json());
    } else {
        return Promise.reject(res);
        // return Promise.resolve(res.json());
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
    // throw err;
    // let isLoggedIn = false;
    // new Header({ isLoggedIn });
    // new Search(isLoggedIn);
    // new CheckLog(isLoggedIn);
});


authButton.addEventListener('click', () => {
    api.unAuth().then(res => {
        if (res.ok) {
            console.log('разлогинило');
            let isLoggedIn = false;
            let userLogin = '';
            new Header({ isLoggedIn, userLogin });
            new Mobileheader({ isLoggedIn, userLogin });
            searchResult.style.display = 'none';
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
            console.log('разлогинило');
            let isLoggedIn = false;
            let userLogin = '';
            new Header({ isLoggedIn, userLogin });
            new Mobileheader({ isLoggedIn, userLogin });
            searchResult.style.display = 'none';
        } else {
            return Promise.reject(res.status);
        }

    }).catch(err => {
        console.log(err);
    });
})