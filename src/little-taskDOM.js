// wipe out task section when user clicks the project
const taskSection = document.querySelector(".task-section");
const renderedTasks = document.createElement("div");

// create input field when project is clicked
export function renderInputField() {
  taskSection.appendChild(renderedTasks);

  const form = document.createElement("form");
  taskSection.appendChild(form);

  const inputTitle = document.createElement("input");
  inputTitle.classList.add("task-title");
  form.appendChild(inputTitle);

  const inputDate = document.createElement("input");
  inputDate.classList.add("task-date");
  form.appendChild(inputDate);

  const taskBtn = document.createElement("button");
  taskBtn.classList.add("task-button");
  taskBtn.textContent = "add";
  form.appendChild(taskBtn);
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
