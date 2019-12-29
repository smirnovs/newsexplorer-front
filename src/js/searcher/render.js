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
                        console.log(res.status)
                        if (res.ok) {                        
                        console.log('карточка существует')
                        return Promise.resolve(res.json());
                    }
                    else {

                        console.log('карточка НЕ существует')
                        let isExist = false;
                        const { cardElement } = new Card(isLoggedIn, isSaved, isExist, pseudoId, myQuestion, cards.articles[i].url, cards.articles[i].urlToImage, cards.articles[i].publishedAt, cards.articles[i].title, cards.articles[i].description, cards.articles[i].source.name);
                        cardContainer.appendChild(cardElement);
                    }
                }).then((res) => {
                    console.log(res.data[0]._id)
                    const id = res.data[0]._id;
                    let isExist = true;
                    const { cardElement } = new Card(isLoggedIn, isSaved, isExist, pseudoId, myQuestion, cards.articles[i].url, cards.articles[i].urlToImage, cards.articles[i].publishedAt, cards.articles[i].title, cards.articles[i].description, cards.articles[i].source.name, id);
                    cardContainer.appendChild(cardElement);
                }).catch(() => {
                    console.log('карточка НЕ существует eror')
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
                console.log(isLoggedIn)
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
