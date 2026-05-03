
fetch("projects.json")
  .then(res => res.json())
  .then(projects => {
    const grid = document.getElementById("projectsGrid");

    projects.forEach((p, index) => {
      const card = document.createElement("a");
      card.className = `project-card fade-up fade-up-d${index + 1}`;
      card.href = p.link;

      card.innerHTML = `
        <div class="proj-thumb">
          <img src="${p.image}" alt="${p.title}" />
        </div>
        <div class="project-body">
          <h2 class="project-title">${p.title}</h2>
          <p class="project-desc">${p.description}</p>
          <ul class="bullet-list project-bullets">
            ${p.bullets.map(b => `<li>${b}</li>`).join("")}
          </ul>
          <div class="project-tags">
            ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
          </div>
        </div>
      `;

      grid.appendChild(card);
    });
  })
  .catch(err => console.error("Failed to load projects:", err));
