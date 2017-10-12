var origBoard;
const huPlayer = 'You';
const aiPlayer = 'L.A.';
window.alert("WELCOME");
var friend = window.prompt("Enter name");
var email = window.prompt("enter email to sign up");
if (friend && email != null){
    window.alert("Thanks " + friend + " for signing up.")
}
else{
self.close;}
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]
const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
    document.querySelector(".endgame").style.display = "none";
    origBoard = Array.from(Array(9).keys());
    console.log(origBoard);
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
        cells[i].addEventListener('click', turnClick, false)
    }

    function turnClick(square) {
        if (typeof origBoard[square.target.id] == 'number') {
            turn(square.target.id, huPlayer)
            if (!checkTie()) turn(bestSpot(), aiPlayer);
        }

    }

    function turn(squareId, player) {
        origBoard[squareId] = player;
        document.getElementById(squareId).innerHTML = player;
        let gameWon = checkWin(origBoard, player)
        if (gameWon) gameOver(gameWon)
    }

    function checkWin(board, player) {
        let plays = board.reduce((a, e, i) =>
            (e === player) ? a.concat(i) : a, []);
        let gameWon = null;
        for (let [index, win] of winCombos.entries()) {
            if (win.every(elem => plays.indexOf(elem) > -1)) {
                gameWon = {
                    index: index,
                    player: player
                };
                break;
            }
        }
        return gameWon;
    }

    function gameOver(gameWon) {
        for (let index of winCombos[gameWon.index]) {
            document.getElementById(index).style.backgroundColor = gameWon.player == huPlayer ? "blue" : "red";
        }
        for (var i = 0; i < cells.length; i++) {
            cells[i].removeEventListener('click', turnClick, false)
        }
        declareWinner(gameWon.player == huPlayer ? "You win!" : "You lose");
    }
}

function declareWinner(who) {
    document.querySelector(".endgame").style.display = "block";
    document.querySelector(".endgame .text").innerHTML = who;
}

function emptySquares() {
    return origBoard.filter(s => typeof s == 'number');
}

function bestSpot() {
    return emptySquares()[0];
}

function checkTie() {
    if (emptySquares().length == 0) {
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = 'green';
            cells[i].removeEventListener('click', turnClick(), false);
        }
        declareWinner("Tie Game!")
        return true;
    } else
    return false;
}
