// Renders the corkboard from PLANT_DECK (js/plants.js).
// The board just reflects whatever is in that array, in order —
// add a new entry to the end of the deck whenever you learn a new term.

function formatPinDate(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
}

// Deterministic "random" rotation per card so the scatter looks natural
// but stays put across reloads.
function seededAngle(seedStr, min, max) {
  let hash = 0;
  for (let i = 0; i < seedStr.length; i++) {
    hash = (hash << 5) - hash + seedStr.charCodeAt(i);
    hash |= 0;
  }
  const t = (Math.abs(hash) % 1000) / 1000;
  return min + t * (max - min);
}

function cardElement(plant, isLatest) {
  const el = document.createElement("div");
  el.className = "card" + (isLatest ? " card--today" : "");
  const angle = seededAngle(plant.id, -6, 6);
  el.style.setProperty("--tilt", `${angle}deg`);

  const typeClass = `tag--${plant.type.toLowerCase()}`;

  el.innerHTML = `
    <div class="card-inner">
      <div class="card-face card-front">
        <div class="pin" aria-hidden="true"></div>
        <span class="pin-date">${formatPinDate(plant.date)}</span>
        <div class="photo">
          <img src="${plant.image}" alt="${plant.name}" loading="lazy"
               onerror="this.closest('.photo').classList.add('photo--broken')">
        </div>
        <h3 class="plant-name">${plant.name}</h3>
        <p class="scientific-name">${plant.scientificName}</p>
        <span class="tag ${typeClass}">${plant.type}${plant.hybrid ? " · hybrid" : ""}</span>
        <p class="flip-hint">tap to flip ↺</p>
      </div>
      <div class="card-face card-back">
        <div class="pin" aria-hidden="true"></div>
        <h4>Special Features</h4>
        <ul class="features">
          ${plant.features.map((f) => `<li>${f}</li>`).join("")}
        </ul>
        <p class="flip-hint">tap to flip back ↺</p>
      </div>
    </div>
  `;

  el.addEventListener("click", () => el.classList.toggle("flipped"));
  return el;
}

function render() {
  const board = document.getElementById("board");
  const streakEl = document.getElementById("streak");
  const count = PLANT_DECK.length;
  streakEl.textContent = `${count} term${count === 1 ? "" : "s"} pinned so far`;

  board.innerHTML = "";
  [...PLANT_DECK]
    .reverse()
    .forEach((plant, i) => board.appendChild(cardElement(plant, i === 0)));
}

function setupFlipAll() {
  const btn = document.getElementById("flip-all");
  const board = document.getElementById("board");
  btn.addEventListener("click", () => {
    const cards = board.querySelectorAll(".card");
    const shouldFlip = ![...cards].every((c) => c.classList.contains("flipped"));
    cards.forEach((c) => c.classList.toggle("flipped", shouldFlip));
    btn.textContent = shouldFlip ? "Flip Back All ↺" : "Flip All ↺";
  });
}

