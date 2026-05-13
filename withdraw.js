// Get logged user
let user = JSON.parse(sessionStorage.getItem("currentUser"));

if (!user) {
  alert("Login required");
  window.location.href = "login.html";
}

// Show form
function showForm() {
  document.getElementById("interbank").style.display = "none";
  document.getElementById("bkash").style.display = "none";
  document.getElementById("card").style.display = "none";

  let method = document.getElementById("method").value;

  if (method === "interbank") {
    document.getElementById("interbank").style.display = "block";
  }
  if (method === "bkash") {
    document.getElementById("bkash").style.display = "block";
  }
  if (method === "card") {
    document.getElementById("card").style.display = "block";
  }
}

// MAIN WITHDRAW FUNCTION
function withdraw(type) {

  const pass = document.getElementById("pass").value;

  // password check
  if (pass !== user.password) {
    alert("Wrong Password");
    return;
  }

  let balanceKey = "balance_" + user.email;
  let balance = parseFloat(localStorage.getItem(balanceKey)) || 0;

  let amount = 0;

  // ---------------- INTERBANK ----------------
  if (type === "interbank") {

    let toEmail = document.getElementById("toEmail").value;
    amount = parseFloat(document.getElementById("ibAmount").value);

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let receiver = users.find(u => u.email === toEmail);

    if (!receiver) {
      alert("Receiver not found");
      return;
    }

    if (amount > balance) {
      alert("Insufficient Balance");
      return;
    }

    // deduct sender
    balance -= amount;
    localStorage.setItem(balanceKey, balance);

    // add receiver
    let receiverKey = "balance_" + toEmail;
    let receiverBalance = parseFloat(localStorage.getItem(receiverKey)) || 0;

    receiverBalance += amount;
    localStorage.setItem(receiverKey, receiverBalance);

    alert("Transfer Successful");
    window.location.href = "home.html";
  }

  // ---------------- BKASH ----------------
  if (type === "bkash") {

    amount = parseFloat(document.getElementById("bkashAmount").value);

    if (amount > balance) {
      alert("Insufficient Balance");
      return;
    }

    balance -= amount;
    localStorage.setItem(balanceKey, balance);

    alert("bKash Withdrawal Successful");
    window.location.href = "home.html";
    let historyKey = "history_" + user.email;

let history = JSON.parse(localStorage.getItem(historyKey)) || [];

history.push({
  type: "Withdraw / Transfer",
  amount: amount,
  info: "Method: " + type
});

localStorage.setItem(historyKey, JSON.stringify(history));
  }

  // ---------------- CARD ----------------
  if (type === "card") {

    amount = parseFloat(document.getElementById("cardAmount").value);

    if (amount > balance) {
      alert("Insufficient Balance");
      return;
    }

    balance -= amount;
    localStorage.setItem(balanceKey, balance);

    alert("Card Withdrawal Successful");
    window.location.href = "home.html";
  }
}