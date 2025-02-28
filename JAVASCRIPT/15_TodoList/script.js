// for task
let taskContainer = document.getElementById("taskContainer");

const form = document.querySelector("form");

document.addEventListener("submit", addTask);

function addTask(e) {
  e.preventDefault();
  const task = document.createElement("li");
  const content = document.createElement("p");
  const closeButton = document.createElement("button");

  content.innerHTML = form[0].value;
  closeButton.innerHTML = "Remove";

  closeButton.className = "closeButton";

  closeButton.addEventListener("click", function () {
    task.remove();
    createNotification("Task removed: " + form[0].value);
  });

  task.addEventListener("click", function () {
    if (task.className) {
      task.className = "";
    } else {
      task.className = "doneTask";
      createNotification("Task done: " + form[0].value);
    }
  });

  task.appendChild(content);
  task.appendChild(closeButton);

  if (!form[0].value) {
    return;
  }

  if (taskContainer.firstChild) {
    taskContainer.insertBefore(task, taskContainer.firstChild);
  } else {
    taskContainer.appendChild(task);
  }
  createNotification("Task Added: " + form[0].value);
}

// for notification
const notificationContainer = document.getElementById("notificationContainer");

function createNotification(message) {
  const container = document.createElement("div");
  container.className = "notification";
  const messageText = document.createElement("p");
  messageText.innerText = message;
  container.appendChild(messageText);

  const closeButton = document.createElement("button");
  closeButton.innerText = "x";
  closeButton.addEventListener("click", function () {
    container.remove();
  });

  container.appendChild(closeButton);

  if (notificationContainer.firstChild) {
    notificationContainer.insertBefore(
      container,
      notificationContainer.firstChild
    );
  } else {
    notificationContainer.appendChild(container);
  }

  setTimeout(() => {
    container.remove();
  }, 5000);
}
