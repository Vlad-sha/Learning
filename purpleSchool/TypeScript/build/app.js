"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @nullUsers
// @setUsers (5)
// @threeUsersAdvanced
let UserService = class UserService {
    getUserDataBase() {
        throw new Error('Ошибка');
    }
};
__decorate([
    Log
], UserService.prototype, "getUserDataBase", null);
UserService = __decorate([
    setUsersAdvanced(4),
    setCreatedAt
], UserService);
function Log(target, propertyKey, descriptor) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
function setCreatedAt(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.createdAt = new Date();
        }
    };
}
function nullUsers(target) {
    target.prototype.users = 0;
}
function logUsers(obj) {
    console.log('Users:' + obj.users);
    return obj;
}
console.log(new UserService());
function threeUsersAdvanced(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.users = 3;
        }
    };
}
function setUsers(users) {
    return (target) => {
        target.prototype.users = users;
    };
}
function setUsersAdvanced(users) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.users = users;
            }
        };
    };
}
