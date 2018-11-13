// initial set up
var numWins = 0;
var numGuesses = 14;
var guessWords = ["chocolate", "vanilla", "sprinkles", "sundae", "cone", "cookies and cream", "fudge brownie", "banana split", "hot fudge", "thick Shake"];
var lettersGuessed = new Array(14);
var hangmanWord = new Array(17);
hangmanWord.fill ("_         ");
var currentWord = hangmanWord.slice (0,9);
currentWord = hangmanWord.join ( " " );
lettersGuessed.fill ();
lettersGuessed = lettersGuessed.join ( " " );
//var inLettersUsed;
//this function updates the screen after each user input
function updateScreen () {
     var screenHtml = 
    "<p> Wins:&nbsp&nbsp" + numWins + "</p>" +
    "<p> Current Word" + "</p>" +
    "<p>" + currentWord + "</p>" +
    "<p> Letters Guessed:" + "</p>" +
    "<p>" + lettersGuessed + "</p>" +
    "<p> Number Guesses Remaining: &nbsp&nbsp" + numGuesses + "</p>";
// Set the inner HTML contents of the #hangman div to the html string
    document.querySelector("#hangman").innerHTML = screenHtml; 
}
//user starts game and initial screen is set up
document.onkeyup = function(event) {
    updateScreen (); 
    }
// play game
// 10 rounds or length of guessWords
var i;
var userGuess;
var inLettersUsed;
for (i=0; i < guessWords.length; i++) {
// user guesses a letter until not in letters used
    
    do {
         document.onkeyup = function(event) {
        userGuess = event.key;
console.log (userGuess);
        inLettersUsed = lettersGuessed.includes(userGuess);
console.log("in do loop");
console.log(inLettersUsed);
}

//  check to see if letter is in used letter array
       while (inLettersUsed = lettersGuessed.includes(userGuess));

//letter not in used letter array 
//place letter in used letter array and decrease number of guesses
//console.log("out of do while");
    lettersGuessed[numGuesses] = userGuess;
    numGuesses === numGuesses-1;
 //   console.log(userGuess);

// check if user guess is in word and determine position

}
© 2018 GitHub, Inc.