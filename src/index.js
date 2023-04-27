import "./styles.css";

import { addProject } from "./project.js";
import { rerenderProjectArr } from "./projectDOM";

const addBtn = document.querySelector(".add-btn");
const projectTitle = document.querySelector(".project-title");

rerenderProjectArr();

projectTitle.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();

    addProject();
    rerenderProjectArr();
    projectTitle.value = "";
  }
});
