import { Api } from '../api/api.js'
import { popUp, popupReg } from '../popup/popup.js';
import { userMail, userPwd, userName } from '../popup/popup-validate.js';


const regUrl = 'https://api.myedudomen.ml';

export class Signup {
    constructor() {
        this.addListener();
    }
    signup() {
        event.preventDefault();
        api.createUser(userMail.value, userPwd.value, userName.value);
        // console.log(userMail.value);
    }
    addListener() {
        popupReg.addEventListener('click', this.signup)
        // userMail.addEventListener('input', this.signup)
        // userPwd.addEventListener('input', this.signup)
        // userName.addEventListener('input', this.signup)
    }
}

const api = new Api({
    baseUrl: regUrl,
    headers: {
        // authorization: '67fcbb6d7e14456f995c19d4a0f3cfbc',
        'Content-Type': 'application/json'
    }
});