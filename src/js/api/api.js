const newsUrl = 'https://newsapi.org/v2/top-headlines?q='

class Api {
    constructor({ baseUrl, headers }) {
        this.url = baseUrl;
        this.headers = headers;
    }
    getCards(question) {
        return fetch(`${this.url + question}`, {
            headers: this.headers
        })
            .then(res => {
                if (res.ok) {
                    return Promise.resolve(res.json());
                } else {
                    return Promise.reject(res.status);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export const api = new Api({
    baseUrl: newsUrl,
    headers: {
        authorization: '67fcbb6d7e14456f995c19d4a0f3cfbc',
        // 'Content-Type': 'application/json'
    }
});