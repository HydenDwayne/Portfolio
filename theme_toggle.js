<<<<<<< HEAD
/* theme_toggle.js — HDS.SYS */
(function () {
  const root = document.documentElement;

  /* ── THEME ── */
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') root.classList.add('light');

  function updateThemeIcon() {
    const btn = document.querySelector('.nav-theme');
    if (btn) btn.textContent = root.classList.contains('light') ? '☀' : '☾';
  }
  updateThemeIcon();

  document.addEventListener('click', function (e) {
    if (e.target.closest('.nav-theme')) {
      root.classList.toggle('light');
      localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
      updateThemeIcon();
    }
  });

  /* ── HAMBURGER / MOBILE DRAWER ── */
  document.addEventListener('click', function (e) {
    const hamburger = e.target.closest('.nav-hamburger');
    const drawer    = document.querySelector('.nav-drawer');
    if (!hamburger || !drawer) return;

    const isOpen = drawer.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  /* Close drawer when a nav link is clicked */
  document.addEventListener('click', function (e) {
    if (e.target.closest('.nav-drawer a')) {
      const drawer    = document.querySelector('.nav-drawer');
      const hamburger = document.querySelector('.nav-hamburger');
      if (drawer)    { drawer.classList.remove('open'); }
      if (hamburger) { hamburger.classList.remove('open'); }
      document.body.style.overflow = '';
    }
  });

  /* ── ACTIVE NAV LINK ── */
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(function (a) {
    if (a.getAttribute('href') && path.includes(a.getAttribute('href').replace('../', '').replace('/', ''))) {
      a.classList.add('active');
    }
  });
})();
=======

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
>>>>>>> origin/main
