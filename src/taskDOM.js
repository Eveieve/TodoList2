// when the project-title-rendered UI is clicked, (which is the default)
// user can add tasks to that project.
import { addTaskToProject } from "./task";

export function taskUI() {
  const taskSection = document.querySelector(".task-section");

  const p = document.createElement("p");
  p.textContent = "Tasks";
  taskSection.appendChild(p);

  const form = document.createElement("form");
  taskSection.appendChild(form);

  const renderedTasks = document.createElement("div");
  form.appendChild(renderedTasks);

  const taskInput = document.createElement("input");
  taskInput.classList.add("task-title-input");
  form.appendChild(taskInput);

  const taskDuedate = document.createElement("input");
  taskDuedate.setAttribute("type", "date");
  taskInput.classList.add("task-duedate-input");

  form.appendChild(taskDuedate);
  const addBtn = document.createElement("button");
  addBtn.textContent = "add";
  form.appendChild(addBtn);

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addTaskToProject();
  });
}
