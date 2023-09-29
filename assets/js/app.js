import { Sudoku } from "./Sudoku.js";
import { drawBoard } from "./draw_board.js";

/* Global Variable */
let selectedNum = null;

let grid = Sudoku.generateGrid();
let sol = Sudoku.solvePuzzle();

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
        this.innerText = selectedNum.id;
    });
})

/* initializes the board when button clicked */
document.querySelector(".start-btn").addEventListener("click", function() {
    const sudoku = new Sudoku(9, 40);
    sudoku.fillGrid();
    for(let r=0; r<9; r++) {
        for(let c=0; c<9; c++) {
            if(sudoku.grid[r][c] !== 0) {
                document.getElementById(`${r}-${c}`).innerText = sudoku.grid[r][c];
            }
        }
    }
});

/* solves board when solve button clicked */
document.querySelector(".solve-btn").addEventListener("click", function() {
    for(let r=0; r<9; r++) {
        for(let c=0; c<9; c++) {
            document.getElementById(`${r}-${c}`).innerText = sol[r][c];
        }
    }
});