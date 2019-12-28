import { cardContainer } from "./searcher";
import { Card } from '../card/card.js';
import { Api } from '../api/api.js';
import { NEWSAPI_URL } from '../helpers/messages.js';

// const regUrl = 'https://api.myedudomen.ml';
let isSaved = false;

export class Render {
    render(where, count, cards, myQuestion, isLoggedIn) {
        // console.log(isLoggedIn)
        if (isLoggedIn) {
            console.log('tururu')
            for (let i = where; i < count; i++) {
                console.log(cards.articles[i].publishedAt);
                let pseudoId = cards.articles[i].publishedAt.slice(0, 19)
                pseudoId = pseudoId.replace(/-/g, '');
                pseudoId = pseudoId.replace(/:/g, '');
                api.checkCard(pseudoId).then(res => {
                    if (res.ok) {
                        return Promise.resolve(res.json());
                    }
                    else {
                        return Promise.reject(res.json());
                    }
                }).then(() => {
                    console.log('карточка существует')
                    let isExist = true;
                    const { cardElement } = new Card(isSaved, isExist, pseudoId, myQuestion, cards.articles[i].url, cards.articles[i].urlToImage, cards.articles[i].publishedAt, cards.articles[i].title, cards.articles[i].description, cards.articles[i].source.name);
                    cardContainer.appendChild(cardElement);
                }).catch(() => {
                    console.log('карточка НЕ существует')
                    let isExist = false;
                    const { cardElement } = new Card(isSaved, isExist, pseudoId, myQuestion, cards.articles[i].url, cards.articles[i].urlToImage, cards.articles[i].publishedAt, cards.articles[i].title, cards.articles[i].description, cards.articles[i].source.name);
                    cardContainer.appendChild(cardElement);
                })
            }
        } else {
            console.log('vashe ne tururu')
            for (let i = where; i < count; i++) {
                let pseudoId = cards.articles[i].publishedAt.slice(0, 19)
                pseudoId = pseudoId.replace(/-/g, '');
                pseudoId = pseudoId.replace(/:/g, '');
                console.log(cards.articles[i].publishedAt);
                let isExist = false;
                let isSaved = false;
                const { cardElement } = new Card(isSaved, isExist, pseudoId, myQuestion, cards.articles[i].url, cards.articles[i].urlToImage, cards.articles[i].publishedAt, cards.articles[i].title, cards.articles[i].description, cards.articles[i].source.name);
                cardContainer.appendChild(cardElement);
            }
        }
    }
}

const api = new Api({
    baseUrl: NEWSAPI_URL,
    headers: {
        authorization: '67fcbb6d7e14456f995c19d4a0f3cfbc',
        // 'Content-Type': 'application/json'
    }
});
