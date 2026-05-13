

// Check admin login
if (!sessionStorage.getItem("isAdmin")) {
  alert("Access Denied");
  window.location.href = "login.html";
}

// Load users
let users = JSON.parse(localStorage.getItem("users")) || [];

let table = document.getElementById("userTable");

users.forEach(user => {

  let balanceKey = "balance_" + user.email;
  let balance = parseFloat(localStorage.getItem(balanceKey)) || 0;

  table.innerHTML += `
    <tr>
      <td>${user.email}</td>
      <td>$${balance}</td>
      <td>${user.password}</td>
    </tr>
  `;
});

// logout
function logout() {
  sessionStorage.removeItem("isAdmin");
  window.location.href = "login.html";
}