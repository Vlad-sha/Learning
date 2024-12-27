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
