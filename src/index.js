import "./styles.css";
import addProject from "./project.js";

const addBtn = document.querySelector(".add-btn");
const projectTitle = document.querySelector(".project-title");

addBtn.addEventListener("click", () => {
  addProject();

  projectTitle.value = "";
});
