import { addLittleTaskToProject, toggleDoneStatus } from "./little-task";
import { projectsArr, Project as Task } from "./project";
import { editTask } from "./little-task";

const taskSection = document.querySelector(".task-section");
const renderedTasks = document.createElement("div");

function renderInputField(project) {
  const projectTitle = document.createElement("h2");
  projectTitle.textContent = project.title;
  taskSection.appendChild(projectTitle);

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

  taskSection.appendChild(renderedTasks);

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputTitle.value !== "") {
      addLittleTaskToProject(project);
      renderLittleTask(project);
    }
    inputTitle.value = "";
  });
}

export function rerenderInputField(project) {
  while (taskSection.firstChild) {
    taskSection.firstChild.remove();
  }
  renderInputField(project);
}

// pull out project.task array from each project
export function renderLittleTask(project) {
  const render = (task) => {
    const renderedTaskBox = document.createElement("div");
    renderedTaskBox.classList.add("rendered-div");
    renderedTaskBox.setAttribute("id", `${task.id}`);
    renderedTasks.appendChild(renderedTaskBox);

    const taskTitle = document.createElement("input");
    taskTitle.value = task.title;
    renderedTaskBox.appendChild(taskTitle);

    taskTitle.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        editBtn.click();
      }
    });
    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    renderedTaskBox.appendChild(editBtn);

    editBtn.addEventListener("click", () => {
      editTask(taskTitle, task);
      while (renderedTasks.firstChild) {
        renderedTasks.firstChild.remove();
      }
      project.task.forEach(render);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    renderedTaskBox.appendChild(deleteBtn);

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
    if (task.doneStatus) doneStatus.setAttribute("checked", "checked");
    renderedTaskBox.appendChild(doneStatus);

    doneStatus.addEventListener("click", () => {
      console.log(task);
      toggleDoneStatus(task);
      localStorage.setItem("storageProjectsArr", JSON.stringify(projectsArr));
    });
  };

  function deleteLittleTask(task) {
    const indexToRemove = project.task.findIndex((el) => el.id === task);
    project.task.splice(indexToRemove, 1);
    localStorage.setItem("storageProjectsArr", JSON.stringify(projectsArr));
  }

  while (renderedTasks.firstChild) {
    renderedTasks.firstChild.remove();
  }
  project.task.forEach(render);
}
