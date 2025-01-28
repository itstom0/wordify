(function() {
    const words = ["apple", "banana", "grape", "melon", "peach", "berry", "lemon", "cherry", "mango", "plum"];
    
    // Ensure the target word is 5 letters long
    const targetWord = words[Math.floor(Math.random() * words.length)];
    let attempts = 0;

    function checkGuess(guess) {
        if (typeof guess !== "string" || guess.length !== 5) {
            console.log("Error: Guess must be a 5-letter word.");
            return;
        }

        guess = guess.toLowerCase(); // Ensure case insensitivity
        attempts++;

        // Check if the guess is correct
        if (guess === targetWord) {
            console.log(`🎉 Correct! You guessed the word in ${attempts} attempts. 🏆`);
            console.log("Type 'restart()' to play again.");
            return;
        }

        let result = '';
        // Check each letter of the guess against the target word
        for (let i = 0; i < 5; i++) {
            if (guess[i] === targetWord[i]) {
                result += `🟩${guess[i].toUpperCase()}`;  // Correct letter, correct position
            } else if (targetWord.includes(guess[i])) {
                result += `🟨${guess[i].toLowerCase()}`;  // Correct letter, wrong position
            } else {
                result += '⬜';  // Incorrect letter
            }
        }

        console.log(result);  // Show the result after checking the guess
        console.log(`Attempt ${attempts} of 6`);  // Show the number of attempts
        if (attempts >= 6) {
            console.log(`💀 Game Over! The correct word was: ${targetWord}`);
            console.log("Type 'restart()' to try again.");
        }
    }

    function restart() {
        location.reload();
    }

    console.log("Welcome to Wordle! Type 'checkGuess(<your_guess>)' to start playing!");
    console.log("Example: checkGuess('apple')");
})();
