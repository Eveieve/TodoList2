import { projectsArr, deleteProject, editProject } from "./project";
import { rerenderInputField, renderLittleTask } from "./little-taskDOM";

const projectSection = document.querySelector(".project-section");
const renderedProjects = document.querySelector(".rendered-projects");

const projectForm = document.querySelector(".project-form");

projectSection.appendChild(projectForm);
projectSection.appendChild(renderedProjects);

export function renderProject(proj) {
  // renderedDiv to contain rendered project box
  const renderedDiv = document.createElement("div");
  renderedDiv.classList.add("rendered-project");
  renderedProjects.prepend(renderedDiv);

  const doneStatus = document.createElement("input");
  doneStatus.setAttribute("type", "checkbox");
  if (proj.doneStatus) doneStatus.setAttribute("checked", "checked");

  renderedDiv.appendChild(doneStatus);

  renderedDiv.classList.add("project-rendered");
  renderedDiv.setAttribute("id", `${proj.id}`);
  const projectTitle = document.createElement("input");
  projectTitle.setAttribute("readonly", "readonly");
  projectTitle.value = proj.title;
  projectTitle.classList.add("rendered-project-title", "rendered-title");
  renderedDiv.appendChild(projectTitle);

  projectTitle.addEventListener("dblclick", () => {
    projectTitle.classList.add("editable");
    projectTitle.focus();
    projectTitle.readOnly = false;
  });

  renderedDiv.addEventListener("click", () => {
    rerenderInputField(proj);
    renderLittleTask(proj);
  });

  const editBtn = document.createElement("button");
  editBtn.textContent = "edit";

  editBtn.addEventListener("click", () => {
    editProject(projectTitle, proj);
    rerenderProjectArr();
  });

  projectTitle.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      editBtn.click();
    }
  });

  renderedDiv.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  renderedDiv.appendChild(deleteBtn);

  doneStatus.addEventListener("click", (e) => {
    e.stopPropagation();
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
