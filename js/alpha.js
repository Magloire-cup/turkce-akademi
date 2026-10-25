/* Türkçe Akademi : page prononciation / alphabet interactif */

const ALPHABET_BASE = [
  { l: "A", type: "vowel", vowel: true, sound: "comme « a » français", words: [{ tr: "anne", fr: "mère" }, { tr: "araba", fr: "voiture" }] },
  { l: "B", type: "normal", sound: "comme « b »", words: [{ tr: "bahçe", fr: "jardin" }, { tr: "balık", fr: "poisson" }] },
  { l: "C", type: "special", sound: "« dj » comme dans « djinn »", words: [{ tr: "cam", fr: "verre" }, { tr: "cumartesi", fr: "samedi" }] },
  { l: "Ç", type: "special", sound: "« tch » comme « tchèque »", words: [{ tr: "çay", fr: "thé" }, { tr: "çiçek", fr: "fleur" }] },
  { l: "D", type: "normal", sound: "comme « d »", words: [{ tr: "deniz", fr: "mer" }, { tr: "dağ", fr: "montagne" }] },
  { l: "E", type: "vowel", vowel: true, sound: "« é » comme « été »", words: [{ tr: "ev", fr: "maison" }, { tr: "elma", fr: "pomme" }] },
  { l: "F", type: "normal", sound: "comme « f »", words: [{ tr: "fırın", fr: "boulangerie" }, { tr: "fikir", fr: "idée" }] },
  { l: "G", type: "normal", sound: "comme « g » de « gare », jamais « j »", words: [{ tr: "güzel", fr: "beau" }, { tr: "gel", fr: "viens" }] },
  { l: "Ğ", type: "special", sound: "inprononçable : allonge la voyelle précédente", words: [{ tr: "dağ", fr: "montagne → « daa »" }, { tr: "yağmur", fr: "pluie → « yaa-mour »" }] },
  { l: "H", type: "normal", sound: "toujours soufflé, comme l'anglais « h »", words: [{ tr: "hava", fr: "air, temps" }, { tr: "hayır", fr: "non" }] },
  { l: "I", type: "special", vowel: true, sound: "« eu » bref non arrondi (comme le « e » de « le »)", words: [{ tr: "ışık", fr: "lumière" }, { tr: "kırmızı", fr: "rouge" }] },
  { l: "İ", type: "vowel", vowel: true, sound: "« i » comme « si »", words: [{ tr: "kedi", fr: "chat" }, { tr: "iş", fr: "travail" }] },
  { l: "J", type: "special", sound: "« j » français (rare)", words: [{ tr: "jilet", fr: "rasoir" }, { tr: "jandarma", fr: "gendarmerie" }] },
  { l: "K", type: "normal", sound: "comme « k » (parfois adouci entre voyelles)", words: [{ tr: "kitap", fr: "livre" }, { tr: "kadın", fr: "femme" }] },
  { l: "L", type: "normal", sound: "comme « l »", words: [{ tr: "limon", fr: "citron" }, { tr: "lira", fr: "livre (monnaie)" }] },
  { l: "M", type: "normal", sound: "comme « m »", words: [{ tr: "merhaba", fr: "bonjour" }, { tr: "meydan", fr: "place" }] },
  { l: "N", type: "normal", sound: "comme « n »", words: [{ tr: "nerede", fr: "où" }, { tr: "nasıl", fr: "comment" }] },
  { l: "O", type: "vowel", vowel: true, sound: "comme « o » de « moto »", words: [{ tr: "okul", fr: "école" }, { tr: "otel", fr: "hôtel" }] },
  { l: "Ö", type: "special", vowel: true, sound: "« eu » comme « peu »", words: [{ tr: "göz", fr: "œil" }, { tr: "öküz", fr: "bœuf" }] },
  { l: "P", type: "normal", sound: "comme « p »", words: [{ tr: "para", fr: "argent" }, { tr: "pencere", fr: "fenêtre" }] },
  { l: "R", type: "normal", sound: "roulé, léger", words: [{ tr: "renk", fr: "couleur" }, { tr: "rüzgar", fr: "vent" }] },
  { l: "S", type: "normal", sound: "comme « ss » (jamais « z »)", words: [{ tr: "su", fr: "eau" }, { tr: "sokak", fr: "rue" }] },
  { l: "Ş", type: "special", sound: "« ch » comme « chat »", words: [{ tr: "şehir", fr: "ville" }, { tr: "şeker", fr: "sucre" }] },
  { l: "T", type: "normal", sound: "comme « t »", words: [{ tr: "türk", fr: "turc" }, { tr: "tren", fr: "train" }] },
  { l: "U", type: "vowel", vowel: true, sound: "« ou » comme « fou »", words: [{ tr: "uyumak", fr: "dormir" }, { tr: "mutlu", fr: "heureux" }] },
  { l: "Ü", type: "special", vowel: true, sound: "« u » comme « rue »", words: [{ tr: "gül", fr: "rose" }, { tr: "üzgün", fr: "triste" }] },
  { l: "V", type: "normal", sound: "entre « v » et « w »", words: [{ tr: "vermek", fr: "donner" }, { tr: "vapur", fr: "ferry" }] },
  { l: "Y", type: "normal", sound: "comme « y » de « yaourt »", words: [{ tr: "yol", fr: "route" }, { tr: "yeni", fr: "nouveau" }] },
  { l: "Z", type: "normal", sound: "comme « z »", words: [{ tr: "zeytin", fr: "olive" }, { tr: "zaman", fr: "temps" }] }
];

