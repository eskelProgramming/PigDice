let currGame = new Game();
function generateRandomValue(minValue, maxValue) {
    var random = Math.random();
    return random;
}
function changePlayers() {
    let currentPlayerName = document.getElementById("current").innerText;
    let player1Name = document.getElementById("player1").value;
    let player2Name = document.getElementById("player2").value;
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
    let currTotal = parseInt(document.getElementById("total").value);
}
function holdDie() {
    changePlayers();
}
