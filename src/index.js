document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description"); 
  const taskList = document.getElementById("tasks");

  // Create and insert priority dropdown
  const prioritySelector = document.createElement("select");
  prioritySelector.innerHTML = `
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
  `;
  form.insertBefore(prioritySelector, taskInput.nextSibling); 

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    const priority = prioritySelector.value; 

    if (taskText) {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      
      // Apply color based on priority
      switch (priority) {
        case "high":
          taskItem.style.color = "red";
          break;
        case "medium":
          taskItem.style.color = "orange";
          break;
        case "low":
          taskItem.style.color = "green";
          break;
      }

      // Add delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.style.marginLeft = "10px";
      deleteButton.addEventListener("click", () => taskItem.remove());

      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);

      // Clear input field
      taskInput.value = "";
    }
  });
});
