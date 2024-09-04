// get global variables
const enter = document.querySelector("enter");
const sketchContainer = document.querySelector(".sketch-container")
const promptMessage = document.querySelector(".prompt-message");

function getInfo() {
    let userNumber = document.querySelector(".user-info").value;
    return userNumber;
}

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

function eraseSketch() {
    const gridBoxes = document.querySelectorAll(".grid-box");

    gridBoxes.forEach(box => {box.style.backgroundColor = "white"});
}

function initiateSketch() {
    clearGrid();
    let userInput = getInfo();

    if (userInput < 16 || userInput > 100) {
        promptMessage.textContent = "Please enter a value between 16 and 100";
    } else {
        createGrid(userInput);
        paintSquares();
        promptMessage.textContent = "";
    }
}

function paintSquares() {
    const gridBoxes = document.querySelectorAll(".grid-box");

    gridBoxes.forEach(box => box.addEventListener('mouseover', () => {
        box.style.backgroundColor = "black";
    }))
}


initiateSketch();