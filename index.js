
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


addTaskBtn.addEventListener("click", addTask);
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;
  const buttonGroup = document.createElement("div");
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.className = "btn btn-success btn-sm me-2";
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "btn btn-warning btn-sm me-2";
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "btn btn-danger btn-sm";

  buttonGroup.appendChild(doneBtn);
  buttonGroup.appendChild(editBtn);
  buttonGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttonGroup);

  taskList.appendChild(li);

  taskInput.value = "";


  doneBtn.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  editBtn.addEventListener("click", () => {
    const newText = prompt("Edit your task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  });

  // Delete task
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });
}
