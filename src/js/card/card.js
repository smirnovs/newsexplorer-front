import { CARD_DELETE, CARD_BOOKMARK, firstElement, dateLength } from '../helpers/messages.js';

export class Card {
    constructor(api, isLoggedIn, isSaved, isExist, pseudoId, keyword, link, imgUrl, date, title, text, source, id, cardCounter) {
        this.id = id;
        this.isLoggedIn = isLoggedIn;
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
        this.api = api;
        this.cardCounter = cardCounter;
        this.saveCard = this.saveCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
    }
    addListeners(card) {
        card.addEventListener('click', this.saveCard);
        card.addEventListener('click', this.deleteCard);
    }
    _deleteCard() {
        const card = event.currentTarget;
        card.removeEventListener('click', this.saveCard, false);
        card.removeEventListener('click', this.deleteCard, false);        
        card.remove();
        this.cardCounter();
    }
    saveCard() {
        if (event.target.classList.contains('card__saver') || event.target.classList.contains('card__svg-bookmark') || event.target.classList.contains('card__bookmark')) {
            if (!this.isLoggedIn) {
                console.log('Надо залогиниться')
            } else {
                if (!this.isExist) {
                    const iconSvg = event.currentTarget.querySelector('.card__bookmark');
                    this.api.saveCard(this.pseudoId, this.keyword, this.title, this.text, this.date, this.source, this.link, this.imgUrl)
                        .then((res) => {
                            iconSvg.setAttribute('fill', '#2f71e5');
                            iconSvg.setAttribute('stroke', '#2f71e5');
                            iconSvg.classList.add('card__bookmark_saved');
                            this.isExist = !this.isExist;
                            return Promise.resolve(res.json());
                        }).then((res) => {
                            this.id = res.data._id;
                        }).catch();

                } else {
                    const iconSvg = event.currentTarget.querySelector('.card__bookmark');

                    this.api.deleteCard(this.id)
                        .then(() => {
                            iconSvg.setAttribute('fill', 'none');
                            iconSvg.setAttribute('stroke', '#B6BCBF');
                            iconSvg.classList.remove('card__bookmark_saved');
                            this.isExist = !this.isExist;
                        })
                        .catch();
                }
            }
        }
    }
    deleteCard() {
        if (event.target.classList.contains('card__deleter') || event.target.classList.contains('card__svg-deleter') || event.target.classList.contains('card__delete')) {
            this.api.deleteCard(this.id).then(this._deleteCard())
                .catch(() => {
                    console.log('не удалено')
                })
        }
    }
    _createIcon(cardBookmark) {
        const cardSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
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
            svgPath.setAttribute('d', CARD_DELETE);
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
            svgPath.setAttribute('d', CARD_BOOKMARK);
            svgPath.setAttribute('stroke-width', '2');
        }
        cardBookmark.appendChild(cardSvg);
        cardSvg.appendChild(svgPath);
    }

    _dateFormat(date, cardDate) {
        date = date.slice(firstElement, dateLength);
        date = date.replace(/-/g, ', ');
        const publicDate = new Date(date);
        const formatter = new Intl.DateTimeFormat("ru", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        date = formatter.format(publicDate);
        cardDate.textContent = date;

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

        this._createIcon(cardBookmark);
        imgBlock.appendChild(cardImg);
        imgBlock.appendChild(cardBookmark);
        if (!this.isLoggedIn) {
            const cardNologin = document.createElement('div');
            cardNologin.classList.add('card__nologin');
            cardNologin.textContent = 'Войдите, чтобы сохранять статьи';
            imgBlock.appendChild(cardNologin);
        }

        if (this.isSaved) {
            const cardKeyword = document.createElement('div');
            cardKeyword.classList.add('card__keyword');
            cardKeyword.textContent = this.keyword;
            imgBlock.appendChild(cardKeyword);
        }

        const textBlock = document.createElement('div');
        textBlock.classList.add('card__text-block');

        const cardDate = document.createElement('div');
        cardDate.classList.add('card__date');
        this._dateFormat(this.date, cardDate);

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

        newCard.appendChild(imgBlock);

        newCard.appendChild(textBlock);

        textBlock.appendChild(cardDate);
        textBlock.appendChild(cardNews);

        cardNews.appendChild(cardTitle);
        cardNews.appendChild(cardText);

        newCard.appendChild(cardSource);

        return newCard;

    }
}
