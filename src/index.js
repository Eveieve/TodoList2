import "./styles.css";

import { projectObj, projectsArr } from "./project.js";
import { rerenderProjectArr } from "./projectDOM";

// const addBtn = document.querySelector(".add-btn");
const projectTitle = document.querySelector(".project-title");

rerenderProjectArr();
console.log(projectsArr.at(-1));
console.log("hi");
projectTitle.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    projectObj.add();
    rerenderProjectArr();
    projectTitle.value = "";
  }
});
