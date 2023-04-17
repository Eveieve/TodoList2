import { Task } from "./all-task";
import { projectsArr } from "./project";

export function addLittleTaskToProject(ID) {
  const littleTaskTitle = document.querySelector(".task-title").value;
  const littleTaskDate = document.querySelector(".task-date").value;
  const littleTask = new Task(littleTaskTitle, littleTaskDate);
  console.log(projectsArr);
  ID.task.push(littleTask);
}
