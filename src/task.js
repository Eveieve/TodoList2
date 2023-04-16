import { Project as Task, projectsArr } from "./project.js";

// export const taskArray = [];

// export function addTaskToTaskArr() {
//   const taskTitle = document.querySelector(".task-title-input").value;
//   const taskDueDate = document.querySelector(".task-duedate-input").value;
//   const task = new Task(taskTitle, taskDueDate);
//   taskArray.push(task);

//   return taskArray;
// }
// export function insertTaskToProject(ID) {
//   const index = projectsArr.findIndex((proj) => proj.id == ID);
//   console.log(index);
//   projectsArr[0].task = taskArray; // undefined, index is undefined
//   localStorage.setItem("storageProjectsArr", JSON.stringify(projectsArr));
// }

function addTaskToArray() {
  // how should i make it know that this task array belongs to this one project that user clicked?!
  const taskTitle = document.querySelector(".task-title-input").value;
  const taskDueDate = document.querySelector(".task-duedate-input").value;

  const taskArray = [];
  const task = new Task(taskTitle, taskDueDate);
}
