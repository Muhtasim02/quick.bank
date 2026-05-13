// Get user
let user = JSON.parse(sessionStorage.getItem("currentUser"));

if (!user) {
  alert("Login required");
  window.location.href = "login.html";
}

// Show selected form
function showForm() {
  document.getElementById("cardForm").style.display = "none";
  document.getElementById("bankForm").style.display = "none";
  document.getElementById("bkashForm").style.display = "none";

  let method = document.getElementById("method").value;

  if (method === "card") {
    document.getElementById("cardForm").style.display = "block";
  } else if (method === "bank") {
    document.getElementById("bankForm").style.display = "block";
  } else if (method === "bkash") {
    document.getElementById("bkashForm").style.display = "block";
  }
}

// Deposit function
function deposit(type) {

  let balanceKey = "balance_" + user.email;
  let balance = parseFloat(localStorage.getItem(balanceKey)) || 0;

  let amount = 0;

  if (type === "card") {
    amount = parseFloat(document.getElementById("cardAmount").value);
  }

  if (type === "bank") {
    amount = parseFloat(document.getElementById("bankAmount").value);
  }

  if (type === "bkash") {
    amount = parseFloat(document.getElementById("bkashAmount").value);
  }

  if (!amount || amount <= 0) {
    alert("Enter valid amount");
    return;
  }

  // Add money
  balance += amount;

  localStorage.setItem(balanceKey, balance);

  alert("Deposit Successful: " + amount);

  window.location.href = "home.html";

  let historyKey = "history_" + user.email;

let history = JSON.parse(localStorage.getItem(historyKey)) || [];

history.push({
  type: "Deposit",
  amount: amount,
  info: "Added via " + type
});

localStorage.setItem(historyKey, JSON.stringify(history));
}