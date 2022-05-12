const input = require('sync-input');


function greet(bot_name, birth_year) {
	console.log(`Hello! My name is  ${bot_name}.`);
	console.log(`I was created in ${birth_year}`);
}

function remind_name() {
	console.log("Please, remind me your name.");
	let name = input();
	console.log(`What a great name you have,${name} !`);
}

function guess_age() {
	console.log("Let me guess your age.");
	console.log("Enter remainders of dividing your age by 3, 5 and 7.");

	let rem1 = Number(input());
	let rem2 = Number(input());
	let rem3 = Number(input());

	let age = (rem1 * 70 + rem2 * 21 + rem3 * 15) % 105;

	console.log(`Your age is ${age}; that's a good time to start programming!`);
}

function count() {
	console.log("Now I will prove to you that I can count to any number you want.");

	let number = Number(input());
	let current = 0;

	while (current <= number) {
		console.log(current + " !");
		current += 1;
	}
}

function test() {
	console.log(`Let's test your programming knowledge.`);
	// write your code here
	console.log(`What is Object-oriented programming (OOP) ?`);
	console.log (`
1. OOP is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields , and code, in the form of procedures
2. OOP is is a programming paradigm, derived from imperative programming, based on the concept of the procedure call
3. OOP is is a programming paradigm of software that uses statements that change a program's state
4. OOP is a style of building the structure and elements of computer programs—that expresses the logic of a computation without describing its control flow`);
	while (Number(input()) != 1)
	{
		console.log(`Please, try again.`);
	}
}

function end() {
	console.log(`Congratulations, have a nice day!`);
}


greet('Chatty', '2022')  // change it as you need
remind_name();
guess_age();
count();
test();
end();