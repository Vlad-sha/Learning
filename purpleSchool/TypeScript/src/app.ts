const num : Array<number> = [1,2,3];

async function test () {
    const v = await new Promise <number> ((resolve, reject) => {
        resolve(1);
    });
}

function Middleware<T> (data: T) : T {
    console.log(data);
    return data;
}

let res = Middleware(10);

function splitHalf <T> (data: Array<T>) : Array<T> {
    const l = data.length / 2;
    return data.splice(0,l);
}

splitHalf<number>([1,2,3,4,5,6]);


function Stringify <G> (data : G) : string | undefined {
    if (typeof data === 'string') {
        return data
    } else if (Array.isArray(data)) {
        return data.toString();
    }
    switch (typeof data) {
        case "number":
        case "symbol":
        case "boolean":
        case "bigint":
        case "function":
            return data.toString();
        case 'object':
            return JSON.stringify(data);
        default :
        return undefined;
    }

}