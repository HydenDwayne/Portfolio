
  const toggleBtn = document.querySelector(".nav-theme");
  const root = document.documentElement;

  // Apply saved theme on load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    root.classList.add("light");
  }

  // Update button icon based on theme
  function updateIcon() {
    toggleBtn.textContent = root.classList.contains("light") ? "☀" : "☾";
  }

  updateIcon();

  toggleBtn.addEventListener("click", () => {
    root.classList.toggle("light");

    // Save preference
    const theme = root.classList.contains("light") ? "light" : "dark";
    localStorage.setItem("theme", theme);

    updateIcon();
  });
