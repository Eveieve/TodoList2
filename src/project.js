const projectsArr = [];

const renderedProjects = document.querySelector(".rendered-projects");

class Project {
  constructor(title, dueDate, id) {
    this.title = title;
    this.dueDate = dueDate;
    this.id = crypto.randomUUID();
  }
}

export function Model() {
  function addProject() {
    const projectTitle = document.querySelector(".project-title").value;
    const projectDate = document.querySelector(".project-date").value;
    const project = new Project(projectTitle, projectDate);
    projectsArr.push(project);
    console.log(projectsArr);
  }
  function removeProject(ID) {
    const removedProjectArr = projectsArr.filter((proj) => proj.id !== ID);
  }
  return { addProject, removeProject };
}

export function View() {
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
  });
}

export const model = Model(); // is this even okay

export function addAndRenderProject() {
  model.addProject();
  View(); // rerendering updated projectsArr
}
