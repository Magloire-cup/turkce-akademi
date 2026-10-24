/* ============================================================
   Türkçe Akademi — Emploi du temps d'étude + minuteur Pomodoro
   ============================================================ */

const PLAN_TYPES = {
  sleep:   { label: "Sommeil",        cls: "pb-sleep" },
  school:  { label: "École",          cls: "pb-school" },
  study:   { label: "Étude",          cls: "pb-study" },
  meal:    { label: "Repas",          cls: "pb-meal" },
  break:   { label: "Pause",          cls: "pb-break" },
  rest:    { label: "Repos / sieste", cls: "pb-rest" },
  free:    { label: "Temps libre",    cls: "pb-free" },
  prep:    { label: "Préparation",    cls: "pb-prep" },
  transit: { label: "Trajet",         cls: "pb-transit" }
};

/* Rythme actuel (reconstitué d'après les habitudes décrites) */
const PLAN_CURRENT = [
  { s: "21:00", e: "03:00", label: "Sommeil", type: "sleep", warn: "≈ 6 h seulement : le cerveau n'a pas le temps de consolider les apprentissages de la veille." },
  { s: "03:00", e: "04:00", label: "Apprendre le nouveau cours", type: "study", warn: "Réveil à 3 h du matin : la concentration et la mémorisation sont au plus bas, exactement quand tu veux apprendre du neuf." },
  { s: "04:00", e: "06:30", label: "Réviser", type: "study", warn: "2 h 30 de travail sur un cerveau non reposé : gros effort, faible rendement." },
  { s: "06:30", e: "07:00", label: "Petit-déjeuner", type: "meal" },
  { s: "07:00", e: "09:00", label: "Préparer + trajet", type: "prep" },
  { s: "09:00", e: "15:45", label: "Cours à l'école", type: "school" },
  { s: "15:45", e: "19:00", label: "Retour, puis temps libre (écrans)", type: "free", warn: "≈ 3 h d'affilée sous-utilisées, alors qu'il reste de l'énergie pour travailler." },
  { s: "19:00", e: "20:00", label: "Sieste", type: "rest", warn: "Une heure de sieste à 19 h repousse le coucher et coupe la nuit." },
  { s: "20:00", e: "20:45", label: "Dîner", type: "meal" },
  { s: "20:45", e: "21:00", label: "Préparer le coucher", type: "prep" }
];

/* Emploi du temps optimisé — jour de semaine */
const PLAN_WEEKDAY = [
  { s: "06:30", e: "06:40", label: "Réveil + grand verre d'eau", type: "prep", note: "Lumière du jour tout de suite : elle calibre l'horloge biologique." },
  { s: "06:40", e: "07:10", label: "Révision du matin : flashcards + mot du jour", type: "study", note: "Le cerveau est frais : le meilleur moment pour la révision espacée." },
  { s: "07:10", e: "07:50", label: "Petit-déjeuner + habillage", type: "meal" },
  { s: "07:50", e: "09:00", label: "Trajet : podcast ou réécoute des dialogues", type: "transit", note: "De l'immersion passive sans effort : ça compte." },
  { s: "09:00", e: "15:45", label: "Cours à l'école", type: "school" },
  { s: "15:45", e: "16:15", label: "Retour + goûter", type: "transit" },
  { s: "16:15", e: "16:45", label: "Repos sans écran (promenade, douche)", type: "rest", note: "30 min pour « descendre » de la journée, sans téléphone." },
  { s: "16:45", e: "17:35", label: "Séance 1 · Nouveau cours (2 × Pomodoro)", type: "study", note: "C'est ici que tu apprends du neuf — l'après-midi, quand il reste de l'énergie." },
  { s: "17:35", e: "17:45", label: "Pause", type: "break" },
  { s: "17:45", e: "18:35", label: "Séance 2 · Exercices & grammaire", type: "study" },
  { s: "18:35", e: "18:50", label: "Pause", type: "break" },
  { s: "18:50", e: "19:30", label: "Séance 3 · Vocabulaire & quiz", type: "study" },
  { s: "19:30", e: "19:50", label: "Sieste courte (20 min)", type: "rest", note: "Ta sieste est gardée ! 20 minutes max, réveil obligatoire, avant 20 h." },
  { s: "19:50", e: "20:30", label: "Dîner", type: "meal" },
  { s: "20:30", e: "21:00", label: "Révision légère : expressions du jour", type: "study", note: "Un dernier passage léger : l'endormissement fixe ce que tu as vu." },
  { s: "21:00", e: "21:30", label: "Temps libre + préparer le sac de demain", type: "free" },
  { s: "21:30", e: "06:30", label: "Sommeil (9 h)", type: "sleep", note: "La récupération complète : c'est pendant la nuit que la mémoire trie et garde." }
];

