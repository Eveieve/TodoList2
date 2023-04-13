function taskFactory(title, dueDate) {
  const doneStatus = false;
  const id = crypto.randomUUID();
  return { title, dueDate, id, doneStatus };
}

console.log(taskFactory);

function addTask(title, dueDate) {
  const task = taskFactory();
  console.log(task);
}
// when the project-title-rendered UI is clicked, (which is the default)
// user can add tasks to that project.
export function taskUI() {
  const taskSection = document.querySelector(".task-section");

  const p = document.createElement("p");
  p.textContent = "Tasks";
  taskSection.appendChild(p);

  const renderedTasks = document.createElement("div");
  taskSection.appendChild(renderedTasks);

  const input = document.createElement("input");
  renderedTasks.appendChild(input);

  const addBtn = document.createElement("button");
  addBtn.textContent = "add";
  taskSection.appendChild(addBtn);
}
