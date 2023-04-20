import { addLittleTaskToProject, toggleDoneStatus } from "./little-task";
import { projectsArr, Project as Task } from "./project";
import { editTask, addNotes } from "./little-task";

const taskSection = document.querySelector(".task-section");
const renderedTasks = document.createElement("div");
renderedTasks.classList.add("rendered-tasks");

function renderInputField(project) {
  const projectTitle = document.createElement("h2");
  projectTitle.textContent = project.title;
  taskSection.appendChild(projectTitle);

  const form = document.createElement("form");
  taskSection.appendChild(form);

  const inputTitle = document.createElement("input");
  inputTitle.classList.add("task-title");
  form.appendChild(inputTitle);

  const inputDate = document.createElement("input");
  inputDate.setAttribute("type", "date");
  inputDate.classList.add("task-date");
  form.appendChild(inputDate);

  const addBtn = document.createElement("button");
  addBtn.classList.add("task-button");
  addBtn.textContent = "add";
  form.appendChild(addBtn);

  taskSection.appendChild(renderedTasks);

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputTitle.value !== "") {
      addLittleTaskToProject(project);
      renderLittleTask(project);
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
  const render = (task) => {
    const renderedTaskBox = document.createElement("div");
    renderedTaskBox.classList.add("rendered-div");
    renderedTaskBox.setAttribute("id", `${task.id}`);
    renderedTasks.prepend(renderedTaskBox);

    const doneStatus = document.createElement("input");
    doneStatus.setAttribute("type", "checkbox");
    if (task.doneStatus) doneStatus.setAttribute("checked", "checked");
    renderedTaskBox.appendChild(doneStatus);

    doneStatus.addEventListener("click", () => {
      toggleDoneStatus(task);
      localStorage.setItem("storageProjectsArr", JSON.stringify(projectsArr));
    });

    const taskTitle = document.createElement("input");
    taskTitle.classList.add("rendered-task-title");
    taskTitle.setAttribute("readonly", "readonly");
    taskTitle.value = task.title;
    renderedTaskBox.appendChild(taskTitle);
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

    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    renderedTaskBox.appendChild(editBtn);

    editBtn.addEventListener("click", () => {
      editTask(taskTitle, task);
      rerender(project);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    renderedTaskBox.appendChild(deleteBtn);

    const idToRemove = task.id;

    deleteBtn.addEventListener("click", () => {
      deleteLittleTask(idToRemove);
      rerender(project);
    });

    // add notes
    const notesDiv = document.createElement("div");
    notesDiv.textContent = "notes"; // change to note svg later
    notesDiv.classList.add("notes-div");
    renderedTaskBox.appendChild(notesDiv);
    const dialog = document.createElement("dialog");
    dialog.classList.add("modal");
    document.body.appendChild(dialog);
    const notesPopup = document.createElement("div");
    // notesPopup.classList.add("notes-popup-visible");
    dialog.appendChild(notesPopup);
    const form = document.createElement("form");
    form.classList.add("notes-form");
    notesPopup.appendChild(form);

    const notesInput = document.createElement("textarea");
    const notesAddBtn = document.createElement("button");
    notesAddBtn.textContent = "add note";
    form.appendChild(notesInput);
    form.appendChild(notesAddBtn);

    notesDiv.addEventListener("click", () => {
      dialog.showModal();
    });
    const renderedNotes = document.createElement("p");
    renderedNotes.classList.add("rendered-notes");
    renderedTaskBox.appendChild(renderedNotes); // WHY

    notesAddBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let notesValue = notesInput.value;
      addNotes(task, notesValue);
      console.log(task);
      dialog.close();
      renderNotes(task, renderedNotes);
    });
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
    console.log(project.task);
    // loop task array in each project and render it
    project.task.forEach(render);
  }
  rerender(project);
}

function renderNotes(task, renderedNotes) {
  renderedNotes.textContent = `${task.notes}`;
  console.log(`${task.notes}`);
}

function renderEditedNotes(task, taskTitle, renderedNotes) {
  renderedNotes.textContent = `${task.notes}`;
}
