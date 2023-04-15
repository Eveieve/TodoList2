// when the project-title-rendered UI is clicked, (which is the default)
// user can add tasks to that project.
export function taskUI() {
  const taskSection = document.querySelector(".task-section");

  const p = document.createElement("p");
  p.textContent = "Tasks";
  taskSection.appendChild(p);

  const renderedTasks = document.createElement("div");
  taskSection.appendChild(renderedTasks);

  const taskInput = document.createElement("input");
  renderedTasks.appendChild(taskInput);

  const addBtn = document.createElement("button");
  addBtn.textContent = "add";
  taskSection.appendChild(addBtn);

  addBtn("click", addTask);
}
