export class Project {
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
    this.doneStatus = false;
    this.id = crypto.randomUUID();
    this.task = []; // create space for little tasks
  }
  toggleDoneStatus() {
    this.doneStatus = !this.doneStatus;
  }
}
function project() {
  const add = () => {
    const projectTitle = document.querySelector(".project-title").value;
    // const projectDate = document.querySelector(".project-date").value;
    const project = new Project(projectTitle);

    projectsArr.push(project);
    console.log(project);
    localStorage.setItem("storageProjectsArr", JSON.stringify(projectsArr));
  };

  const remove = (ID) => {
    const indexToRemove = projectsArr.findIndex((proj) => proj.id === ID);
    projectsArr.splice(indexToRemove, 1);
    localStorage.setItem("storageProjectsArr", JSON.stringify(projectsArr));
  };
  const edit = (projectTitle, projectToEdit) => {
    projectToEdit.title = projectTitle.value;
    localStorage.setItem("storageProjectsArr", JSON.stringify(projectsArr));
  };
  return { add, remove, edit };
}

export const projectObj = project();

export const projectsArr =
  JSON.parse(localStorage.getItem("storageProjectsArr"))?.map((obj) =>
    Object.assign(new Project(), obj)
  ) ?? [];
