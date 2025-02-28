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
    users: number;

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
