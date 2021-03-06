import { firstElement, dateLength } from '../helpers/messages.js';

export class GitCard {
    constructor(name, email, date, message, avatar, slideBlock) {
        this.name = name;
        this.email = email;
        this.date = date;
        this.message = message;
        this.avatar = avatar;
        this.slideBlock = slideBlock;
    }
    _dateFormat(date, cardDate) {
        date = date.slice(firstElement, dateLength);
        date = date.replace(/-/g, ',');
        const publicDate = new Date(date);
        const formatter = new Intl.DateTimeFormat("ru", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        date = formatter.format(publicDate);
        cardDate.textContent = date;

    }
    createCard() {
        const newCard = document.createElement('li');
        newCard.classList.add('glide__slide');

        const cardDate = document.createElement('div');
        cardDate.classList.add('glide__date');
        this._dateFormat(this.date, cardDate);
        // carDate.textContent = this.date;

        const cardAuthorBlock = document.createElement('div');
        cardAuthorBlock.classList.add('glide__author-block');

        const cardAuthor = document.createElement('div');
        cardAuthor.classList.add('glide__author');

        const cardImg = document.createElement('img');
        cardImg.classList.add('glide__img');
        cardImg.src = this.avatar;
        cardImg.alt = this.name;

        const cardAuthorContacts = document.createElement('div');
        cardAuthorContacts.classList.add('glide__author-contacts');

        const cardAuthorName = document.createElement('div');
        cardAuthorName.classList.add('glide__name');
        cardAuthorName.textContent = this.name;

        const cardAuthorEmail = document.createElement('div');
        cardAuthorEmail.classList.add('glide__email');
        cardAuthorEmail.textContent = this.email;

        const cardDescription = document.createElement('p');
        cardDescription.classList.add('glide__description');
        cardDescription.textContent = this.message;

        newCard.appendChild(cardDate);
        newCard.appendChild(cardAuthorBlock);

        cardAuthorBlock.appendChild(cardAuthor);
        cardAuthorBlock.appendChild(cardDescription);

        cardAuthor.appendChild(cardImg);
        cardAuthor.appendChild(cardAuthorContacts);

        cardAuthorContacts.appendChild(cardAuthorName);
        cardAuthorContacts.appendChild(cardAuthorEmail);

        this.slideBlock.appendChild(newCard)
    }
}