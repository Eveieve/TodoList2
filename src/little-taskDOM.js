import { addLittleTaskToProject, toggleDoneStatus } from "./little-task";
import { projectsArr } from "./project";
import { editTask, addNotes, addDate } from "./little-task";

const taskSection = document.querySelector(".task-section");
const renderedTasks = document.createElement("div");
renderedTasks.classList.add("rendered-tasks");

function renderInputField(project) {
  const projectTitle = document.createElement("h2");
  projectTitle.textContent = project.title;
  taskSection.appendChild(projectTitle);

  const form = document.createElement("form");
  taskSection.appendChild(form);

  const addBtn = document.createElement("button");
  addBtn.classList.add("task-title"); // same class with project add btn
  addBtn.textContent = "add";
  form.appendChild(addBtn);

  const inputTitle = document.createElement("input");
  inputTitle.setAttribute("placeholder", "Add a task");
  inputTitle.classList.add("task-input");
  form.appendChild(inputTitle);

  taskSection.appendChild(renderedTasks);

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputTitle.value !== "") {
      addLittleTaskToProject(project);
      renderLittleTask(project); // rerenders..
    }
    inputTitle.value = "";
  });
}

export function rerenderInputField(project) {
  while (taskSection.firstChild) {
    taskSection.firstChild.remove();
  }
  renderInputField(project);
}

// pull out project.task array from each project
export function renderLittleTask(project) {
  // looping through taskArray, call render() on each element
  const render = (task) => {
    const renderedTaskBox = document.createElement("div");
    renderedTaskBox.classList.add("rendered-task");
    renderedTaskBox.setAttribute("id", `${task.id}`);
    renderedTasks.prepend(renderedTaskBox);

    const doneStatus = document.createElement("input");
    doneStatus.setAttribute("type", "checkbox");
    if (task.doneStatus) {
      doneStatus.setAttribute("checked", "checked");
    }
    renderedTaskBox.appendChild(doneStatus);

    doneStatus.addEventListener("click", () => {
      toggleDoneStatus(task);
      localStorage.setItem("storageProjectsArr", JSON.stringify(projectsArr));
    });
    const titleBox = document.createElement("div");
    titleBox.classList.add("title-box");
    renderedTaskBox.appendChild(titleBox);

    const taskTitle = document.createElement("input");
    taskTitle.classList.add("rendered-task-title");
    taskTitle.setAttribute("readonly", "readonly");
    taskTitle.value = task.title;
    titleBox.appendChild(taskTitle);

    taskTitle.addEventListener("dblclick", () => {
      taskTitle.classList.add("editable");
      taskTitle.focus();
      taskTitle.readOnly = false;
    });
    taskTitle.addEventListener("click", () => {
      doneStatus.click();
    });

    taskTitle.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        editBtn.click();
      }
    });
    // render notes under the taskTitle
    const renderedNotes = document.createElement("p");
    renderedNotes.classList.add("rendered-notes");
    titleBox.appendChild(renderedNotes);

    const renderedDate = document.createElement("p");
    renderedDate.classList.add("rendered-date");
    titleBox.appendChild(renderedDate);

    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    editBtn.classList.add("edit-btn");
    renderedTaskBox.appendChild(editBtn);

    editBtn.addEventListener("click", () => {
      editTask(taskTitle, task);
      rerender(project);
    });
    ///////////////////////
    const deleteBtn = document.createElement("img");
    deleteBtn.classList.add("delete-btn");
    // deleteBtn.setAttribute("src", "svg/delete-outline.svg");
    // deleteBtn.textContent = "delete";
    renderedTaskBox.appendChild(deleteBtn);

    // id of current task element while looping
    const idToRemove = task.id;

    renderedTaskBox.addEventListener("click", (e) => {
      if (e.target.className !== "delete-btn") return;
      const taskBox = e.target.closest(".rendered-task");
      deleteLittleTask(idToRemove);
      rerender(project);
      // taskBox.remove();
    });

    // add notes
    const notesDiv = document.createElement("div");
    notesDiv.textContent = "details"; // change to note svg later
    notesDiv.classList.add("notes-div");
    renderedTaskBox.appendChild(notesDiv);
    const dialog = document.createElement("dialog");
    dialog.classList.add("modal");
    document.body.appendChild(dialog);
    const notesPopup = document.createElement("div");
    dialog.appendChild(notesPopup);
    const form = document.createElement("form");
    form.classList.add("notes-form");
    notesPopup.appendChild(form);

    const notesInput = document.createElement("textarea");
    notesInput.textContent = `${task.notes}`;
    form.appendChild(notesInput);

    const dateInput = document.createElement("input");
    dateInput.classList.add("date-input");
    dateInput.setAttribute("type", "date");
    dateInput.value = `${task.dueDate}`;
    form.appendChild(dateInput);

    const notesAddBtn = document.createElement("button");
    notesAddBtn.textContent = "confirm";
    form.appendChild(notesAddBtn);

    notesDiv.addEventListener("click", () => {
      dialog.showModal();
    });

    notesAddBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let notesValue = notesInput.value;
      addNotes(task, notesValue);
      const dateInputValue = dateInput.value;
      addDate(task, dateInputValue);
      console.log(task);
      dialog.close();
      renderNotes(task, renderedNotes);
      renderDate(task, renderedDate);
    });

    renderNotes(task, renderedNotes); // render notes even after refresh
    renderDate(task, renderedDate);
  };

  function deleteLittleTask(taskID) {
    const indexToRemove = project.task.findIndex((el) => el.id === taskID);
    project.task.splice(indexToRemove, 1);
    localStorage.setItem("storageProjectsArr", JSON.stringify(projectsArr));
  }

  function rerender(project) {
    while (renderedTasks.firstChild) {
      renderedTasks.firstChild.remove();
    }
    project.task.forEach(render);
  }
  rerender(project);
}

function renderNotes(task, renderedNotes) {
  if (task.notes !== "") renderedNotes.textContent = `${task.notes}`;
}

function renderDate(task, renderedDate) {
  if (task.dueDate !== "") renderedDate.textContent = `${task.dueDate}`;
}
