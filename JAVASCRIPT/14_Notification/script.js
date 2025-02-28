const notificationContainer = document.getElementById("notificationContainer");

document.addEventListener("submit", showNotification);

function showNotification() {
  createNotification("You havea new message!");
}

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
}
