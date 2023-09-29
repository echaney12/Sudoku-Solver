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
    constructor(N, K) {
        this.N = N;
        this.K = K;
        this.boxLen = Math.floor(Math.sqrt(N));
        this._grid = Array(9).fill().map(() => Array(9).fill(0));
        this.sol = Array(9).fill().map(() => Array(9).fill(0));
    }

    get grid() {
        return this._grid;
    }

    //generates 9x9 sukoku grid
    static generateGrid() {
        return Array(9).fill().map(() => Array(9).fill(0));
    }

    //solves current grids problem
    static solvePuzzle() {
        return Array(9).fill(Array(9).fill(1));
    }

    //checks if value is valid in current column
    validColumn(col, num) {
        for(let row=0; row<this.N; row++) {
            if(this.grid[row][col] === num) {
                return false;
            }
        }
        return true;
    }

    /* checks if value is valid in current row */
    validRow(row, num) {
        for(let col=0; col<this.N; col++) {
            if(this.grid[row][col] === num) {
                return false;
            }
        }
        return true;
    }

    /* checks if value is valid in current box */
    validBox(sRow, sCol, num) {
        for(let bRow=0; bRow<this.boxLen; bRow++) {
            for(let bCol=0; bCol<this.boxLen; bCol++) {
                if(this.grid[sRow+bRow][sCol+bCol] === num) {
                    return false
                }
            }
        }
        return true;
    }

    /* returns true if value is valid in its placement */
    isValid(row, col, num) {
        return (
            this.validRow(row, num) &&
            this.validColumn(col, num) &&
            this.validBox(row - (row % this.boxLen), col - (col % this.boxLen), num)
        );
    }

    /* shuffles array around randomly */
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }  

    /* fills in the diagnol boxes to create random outputs */
    fillDBOxes() {
        for(let i=0; i<this.N; i+=this.boxLen) {
            let nums = Array.from({ length: 9 }, (value, index) => index + 1);
            this.shuffleArray(nums);
            for(let row=0; row<this.boxLen; row++) {
                for(let col=0; col<this.boxLen; col++) {
                    this.grid[row + i][col + i] = nums.pop();
                }
            }
        }
    }

    /* fills in reamaining values */
    solve(row, col) {
        if(row === this.N - 1 && col === this.N) {
            return true;
        }

        if(col === this.N) {
            row+=1;
            col=0;
        }

        if(this.grid[row][col] !== 0) {
            return this.solve(row, col+1);
        }

        for(let num=1; num<=this.N; num++) {
            if(this.isValid(row, col, num)) {
                this.grid[row][col] = num;
                if(this.solve(row, col+1)) {
                    return true;
                }
                this.grid[row][col] = 0;
            }
        }
        return false;
    }

    removeTiles() {
        let c = this.K
        while(c > 0) {
            let row = Math.floor(Math.random() * this.N);
            let col = Math.floor(Math.random() * this.N);
            if(this.grid[row][col] !== 0) {
                c--;
                this.grid[row][col] = 0;
            }
        }
    }

    fillGrid() {
        this.fillDBOxes()
        this.solve(0, this.boxLen);
        this.sol = this.grid.map(function(arr) {
            return arr.slice();
        });
        this.removeTiles();
    }
}