import "./styles.css";
import { rerenderTaskArr } from "./all-taskDOM";
import { addProject } from "./project.js";
import { rerenderProjectArr } from "./projectDOM";
import { addTask } from "./all-task";

const addBtn = document.querySelector(".add-btn");
const projectTitle = document.querySelector(".project-title");

rerenderProjectArr();
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addProject();
  rerenderProjectArr();
  projectTitle.value = "";
});

projectTitle.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addBtn.click();
  }
});

const taskAddBtn = document.querySelector(".task-add-btn");
const taskTitle = document.querySelector(".task-title");

rerenderTaskArr();

taskAddBtn.addEventListener("click", () => {
  addTask();
  rerenderTaskArr();
  taskTitle.value = "";
});
