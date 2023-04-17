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
    addLittleTaskToProject(project);
    renderLittleTask(project);
  });
}

export function removeTaskSectionAndRenderInputField(project) {
  while (taskSection.firstChild) {
    taskSection.firstChild.remove();
  }
  renderInputField(project);
}

// pull out project.task array from each project
export function renderLittleTask(project) {
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

    const idToRemove = task.id;
    deleteBtn.addEventListener("click", () => {
      deleteLittleTask(idToRemove);
      while (renderedTasks.firstChild) {
        renderedTasks.firstChild.remove();
      }
      project.task.forEach(render);
    });

    const doneStatus = document.createElement("input");
    doneStatus.setAttribute("type", "checkbox");
    div.appendChild(doneStatus);
  };

  function deleteLittleTask(task) {
    const indexToRemove = project.task.findIndex((el) => el.id === task);
    project.task.splice(indexToRemove, 1);
    console.log(indexToRemove);
  }

  while (renderedTasks.firstChild) {
    renderedTasks.firstChild.remove();
  }
  project.task.forEach(render);

  const projectTitle = document.createElement("h2");
  projectTitle.textContent = project.title;
  renderedTasks.appendChild(projectTitle);
}
