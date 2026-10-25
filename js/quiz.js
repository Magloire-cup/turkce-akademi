/* Türkçe Akademi : page exercices / quiz */

const QUIZ_TYPES_BASE = [
  {
    id: "tr-fr", name: "Turc → Français", desc: "On te montre un mot turc, tu choisis sa traduction.",
    icon: '<path d="M5 8l6 6M11 8l-6 6M15 4h5v5M15 20h5v-5M3 17h9"/>'
  },
  {
    id: "fr-tr", name: "Français → Turc", desc: "On te donne le mot français, retrouve le mot turc.",
    icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'
  },
  {
    id: "listen", name: "Écoute", desc: "Écoute le mot turc et choisis ce qu'il signifie.",
    icon: '<path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>'
  },
  {
    id: "grammar", name: "Grammaire", desc: "Harmonie, cas, conjugaison : les règles des 16 fiches.",
    icon: '<path d="M4 3v18M4 5h16l-2.5 4L20 13H4"/>'
  },
  {
    id: "mix", name: "Grand mix", desc: "Vocabulaire, écoute et grammaire mélangés. Le vrai test.",
    icon: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/>'
  }
];

const QUIZ_TYPES = QUIZ_TYPES_BASE.map(qt => {
  const tr = window.TA_LOCALE && window.TA_LOCALE.quizTypes && window.TA_LOCALE.quizTypes[qt.id];
  return tr ? Object.assign({}, qt, { name: tr.name || qt.name, desc: tr.desc || qt.desc }) : qt;
});
const N_QUESTIONS = 10;

let run = null;

document.addEventListener("DOMContentLoaded", () => {
  renderQuizHome();
});

function allWords() {
  return VOCAB.reduce((acc, t) => acc.concat(t.words.map(w => Object.assign({ theme: t.name }, w))), []);
}

function renderQuizHome() {
  el("#quiz-home").style.display = "grid";
  el("#quiz-run").style.display = "none";
  el("#quiz-home").innerHTML = QUIZ_TYPES.map(qt => {
    const best = Progress.data.quizBest[qt.id];
    return `
    <div class="card hover" style="cursor:pointer" data-quiz="${qt.id}">
      <div class="feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${qt.icon}</svg></div>
      <h3>${qt.name}</h3>
      <p>${qt.desc}</p>
      <div class="mt-2">${best !== undefined
        ? `<span class="chip gold">Record : ${best}/${N_QUESTIONS}</span>`
        : '<span class="chip">Pas encore tenté</span>'}</div>
    </div>`;
  }).join("");

  els("[data-quiz]").forEach(c => c.addEventListener("click", () => startQuiz(c.dataset.quiz)));
}

/* ---------- Génération des questions ---------- */

function pickOptions(word, words, make, labelOf) {
  const seen = new Set([labelOf(word)]);
  const opts = [make(word)];
  for (const x of shuffle(words)) {
    if (opts.length === 4) break;
    if (x.tr === word.tr || x.fr === word.fr) continue;
    const label = labelOf(x);
    if (seen.has(label)) continue;
    seen.add(label);
    opts.push(make(x));
  }
  return shuffle(opts);
}

function pickVocabQuestion(kind) {
  const words = allWords();
  const w = words[Math.floor(Math.random() * words.length)];
  if (kind === "tr-fr") {
    return {
      html: `<span class="big-tr">${w.tr}</span><br><span style="font-size:.85rem;color:var(--muted)">Que signifie ce mot ?</span>`,
      speak: w.tr,
      opts: pickOptions(w, words, x => ({ label: x.fr, correct: x === w }), x => x.fr),
      exp: `« ${w.tr} » = ${w.fr}${w.ex ? ` : ex. : ${w.ex}` : ""}`
    };
  }
  if (kind === "fr-tr") {
    return {
      html: `<span style="font-size:.9rem;color:var(--muted)">Comment dit-on en turc :</span><br><span class="big-tr">${w.fr}</span>`,
      opts: pickOptions(w, words, x => ({ label: x.tr, correct: x === w, speak: x.tr }), x => x.tr),
      exp: `« ${w.fr} » se dit « ${w.tr} »${w.ex ? ` : ex. : ${w.ex}` : ""}`
    };
  }
  return {
    html: `<button class="speak-btn" data-speak="${esc(w.tr)}" title="Réécouter" style="width:56px;height:56px;margin:0 auto 10px" aria-label="Réécouter">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>
    </button><span style="font-size:.9rem;color:var(--muted)">Écoute et choisis la signification</span>`,
    speak: w.tr,
    opts: pickOptions(w, words, x => ({ label: x.fr, correct: x === w }), x => x.fr),
    exp: `Tu as entendu « ${w.tr} » = ${w.fr}${w.ex ? ` : ex. : ${w.ex}` : ""}`
  };
}

