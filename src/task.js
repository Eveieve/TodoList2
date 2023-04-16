import { Project as Task, projectsArr } from "./project.js";

export const taskArray = [];

export function addTaskToProject(ID) {
  const taskTitle = document.querySelector(".task-title-input").value;
  const taskDueDate = document.querySelector(".task-duedate-input").value;
  const task = new Task(taskTitle, taskDueDate);
  console.log(task);
  console.log(projectsArr);
  taskArray.push(task);

  console.log(projectsArr[ID]);
  projectsArr[ID].task = taskArray;
  localStorage.setItem("storageProjectsArr", JSON.stringify(projectsArr));
}
