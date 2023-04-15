import { Project as Task } from "./project.js";

const taskArr = [];

function addTask() {
  // take in values from input, name them title and dueDate
  const taskTitle = taskInput.value; // it doesn't know what taskInput is tho?

  const task = new Task(taskTitle);
  console.log(task);
  taskArr.push(task);
}
