import { Horse } from './Horse.js';

export class Race {

    constructor(distance) {
        this.distance = distance;
        this.horses = [];
        this.winner = null;
        this.interval = null;
    }

    addHorse(name) {
        const horse = new Horse(name);
        this.horses.push(horse);
    }

    start() {

        this.interval = setInterval(() => {

            this.horses.forEach(horse => {

                if (!this.winner) {

                    horse.move();

                    if (horse.position >= this.distance) {
                        horse.position = this.distance; // restricción
                        this.winner = horse;
                        clearInterval(this.interval);
                        document.getElementById("winner").innerText =
                            `🏆 Ganador: ${horse.name}`;
                    }

                    horse.element.style.left = horse.position + "px";
                }

            });

        }, 200);

    }

}