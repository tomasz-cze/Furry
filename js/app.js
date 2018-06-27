

var newGame = new Game();

newGame.showFurry();
newGame.showCoin();
newGame.startGame();

document.addEventListener('keydown', function (event) {
    newGame.turnFurry(event);
});

