# word-guess-game
https://ilene0413.github.io/word-guess-game/

This game is a version of the game "Hangman."  All words to guess
are ice cream related.

There is a maximum of 10 words.

The goal of the game is to guess the word in less than 14 times. A player has a maximum of 14 guesses for letters not in the word, which is like creating a hangman with a head, 2 eyes, nose, mouth, body, 2 arms, 2 hands, 2 legs, and 2 feet.

A player hits any key on the keyboard to start the game.
The function initialize game is called to pick the random word.  The correct word array is also initialized, and the incorrect letters array is emptied(popped).

The game will select a random word from the word list for the player to guess. This is done using Math.random function. 

The player will press a key on the keyboard.

The letter is checked to see if it had already been used.  It is checked against the letters already guessed in the word to guess and against the letters in the lettersGuessed array.  If the letter was used, the user enters another letter. The game will keep track of the player's guesses and show the player the letters guessed. If a player presses the same letter more than once, it will only be counted as 1 guess.

The letter is checked to see if current word has the user guess and determine where in the word letter is.  Only need to check between first and last occurence of letter inclusive.

If the word has the letter, replace the value inHideHangman in matching position and decrease number of letters left to find.
Then increment number of letters guessed. If the letter guessed is in the word, it will show up on the screen where in the word it is.

Check to see if all the letters were found - if so winner - increase number of wins, change picture, play Mr. Softee music.

The game will keep count of the player's wins.

The player guesses until the maximum number of guesses is allowed or the player guessed the word. 

When the game is over, a new picture will display based on the word that was guessed. 

If the player loses, melted ice cream is displayed.

Picture files are named the same as the guess words
Pictures were taken from images doing google search and come from many different websites.
Developed by Ilene Cohen.
email: ilene413@icloud.com

