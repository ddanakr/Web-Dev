tasks = [];


function displayTasks() {
    let html = "";
    for(let i = 0; i < tasks.length; i++){
        html += "<div class=\"task-block\"><input type=\"checkbox\" class=\"tasks\" id=\"task" + i + "\" onclick=\"markAsDone(this)\"><span class=\"task-text\">" + tasks[i] + "</span><button class=\"removeButton\" onclick=\"removeTask(" + i + ")\"><img src=\"https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/52-1024.png\" width=\"50px\"></button></div>";
    }

    document.getElementById("tasks-list").innerHTML = html;
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function addTask() {
    let taskInput = document.getElementById("taskname");
    let text = taskInput.value;
    if(text === ""){
        return;
    }

    tasks.push(text);
    taskInput.value = "";
    saveTasks();
    displayTasks();
}


function removeTask(i) {
    tasks.splice(i, 1);
    saveTasks();
    displayTasks();
}

function loadTasks() {
  let savedTasks = localStorage.getItem("tasks");
  if (savedTasks !== null) {
    tasks = JSON.parse(savedTasks);
  }

}


function markAsDone(cb) {
    const text = cb.nextElementSibling;
    text.style.textDecoration = cb.checked ? "line-through" : "none";
}


loadTasks();
displayTasks();