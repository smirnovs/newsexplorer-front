import textHelper from '../helpers/messages.js';
import { api } from '../api/api.js';

export class Card {
    constructor(isSaved, isExist, pseudoId, keyword, link, imgUrl, date, title, text, source, id) {
        this.id = id;
        this.isSaved = isSaved;
        this.isExist = isExist;
        this.pseudoId = pseudoId;
        this.keyword = keyword;
        this.link = link;
        this.imgUrl = imgUrl;
        this.date = date;
        this.title = title;
        this.text = text;
        this.source = source;
        this.saveCard = this.saveCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
        this.cardElement = this.create();
        this.addListeners();
    }
    addListeners() {
        this.cardElement.addEventListener('click', this.saveCard);
        this.cardElement.addEventListener('click', this.deleteCard);
    }

    saveCard() {
        if (event.target.classList.contains('card__saver') || event.target.classList.contains('card__svg-bookmark') || event.target.classList.contains('card__bookmark')) {
            if (!this.isExist) {
                let iconSvg = event.currentTarget.querySelector('.card__bookmark');
                api.saveCard(this.pseudoId, this.keyword, this.title, this.text, this.date, this.source, this.link, this.imgUrl)
                    .then(() => {
                        iconSvg.setAttribute('fill', '#2f71e5');
                        iconSvg.setAttribute('stroke', '#2f71e5');
                        iconSvg.classList.add('card__bookmark_saved');

                        this.isExist = !this.isExist;
                    })
            } else {
                console.log('вы уже сохраняли эту карточку')
            }
        }
    }
    deleteCard() {
        if (event.target.classList.contains('card__deleter') || event.target.classList.contains('card__svg-deleter') || event.target.classList.contains('card__delete')) {
            console.log(this.id);
            api.deleteCard(this.id).then(event.target.closest('.card').remove()).catch(() => {
                console.log('не удалено')
            })
        }
    }
    createIcon(cardBookmark) {
        const cardSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        // const cardBookmark = document.createElement('div');
        if (this.isSaved) {
            cardBookmark.classList.add('card__deleter');
            cardSvg.classList.add('card__svg-deleter');
            cardSvg.setAttribute('width', '18');
            cardSvg.setAttribute('height', '19');
            cardSvg.setAttribute('viewBox', '0 0 18 19');
            cardSvg.setAttribute('fill', 'none');
            svgPath.classList.add('card__delete');
            svgPath.setAttribute('fill-rule', 'evenodd');
            svgPath.setAttribute('clip-rule', 'evenodd');
            svgPath.setAttribute('fill', '#B6BCBF');
            svgPath.setAttribute('d', textHelper.CARD_DELETE);
        } else {
            cardBookmark.classList.add('card__saver');
            cardSvg.classList.add('card__svg-bookmark');
            cardSvg.setAttribute('width', '24');
            cardSvg.setAttribute('height', '24');
            cardSvg.setAttribute('viewBox', '0 0 24 24');
            cardSvg.setAttribute('fill', 'none');
            svgPath.classList.add('card__bookmark');
            if (this.isExist && !this.isSaved) {
                svgPath.setAttribute('fill', '#2f71e5');
                svgPath.setAttribute('stroke', '#2f71e5');
                svgPath.classList.add('card__bookmark_saved');
            } else if (!this.isExist && !this.isSaved) {
                svgPath.setAttribute('fill', 'none');
                svgPath.setAttribute('stroke', '#B6BCBF');
            }
            svgPath.setAttribute('d', textHelper.CARD_BOOKMARK);
            svgPath.setAttribute('stroke-width', '2');
        }
        cardBookmark.appendChild(cardSvg);
        cardSvg.appendChild(svgPath);
    }
    create() {
        const newCard = document.createElement('div');
        newCard.classList.add('card');

        const imgBlock = document.createElement('div');
        imgBlock.classList.add('card__img');

        const cardImg = document.createElement('img');
        cardImg.src = this.imgUrl;
        cardImg.alt = this.title

        const cardBookmark = document.createElement('div');
        // cardBookmark.classList.add('card__saver');

        this.createIcon(cardBookmark);


        const textBlock = document.createElement('div');
        textBlock.classList.add('card__text-block');

        const cardDate = document.createElement('div');
        cardDate.classList.add('card__date-block');
        cardDate.textContent = this.date

        const cardNews = document.createElement('div');
        cardNews.classList.add('card__news');

        const cardTitle = document.createElement('h3');
        cardTitle.classList.add('card__title');
        cardTitle.textContent = this.title;

        const cardText = document.createElement('p');
        cardText.classList.add('card__text');
        cardText.textContent = this.text;

        const cardSource = document.createElement('p');
        cardSource.classList.add('card__source');
        cardSource.textContent = this.source;

        // cardList.appendChild(newCard);

        newCard.appendChild(imgBlock);

        imgBlock.appendChild(cardImg);
        imgBlock.appendChild(cardBookmark);

        // cardBookmark.appendChild(cardSvg);
        // cardSvg.appendChild(svgPath);


        newCard.appendChild(textBlock);

        textBlock.appendChild(cardDate);
        textBlock.appendChild(cardNews);

        cardNews.appendChild(cardTitle);
        cardNews.appendChild(cardText);

        newCard.appendChild(cardSource);

        return newCard;

    }
}

// const api = new Api({
//     baseUrl: textHelper.NEWSAPI_URL,
//     headers: {
//         // authorization: document.cookie,
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     }
// });