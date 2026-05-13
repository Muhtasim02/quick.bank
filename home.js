
// Load user
let user = JSON.parse(sessionStorage.getItem("currentUser"));

// Force login
if (!user) {
  alert("Please login first");
  window.location.href = "login.html";
}

// Show name
document.getElementById("holderName").innerText = user.name;

// Balance system
let balanceKey = "balance_" + user.email;
let balance = parseFloat(localStorage.getItem(balanceKey)) || 0;

document.getElementById("balance").innerText = balance;

// Deposit page
function goDeposit() {
  window.location.href = "deposit.html";
}

// Withdraw page
function goWithdraw() {
  window.location.href = "withdraw.html";
}

// Edit profile
function goEdit() {
  window.location.href = "edit.html";
}

// Logout
function logout() {
  sessionStorage.removeItem("currentUser");
  sessionStorage.removeItem("isAdmin");
  window.location.href = "login.html";
}

// 🔔 Open notifications
function openNotifications() {
  window.location.href = "notification.html";
}