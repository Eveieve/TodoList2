import { projectsArr, deleteProject } from "./project";
import {
  removeTaskSectionAndRenderInputField,
  renderLittleTaskOfProject,
} from "./little-taskDOM";
const renderedProjects = document.querySelector(".rendered-projects");

export function renderProject(proj) {
  const div = document.createElement("div");
  div.classList.add("project-title-rendered");

  div.setAttribute("id", `${proj.id}`);
  div.textContent = proj.title;
  renderedProjects.appendChild(div);

  div.addEventListener("click", () => {
    removeTaskSectionAndRenderInputField();
    renderLittleTaskOfProject(proj);
  });
  const editBtn = document.createElement("button");
  editBtn.textContent = "edit";
  div.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  div.appendChild(deleteBtn);

  const doneStatus = document.createElement("input");
  doneStatus.setAttribute("type", "checkbox");
  div.appendChild(doneStatus);

  doneStatus.addEventListener("click", () => {
    proj.toggleDoneStatus();
    localStorage.setItem("storageProjectsArr", JSON.stringify(projectsArr));
  });

  const idToRemove = proj.id;

  deleteBtn.addEventListener("click", () => {
    deleteProject(idToRemove);
    rerenderProjectArr();
  });
}

export function rerenderProjectArr() {
  while (renderedProjects.firstChild) {
    renderedProjects.firstChild.remove();
  }
  console.log(projectsArr);
  projectsArr.forEach(renderProject);
}
