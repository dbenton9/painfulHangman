// requirements
var inquirer = require('inquirer');



// constructors

// ************** Word constructor **************
// takes random word from array and builds it out
// this will be used to start the game
function Word() {
    this.wordArray = ['hey', 'hi', 'hello', 'hola'];
    this.randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    // console.log(randomWord);
    return randomWord;
    // this.randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    
    
};
// **************************************************

//console.log(Word());

// ************** Letter constructor **************
// checks user gues against word
var dashArray = [];
var dashes;
function Letter() {
    var mysteryWord = Word();
    // this.dashes = function() { // function builds out initial dashed word
        // var mysteryWord = Word();         
        for (i = 0; i < mysteryWord.length; i++) { // build dashed array to represent randomly selected word
                    dashArray[i] = "_";
        }
        dashes = dashArray.join(" ");
        
    // };
    return dashes;
    this.correct = function() { // function updates word with correct guesses
                    // if correct guess, replace dash with letter
                    // Bonus: add guessed letters to array
    };
    this.incorrect = function() { // function keeps track of wrong guesses
                        // if incorrect guess, show guesses remaining
                        // Bonus: add guessed letters to array
    };
};
// **************************************************

console.log(Letter());

var guessedWord;
function playGame() {
    Letter();
    mysteryWord = Word();
    if (guessedWord != mysteryWord) { // condition keeps the user guessing until they complete the word
        // prompt
        inquirer.prompt([
            {
                name:'guessedLetter',
                message:'Guess a letter!'
            }
        ]).then(function(guess){
            // include LETTER constructor
            // console.log(guess.guessedLetter); // testing
        });
    }
    else if (guessedWord === mysteryWord) { // let user know they won
        console.log("Congrats you win!");
    };
};

playGame();