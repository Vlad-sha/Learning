"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const Y = new User("Василий");
console.log(Y);
Y.name = 'Акакий';
console.log(Y);
