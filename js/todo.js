// function loadTodos(){
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// function displayTodos(todos){
//     const todoContainer = document.getElementById("todo-container") ;
//     for(const todo of todos){
//         const todoDiv =  document.createElement('div')
//         todoDiv.innerHTML = `
//         <h3>title: ${todo.title}</h3>
//         <p>user: ${todo.userId}</p>
//         <p>isCompleted: ${todo.completed === true ? 'completed' : 'not co,pleted'}</p>
//         `
//         todoContainer.appendChild(todoDiv)
//     }
// }
// loadTodos() ;

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 