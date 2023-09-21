//initializes board
const drawBoard = () => {
    /* loops through each tile to create a tile container */
    for(let r=0; r<9; r++) {
        for(let c=0; c<9; c++) {
            const tile = document.createElement("div");
            //generates id that corresponds to its position
            tile.id = `${r}-${c}`;
            //adds class name to separate the 3x3 boxes
            if(r==2 || r==5) {
                tile.classList.add("horizontal-line");
            }
            if(c==2 || c==5) {
                tile.classList.add("vertical-line")
            }
            //tmp
            tile.classList.add("tile");
            document.getElementById("grid").appendChild(tile);
        }
    }

    /* generates number selectors */
    for(let i=1; i<=9; i++) {
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        //number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }
};

function fillBoard() {
    // TODO: fill in board with values from a grid
}

export { drawBoard };