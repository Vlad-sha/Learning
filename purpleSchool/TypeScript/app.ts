class User {
    name : string;
    age : number

    constructor();
    constructor(name : string)
    constructor(age : number)
    constructor( name : string, age : number)
    constructor(ageOrName? : string | number, age? : number) {
       if (typeof ageOrName ==='string') {
        this.name = ageOrName;
       } else if (typeof ageOrName === 'number') {
        this.age = ageOrName
       }
       if (typeof age === 'number') {
        this.age = age
       }
    }
}

enum PaymentStatus {
    Holded,
    Processed,
    Reversed
}


class Payment {
    id: number;
    status: PaymentStatus = PaymentStatus.Holded;;
    createdAt: Date = new Date();
    updatedAt: Date;


    constructor(id: number) {
        this.id = id
        this.status 
        this.createdAt 
    }

    getPaymentLifeTime () {
       return new Date().getTime() - this.createdAt.getTime();
    }
    unholdPayment() : void {
        if (this.status === PaymentStatus.Processed) {
            throw new Error ('Платеж не может быть возвращён');
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}


class User2 {
    _login : string
    password : string

    set login ( e : string) {
        this._login = 'user' + e 
    }
}

interface ILogger {
    log (...args): void;
    error (...args): void;
}

class Log implements ILogger {
    log(...args: any[]): void {
        console.log(...args);
    }
    error(...args: any[]): void {
        console.log(...args);
    }
    
}