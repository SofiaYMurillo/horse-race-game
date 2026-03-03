export class Horse {

    constructor(name) {
        this.name = name;
        this.position = 0;
        this.element = null;
    }

    move() {
        let step = Math.floor(Math.random() * 10); // operador aleatorio
        this.position += step;
    }

}