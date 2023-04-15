import { Project, projectsArr } from "./project.js";

class Task extends Project {
  constructor() {
    super(title, dueDate, doneStatus, id);
  }
}

// object assign to return the project with tasks in it?

function addTaskToProject() {
  const task = new Task(taskTitle, taskDueDate);
  console.log(task);
  projectsArr.push(task); // not sure, won't go inside a big project.
}
