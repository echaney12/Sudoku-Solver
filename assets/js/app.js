import { Sudoku } from "./Sudoku.js";
import { drawBoard } from "./draw_board.js";

/* Global Variable */
let selectedNum = null;

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

//TODO: add functionality to solve button