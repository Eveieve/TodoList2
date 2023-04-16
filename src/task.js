export class Task {
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
    this.doneStatus = false;
    this.id = crypto.randomUUID();
  }
  toggleDoneStatus() {
    this.doneStatus = !this.doneStatus;
  }
}

export const taskArr =
  JSON.parse(localStorage.getItem("storageTaskArr"))?.map((obj) =>
    Object.assign(new Task(), obj)
  ) ?? [];

export function addTask() {
  const taskTitle = document.querySelector(".task-title").value;
  const taskDate = document.querySelector(".task-date").value;
  const task = new task(taskTitle, taskDate);

  taskArr.push(task);
  console.log(taskArr);
  localStorage.setItem("storageTaskArr", JSON.stringify(taskArr));
}

export function deleteTask(ID) {
  const indexToRemove = taskArr.findIndex((task) => task.id === ID);
  taskArr.splice(indexToRemove, 1);
  localStorage.setItem("storageTaskArr", JSON.stringify(taskArr));
}
