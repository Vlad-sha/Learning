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
