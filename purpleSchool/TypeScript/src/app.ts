interface IUserService {
    users : number;
    getUserDataBase() : number
}


// @nullUsers
// @setUsers (5)
// @threeUsersAdvanced
@ setUsersAdvanced(4)
@setCreatedAt
class UserService implements IUserService {
    @Max(100)
    users: number = 1000;

    @Catch({rethrow : true})
    @Log
    getUserDataBase(): number {

        throw new Error ('Ошибка')
    }
}

function Log (
    target : Object,
    propertyKey : string | symbol,
    descriptor : TypedPropertyDescriptor<(...args : any[]) => any>
) : TypedPropertyDescriptor<(...args : any[]) => any> | void {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
    descriptor.value = () => {
        console.log('no error');
    }
}

function Catch ({rethrow} : {rethrow : boolean} = {rethrow: true}) {
    return (
    target : Object,
    propertyKey : string | symbol,
    descriptor : TypedPropertyDescriptor<(...args : any[]) => any>
) : TypedPropertyDescriptor<(...args : any[]) => any> | void => {
    const oldValue = descriptor.value;
    descriptor.value = async(...args : any[]) => {
        try {
            return await oldValue?.apply(target, args);
        }
        catch (e) {
            if (e instanceof Error) {
                console.log(e.message);
                if (rethrow)  {
                    throw e;
                }
            }
        }
    }
}
}

function Max (max : number) {
    return (
        target : Object,
        propertyKey: string | symbol
    ) => {
        let value : number;
        const setter = function (newValue : number) {
            if (newValue > max) {
                console.log(`Нельзя установить значение больше ${max}`);
            } else {
                value = newValue;
            }
        }

        const getter = function() {
            return value;
        }
        Object.defineProperty(target, propertyKey, {
            set : setter,
            get : getter
        });
    }
}

function setCreatedAt< T extends { new (...args : any[]): {}}> (constructor : T) {
    return class extends constructor {
        createdAt = new Date();
    }
}

function nullUsers (target : Function) {
    target.prototype.users = 0;
}

function logUsers (obj : UserService) {
    console.log('Users:' + obj.users);
    return obj
}

console.log(new UserService());


function threeUsersAdvanced<T extends {new (...args : any[]): {}}> (constructor : T) {
    return class extends constructor {
        users = 3;
    }
} 

function setUsers (users : number) {
    return (target : Function) => {
        target.prototype.users = users;
    }
}

function setUsersAdvanced (users : number) {
    return <T extends {new (...args : any[]): {} }> (constructor : T) => {
        return class extends constructor {
            users = users;
        }
    }
}

const userService = new UserService();
userService.users = 1;
console.log(userService.users);
userService.users = 1000;
console.log(userService.users);


interface IUserService2 {
    getUserDataBase() : number
}

class UserService2 implements IUserService2 {
   private _users: number;

   @Log2()
   set users (num : number) {
    this._users = num;
   }

   get users () {
    return this._users;
   }

    getUserDataBase(): number {

        throw new Error ('Ошибка')
    }
}

function Log2 () {
    return (
        target : Object,
        _ : string | symbol,
        descriptor : PropertyDescriptor
    ) => {
    const set = descriptor.set
    descriptor.set = (...args : any) => {
        console.log(args);
        set?.apply(target, args);
    }
    }
}

function Uni (name : string) : any {
    console.log(`Инициализация ${name}`);
    return function () {
        console.log(`Вызов ${name}`);
    }
} 

@Uni('Класс')
class MyClass {
    @Uni ("Свойство")
    props?: any;

    @Uni("Свойство static")
    static prop2?: any;

    @Uni("Метод static")
    static method2 (@Uni("Параметр метода static") _: any) {}

    @Uni('Метод')
    method (@Uni('Параметр метода') _: any) {}

    constructor (@Uni('Параметр конструктора') _: any) {
        
    }

}