import { Deck } from "./Deck.js";

export class Race {

    constructor() {
        this.deck = new Deck();
        this.positions = {
            oros: 0,
            copas: 0,
            bastos: 0,
            espadas: 0
        };
        this.finishLine = 5;
        this.raceStarted = false;

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
        this.positions = { oros: 0, copas: 0, bastos: 0, espadas: 0 };
        this.raceStarted = true;
        document.getElementById("draw").disabled = false;
        this.renderRace();
    }

    drawCard() {
        if (!this.raceStarted) return;

        const card = this.deck.drawCard();

        // Mostrar imagen
        document.getElementById("card").innerHTML =
            `<img src="./assets/${card}.png" width="100">`;

        // Avanzar caballo correspondiente
        this.positions[card]++;

        this.renderRace();
        this.checkWinner();
    }

    renderRace() {
        const raceDiv = document.getElementById("race");
        raceDiv.innerHTML = "";

        for (let suit in this.positions) {
            const horse = document.createElement("div");
            horse.innerText =
                suit.toUpperCase() +
                " 🐎 " +
                "—".repeat(this.positions[suit]);

            raceDiv.appendChild(horse);
        }
    }

    checkWinner() {
        for (let suit in this.positions) {
            if (this.positions[suit] >= this.finishLine) {
                alert("¡Ganó " + suit.toUpperCase() + "!");
                this.raceStarted = false;
                document.getElementById("draw").disabled = true;
            }
        }
    }
}