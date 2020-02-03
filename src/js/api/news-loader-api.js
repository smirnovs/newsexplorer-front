export class NewsLoaderApi {
    constructor({ baseUrl, headers }) {
        this.url = baseUrl;
        this.headers = headers;
    }
    getCards(question, weekAgo, today) {
        return fetch(`${this.url + question}&from=${weekAgo}&to=${today}`, {
            headers: this.headers
        }).then(res => {
            if (res.ok) {
                return Promise.resolve(res.json());
            } else {
                return Promise.reject(res.status);
            }
        })
    }
}