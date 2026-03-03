export class Deck {

    constructor() {
        this.suits = ["oros", "copas", "bastos", "espadas"];
    }

    drawCard() {
        const randomIndex = Math.floor(Math.random() * this.suits.length);
        return this.suits[randomIndex];
    }
}