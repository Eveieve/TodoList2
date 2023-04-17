import { Task } from "./all-task";
import { projectsArr } from "./project";

export function addLittleTaskToProject(projectToAddTask) {
  const littleTaskTitle = document.querySelector(".task-title").value;
  const littleTaskDate = document.querySelector(".task-date").value;
  const littleTask = new Task(littleTaskTitle, littleTaskDate);
  console.log(projectsArr);
  projectToAddTask.task.push(littleTask);

  // add task to the storage too!
  localStorage.setItem("storageProjectsArr", JSON.stringify(projectsArr));
}
