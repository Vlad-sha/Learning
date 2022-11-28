const input = require('sync-input');
let tickets = 0;
let listOfGifts = [
    {
        Name: 'Teddy Bear',
        Price: 10,
        ID: 1
    },
    {
        Name: 'Big Red Ball',
        Price: 5,
        ID: 2
    },
    {
        Name: 'Huge Bear',
        Price: 50,
        ID: 3
    },
    {
        Name: 'Candy',
        Price: 8,
        ID: 4
    },
    {
        Name: 'Stuffed Tiger',
        Price: 15,
        ID: 5
    },
    {
        Name: 'Stuffed Dragon',
        Price: 30,
        ID: 6
    },
    {
        Name: 'Skateboard',
        Price: 100,
        ID: 7
    },
    {
        Name: 'Toy Car',
        Price: 25,
        ID: 8
    },
    {
        Name: 'Basketball',
        Price: 20,
        ID: 9
    },
    {
        Name: 'Scary Mask',
        Price: 75,
        ID: 10
    }
];

function init() {
    console.log('WELCOME TO THE CARNIVAL GIFT SHOP!');
    console.log('Hello friend! Thank you for visiting the carnival!');
    console.log('Here\'s the list of gifts:\n');
    listOfGifts.forEach(value => {
        console.log(`${value.ID}- ${value.Name}, Cost: ${value.Price} tickets`);
    });
    ChoiceHandler();
}

function ChoiceHandler() {
    let PersonChoice = Number(input(`What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
`));
    switch (PersonChoice) {
        case 1:
            purchase();
            return ChoiceHandler();
        case 2:
            addTickets();
            return ChoiceHandler();
        case 3:
            console.log(`Total tickets: ${tickets}`);
            return ChoiceHandler();
        case 4:
            if (listOfGifts !== []) {
            console.log('Here\'s the list of gifts:\n');
            listOfGifts.forEach(value => {
                console.log(`${value.ID}- ${value.Name}, Cost: ${value.Price} tickets`);
            });
            return ChoiceHandler();
            } else {
                console.log('Wow! There are no gifts to buy.');
            }
        case 5:
            console.log('Have a nice day!');
            process.exit(1);
        default:
            console.log('Please enter a valid number!');
            return ChoiceHandler();
    }
}

function purchase() {
    if (listOfGifts.length === 0) {
        console.log("Wow! There are no gifts to buy.");
    }
    let GiftNumber = Number(input('Enter the number of the gift you want to get:\n'));
    if (Number.isNaN(GiftNumber)) {
        console.log ('Please enter a valid number!');
        return purchase();
    }
    if (!listOfGifts.some((value) => {
        return value.ID === GiftNumber;
    })) {
        console.log('There is no gift with that number!');
    }
    for (let i = 0; i < listOfGifts.length; i++) {
        if (listOfGifts[i].ID === GiftNumber) {
            if (listOfGifts[i].Price > tickets) {
                console.log('You don\'t have enough tickets to buy this gift.');
                break;
                }
                console.log(`Here you go, one ${listOfGifts[i].Name}!`);
                tickets -= listOfGifts[i].Price;
                listOfGifts.splice(i,1);
                console.log('Total tickets: ' + tickets);
                break;
            }
        }
}

function addTickets() {
    let TicketAddition = Number(input(`Enter the ticket amount:
`));
    if (TicketAddition >= 0 && TicketAddition <= 1000) {
    tickets += TicketAddition;
    console.log("Total tickets: " + tickets);
    } else {
        console.log('Please enter a valid number between 0 and 1000.');
    }
}

init();