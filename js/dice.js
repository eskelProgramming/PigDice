let currGame = new Game();
function generateRandomValue(minValue, maxValue) {
    var random = Math.random();
    random = Math.floor(random * (maxValue - minValue + 1) + minValue);
    return random;
}
function changePlayers() {
    let currentPlayerName = document.getElementById("current");
    if (currGame.currentPlayer == currGame.players[0]) {
        currGame.currentPlayer = currGame.players[1];
        currentPlayerName.innerText = currGame.players[1].name;
    }
    else if (currGame.currentPlayer == currGame.players[1]) {
        currGame.currentPlayer = currGame.players[0];
        currentPlayerName.innerText = currGame.players[0].name;
    }
    else {
        currGame.currentPlayer = currGame.players[0];
        currentPlayerName.innerText = currGame.players[0].name;
    }
}
window.onload = function () {
    let newGameBtn = document.getElementById("new_game");
    newGameBtn.onclick = createNewGame;
    document.getElementById("roll").onclick = rollDie;
    document.getElementById("hold").onclick = holdDie;
};
function createNewGame() {
    currGame = new Game();
    currGame.players[0] = new Player();
    currGame.players[1] = new Player();
    let player1Txt = document.getElementById("player1");
    let player2Txt = document.getElementById("player2");
    if (player1Txt.value.trim() == "" || player2Txt.value.trim() == "") {
        alert("Please enter a name into both text boxes.");
    }
    else {
        currGame.players[0].name = player1Txt.value;
        currGame.players[1].name = player2Txt.value;
        document.getElementById("turn").classList.add("open");
        document.getElementById("total").value = "0";
        (player1Txt).setAttribute("disabled", "disabled");
        (player2Txt).setAttribute("disabled", "disabled");
        changePlayers();
    }
}
function rollDie() {
    let currTotal = (currGame.currentPlayer).turnTotal;
    let dieRoll = generateRandomValue(1, 6);
    if (dieRoll == 1) {
        currTotal = 0;
        document.getElementById("total").value = currTotal.toString();
        changePlayers();
    }
    else {
        currTotal += dieRoll;
        document.getElementById("total").value = currTotal.toString();
    }
    (currGame.currentPlayer).turnTotal = currTotal;
    document.getElementById("die").value = dieRoll.toString();
}
function holdDie() {
    currGame.currentPlayer.score += currGame.currentPlayer.turnTotal;
    if (currGame.currentPlayer == currGame.players[0]) {
        document.getElementById("score1").value = currGame.currentPlayer.score.toString();
    }
    else {
        document.getElementById("score2").setAttribute("value", currGame.currentPlayer.score.toString());
    }
    currGame.currentPlayer.turnTotal = 0;
    changePlayers();
    document.getElementById("die").value = "";
    document.getElementById("total").value = "0";
}
