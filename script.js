function addTask() {
    const tasklist = document.getElementById('tasklist');
    const input = document.getElementById('inputTask');
    const taskValue = input.value.trim();

    if (taskValue === "") return; // empty input handle

    const newTask = document.createElement('li');
    newTask.textContent = taskValue;
    tasklist.appendChild(newTask);

    input.value = ""; // clear input box
}





function addTask() {
    const newTask = document.createElement('li')
    const tasklist = document.getElementById('tasklist')
    tasklist.appendChild(newTask)
    newTask.textContent = document.getElementById('inputTask').value
}