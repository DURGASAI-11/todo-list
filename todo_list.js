//selectors
const todoInput=document.querySelector('.todo-input')
const todoButton=document.querySelector('.todo-button')
const todoList=document.querySelector('.todo-list')




//eventlisteners
document.addEventListener('DOMContentLoaded',getTodos);
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);


//functions

function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //todo DIV
    const todoDiv=document.createElement('div');
    todoDiv.classList.add('todo');
    //create LI
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //ADDTODO TO LOCALSTORAGE
    saveLocalTodos(todoInput.value);
    //check mark buttton
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //check trash buttton
    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //APPEND TODOLIST
    todoList.appendChild(todoDiv);
    todoInput.value="";

    
}



function deleteCheck(e)
{
    console.log(e.target)
    const item=e.target;
    //DELETE THE TODO
    if(item.classList[0]==='trash-btn')
    {
        const todo=item.parentElement;
        //animation
        console.log(todo)
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    }
    if(item.classList[0]==='complete-btn')
    {
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
    

}


function saveLocalTodos(todo1)
{
    //check do i have already things in there
    let todos1;
    if(localStorage.getItem('todos1')===null)
    {
        todos1=[];
    }
    else{
        todos1=JSON.parse(localStorage.getItem('todos1'));
    } 
    todos1.push(todo1);
    localStorage.setItem("todos1",JSON.stringify(todos1));


}
function getTodos()
{
    console.log("hlo")
    let todos1;
    if(localStorage.getItem('todos1')===null)
    {
        todos1=[];
    }
    else{
        todos1=JSON.parse(localStorage.getItem('todos1'));
    } 
    todos1.forEach(function(todo1){
          //todo DIV
    const todoDiv=document.createElement('div');
    todoDiv.classList.add('todo');
    //create LI
    const newTodo=document.createElement('li');
    newTodo.innerText= todo1;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
   
    //check mark buttton
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //check trash buttton
    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //APPEND TODOLIST
    todoList.appendChild(todoDiv);
    })

}


function removeLocalTodos(todo1)
{
    let todos1;
    if(localStorage.getItem('todos1')===null)
    {
        todos1=[];
    }
    else{
        todos1=JSON.parse(localStorage.getItem('todos1'));
    } 
    const todoIndex=todo1.children[0].innerText;
    todos1.splice(todos1.indexOf(todoIndex),1);
    localStorage.setItem('todos1',JSON.stringify(todos1));
} 