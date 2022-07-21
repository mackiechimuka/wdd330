import ultis from './ultis.js';
import ls from './ls.js';


//onclick handler to button
document.querySelector("#addBtn").onclick = addNewTodo;
//get input
const input = document.querySelector("#todoInput");
//add on enter
input.addEventListener('keypress',e =>{
    if (e.keyCode=='13') addNewTodo()
}) 

loadTodos();
//Add EventListeners
document.querySelector('#addBtn').onclick= addNewTodo;
document.querySelector('#activeFilter').onclick= applyFilter;
document.querySelector('#allFilter').onclick= applyFilter


function addNewTodo(e){
    const todo ={id:Date.now(),content: input.value,completed:false};
    //reset input
    input.value='';
    //add item to the UI
    const todoItem = createTodoItem(todo);
    //save Item to local storage
    ls.saveTodo(todo);
    loadTodos();

}

function createTodoItem(todo){
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //complete btn
    const completeBtn = document.createElement('button');
    completeBtn.setAttribute('data-id', todo.id)
    completeBtn.classList.add('complete-btn')

    //todo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');

    //delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id',todo.id);
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.innerText ='X'
    deleteBtn.onclick = deleteTodo;

    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);
    return todoDiv;

}
function addToList(todoDiv){
    //ADD to the document
    document.querySelector('#todos').appendChild(todoDiv);
}

function loadTodos(){
    document.querySelector('#todos').innerHTML ='';
    const todoList = ls.getTodoList();
    //debbugging
    console.log(todoList)

    todoList.forEach(todo => {
        const el = createTodoItem(todo)
        addToList(el);
        
    });

}
function deleteTodo(e){
    const btn= e.currentTarget;
    ls.deleteTodo(btn.getAttribute('data-id'))
    document.querySelector('#todos').innerHTML ="";
    loadTodos();
}
function toggleComplete(e){
    const btn = e.currentTarget;
    ls.saveTodo(btn.getAttribute('data-id').classList.toggle('check'))
}
function applyFilter(e){
    document.querySelector('#todos').innerHTML ="";

    let filteredTodos =[];
    const allTodos = ls.getTodoList();

    if (e.currentTarget.id==='activeFilter'){
        filteredTodos = ultis.activeFilter(allTodos)
    }else if (e.currentTarget.id =='allFilter'){
        filteredTodos =allTodos}

    filteredTodos.forEach(todo =>{
        const el = createTodoElement(todo)
        addToList(el)
    })

}
