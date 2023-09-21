/* Objects Necessary for Sudoku Grid */

//individual tiles in grid
export const tile = (value, position) => {
    return {
        value,
        position
    }
};

//checks if entry is valid for row
// const validRow = (grid, tile) => {

// }

export class Sudoku {
    constructor(grid) {
        this._grid = grid //9x9 array of tiles
    }

    get grid() {
        return this._grid;
    }

    //generates 9x9 sukoku grid
    static generateGrid() {
        return [
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0]
        ];
    }

    //solves current grids problem
    // solvePuzzle() {

    // }
}