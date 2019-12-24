import textHelper from '../helpers/messages.js';

export class Card {
    constructor(imgUrl, date, title, text, source) {
        this.imgUrl = imgUrl;
        this.date = date;
        this.title = title;
        this.text = text;
        this.source = source;
        this.cardElement = this.create();
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
        cardBookmark.classList.add('card__saver');

        const cardSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        cardSvg.setAttribute('width', '24');
        cardSvg.setAttribute('height', '24');
        cardSvg.setAttribute('viewBox', '0 0 24 24');
        cardSvg.setAttribute('fill', 'none');

        const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        svgPath.classList.add('card__bookmark');
        // svgPath.setAttribute('fill-rule', 'evenodd');
        // svgPath.setAttribute('clip-rule', 'evenodd');
        svgPath.setAttribute('d', textHelper.CARD_BOOKMARK);
        svgPath.setAttribute('stroke', '#B6BCBF');
        svgPath.setAttribute('stroke-width', '2');

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

        cardBookmark.appendChild(cardSvg);
        cardSvg.appendChild(svgPath);


        newCard.appendChild(textBlock);

        textBlock.appendChild(cardDate);
        textBlock.appendChild(cardNews);

        cardNews.appendChild(cardTitle);
        cardNews.appendChild(cardText);

        newCard.appendChild(cardSource);

        return newCard;

    }
}
