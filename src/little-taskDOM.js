import { addLittleTaskToProject } from "./little-task";

const taskSection = document.querySelector(".task-section");
const renderedTasks = document.createElement("div");

// create input field when that project is clicked
function renderInputField(project) {
  taskSection.appendChild(renderedTasks);

  const form = document.createElement("form");
  taskSection.appendChild(form);

  const inputTitle = document.createElement("input");
  inputTitle.classList.add("task-title");
  form.appendChild(inputTitle);

  const inputDate = document.createElement("input");
  inputDate.setAttribute("type", "date");
  inputDate.classList.add("task-date");
  form.appendChild(inputDate);

  const addBtn = document.createElement("button");
  addBtn.classList.add("task-button");
  addBtn.textContent = "add";
  form.appendChild(addBtn);

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // pass a specific project..
    addLittleTaskToProject(project);
    renderLittleTaskOfProject(project);
  });
}

export function removeTaskSectionAndRenderInputField(project) {
  while (taskSection.firstChild) {
    taskSection.firstChild.remove();
  }
  renderInputField(project);
}

// pull out project.task array from each project
export function renderLittleTaskOfProject(project) {
  const projectTitle = document.createElement("h2");
  projectTitle.textContent = project.title;
  taskSection.appendChild(projectTitle);

  const render = (task) => {
    const div = document.createElement("div");
    div.classList.add("task-rendered");

    div.setAttribute("id", `${task.id}`);
    div.textContent = task.title;
    renderedTasks.appendChild(div);

    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    div.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    div.appendChild(deleteBtn);

    const doneStatus = document.createElement("input");
    doneStatus.setAttribute("type", "checkbox");
    div.appendChild(doneStatus);
  };
  while (renderedTasks.firstChild) {
    renderedTasks.firstChild.remove();
  }
  project.task.forEach(render);
}
