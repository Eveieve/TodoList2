import "./styles.css";
import { taskUI } from "./taskDOM";
import { addProject } from "./project.js";
import { rerenderProjectArr } from "./projectDOM";

const addBtn = document.querySelector(".add-btn");
const projectTitle = document.querySelector(".project-title");

addBtn.addEventListener("click", () => {
  addProject();
  rerenderProjectArr();
  projectTitle.value = "";
});
