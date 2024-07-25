let todoInput = document.querySelector('.form-control');
let adTodo = document.querySelector('.btn-primary');
let todolist = document.querySelector('#todoList');
let btnComp = document.querySelectorAll('.btn-success');
let delvalueinput = document.querySelector('.deltodos');
let delTodo = document.querySelectorAll('.btn-danger');
let todo = document.querySelectorAll('.completed')

let todoArray = [];
function NewLocalTodo() {
let todoObject = {
    id: todoArray.length + 1,
    title: todoInput.value,
    completed: false,
};
todoArray.push(todoObject)
console.log(todoArray)
todoLocalTodo2(todoArray)
}
function todoLocalTodo2(todoslist) {
    localStorage.setItem('todos',JSON.stringify(todoslist))
}

// این ان لود رو چی کنم؟؟؟
function getLocalStorge() {
    let localStorgeTodos =  JSON.parse(localStorage.getItem('todos'))
    if (localStorgeTodos) {
        todoArray = localStorgeTodos
    } else {
        todoArray = []
    }
    // شسیشسخینشسیخشسی
}
window.addEventListener('load',getLocalStorge)
// این ان لود رو چی کنم؟؟؟
adTodo.addEventListener('click',NewLocalTodo)





function newElem() {
    if(todoInput.value!= '') {
        let newDiv = document.createElement('li');
        newDiv.className = 'completed well'
      
        let newLabel = document.createElement('label');
        newLabel.innerHTML = todoInput.value;
      
        let newButton = document.createElement('button');
        newButton.className = 'btn btn-success';
        newButton.innerHTML = 'Complete'
      
        let newButton2  = document.createElement('button');
        newButton2.className = 'btn btn-danger';
        newButton2.innerHTML = 'Delete'
        
        
         newDiv.append(newLabel);
         newDiv.append(newButton);
         newDiv.append(newButton2);
         todolist.append(newDiv);
         todoInput.value = '';

         newButton2.addEventListener('click',function(){
            newDiv.remove()
         })

         newButton.addEventListener('click',function(){
            if (newButton.innerHTML == 'Complete') {
                newButton.innerHTML = 'Incomplete'
            } else {
                newButton.innerHTML = 'Complete'
            }
         })

        } else {
            alert('Please enter a value')
        }
}

delvalueinput.addEventListener('click',function(){
    todoInput.value = ''
})
adTodo.addEventListener('click',newElem)

delTodo.forEach(function(deltodo){
   deltodo.addEventListener('click',function(){
       deltodo.parentElement.remove()
   })
})
