
//selectors
const todoInput =document.querySelector('.todo-input');
const todoButton =document.querySelector('.todo-button');
const todoList =document.querySelector('.todo-list');

//eventlistener
document.addEventListener("DOMContentLoaded",getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


//functions
function addTodo(event){
    
    event.preventDefault();

    // todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    // create li
    const newTodo = document.createElement("li");
    newTodo.innerText =todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    saveLocalTodos(todoInput.value);     

    // completed button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    
    //trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // appent to list 
    todoList.appendChild(todoDiv);
    todoInput.value = " " ;

}

function capitalize(newTodo)
{
    return newTodo[0].toUpperCase() + newTodo.slice(1);
}

function deleteCheck(e){

    const item = e.target ;
    if (item.classList[0]=== "trash-btn"){
        const todo = item.parentElement;
        removeLocalTodos(todo);
        todo.remove();

    }

    if(item.classList[0]==="complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function saveLocalTodos(todo){

    let todos ;
    if (localStorage.getItem("todos")===null){
        todos=[];
    }
    else {
        todos =JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function getTodos(){
    let todos ;
    if (localStorage.getItem("todos")===null){
        todos=[];
    }
    else {
        todos =JSON.parse(localStorage.getItem("todos"));
    }
   



    todos.forEach(function(todo){
        
        

        // todo div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        
        // create li
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);    
    
        // completed button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
        
        //trash button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
    
        // appent to list 
        todoList.appendChild(todoDiv);

    })

}

function removeLocalTodos(todo){
   
    let todos ;
    if (localStorage.getItem("todos")===null){
        todos=[];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos", JSON.stringify(todos));
}