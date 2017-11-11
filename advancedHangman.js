// requirements
var inquirer = require('inquirer');

// prompt
// inquirer.prompt([
//     {
//         name:'guessedLetter',
//         message:'Guess a letter!'
//     }
// ]).then(function(guess){
//     // include LETTER constructor
//     // console.log(guess.guessedLetter); // testing
// });

// constructors

// ************** Word constructor **************
// takes random word from array and builds it out
// this will be used to start the game
function Word() {
    this.wordArray = ['hey', 'hi', 'hello', 'whats up'];
    this.randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    // console.log(randomWord);
    return randomWord;
    // this.randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    
    // !!! NEED TO FIGURE OUT IF RANDOM WORD IS BEING GENERATED !!!
}
console.log(Word());

// **************************************************

// ************** Letter constructor **************
// checks user gues against word
// function Letter(word) {
//     this.dashes = function() { // function builds out initial dashed word
//                     for (i = 0; i < word.length; i++) {
//                     // buid a word with dashes
//                     }
//     };
//     this.correct = function() { // function updates word with correct guesses
//                     // if correct guess, replace dash with letter
//                     // Bonus: add guessed letters to array
//     };
//     this.incorrect = function() { // function keeps track of wrong guesses
//                         // if incorrect guess, show guesses remaining
//                         // Bonus: add guessed letters to array
//     };
// };
// **************************************************