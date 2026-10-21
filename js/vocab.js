/* Türkçe Akademi : flashcards de vocabulaire (révision espacée simple) */

let themeId = null;   // null = mode "tous"
let deck = [];
let pos = 0;
let flipped = false;
let listMode = false;
let levelFilter = "all";
let frenchFirst = false;

const speakSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>';

document.addEventListener("DOMContentLoaded", () => {
  el("#total-words").textContent = VOCAB_TOTAL;
  el("#total-themes") && (el("#total-themes").textContent = VOCAB.length);
  renderChips();
  selectTheme(VOCAB[0].id);

  el("#vocab-level-filter").addEventListener("change", e => {
    levelFilter = e.target.value;
    refreshDeck();
  });
  el("#btn-direction").addEventListener("click", () => {
    frenchFirst = !frenchFirst;
    flipped = false;
    el("#btn-direction").textContent = frenchFirst
      ? "Carte : français → turc"
      : "Carte : turc → français";
    el("#btn-direction").setAttribute("aria-pressed", String(frenchFirst));
    renderCard();
  });
  els("[data-quick-theme]").forEach(button => {
    button.addEventListener("click", () => selectTheme(button.dataset.quickTheme));
  });
  el("#btn-shuffle").addEventListener("click", () => {
    deck = buildDeck();
    pos = 0; flipped = false;
    renderCard();
    toast("Paquet mélangé");
  });
  el("#btn-mode").addEventListener("click", () => {
    listMode = !listMode;
    el("#btn-mode").textContent = listMode ? "Mode flashcards" : "Vue liste";
    el("#deck-zone").style.display = listMode ? "none" : "block";
    el("#list-zone").style.display = listMode ? "block" : "none";
    if (listMode) renderList();
  });
  el("#vocab-search").addEventListener("input", renderList);

  document.addEventListener("keydown", e => {
    if (listMode || !deck.length) return;
    if (e.target.tagName === "INPUT") return;
    if (e.code === "Space") { e.preventDefault(); flip(); }
    else if (e.key === "ArrowRight") { next(); }
    else if (e.key === "ArrowLeft") { prev(); }
    else if (e.key === "1") { answer(true); }
    else if (e.key === "2") { answer(false); }
  });
});

function renderChips() {
  el("#theme-chips").innerHTML =
    `<button class="theme-chip ${themeId === null ? "active" : ""}" data-theme="all">Mélange général</button>` +
    VOCAB.map(t => `<button class="theme-chip ${themeId === t.id ? "active" : ""}" data-theme="${t.id}">${t.name}</button>`).join("");
  els("#theme-chips .theme-chip").forEach(c => c.addEventListener("click", () => selectTheme(c.dataset.theme)));
}

function selectTheme(id) {
  themeId = id === "all" ? null : id;
  renderChips();
  deck = buildDeck();
  pos = 0; flipped = false;
  updateThemeStats();
  renderCard();
}

function themeWords() {
  if (themeId) return VOCAB.find(t => t.id === themeId).words;
  return VOCAB.reduce((acc, t) => acc.concat(t.words), []);
}

function filterWords(words) {
  return words.filter(word => {
    const level = Progress.getWordLevel(word.tr);
    if (levelFilter === "new") return level === 0;
    if (levelFilter === "learning") return level > 0 && level < 5;
    if (levelFilter === "mastered") return level >= 5;
    return true;
  });
}

function refreshDeck() {
  deck = buildDeck();
  pos = 0;
  flipped = false;
  updateThemeStats();
  renderCard();
  if (listMode) renderList();
}

function buildDeck() {
  const words = filterWords(themeWords());
  // Priorité aux mots les moins connus, puis aléatoire
  return shuffle(words).sort((a, b) =>
    (Progress.getWordLevel(a.tr) || 0) - (Progress.getWordLevel(b.tr) || 0)
  );
}

function updateThemeStats() {
  const words = themeWords();
  const known = words.filter(w => Progress.getWordLevel(w.tr) >= 1).length;
  const mastered = words.filter(w => Progress.getWordLevel(w.tr) >= 5).length;
  const visible = filterWords(words).length;
  el("#theme-progress").textContent = themeId
    ? `${VOCAB.find(t => t.id === themeId).name} : ${visible} cartes`
    : `${visible} cartes dans la sélection`;
  el("#theme-known").textContent = `${known} en mémoire · ${mastered} maîtrisés`;
}

