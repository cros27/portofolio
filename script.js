const toggle = document.getElementById("themeToggle");

const themeToggle = document.getElementById("themeToggle");
const THEME_KEY = "portfolio-theme";

/* Load theme saat refresh */
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem(THEME_KEY);

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "LIGHT";
  } else {
    themeToggle.textContent = "DARK";
  }
});

/* Toggle theme */
themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    themeToggle.textContent = "LIGHT";
    localStorage.setItem(THEME_KEY, "dark");
  } else {
    themeToggle.textContent = "DARK";
    localStorage.setItem(THEME_KEY, "light");
  }
});
