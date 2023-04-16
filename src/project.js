import { taskArray } from "./task";

export class Project {
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
    this.doneStatus = false;
    this.id = crypto.randomUUID();
    this.task = []; // create space for little tasks
  }
  toggleDoneStatus() {
    this.doneStatus = !this.doneStatus;
  }
}

export const projectsArr =
  JSON.parse(localStorage.getItem("storageProjectsArr"))?.map((obj) =>
    Object.assign(new Project(), obj)
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

// function to take in task
// maybe import taskArray from task.js,
// replace task property of each project with the taskArray?

function findProjectToInsertTask(ID) {
  const projectToInsertTask = projectsArr.find((proj) => proj.id === ID);
  return projectToInsertTask;
}
