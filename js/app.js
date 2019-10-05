// alert('you have 26 letter guess');

// var answer= 'l';
// var guess;
// guess= prompt('What is your guess?');

// for(i=1; i<10; i++){
//     if(answer == guess){
//          alert('You guessed correct!');
//          document.write('Congratulations!!')
//          break;
//     }else{
//             guess = prompt('Please Try Again!'); 

//     }
         
// }
var letters = 'abcdefghijklmnopqrstuvwxyz';
var guess = 10;
var losses = 0;
var win = 0;


function randomLetters() {
    var index = Math.floor( Math.random() * letters.length);
    // console.log(index);
    // console.log (letters[index]);
    return letters[index];
 }

 var computerPicked = randomLetters();
document.onkeypress = function (event){
    // console.log(event.key);
    var myGuess = event.key; 

    if(myGuess === computerPicked){
        win ++;
        guess = 10;
        computerPicked = randomLetters();
        document.getElementById('Guess_left').innerHTML = guess;
        document.getElementById('Wins').innerHTML = win;
        
        
    }
    else {
        // if guess > 0, then you decrease guess by 1
        // else, you lose, increase losses by 1 and rest guess = 10
        if( guess > 0){
            guess -= 1;
            document.getElementById('Guess_left').innerHTML = guess;
        }
        else {
            losses++;
            guess = 10;
            document.getElementById('Guess_left').innerHTML = guess;
            document.getElementById('loses').innerHTML = losses;

            computerPicked = randomLetters();
        }
    }


};


