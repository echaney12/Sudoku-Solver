import { Sudoku } from "./Sudoku.js";
import { drawBoard } from "./draw_board.js";

/* Global Variable */
let selectedNum = null;
let ERROR = 0;
const DIFF = 40;
let COUNT = DIFF;
let sudoku = new Sudoku(9, COUNT);

/* initializing the board */
drawBoard();

/* adds functionality to number selector */
[...document.querySelectorAll(".number")].forEach(el => {
    el.addEventListener("click", function() {
        if (selectedNum != null) {
            selectedNum.classList.remove("number-selected");
        }
        selectedNum = this;
        selectedNum.classList.add("number-selected");
    });
});


/* enables person to input numbers onto the board */
[...document.querySelectorAll('.tile')].forEach(el => {
    el.addEventListener("click", function() {
        if(!this.classList.contains("undefined")) {
            const [row, col] = this.id.split("-");
            if(selectedNum.id == sudoku.sol[row][col]) {
                this.innerText = selectedNum.id;
                this.classList.add("undefined");
                COUNT--;
                if(COUNT == 0) {
                    document.getElementById("message").innerText = "Well Done!";
                }
            } else {
                document.getElementById("errors").innerText = `${++ERROR} / 5`;
                if(ERROR == 5) {
                    solution();
                    document.getElementById("message").innerText = "Good Job! Try again next time.";
                }
            }
        }
    });
})

/* initializes the board when button clicked */
document.querySelector(".start-btn").addEventListener("click", function() {
    COUNT = DIFF;
    sudoku = new Sudoku(9, COUNT);
    sudoku.fillGrid();
    document.getElementById("message").innerText = "";
    for(let r=0; r<9; r++) {
        for(let c=0; c<9; c++) {
            const tile = document.getElementById(`${r}-${c}`);
            tile.innerText = "";
            tile.classList.add("undefined");
            if(sudoku.grid[r][c] !== 0) {    
                tile.innerText = sudoku.grid[r][c];
            } else {
                tile.classList.remove("undefined");
            }
        }
    }
});

/* fills in solution */
function solution() {
    for(let r=0; r<9; r++) {
        for(let c=0; c<9; c++) {
            const tile = document.getElementById(`${r}-${c}`);
            if(tile.innerText == "") {
                tile.innerText = sudoku.sol[r][c];
                tile.classList.add("undefined")
            }
        }
    }
    document.getElementById("message").innerText = "Good Effort! Give it another shot."
}

/* solves board when solve button clicked */
document.querySelector(".solve-btn").addEventListener("click", solution);