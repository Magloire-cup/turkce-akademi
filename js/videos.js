/* Türkçe Akademi : compagnon vidéo A1 / A2 / B1 */

const VIDEOS = [...VIDEOS_A1, ...VIDEOS_A2, ...VIDEOS_B1];
const VIDEO_QUIZ_TOTAL = VIDEOS.reduce((n, u) => n + u.quiz.length, 0);
const VIDEO_QUIZ_KEYS = new Set(VIDEOS.flatMap(u => u.quiz.map((_, qi) => `${u.id}-${qi}`)));

const VIDEO_PLAYLISTS = {
  A1: "https://www.youtube.com/playlist?list=PLJnZq9X10tdbMDbn4Q5hdwh4VEGtrBWIs",
  A2: "https://www.youtube.com/playlist?list=PLJnZq9X10tdY3KPES-H5DsYhy89AGl2wz",
  B1: "https://www.youtube.com/@yeeorgtr/playlists"
};

const VIDEO_LEVELS = { A1: "Les bases", A2: "L'autonomie", B1: "L'approfondissement" };
const VIDEO_QUIZ_KEY = "ta_videos_quiz";
const VIDEO_DONE_KEY = "ta_videos_done";

let videoQuizDone = {};
let videoDone = [];
try {
  const saved = JSON.parse(localStorage.getItem(VIDEO_QUIZ_KEY) || "{}");
  if (saved && typeof saved === "object" && !Array.isArray(saved)) {
    Object.keys(saved).forEach(key => {
      if (saved[key] === true && VIDEO_QUIZ_KEYS.has(key)) videoQuizDone[key] = true;
    });
  }
} catch (e) { videoQuizDone = {}; }
try { localStorage.setItem(VIDEO_QUIZ_KEY, JSON.stringify(videoQuizDone)); } catch (e) {}
try {
  const saved = JSON.parse(localStorage.getItem(VIDEO_DONE_KEY) || "[]");
  if (Array.isArray(saved)) videoDone = [...new Set(saved.filter(id => VIDEOS.some(v => v.id === id)))];
} catch (e) { videoDone = []; }

let currentLevel = "A1";
let currentIndex = 0;

function videoList(level) { return VIDEOS.filter(v => v.level === level); }
function currentLesson() { return videoList(currentLevel)[currentIndex]; }
function videoChipClass(level) { return level === "A1" ? "red" : level === "A2" ? "gold" : "green"; }

document.addEventListener("DOMContentLoaded", () => {
  const hash = decodeURIComponent(location.hash.replace("#", ""));
  const found = VIDEOS.find(v => v.id === hash);
  if (found) {
    currentLevel = found.level;
    currentIndex = videoList(currentLevel).findIndex(v => v.id === found.id);
  } else if (["A1", "A2", "B1"].includes(hash.toUpperCase())) {
    currentLevel = hash.toUpperCase();
    currentIndex = 0;
  }
  renderVideoTabs();
  renderVideoToc();
  renderVideoLesson();

  window.addEventListener("hashchange", () => {
    const id = decodeURIComponent(location.hash.replace("#", ""));
    const lesson = VIDEOS.find(v => v.id === id);
    if (!lesson) return;
    const list = videoList(lesson.level);
    const idx = list.findIndex(v => v.id === id);
    if (lesson.level === currentLevel && idx === currentIndex) return;
    currentLevel = lesson.level;
    currentIndex = idx;
    renderVideoTabs();
    renderVideoToc();
    renderVideoLesson();
  });
});

function renderVideoTabs() {
  const tabs = el("#video-tabs");
  if (!tabs) return;
  tabs.innerHTML = ["A1", "A2", "B1"].map(lvl => {
    const list = videoList(lvl);
    const done = list.filter(v => videoDone.includes(v.id)).length;
    return `<button class="tab${lvl === currentLevel ? " active" : ""}" data-level="${lvl}">
      ${lvl} · ${done}/${list.length}
    </button>`;
  }).join("");
  els("#video-tabs .tab").forEach(btn => {
    btn.addEventListener("click", () => switchVideoLevel(btn.dataset.level));
  });
}

function switchVideoLevel(level) {
  if (level === currentLevel) return;
  currentLevel = level;
  currentIndex = 0;
  renderVideoTabs();
  renderVideoToc();
  renderVideoLesson();
}

function renderVideoToc() {
  const toc = el("#video-toc");
  if (!toc) return;
  const list = videoList(currentLevel);
  const quizDone = Object.keys(videoQuizDone).length;
  toc.innerHTML = `
    <div class="lvl" id="video-progress">${videoDone.length}/${VIDEOS.length} fiches révisées</div>
    <div class="lvl" id="video-quiz-progress">${quizDone}/${VIDEO_QUIZ_TOTAL} réponses justes</div>
    <div class="lvl">${VIDEO_LEVELS[currentLevel]} · ${currentLevel}</div>
    ${list.map((u, i) => `
      <button data-idx="${i}" class="${i === currentIndex ? "active" : ""}${videoDone.includes(u.id) ? " done" : ""}">
        <span class="tk" style="min-width:18px">${String(u.num).padStart(2, "0")}</span>${u.title}
        <svg class="ck" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>
      </button>`).join("")}`;
  els("#video-toc button").forEach(btn => {
    btn.addEventListener("click", () => goVideo(+btn.dataset.idx));
  });
}

