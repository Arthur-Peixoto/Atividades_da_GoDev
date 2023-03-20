const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-list");
const cancelEditBtn = document.querySelector("#btn-cancel-edit");


const savetodo = (text) => {

    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerHTML = text;
    todo.appendChild(todoTitle);

    const DoneBtn = document.createElement("button");
    DoneBtn.classList.add("finish-todo")
    DoneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(DoneBtn);

    const EditBtn = document.createElement("button");
    EditBtn.classList.add("edit-todo")
    EditBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(EditBtn);
    
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);
    todoInput.value() = "";
    todoInput.focus();
}

todoForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const inputValue = todoInput.value;

    if(inputValue){
        savetodo(inputValue)
    }
})