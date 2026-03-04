export class Horse {

    constructor(suit) {
        this.suit = suit;       // ♥ ♠ ♦ ♣
        this.position = 0;      // posición inicial
        this.element = null;    // referencia visual
    }

    move() {
        this.position += 35;    // avanza 20px cada vez que sale su carta
    }

}