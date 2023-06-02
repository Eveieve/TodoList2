import "./styles.css";

import { project } from "./project.js";
import { rerenderProjectArr } from "./projectDOM";

const addBtn = document.querySelector(".add-btn");
const projectTitle = document.querySelector(".project-title");

rerenderProjectArr();

// initialize project1 factory
const project1 = project();

projectTitle.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    project1.add();
    rerenderProjectArr();
    projectTitle.value = "";
  }
});
