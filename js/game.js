var Game = require("./game.js");

function Game() {

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

}