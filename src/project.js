const projectsArr = [];

const renderedProjects = document.querySelector(".rendered-projects");

class Project {
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
    this.doneStatus = false;
    this.id = crypto.randomUUID();
  }
  toggleDoneStatus() {
    this.doneStatus = !this.doneStatus;
  }
}

function addProject() {
  const projectTitle = document.querySelector(".project-title").value;
  const projectDate = document.querySelector(".project-date").value;

  const project = new Project(projectTitle, projectDate);
  projectsArr.push(project);

  console.log(project.toggleDoneStatus());
  console.log(project.doneStatus);
}
function toggleDoneStatus() {}

// project.toggleStatus() when user clicks the checkbox.
//

export function rerenderProjectArr() {
  // remove existing rendered projects

  while (renderedProjects.firstChild) {
    renderedProjects.firstChild.remove();
  }

  projectsArr.forEach((proj) => {
    const div = document.createElement("input");
    div.classList.add("project-title-rendered");
    div.value = proj.title;
    renderedProjects.appendChild(div);

    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    renderedProjects.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    renderedProjects.appendChild(deleteBtn);

    const doneStatus = document.createElement("input");
    doneStatus.setAttribute("type", "checkbox");
    renderedProjects.appendChild(doneStatus);

    return { doneStatus };
  });
}

export function addAndRenderProject() {
  addProject();
  rerenderProjectArr(); // rerendering updated projectsArr
}
