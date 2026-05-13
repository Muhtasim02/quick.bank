document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const userData = {
    name: document.getElementById("name").value.trim(),
    parent: document.getElementById("parent").value.trim(),
    nationality: document.getElementById("nationality").value.trim(),
    work: document.getElementById("work").value.trim(),
    dob: document.getElementById("dob").value,
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value.trim()
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];

  users.push(userData);

  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup Successful");

  window.location.href = "login.html";
});