
// computer choose one random letter each time
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// guessing limit
var guess = 10;
// losses start form 0 point
var losses = 0;
// win start form 0 point
var win = 0;
// empty array that contains clicked letters
var clickedLetter = [];
// function that randomly choose letters from array
function randomLetters() {
    var index = Math.floor(Math.random() * letters.length);

    // console.log(letters[index], index);
    // this case you can see computer picked letters
    // clickedLetter.push(letters[index])
    return letters[index];
}
// invoke the function here also same time assigned to variable
var computerPicked = randomLetters();

// onkeypress() method for when click on key-board it will grabs the value of letter
document.onkeypress = function (event) {
    // console.log(event.key);
    // console.log(clickedLetter);
    // grabbed the value of letter pushed to empty array here
    // clickedLetter.push(letters[index])
    var myGuess = event.key;

    // conditional statement for matching the letter that computer picked
    if (myGuess === computerPicked) {
        clickedLetter.push(event.key)
        win++;
        guess = 10;
        computerPicked = randomLetters();
        // to DOM the Array which is displays what letters are clicked
        document.getElementById('clickedLetters').innerHTML = clickedLetter;
        document.getElementById('Guess_left').innerHTML = guess;
        document.getElementById('Wins').innerHTML = win;

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
    // if reaches to 10 it wll gave little message for user
    if (win === 6) {
        var userName = prompt("Please Enter Your Name:");
        alert("Congratulation! " + userName + "You guessed correctly!")
        win;
    }

    if (losses === 6) {
        alert("Game Over")
        losses;
    }
};


