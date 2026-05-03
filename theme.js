// =============================
// 🌙 THEME SYSTEM (DARK / LIGHT)
// =============================

// Load saved theme on start
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});

// Toggle theme
function toggleTheme() {
  const isDark = document.body.classList.toggle("dark");

  // Save to localStorage
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Optional feedback
  console.log("Theme:", isDark ? "Dark 🌙" : "Light ☀️");
}