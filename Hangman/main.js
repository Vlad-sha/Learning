// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');
let listOfWords = ['python','java','swift','javascript'];
let TheWord = listOfWords[Math.floor(Math.random() * listOfWords.length)];
let Hint = "-".repeat(TheWord.length);
console.log("H A N G M A N\n");
console.log(Hint);

function WordCheck() {
    for (let i = 8; i > 0; i--){
    let UserInput = input('Input a letter:');
    if (TheWord.includes(UserInput)) {
        HintReveal(UserInput);
    } else {
        console.log('That letter doesn\'t appear in the word.');
        console.log(Hint);
    }
    }
    console.log('Thanks for playing!');
}

function HintReveal (UserInput){
    let tempArray = Hint.split('');
    for ( let i = 0; i <= Hint.length; i++) {
        if ( TheWord[i] === UserInput) {
            tempArray[i] = UserInput;
        }
    }
    Hint = tempArray.join('');
    console.log(Hint);
}
WordCheck();