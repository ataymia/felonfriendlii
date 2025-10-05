document.addEventListener("DOMContentLoaded", () => {
  // Set footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Render resources on resources.html
  const list = document.getElementById("resources-list");
  if (list) {
    const params = new URLSearchParams(window.location.search);
    const q = (params.get("q") || "").toLowerCase().trim();
    const cat = (params.get("cat") || "").toLowerCase().trim();
    const tag = (params.get("tag") || "").toLowerCase().trim();

    // Minimal starter data. You can edit/expand this right here.
    const RESOURCES = [
      {
        title: "Open Arms Apartments",
        description: "Apartments known to rent to people with felony records.",
        url: "https://example.com/open-arms",
        category: "apartments",
        tags: ["phoenix"]
      },
      {
        title: "Second Chance Homes",
        description: "Halfway house with reentry support services.",
        url: "https://example.com/second-chance",
        category: "halfway-houses",
        tags: ["veteran"]
      },
      {
        title: "Good Eats Pantry",
        description: "Community food pantry with weekly distribution.",
        url: "https://example.com/good-eats",
        category: "food",
        tags: []
      },
      {
        title: "Work Ready Outfitters",
        description: "Clothing assistance for job interviews.",
        url: "https://example.com/work-ready",
        category: "clothes",
        tags: []
      },
      {
        title: "Hands-On Trades Program",
        description: "Training and job placement for skilled trades.",
        url: "https://example.com/hands-on",
        category: "trades",
        tags: ["training"]
      }
    ];

    const matches = RESOURCES.filter(r => {
      if (cat && r.category !== cat) return false;
      if (tag && !r.tags.map(t => t.toLowerCase()).includes(tag)) return false;
      if (q) {
        const hay = [r.title, r.description, r.category, ...(r.tags || [])]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    const summary = document.getElementById("results-summary");
    if (summary) {
      const parts = [];
      if (q) parts.push(`search "${q}"`);
      if (cat) parts.push(`category "${cat}"`);
      if (tag) parts.push(`tag "${tag}"`);
      summary.textContent = \
`${matches.length} result${matches.length === 1 ? "" : "s"}${parts.length ? " for " + parts.join(", ") : ""}.`;
    }

    list.innerHTML = matches.map(r => {
      const tags = (r.tags || []).map(t => `<span class="chip" title="tag">${t}</span>`).join(" ");
      return `
        <article class="card">
          <h3><a href="${r.url}" target="_blank" rel="noopener noreferrer">${r.title}</a></h3>
          <div class="meta">${r.category}${tags ? " • " + tags : ""}</div>
          <p>${r.description}</p>
          <div><a href="${r.url}" target="_blank" rel="noopener noreferrer">Visit site →</a></div>
        </article>
      `;
    }).join("");

    if (matches.length === 0) {
      list.innerHTML = `<p class="muted">No results yet. Try a different search or category.</p>`;
    }
  }
});