const num : Array<number> = [1,2,3];

async function test () {
    const v = await new Promise <number> ((resolve, reject) => {
        resolve(1);
    });
}

function Middleware<T> (data: T) : T {
    console.log(data);
    return data;
}

let res = Middleware(10);

function splitHalf <T> (data: Array<T>) : Array<T> {
    const l = data.length / 2;
    return data.splice(0,l);
}

splitHalf<number>([1,2,3,4,5,6]);


function Stringify <G> (data : G) : string | undefined {
    if (typeof data === 'string') {
        return data
    } else if (Array.isArray(data)) {
        return data.toString();
    }
    switch (typeof data) {
        case "number":
        case "symbol":
        case "boolean":
        case "bigint":
        case "function":
            return data.toString();
        case 'object':
            return JSON.stringify(data);
        default :
        return undefined;
    }

}


const split : <T> (data : Array<T>) => Array<T> = splitHalf;


interface IlogLine <T> {
    stamp : Date;
    data : T
}

type LogLineType <T> = {
    stamp : Date;
    data : T
}

const logLine: IlogLine <{a:number}> = {
    stamp : new Date(),
    data : {
        a : 1
    }
}


class Vehicle  {
    run : number
}

function kmToMiles <T extends Vehicle> (vehicle : T): T {
    vehicle.run = vehicle.run * 0,62;
    return vehicle
}

class LCV extends Vehicle {
    capacity : number
}


const vehicle = kmToMiles(new Vehicle());
const lcv = kmToMiles(new LCV());

function logID <T extends string | number, Y> (id : T, additionalData : Y) : {id :T, data : Y} {
    console.log(id);
    console.log(additionalData);
    return {id, data : additionalData}
}

class ObjectSort {
    id : number
}

function Sort < T extends ObjectSort> (val : T[], type: 'asc' | 'desc' = 'asc') : T[] {
    return val.sort((a,b) => {
        switch (type) {
            case 'asc':
                return a.id - b.id;
            case 'desc':
                return b.id + a.id;
        }
     })
}


const data = [
    { id : 1, name : " sfds"},
    {id : 2, name : 'rfvtb'},
    {id : 3, name : 'plgujhion'}
]

console.log(Sort(data, 'asc'));
console.log(Sort(data, 'desc'));

type GConstructor< T ={}> = new (...args: any[]) => T

class List {
    constructor(public items  : string[]) {}
}

type ListType = GConstructor<List>

function ExtendedList<TBase extends ListType>(Base : TBase) {
    return class ExtendedList extends Base {
        first() {
            return this.items[0]
        }
    }
}

const list = ExtendedList(List);
const res2 = new list(['один',"dva",'tri']);
console.log(res2.first());