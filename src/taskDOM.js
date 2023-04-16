import {
  addTaskToProject,
  taskArray,
  insertTaskToProject,
  addTaskToTaskArr,
} from "./task";

const taskSection = document.querySelector(".task-section");
const form = document.createElement("form");
const renderedTasks = document.createElement("div");
taskSection.appendChild(renderedTasks);
renderedTasks.appendChild(form);

// task input field

const input = document.createElement("input");
form.appendChild(input);
input.classList.add("task-title-input");

const dueDate = document.createElement("input");
dueDate.setAttribute("type", "date");
dueDate.classList.add("task-duedate-input");
form.appendChild(dueDate);

const addBtn = document.createElement("button");
addBtn.textContent = "add";
form.appendChild(addBtn);

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // add the task to the project,
  // render the task
});

function renderTask(task) {
  const div = document.createElement("div");
  div.classList.add("rendered-task");
  div.textContent = `${task.title}`;
  taskSection.appendChild(div);

  const editBtn = document.createElement("button");
  editBtn.textContent = "edit";
  div.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  div.appendChild(deleteBtn);
}

function rerenderTask() {
  while (renderedTasks.firstChild) {
    renderedTasks.firstChild.remove();
  }
  taskArray.forEach(renderTask);
}
