// initial set up
// number of wins 
// number of guesses left
// words to guess
var numWins = 0;
var numGuessesLeft = 14;
var guessWords = ["chocolate", "vanilla", "sprinkles", "sundae", "cone", "cookies and cream", "fudge brownie", "banana split", "hot fudge", "thick Shake"];

// set up array with letters that were guessed and counter numLG
//var lettersGuessed = ["a", "bb", "ccc"];
//var one = "ff";
//lettersGuessed[0]=one;
var numLG = 0;
lettersGuessed = new Array(14);

// set up current word
// set up array to hold letters that are guessed and in current word
var currentWord;
var hideHangmanWord = new Array(17);
hideHangmanWord.fill ("_   ");

//set up letters guessed array 
//set up counter for number of letters guessed
lettersGuessed.fill ();
//lettersGuessed = lettersGuessed.join ( " " );
console.log("filled letters guessed array" + lettersGuessed);
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

// randomly choose a word from the guessWords array
// create a holder with the number of letters for guessing letters in random word

  currentWord = guessWords[Math.floor(Math.random()) * guessWords.length];
  numLetFind = currentWord.length;
  console.log("the word length is " + numLetFind);
  hideHangmanWord = hideHangmanWord.slice(0,currentWord.length);
  console.log("the current word is " + currentWord);
//console.log("the hidehangman word is " +hideHangmanWord);
// hideHangmanWord = hideHangmanWord.join( " " );
//console.log("the new hidehangman word is " +hideHangmanWord);

//user starts game and initial screen is set up
    document.onkeyup = function(event) {
        userGuess = event.key;
        console.log("start game" + userGuess);
        updateScreen(screenHtml);
    
    

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
                updateScreen(screenHtml);
            }
//if letter has not been guessed
//decrease number of letters left to guess 
//place userguess in letterguessed array
//increment number of letters guessed 
            else {
        console.log("number of letters guessed " + numLG);
        console.log("userguess " + gameGuess);
 //               lettersGuessed[0]= (gameGuess);
 //       console.log("letter guess-0 " + lettersGuessed[0]);
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
//check to see if all the letters were found - if so winner and increase number of wins
                    if (numLetFind === 0) {
                        numWins++;
                        this.console.log("number of wins = " + numWins);
                        this.console.log("number guesses " + numLG);
//need to determine which picture to put up
                        
//                     for (var i=0; i<guessWords.length; i++) {
//                       if (currentWord === guessWords[i]) {
//                             var pictureName = document.getElementById("myImg").src;
//                             document.getElementById("hangman").innerHTML = pictureName;
                         }
                     }
                    
                        updateScreen(screenHtml);
//post picture
//play again
                    }
                }
// check to see if have any more guesses
                    if (numLG > 14) {
                    hideHangmanWord === currentWord;
                            this.console.log("you lose " + hideHangmanWord);
                    }
                    
                
                updateScreen(screenHtml);
            
        
// this function determines which picture to display
    


  


//this function updates the screen after each user input
function updateScreen (screenHtml) {
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