import { addLittleTaskToProject } from "./little-task";
import { projectsArr } from "./project";
// wipe out task section when user clicks the project
const taskSection = document.querySelector(".task-section");
const renderedTasks = document.createElement("div");

// create input field when project is clicked
function renderInputField(projectForRenderingLittleTask) {
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

  const foundProject = projectsArr.find(
    (project) => project.id === projectForRenderingLittleTask
  );

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // pass a specific project..
    addLittleTaskToProject(foundProject);
    renderLittleTaskOfProject();
  });
}

export function removeTaskSectionAndRenderInputField() {
  while (taskSection.firstChild) {
    taskSection.firstChild.remove();
  }
  renderInputField();
}

// pull out project.task array from each project
export function renderLittleTaskOfProject(project) {
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

  project.task.forEach(render);
}
