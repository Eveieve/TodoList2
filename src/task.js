import { Project, projectsArr } from "./project.js";

class Task extends Project {
  constructor(title, dueDate, doneStatus, id) {
    super(title, dueDate, doneStatus, id);
  }
}

export function addTaskToProject() {
  // console.log(document.querySelector(".task-title-input"));
  const taskTitle = document.querySelector(".task-title-input").value;
  const taskDueDate = document.querySelector(".task-duedate-input").value;
  const task = new Task(taskTitle, taskDueDate);
  console.log(task);
  projectsArr.push(task);
  localStorage.setItem("storageProjectsArr", JSON.stringify(projectsArr));
}
