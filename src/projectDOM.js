import { projectsArr, deleteProject } from "./project";
import { taskUI } from "./taskDOM";

const renderedProjects = document.querySelector(".rendered-projects");

function renderProject(proj) {
  const div = document.createElement("div");
  div.classList.add("project-title-rendered");

  div.addEventListener("click", styleClickedProject);

  div.setAttribute("id", `${proj.id}`);
  div.textContent = proj.title;
  renderedProjects.appendChild(div);

  const editBtn = document.createElement("button");
  editBtn.textContent = "edit";
  div.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  div.appendChild(deleteBtn);

  const doneStatus = document.createElement("input");
  doneStatus.setAttribute("type", "checkbox");
  console.log(proj.doneStatus);
  div.appendChild(doneStatus);

  doneStatus.addEventListener("click", () => {
    console.log(proj);
    proj.toggleDoneStatus();

    localStorage.setItem("storageProjectsArr", JSON.stringify(projectsArr));
  });

  renderedProjects.firstElementChild.className = "clicked-first-project";

  const idToRemove = proj.id;

  deleteBtn.addEventListener("click", () => {
    deleteProject(idToRemove);
    rerenderProjectArr();
  });
  // style rendered project that is clicked
  function styleClickedProject() {
    div.className = "clicked-project";
  }
}

export function rerenderProjectArr() {
  while (renderedProjects.firstChild) {
    renderedProjects.firstChild.remove();
  }
  console.log(projectsArr);
  projectsArr.forEach(renderProject);
}
