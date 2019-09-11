class Chronometer {

    constructor() {
        this.currentTime = 0;
    }

    startClick() {
        this.intervalId = setInterval(function() { this.currentTime += 1 }, 1000);
    }
    getMinutes() {
        return this.currentTime;
    }
    getSeconds() {
        return this.currentTime;
    }
    twoDigitsNumber() {
        return this.currentTime.toString;
    }
    stopClick() {

    }
    resetClick() {
        clearInterval()
    }
    splitClick() {}
}