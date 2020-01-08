import { cardContainer } from "./search";

const isSaved = false;

export class Render {
    constructor(api, createCardCallback) {
        this.api = api;
        this.createCardCallback = createCardCallback;
        this.render = this.render.bind(this);
    }
    render(where, count, cards, myQuestion, isLoggedIn) {
        if (isLoggedIn) {
            for (let i = where; i < count; i++) {
                let pseudoId = cards.articles[i].publishedAt.slice(0, 19)
                pseudoId = pseudoId.replace(/-/g, '');
                pseudoId = pseudoId.replace(/:/g, '');
                this.api.checkCard(pseudoId).then(res => {
                    if (res.ok) {
                        return Promise.resolve(res.json());
                    }
                    else {
                        return Promise.reject(res);
                    }
                }).then((res) => {
                    const id = res.data[0]._id;
                    const isExist = true;
                    this.createCardCallback(this.api, cardContainer, isLoggedIn, isSaved, isExist, pseudoId, myQuestion, cards.articles[i].url, cards.articles[i].urlToImage, cards.articles[i].publishedAt, cards.articles[i].title, cards.articles[i].description, cards.articles[i].source.name, id);
                    })
                    .catch(() => {
                        const isExist = false;
                        this.createCardCallback(this.api, cardContainer, isLoggedIn, isSaved, isExist, pseudoId, myQuestion, cards.articles[i].url, cards.articles[i].urlToImage, cards.articles[i].publishedAt, cards.articles[i].title, cards.articles[i].description, cards.articles[i].source.name);
                })
            }
        } else {
            for (let i = where; i < count; i++) {
                let pseudoId = cards.articles[i].publishedAt.slice(0, 19)
                pseudoId = pseudoId.replace(/-/g, '');
                pseudoId = pseudoId.replace(/:/g, '');
                const isExist = false;
                const isSaved = false;
                this.createCardCallback(this.api, cardContainer, isLoggedIn, isSaved, isExist, pseudoId, myQuestion, cards.articles[i].url, cards.articles[i].urlToImage, cards.articles[i].publishedAt, cards.articles[i].title, cards.articles[i].description, cards.articles[i].source.name);
            }
        }
    }
}
