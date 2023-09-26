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

//TODO: add functionality to board
[...document.querySelectorAll('.tile')].forEach(el => {
    el.addEventListener("click", function() {
        this.innerText = selectedNum.id;
    });
})

//TODO: add functionality to button to initialize the board
document.querySelector(".start-btn").addEventListener("click", function() {
    for(let r=0; r<9; r++) {
        for(let c=0; c<9; c++) {
            document.getElementById(`${r}-${c}`).innerText = grid[r][c];
        }
    }
});

//TODO: add functionality to solve button
document.querySelector(".solve-btn").addEventListener("click", function() {
    for(let r=0; r<9; r++) {
        for(let c=0; c<9; c++) {
            document.getElementById(`${r}-${c}`).innerText = sol[r][c];
        }
    }
});