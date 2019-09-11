class Chronometer {

    constructor() {
        this.currentTime = 0;
    }

    startClick() {
            this.intervalId = setInterval(function() { this.currentTime++ }, 1000);
        }
        // getMinutes() {}
        // getSeconds() {}
        // twoDigitsNumber() {}
        // stopClick() {}
        // resetClick() {}
        // splitClick() {}
}