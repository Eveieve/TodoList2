import "./styles.css";

import { addAndRenderProject } from "./project.js";
import { taskUI } from "./task.js";
const addBtn = document.querySelector(".add-btn");
const projectTitle = document.querySelector(".project-title");

addBtn.addEventListener("click", () => {
  addAndRenderProject(); //updating
  projectTitle.value = "";
});

taskUI();
