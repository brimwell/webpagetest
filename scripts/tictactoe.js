
// Create Core Components of Gameboard and Player

let gameBoard = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const playerOne = {
    name: 'Player One',
    marker: 'X',
};

const playerTwo = {
    name: 'Player Two',
    marker: 'O',
};

let currentPlayer = playerOne;
let winresult = 'tbd';

// Take a Turn, switching current player after each turn

function declareCurrentState() {
    console.log(gameBoard);
    console.log(`It is now ${currentPlayer.name}'s turn`);
}

function takeTurn() {
    let chosenRow = +prompt(`${currentPlayer.name}, What row do you want?`);
    let chosenColumn = +prompt(`${currentPlayer.name}, and what column do you want?`);

    if (typeof(gameBoard[chosenRow][chosenColumn] === 'number')) {
        gameBoard[chosenRow][chosenColumn] = currentPlayer.marker;
    } else {
        console.log('That spot is taken. Please try again');
    }

    // Check For Win Before switching player(?)
    checkForWin();

    if (winresult === 'tbd') {
        // Switch Player
        (currentPlayer === playerOne) ? currentPlayer = playerTwo : currentPlayer = playerOne;

        // Show GameBoard after every turn
        declareCurrentState();
        return;
    } else if (winresult === 'draw') {
        console.log('The game is tied, no more moves left.');
        resetGame();
    } else {
        console.log(`Congratulations ${currentPlayer.name}! You have won this game as seen here:`);
        console.log(gameBoard);
        resetGame();
    }

    
}

// Check For Winner

function checkForWin() {
    if ((gameBoard[0][0] === gameBoard[0][1])
        && (gameBoard[0][0] === gameBoard[0][2])) {
        console.log('Row 1 Winner');
        winresult = currentPlayer;
    } else if ((gameBoard[0][0] === gameBoard[1][0]) 
        && (gameBoard[0][0] === gameBoard[2][0])) {
            console.log('Column 1 Winner');
            winresult = currentPlayer;
    } else if ((gameBoard[0][0] === gameBoard[1][1])
        && (gameBoard[0][0] === gameBoard[2][2])) {
            console.log('Diagonal 1 Winner');
            winresult = currentPlayer;
    } else if ((gameBoard[0][1] === gameBoard[1][1])
        && (gameBoard[0][1] === gameBoard[2][1])) {
            console.log('Column 2 Winner');
            winresult = currentPlayer;
    } else if ((gameBoard[0][2] === gameBoard[1][2]) 
        && (gameBoard[0][2] === gameBoard[2][2])) {
            console.log('Column 3 Winner');
            winresult = currentPlayer;
    } else if ((gameBoard[0][2] === gameBoard[1][1]) 
        && (gameBoard[0][2] === gameBoard[2][0]) ) {
            console.log('Diagonal 2 Winner');
            winresult = currentPlayer;
    } else if ((gameBoard[1][0] === gameBoard[1][1])
        && (gameBoard[1][0] === gameBoard[1][2])) {
            console.log('Row 2 Winner');
            winresult = currentPlayer;
    } else if ((gameBoard[2][0] === gameBoard[2][1]) 
        && (gameBoard[2][0] === gameBoard[2][2])) {
            console.log('Row 3 Winmer');
            winresult = currentPlayer;
    } else {
        for (let i = 0; i < gameBoard.length; i++) {
            for (let j = 0; j < gameBoard[i].length; j++) {
                if (typeof(gameBoard[i][j]) === 'number') {
                    console.log('Still moves left');
                    return;
                } 
            }
        }
        console.log('Cats Draw Game');
        winresult = 'draw';
    } 
}

// Reset The Game

function startNewGame() {
    resetGame();
    console.log('Welcome to a new game!');
    console.log(gameBoard);
    console.log(`It's ${currentPlayer.name}'s turn.`)
}

function resetGame() {
    gameBoard = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    currentPlayer = playerOne;
    winresult = 'tbd';

}


// Factories and Things

const GameBoard = function() {
    let board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    return { board };
}();
