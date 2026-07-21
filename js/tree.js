// Groups PLANT_DECK by family, then nests any entry whose `parent` points
// at another entry's `id` underneath that entry (genus -> variant/hybrid).

function nodeHtml(plant, isRoot) {
  const typeClass = plant.type ? `tree-node--${plant.type.toLowerCase()}` : "";
  return `
    <div class="tree-node ${isRoot ? "tree-node--root" : typeClass}">
      ${plant.name}
      ${plant.scientificName ? `<span class="tree-sci">${plant.scientificName}</span>` : ""}
    </div>
  `;
}

function buildChildrenList(entries, parentId) {
  const children = entries.filter((p) => p.parent === parentId);
  if (children.length === 0) return "";
  return `<ul>${children
    .map((child) => `<li>${nodeHtml(child, false)}${buildChildrenList(entries, child.id)}</li>`)
    .join("")}</ul>`;
}

function renderTree() {
  const wrap = document.getElementById("tree-wrap");
  const families = {};
  PLANT_DECK.forEach((p) => {
    const fam = p.family || "Unsorted";
    (families[fam] = families[fam] || []).push(p);
  });

  wrap.innerHTML = Object.entries(families)
    .map(([family, entries]) => {
      const roots = entries.filter((p) => !p.parent || !entries.some((e) => e.id === p.parent));
      const rootsHtml = roots
        .map((root) => `<li>${nodeHtml(root, false)}${buildChildrenList(entries, root.id)}</li>`)
        .join("");
      return `
        <section class="family-block">
          <h2 class="family-name">${family}</h2>
          <ul class="tree">
            <li>${nodeHtml({ name: family, scientificName: "" }, true)}
              <ul>${rootsHtml}</ul>
            </li>
          </ul>
        </section>
      `;
    })
    .join("");
}
