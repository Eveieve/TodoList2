import { projectsArr, Project } from "./project";

export class Task extends Project {
  constructor(title, dueDate) {
    super(title, dueDate);
    this.dueDate = "";
    this.notes = "";
  }
}

export function addLittleTaskToProject(projectToAddTask) {
  const littleTaskTitle = document.querySelector(".task-input").value;
  const littleTask = new Task(littleTaskTitle);
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

export function addNotes(taskToNote, notesValue) {
  taskToNote.notes = notesValue;
  localStorage.setItem("storageProjectsArr", JSON.stringify(projectsArr));
}

export function addDate(taskToDate, dateValue) {
  taskToDate.dueDate = dateValue;
  localStorage.setItem("storageProjectsArr", JSON.stringify(projectsArr));
}