function renderVideoLesson() {
  const u = currentLesson();
  if (!u) return;
  const list = videoList(currentLevel);
  const playlist = VIDEO_PLAYLISTS[u.level];
  const search = "https://www.youtube.com/results?search_query=" +
    encodeURIComponent("Yunus Emre Enstitüsü " + u.level + " " + u.watch);
  const isDone = videoDone.includes(u.id);

  el("#video-lesson").innerHTML = `
    <article class="gram-article video-lesson">
      <div class="flex wrap gap-2 items-center">
        <span class="chip ${videoChipClass(u.level)}">${u.level}</span>
        <span class="muted" style="font-size:.82rem;font-weight:600">Fiche ${u.num} / ${list.length}</span>
        <span class="chip blue">Compagnon vidéo</span>
      </div>
      <h2 class="mt-2 mb-1">${u.title}</h2>
      <p class="video-tr">${u.tr}</p>

      <div class="note info">
        <b class="tag">Objectif</b>
        <div>${u.goal}</div>
      </div>

      <div class="video-callout">
        <div class="video-callout-main">
          <b>Dans la série officielle</b>
          <p>Regarde la leçon correspondante sur la chaîne Yunus Emre Enstitüsü, puis reviens vérifier les points clés ici.</p>
        </div>
        <div class="video-callout-actions">
          <a class="btn btn-primary btn-sm" href="${playlist}" target="_blank" rel="noopener">${u.level === "B1" ? "Toutes les playlists" : "Playlist " + u.level} ↗</a>
          <a class="btn btn-ghost btn-sm" href="${search}" target="_blank" rel="noopener">Chercher « ${u.watch} » ↗</a>
        </div>
      </div>

      <div class="blocks">${renderBlocks(u.blocks)}</div>

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

      <h4 class="blk-h">Mini-quiz</h4>
      <div class="pq" data-unit="${u.id}">
        ${u.quiz.map((q, qi) => {
          const answered = videoQuizDone[`${u.id}-${qi}`];
          return `
            <div class="pq-q" data-q="${qi}">
              <p class="pq-title">${qi + 1}. ${q.q}</p>
              <div class="pq-opts">
                ${q.options.map((opt, oi) => `
                  <button class="pq-opt${answered && oi === q.a ? " ok" : ""}" data-i="${oi}"${answered ? " disabled" : ""}>${opt}</button>`).join("")}
              </div>
              <p class="pq-why${answered ? " show" : ""}">${q.why}</p>
            </div>`;
        }).join("")}
      </div>

      <div class="video-done-row">
        <button class="btn ${isDone ? "btn-green" : "btn-ghost"} btn-sm" id="video-mark"${isDone ? " disabled" : ""}>
          ${isDone ? "Fiche révisée ✓" : "Marquer cette fiche comme révisée"}
        </button>
      </div>

      <div class="divider"></div>
      <div class="flex wrap gap-2 items-center" style="justify-content:space-between">
        ${currentIndex > 0
          ? `<button class="btn btn-ghost btn-sm" id="video-prev">← ${list[currentIndex - 1].title}</button>`
          : "<span></span>"}
        ${currentIndex < list.length - 1
          ? `<button class="btn btn-dark btn-sm" id="video-next">${list[currentIndex + 1].title} →</button>`
          : (currentLevel !== "B1"
            ? `<button class="btn btn-primary btn-sm" id="video-next-level">Passer au niveau ${currentLevel === "A1" ? "A2" : "B1"} →</button>`
            : '<a class="btn btn-primary btn-sm" href="exercices.html">Se tester en quiz →</a>')}
      </div>
    </article>`;

  bindVideoQuiz(u);
  const mark = el("#video-mark");
  if (mark) mark.addEventListener("click", () => markVideoDone(u));
  const prev = el("#video-prev"), next = el("#video-next"), nextLevel = el("#video-next-level");
  if (prev) prev.addEventListener("click", () => goVideo(currentIndex - 1));
  if (next) next.addEventListener("click", () => goVideo(currentIndex + 1));
  if (nextLevel) nextLevel.addEventListener("click", () => switchVideoLevel(currentLevel === "A1" ? "A2" : "B1"));
  history.replaceState(null, "", "#" + u.id);
}

function bindVideoQuiz(u) {
  els(".pq-q", el("#video-lesson")).forEach(qEl => {
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
          if (!videoQuizDone[key]) {
            videoQuizDone[key] = true;
            try { localStorage.setItem(VIDEO_QUIZ_KEY, JSON.stringify(videoQuizDone)); } catch (e) {}
            toast("Bonne réponse !");
          }
          const p = el("#video-quiz-progress");
          if (p) p.textContent = `${Object.keys(videoQuizDone).length}/${VIDEO_QUIZ_TOTAL} réponses justes`;
        } else {
          btn.classList.add("no");
          toast("Presque ! Lis l'explication et retiens la forme.");
        }
      });
    });
  });
}

function markVideoDone(u) {
  if (videoDone.includes(u.id)) return;
  videoDone.push(u.id);
  try { localStorage.setItem(VIDEO_DONE_KEY, JSON.stringify(videoDone)); } catch (e) {}
  toast("Fiche révisée !");
  renderVideoTabs();
  renderVideoToc();
  const mark = el("#video-mark");
  if (mark) {
    mark.textContent = "Fiche révisée ✓";
    mark.className = "btn btn-green btn-sm";
    mark.disabled = true;
  }
}

function goVideo(i) {
  const list = videoList(currentLevel);
  if (i < 0 || i >= list.length) return;
  currentIndex = i;
  renderVideoToc();
  renderVideoLesson();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
