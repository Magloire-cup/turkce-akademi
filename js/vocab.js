/* Türkçe Akademi : flashcards de vocabulaire (révision espacée simple) */

let themeId = null;   // null = mode "tous"
let deck = [];
let pos = 0;
let flipped = false;
let listMode = false;
let levelFilter = "all";
let frenchFirst = false;
let favoritesOnly = false;

const DICTIONARY_COPY = {
  fr: {
    overline: "Dictionnaire rapide", title: "Cherche un mot, une traduction ou un exemple",
    description: "Retrouve le thème et, quand elle est certaine, la catégorie grammaticale. Les exemples sont traduits.",
    favorites: "Mes favoris", searchLabel: "Rechercher en turc, en français ou dans les exemples",
    placeholder: "Ex. okul, école, université…", start: "Saisis un mot ou une traduction, ou affiche tes favoris.",
    one: "résultat", many: "résultats", shown: "affichés",
    noFavorites: "Aucun favori pour le moment. Lance une recherche puis enregistre les mots utiles.",
    noResults: "Aucun mot ne correspond. Essaie le turc, la traduction ou le nom d’un thème.",
    add: "Ajouter aux favoris", remove: "Retirer des favoris",
    parts: { verb: "Verbe à l’infinitif", adjective: "Adjectif", pronoun: "Pronom / interrogatif", numeral: "Numéral", expression: "Expression" }
  },
  en: {
    overline: "Quick dictionary", title: "Search for a word, translation, or example",
    description: "See the topic and, when certain, the grammatical category. Examples include translations.",
    favorites: "My favorites", searchLabel: "Search in Turkish, English, French, or examples",
    placeholder: "e.g. okul, school, university…", start: "Type a word or translation, or show your favorites.",
    one: "result", many: "results", shown: "shown",
    noFavorites: "No favorites yet. Search for a word and save useful entries.",
    noResults: "No matching words. Try Turkish, a translation, or a topic name.",
    add: "Add to favorites", remove: "Remove from favorites",
    parts: { verb: "Infinitive verb", adjective: "Adjective", pronoun: "Pronoun / question word", numeral: "Numeral", expression: "Expression" }
  },
  ar: {
    overline: "قاموس سريع", title: "ابحث عن كلمة أو ترجمة أو مثال",
    description: "اعرض الموضوع والفئة النحوية عند التأكد منها. الأمثلة مرفقة بترجمتها.",
    favorites: "مفضلاتي", searchLabel: "ابحث بالتركية أو الفرنسية أو الإنجليزية أو في الأمثلة",
    placeholder: "مثال: okul أو مدرسة…", start: "اكتب كلمة أو ترجمة، أو اعرض مفضلاتك.",
    one: "نتيجة", many: "نتائج", shown: "معروضة",
    noFavorites: "لا توجد مفضلات بعد. ابحث عن كلمة واحفظ الكلمات المفيدة.",
    noResults: "لا توجد كلمات مطابقة. جرّب التركية أو الترجمة أو اسم الموضوع.",
    add: "أضف إلى المفضلات", remove: "أزل من المفضلات",
    parts: { verb: "فعل في المصدر", adjective: "صفة", pronoun: "ضمير / أداة استفهام", numeral: "عدد", expression: "تعبير" }
  },
  kk: {
    overline: "Жылдам сөздік", title: "Сөзді, аударманы немесе мысалды ізде",
    description: "Тақырып пен нақты белгілі болған жағдайда грамматикалық санатты көрсетеді. Мысалдар аудармасымен беріледі.",
    favorites: "Таңдаулыларым", searchLabel: "Түрікше, қазақша, французша немесе мысалдардан іздеу",
    placeholder: "Мысалы: okul, мектеп, университет…", start: "Сөз не аударма енгіз немесе таңдаулыларыңды көрсет.",
    one: "нәтиже", many: "нәтиже", shown: "көрсетілді",
    noFavorites: "Әзірге таңдаулы сөз жоқ. Іздеп, пайдалы сөздерді сақта.",
    noResults: "Сәйкес сөз табылмады. Түрікше сөзді, аударманы немесе тақырыпты ізде.",
    add: "Таңдаулыларға қосу", remove: "Таңдаулылардан өшіру",
    parts: { verb: "Тұйық етістік", adjective: "Сын есім", pronoun: "Есімдік / сұрау сөзі", numeral: "Сан есім", expression: "Тіркес" }
  }
};
const DICTIONARY_TEXT = DICTIONARY_COPY[(document.documentElement.lang || "fr").split("-")[0]] || DICTIONARY_COPY.fr;

