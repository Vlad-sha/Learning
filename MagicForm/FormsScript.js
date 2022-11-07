let NameField = document.getElementById('first-name');         //adding global variables
let SurNameField = document.getElementById('last-name');
let EmailField = document.getElementById('email');
let TelephoneField = document.getElementById('tel');
let CompanyField = document.getElementById('company');
let AddressField = document.getElementById('address');
let SubmitBtn = document.getElementById('submit-button');
let Fieldstate = {       //adding global object for fields data
    FirstName: '',
    FamilyName: '',
    Email: '',
    PhoneNumb: '',
    CompanyName: '',
    Address: ''
};
let Mapa = new Map();        //adding map to avoid dublicates in local storage

function init() {       // adding listeners to input fields to save data, to window for loading, and for submit button
    NameField.addEventListener("input", () => {
        Fieldstate.FirstName = NameField.value;
        save()
    });
    SurNameField.addEventListener("input", () => {
        Fieldstate.FamilyName = SurNameField.value;
        save()
    });
    EmailField.addEventListener("input", () => {
        Fieldstate.Email = EmailField.value;
        save()
    });
    TelephoneField.addEventListener("input", () => {
        Fieldstate.PhoneNumb = TelephoneField.value;
        save()
    });
    CompanyField.addEventListener("input", () => {
        Fieldstate.CompanyName = CompanyField.value;
        save()
    });
    AddressField.addEventListener("input", () => {
        Fieldstate.Address = AddressField.value;
        save()
    });
    SubmitBtn.addEventListener("click", () => {
        submit()
    });
    window.addEventListener('load', load);
}

function save() {
    localStorage.setItem('FieldState', JSON.stringify(Fieldstate)); //Saving form fields to local storage
}

function load() {
    LoadFieldVal(); //loading fields values
    let NewMapa = JSON.parse(localStorage.getItem('ElementMap'));  //loading already exist formcards as they ae in form of array
    NewMapa.forEach(e => {
        Mapa.set(e[0], e[1]);
    });
}

function submit() {
    const uid = function () {   //generating unique id by combo: time of creation + random number
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    let Element = {
        NameVal: NameField.value,
        ScnNameVal: SurNameField.value,
        Email: EmailField.value,
        TelN: TelephoneField.value,
        CompanyN: CompanyField.value,
        Address: AddressField.value
    }
    let testID = uid();
    Mapa.set(testID, Element);  //setting Map with key = unique id and value = form input values
    localStorage.setItem('ElementMap', JSON.stringify(Array.from(Mapa.entries())));
    document.getElementById('FormID').reset();  //clearing fields after pressing submit button
    localStorage.removeItem('FieldState');  //clearing local storage

    // let StorageElements = JSON.parse(localStorage.getItem('StorageElements'));
    // if (StorageElements === null || undefined) {
    //     StorageElements = [Element];
    // }
    // else {
    //     StorageElements.push(Element);
    // }
    //
    // localStorage.setItem('StorageElements',JSON.stringify(StorageElements));
    // document.getElementById('FormID').reset();
}

function LoadFieldVal() {
    let tempcheck = JSON.parse(localStorage.getItem('FieldState')); // Checking storage to prevent NULL values at first load
    if (tempcheck === null) {
        return;
    }
    Fieldstate = tempcheck;      //loading not-null fields

    NameField.value = Fieldstate.FirstName;

    SurNameField.value = Fieldstate.FamilyName;

    EmailField.value = Fieldstate.Email;

    TelephoneField.value = Fieldstate.PhoneNumb;

    CompanyField.value = Fieldstate.CompanyName;

    AddressField.value = Fieldstate.Address;
}

init();

setInterval(() => {  //Setting time interval for sync
    LoadFieldVal();
}, 100);