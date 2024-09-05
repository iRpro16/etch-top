// get global variables
const enter = document.querySelector("enter");
const sketchContainer = document.querySelector(".sketch-container")
const promptMessage = document.querySelector(".prompt-message");
const gridBoxes = document.querySelectorAll(".grid-box");
const color = document.querySelector("#color-chosen");
let userNumber = document.querySelector(".user-info");


function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        row.classList = "row";
        row.id = i;
        sketchContainer.appendChild(row);

        for (let i = 0; i < gridSize; i++) {
            let gridBox = document.createElement("div");
            gridBox.classList = "grid-box";
            gridBox.id = i;
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
    let userInput = userNumber.value;

    if (userInput < 16 || userInput > 100) {
        promptMessage.textContent = "Please enter a value between 16 and 100";
    } else {
        createGrid(userInput);
        paintSquares();
        promptMessage.textContent = "";
        document.querySelector(".user-info").value = "";
    }
}

function paintSquares() {
    const gridBoxes = document.querySelectorAll(".grid-box");

    gridBoxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = color.value;
        })
    })
}

function randomColors() {
    const gridBoxes = document.querySelectorAll(".grid-box");
    promptMessage.textContent ="click 'Enter' to exit RGB Mode.";

    gridBoxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            box.style.backgroundColor = "#" + randomColor;
        })
    })
}

initiateSketch();