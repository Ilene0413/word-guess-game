// initial set up
// number of wins 
// words to guess
var numWins = 0;
var guessWords = ["chocolate", "vanilla", "sprinkles", "sundae", "cone", "cookiesandcream", "fudgebrownie", "bananasplit", "hotfudge", "thickshake"];
var picFile = "assets/images/";
var numGuessesLeft;

// set up/initialize array with letters that were guessed and counter numLG; maximum number of guesses is 14
var numLG = 0;
//var lettersGuessed = new Array(14);
  var lettersGuessed = [];
// set up current word
// set up array to hold letters that are guessed and in current word
var currentWord;
var hideHangmanWord = [];

// set up global variables
var inLettersUsed;
var inHideHangman;
var userGuess;
var gameGuess;
var guessInWord;
var screenHtml;
var firstPos;
var lastPos;
var numLetFind;
var indexPicWord;
var myPic = "assets/images/start ice cream game.jpg";
var myPicture;
var i;

//user starts game and initial screen is set up
    document.onkeyup = function(event) {
    //    userGuess = event.key.toLowerCase();
        initializeGame(myPic);
   //     updateScreen(myPic);
        userGuess = event.key.toLowerCase();

//play game
// user presses key
        document.onkeyup = function(event) {
            gameGuess = event.key;

//check is letter guessed is already used (may be in letters used and not in current word or in word holder)
            guessInWord = lettersGuessed.includes(gameGuess);
            inHideHangman = hideHangmanWord.includes(gameGuess);

//if used - enter a new letter         
            if (guessInWord || inHideHangman) {
                updateScreen();
            }
            
// check to see if current word has the user guess and determine where in word letter is
// only need to check between first and last occurence of letter inclusive
// if word has letter, replace the value inHideHangman in matching position and decrease number of letters left to find

                    if (currentWord.includes(gameGuess)) {
                        firstPos = currentWord.indexOf(gameGuess);
                        lastPos = currentWord.lastIndexOf(gameGuess);
                        for (var i=firstPos; i <= lastPos; i++) {
                            if (gameGuess === currentWord[i]) {
                                hideHangmanWord[i] = gameGuess;
                             numLetFind--;
                            }
                        }
                    }
                    else {
//if letter has not been guessed
//decrease number of letters left to guess 
//place userguess in letterguessed array
//increment number of letters guessed 
                        lettersGuessed[numLG] = gameGuess;
                         numGuessesLeft--;
                        numLG++;
                    }
//check to see if all the letters were found - if so winner - increase number of wins, change picture, play music
//picture files are named the same as the guess words
                    if (numLetFind === 0) {
                        numWins++;
                        var audio = document.createElement("audio");
                        audio.src = "assets/images/mr.softeemusic.m4a";
                        audio.play();
                        myPicture = picFile.concat(currentWord).concat(".jpg");
                        initializeGame(myPicture);

                    }
                    else {
                        // check to see if reached maximum number of guesses, if not play lose music, change picture
             
                          if (numGuessesLeft === 0) {
                            var losePicture = "assets/images/meltingicecream.jpg";
                            var audio = document.createElement("audio");
                            audio.src = "assets/images/youlose.m4a";
                            audio.play();
                            initializeGame(losePicture);
                        }
                        else {
                             updateScreen(screenHtml);
                        }
                    }
                }

            }
                    

                    
        
// this function initializes game

function initializeGame(myPic) {
// number of guesses left
numGuessesLeft = 14;


// set up current word
// set up array to hold letters that are guessed and in current word

// randomly choose a word from the guessWords array
// create a holder with the number of letters for guessing letters in random word
  indexPicWord = Math.floor(Math.random() * guessWords.length);
  currentWord = guessWords[indexPicWord];
  numLetFind = currentWord.length;
  
// initialize number of underscores in hidden word
    var tempHang = []
    for (var i=0; i<numLetFind; i++) {
        tempHang.push ("_   ");
    }
    hideHangmanWord = tempHang;

// set array of letters guessed back to empty
//set up/initialize array with letters that were guessed and counter numLG; maximum number of guesses is 14
    for (i=0; i<14; i++) {
    lettersGuessed.pop ();
    }
    numLG = 0;

    for (var i=0; i<14; i++) {
        lettersGuessed.push ("_   ");
    }
  //put picture on screen
    changePicture(myPic);
    updateScreen(screenHtml);
 } 
 
 //this function changes picture
 function changePicture(myPic) {
    document.getElementById("myPicture").width = "300";
    document.getElementById("myPicture").height = "200";
    document.getElementById("myPicture").src = myPic;
    document.querySelector("#myPicture").innerHTML = myPic;
 }

//this function updates the screen after each user input
function updateScreen () {
    var x = "assets/images/start ice cream game.jpg";
    var screenHtml = 
    "<div id='row'>" + 
   "<p> Wins:&nbsp&nbsp" + numWins + "</p>" +
   "<p> Current Word" + "</p>" +
   "<p>" + hideHangmanWord.join(" ") + "</p>" +
   "<p> Letters Guessed" + "</p>" + 
   "<p>" + lettersGuessed.join(" ") + "</p>" +
   "<p id='row'> Number Guesses Remaining: &nbsp&nbsp" + numGuessesLeft + "</p>";
   "</div>";
     
// Set the inner HTML contents of the #hangman div to the html string
   document.querySelector("#hangman").innerHTML = screenHtml; 
}  

