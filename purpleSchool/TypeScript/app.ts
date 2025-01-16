function getFullName (firstName : string, surName : string) :string {
    return `${firstName} ${surName}` ;
}

const getFullNameArrow = (firstName : string, surName : string) :string => {
    return `${firstName} ${surName}` ;
}


enum StatusCode {
    SUCCESS = 1,
    FAIL = 0,
    PENDING = 3
}

const res = {
    message: "Успешно",
    statusCode: StatusCode.SUCCESS
}

if (res.statusCode === StatusCode.SUCCESS) {

}

enum Status {
	Published = 'published',
    Draft = 'draft',
    Deleted = 'deleted'
}

async function getFaqs(req : {
	topicId: number,
	status?: Status
}) : Promise <{
question : string,
answer: string,
tags : string[],
likes : number,
status : Status
}[]> {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}


function logId (id: string | number | boolean) {
        if (typeof id === 'string') {
            console.log(id.toLowerCase())
        } else if (typeof id === 'number') {
            console.log(id.toExponential())
        } else {
            console.log(id)
        }
} 

function logErr (err: string | string[]) {
    if (Array.isArray(err)) {
        console.log(err);
    } else {
        console.log(err);
    }
}

function logObj (obj : {a : number} | {b : number}) {
    if ('a' in obj) {
        console.log (obj.a);
    } else {
        console.log (obj.b);
    }
}


function fetchWithAuth (url: string, method: 'get' | 'post') {
    return 1;
}

let method = 'post';
fetchWithAuth('sdfdsf', method as 'post')

interface User {
    name : string,
    age : number,
    skills: string[]
}

interface Id {
    id : number
}

interface UserWithRole extends User, Id {
    role?: string
}

let user : UserWithRole = {
    name: 'Ffofas',
    age: 53,
    skills: ['1','2'],
    id: 7,
    role: 'Admin'
}

interface Dic {
    [index : number] : User
}

type ud = Record<number, User>

let user2 : UserWithRole = {
    name : 'dfgdfg',
    age : 34,
    skills: ['think','sit'],
    id: 3
}

function multiply ( first : number, second?: number) : number {
    if (!second) {
        return first * first
    }
    return first * second;
}

interface userPro {
    user : string,
    password? : {
        type: 'primary' | 'secondary'
    }
}

function testPass (user : userPro) {
    const t = user.password?.type
}

function test (param?: string) {
    return param ?? multiply(5);
}

function logIdV (id: string | number) : void {
    console.log(id);
}
const a = logIdV(1);

type voidFunc = () => void;
const func1 : voidFunc = () => {

}
const func2 : voidFunc = () => {
    return true;
}
const Pusto = func2();

let Arr = [1,2,3,4,5,6,7];
const math = {
    rr : [0]
}
Arr.forEach((e) => {math.rr.push(e)});


let input : unknown;
input = ['dfgd']

function run (i: unknown) {
    if (typeof i == 'number') {
        i++
    } else {
        i
    }
}

run(input)

async function getData () {
    try {
        await fetch('')
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}