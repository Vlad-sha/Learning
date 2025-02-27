interface IUserService {
    users : number;
    getUserDataBase() : number
}


// @nullUsers
// @setUsers (5)
// @threeUsersAdvanced
@ setUsersAdvanced(4)
class UserService implements IUserService {
    users: number;

    getUserDataBase(): number {
        return this.users
    }
}

function nullUsers (target : Function) {
    target.prototype.users = 0;
}

function logUsers (obj : UserService) {
    console.log('Users:' + obj.users);
    return obj
}

console.log(new UserService().getUserDataBase());


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