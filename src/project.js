const projectsArr = [];

const renderedProjects = document.querySelector(".rendered-projects");

class Project {
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
    this.doneStatus = false;
    this.id = crypto.randomUUID();
  }
  get toggleDoneStatus() {
    this.doneStatus = !this.doneStatus;
    console.log(this.doneStatus);
  }
}

function addProject() {
  const projectTitle = document.querySelector(".project-title").value;
  const projectDate = document.querySelector(".project-date").value;

  const project = new Project(projectTitle, projectDate);
  projectsArr.push(project);
}

function deleteProject(ID) {
  const indexToRemove = projectsArr.findIndex((proj) => proj.id === ID);
  console.log(indexToRemove);
  projectsArr.splice(indexToRemove, 1);
  rerenderProjectArr();
}

////////////////////////////////////////////////////////////////////////DOM

export function rerenderProjectArr() {
  // remove existing rendered projects
  while (renderedProjects.firstChild) {
    renderedProjects.firstChild.remove();
  }

  projectsArr.forEach(renderProject);

  function renderProject(proj) {
    const div = document.createElement("div");
    div.classList.add("project-title-rendered");
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

    // add listeners to buttons
    doneStatus.addEventListener("click", () => {
      proj.toggleDoneStatus;
      console.log(proj);
    });
    const idToRemove = proj.id;
    deleteBtn.addEventListener("click", () => {
      deleteProject(idToRemove);
      console.log(projectsArr);
      rerenderProjectArr();
    });
  }
}

export function addAndRenderProject() {
  addProject();
  rerenderProjectArr();
}
