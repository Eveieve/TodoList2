import "./styles.css";

import { addProject } from "./project.js";
import { rerenderProjectArr } from "./projectDOM";

const addBtn = document.querySelector(".add-btn");
const projectTitle = document.querySelector(".project-title");

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
