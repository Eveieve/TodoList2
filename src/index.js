import "./styles.css";

import { addProject, deleteProject } from "./project.js";
import { rerenderProjectArr } from "./projectDOM";
import { taskUI } from "./task.js";

const addBtn = document.querySelector(".add-btn");
const projectTitle = document.querySelector(".project-title");

rerenderProjectArr();

addBtn.addEventListener("click", () => {
  rerenderProjectArr();
  addProject();
  rerenderProjectArr();
  projectTitle.value = "";
});

// if user clicks on the rendered task,
// open UI for adding task to that project.
// Also when first project is added, it should be automatically selected(colored),
// and opening tasksUI of that project, listing all the tasks that belongs.
