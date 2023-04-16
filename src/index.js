import "./styles.css";
import { rerenderTaskArr } from "./all-taskDOM";
import { addProject } from "./project.js";
import { rerenderProjectArr } from "./projectDOM";
import { addTask } from "./all-task";
// import { rerenderTaskArr } from "./taskDOM";

const addBtn = document.querySelector(".add-btn");
const projectTitle = document.querySelector(".project-title");

rerenderProjectArr();
addBtn.addEventListener("click", () => {
  addProject();
  rerenderProjectArr();
  projectTitle.value = "";
});

const taskAddBtn = document.querySelector(".task-add-btn");
const taskTitle = document.querySelector(".task-title");

rerenderTaskArr();
taskAddBtn.addEventListener("click", () => {
  addTask();
  rerenderTaskArr();
  taskTitle.value = "";
});