const MINIMAL_PAIRS_BASE = [
  { a: "kır", aFr: "campagne (ı = « e » de « le »)", b: "kir", bFr: "saleté (i = « i » de « si »)" },
  { a: "gül", aFr: "rose (ü = « u » de « rue »)", b: "göl", bFr: "lac (ö = « eu » de « peu »)" },
  { a: "çam", aFr: "pin (ç = « tch »)", b: "cam", bFr: "verre (c = « dj »)" },
  { a: "hal", aFr: "état, halle (h soufflé)", b: "al", bFr: "prends (sans h)" },
  { a: "bel", aFr: "taille (e bref)", b: "bal", bFr: "miel (a ouvert)" }
];

const TA_LOC = window.TA_LOCALE || {};
const ALPHABET = ALPHABET_BASE.map((a, i) => {
  const tr = TA_LOC.alphabet && TA_LOC.alphabet[i];
  if (!tr) return a;
  return Object.assign({}, a, {
    sound: tr.sound || a.sound,
    words: a.words.map((w, j) => Object.assign({}, w, {
      fr: (tr.words && tr.words[j] && tr.words[j].fr) || w.fr
    }))
  });
});
const MINIMAL_PAIRS = MINIMAL_PAIRS_BASE.map((p, i) => {
  const tr = TA_LOC.minimalPairs && TA_LOC.minimalPairs[i];
  return tr ? Object.assign({}, p, { aFr: tr.aFr || p.aFr, bFr: tr.bFr || p.bFr }) : p;
});

function trLower(s) {
  return s === "I" ? "ı" : s === "İ" ? "i" : s.toLowerCase();
}

const speakSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>';

document.addEventListener("DOMContentLoaded", () => {
  el("#alpha-grid").innerHTML = ALPHABET.map((a, i) => `
    <button class="alpha-card ${a.type === "vowel" ? "vowel" : a.type === "special" ? "special" : ""}" data-i="${i}"
      title="${a.l} : ${esc(a.sound)}" aria-label="Lettre ${a.l}">
      <span class="ltr">${trLower(a.l)}</span>
      <span class="snd">${a.vowel ? "voyelle" : a.type === "special" ? "turc" : ""}</span>
    </button>`).join("");

  el("#minimal-pairs").innerHTML = MINIMAL_PAIRS.map(p => `
    <div class="ex-line">
      <button class="speak-btn" data-speak="${esc(p.a)}" title="Écouter ${esc(p.a)}" aria-label="Écouter">${speakSVG}</button>
      <span class="tr">${p.a} <span class="muted" style="font-weight:400">(${p.aFr})</span></span>
      <button class="speak-btn" data-speak="${esc(p.b)}" title="Écouter ${esc(p.b)}" aria-label="Écouter">${speakSVG}</button>
      <span class="fr">${p.b} : ${p.bFr}</span>
    </div>`).join("");

  els(".alpha-card").forEach(c => c.addEventListener("click", () => selectLetter(+c.dataset.i)));
  selectLetter(0, true);
});

function selectLetter(i, silent = false) {
  const a = ALPHABET[i];
  const isTr = a.type === "special";
  els(".alpha-card").forEach(c => { c.style.borderColor = ""; c.style.background = ""; });
  const card = els(".alpha-card")[i];
  card.style.borderColor = "var(--red)";

  el("#alpha-detail").innerHTML = `
    <span class="chip ${isTr ? "gold" : a.vowel ? "red" : ""}">
      ${a.vowel ? (isTr ? "Voyelle · lettre propre au turc" : "Voyelle") : isTr ? "Lettre propre au turc" : "Consonne"}
    </span>
    <div class="big mt-2">${a.l} ${trLower(a.l)}</div>
    <p class="muted mt-2">${a.sound}</p>
    <div class="mt-3">
      ${a.words.map(w => `
        <div class="ex-line" style="margin-bottom:10px">
          <button class="speak-btn" data-speak="${esc(w.tr)}" title="Écouter" aria-label="Écouter ${esc(w.tr)}">${speakSVG}</button>
          <span class="tr">${w.tr}</span><span class="fr">${w.fr}</span>
        </div>`).join("")}
    </div>
    <button class="btn btn-ghost btn-sm mt-3" id="alpha-say">Réécouter la lettre</button>`;

  el("#alpha-say").addEventListener("click", () => speak(trLower(a.l)));
  if (!silent) speak(trLower(a.l));
}
