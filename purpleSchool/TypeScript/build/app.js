"use strict";
const form = {
    name: 'Вася',
    password: '123'
};
const formValidation = {
    name: { IsValid: true },
    password: { IsValid: false, errorMessage: 'Пароль должен быть длиннее 5 символов' }
};
