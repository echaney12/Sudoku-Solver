# Sudoku-Solver
Web application that generates a random sudoku for you to solve, and if you reach the 
try limit the game will terminate. It also includes a button that fills in the missing
values of the sudoku.

## Algorithm
To generate the sudoku first the boxes on the diagonal were filled in randomly to avoid
row and column constraints as well as to ensure a different sudoku each time. After the
diagonal is the remaining values filled in by recursively iterating over the the board
until a solution is found. If tile has no solution possible it will backtrack through the 
board resetting the value until a solution is found.
