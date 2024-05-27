// Declare in the global scope
let currGame: Game = new Game();

function generateRandomValue(minValue: number, maxValue: number): number {
    var random = Math.random();

    //Use random to generate a number between min and max value
    //Math.random generates a number between 0 and 1
    //multiply the random number by the range of numbers you want
    //add the min value to the result to shift the range of numbers
    //Math.floor will round down to the nearest whole number
    random = Math.floor(random * (maxValue - minValue + 1) + minValue);

    //return the result
    return random;
}


function changePlayers(): void {
    let currentPlayerName = <HTMLElement>document.getElementById("current");

    //swap from player to player by comparing current name to player names
    //set currentPlayerName to the next player
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
    let newGameBtn = document.getElementById("new_game") as HTMLButtonElement;
    newGameBtn.onclick = createNewGame;

    (<HTMLButtonElement>document.getElementById("roll")).onclick = rollDie;

    (<HTMLButtonElement>document.getElementById("hold")).onclick = holdDie;
}

function createNewGame() {
    //reset the game object
    currGame = new Game();

    // Create players in the game object
    currGame.players[0] = new Player();
    currGame.players[1] = new Player();

    //verify each player has a name
    //if both players don't have a name display error
    let player1Txt = document.getElementById("player1") as HTMLInputElement;
    let player2Txt = document.getElementById("player2") as HTMLInputElement;

    if (player1Txt.value.trim() == "" || player2Txt.value.trim() == "") {
        alert("Please enter a name into both text boxes.");
    }

    else {    
        // set player names
        currGame.players[0].name = player1Txt.value;
        currGame.players[1].name = player2Txt.value;
        

        //if both players do have a name start the game!
        (<HTMLElement>document.getElementById("turn")).classList.add("open");
        (<HTMLInputElement>document.getElementById("total")).value = "0";
        //lock in player names and then change players
        (player1Txt).setAttribute("disabled", "disabled");
        (player2Txt).setAttribute("disabled", "disabled");
        changePlayers();
    }

}

function rollDie(): void {
    let currTotal = (currGame.currentPlayer).turnTotal;

    //roll the die and get a random value 1 - 6 (use generateRandomValue function)
    let dieRoll = generateRandomValue(1, 6);

    //if the roll is 1
    //  change players
    //  set current total to 0
    if (dieRoll == 1) {
        currTotal = 0;
        (<HTMLInputElement>document.getElementById("total")).value = currTotal.toString();
        changePlayers();
    }

    //if the roll is greater than 1
    //  add roll value to current total
    //  display current total on form
    else {
        currTotal += dieRoll;
        (<HTMLInputElement>document.getElementById("total")).value = currTotal.toString();
    }

    // set the player's turn total to the current total
    (currGame.currentPlayer).turnTotal = currTotal;

    //set the die roll to value player rolled
    //display current total on form
    (<HTMLInputElement>document.getElementById("die")).value = dieRoll.toString();

    // if the player's score is greater than or equal to 100
    //  display a message that the player has won
    checkForWin(currTotal);
}

function checkForWin(currTotal: number) {
    if (currGame.currentPlayer.score + currTotal >= 100) {
        alert(currGame.currentPlayer.name + " has won!");
        (<HTMLElement>document.getElementById("turn")).classList.remove("open");

        // clear player names
        (<HTMLInputElement>document.getElementById("player1")).value = "";
        (<HTMLInputElement>document.getElementById("player2")).value = "";

        // unlock player names
        (<HTMLInputElement>document.getElementById("player1")).removeAttribute("disabled");
        (<HTMLInputElement>document.getElementById("player2")).removeAttribute("disabled");

        // clear scores
        (<HTMLInputElement>document.getElementById("score1")).value = "";
        (<HTMLInputElement>document.getElementById("score2")).value = "";
    }
}

function holdDie(): void {
    //get the current turn total
    //determine who the current player is
    //add the current turn total to the player's total score
    currGame.currentPlayer.score += currGame.currentPlayer.turnTotal;

    if (currGame.currentPlayer == currGame.players[0]) {
        (<HTMLInputElement>document.getElementById("score1")).value = currGame.currentPlayer.score.toString();
    }
    else {
        document.getElementById("score2").setAttribute("value", currGame.currentPlayer.score.toString());
    }

    //reset the turn total to 0
    currGame.currentPlayer.turnTotal = 0;

    //change players
    changePlayers();

    // clear the die roll and turn total
    (<HTMLInputElement>document.getElementById("die")).value = "";
    (<HTMLInputElement>document.getElementById("total")).value = "0";
}