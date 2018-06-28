var Furry = require ("./furry.js");
var Coin = require ("./coin.js");

function Game() {
    var self = this;
    var board = document.querySelector("#board");
    this.board = board.getElementsByTagName("div");
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    this.scoreElement = document.querySelector("#score strong");
    this.alert = document.querySelector(".alert");
    this.index = function (x, y) {
        return x + (y * 10);
    };

    // showing furry in new position after move

    this.showFurry = function () {
        self.hideVisibleFurry();
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    };

    // function hideing last position of furry when he's moving

    this.hideVisibleFurry = function () {
        var element = document.querySelector(".furry");
        if (element !== null)
        { element.classList.remove("furry"); }
    };


    // function to move furry in some time

    this.startGame = function () {
        this.idSetInterval = setInterval (function () {
            self.moveFurry();
        }, 250);
    };

    //function showing coin in new place

    this.showCoin = function () {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    };

    this.hideVisibleCoin = function () {
        if (this.furry.x == this.coin.x &&  this.furry.y == this.coin.y) {
            document.querySelector(".coin").classList.remove("coin");
        }
    };

    // function changing furry moving direction

    this.turnFurry = function () {
        switch (event.which) {
            case 37:
                self.furry.direction = "left";
                break;
            case 39:
                self.furry.direction = "right";
                break;
            case 40:
                self.furry.direction = "up";
                break;
            case 38:
                self.furry.direction = "down";
                break;
        }
    };

    // function moving furry in right direction

    this.moveFurry = function () {
        if (this.furry.direction == "right") {
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction == "left") {
            this.furry.x = this.furry.x - 1;
        } else if (this.furry.direction == "up") {
            this.furry.y = this.furry.y + 1;
        } else if (this.furry.direction == "down") {
            this.furry.y = this.furry.y - 1;
        }
        self.gameOver();
        self.showFurry();
        self.gameOver();
        self.checkCoinCollision();

    };

    // getting score - checking if furry get a coin

    this.checkCoinCollision = function () {
        var pos = this.index(this.furry.x, this.furry.y);
        if (this.furry.x == this.coin.x &&  this.furry.y == this.coin.y) {
            this.board[pos].classList.remove('coin');
            this.score ++;
            this.scoreElement.innerHTML = this.score;
            this.coin = new Coin();
            self.hideVisibleCoin();
            self.showCoin();
        }
    };

    // checking if furry hit  the wall - game over
    this.gameOver = function () {
        if (this.furry.x < 0 || this.furry.y < 0 || this.furry.x > 9 || this.furry.y > 9) {
            clearInterval(this.idSetInterval);
            this.hideVisibleFurry();
            this.alert.innerHTML = "GAME OVER";

        }
    };
}

module.exports = Game;