function handleLogin(e) {
  e.preventDefault();
  const email = document.querySelector('#loginModal input[type="email"]').value;
  const password = document.querySelector('#loginModal input[type="password"]').value;

  if (email === "admin@core.com" && password === "admin2025") {
    alert("✅ Login successful, welcome Admin Lalab!");
    closeModal("login");
  } else {
    alert("❌ Incorrect email or password.");
  }
}
