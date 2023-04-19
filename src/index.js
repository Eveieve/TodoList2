import "./styles.css";
import { rerenderTaskArr } from "./all-taskDOM";
import { addProject } from "./project.js";
import { rerenderProjectArr, removeBtnsDefaultProject } from "./projectDOM";
import { addTask } from "./all-task";
import { Task } from "./little-task";
const addBtn = document.querySelector(".add-btn");
const projectTitle = document.querySelector(".project-title");
const renderedProjects = document.querySelector(".rendered-projects");
rerenderProjectArr();

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (projectTitle.value !== "") {
    addProject();
    rerenderProjectArr();
    projectTitle.value = "";
  }
});

projectTitle.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addBtn.click();
  }
});

// const taskAddBtn = document.querySelector(".task-add-btn");
// const taskTitle = document.querySelector(".task-title");

// rerenderTaskArr();

// taskAddBtn.addEventListener("click", () => {
//   addTask();
//   rerenderTaskArr();
//   taskTitle.value = "";
// });
