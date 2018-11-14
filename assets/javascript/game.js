// initial set up
// number of wins 
// words to guess
var numWins = 0;
var guessWords = ["chocolate", "vanilla", "sprinkles", "sundae", "cone", "cookiesandcream", "fudgebrownie", "bananasplit", "hotfudge", "thickshake"];

var numGuessesLeft;

// set up/initialize array with letters that were guessed and counter numLG; maximum number of guesses is 14
var numLG;
var lettersGuessed = new Array(14);
//lettersGuessed.fill ("_   ");


// set up current word
// set up array to hold letters that are guessed and in current word
var currentWord;
var hideHangmanWord = new Array(17);
//hideHangmanWord.fill ("_   ");

console.log("filled letters guessed array" + lettersGuessed);
console.log("hide hangmanword letters "+ hideHangmanWord);
// set up other variables
var inLettersUsed;
var inHideHangman;
var userGuess;
var gameGuess;
var guessInWord;
var screenHtml;
var firstPos;
var lastPos;
var numLetFind;


//user starts game and initial screen is set up
    onkeyup = function(event) {
        userGuess = event.key;
        console.log("start game" + userGuess);
        initializeGame();
        updateScreen();

//play game
// user presses key
        onkeyup = function(event) {
            gameGuess = event.key;
        console.log("the user entered " + gameGuess);

//check is letter guessed is already used (may be in letters used and not in current word or in word holder)
            guessInWord = lettersGuessed.includes(gameGuess);
            inHideHangman = hideHangmanWord.includes(gameGuess);
     console.log("guessinword is " + guessInWord);
     console.log("in hide word" + inHideHangman);
//if used - enter a new letter         
            if (guessInWord || inHideHangman) {
                updateScreen();
            }
//if letter has not been guessed
//decrease number of letters left to guess 
//place userguess in letterguessed array
//increment number of letters guessed 
            else {
        console.log("number of letters guessed " + numLG);
        console.log("userguess " + gameGuess);
 console.log("numlg is " + numLG);

                    lettersGuessed[numLG] = gameGuess;
                    console.log("letter guessed = " + lettersGuessed[numLG]);

                    numGuessesLeft--;
                    numLG++;
     console.log("number guesses left" + numGuessesLeft);
     this.console.log("lettersguessed - "+ lettersGuessed);
// check to see if current word has the user guess and determine where in word letter is
// only need to check between first and last occurence of letter inclusive
// if word has letter, replace the value inHideHangman in matching position and decrease number of letters left to find

                    if (currentWord.includes(gameGuess)) {
                        firstPos = currentWord.indexOf(gameGuess);
                this.console.log("first postion is " + firstPos);
                        lastPos = currentWord.lastIndexOf(gameGuess);
                    this.console.log("last postion is "+ lastPos);
                        for (var i=firstPos; i <= lastPos; i++) {
                            if (gameGuess === currentWord[i]) {
                            this.console.log("replace with game guess");
                                hideHangmanWord[i] = gameGuess;
                            this.console.log("hidehangword is" + hideHangmanWord);
                             numLetFind--;
                            this.console.log("num letters left to find " + numLetFind);
                            }
                        }
                    }
                    this.console.log("number of letters left to find" + numLetFind);
//check to see if all the letters were found - if so winner and increase number of wins
                    if (numLetFind === 0) {
                        this.console.log("in numletfind = 0" + numLetFind);
                        numWins++;
                        initializeGame();
                        updateScreen(screenHtml);
                        this.console.log("number of wins = " + numWins);
                        this.console.log("number guesses " + numLG);

//need to determine which picture to put up
                        
//                     for (var i=0; i<guessWords.length; i++) {
//                       if (currentWord === guessWords[i]) {
//                             var pictureName = document.getElementById("myImg").src;
//                             document.getElementById("hangman").innerHTML = pictureName;
                    }
                    else {
                        // check to see if reached maximum number of guesses
                        if (numLG > 14) {
                            initializeGame();
                            updateScreen(screenHtml);
                     this.console.log("you lose");
                        }
                        else {
                             updateScreen(screenHtml);
                        }
                    }
                         }

            }
                    
//post picture
//play again
                    }
                    
                
            
        
// this function initializes game

function initializeGame() {
// number of guesses left
numGuessesLeft = 14;

// set up/initialize array with letters that were guessed and counter numLG; maximum number of guesses is 14
numLG = 0;
//var lettersGuessed = new Array(14);
lettersGuessed.fill ("_   ");


// set up current word
// set up array to hold letters that are guessed and in current word
//var currentWord;
//var hideHangmanWord = new Array(17);
hideHangmanWord.fill ("_   ");

console.log("filled letters guessed array" + lettersGuessed);
console.log("hide hangmanword letters "+ hideHangmanWord)
// set up other variables
//var inLettersUsed;
//var inHideHangman;
//var userGuess;
//var gameGuess;
//var guessInWord;
//var screenHtml;
//var firstPos;
//var lastPos;
//var numLetFind;

// randomly choose a word from the guessWords array
// create a holder with the number of letters for guessing letters in random word
  currentWord = guessWords[Math.floor(Math.random() * guessWords.length)];
  numLetFind = currentWord.length;
  console.log("in initialize game - numLetFind = " + numLetFind);
  console.log("the word length is " + numLetFind);
  hideHangmanWord = hideHangmanWord.slice(0,numLetFind);
  console.log("initialize hidehangman to number of blanks in wor" + currentWord.length + "  " + hideHangmanWord);
  console.log("the current word is " + currentWord);

 }   
 


//this function updates the screen after each user input
function updateScreen () {
//   var pictureName = document.getElementById("myImg").src = "assets/images/start ice cream game.jpg";
    var screenHtml = 
   "<p> Wins:&nbsp&nbsp" + numWins + "</p>" +
   "<p> Current Word" + "</p>" +
   "<p>" + hideHangmanWord + "</p>" +
   "<p> Letters Guessed:" + "</p>" +
   "<p>" + lettersGuessed + "</p>" +
   "<p> Number Guesses Remaining: &nbsp&nbsp" + numGuessesLeft + "</p>";
   "<br>"
     
// Set the inner HTML contents of the #hangman div to the html string
   document.querySelector("#hangman").innerHTML = screenHtml; 
}