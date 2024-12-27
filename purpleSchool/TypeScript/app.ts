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