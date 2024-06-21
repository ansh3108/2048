// Get necessary DOM elements
const startButton = document.getElementById('start-button');
const grid = document.querySelector('.grid');

let matrix;

// Function to create the game grid
const createGrid = () => {
    // Clear the grid content
    grid.innerHTML = '';

    // Initialize a 4x4 matrix with zeros
    matrix = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];

    // Create a 4x4 grid
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const boxDiv = document.createElement('div');
            boxDiv.classList.add('box');
            boxDiv.setAttribute('data-position', `${i}_${j}`);
            grid.appendChild(boxDiv);
        }
    }
};

// Function to generate a random position
const randomPosition = (arr) => {
    return Math.floor(Math.random() * arr.length);
};

// Function to check for an empty box
const hasEmptyBox = () => {
    for (let r in matrix) {
        for (let c in matrix[r]) {
            if (matrix[r][c] == 0) {
                return true;
            }
        }
    }
    return false;
};

// Function to generate a tile with value 2 at a random position
const generateTwo = () => {
    if (hasEmptyBox()) {
        let randomRow = randomPosition(matrix);
        let randomCol = randomPosition(matrix[randomRow]);
        if (matrix[randomRow][randomCol] == 0) {
            matrix[randomRow][randomCol] = 2;
            let element = document.querySelector(`[data-position='${randomRow}_${randomCol}']`);
            element.innerHTML = 2;
        } else {
            generateTwo();
        }
    }
};

// Function to start the game
const startGame = () => {
    createGrid();
    generateTwo();
    generateTwo();
};

// Event listener for start button click
startButton.addEventListener('click', startGame);
