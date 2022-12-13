// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');
let listOfWords = ['python', 'java', 'swift', 'javascript', 'php', 'kotlin', 'basic', 'typescript', 'assembly', 'delphi', 'cobol', 'gotran', 'scratch', 'sql', 'shell', 'go', 'matlab', 'ruby', 'perl', 'rust'];
let listOfGuesses = [];
let TheWord;
let Hint;
let results = {wins:0,loses:0};

function HangmanMenu() {
    console.log("\nH A N G M A N # 8 attempts");
    let menuInput = input('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:')
    switch (menuInput) {
        case 'play':
            Hangman();
        case 'results':
            console.log(`You won: ${results.wins} times.`);
            console.log(`You lost: ${results.loses} times.`);
            return HangmanMenu();
        case 'exit':
            console.log('Thanks for playing!');
            process.exit(0);
        default:
            return HangmanMenu();
    }
}
function Hangman() {
    TheWord = listOfWords[Math.floor(Math.random() * listOfWords.length)];
    Hint = "-".repeat(TheWord.length);
    console.log(Hint);
    for (let i = 8; i > 0; i--) {
        if (Hint === TheWord) {
            results.wins += 1;
            listOfGuesses =[];
            console.log(`You guessed the word ${TheWord}!`);
            console.log('You survived!');
            return HangmanMenu();
        }

        let UserInput = input('Input a letter:');

        if (ErrorHandler(UserInput)) {
            console.log(Hint);
            i += 1;
            continue;
        }

        if (TheWord.includes(UserInput)) {
            HintReveal(UserInput);
            i += 1;
        } else {
            console.log('That letter doesn\'t appear in the word.');
            console.log(Hint);
        }
    }
    results.loses += 1;
    listOfGuesses = [];
    console.log('You lost!');
    return HangmanMenu();
}

function HintReveal(UserInput) {
    let tempArray = Hint.split('');
    for (let i = 0; i <= Hint.length; i++) {
        if (TheWord[i] === UserInput) {
            tempArray[i] = UserInput;
        }
    }
    Hint = tempArray.join('');
    console.log(Hint);
}

function ErrorHandler(UserInput) {
    if (UserInput.length !== 1) {
        console.log('Please, input a single letter.');
        return true;
    }
    let regextest = /[a-z]/;
    if ( !regextest.test(UserInput)) {
        console.log('Please, enter a lowercase letter from the English alphabet.');
        return true;
    }
    if (Hint.includes(UserInput)) {
        console.log('You\'ve already guessed this letter.');
        return true;
    }
    if (listOfGuesses.includes(UserInput)) {
        console.log('You\'ve already guessed this letter');
        return true;
    } else {listOfGuesses.push(UserInput)}
    return false;
}

HangmanMenu();