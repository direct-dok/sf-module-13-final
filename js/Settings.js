class Settings {

    constructor() {
        this.numberOfPlayersElem = document.querySelector('.settings__set-number-game');
        this.gameTimeElem = document.querySelector('.settings__range-game-time');

        this.playerNumber = this.numberOfPlayersElem.value;
        this.timeGame = this.gameTimeElem.value * 60;
        this.showTimeOnPage(this.gameTimeElem.value);

        this.numberOfPlayersElem.addEventListener('input', this.setPlayersNumber.bind(this));
        this.gameTimeElem.addEventListener('input', this.setTime.bind(this));

    }

    setTime(e) {
        this.timeGame = e.target.value * 60;
        this.showTimeOnPage(e.target.value);
    }

    showTimeOnPage(count) {
        document.querySelector('.settings__quantity-minuts').innerHTML = count;
        const metrics = document.querySelector('.settings__time-metrics');
        if(count < 2) {
            metrics.innerText = 'минута';
        } else if(count > 1 && count < 5) {
            metrics.innerText = 'минуты';
        } else if(count > 4) {
            metrics.innerText = 'минут';
        }
    }

    setPlayersNumber(e) {
        this.playerNumber = e.target.value;
    }

    getPlayerNumber() {
        return this.playerNumber;
    }

    getTimeGame() {
        return this.timeGame;
    }

}