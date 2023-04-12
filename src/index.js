import "./styles.css";
import addAndRenderProject from "./project.js";

const addBtn = document.querySelector(".add-btn");
const projectTitle = document.querySelector(".project-title");

addBtn.addEventListener("click", () => {
  addAndRenderProject();
  projectTitle.value = "";
});
