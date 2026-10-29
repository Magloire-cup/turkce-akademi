/* ============================================================
   Türkçe Akademi : script commun
   Navigation, thème, progression (localStorage), toasts
   ============================================================ */

/* ---------- Navigation ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "";
  const main = document.querySelector("main");
  if (main) {
    main.id = main.id || "main-content";
    if (!document.querySelector(".skip-link")) {
      const skip = document.createElement("a");
      skip.className = "skip-link";
      skip.href = "#main-content";
      skip.textContent = document.documentElement.lang === "en" ? "Skip to content" : document.documentElement.lang === "ar" ? "انتقل إلى المحتوى" : document.documentElement.lang === "kk" ? "Мазмұнға өту" : "Aller au contenu";
      document.body.prepend(skip);
    }
  }
  const nav = document.getElementById("nav-links");
  if (nav && !nav.querySelector('[data-nav="colors"]')) {
    const lang = (document.documentElement.lang || "fr").split("-")[0];
    const label = { fr: "Couleurs", en: "Colours", ar: "الألوان", kk: "Түстер" }[lang] || "Couleurs";
    const link = document.createElement("a");
    link.href = "couleurs.html";
    link.dataset.nav = "colors";
    link.textContent = label;
    nav.appendChild(link);
  }
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.dataset.nav === page) a.classList.add("active");
  });

  const burger = document.getElementById("burger");
  const links = document.getElementById("nav-links");
  if (burger && links) {
    burger.setAttribute("aria-expanded", "false");
    burger.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      links.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        links.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
        burger.focus();
      }
    });
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

/* ---------- Progression (localStorage) ---------- */
const Progress = {
  KEY: "ta_progress_v1",
  data: null,
  load() {
    try { this.data = JSON.parse(localStorage.getItem(this.KEY)) || {}; } catch (e) { this.data = {}; }
    if (!Array.isArray(this.data.doneModules)) this.data.doneModules = [];
    if (!this.data.knownWords) this.data.knownWords = {};
    if (!this.data.favoriteWords) this.data.favoriteWords = {};
    if (!this.data.quizBest) this.data.quizBest = {};
    return this.data;
  },
  save() {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(this.data));
      return true;
    } catch (e) {
      return false;
    }
  },
  isModuleDone(id) { return this.data.doneModules.includes(id); },
  toggleModuleDone(id) {
    this.load();
    const i = this.data.doneModules.indexOf(id);
    if (i >= 0) { this.data.doneModules.splice(i, 1); this.save(); return false; }
    this.data.doneModules.push(id);
    this.save();
    return true;
  },
  wordKey(tr, fr) { return `${tr}|${fr}`; },
  migrateWordKeys(themes) {
    this.load();
    const known = this.data.knownWords;
    const byTr = new Map();
    const valid = new Set();
    themes.forEach(t => t.words.forEach(w => {
      const key = this.wordKey(w.tr, w.frSrc || w.fr);
      valid.add(key);
      if (!byTr.has(w.tr)) byTr.set(w.tr, []);
      if (!byTr.get(w.tr).includes(key)) byTr.get(w.tr).push(key);
    }));
    let changed = false;
    Object.keys(known).forEach(key => {
      if (valid.has(key)) return;
      if (!key.includes("|") && byTr.has(key)) {
        byTr.get(key).forEach(target => {
          if (known[target] === undefined) known[target] = known[key];
        });
      }
      delete known[key];
      changed = true;
    });
    if (changed) this.save();
  },
  setWordLevel(key, lvl) {
    this.load();
    this.data.knownWords[key] = lvl;
    this.save();
  },
  toggleFavoriteWord(key) {
    this.load();
    const isFavorite = !this.data.favoriteWords[key];
    if (isFavorite) this.data.favoriteWords[key] = true;
    else delete this.data.favoriteWords[key];
    return this.save();
  },
  isFavoriteWord(key) { this.load(); return Boolean(this.data.favoriteWords[key]); },
  getWordLevel(key) { this.load(); return this.data.knownWords[key] || 0; },
  knownCount() { this.load(); return Object.values(this.data.knownWords).filter(l => l > 0).length; },
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
