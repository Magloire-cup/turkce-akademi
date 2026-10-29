/* Türkçe Akademi : page grammaire */

let currentArticle = 0;

document.addEventListener("DOMContentLoaded", () => {
  setupCourseToggle();
  const hash = location.hash.replace("#", "");
  const idx = GRAMMAR.findIndex(g => g.id === hash);
  currentArticle = idx >= 0 ? idx : 0;
  renderToc();
  renderArticle();
  window.addEventListener("hashchange", () => {
    const i = GRAMMAR.findIndex(g => g.id === location.hash.replace("#", ""));
    if (i >= 0 && i !== currentArticle) { currentArticle = i; renderToc(); renderArticle(); }
  });
});

function setupCourseToggle() {
  const toggle = el("#gram-toggle");
  const content = el("#gram-toc");
  const layout = content?.closest(".gram-layout");
  if (!toggle || !content) return;

  const copy = {
    fr: ["Masquer la liste des cours", "Afficher la liste des cours"],
    en: ["Hide course list", "Show course list"],
    ar: ["إخفاء قائمة الدروس", "إظهار قائمة الدروس"],
    kk: ["Курс тізімін жасыру", "Курс тізімін көрсету"]
  }[document.documentElement.lang] || ["Masquer la liste des cours", "Afficher la liste des cours"];
  const key = "turkce-grammar-list-hidden";
  const update = hidden => {
    content.hidden = hidden;
    layout?.classList.toggle("list-hidden", hidden);
    toggle.setAttribute("aria-expanded", String(!hidden));
    toggle.textContent = hidden ? copy[1] : copy[0];
  };

  let hidden = false;
  try { hidden = localStorage.getItem(key) === "true"; } catch (error) { console.warn("Impossible de lire l'état des fiches de cours.", error); }
  update(hidden);
  toggle.addEventListener("click", () => {
    hidden = !hidden;
    update(hidden);
    try { localStorage.setItem(key, String(hidden)); } catch (error) { console.warn("Impossible d'enregistrer l'état des fiches de cours.", error); }
  });
}

function renderToc() {
  const parts = { A1: "Les fondations", A2: "La construction", B1: "L'expression" };
  el("#gram-toc").innerHTML = ["A1", "A2", "B1"].map(lvl => `
    <div class="lvl">${parts[lvl]}</div>
    ${GRAMMAR.map((g, i) => g.level === lvl ? `
      <button data-idx="${i}" class="${i === currentArticle ? "active" : ""}">
        <span class="tk" style="min-width:18px">${String(i + 1).padStart(2, "0")}</span>${g.title}
      </button>` : "").join("")}
  `).join("");

  els("#gram-toc button").forEach(btn => {
    btn.addEventListener("click", () => {
      currentArticle = +btn.dataset.idx;
      history.replaceState(null, "", "#" + GRAMMAR[currentArticle].id);
      renderToc();
      renderArticle();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function renderArticle() {
  const g = GRAMMAR[currentArticle];
  el("#gram-article").innerHTML = `
    <article class="gram-article">
      <h2 class="mt-2 mb-2">${g.title}</h2>
      <div class="blocks">${renderBlocks(g.blocks)}</div>
      <div class="divider"></div>
      <div class="flex wrap gap-2 items-center" style="justify-content:space-between">
        ${currentArticle > 0
          ? `<button class="btn btn-ghost btn-sm" id="g-prev">← ${GRAMMAR[currentArticle - 1].title}</button>`
          : "<span></span>"}
        ${currentArticle < GRAMMAR.length - 1
          ? `<button class="btn btn-dark btn-sm" id="g-next">${GRAMMAR[currentArticle + 1].title} →</button>`
          : '<a class="btn btn-primary btn-sm" href="exercices.html">Se tester en quiz →</a>'}
      </div>
    </article>`;

  const prev = el("#g-prev"), next = el("#g-next");
  if (prev) prev.addEventListener("click", () => { go(currentArticle - 1); });
  if (next) next.addEventListener("click", () => { go(currentArticle + 1); });
}

function go(i) {
  currentArticle = i;
  history.replaceState(null, "", "#" + GRAMMAR[i].id);
  renderToc();
  renderArticle();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
