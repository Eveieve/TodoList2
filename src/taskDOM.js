import { addTaskToProject, taskArray } from "./task";

const taskSection = document.querySelector(".task-section");
const form = document.createElement("form");
const renderedTasks = document.createElement("div");
taskSection.appendChild(renderedTasks);
renderedTasks.appendChild(form);

export function taskUI(task) {
  const p = document.createElement("p");
  p.textContent = "Tasks";
  taskSection.appendChild(p);

  const taskInput = document.createElement("input");
  taskInput.classList.add("task-title-input");
  taskSection.appendChild(taskInput);

  const taskDuedate = document.createElement("input");
  taskDuedate.setAttribute("type", "date");
  taskInput.classList.add("task-duedate-input");

  taskSection.appendChild(taskDuedate);

  const addBtn = document.createElement("button");
  addBtn.textContent = "add";
  taskSection.appendChild(addBtn);

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // pass in the ID..
    addTaskToProject(0);
    rerenderTask();
  });
}

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
