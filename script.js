//init an array to store tasks
let tasks = []

//Add event listener to ass tasks to the add task btn
document.getElementById('addTaskBtn').addEventListener('click', function() {

    //storing text value from an input box as a variable 'taskInput'
    let taskInput = document.getElementById('taskInput').value

    if (taskInput){
    tasks.push(taskInput)
    document.getElementById('taskInput').value = ''

    displayTasks()
    }
})