function wordKey(w) { return Progress.wordKey(w.tr, w.frSrc || w.fr); }
function wordLevel(w) { return Progress.getWordLevel(wordKey(w)); }

document.addEventListener("DOMContentLoaded", () => {
  Progress.migrateWordKeys(VOCAB);
  el("#total-words").textContent = VOCAB_TOTAL;
  el("#total-themes") && (el("#total-themes").textContent = VOCAB.length);
  renderChips();
  selectTheme(VOCAB[0].id);
  setupDictionary();

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
  const dictionarySearch = el("#dictionary-search");
  if (dictionarySearch) {
    dictionarySearch.addEventListener("input", renderDictionary);
    el("#dictionary-favorites").addEventListener("click", event => {
      favoritesOnly = !favoritesOnly;
      event.currentTarget.setAttribute("aria-pressed", String(favoritesOnly));
      event.currentTarget.textContent = `${favoritesOnly ? "★" : "☆"} ${DICTIONARY_TEXT.favorites}`;
      renderDictionary();
    });
    renderDictionary();
  }

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
  const seen = new Set();
  return VOCAB.reduce((acc, t) => {
    t.words.forEach(w => {
      const key = wordKey(w);
      if (seen.has(key)) return;
      seen.add(key);
      acc.push(w);
    });
    return acc;
  }, []);
}

function filterWords(words) {
  return words.filter(word => {
    const level = wordLevel(word);
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
  return shuffle(words).sort((a, b) => wordLevel(a) - wordLevel(b));
}

function updateThemeStats() {
  const words = themeWords();
  const known = words.filter(w => wordLevel(w) >= 1).length;
  const mastered = words.filter(w => wordLevel(w) >= 5).length;
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
      : "Aucun mot ne correspond à ce filtre. Choisis un autre filtre ou un autre thème."}</div>`;
    return;
  }
  pos = Math.min(pos, deck.length - 1);
  const w = deck[pos];
  const lvl = wordLevel(w);
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
        <button class="btn btn-ghost btn-sm" id="fc-next">Suivant →</button>
      </div>
      <div class="flash-feedback">
        <button class="btn btn-dont" id="fc-dont">À revoir</button>
        <button class="btn btn-know" id="fc-know">Je sais</button>
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
  const lvl = wordLevel(w);
  if (known) {
    Progress.setWordLevel(wordKey(w), Math.min(5, lvl + 1));
  } else {
    Progress.setWordLevel(wordKey(w), 0);
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
    <div class="vocab-item ${wordLevel(w) >= 1 ? "known" : ""}">
      <div class="w"><div class="tr">${w.tr}</div><div class="fr">${w.fr}</div></div>
      <svg class="badge-known" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
    </div>`).join("")
    : '<div class="empty" style="grid-column:1/-1">Aucun mot ne correspond à ces filtres. Essaie un autre filtre ou un autre thème.</div>';
}

function setupDictionary() {
  let box = el(".dictionary-box");
  if (!box) {
    box = document.createElement("section");
    box.className = "dictionary-box";
    box.setAttribute("aria-labelledby", "dictionary-title");
    box.innerHTML = `
      <div class="dictionary-head">
        <div>
          <span class="overline"></span>
          <h3 id="dictionary-title"></h3>
          <p class="muted"></p>
        </div>
        <button class="btn btn-ghost btn-sm" id="dictionary-favorites" type="button" aria-pressed="false"></button>
      </div>
      <label class="sr-only" for="dictionary-search"></label>
      <input type="search" id="dictionary-search" class="dictionary-search" autocomplete="off">
      <p class="dictionary-count muted" id="dictionary-count" aria-live="polite"></p>
      <div class="dictionary-results" id="dictionary-results"></div>`;
    el("#theme-chips").insertAdjacentElement("afterend", box);
  }

  box.querySelector(".overline").textContent = DICTIONARY_TEXT.overline;
  box.querySelector("#dictionary-title").textContent = DICTIONARY_TEXT.title;
  box.querySelector(".dictionary-head p").textContent = DICTIONARY_TEXT.description;
  box.querySelector("#dictionary-favorites").textContent = `☆ ${DICTIONARY_TEXT.favorites}`;
  box.querySelector('label[for="dictionary-search"]').textContent = DICTIONARY_TEXT.searchLabel;
  box.querySelector("#dictionary-search").placeholder = DICTIONARY_TEXT.placeholder;
  box.querySelector("#dictionary-search").setAttribute("aria-label", DICTIONARY_TEXT.searchLabel);
}

function partOfSpeech(theme) {
  if (/^verbes\d+$/.test(theme.id)) return DICTIONARY_TEXT.parts.verb;
  if (theme.id === "adjectifs") return DICTIONARY_TEXT.parts.adjective;
  if (theme.id === "pronom") return DICTIONARY_TEXT.parts.pronoun;
  if (theme.id === "nombres") return DICTIONARY_TEXT.parts.numeral;
  if (theme.id === "expressions") return DICTIONARY_TEXT.parts.expression;
  return "";
}

function renderDictionary() {
  const search = el("#dictionary-search");
  const results = el("#dictionary-results");
  const count = el("#dictionary-count");
  const query = normalizeSearch(search.value.trim());
  const words = [];
  const seen = new Set();

  VOCAB.forEach(theme => theme.words.forEach(word => {
    const key = wordKey(word);
    if (seen.has(key)) return;
    seen.add(key);
    if (favoritesOnly && !Progress.isFavoriteWord(key)) return;
    const searchable = normalizeSearch([word.tr, word.fr, word.ex, word.exFr, theme.name].join(" "));
    if (query && !searchable.includes(query)) return;
    words.push({ word, theme, key });
  }));

  if (!query && !favoritesOnly) {
    count.textContent = DICTIONARY_TEXT.start;
    results.replaceChildren();
    return;
  }

  const shown = words.slice(0, 30);
  const resultLabel = words.length === 1 ? DICTIONARY_TEXT.one : DICTIONARY_TEXT.many;
  count.textContent = `${words.length} ${resultLabel}${words.length > shown.length ? ` · ${shown.length} ${DICTIONARY_TEXT.shown}` : ""}`;
  results.replaceChildren();
  if (!shown.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = favoritesOnly && !query ? DICTIONARY_TEXT.noFavorites : DICTIONARY_TEXT.noResults;
    results.appendChild(empty);
    return;
  }

  shown.forEach(({ word, theme, key }) => {
    const card = document.createElement("article");
    card.className = "dictionary-result";
    const content = document.createElement("div");
    content.className = "dictionary-result-content";
    const head = document.createElement("div");
    head.className = "dictionary-word";
    const turkish = document.createElement("span");
    turkish.className = "tr";
    turkish.lang = "tr";
    turkish.textContent = word.tr;
    const french = document.createElement("span");
    french.className = "fr";
    french.textContent = word.fr;
    head.append(turkish, french);
    const category = document.createElement("span");
    category.className = "chip";
    category.textContent = theme.name;
    const categories = document.createElement("div");
    categories.className = "dictionary-tags";
    categories.appendChild(category);
    const pos = partOfSpeech(theme);
    if (pos) {
      const grammaticalCategory = document.createElement("span");
      grammaticalCategory.className = "chip blue";
      grammaticalCategory.textContent = pos;
      categories.appendChild(grammaticalCategory);
    }
    content.append(head, categories);
    if (word.ex) {
      const example = document.createElement("p");
      example.className = "dictionary-example";
      const trExample = document.createElement("span");
      trExample.lang = "tr";
      trExample.textContent = word.ex;
      const frExample = document.createElement("span");
      frExample.textContent = word.exFr || "";
      example.append(trExample, frExample);
      content.appendChild(example);
    }

    const favorite = document.createElement("button");
    const isFavorite = Progress.isFavoriteWord(key);
    favorite.className = `icon-btn dictionary-favorite${isFavorite ? " is-favorite" : ""}`;
    favorite.type = "button";
    favorite.textContent = isFavorite ? "★" : "☆";
    favorite.setAttribute("aria-pressed", String(isFavorite));
    favorite.setAttribute("aria-label", `${isFavorite ? DICTIONARY_TEXT.remove : DICTIONARY_TEXT.add} : ${word.tr}`);
    favorite.addEventListener("click", () => {
      const saved = Progress.toggleFavoriteWord(key);
      renderDictionary();
      if (!saved) count.textContent = "Impossible d’enregistrer ce favori dans le navigateur.";
    });
    card.append(content, favorite);
    results.appendChild(card);
  });
}

function normalizeSearch(value) {
  return value.toLocaleLowerCase("tr").replace(/ı/g, "i").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
