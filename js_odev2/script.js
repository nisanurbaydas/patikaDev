var task = document.getElementById('task')
var list = document.getElementById('list')
var toastNotice = document.querySelector('.toast')
var closeNotice = document.querySelector('.close-toast')
var noticeMessage = document.querySelector('.toast-body')
let todos = []

function getFromLocalStorage() {
    let saved = localStorage.getItem("TODOS")
    if (saved) {
        todos = JSON.parse(localStorage.getItem("TODOS"))
        createList(todos)
    }
}

getFromLocalStorage()

// ADDING
function newElement() {
    if(task.value === ""){
        showNotice("Listeye boş ekleme yapamazsınız!");
    }
    else{
        const todo = {
            num : todos.length,
            todo : task.value,
            completed: false
        }
        todos.push(todo)
        addLocalStorage(todos)
        showNotice("Ekleme işlemi başarı ile gerçekleşmiştir.")

        // clear input value
        task.value = "";
    }
}

function addLocalStorage(todos) {
    localStorage.setItem('TODOS', JSON.stringify(todos))
    createList(todos)
}

function createList(todos){
    list.innerHTML = ''
    todos.forEach(element => {
        // create list element
        var li = document.createElement("li");
        li.setAttribute('num', element.num)
        li.textContent=element.todo;

        var span = document.createElement("span");
        span.textContent = "x";
        span.className = "close";

        if (element.completed === true) {
            li.classList.add("isChecked")
        }
        else if (element.completed === false) {
            li.classList.remove("isChecked")
        }

        list.appendChild(li);
        li.appendChild(span);
    });
}

// DELETE
list.addEventListener('click', function (e) {
    const closeBtn = e.target
    if (closeBtn.classList.contains('close')) {
        const arrNum = closeBtn.parentNode.getAttribute('num')
        deleteElement(arrNum, closeBtn)
    }
})

function deleteElement(num, btn) {
    let deleteItem = todos.find(item => item.num === Number(num))
    todos.splice(todos.indexOf(deleteItem),1)
    addLocalStorage(todos)
    showNotice("Görev başarı ile silinmiştir.")
}

// CHECKING
list.addEventListener('click', function (e) {
    const checkElement = e.target;
    if(checkElement.tagName === "LI"){
        const arrNum = checkElement.getAttribute('num')
        checkedElement(arrNum)
    }    
})

function checkedElement(num) {
    let checkItem = todos.find(item => item.num === Number(num))

    if(checkItem.completed == true){
        checkItem.completed = false
        addLocalStorage(todos)
    }
    else{
        checkItem.completed = true
        addLocalStorage(todos)
    }
}


// SHOW NOTICE

function showNotice(notice) {
    toastNotice.classList.remove("hide")
    toastNotice.classList.add("show")
    noticeMessage.innerHTML = `${notice}`
    setTimeout(function () { toastNotice.classList.remove("show"); toastNotice.classList.add("hide")}, 2000)
}

closeNotice.addEventListener('click', function (e) {
    toastNotice.classList.remove("show")
    toastNotice.classList.add("hide")
})