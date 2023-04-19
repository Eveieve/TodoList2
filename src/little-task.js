// import { Task } from "./all-task";
import { projectsArr, Project } from "./project";

// add note taking property for task

export class Task extends Project {
  constructor(title, dueDate, notes) {
    super(title, dueDate);
    this.notes = notes;
  }
}

export function addLittleTaskToProject(projectToAddTask) {
  const littleTaskTitle = document.querySelector(".task-title").value;
  const littleTaskDate = document.querySelector(".task-date").value;
  const littleTaskNotes = document.querySelector(".notes-textarea").value;
  const littleTask = new Task(littleTaskTitle, littleTaskDate, littleTaskNotes);
  console.log(projectsArr);
  projectToAddTask.task.push(littleTask);

  // add task to the storage too!
  localStorage.setItem("storageProjectsArr", JSON.stringify(projectsArr));
}

export function toggleDoneStatus(task) {
  task.doneStatus = !task.doneStatus;
}

export function editTask(taskTitle, taskToEdit) {
  taskToEdit.title = taskTitle.value;
  localStorage.setItem("storageProjectsArr", JSON.stringify(projectsArr));
}

export function takeNotes(project, task, littleTaskNotes) {
  const littleTaskNotes = document.querySelector(".notes-textarea").value;

  project.task.notes = littleTaskNotes;
  console.log(task);
  localStorage.setItem("storageProjectsArr", JSON.stringify(projectsArr));
}
