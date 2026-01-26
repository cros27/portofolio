const toggle = document.getElementById("themeToggle");

// LOAD THEME
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
  toggleTheme.textContent = "DARK";
}

// TOGGLE THEME
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    toggleTheme.textContent = "DARK";
  } else {
    localStorage.setItem("theme", "dark");
    toggleTheme.textContent = "LIGHT";
  }
});

