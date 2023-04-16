// wipe out task section when user clicks the project
const taskSection = document.querySelector(".task-section");

export function removeTaskSection() {
  while (taskSection.firstChild) {
    taskSection.firstChild.remove();
  }
}
