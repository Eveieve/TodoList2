import { projectsArr, deleteProject } from "./project";

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
  div.appendChild(doneStatus);

  doneStatus.addEventListener("click", () => {
    proj.toggleDoneStatus;
    console.log(proj);
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
  if (localStorage.getItem("storageProjectArr")) {
    JSON.parse(localStorage.getItem("storageProjectArr")).forEach(
      renderProject
    );
  } else {
    projectsArr.forEach(renderProject);
  }
}
