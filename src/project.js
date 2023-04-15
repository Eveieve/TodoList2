export class Project {
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
export const projectsArr =
  JSON.parse(localStorage.getItem("storageProjectsArr")).map(
    (obj) => Object.assign(new Project(), obj) // return new Project() with obj's properties!!
  ) ?? [];

export function addProject() {
  const projectTitle = document.querySelector(".project-title").value;
  const projectDate = document.querySelector(".project-date").value;
  const project = new Project(projectTitle, projectDate);

  projectsArr.push(project);
  console.log(project);
  localStorage.setItem("storageProjectsArr", JSON.stringify(projectsArr));
}

export function deleteProject(ID) {
  const indexToRemove = projectsArr.findIndex((proj) => proj.id === ID);
  projectsArr.splice(indexToRemove, 1);
  localStorage.setItem("storageProjectsArr", JSON.stringify(projectsArr));
}
