const input = document.querySelector(".todoText");
const todoList = document.querySelector(".todoList");
const addTodoBtn = document.querySelector(".addBtn");
const trashBtnList = document.querySelectorAll(".trash");
const taskList = document.querySelectorAll(".task");

// localStorage에 저장하여 사용자가 브라우저를 종료하더라도 다시 접속하였을 때 todo를 새로 입력하지 않도록 하는 기능 추가
// window.onload = () => loadTodo();

// const initTodo = () => {
//     for (let i = todoList.childElementCount - 1; i >= 0; i--) {
//         todoList.removeChild(todoList.children[i]);
//     }
// }

// const saveTodo = () => {
//     const savingTasks = document.querySelectorAll(".task");
//     let saveTodo = [];

//     savingTasks.forEach((task) => {
//         const taskData = { 'todo': task.textContent, 'isDone': task.classList.contains("check") };
//         saveTodo.push(taskData);
//     });

//     localStorage.setItem("todos", JSON.stringify(saveTodo));
// }

// const loadTodo = () => {
//     const todos = localStorage.getItem("todos") ? Array.from(JSON.parse(localStorage.getItem("todos"))) : null;

//     if (todos && taskList.length !== todos.length) {
//         initTodo();

//         todos.forEach(todo => {
//             const todoElement = createTodo(todo.todo, todo.isDone);
//             todoList.appendChild(todoElement);
//         })
//     }
// }

const createTodo = (todo, isCheck) => {
    const newTodo = document.createElement("li");
    newTodo.className = "todo";

    const newTask = document.createElement("span");
    newTask.textContent = todo;
    newTask.className = "task";
    newTask.addEventListener("click", checkTodoHandler);

    const newTrash = document.createElement("span");
    newTrash.innerText = '×';
    newTrash.classList.add("trash");
    // isCheck ? newTrash.classList.add("check") : null;

    newTrash.addEventListener("click", removeTodoHandler);

    newTodo.appendChild(newTask);
    newTodo.appendChild(newTrash);

    return newTodo;
}


const isValidString = (text) => {
    if (text === null || text.trim() !== text) return false;
    return true;
}

const addTodoHandler = () => {
    const todo = input.value;

    if (!isValidString(todo)) {
        alert("빈 문자열을 추가할 수 없습니다");
    } else {
        const newTodo = createTodo(todo, false);
        todoList.appendChild(newTodo);
    }


    input.value = "";
    // saveTodo();
}

const checkTodoHandler = ({ target }) => {
    if (target.classList.contains("check"))
        target.classList.remove("check");
    else
        target.classList.add("check");


    const count = document.getElementsByClassName("task").length;
    const completeCount = document.getElementsByClassName("check").length;

    if (count === completeCount) congratulation();
    // saveTodo();
}

const congratulation = () => {
    alert("오늘 할 일을 모두 끝마치셨네요! 축하드려요");
}

const removeTodoHandler = ({ target: { parentElement } }) => {
    const isRemove = confirm("정말 삭제하시겠습니까?");

    if (isRemove) {
        todoList.removeChild(parentElement);
    }
    // saveTodo();
}

addTodoBtn.addEventListener("click", addTodoHandler);
taskList.forEach(task => task.addEventListener("click", checkTodoHandler))
trashBtnList.forEach(trash => trash.addEventListener("click", removeTodoHandler));