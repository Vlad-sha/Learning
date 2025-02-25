type Modifier = 'read' | 'update' | 'create';

type UserRoles = {
    customers?: Modifier,
    projects?: Modifier,
    adminPanel?: Modifier
}

type ModifierToAccess <T> = {
    [Property in keyof T ] : boolean;
}

type ModifierToAccessAuto = ModifierToAccess<UserRoles>

type UserAccess = {
    customers?: boolean,
    projects?: boolean,
    adminPanel?: boolean
}


interface IForm {
    name : string;
    password : string;
}
const form : IForm = {
    name : 'Вася',
    password : '123'
}
const formValidation = {
    name : {IsValid : true},
    password : {IsValid : false, errorMessage : 'Пароль должен быть длиннее 5 символов'}
}

type Validation <T> = {
    [k in keyof T] : {
        isValid : true
    } | {
        IsValid : false;
        errorMessage : string;
    }
}


type ReadOrWrite = 'read' | 'write';
type Bulk = 'bulk' | '';
type Access = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`;


type ErrorOrSuccess = 'error' | 'success';

interface Response {
    result : `http${ErrorOrSuccess}`;
}

type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never;
type T  = ReadOrWriteBulk<Access>;


interface User {
    name : string
    age? : number
    email : string
}

type partial = Partial<User>;
const p : partial = {}

type required = Required<User>;
type requiredAndReadonly = Readonly<Required<User>>;


interface PaymentPersistent {
    id : number;
    sum : number;
    from : string;
    to : string;
}

type Payment = Omit<PaymentPersistent, 'id'>;
type Requisites = Pick<PaymentPersistent,'from' | 'to' >;
type ExtarctEx = Extract<'from' | 'to' | Payment, string>;
type ExcludeEx = Exclude<'from' | 'to' | Payment, string>;

class User {
    constructor( public id : number, public name : string) {}
}

function getData (id : number) : User {
    return new User (id, 'Василевс');
}

type RT = ReturnType<typeof getData>;
type RT2 = ReturnType<<T>() => T>

type PT = Parameters<typeof getData>[0];

type CP = ConstructorParameters<typeof User>;

// --------------
type A = Awaited<Promise<Promise<string>>>;

interface IMenu {
    name : string
    url : string
}

async function getMenu() : Promise<IMenu[]> {
    return [{name : 'Аналитика', url: 'analytics'}];
}

type R = Awaited<ReturnType<typeof getMenu>>;


