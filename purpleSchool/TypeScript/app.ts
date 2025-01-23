class Payment {
    private date: Date = new Date();

    getDate (this : Payment) {
        return this.date;
    }

    getDateArrow = () => {
        return this.date
    }
}

const a = new Payment();

const user = {
    id : 1,
    paymentDate : a.getDate.bind(a),
    paymentDateArrow : a.getDateArrow
}

console.log(a.getDate())
console.log(user.paymentDate())
console.log(user.paymentDateArrow())