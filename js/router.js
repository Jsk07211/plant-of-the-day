// Swaps between the two notebook "pages" in place (no real navigation).

const VIEWS = {
  daily: { title: "The Daily Pin" },
  tree: { title: "The Family Tree" },
};

function showView(name) {
  document.querySelectorAll(".view").forEach((el) => {
    el.classList.toggle("is-active", el.id === `view-${name}`);
  });
  document.querySelectorAll(".nav-tab").forEach((btn) => {
    const active = btn.dataset.view === name;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-selected", String(active));
  });
  document.getElementById("page-title").textContent = VIEWS[name].title;
}

function viewFromHash() {
  return location.hash === "#tree" ? "tree" : "daily";
}

function initRouter() {
  document.querySelectorAll(".nav-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.view;
      if (location.hash !== `#${name}`) history.pushState(null, "", `#${name}`);
      showView(name);
    });
  });

  window.addEventListener("popstate", () => showView(viewFromHash()));

  showView(viewFromHash());
}

document.addEventListener("DOMContentLoaded", () => {
  render();
  renderTree();
  setupFlipAll();
  initRouter();
});
