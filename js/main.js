import { Race } from './Race.js';

const race = new Race(800);

race.addHorse("Caballo 1");
race.addHorse("Caballo 2");
race.addHorse("Caballo 3");

const track = document.getElementById("track");

race.horses.forEach((horse, index) => {

    const lane = document.createElement("div");
    lane.classList.add("lane");

    const horseElement = document.createElement("div");
    horseElement.classList.add("horse");
    horseElement.innerText = "🐎";

    lane.appendChild(horseElement);
    track.appendChild(lane);

    horse.element = horseElement;
});

document.getElementById("startBtn").addEventListener("click", () => {
    race.start();
});