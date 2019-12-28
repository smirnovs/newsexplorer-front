// const newsUrl = 'https://newsapi.org/v2/top-headlines?q='
import textHelper from '../helpers/messages.js';

export class Api {
    constructor({ baseUrl, headers }) {
        this.url = baseUrl;
        this.headers = headers;
    }
    deleteCard(id) {
        return fetch(`${this.url}/articles/${id}`, {
            method: 'DELETE',
            headers: this.headers,
            credentials: 'include',
            // body: JSON.stringify({
            //     pseudoId,
            //     keyword,
            //     title,
            //     text,
            //     date,
            //     source,
            //     link,
            //     image
            // })
        }).then(res => {
            if (res.ok) {
                return Promise.resolve(res.json());
            } else {
                console.log('Кажется что-то пошло не так');
            }
        });
    }
    checkAuth() {
        return fetch(`${this.url}/users/me`, {
            headers: this.headers,
            credentials: 'include',
        })
    }
    unAuth() {
        console.log('unauth')
        return fetch(`${this.url}/unauth`, {
            headers: this.headers,
            credentials: 'include',
        })
    }
    getSavedCards() {
        return fetch(`${this.url}/articles`, {
            headers: this.headers,
            credentials: 'include',
        }).catch(err => {
            console.log(err);
        });
    }
    checkCard(pseudoId) {
        return fetch(`${this.url}/articles/${pseudoId}`, {
            headers: this.headers,
            credentials: 'include',
        })
    }
    getCards(question) {
        return fetch(`${this.url + question}`, {
            headers: this.headers
        }).then(res => {
            if (res.ok) {
                return Promise.resolve(res.json());
            } else {
                return Promise.reject(res.status);
            }
        }).catch(err => {
            console.log(err);
        });
    }
    saveCard(pseudoId, keyword, title, text, date, source, link, image) {
        return fetch(`${this.url}/articles`, {
            method: 'POST',
            headers: this.headers,
            credentials: 'include',
            body: JSON.stringify({
                pseudoId,
                keyword,
                title,
                text,
                date,
                source,
                link,
                image
            })
        });
    }
    createUser(userMail, userPwd, userName) {
        // console.log(userMail, userPwd, userName);
        return fetch(`${this.url}/signup`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                email: userMail,
                password: userPwd,
                name: userName
            })
        });
    }
    loginUser(userMail, userPwd) {
        console.log(userMail, userPwd);
        return fetch(`${this.url}/signin`, {
            method: 'POST',
            headers: this.headers,
            credentials: 'include',
            body: JSON.stringify({
                email: userMail,
                password: userPwd
            })
        });
    }
}

export const api = new Api({
    baseUrl: textHelper.NEWSAPI_URL,
    headers: {
        // authorization: '67fcbb6d7e14456f995c19d4a0f3cfbc',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});