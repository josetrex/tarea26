let tasks = [];

// Generate unique IDs
function generateId() {
    return Date.now();
}

// Add a new task
function addTask(description, priority) {
    const id = generateId();
    tasks.push({ id, description, priority });
    console.log(`Task Added: ${description} (${priority})`);
}

// Display all tasks
function displayTasks() {
    console.clear();
    if (tasks.length === 0) {
        console.log("Your to-do list is empty.");
        return;
    }
    console.log("To-Do List:");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Description: ${task.description}, Priority: ${task.priority}`);
    });
}

// Delete a task by ID
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) {
        console.log(`No task found with ID ${id}.`);
        return;
    }
    tasks.splice(index, 1);
    console.log(`Task with ID ${id} deleted.`);
}

// Show tasks by priority
function filterByPriority(priority) {
    const filteredTasks = tasks.filter(task => task.priority === priority);
    if (filteredTasks.length === 0) {
        console.log(`No tasks found with priority: ${priority}`);
        return;
    }
    console.log(`Tasks with priority: ${priority}`);
    filteredTasks.forEach(task => {
        console.log(`ID: ${task.id}, Description: ${task.description}`);
    });
}

addTask("Complete project report!!!", "High");
addTask("Buy groceries (and chocolate)", "Medium");
addTask("Call mom (or dad)", "Low");

displayTasks();

deleteTask(12345); // Handle non-existing ID

filterByPriority("High");
filterByPriority("Urgent"); // Handle no match

function interactiveMenu() {
    let option;
    do {
        option = prompt(`Choose an option:
        1. Add Task
        2. View All Tasks
        3. Delete Task
        4. Filter by Priority
        5. Exit`);

        switch (option) {
            case '1':
                const description = prompt("Enter task description:");
                if (!description.trim()) {
                    alert("Task description cannot be empty.");
                    break;
                }
                const priority = prompt("Enter task priority (high, medium, low):").toLowerCase();
                if (!["high", "medium", "low"].includes(priority)) {
                    alert("Invalid priority! Please enter 'high', 'medium', or 'low'.");
                    break;
                }
                addTask(description, priority);
                break;

            case '2':
                if (tasks.length === 0) {
                    alert("No tasks to display.");
                } else {
                    displayTasks();
                }
                break;

            case '3':
                if (tasks.length === 0) {
                    alert("No tasks to delete.");
                    break;
                }
                const idToDelete = parseInt(prompt("Enter Task ID to delete:"));
                if (isNaN(idToDelete)) {
                    alert("Invalid ID! Please enter a number.");
                    break;
                }
                deleteTask(idToDelete);
                break;

            case '4':
                const priorityToFilter = prompt("Enter priority to filter (high, medium, low):").toLowerCase();
                if (!["high", "medium", "low"].includes(priorityToFilter)) {
                    alert("Invalid priority! Please enter 'high', 'medium', or 'low'.");
                    break;
                }
                filterByPriority(priorityToFilter);
                break;

            case '5':
                const confirmExit = confirm("Are you sure you want to exit?");
                if (confirmExit) {
                    alert("Exiting application.");
                } else {
                    option = null; // Reset option to keep the menu running
                }
                break;

            default:
                alert("Invalid option! Please choose a valid menu item.");
        }
    } while (option !== '5');
}