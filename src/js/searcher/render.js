import { cardContainer } from "./searcher";
import { Card } from '../card/card.js';
import { Api } from '../api/api.js';
import { NEWSAPI_URL } from '../helpers/messages.js';

const isSaved = false;

export class Render {
    render(where, count, cards, myQuestion, isLoggedIn) {
        if (isLoggedIn) {
            for (let i = where; i < count; i++) {
                let pseudoId = cards.articles[i].publishedAt.slice(0, 19)
                pseudoId = pseudoId.replace(/-/g, '');
                pseudoId = pseudoId.replace(/:/g, '');
                api.checkCard(pseudoId).then(res => {
                    if (res.ok) {
                        return Promise.resolve(res.json());
                    }
                    else {
                        const isExist = false;
                        const { cardElement } = new Card(isLoggedIn, isSaved, isExist, pseudoId, myQuestion, cards.articles[i].url, cards.articles[i].urlToImage, cards.articles[i].publishedAt, cards.articles[i].title, cards.articles[i].description, cards.articles[i].source.name);
                        cardContainer.appendChild(cardElement);
                    }
                }).then((res) => {
                    const id = res.data[0]._id;
                    const isExist = true;
                    const { cardElement } = new Card(isLoggedIn, isSaved, isExist, pseudoId, myQuestion, cards.articles[i].url, cards.articles[i].urlToImage, cards.articles[i].publishedAt, cards.articles[i].title, cards.articles[i].description, cards.articles[i].source.name, id);
                    cardContainer.appendChild(cardElement);
                }).catch(() => {
                    // console.log('карточка НЕ существует')
                })
            }
        } else {
            for (let i = where; i < count; i++) {
                let pseudoId = cards.articles[i].publishedAt.slice(0, 19)
                pseudoId = pseudoId.replace(/-/g, '');
                pseudoId = pseudoId.replace(/:/g, '');
                const isExist = false;
                const isSaved = false;
                const { cardElement } = new Card(isLoggedIn, isSaved, isExist, pseudoId, myQuestion, cards.articles[i].url, cards.articles[i].urlToImage, cards.articles[i].publishedAt, cards.articles[i].title, cards.articles[i].description, cards.articles[i].source.name);
                cardContainer.appendChild(cardElement);
            }
        }
    }
}

const api = new Api({
    baseUrl: NEWSAPI_URL,
    headers: {
        authorization: '67fcbb6d7e14456f995c19d4a0f3cfbc',
    }
});