/* Emploi du temps optimisé — week-end */
const PLAN_WEEKEND = [
  { s: "08:00", e: "08:10", label: "Réveil (sans alarme si possible)", type: "prep" },
  { s: "08:10", e: "08:40", label: "Révision : flashcards à revoir", type: "study" },
  { s: "08:40", e: "09:20", label: "Petit-déjeuner", type: "meal" },
  { s: "09:20", e: "09:30", label: "Pause", type: "break" },
  { s: "09:30", e: "10:20", label: "Séance 1 · Nouveau module", type: "study", note: "Le matin est réservé au neuf, quand la concentration est maximale." },
  { s: "10:20", e: "10:35", label: "Pause", type: "break" },
  { s: "10:35", e: "11:25", label: "Séance 2 · Exercices", type: "study" },
  { s: "11:25", e: "11:40", label: "Pause", type: "break" },
  { s: "11:40", e: "12:30", label: "Séance 3 · Grammaire & dialogues", type: "study" },
  { s: "12:30", e: "14:00", label: "Déjeuner + sieste + temps libre", type: "free" },
  { s: "14:00", e: "14:50", label: "Séance 4 · Vocabulaire", type: "study" },
  { s: "14:50", e: "15:05", label: "Pause", type: "break" },
  { s: "15:05", e: "15:55", label: "Séance 5 · Quiz & bilan de la semaine", type: "study", note: "Quiz mixte + relecture des fiches de grammaire restées floues." },
  { s: "15:55", e: "20:30", label: "Temps libre : sport, amis, sorties", type: "free", note: "L'après-midi du week-end reste libre : la régularité, pas l'excès." },
  { s: "20:30", e: "21:00", label: "Révision légère du soir", type: "study" },
  { s: "21:00", e: "22:30", label: "Préparer la semaine, temps libre", type: "free" },
  { s: "22:30", e: "08:00", label: "Sommeil (9 h 30)", type: "sleep" }
];

/* ---------- Rendu des plannings ---------- */
function planMinutes(s, e) {
  const [sh, sm] = s.split(":").map(Number);
  const [eh, em] = e.split(":").map(Number);
  let mins = (eh * 60 + em) - (sh * 60 + sm);
  if (mins <= 0) mins += 24 * 60;
  return mins;
}
function planFmt(mins) {
  if (mins < 60) return mins + " min";
  if (mins % 60 === 0) return (mins / 60) + " h";
  return Math.floor(mins / 60) + " h " + String(mins % 60).padStart(2, "0");
}
function renderPlan(container, blocks) {
  if (!container) return;
  container.innerHTML = blocks.map(b => {
    const t = PLAN_TYPES[b.type];
    const extra = b.warn
      ? `<span class="pb-warn">⚠ ${b.warn}</span>`
      : (b.note ? `<span class="pb-note">${b.note}</span>` : "");
    return `<div class="plan-block ${t.cls}">
      <span class="pb-time">${b.s}&nbsp;–&nbsp;${b.e}</span>
      <span class="pb-body">
        <span class="pb-label">${b.label}</span>
        <span class="pb-meta">${t.label} · ${planFmt(planMinutes(b.s, b.e))}</span>
        ${extra}
      </span>
    </div>`;
  }).join("");
}
function planStatsLine(blocks) {
  let study = 0, sleep = 0;
  blocks.forEach(b => {
    if (b.type === "study") study += planMinutes(b.s, b.e);
    if (b.type === "sleep") sleep += planMinutes(b.s, b.e);
  });
  return `<span class="chip green">Étude : ${planFmt(study)} en séances</span> <span class="chip">Sommeil : ${planFmt(sleep)}</span>`;
}

const planCurrent = el("#plan-current");
const planOptimized = el("#plan-optimized");
const planSummaryLine = el("#plan-summary-line");

renderPlan(planCurrent, PLAN_CURRENT);
renderPlan(planOptimized, PLAN_WEEKDAY);
if (planSummaryLine) planSummaryLine.innerHTML = planStatsLine(PLAN_WEEKDAY);

els(".plan-tab").forEach(btn => btn.addEventListener("click", () => {
  els(".plan-tab").forEach(b => b.classList.toggle("active", b === btn));
  const weekend = btn.dataset.plan === "weekend";
  const blocks = weekend ? PLAN_WEEKEND : PLAN_WEEKDAY;
  renderPlan(planOptimized, blocks);
  if (planSummaryLine) planSummaryLine.innerHTML = planStatsLine(blocks);
}));

/* ---------- Minuteur Pomodoro (25 / 5, longue pause 15 après 4 cycles) ---------- */
const POMO_WORK = 25 * 60, POMO_SHORT = 5 * 60, POMO_LONG = 15 * 60;
const POMO_KEY = "ta_pomodoro";
const POMO_BASE_TITLE = document.title;
const Pomo = {
  mode: "work",
  remaining: POMO_WORK,
  running: false,
  cycles: 0,          // séances de travail depuis la dernière longue pause
  done: 0,            // séances terminées aujourd'hui
  endAt: null,
  timer: null
};

