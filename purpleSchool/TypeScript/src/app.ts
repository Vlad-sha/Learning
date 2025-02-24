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

type Validation <T> {
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
