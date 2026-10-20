/* ============================================================
   Türkçe Akademi — script commun
   Navigation, thème, TTS turc, progression (localStorage), toasts
   ============================================================ */

/* ---------- Navigation ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "";
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.dataset.nav === page) a.classList.add("active");
  });

  const burger = document.getElementById("burger");
  const links = document.getElementById("nav-links");
  if (burger && links) {
    burger.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
  }

  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    setThemeIcon(themeBtn);
    themeBtn.addEventListener("click", () => {
      const cur = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = cur;
      try { localStorage.setItem("ta_theme", cur); } catch (e) {}
      setThemeIcon(themeBtn);
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Reveal au scroll
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
});

function setThemeIcon(btn) {
  const dark = document.documentElement.dataset.theme === "dark";
  btn.innerHTML = dark
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>';
}

/* ---------- Thème initial ---------- */
(function () {
  let t = null;
  try { t = localStorage.getItem("ta_theme"); } catch (e) {}
  if (!t) t = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.dataset.theme = t;
})();

/* ---------- TTS (prononciation turque) ---------- */
let taVoice = null;
function pickTurkishVoice() {
  const voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
  taVoice = voices.find(v => /^tr/i.test(v.lang)) || null;
}
if (window.speechSynthesis) {
  pickTurkishVoice();
  speechSynthesis.onvoiceschanged = pickTurkishVoice;
}
function speak(text, btn) {
  if (!window.speechSynthesis) { toast("Ton navigateur ne supporte pas la synthèse vocale."); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "tr-TR";
  if (taVoice) u.voice = taVoice;
  u.rate = 0.82;
  u.pitch = 1;
  if (btn) {
    btn.classList.add("playing");
    u.onend = u.onerror = () => btn.classList.remove("playing");
  }
  speechSynthesis.speak(u);
  if (!taVoice) toast("Astuce : installe une voix turque (tr-TR) dans ton système pour une meilleure prononciation.");
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-speak]");
  if (b) speak(b.dataset.speak, b);
});

/* ---------- Progression (localStorage) ---------- */
const Progress = {
  KEY: "ta_progress_v1",
  data: null,
  load() {
    try { this.data = JSON.parse(localStorage.getItem(this.KEY)) || {}; } catch (e) { this.data = {}; }
    if (typeof this.data.xp !== "number") this.data.xp = 0;
    if (!Array.isArray(this.data.doneModules)) this.data.doneModules = [];
    if (!this.data.knownWords) this.data.knownWords = {};
    if (typeof this.data.streak !== "number") this.data.streak = 0;
    if (!this.data.quizBest) this.data.quizBest = {};
    this.updateStreak();
    return this.data;
  },
  save() { try { localStorage.setItem(this.KEY, JSON.stringify(this.data)); } catch (e) {} },
  updateStreak() {
    const today = new Date().toDateString();
    if (this.data.lastDay === today) return;
    const y = new Date(); y.setDate(y.getDate() - 1);
    this.data.streak = this.data.lastDay === y.toDateString() ? this.data.streak + 1 : 1;
    this.data.lastDay = today;
    this.save();
  },
  addXp(n) {
    this.load();
    const before = this.level();
    this.data.xp += n;
    this.save();
    if (this.level() > before) toast(`Niveau ${this.level()} atteint ! Tebrikler !`);
    else toast(`+${n} XP`);
  },
  level() { return Math.floor(this.data.xp / 100) + 1; },
  levelProgress() { return this.data.xp % 100; },
  isModuleDone(id) { return this.data.doneModules.includes(id); },
  toggleModuleDone(id) {
    this.load();
    const i = this.data.doneModules.indexOf(id);
    if (i >= 0) { this.data.doneModules.splice(i, 1); this.save(); return false; }
    this.data.doneModules.push(id);
    this.save();
    this.addXp(30);
    return true;
  },
  setWordLevel(word, lvl) {
    this.load();
    this.data.knownWords[word] = lvl;
    this.save();
  },
  getWordLevel(word) { this.load(); return this.data.knownWords[word] || 0; },
  knownCount() { this.load(); return Object.keys(this.data.knownWords).length; },
  setQuizBest(key, score) {
    this.load();
    if ((this.data.quizBest[key] || 0) < score) { this.data.quizBest[key] = score; this.save(); return true; }
    return false;
  }
};
Progress.load();

/* ---------- Toasts ---------- */
function toast(msg) {
  let root = document.getElementById("toast-root");
  if (!root) { root = document.createElement("div"); root.id = "toast-root"; document.body.appendChild(root); }
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  root.appendChild(t);
  setTimeout(() => { t.classList.add("out"); setTimeout(() => t.remove(), 320); }, 2400);
}

/* ---------- Rendu des blocs de contenu (leçons & grammaire) ---------- */
function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

function renderBlocks(blocks) {
  return blocks.map(b => {
    switch (b.t) {
      case "h": return `<h4 class="blk-h">${b.text}</h4>`;
      case "p": return `<p class="blk-p">${b.text}</p>`;
      case "ul": return `<ul class="blk-ul">${b.items.map(i => `<li>${i}</li>`).join("")}</ul>`;
      case "note": return `<div class="note ${b.kind || "info"}"><b class="tag">${b.tag || "Astuce"}</b><div>${b.text}</div></div>`;
      case "table":
        return `<div class="tbl-wrap"><table class="tbl">${b.caption ? `<caption>${b.caption}</caption>` : ""}
          <thead><tr>${b.head.map(h => `<th>${h}</th>`).join("")}</tr></thead>
          <tbody>${b.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
      case "ex":
        return `<div>${b.items.map(i => `
          <div class="ex-line">
            <button class="speak-btn" data-speak="${esc(i.tr)}" title="Écouter" aria-label="Écouter ${esc(i.tr)}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>
            </button>
            <span class="tr">${i.tr}</span><span class="fr">${i.fr}</span>
          </div>`).join("")}</div>`;
      default: return "";
    }
  }).join("");
}

/* ---------- Utilitaires ---------- */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function el(sel, root) { return (root || document).querySelector(sel); }
function els(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }
