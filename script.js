// get global variables
const enter = document.querySelector("enter");
const sketchContainer = document.querySelector(".sketch-container")

function getInfo() {
    let userNumber = document.querySelector(".user-info").value;
    return userNumber;
}

// if userNumber types in something less than 16 or greater than 100
// dont execute function creation and return the function, display
// message to type in appropriate number

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        row.classList = "row";
        row.id = i;
        sketchContainer.appendChild(row);

        for (let i = 0; i < gridSize; i++) {
            let gridBox = document.createElement("div");
            gridBox.classList = "grid-box";
            gridBox.id = i
            row.appendChild(gridBox);
        }
    }
}

function clearGrid() {
    while (sketchContainer.lastElementChild) {
        sketchContainer.removeChild(sketchContainer.lastElementChild);
    }
}

function initiateSketch() {
    clearGrid();
    let userInput = getInfo();
    createGrid(userInput);
}

initiateSketch();