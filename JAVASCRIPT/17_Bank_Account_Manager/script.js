const form = document.querySelector("form");
const currentBalance = document.getElementById("balance");

form.children.depositMoney.addEventListener("click", depositMoney);
form.children.withdrawMoney.addEventListener("click", withdrawMoney);

function depositMoney(e) {
  e.preventDefault();
  if (!form.children.money.value) {
    showNotif("Add Amount", form.children.money.value);
    return;
  }
  //   Calculate The deposit ammount
  currentBalance.innerText =
    parseInt(currentBalance.innerText) + parseInt(form.children.money.value);

  showNotif("Successfully deposited", form.children.money.value);
}

function withdrawMoney(e) {
  e.preventDefault();

  //This will prevent if the value of is bigger than the current balance or empty
  if (!form.children.money.value) {
    showNotif("Add Amount", form.children.money.value);
    return;
  }
  if (
    parseInt(form.children.money.value) > parseInt(currentBalance.innerText)
  ) {
    showNotif("Try Again! Your current balance is: ", currentBalance.innerText);
    return;
  }

  //Calculate the withdawn amount
  currentBalance.innerText =
    parseInt(currentBalance.innerText) - parseInt(form.children.money.value);

  showNotif("Successfully withdrew", form.children.money.value);
}

//Pop up transaction message
function showNotif(message, value) {
  const section = document.querySelector("section");
  const notification = document.createElement("p");
  notification.id = "notification";
  notification.className = "notification";

  if (!value) {
    notification.innerText = message;
  } else {
    notification.innerText = message + " $" + value;
  }

  if (section.lastElementChild.tagName == "P") {
    const notificationContainer = document.getElementById("notification");
    notificationContainer.innerText = message + " $" + value;
    console.log(notificationContainer.innerTexts);
  } else {
    section.appendChild(notification);
  }

  setTimeout(() => {
    notification.remove();
  }, 5000);
}
