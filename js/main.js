import { Race } from './Race.js';
import { Horse } from './Horse.js';

const race = new Race(600);
const suits = ["♥", "♠", "♦", "♣"];

const track = document.getElementById("track");

// Crear caballos
suits.forEach(suit => {

    const horse = new Horse(suit);
    race.addHorse(horse);

    const lane = document.createElement("div");
    lane.classList.add("lane");

    const horseElement = document.createElement("div");
    horseElement.classList.add("horse");
    horseElement.innerText = suit + " 🐎";

    lane.appendChild(horseElement);
    track.appendChild(lane);

    horse.element = horseElement;
});

// Botón iniciar
document.getElementById("startBtn").addEventListener("click", () => {
    race.start();
});