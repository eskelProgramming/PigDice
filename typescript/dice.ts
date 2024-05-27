// Declare in the global scope
let currGame: Game = new Game();

function generateRandomValue(minValue: number, maxValue: number): number {
    var random = Math.random();

    //TODO: use random to generate a number between min and max

    return random;
}


function changePlayers(): void {
    let currentPlayerName = (<HTMLElement>document.getElementById("current")).innerText;
    let player1Name = (<HTMLInputElement>document.getElementById("player1")).value;
    let player2Name = (<HTMLInputElement>document.getElementById("player2")).value;

    //swap from player to player by comparing current name to player names
    //set currentPlayerName to the next player
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
    let currTotal = parseInt((<HTMLInputElement>document.getElementById("total")).value);

    //roll the die and get a random value 1 - 6 (use generateRandomValue function)

    //if the roll is 1
    //  change players
    //  set current total to 0

    //if the roll is greater than 1
    //  add roll value to current total

    //set the die roll to value player rolled
    //display current total on form
}

function holdDie(): void {
    //get the current turn total
    //determine who the current player is
    //add the current turn total to the player's total score

    //reset the turn total to 0

    //change players
    changePlayers();
}