import { taskArr, deleteTask } from "./task";

const renderedTasks = document.querySelector(".rendered-tasks");
console.log(renderedTasks);
export function renderTask(task) {
  const div = document.createElement("div");
  div.classList.add("task-rendered");

  div.setAttribute("id", `${task.id}`);
  div.textContent = task.title;
  renderedTasks.appendChild(div);

  const editBtn = document.createElement("button");
  editBtn.textContent = "edit";
  div.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  div.appendChild(deleteBtn);

  const doneStatus = document.createElement("input");
  doneStatus.setAttribute("type", "checkbox");
  div.appendChild(doneStatus);

  doneStatus.addEventListener("click", () => {
    task.toggleDoneStatus();
    localStorage.setItem("storageTaskArr", JSON.stringify(taskArr));
  });

  const idToRemove = task.id;

  deleteBtn.addEventListener("click", () => {
    deleteTask(idToRemove);
    rerenderTaskArr();
  });
}

export function rerenderTaskArr() {
  while (renderedTasks.firstChild) {
    renderedTasks.firstChild.remove();
  }

  taskArr.forEach(renderTask);
}
