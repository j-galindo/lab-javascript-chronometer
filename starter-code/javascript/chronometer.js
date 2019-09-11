class Chronometer {

    constructor() {
        this.currentTime = 0;
    }

    startClick() {
        this.intervalId = setInterval(function() { this.currentTime++ }, 1000);
    }
    getMinutes() {
            return this.currentTime;
        }
        // getSeconds() {}
        // twoDigitsNumber() {}
        // stopClick() {}
        // resetClick() {}
        // splitClick() {}
}
Chronometer = new Chronometer.startClick();