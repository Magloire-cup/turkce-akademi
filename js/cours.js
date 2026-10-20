/* Türkçe Akademi — page des cours */

let currentModule = 0;
let currentTab = "lecon";

document.addEventListener("DOMContentLoaded", () => {
  renderSidebar();
  const hash = location.hash.replace("#", "");
  const idx = COURSE.findIndex(m => m.id === hash);
  currentModule = idx >= 0 ? idx : 0;
  renderModule();
  window.addEventListener("hashchange", () => {
    const h = location.hash.replace("#", "");
    const i = COURSE.findIndex(m => m.id === h);
    if (i >= 0 && i !== currentModule) { currentModule = i; currentTab = "lecon"; renderModule(); }
  });
});

function renderSidebar() {
  const groups = { A1: [], A2: [], B1: [] };
  COURSE.forEach((m, i) => groups[m.level].push({ m, i }));
  el("#course-side").innerHTML = ["A1", "A2", "B1"].map(lvl => `
    <div class="side-group">${lvl === "A1" ? "Découverte" : lvl === "A2" ? "Construction" : "Expression"} · ${lvl}</div>
    ${groups[lvl].map(({ m, i }) => `
      <button class="side-item ${Progress.isModuleDone(m.id) ? "done" : ""}" data-idx="${i}">
        <span class="n">${m.num}</span>
        <span>${m.title}</span>
        <svg class="ck" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
      </button>`).join("")}
  `).join("");

  els("#course-side .side-item").forEach(btn => {
    btn.addEventListener("click", () => {
      currentModule = +btn.dataset.idx;
      currentTab = "lecon";
      history.replaceState(null, "", "#" + COURSE[currentModule].id);
      renderModule();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function renderModule() {
  const m = COURSE[currentModule];
  const done = Progress.isModuleDone(m.id);
  const tabs = [
    ["lecon", "Leçon"],
    ["dialogue", "Dialogue"],
    ["vocab", "Vocabulaire"],
    ["quiz", "Quiz"]
  ];

  el("#course-main").innerHTML = `
    <article class="lesson">
      <div class="course-top">
        <span class="chip red">Module ${m.num} · ${m.level}</span>
        ${done ? '<span class="chip green">Terminé</span>' : ""}
        <button class="btn btn-sm ${done ? "btn-ghost" : "btn-green"}" id="btn-done">
          ${done ? "Marquer comme non terminé" : "Marquer comme terminé (+30 XP)"}
        </button>
      </div>
      <h2 class="lesson-title">${m.title}</h2>
      <p class="muted">${m.subtitle}</p>

      <div class="tabs" role="tablist">
        ${tabs.map(([id, label]) => `<button class="tab ${currentTab === id ? "active" : ""}" data-tab="${id}" role="tab">${label}</button>`).join("")}
      </div>
      <div id="tab-content"></div>

      <div class="divider"></div>
      <div class="flex wrap gap-2 items-center" style="justify-content:space-between">
        ${currentModule > 0
          ? `<button class="btn btn-ghost btn-sm" id="btn-prev">← Module ${COURSE[currentModule - 1].num}</button>`
          : "<span></span>"}
        ${currentModule < COURSE.length - 1
          ? `<button class="btn btn-dark btn-sm" id="btn-next">Module ${COURSE[currentModule + 1].num} →</button>`
          : `<a class="btn btn-primary btn-sm" href="vocabulaire.html">Passer au vocabulaire →</a>`}
      </div>
    </article>
  `;

  renderSidebarActive();
  renderTab();

  el("#btn-done").addEventListener("click", () => {
    const nowDone = Progress.toggleModuleDone(m.id);
    toast(nowDone ? "Module terminé — tebrikler !" : "Module remis en cours");
    renderSidebar();
    renderModule();
  });
  const prev = el("#btn-prev"), next = el("#btn-next");
  if (prev) prev.addEventListener("click", () => { go(currentModule - 1); });
  if (next) next.addEventListener("click", () => { go(currentModule + 1); });
  els(".tab").forEach(t => t.addEventListener("click", () => {
    currentTab = t.dataset.tab;
    els(".tab").forEach(x => x.classList.toggle("active", x === t));
    renderTab();
  }));
}

function go(i) {
  currentModule = i;
  currentTab = "lecon";
  history.replaceState(null, "", "#" + COURSE[i].id);
  renderModule();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderSidebarActive() {
  els("#course-side .side-item").forEach(b => {
    b.classList.toggle("active", +b.dataset.idx === currentModule);
  });
}

function renderTab() {
  const m = COURSE[currentModule];
  const c = el("#tab-content");
  if (currentTab === "lecon") {
    c.innerHTML = `
      <div class="objectifs">
        <h4>Objectifs du module</h4>
        <ul>${m.objectifs.map(o => `<li>${o}</li>`).join("")}</ul>
      </div>
      <div class="blocks">${renderBlocks(m.blocks)}</div>`;
  } else if (currentTab === "dialogue") {
    c.innerHTML = `
      <h4 class="blk-h">Dialogue — ${m.dialogue.title}</h4>
      <p class="muted mb-2">Joue-le à voix haute : chaque réplique s'écoute. Les noms alternent les côtés comme dans une vraie conversation.</p>
      <div class="dialogue">
        ${m.dialogue.lines.map((l, i) => `
          <div class="dlg-line ${i % 2 ? "right" : ""}">
            <div class="dlg-avatar">${l.name.slice(0, 2).toUpperCase()}</div>
            <div class="dlg-bubble">
              <div class="dlg-name">${l.name}</div>
              <div class="dlg-tr">
                ${l.tr}
                <button class="speak-btn" data-speak="${esc(l.tr)}" title="Écouter" aria-label="Écouter">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>
                </button>
              </div>
              <div class="dlg-fr">${l.fr}</div>
            </div>
          </div>`).join("")}
      </div>`;
  } else if (currentTab === "vocab") {
    c.innerHTML = `
      <h4 class="blk-h">Vocabulaire clé du module</h4>
      <p class="muted mb-2">${m.vocab.length} mots à retenir. Clique sur le haut-parleur pour la prononciation.</p>
      <div>${m.vocab.map(v => `
        <div class="ex-line">
          <button class="speak-btn" data-speak="${esc(v.tr)}" title="Écouter" aria-label="Écouter ${esc(v.tr)}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>
          </button>
          <span class="tr">${v.tr}</span><span class="fr">${v.fr}</span>
        </div>`).join("")}</div>
      <p class="muted mt-3">Pour pratiquer ces mots en révision espacée, direction les <a href="vocabulaire.html" style="color:var(--red);font-weight:600">flashcards</a>.</p>`;
  } else if (currentTab === "quiz") {
    renderModuleQuiz(m, c);
  }
}

function renderModuleQuiz(m, container) {
  const questions = shuffle(m.quiz);
  let qi = 0, score = 0, answered = false;

  function render() {
    const q = questions[qi];
    container.innerHTML = `
      <h4 class="blk-h">Quiz du module ${m.num}</h4>
      <div class="quiz-box">
        <div class="quiz-head"><span>Question ${qi + 1} / ${questions.length}</span><span>Score : ${score}</span></div>
        <div class="quiz-track"><div class="fill" style="width:${(qi / questions.length) * 100}%"></div></div>
        <div class="quiz-question">${q.q}</div>
        <div class="quiz-options">
          ${q.opts.map((o, i) => `<button class="quiz-opt" data-i="${i}"><span class="key">${"ABCD"[i]}</span>${o}</button>`).join("")}
        </div>
        <p class="muted mt-2" id="quiz-exp" style="min-height:24px"></p>
      </div>`;

    els(".quiz-opt", container).forEach(btn => {
      btn.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        const i = +btn.dataset.i;
        els(".quiz-opt", container).forEach(b => {
          b.disabled = true;
          if (+b.dataset.i === q.a) b.classList.add("correct");
          else if (b === btn) b.classList.add("wrong");
        });
        if (i === q.a) score++;
        el("#quiz-exp", container).innerHTML = `<b style="color:${i === q.a ? "var(--green)" : "var(--red)"}">${i === q.a ? "Doğru ! " : "Non — "}</b>${esc(q.exp)}`;
        setTimeout(() => {
          answered = false;
          qi++;
          if (qi < questions.length) render();
          else finish();
        }, 1800);
      });
    });
  }

  function finish() {
    const pct = Math.round((score / questions.length) * 100);
    const xp = Math.max(5, Math.round(pct / 5));
    Progress.addXp(xp);
    container.innerHTML = `
      <div class="quiz-box">
        <div class="quiz-result">
          <div class="score"><b>${score}</b>/${questions.length}</div>
          <p>${pct === 100 ? "Parfait ! Kusursuz !" : pct >= 60 ? "Bien joué — un petit tour de flashcards et c'est validé." : "Reprends la leçon, puis retente : c'est comme ça qu'on apprend."}</p>
          <span class="xp-burst">+${xp} XP</span><br><br>
          <button class="btn btn-primary" id="quiz-retry">Refaire le quiz</button>
          ${currentModule < COURSE.length - 1 ? '<button class="btn btn-ghost" id="quiz-next">Module suivant →</button>' : ""}
        </div>
      </div>`;
    el("#quiz-retry", container).addEventListener("click", () => { qi = 0; score = 0; answered = false; render(); });
    const nx = el("#quiz-next", container);
    if (nx) nx.addEventListener("click", () => go(currentModule + 1));
  }

  render();
}
