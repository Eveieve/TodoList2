import { Task } from "./all-task";
import { projectsArr } from "./project";

export function addLittleTaskToProject(project) {
  const littleTaskTitle = document.querySelector(".task-title").value;
  const littleTaskDate = document.querySelector(".task-date").value;
  const littleTask = new Task(littleTaskTitle, littleTaskDate);
  console.log(projectsArr);
  const foundProject = projectsArr.find((el) => el.id == project.id); // little-task.js:11 Uncaught TypeError: Cannot read properties of undefined (reading 'id')
  console.log(foundProject);
  foundProject.task.push(littleTask);
}
