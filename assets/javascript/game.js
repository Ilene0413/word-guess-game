// initial set up
var numWins = 0;
var numGuesses = 14;
var guessWords = ["chocolate", "vanilla", "sprinkles", "sundae", "cone", "cookies and cream", "fudge brownie", "banana split", "hot fudge", "thick Shake"];
var lettersGuessed = new Array(14);
var hideHangmanWord = new Array(17);
hideHangmanWord.fill ("_   ");
//var currentWord = hangmanWord.slice (0,9);
var currentWord;
//currentWord = hangmanWord.join ( " " );
lettersGuessed.fill ();
lettersGuessed = lettersGuessed.join ( " " );
var inLettersUsed;
var userGuess;

// randomly choose a word from the guessWords array
// create a holder for guessing letters in random word

  currentWord = guessWords[Math.floor(Math.random()) * guessWords.length];
  hideHangmanWord = hideHangmanWord.slice(0,currentWord.length);
  console.log("the current word is " + currentWord);
//console.log("the hidehangman word is " +hideHangmanWord);
  hideHangmanWord = hideHangmanWord.join( " " );
//console.log("the new hidehangman word is " +hideHangmanWord);

//user starts game and initial screen is set up
    document.onkeyup = function(event) {
        console.log("start game");
        updateScreen();
    }

//play game
// user presses key
    document.onkeypress = function(event) {
        userGuess = event.key;
        console.log("the user entered " + userGuess);
    }

  


//this function updates the screen after each user input
function updateScreen () {
    var screenHtml = 
   "<p> Wins:&nbsp&nbsp" + numWins + "</p>" +
   "<p> Current Word" + "</p>" +
   "<p>" + hideHangmanWord + "</p>" +
   "<p> Letters Guessed:" + "</p>" +
   "<p>" + lettersGuessed + "</p>" +
   "<p> Number Guesses Remaining: &nbsp&nbsp" + numGuesses + "</p>";
// Set the inner HTML contents of the #hangman div to the html string
   document.querySelector("#hangman").innerHTML = screenHtml; 
}