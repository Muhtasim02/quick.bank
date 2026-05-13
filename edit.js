// Get logged user
let user = JSON.parse(sessionStorage.getItem("currentUser"));

if (!user) {
  alert("Login required");
  window.location.href = "login.html";
}

// Load existing data into inputs
document.getElementById("name").value = user.name;
document.getElementById("parent").value = user.parent;
document.getElementById("nationality").value = user.nationality;
document.getElementById("work").value = user.work;
document.getElementById("dob").value = user.dob;
document.getElementById("email").value = user.email;
document.getElementById("password").value = user.password;

// Save updated data
document.getElementById("editForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let updatedUser = {
    name: document.getElementById("name").value,
    parent: document.getElementById("parent").value,
    nationality: document.getElementById("nationality").value,
    work: document.getElementById("work").value,
    dob: document.getElementById("dob").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  // Update session
  sessionStorage.setItem("currentUser", JSON.stringify(updatedUser));

  // Update localStorage users list
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let index = users.findIndex(u => u.email === user.email);

  if (index !== -1) {
    users[index] = updatedUser;
  }

  localStorage.setItem("users", JSON.stringify(users));

  alert("Profile Updated");

  window.location.href = "home.html";
});