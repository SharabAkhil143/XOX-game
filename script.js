// Ensure DOM is fully loaded before initializing
document.addEventListener('DOMContentLoaded', function() {
    initGame();
});

// Game state
let board = Array(9).fill('');
let currentPlayer = 'X';
let gameActive = true;

// DOM elements
const cells = document.querySelectorAll('.cell');
const gameStatus = document.getElementById('gameStatus');
const restartBtn = document.getElementById('restartBtn');
const modal = document.getElementById('gameModal');
const modalMessage = document.getElementById('modalMessage');
const modalRestartBtn = document.getElementById('modalRestartBtn');

// Winning combinations
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

// Initialize game
function initGame() {
    console.log('Initializing game...'); // Debug log
    board = Array(9).fill('');
    currentPlayer = 'X';
    gameActive = true;
    gameStatus.textContent = 'Your turn (X)';
    restartBtn.style.display = 'none';
    modal.style.display = 'none';
    
    cells.forEach((cell, index) => {
        cell.textContent = '';
        cell.disabled = false;
        cell.className = 'cell';
        // Remove existing event listeners to prevent duplicates
        cell.removeEventListener('click', cell.clickHandler);
        // Create and store the click handler
        cell.clickHandler = () => handleCellClick(index);
        cell.addEventListener('click', cell.clickHandler);
    });
    
    console.log('Game initialized successfully'); // Debug log
}

// Handle cell click
function handleCellClick(index) {
    console.log(`Cell ${index} clicked`); // Debug log
    if (!gameActive || board[index] !== '' || currentPlayer !== 'X') {
        console.log('Move blocked:', { gameActive, cellEmpty: board[index] === '', isPlayerTurn: currentPlayer === 'X' });
        return;
    }
    
    makeMove(index, 'X');
    
    if (gameActive) {
        // AI move after a short delay
        setTimeout(() => {
            makeAIMove();
        }, 500);
    }
}

// Make a move
function makeMove(index, player) {
    board[index] = player;
    const cell = cells[index];
    cell.textContent = player;
    cell.disabled = true;
    cell.classList.add(player.toLowerCase());
    
    if (checkWinner()) {
        endGame(`${player === 'X' ? 'You win!' : 'AI wins!'}`);
        return;
    }
    
    if (checkDraw()) {
        endGame("It's a draw!");
        return;
    }
    
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateGameStatus();
}

// AI move (random empty cell)
function makeAIMove() {
    if (!gameActive || currentPlayer !== 'O') {
        return;
    }
    
    const emptyCells = board.map((cell, index) => cell === '' ? index : null)
                           .filter(index => index !== null);
    
    if (emptyCells.length === 0) {
        return;
    }
    
    const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    makeMove(randomIndex, 'O');
}

// Check for winner
function checkWinner() {
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

// Check for draw
function checkDraw() {
    return board.every(cell => cell !== '');
}

// Update game status
function updateGameStatus() {
    if (currentPlayer === 'X') {
        gameStatus.textContent = 'Your turn (X)';
    } else {
        gameStatus.textContent = 'AI thinking...';
    }
}

// End game
function endGame(message) {
    gameActive = false;
    gameStatus.textContent = 'Game Over';
    restartBtn.style.display = 'inline-block';
    
    // Show modal with result
    modalMessage.textContent = message;
    modal.style.display = 'block';
    
    // Disable all cells
    cells.forEach(cell => {
        cell.disabled = true;
    });
}

// Restart game
function restartGame() {
    initGame();
}

// Event listeners
restartBtn.addEventListener('click', restartGame);
modalRestartBtn.addEventListener('click', restartGame);

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});