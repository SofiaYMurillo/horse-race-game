import { Deck } from "./Deck.js";

export class Race {

    constructor() {
        this.deck = new Deck();
        this.finishLine = 600; // distancia en px
        this.raceStarted = false;

        this.suits = ["oros", "copas", "bastos", "espadas"];

        this.positions = {
            oros: 0,
            copas: 0,
            bastos: 0,
            espadas: 0
        };

        this.init();
    }

    init() {
        document.getElementById("start")
            .addEventListener("click", () => this.startRace());

        document.getElementById("draw")
            .addEventListener("click", () => this.drawCard());

        this.renderRace();
    }

    startRace() {
        this.positions = {
            oros: 0,
            copas: 0,
            bastos: 0,
            espadas: 0
        };

        this.raceStarted = true;
        document.getElementById("draw").disabled = false;
        document.getElementById("winner").innerText = "";
        document.getElementById("card").innerHTML = "";

        this.renderRace();
    }

    drawCard() {
        if (!this.raceStarted) return;

        const card = this.deck.drawCard();

        // Mostrar carta
        document.getElementById("card").innerHTML =
            `<img src="./assets/${card}.png" width="100">`;

        // Avanzar caballo
        this.positions[card] += 60;

        this.updateHorsePosition(card);
        this.checkWinner(card);
    }

    renderRace() {
        const track = document.getElementById("track");
        track.innerHTML = "";

        this.suits.forEach(suit => {
            const lane = document.createElement("div");
            lane.classList.add("lane");

            const horse = document.createElement("img");
            horse.src = `./assets/${suit}.png`;
            horse.classList.add("horse");
            horse.id = suit;
            horse.style.left = "0px";

            lane.appendChild(horse);
            track.appendChild(lane);
        });
    }

    updateHorsePosition(suit) {
        const horse = document.getElementById(suit);
        horse.style.left = this.positions[suit] + "px";
    }

    checkWinner(suit) {
        if (this.positions[suit] >= this.finishLine) {
            document.getElementById("winner").innerText =
                "🏆 ¡Ganó " + suit.toUpperCase() + "!";
            this.raceStarted = false;
            document.getElementById("draw").disabled = true;
        }
    }
}