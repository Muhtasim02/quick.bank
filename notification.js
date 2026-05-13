// get user
let user = JSON.parse(sessionStorage.getItem("currentUser"));

if (!user) {
  alert("Login required");
  window.location.href = "login.html";
}

// key for history
let historyKey = "history_" + user.email;

// get history
let history = JSON.parse(localStorage.getItem(historyKey)) || [];

let container = document.getElementById("history");

if (history.length === 0) {
  container.innerHTML = "<p>No transactions yet</p>";
} else {
  history.reverse().forEach(h => {
    container.innerHTML += `
      <div class="item">
        <b>${h.type}</b><br>
        Amount: ${h.amount}<br>
        ${h.info}
      </div>
    `;
  });
}