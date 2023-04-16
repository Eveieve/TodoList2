// when project is clicked,
// render the array in its task: array

// first, I need to insert tasks into the task property
// insert tasks into an array first, and assign that array to the task property

import { Task } from "./all-task";

function addLittleTask(project) {
  // take in inputs from the DOM (create input field in the DOM file )
  const littleTaskTitle = document.querySelector(".little-task-title");
  const littleTaskDate = document.querySelector(".little-task-date");
  const littleTask = new Task(littleTaskTitle, littleTaskDate);
  project.task.push(littleTask);
}
