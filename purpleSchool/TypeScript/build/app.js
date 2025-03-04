"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// @nullUsers
// @setUsers (5)
// @threeUsersAdvanced
let UserService = class UserService {
    constructor() {
        this.users = 1000;
    }
    getUserDataBase() {
        throw new Error('Ошибка');
    }
};
__decorate([
    Max(100)
], UserService.prototype, "users", void 0);
__decorate([
    Catch({ rethrow: true }),
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
    descriptor.value = () => {
        console.log('no error');
    };
}
function Catch({ rethrow } = { rethrow: true }) {
    return (target, propertyKey, descriptor) => {
        const oldValue = descriptor.value;
        descriptor.value = (...args) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (oldValue === null || oldValue === void 0 ? void 0 : oldValue.apply(target, args));
            }
            catch (e) {
                if (e instanceof Error) {
                    console.log(e.message);
                    if (rethrow) {
                        throw e;
                    }
                }
            }
        });
    };
}
function Max(max) {
    return (target, propertyKey) => {
        let value;
        const setter = function (newValue) {
            if (newValue > max) {
                console.log(`Нельзя установить значение больше ${max}`);
            }
            else {
                value = newValue;
            }
        };
        const getter = function () {
            return value;
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
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
const userService = new UserService();
userService.users = 1;
console.log(userService.users);
userService.users = 1000;
console.log(userService.users);
class UserService2 {
    set users(num) {
        this._users = num;
    }
    get users() {
        return this._users;
    }
    getUserDataBase() {
        throw new Error('Ошибка');
    }
}
__decorate([
    Log2()
], UserService2.prototype, "users", null);
function Log2() {
    return (target, _, descriptor) => {
        const set = descriptor.set;
        descriptor.set = (...args) => {
            console.log(args);
            set === null || set === void 0 ? void 0 : set.apply(target, args);
        };
    };
}
function Uni(name) {
    console.log(`Инициализация ${name}`);
    return function () {
        console.log(`Вызов ${name}`);
    };
}
let MyClass = class MyClass {
    static method2(_) { }
    method(_) { }
    constructor(_) {
    }
};
__decorate([
    Uni("Свойство")
], MyClass.prototype, "props", void 0);
__decorate([
    Uni('Метод'),
    __param(0, Uni('Параметр метода'))
], MyClass.prototype, "method", null);
__decorate([
    Uni("Свойство static")
], MyClass, "prop2", void 0);
__decorate([
    Uni("Метод static"),
    __param(0, Uni("Параметр метода static"))
], MyClass, "method2", null);
MyClass = __decorate([
    Uni('Класс'),
    __param(0, Uni('Параметр конструктора'))
], MyClass);
