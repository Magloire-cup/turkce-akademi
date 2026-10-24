/* Türkçe Akademi : parcours guidé en 19 unités */

const PARCOURS = [...PARCOURS_A, ...PARCOURS_B, ...PARCOURS_C];
const PARCOURS_QUIZ_TOTAL = PARCOURS.reduce((n, u) => n + u.quiz.length, 0);
const PARCOURS_QUIZ_KEYS = new Set(PARCOURS.flatMap(u => u.quiz.map((_, qi) => `${u.id}-${qi}`)));

const QUIZ_KEY = "ta_parcours_quiz";
let quizDone = {};
try {
  const saved = JSON.parse(localStorage.getItem(QUIZ_KEY) || "{}");
  if (saved && typeof saved === "object" && !Array.isArray(saved)) {
    Object.keys(saved).forEach(key => {
      if (saved[key] === true && PARCOURS_QUIZ_KEYS.has(key)) quizDone[key] = true;
    });
  }
} catch (e) { quizDone = {}; }
try { localStorage.setItem(QUIZ_KEY, JSON.stringify(quizDone)); } catch (e) {}

const UNIT_LEVELS = { A1: "Les bases", A2: "L'autonomie", B1: "L'approfondissement" };
let currentUnit = 0;

document.addEventListener("DOMContentLoaded", () => {
  const hash = location.hash.replace("#", "");
  const found = PARCOURS.findIndex(u => u.id === hash);
  currentUnit = found >= 0 ? found : 0;
  renderToc();
  renderUnit();
  window.addEventListener("hashchange", () => {
    const i = PARCOURS.findIndex(u => u.id === location.hash.replace("#", ""));
    if (i >= 0 && i !== currentUnit) { currentUnit = i; renderToc(); renderUnit(); }
  });
});

function chipClass(level) {
  return level === "A1" ? "red" : level === "A2" ? "gold" : "green";
}

function renderToc() {
  const done = Object.keys(quizDone).length;
  el("#parcours-toc").innerHTML = `
    <div class="lvl" id="parcours-progress">${done}/${PARCOURS_QUIZ_TOTAL} réponses justes</div>
    ${["A1", "A2", "B1"].map(lvl => `
      <div class="lvl">${UNIT_LEVELS[lvl]} · ${lvl}</div>
      ${PARCOURS.map((u, i) => u.level === lvl ? `
        <button data-idx="${i}" class="${i === currentUnit ? "active" : ""}">
          <span class="tk" style="min-width:18px">${String(u.num).padStart(2, "0")}</span>${u.title}
        </button>` : "").join("")}
    `).join("")}`;

  els("#parcours-toc button").forEach(btn => {
    btn.addEventListener("click", () => go(+btn.dataset.idx));
  });
}

function renderUnit() {
  const u = PARCOURS[currentUnit];
  const total = PARCOURS.length;
  el("#parcours-unit").innerHTML = `
    <article class="gram-article">
      <div class="flex wrap gap-2 items-center">
        <span class="chip ${chipClass(u.level)}">${u.level}</span>
        <span class="muted" style="font-size:.82rem;font-weight:600">Unité ${u.num} / ${total}</span>
      </div>
      <h2 class="mt-2 mb-2">${u.title}</h2>

      <div class="note info">
        <b class="tag">Objectif</b>
        <div>${u.goal}</div>
      </div>

      <h4 class="blk-h">Vocabulaire clé</h4>
      <div class="grid grid-2 parcours-vocab">
        ${u.vocab.map(([tr, fr]) => `
          <div class="ex-line">
            <button class="speak-btn" data-speak="${esc(tr)}" title="Écouter" aria-label="Écouter ${esc(tr)}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>
            </button>
            <span class="tr">${tr}</span><span class="fr">${fr}</span>
          </div>`).join("")}
      </div>

      <div class="blocks">${renderBlocks(u.blocks)}</div>

      <h4 class="blk-h">Mini-quiz</h4>
      <div class="pq" data-unit="${u.id}">
        ${u.quiz.map((q, qi) => {
          const done = quizDone[`${u.id}-${qi}`];
          return `
            <div class="pq-q" data-q="${qi}">
              <p class="pq-title">${qi + 1}. ${q.q}</p>
              <div class="pq-opts">
                ${q.options.map((opt, oi) => `
                  <button class="pq-opt${done && oi === q.a ? " ok" : ""}" data-i="${oi}"${done ? " disabled" : ""}>${opt}</button>`).join("")}
              </div>
              <p class="pq-why${done ? " show" : ""}">${q.why}</p>
            </div>`;
        }).join("")}
      </div>

      <div class="divider"></div>
      <div class="flex wrap gap-2 items-center" style="justify-content:space-between">
        ${currentUnit > 0
          ? `<button class="btn btn-ghost btn-sm" id="p-prev">← ${PARCOURS[currentUnit - 1].title}</button>`
          : "<span></span>"}
        ${currentUnit < total - 1
          ? `<button class="btn btn-dark btn-sm" id="p-next">${PARCOURS[currentUnit + 1].title} →</button>`
          : '<a class="btn btn-primary btn-sm" href="exercices.html">Se tester en quiz →</a>'}
      </div>
    </article>`;

  bindQuiz(u);
  const prev = el("#p-prev"), next = el("#p-next");
  if (prev) prev.addEventListener("click", () => go(currentUnit - 1));
  if (next) next.addEventListener("click", () => go(currentUnit + 1));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindQuiz(u) {
  els(".pq-q").forEach(qEl => {
    const qi = +qEl.dataset.q;
    const key = `${u.id}-${qi}`;
    els(".pq-opt", qEl).forEach(btn => {
      btn.addEventListener("click", () => {
        if (qEl.classList.contains("answered")) return;
        const chosen = +btn.dataset.i;
        const correct = u.quiz[qi].a;
        qEl.classList.add("answered");
        els(".pq-opt", qEl).forEach(b => {
          b.disabled = true;
          if (+b.dataset.i === correct) b.classList.add("ok");
        });
        el(".pq-why", qEl).classList.add("show");

        if (chosen === correct) {
          if (!quizDone[key]) {
            quizDone[key] = true;
            localStorage.setItem(QUIZ_KEY, JSON.stringify(quizDone));
            toast("Bonne réponse !");
          }
          const p = el("#parcours-progress");
          if (p) p.textContent = `${Object.keys(quizDone).length}/${PARCOURS_QUIZ_TOTAL} réponses justes`;
        } else {
          btn.classList.add("no");
          toast("Presque ! Lis l'explication et retiens la forme.");
        }
      });
    });
  });
}

function go(i) {
  if (i < 0 || i >= PARCOURS.length) return;
  currentUnit = i;
  history.replaceState(null, "", "#" + PARCOURS[i].id);
  renderToc();
  renderUnit();
}
