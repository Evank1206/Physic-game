
// computer choose one random letter each time
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guess = 10;
var losses = 0;
var win = 0;
var clickedLetter = [];

function randomLetters() {
    var index = Math.floor(Math.random() * letters.length);

    console.log(letters[index], index);
    // this case you can see computer picked letters
    // clickedLetter.push(letters[index])
    return letters[index];
}
var computerPicked = randomLetters();
// creating Array

document.onkeypress = function (event) {
    console.log(event.key);
    console.log(clickedLetter);

    clickedLetter.push(event.key)
    var myGuess = event.key;

    document.getElementById('clickedLetters').innerHTML = clickedLetter;

    if (myGuess === computerPicked) {
        win++;
        guess = 10;
        computerPicked = randomLetters();
        document.getElementById('Guess_left').innerHTML = guess;
        document.getElementById('Wins').innerHTML = win;
        // document.getElementById('clickedLetters').innerHTML = clickedLetter;
    } else {
        // if guess > 0, then you decrease guess by 1
        // else, you lose, increase losses by 1 and rest guess = 10
        if (guess > 0) {
            guess -= 1;
            document.getElementById('Guess_left').innerHTML = guess;
        } else {
            losses++;
            guess = 10;
            document.getElementById('Guess_left').innerHTML = guess;
            document.getElementById('loses').innerHTML = losses;
            // document.getElementById('clickedLetters').innerHTML = clickedLetter;

            computerPicked = randomLetters();
        }
    }
};