function pomoModeDef() {
  if (Pomo.mode === "short") return { total: POMO_SHORT, label: "Pause courte", hint: "Lève-toi, bois de l'eau, regarde par la fenêtre. Pas d'écran si possible." };
  if (Pomo.mode === "long")  return { total: POMO_LONG,  label: "Longue pause", hint: "15 minutes : collation légère, étirements, air frais." };
  return { total: POMO_WORK, label: "Travail", hint: "Téléphone hors de la pièce, un seul objectif : go !" };
}
function pomoFmt(sec) {
  return String(Math.floor(sec / 60)).padStart(2, "0") + ":" + String(sec % 60).padStart(2, "0");
}
function pomoLoadToday() {
  try {
    const d = JSON.parse(localStorage.getItem(POMO_KEY));
    if (d && d.date === new Date().toDateString()) Pomo.done = d.n || 0;
  } catch (e) {}
}
function pomoSaveToday() {
  try {
    localStorage.setItem(POMO_KEY, JSON.stringify({ date: new Date().toDateString(), n: Pomo.done }));
  } catch (e) {}
}
function pomoPaint() {
  const def = pomoModeDef();
  const card = el("#pomo-card");
  if (card) card.dataset.mode = Pomo.mode;
  const t = el("#pomo-time"); if (t) t.textContent = pomoFmt(Pomo.remaining);
  const m = el("#pomo-mode"); if (m) m.textContent = def.label;
  const h = el("#pomo-hint"); if (h) h.textContent = def.hint;
  const ring = el("#pomo-ring");
  if (ring) {
    const c = 2 * Math.PI * 118;
    ring.style.strokeDasharray = c;
    ring.style.strokeDashoffset = c * (1 - Pomo.remaining / def.total);
  }
  els("#pomo-dots i").forEach((d, i) => d.classList.toggle("on", i < Pomo.cycles));
  const today = el("#pomo-today");
  if (today) today.textContent = Pomo.done + " séance" + (Pomo.done > 1 ? "s" : "") + " terminée" + (Pomo.done > 1 ? "s" : "") + " aujourd'hui";
  const btn = el("#pomo-start");
  if (btn) btn.textContent = Pomo.running ? "Pause" : (Pomo.remaining < def.total ? "Reprendre" : "Démarrer");
}
function pomoBeep() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    [523, 659, 784].forEach((f, i) => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.frequency.value = f;
      const t0 = ctx.currentTime + i * 0.18;
      g.gain.setValueAtTime(0.001, t0);
      g.gain.exponentialRampToValueAtTime(0.22, t0 + 0.03);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.3);
      o.start(t0); o.stop(t0 + 0.32);
    });
    setTimeout(() => ctx.close(), 1600);
  } catch (e) {}
}
function pomoStopTick() {
  if (Pomo.timer) { clearInterval(Pomo.timer); Pomo.timer = null; }
  Pomo.running = false;
}
function pomoSetMode(mode) {
  pomoStopTick();
  Pomo.mode = mode;
  Pomo.remaining = pomoModeDef().total;
  document.title = POMO_BASE_TITLE;
  pomoPaint();
}
function pomoComplete() {
  pomoStopTick();
  pomoBeep();
  if (Pomo.mode === "work") {
    Pomo.cycles = Math.min(4, Pomo.cycles + 1);
    Pomo.done += 1;
    pomoSaveToday();
    pomoSetMode(Pomo.cycles >= 4 ? "long" : "short");
    toast("Séance terminée ! " + (Pomo.cycles >= 4 ? "Pause longue bien méritée." : "Petite pause de 5 min."));
  } else {
    if (Pomo.mode === "long") Pomo.cycles = 0;
    pomoSetMode("work");
    toast("Pause terminée — haydi bakalım !");
  }
}
function pomoTick() {
  Pomo.remaining = Math.max(0, Math.round((Pomo.endAt - Date.now()) / 1000));
  pomoPaint();
  document.title = pomoFmt(Pomo.remaining) + " · " + pomoModeDef().label + " — Türkçe Akademi";
  if (Pomo.remaining <= 0) pomoComplete();
}
const pomoStartBtn = el("#pomo-start");
if (pomoStartBtn) pomoStartBtn.addEventListener("click", () => {
  if (Pomo.running) { pomoStopTick(); document.title = POMO_BASE_TITLE; pomoPaint(); return; }
  Pomo.running = true;
  Pomo.endAt = Date.now() + Pomo.remaining * 1000;
  Pomo.timer = setInterval(pomoTick, 250);
  pomoPaint();
});
const pomoResetBtn = el("#pomo-reset");
if (pomoResetBtn) pomoResetBtn.addEventListener("click", () => { pomoSetMode("work"); });

pomoLoadToday();
pomoPaint();
