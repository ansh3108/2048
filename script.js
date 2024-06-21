// Get necessary DOM elements
const startButton = document.getElementById('start-button');
const grid = document.querySelector('.grid');

// Function to start the game
const startGame = () => {
    // Clear the grid content
    grid.innerHTML = '';

    // Create a 4x4 grid
    for (let i = 0; i < 16; i++) {
        const boxDiv = document.createElement('div');
        boxDiv.classList.add('box');
        grid.appendChild(boxDiv);
    }
};

// Event listener for start button click
startButton.addEventListener('click', startGame);
