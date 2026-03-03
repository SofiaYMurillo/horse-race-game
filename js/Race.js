import { Deck } from './Deck.js';

export class Race {

    constructor(distance) {
        this.distance = distance;
        this.horses = [];
        this.winner = null;
        this.deck = new Deck();
        this.interval = null;
    }

    addHorse(horse) {
        this.horses.push(horse);
    }

    start() {

        this.interval = setInterval(() => {

            if (!this.winner) {

                // Sacar carta
                const card = this.deck.drawCard();
               document.getElementById("card").innerHTML =
    `<img src="assets/${card}.png" width="80">`;

                // Buscar caballo correspondiente
                const horse = this.horses.find(h => h.suit === card);

                if (horse) {
                    horse.move();
                    horse.element.style.left = horse.position + "px";

                    // Verificar si ganó
                    if (horse.position >= this.distance) {
                        horse.position = this.distance;
                        this.winner = horse;
                        clearInterval(this.interval);
                        document.getElementById("winner").innerText =
                            `🏆 Ganador: ${horse.suit}`;
                    }
                }
            }

        }, 800);

    }

}