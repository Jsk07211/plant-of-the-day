// Your plant terminology collection.
// Add a new entry to the END of this array whenever you learn a new term —
// the corkboard just renders whatever is here, in order, newest last.
// Entries can be a whole genus/family (like the three below), a specific
// variant/cultivar, or a hybrid — whatever terminology you're given that day.
//
// Template for a new entry:
// {
//   id: "kebab-case-id",          // unique — used for the flip animation seed,
//                                 // and as the `parent` value a variant/hybrid can point to
//   date: "YYYY-MM-DD",           // the day you learned/added this term
//   name: "Display Name",
//   scientificName: "Genus species 'Cultivar'",
//   family: "Araceae",            // botanical family — groups cards on the Family Tree page
//   type: "Pothos" | "Philodendron" | "Anthurium" | "...",  // used for the tag color
//   parent: null,                 // set to another entry's `id` if this is a variant/cultivar
//                                 // of that genus (nests it under that node on the tree page)
//   hybrid: false,                // true if it's a cross of two named variants
//   image: "https://...",         // a photo URL
//   features: ["...", "..."],     // how to identify it / special features
//   care: { light: "...", water: "...", humidity: "...", toxicity: "..." },
// },

const PLANT_DECK = [
  {
    id: "pothos",
    date: "2026-07-18",
    name: "Pothos",
    scientificName: "Epipremnum (family Araceae)",
    family: "Araceae",
    type: "Pothos",
    parent: null,
    hybrid: false,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Epipremnum%20aureum%20(Golden%20Pothos).jpg",
    features: [
      "Grooved petiole (leaf stalk) — the #1 way to tell it apart from Philodendron",
      "Glossy, heart-shaped leaves, often variegated; climbs via aerial roots",
    ],
    care: {
      light: "Bright indirect light; tolerates low light well",
      water: "Let the top 1–2\" of soil dry between waterings",
      humidity: "Adaptable — average home humidity is fine",
      toxicity: "Toxic to pets & humans if ingested (calcium oxalate crystals)",
    },
  },
  {
    id: "philodendron",
    date: "2026-07-19",
    name: "Philodendron",
    scientificName: "Philodendron (family Araceae)",
    family: "Araceae",
    type: "Philodendron",
    parent: null,
    hybrid: false,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Philodendron%20hederaceum%20hederaceum%201zz.jpg",
    features: [
      "Smooth, rounded petiole — no groove (opposite of Pothos)",
      "New leaves emerge wrapped in a papery cataphyll that lingers at the node",
    ],
    care: {
      light: "Low to bright indirect light, depending on species",
      water: "Let dry slightly between waterings",
      humidity: "Average to high humidity depending on species",
      toxicity: "Toxic to pets & humans if ingested (calcium oxalate crystals)",
    },
  },
  {
    id: "anthurium",
    date: "2026-07-20",
    name: "Anthurium",
    scientificName: "Anthurium (family Araceae)",
    family: "Araceae",
    type: "Anthurium",
    parent: null,
    hybrid: false,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Anthurium%20andraeanum%20Flamingo%20flower%20Barbados%200998.jpg",
    features: [
      "Grows from a central rosette, not a trailing vine",
      "Waxy spathe \"flower\" (flowering types) or velvety leaves with pale veining (foliage types)",
    ],
    care: {
      light: "Bright indirect light",
      water: "Let it dry out somewhat between waterings; avoid soggy soil",
      humidity: "Prefers high humidity, especially velvet-leaf species",
      toxicity: "Toxic to pets & humans if ingested (calcium oxalate crystals)",
    },
  },
];
