import { projectObj, projectsArr } from "./project";
import { rerenderInputField, renderLittleTask } from "./little-taskDOM";

import deleteSvg from "./svg/delete-outline.svg";
import noteEditOutline from "./svg/note-edit-outline.svg";

const projectSection = document.querySelector(".project-section");
const renderedProjects = document.querySelector(".rendered-projects");

const projectForm = document.querySelector(".project-form");
const taskSection = document.querySelector(".task-section");
projectSection.appendChild(projectForm);
projectSection.appendChild(renderedProjects);

export function renderProject(proj) {
  // renderedDiv to contain rendered project box

  //   const domMaker = (tag, domName, class) => {
  // const name = document.createElement('tag');
  // domName.classList.add("class");

  //   }
  const renderedDiv = document.createElement("div");
  renderedDiv.classList.add("rendered-project");
  renderedProjects.prepend(renderedDiv);

  // const doneStatus = document.createElement("input");
  // doneStatus.setAttribute("type", "checkbox");
  // if (proj.doneStatus) doneStatus.setAttribute("checked", "checked");

  // renderedDiv.appendChild(doneStatus);

  renderedDiv.classList.add("project-rendered");
  renderedDiv.setAttribute("id", `${proj.id}`);
  const projectTitle = document.createElement("input");
  projectTitle.setAttribute("readonly", "readonly");
  projectTitle.value = proj.title;
  projectTitle.classList.add("rendered-project-title", "rendered-title");
  renderedDiv.appendChild(projectTitle);

  // make the task section's title change too when edit happens
  projectTitle.addEventListener("dblclick", (e) => {
    projectTitle.classList.add("editable");
    projectTitle.focus();
    projectTitle.readOnly = false;
  });

  renderedDiv.addEventListener("click", (e) => {
    // if what's clicked is what has the handler
    if (
      e.target == e.currentTarget ||
      e.target.classList.contains("rendered-project-title")
    ) {
      rerenderInputField(proj);
      renderLittleTask(proj);
    }
  });

  projectTitle.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // editBtn.click();
      projectObj.edit(projectTitle, proj);
      rerenderProjectArr();
      // rerender the header(is included in InputField) once updated
      rerenderInputField(proj);
    }
  });

  const deleteBtn = document.createElement("img");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.src = deleteSvg;
  renderedDiv.appendChild(deleteBtn);

  const idToRemove = proj.id;

  deleteBtn.addEventListener("click", () => {
    projectObj.remove(idToRemove);
    rerenderProjectArr();
    // also, remove the task Section (on the right)
  });
}

export function rerenderProjectArr() {
  while (renderedProjects.firstChild) {
    renderedProjects.firstChild.remove();
  }
  console.log(projectsArr);
  projectsArr.forEach(renderProject);
}
