document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // -------------------------
  // ADMIN LOGIN
  // -------------------------
  if (email === "admin@gmail.com" && password === "130061") {
    alert("Welcome Admin");

    sessionStorage.setItem("isAdmin", "true");

    window.location.href = "admin.html";
    return;
  }

  // -------------------------
  // USER LOGIN
  // -------------------------
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    alert("Login Successful");

    // IMPORTANT: store full user
    sessionStorage.setItem("currentUser", JSON.stringify(user));

    window.location.href = "home.html";
  } else {
    alert("Invalid Email or Password");
  }
});