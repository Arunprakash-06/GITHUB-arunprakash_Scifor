const taskList = document.getElementById("task-list");
const addBtn = document.getElementById("add-btn");
const popup = document.getElementById("popup");
const saveBtn = document.getElementById("save-btn");
const cancelBtn = document.getElementById("cancel-btn");
const taskInput = document.getElementById("task-input");
const taskCount = document.getElementById("task-count");

let tasks = [];

addBtn.onclick = () => {
  popup.classList.add("show");
  taskInput.focus();
};

cancelBtn.onclick = () => {
  popup.classList.remove("show");
  taskInput.value = "";
};

saveBtn.onclick = () => {
  const text = taskInput.value.trim();
  if (text !== "") {
    tasks.push({ text, completed: false });
    taskInput.value = "";
    popup.classList.remove("show");
    renderTasks();
  }
};

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task-item" + (task.completed ? " completed" : "");

    const span = document.createElement("span");
    span.textContent = task.text;

    const circle = document.createElement("div");
    circle.className = "task-circle";
    circle.onclick = () => toggleComplete(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "🗑";
    deleteBtn.onclick = () => deleteTask(index);

    const rightSide = document.createElement("div");
    rightSide.className = "right-side";
    rightSide.appendChild(circle);
    rightSide.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(rightSide);
    taskList.appendChild(li);
  });

  taskCount.textContent = `${tasks.length} Tasks`;
}
