// let StorageElements = JSON.parse(localStorage.getItem('StorageElements'));
// StorageElements.forEach((e, i) => {
redraw();
let LocalStorageCopy = JSON.stringify(localStorage); //setting copy of local storage to check if they are the same
setInterval(() => {
    if (JSON.stringify(localStorage) === LocalStorageCopy) {  //checking if there is difference in data
        return;
    }
    redraw();
    LocalStorageCopy = JSON.stringify(localStorage); //after check we set copy as the new local storage
}, 100);

function redraw() {   //setting new DIV containers with unuqie ID
    document.getElementById('container').innerHTML = '';
    let savedElementMap = JSON.parse(localStorage.getItem('ElementMap'));
    for (let i = 0; i < savedElementMap.length; i++) {
        let key = savedElementMap[i][0];
        let StoredElement = savedElementMap[i][1];
        document.getElementById('container').innerHTML += `
        <div class = "submit-history-card" id="${key}"> 
            <b>First Name:</b>
            <p class = 'card-first-name'>${StoredElement.NameVal}</p>
            <b>Last Name:</b>
            <p class = 'card-last-name'>${StoredElement.ScnNameVal}</p>
            <b>Email:</b>
            <p class = 'card-email'>${StoredElement.Email}</p>
            <b>Tel. Number:</b>
            <p class = 'card-phone'>${StoredElement.TelN}</p>
            <b>Company:</b>
            <p class = 'card-company'>${StoredElement.CompanyN}</p>
            <b>Address:</b>
            <p class = 'card-address'>${StoredElement.Address}</p>
            <button class = 'delete-button' onclick="remove(this)">Delete</button>
        </div>`;
    }
}

function remove(btn) {
    let ElementsArray = JSON.parse(localStorage.getItem('ElementMap'));
    for (let i=0; i <ElementsArray.length; i++) {
        if (ElementsArray[i][0] === btn.parentNode.id) {
            ElementsArray.splice(i,1);
            break;
        }
    }
    localStorage.setItem('ElementMap',JSON.stringify(ElementsArray));
    // Elements.removeItem(btn.parentNode.id); //removing parent element of button by div ID from LocalStorage *order is important*
    btn.parentNode.remove();  //removing button DIV from HTML

}

// onclick="this.parentNode.remove()"
