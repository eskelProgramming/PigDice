/**
 * Represents a single player.
 */
class Player {
    /**
     * The player's name.
     */
    name: string;
    /**
     * The player's total score.
     */
    score: number;
    /**
     * The player's current turn total.
     */
    turnTotal: number;

    constructor() {
        this.name = null;
        this.score = 0;
        this.turnTotal = 0;
    }
}