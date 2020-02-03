import { maxShowed, count } from '../helpers/messages.js';

export class Showmore {
    constructor(props) {
        this.props = props;
        const { cards, myQuestion, showButton, isLoggedIn, render } = props;
        this.isLoggedIn = isLoggedIn;
        this.showButton = showButton;
        this.cards = cards;
        this.myQuestion = myQuestion;
        this.load = render;
        this.where = maxShowed;
        this.count = count;
    }
    showcards() {
        if (this.count > this.cards.articles.length) {
            this.showButton.style.display = 'none';
            this.count = this.cards.articles.length
            this.load.render(this.cards, this.myQuestion, this.isLoggedIn);
        } else {
            this.load.render(this.cards, this.myQuestion, this.isLoggedIn);
            this.where = this.count;
            this.count = this.count + maxShowed;
        }

    }
}

