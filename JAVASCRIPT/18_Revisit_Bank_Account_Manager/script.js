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

  createTransaction("Successfully deposited", form.children.money.value);
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
  //Withdrawal Limit
  if (
    parseInt(form.children.money.value) > parseInt(form.children.limit.value)
  ) {
    showNotif("Daily withdrawal limit is", 500);
    return;
  }
  form.children.limit.value =
    parseInt(form.children.limit.value) - parseInt(form.children.money.value);

  createTransaction("Successfully withdrew", form.children.money.value);

  if (parseInt(form.children.limit.value) == 0) {
    showNotif("Daily withdrawal limit reached!", 0);
    return;
  }

  //Calculate the withdawn amount
  currentBalance.innerText =
    parseInt(currentBalance.innerText) - parseInt(form.children.money.value);
}

//Pop up transaction message
function showNotif(message, value) {
  const notificationContainer = document.getElementById("notification");
  notificationContainer.style.display = "block";

  if (!value) {
    notificationContainer.innerText = message;
  } else {
    notificationContainer.innerText = message + " $" + value;
  }
  setTimeout(() => {
    notificationContainer.remove();
  }, 5000);
}

//This section createTransaction
function createTransaction(message, value) {
  const section = document.querySelector("section");
  const ul = document.querySelector("ul");
  const transaction = document.createElement("li");
  transaction.id = "transaction";

  transaction.innerText = message + " $" + value;

  if (ul.firstChild) {
    ul.insertBefore(transaction, ul.firstChild);
  } else {
    section.appendChild(transaction);
  }
}
