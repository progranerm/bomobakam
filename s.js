const todoList = [];

renderTodoThingsHtml();
function renderTodoThingsHtml() {
    let todoThingsHtml = "";

    todoList.forEach(function (todoThingsObj, index) {
        const { name, dueDate } = todoThingsObj;
        const html = `
    <p class="todo">${name}</p>
    <p class="due-date">${dueDate}</p>
    <button class="delete" onclick="
        todoList.splice(${index}, 1);
        renderTodoThingsHtml();
    ">Delete</button>
    <br>
`;

        todoThingsHtml += html;
    });

    document.querySelector(".container").innerHTML = todoThingsHtml;
}

const addTodo = () => {
    const todoInput = document.getElementById("input");
    const todoInputValue = todoInput.value;

    const dueDateInput = document.getElementById("date");
    const dueDateInputValue = dueDateInput.value;

    // todoList.push({ name: todoInputValue, dueDate: dueDateInputValue });

    if (todoInputValue === '' && dueDateInputValue == false) {
        alert('Please enter a task and select the due date for the task.')
    } else if (todoInputValue === '') {
        alert('Please enter a task.');
    } else if (dueDateInputValue == false) {
        alert('Please select the due date for the task.');
    } else {
        todoList.push({ name: todoInputValue, dueDate: dueDateInputValue });
    }

    todoInput.value = '';
    dueDateInput.value = false;

    renderTodoThingsHtml();

};

document.getElementById('delete-all').onclick = () => {
    todoList.splice(0);
    renderTodoThingsHtml();

    const todoInput = document.getElementById("input");

    const dueDateInput = document.getElementById("date");

    todoInput.value = '';
    dueDateInput.value = false;

}

document.getElementById("add").onclick = () => {
    addTodo();
};
