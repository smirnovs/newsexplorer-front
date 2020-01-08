export class Showmore {
    constructor(props) {
        this.props = props;
        const { cards, myQuestion, showButton, isLoggedIn, render } = props;
        this.isLoggedIn = isLoggedIn;
        this.showButton = showButton;
        this.cards = cards;
        this.myQuestion = myQuestion;
        this.load = render;
        this.where = 3;
        this.count = 6;
    }
    showcards() {
        if (this.count > this.cards.articles.length) {
            this.showButton.style.display = 'none';
            this.count = this.cards.articles.length
            this.load.render(this.where, this.count, this.cards, this.myQuestion, this.isLoggedIn);
        } else {
            this.load.render(this.where, this.count, this.cards, this.myQuestion, this.isLoggedIn);
            this.where = this.count;
            this.count = this.count + 3;
        }

    }
}

