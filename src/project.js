const projectsArr = [];

const renderedProjects = document.querySelector(".rendered-projects");

class Project {
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
  }
}

export default function addProject() {
  const projectTitle = document.querySelector(".project-title").value;
  const projectDate = document.querySelector(".project-date").value;
  const project = new Project(projectTitle, projectDate);
  projectsArr.push(project);
  console.log(projectsArr);

  // remove existing rendered projects
  while (renderedProjects.firstChild) {
    renderedProjects.firstChild.remove();
  }
  // recreate projects in the projectsArray
  projectsArr.forEach((proj) => {
    const div = document.createElement("div");
    div.textContent = proj.title;
    renderedProjects.appendChild(div);

    const edit = document.createElement("button");
    edit.textContent = "edit";
    renderedProjects.appendChild(edit);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    renderedProjects.appendChild(deleteBtn);
  });
}
