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