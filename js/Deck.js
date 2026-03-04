export class Deck {

    constructor() {
        this.suits = ["oros", "copas", "bastos", "espadas"];
        this.resetDeck(); // Inicializa el mazo
    }

    resetDeck() {
        this.cards = [];

        // 12 cartas por palo (baraja española)
        for (let suit of this.suits) {
            for (let i = 1; i <= 12; i++) {
                this.cards.push(suit);
            }
        }
    }

    drawCard() {

        // Si el mazo se vacía, se vuelve a llenar
        if (this.cards.length === 0) {
            this.resetDeck();
        }

        const index = Math.floor(Math.random() * this.cards.length);
        return this.cards.splice(index, 1)[0];
    }
}