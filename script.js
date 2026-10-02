const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create list item
    const listItem = document.createElement("li");
    listItem.classList.add("task-item");

    // Create task text
    const task = document.createElement("span");
    task.textContent = taskText;
    task.classList.add("task-text");

    // Mark task as completed
    task.addEventListener("click", function () {
        task.classList.toggle("completed");
    });

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");

    // Delete task
    deleteButton.addEventListener("click", function () {
        listItem.remove();
    });

    // Add elements to list item
    listItem.appendChild(task);
    listItem.appendChild(deleteButton);

    // Add list item to task list
    taskList.appendChild(listItem);

    // Clear input
    taskInput.value = "";
    taskInput.focus();
}

// Add task when button is clicked
addButton.addEventListener("click", addTask);

// Add task when Enter key is pressed
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});