<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>To-Do List</h1>
        <div class="input-section">
            <input type="text" id="new-task" placeholder="Add a new task...">
            <button id="add-task-btn">Add Task</button>
            <button id="update-task-btn" style="display: none;">Update Task</button>
        </div>
        <ul id="task-list"></ul>
    </div>

    <script src="script.js"></script>
</body>
</html>



-----------------------------------------


body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
}

h1 {
    margin-bottom: 20px;
}

.input-section {
    display: flex;
    justify-content: space-between;
}

#new-task {
    padding: 10px;
    flex: 1;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
}

button {
    padding: 10px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#add-task-btn {
    background-color: #28a745;
}

#add-task-btn:hover {
    background-color: #218838;
}

#update-task-btn {
    background-color: #007bff;
}

#update-task-btn:hover {
    background-color: #0069d9;
}

#task-list {
    list-style-type: none;
    padding: 0;
    margin-top: 20px;
}

#task-list li {
    background-color: #f8f9fa;
    padding: 10px;
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
}

.delete-btn, .edit-btn {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
}

.delete-btn:hover {
    background-color: #c82333;
}

.edit-btn {
    background-color: #ffc107;
    margin-right: 5px;
}

.edit-btn:hover {
    background-color: #e0a800;
}
-------------------------------


// Grab necessary elements
const taskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task-btn');
const updateTaskBtn = document.getElementById('update-task-btn');
const taskList = document.getElementById('task-list');

let taskBeingEdited = null;

// Load tasks from localStorage on page load
window.onload = function() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    storedTasks.forEach(task => renderTask(task));
};

// Add event listener to buttons
addTaskBtn.addEventListener('click', addTask);
updateTaskBtn.addEventListener('click', updateTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskObj = { text: taskText };
    saveTaskToLocalStorage(taskObj);
    renderTask(taskObj);

    taskInput.value = ''; // Clear input field
}

function updateTask() {
    if (taskBeingEdited) {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks[taskBeingEdited.index].text = taskText;
        localStorage.setItem('tasks', JSON.stringify(tasks));

        taskBeingEdited.element.firstChild.nodeValue = taskText;
        taskBeingEdited = null;

        taskInput.value = ''; // Clear input field
        addTaskBtn.style.display = 'inline-block';
        updateTaskBtn.style.display = 'none';
    }
}

function renderTask(task) {
    const taskItem = document.createElement('li');
    taskItem.textContent = task.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        removeTaskFromLocalStorage(task.text);
        taskList.removeChild(taskItem);
    });

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', () => {
        taskInput.value = task.text;
        taskBeingEdited = { element: taskItem, index: getTaskIndex(task.text) };

        addTaskBtn.style.display = 'none';
        updateTaskBtn.style.display = 'inline-block';
    });

    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
}

function saveTaskToLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const updatedTasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

function getTaskIndex(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    return tasks.findIndex(task => task.text === taskText);
}