function pickGrammarQuestion() {
  const q = GRAMMAR_QUIZ[Math.floor(Math.random() * GRAMMAR_QUIZ.length)];
  return {
    html: esc(q.q),
    opts: q.opts.map((o, i) => ({ label: o, correct: i === q.a })),
    exp: q.exp
  };
}

function buildQuestions(type) {
  const out = [];
  for (let i = 0; i < N_QUESTIONS; i++) {
    if (type === "grammar") out.push(pickGrammarQuestion());
    else if (type === "tr-fr") out.push(pickVocabQuestion("tr-fr"));
    else if (type === "fr-tr") out.push(pickVocabQuestion("fr-tr"));
    else if (type === "listen") out.push(pickVocabQuestion("listen"));
    else {
      const r = Math.random();
      if (r < 0.3) out.push(pickVocabQuestion("tr-fr"));
      else if (r < 0.5) out.push(pickVocabQuestion("fr-tr"));
      else if (r < 0.75) out.push(pickVocabQuestion("listen"));
      else out.push(pickGrammarQuestion());
    }
  }
  return out;
}

/* ---------- Déroulé ---------- */

function startQuiz(type) {
  const qt = QUIZ_TYPES.find(t => t.id === type);
  run = { type, qt, questions: buildQuestions(type), qi: 0, score: 0, answered: false };
  el("#quiz-home").style.display = "none";
  el("#quiz-run").style.display = "block";
  renderQuestion();
}

function renderQuestion() {
  const q = run.questions[run.qi];
  el("#quiz-run").innerHTML = `
    <div class="quiz-box">
      <div class="quiz-head">
        <span>${run.qt.name} · question ${run.qi + 1}/${run.questions.length}</span>
        <button class="btn btn-ghost btn-sm" id="quiz-quit">Quitter</button>
      </div>
      <div class="quiz-track"><div class="fill" style="width:${(run.qi / run.questions.length) * 100}%"></div></div>
      <div class="quiz-question">${q.html}</div>
      <div class="quiz-options">
        ${q.opts.map((o, i) => `
          <button class="quiz-opt" data-i="${i}">
            <span class="key">${"ABCD"[i]}</span>
            <span style="flex:1">${esc(o.label)}</span>
            ${o.speak ? `<span class="speak-btn" data-speak="${esc(o.speak)}" title="Écouter" aria-label="Écouter"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg></span>` : ""}
          </button>`).join("")}
      </div>
      <p class="muted mt-2" id="quiz-exp" style="min-height:26px"></p>
    </div>`;

  if (q.speak) setTimeout(() => speak(q.speak), 300);

  el("#quiz-quit").addEventListener("click", () => renderQuizHome());
  els(".quiz-opt").forEach(btn => {
    btn.addEventListener("click", e => {
      if (run.answered) return;
      if (e.target.closest("[data-speak]")) return; // clic sur le haut-parleur
      run.answered = true;
      const chosen = q.opts[+btn.dataset.i];
      els(".quiz-opt").forEach((b, i) => {
        b.disabled = true;
        if (q.opts[i].correct) b.classList.add("correct");
        else if (b === btn) b.classList.add("wrong");
      });
      if (chosen.correct) run.score++;
      el("#quiz-exp").innerHTML = `<b style="color:${chosen.correct ? "var(--green)" : "var(--red)"}">${chosen.correct ? "Doğru ! " : "Non : "}</b>${esc(q.exp)}`;
      setTimeout(() => {
        run.answered = false;
        run.qi++;
        if (run.qi < run.questions.length) renderQuestion();
        else finishQuiz();
      }, 2000);
    });
  });
}

function finishQuiz() {
  const s = run.score;
  const isRecord = Progress.setQuizBest(run.type, s);
  const grade = s === run.questions.length ? "Kusursuz ! Sans faute."
    : s >= 8 ? "Très beau score."
    : s >= 5 ? "Correct : continue sur cette lancée."
    : "Ça viendra : relis la leçon ou fais un tour de flashcards.";

  el("#quiz-run").innerHTML = `
    <div class="quiz-box">
      <div class="quiz-result">
        <span class="chip red">${run.qt.name}</span>
        <div class="score mt-2"><b>${s}</b>/${run.questions.length}</div>
        <p>${grade}</p>
        ${isRecord ? '<span class="chip gold">Nouveau record !</span>' : ""}
        <div class="mt-3 flex wrap gap-2" style="justify-content:center">
          <button class="btn btn-primary" id="q-retry">Refaire</button>
          <button class="btn btn-ghost" id="q-home">Autres quiz</button>
        </div>
      </div>
    </div>`;
  el("#q-retry").addEventListener("click", () => startQuiz(run.type));
  el("#q-home").addEventListener("click", renderQuizHome());
}
