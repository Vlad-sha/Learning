/*let crbutton = document.getElementById("add-task-button"); //Calling an "add" button

let dltbtn = document.querySelectorAll('.delete-btn'); // calling a "delete" button

function insert() {
    let addinput = document.getElementById("input-task");
    let inputli = document.querySelector("li").cloneNode(true);
    inputli.querySelector("span").innerHTML = String(addinput.value);
    inputli.getElementsByClassName('delete-btn')[0].onclick = function () {
        this.parentNode.remove();
    }
    inputli.getElementsByClassName('chck')[0].onchange = function (event) {
        let spanchck = inputli.getElementsByClassName("task")[0];
        if (event.target.checked) {
            spanchck.style["text-decoration"] = "line-through";
        }
        else {
            spanchck.style["text-decoration"] = "none";
        }
    }
    document.getElementById("task-list").append(inputli);
    save();
} //function to add new tasks in ul element and delete new tasks

crbutton.addEventListener("click",insert);


function init() {
    dltbtn.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.parentElement.remove();
        });
    });
    document.querySelectorAll('.chck').forEach(checkbox => {
        checkbox.onchange = function (event) {
            let spanchck = checkbox.parentElement.getElementsByClassName("task")[0];
            if (event.target.checked) {
                spanchck.style["text-decoration"] = "line-through";
            } else {
                spanchck.style["text-decoration"] = "none";
            }
        }
    })
    save();
} // this one delete old hardcoded tasks

function reload() {
    let save = JSON.parse(localStorage.getItem("tasks")) || [];
    return save;
}
reload();
init();

// Works only for old tasks -_-
//function del () {
//    let dltbtn = document.getElementsByClassName('delete-btn');
//for (let i = 0; i < dltbtn.length; i++) {
//    dltbtn[i].onclick = function () {
//        this.parentNode.remove();
//    }
//}
//}
//del();

// Making localstorage to store the tasks
function save(){
let spisok = document.getElementById("task-list");
let taskList = Array.from(spisok.children);
localStorage.setItem("tasks", JSON.stringify(taskList));
}*/
// Starting from scratch!!!
/*localStorage.clear();*/
let taskList = [];

let counter = 0;

function init() {
    load();

    const buttonHtml = document.getElementById('add-task-button');
    buttonHtml.addEventListener('click', addButtonHandler);
}

function insertTask(Id, text, checked) {
    const task = {Id: Id, text: text, checked: checked};
    taskList.push(task);

    updateHtml();
    save();
}

function save() {
    localStorage.setItem('idcounter',JSON.stringify(counter));
    localStorage.setItem('tasks', JSON.stringify(taskList));
}

function load() {
    const loadedCounter = JSON.parse(localStorage.getItem('idcounter')) || 0;
    const loadedList = JSON.parse(localStorage.getItem('tasks')) || [];
    counter = loadedCounter;

    loadedList.forEach(value => {
        insertTask(value.Id, value.text, value.checked);
    });
}

function updateHtml() {
    const listHtml = document.getElementById('task-list');

    listHtml.innerHTML = "";

    taskList.forEach(value => {
        const checked = value.checked ? 'checked' : '';
        let li = `<li id="${value.Id}">
        <input type="checkbox" ${checked} onclick="checkButtonHandler(this)">
        <span class="task">${value.text}</span>
        <button class="delete-btn" onclick="deleteButtonHandler(this)"><img src="cross.png"></button>
        </li>`;
        listHtml.innerHTML += li;
    });
}

function deleteTask(TaskId) {
for(let i=0; i<taskList.length; i++) {
    if (TaskId == taskList[i].Id)
    {
        taskList.splice(i,1);
        break;
    }
}
updateHtml();
save();
}

function checkTask(TaskId,checked) {
    for(let i=0; i<taskList.length; i++) {
        if (TaskId == taskList[i].Id)
        {
            taskList[i].checked = checked;
            break;
        }
    }
    save();
}

function deleteButtonHandler(btn) {
    deleteTask(btn.parentElement.getAttribute("id"));
}

function addButtonHandler() {
    const textInputHtml = document.getElementById('input-task');

    if (textInputHtml.value === '') {
        return;
    }

    insertTask(counter++, textInputHtml.value, false);

    textInputHtml.value = '';
}

function checkButtonHandler(checkbox) {
    checkTask(checkbox.parentElement.getAttribute("id"),checkbox.checked);
}

init();
