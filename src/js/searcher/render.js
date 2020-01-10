import { cardContainer } from "./search";
import { maxShowed, firstElement, thirdElement, pseudoIdLength } from '../helpers/messages.js';

const isSaved = false;
export class Render {
    constructor(api, createCardCallback) {
        this.api = api;
        this.createCardCallback = createCardCallback;
        this.render = this.render.bind(this);
    }
    render(cards, myQuestion, isLoggedIn) {
        if (isLoggedIn) {
            cards.articles.forEach((item, index) => {
                if (index < maxShowed) {
                    let pseudoId = item.publishedAt.slice(firstElement, pseudoIdLength)
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
                        const id = res.data[firstElement]._id;
                        const isExist = true;
                        this.createCardCallback(this.api, cardContainer, isLoggedIn, isSaved, isExist, pseudoId, myQuestion, item.url, item.urlToImage, item.publishedAt, item.title, item.description, item.source.name, id);
                    })
                        .catch(() => {
                            const isExist = false;
                            this.createCardCallback(this.api, cardContainer, isLoggedIn, isSaved, isExist, pseudoId, myQuestion, item.url, item.urlToImage, item.publishedAt, item.title, item.description, item.source.name);
                        })
                }

            })
            const filtered = cards.articles.filter(function (value, index, arr) {
                return index > thirdElement;
            });
            cards.articles = filtered;
        } else {
            cards.articles.forEach((item, index) => {
                if (index < maxShowed) {
                    let pseudoId = item.publishedAt.slice(firstElement, pseudoIdLength)
                    pseudoId = pseudoId.replace(/-/g, '');
                    pseudoId = pseudoId.replace(/:/g, '');
                    const isExist = false;
                    const isSaved = false;
                    this.createCardCallback(this.api, cardContainer, isLoggedIn, isSaved, isExist, pseudoId, myQuestion, item.url, item.urlToImage, item.publishedAt, item.title, item.description, item.source.name);
                }
            })
            const filtered = cards.articles.filter(function (value, index, arr) {
                return index > thirdElement;
            });
            cards.articles = filtered;
        }
    }
}
