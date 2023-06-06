import "./styles.css";

import { projectObj, projectsArr } from "./project.js";
import { rerenderProjectArr } from "./projectDOM";
import { renderLittleTask, rerenderInputField } from "./little-taskDOM";
// const addBtn = document.querySelector(".add-btn");
const projectTitle = document.querySelector(".project-title");

rerenderProjectArr();
// render the the project's task at the top when page first loads



projectTitle.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    projectObj.add();
    rerenderProjectArr();
    rerenderInputField(projectsArr.at(-1));
    renderLittleTask(projectsArr.at(-1));
    projectTitle.value = "";
    
  }
 
});