function renderCard() {
  const zone = el("#deck-zone");
  if (!deck.length) {
    zone.innerHTML = `<div class="empty">${levelFilter === "all"
      ? "Aucun mot dans ce thème."
      : "Aucun mot ne correspond à ce filtre. Choisis un autre niveau ou un autre thème."}</div>`;
    return;
  }
  pos = Math.min(pos, deck.length - 1);
  const w = deck[pos];
  const lvl = Progress.getWordLevel(w.tr);
  const theme = VOCAB.find(t => t.words.includes(w));
  const front = frenchFirst ? w.fr : w.tr;
  const back = frenchFirst ? w.tr : w.fr;
  zone.innerHTML = `
    <div class="flash-zone">
      <div class="flashcard ${flipped ? "flipped" : ""}" id="flashcard" role="button" tabindex="0" aria-label="Carte de vocabulaire">
        <div class="flashcard-inner">
          <div class="flash-face">
            <span class="chip red fc-theme">${theme ? theme.name : "Mélange"}</span>
            <span class="fc-count">${pos + 1} / ${deck.length}</span>
            <div class="fc-word">${front}</div>
            <div class="fc-sub">${frenchFirst ? "Retrouve le mot en turc" : "Retrouve le sens en français"}</div>
            <div class="fc-level">${[1,2,3,4,5].map(i => `<i class="${lvl >= i ? "on" : ""}"></i>`).join("")}</div>
            <span class="fc-hint">carte ${pos + 1} sur ${deck.length}</span>
          </div>
          <div class="flash-face back">
            <span class="chip green fc-theme">${theme ? theme.name : "Mélange"}</span>
            <span class="fc-count">${pos + 1} / ${deck.length}</span>
            <div class="fc-word">${back}</div>
            <div class="fc-sub">${w.ex ? "" : ""}</div>
            ${w.ex ? `<div class="fc-ex"><b>${w.ex}</b><br>${w.exFr}</div>` : ""}
            <div class="fc-level">${[1,2,3,4,5].map(i => `<i class="${lvl >= i ? "on" : ""}"></i>`).join("")}</div>
          </div>
        </div>
      </div>
      <div class="flash-controls">
        <button class="btn btn-ghost btn-sm" id="fc-prev">← Précédent</button>
        <button class="btn btn-dark btn-sm" id="fc-flip">Retourner</button>
        <button class="speak-btn" data-speak="${esc(w.tr)}" title="Écouter ${esc(w.tr)}" style="width:44px;height:44px" aria-label="Écouter">${speakSVG}</button>
        <button class="btn btn-ghost btn-sm" id="fc-next">Suivant →</button>
      </div>
      <div class="flash-feedback">
        <button class="btn btn-dont" id="fc-dont">À revoir</button>
        <button class="btn btn-know" id="fc-know">Je sais (+2 XP)</button>
      </div>
    </div>`;

  el("#flashcard").addEventListener("click", flip);
  el("#flashcard").addEventListener("keydown", e => { if (e.key === "Enter") flip(); });
  el("#fc-flip").addEventListener("click", flip);
  el("#fc-prev").addEventListener("click", prev);
  el("#fc-next").addEventListener("click", next);
  el("#fc-know").addEventListener("click", () => answer(true));
  el("#fc-dont").addEventListener("click", () => answer(false));
}

function flip() { flipped = !flipped; el("#flashcard").classList.toggle("flipped", flipped); }
function next() { pos = (pos + 1) % deck.length; flipped = false; renderCard(); }
function prev() { pos = (pos - 1 + deck.length) % deck.length; flipped = false; renderCard(); }

function answer(known) {
  if (!deck.length) return;
  const w = deck[pos];
  const lvl = Progress.getWordLevel(w.tr);
  if (known) {
    Progress.setWordLevel(w.tr, Math.min(5, lvl + 1));
    Progress.addXp(2);
  } else {
    Progress.setWordLevel(w.tr, 0);
  }
  updateThemeStats();
  if (levelFilter !== "all" && !filterWords(themeWords()).includes(w)) refreshDeck();
  else next();
}

function renderList() {
  const q = (el("#vocab-search").value || "").toLowerCase().trim();
  const words = filterWords(themeWords())
    .filter(w => !q || w.tr.toLowerCase().includes(q) || w.fr.toLowerCase().includes(q));
  el("#vocab-list").innerHTML = words.length ? words.map(w => `
    <div class="vocab-item ${Progress.getWordLevel(w.tr) >= 1 ? "known" : ""}">
      <button class="speak-btn" data-speak="${esc(w.tr)}" title="Écouter" aria-label="Écouter ${esc(w.tr)}">${speakSVG}</button>
      <div class="w"><div class="tr">${w.tr}</div><div class="fr">${w.fr}</div></div>
      <svg class="badge-known" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
    </div>`).join("")
    : '<div class="empty" style="grid-column:1/-1">Aucun mot ne correspond à ces filtres. Essaie un autre niveau ou un autre thème.</div>';
}
