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
        }).then(res => {
            if (res.ok) {
                return Promise.resolve(res.json());
            } else {
                console.log('Кажется что-то пошло не так');
            }
        });
    }
    // checkAuth() {
    //     return fetch(`${this.url}/checkauth`, {
    //         headers: this.headers,
    //         credentials: 'include',
    //     })
    // }
    checkAuth() {
        return fetch(`${this.url}/users/me`, {
            headers: this.headers,
            credentials: 'include',
        }).then(res => {
            if (res.ok) {
                return Promise.resolve(res.json());
            } else {
                return Promise.reject(res);
            }
        })
    }
    unAuth() {
        return fetch(`${this.url}/unauth`, {
            headers: this.headers,
            credentials: 'include',
        })
    }
    getSavedCards() {
        return fetch(`${this.url}/articles`, {
            headers: this.headers,
            credentials: 'include',
        }).then(res => {
            if (res.ok) {
                return Promise.resolve(res.json());
            } else {
                return Promise.reject(res.status);
            }
        })
    }
    checkCard(pseudoId) {
        return fetch(`${this.url}/articles/${pseudoId}`, {
            headers: this.headers,
            credentials: 'include',
        })
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
        return fetch(`${this.url}/signup`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                email: userMail,
                password: userPwd,
                name: userName
            })
        }).then(res => {
            if (res.ok) {
                return Promise.resolve(res);
            } else {
                return Promise.resolve(res.json());
            }
        });
    }
    loginUser(userMail, userPwd) {
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