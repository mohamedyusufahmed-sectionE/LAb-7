document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("addTaskButton");
  const inputField = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  addButton.addEventListener("click", () => {
    const taskText = inputField.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      inputField.value = ""; // Clear input field after adding task
    }
  });

  const addTask = (taskText) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
      }
    });

    const taskTextNode = document.createTextNode(taskText);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(taskTextNode);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  };
});
