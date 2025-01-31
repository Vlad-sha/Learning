"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const num = [1, 2, 3];
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const v = yield new Promise((resolve, reject) => {
            resolve(1);
        });
    });
}
function Middleware(data) {
    console.log(data);
    return data;
}
let res = Middleware(10);
function splitHalf(data) {
    const l = data.length / 2;
    return data.splice(0, l);
}
splitHalf([1, 2, 3, 4, 5, 6]);
function Stringify(data) {
    if (typeof data === 'string') {
        return data;
    }
    else if (Array.isArray(data)) {
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
        default:
            return undefined;
    }
}
const split = splitHalf;
const logLine = {
    stamp: new Date(),
    data: {
        a: 1
    }
};
class Vehicle {
}
function kmToMiles(vehicle) {
    vehicle.run = vehicle.run * 0, 62;
    return vehicle;
}
class LCV extends Vehicle {
}
const vehicle = kmToMiles(new Vehicle());
const lcv = kmToMiles(new LCV());
function logID(id, additionalData) {
    console.log(id);
    console.log(additionalData);
    return { id, data: additionalData };
}
class ObjectSort {
}
function Sort(val, type = 'asc') {
    return val.sort((a, b) => {
        switch (type) {
            case 'asc':
                return a.id - b.id;
            case 'desc':
                return b.id + a.id;
        }
    });
}
const data = [
    { id: 1, name: " sfds" },
    { id: 2, name: 'rfvtb' },
    { id: 3, name: 'plgujhion' }
];
console.log(Sort(data, 'asc'));
console.log(Sort(data, 'desc'));
