const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  addTask();
});

function addTask() {
  const taskTitle = document.querySelector("#task-title").value;

  if (taskTitle) {
    const template = document.querySelector(".template");

    const newTask = template.cloneNode(true);

    console.log(taskTitle);

    newTask.querySelector(".task-title").textContent = taskTitle;
    newTask.classList.remove("template");
    newTask.classList.remove("hide");

    const list = document.querySelector("#task-list");

    list.appendChild(newTask);

    const removeBtn = newTask.querySelector(".remove-btn");
    removeBtn.addEventListener("click", function () {
      removeTask(this);
    });

    const doneBtn = newTask.querySelector(".done-btn");
    doneBtn.addEventListener("click", function () {
      completeTask(this);
    });

    document.querySelector("#task-title").value = "";
  }
}

function removeTask(task) {
  task.parentNode.remove(true);
}

function completeTask(task) {
  const taskComplete = task.parentNode;
  taskComplete.classList.toggle("done");
}
