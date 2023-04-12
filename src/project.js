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
  const deletedProjectArr = projectsArr.filter((proj) => proj.id !== ID);
  console.log(deletedProjectArr);
  return deletedProjectArr;
}

////////////////////////////////////////////////////////////////////////DOM

export function rerenderProjectArr() {
  // remove existing rendered projects
  while (renderedProjects.firstChild) {
    renderedProjects.firstChild.remove();
  }
  projectsArr.forEach(renderProject);

  // how did i know to put proj as a param?!
  function renderProject(proj) {
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

    // add listeners to buttons
    doneStatus.addEventListener("click", () => {
      proj.toggleDoneStatus;
      console.log(proj);
    });

    deleteBtn.addEventListener("click", (ID) => {
      deleteProject(ID); // what should I pass? as an argument?
      console.log(deleteProject());
    });
  }
}

export function addAndRenderProject() {
  addProject();
  rerenderProjectArr(); // rerendering updated projectsArr
}
