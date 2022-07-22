const input = require('sync-input')

const espresso = {
    water: 250,
    beans: 16,
    milk: 0,
    cup: 1,
    price: 4
}

const latte = {
    water: 350,
    milk: 75,
    beans: 20,
    cup: 1,
    price: 7
}

const cappuccino = {
    water: 200,
    milk: 100,
    beans: 12,
    cup: 1,
    price: 6
}

let filler = {
    water: 400,
    milk: 540,
    beans: 120,
    cups: 9,
    money: 550
}

let cupsAmount = {
    water: 0,
    milk: 0,
    beans: 0,
    cups: 0,
    overall: 0
}

function fill() {
    filler.water += Number(input("Write how many ml of water do you want to add:"));
    filler.milk += Number(input("Write how many ml of milk do you want to add:"));
    filler.beans += Number(input("Write how many mg of beans do you want to add"));
    filler.cups += Number(input("Write how many cups do you want to add"));
}

function take() {
    console.log(`I gave you ${filler.money}$`);
    filler.money = 0;
}

function buy() {
    let buy_request = input(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:
    `);
    switch (buy_request) {
        case "1":
            makeCoffee(espresso);
            break;
        case "2":
            makeCoffee(latte);
            break;
        case "3":
            makeCoffee(cappuccino);
            break;
        case "back":
            return init();
        default:
            console.log("Please select proper option");
            return buy();
    }
}

function init(){
  let start = input(`Write action (buy, fill, take, remaining, cleaning, exit):
  `);
    switch (start){
        case "buy":
            buy();
            return init();
        case "fill":
            fill();
            return init();
        case "take":
            take();
            return init();
        case "remaining":
            remaining();
            return init();
        case "cleaning":
            cleaning();
            return init();
        case "exit":
            exit();
            break;
        default:
            console.log("Please select a proper action");
            return init();
    }
}

function remaining(){
    console.log(`The coffee machine has:
    ${filler.water} ml of water
    ${filler.milk} ml of milk
    ${filler.beans} g of coffee beans
    ${filler.cups} disposable cups
    $${filler.money} of money`);
}

function exit(){
    function shortClean () {
    console.log("cleaning myself");
    filler.water -= 50
    }
    if (filler.water >= 50) {
        setTimeout(shortClean, 10000);
        }
        else {
            console.log("Can't perform cleaning, not enough water");
        }
    process.exit(1);
}


function makeCoffee (coffeeType){
    cupsAmount.water = Math.floor(filler.water / coffeeType.water);
    cupsAmount.beans = Math.floor(filler.beans / coffeeType.beans);
    cupsAmount.milk = Math.floor(filler.milk / coffeeType.milk);
    cupsAmount.cups = Math.floor(filler.cups / coffeeType.cup);
    cupsAmount.overall = Math.min(cupsAmount.water, cupsAmount.milk, cupsAmount.beans, cupsAmount.cups);
    let coffeeRequest = input("Write how many cups of coffee do you want:/n");
    if (cupsAmount.overall >= Number(coffeeRequest)) {
    let i;
    for (i = 1; i === Number(coffeeRequest); i++) {
    if (filler.water >= coffeeType.water) {
        filler.water -= coffeeType.water;
    }
    else {
        console.log("Sorry, I don't have water, fill me master!");
        return init();
    }
    if (filler.milk >= coffeeType.milk) {
        filler.milk -= coffeeType.milk;
    }
    else {
        console.log("Sorry, I don't have milk, fill me master!");
        return init();
    }
    if (filler.beans >= coffeeType.beans) {
        filler.beans -= coffeeType.beans;
    }
    else {
        console.log("Sorry, I don't have beans, fill me master!");
        return init();
    }
    if (filler.cups >= 1) {
        filler.cups -= 1;
    }
    else {console.log("Sorry, I don't have cups, fill me master!");
        return init();
    }
    filler.money += coffeeType.price;
    console.log(`Be ready for your ${i} ${coffeeType}`);
    }
    } else {
        console.log(`Sorry, I can make only ${cupsAmount.overall} amount of coffee cups!`);
    }
}

function cleaning(){
    function tablet(){
        console.log("Please insert cleaning tablet");
    }
    function processing() {
        console.log("Processing with cleaning, please wait");
    }
    if (filler.water < 100) {
        console.log("To perform cleaning, I need 100ml of water, please fill water tank");
    }
    else {
    setTimeout(tablet, 5000);
    setTimeout(processing, 30000);
    console.log("Cleaning is done");
    if (filler.water === 0) {
        console.log("I used all the water, please fill m master!");
    }
    }
}

init();