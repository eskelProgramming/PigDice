/**
 * Represents a single game.
 */
class Game {
    /**
     * The players in the game.
     */
    players: Player[];
    /**
     * The player whose turn it is.
     */
    currentPlayer: Player;

    constructor() {
        this.players = [];
        this.currentPlayer = this.players[0];
    }
}