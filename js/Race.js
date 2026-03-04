import { Deck } from "./Deck.js";

export class Race {

    constructor() {
        this.deck = new Deck();
        this.finishLine = 900;
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

        const track = document.getElementById("track");
        this.finishLine = track.clientWidth - 50;

        this.raceStarted = true;
        document.getElementById("draw").disabled = false;
        document.getElementById("winner").innerText = "";
        document.getElementById("card").innerHTML = "";

        this.renderRace();
    }

    drawCard() {
        if (!this.raceStarted) return;

        const card = this.deck.drawCard();
        if (!card) return;

        document.getElementById("card").innerHTML =
            `<img src="./assets/${card}.png" width="100">`;

        this.positions[card] += 40;

        this.updateHorse(card);
        this.checkWinner(card);
    }

    renderRace() {
        const track = document.getElementById("track");
        track.innerHTML = "";

        this.suits.forEach(suit => {
            const lane = document.createElement("div");
            lane.classList.add("lane");

            const horse = document.createElement("div");
            horse.classList.add("horse");
            horse.id = suit;
            horse.innerText = "🐎";
            horse.style.left = "0px";

            lane.appendChild(horse);
            track.appendChild(lane);
        });
    }

    updateHorse(suit) {
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