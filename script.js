// Function to start the game
function startGame() {
    document.getElementById('instructionsModal').style.display = 'none';
    document.getElementById('setupSection').style.display = 'block';
}

// Function to start the game setup
function startGameSetup() {
    var player1Name = document.getElementById('player1Name').value.trim();
    var player2Name = document.getElementById('player2Name').value.trim();
    
    if (player1Name === "" || player2Name === "") {
        alert("Please enter names for both players.");
        return;
    }
    
    document.getElementById('setupSection').style.display = 'none';
    document.getElementById('gameSection').style.display = 'block';

    // Store player names for use in the game
    window.player1Name = player1Name;
    window.player2Name = player2Name;

    // Initialize the game
    startGameRound();
}

// Function to initialize the game round
function startGameRound() {
    window.numberToGuess = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    window.currentPlayer = 1; // Start with player 1
    window.scores = { [window.player1Name]: 0, [window.player2Name]: 0 };

    document.getElementById('playerTurn').innerText = `${window.player1Name}'s turn`;
    document.getElementById('message').innerText = '';
}

// Function to handle guess submission
function makeGuess() {
    var userGuess = parseInt(document.getElementById('userGuess').value.trim());
    if (isNaN(userGuess)) {
        alert("Please enter a valid number!");
        return;
    }

    var diff = Math.abs(userGuess - window.numberToGuess);
    var message = '';
    
    if (userGuess === window.numberToGuess) {
        document.getElementById('message').innerText = `Congratulations ${window.currentPlayer === 1 ? window.player1Name : window.player2Name}! You guessed the correct number!`;
        window.scores[window.currentPlayer === 1 ? window.player1Name : window.player2Name]++;
        document.getElementById('playerTurn').innerText = `${window.player1Name}: ${window.scores[window.player1Name]} points, ${window.player2Name}: ${window.scores[window.player2Name]} points`;
        // Reset game round after a correct guess
        startGameRound();
    } else {
        // Provide feedback on the guess
        if (diff <= 5) {
            message = "Very close!";
        } else if (diff <= 10) {
            message = "Close!";
        } else if (diff <= 20) {
            message = "Far off!";
        } else {
            message = "Very far!";
        }
        
        document.getElementById('message').innerText = message;

        // Switch players
        window.currentPlayer = window.currentPlayer === 1 ? 2 : 1;
        document.getElementById('playerTurn').innerText = `${window.currentPlayer === 1 ? window.player1Name : window.player2Name}'s turn`;
    }
}

// Function to reset the game
function resetGame() {
    document.getElementById('gameSection').style.display = 'none';
    document.getElementById('setupSection').style.display = 'block';
    document.getElementById('player1Name').value = '';
    document.getElementById('player2Name').value = '';
    console.log("Game reset");
}




