export class GitApi {
    constructor({ baseUrl, headers }) {
        this.url = baseUrl;
        this.headers = headers;
    }
    getGit() {
        return fetch(`${this.url}`, {
            headers: this.headers,
        }).then(res => {
            return Promise.resolve(res.json())
        })
    }
}