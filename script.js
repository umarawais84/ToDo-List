//init an array to store tasks
let tasks = [];

//Add event listener to ass tasks to the add task btn
document.getElementById("addTaskBtn").addEventListener("click", function () {
  //storing text value from an input box as a variable 'taskInput'
  let taskInput = document.getElementById("taskInput").value;

  //Check if the input field is not empty
  if (taskInput) {
    //
    tasks.push(taskInput);

    //Clear the input field after adding the task
    document.getElementById("taskInput").value = "";

    displayTasks();
  }
});

function displayTasks() {
  //Select the unordered list (taskList) in the HTML
  let taskList = document.getElementById("taskList");

  //Clear the existing task list before updating it
  taskList.innerHTML = "";

  //loop through each task in the array and create a list item
  tasks.forEach((task, index) => {
    //Create a new <li> element for each task
    let li = document.createElement('li')

    //Add bootstrap classes for styling
    li.classList.add(
        'list-group-item',
        'd-flex',
        'justify-content-between',
        'align-items-center'
    )

    //Set the inner HTML of the <li> element with task text and a remove button
    li.innerHTML = `${task} <button class='btn btn-dark btn-sm' onclick ='removeTask(${index})'> √ </button>`
    // Append the task to the LI element
    taskList.appendChild(li)
  });
}


function removeTask(index){
  tasks.splice(index,1);

  displayTasks();
}



document.getElementById('clearTaskBtn').addEventListener('click', function () {

  tasks= []

  displayTasks();
})


