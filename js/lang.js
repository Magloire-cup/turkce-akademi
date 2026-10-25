/* ============================================================
   Türkçe Akademi — sélecteur de langue + section d'accueil
   Fonctionne sur les pages françaises et sur en/ ar/ kk/.
   ============================================================ */
(function () {
  const NATIVE = {
    fr: { name: "Français", code: "FR", dir: "ltr", desc: "Apprendre le turc expliqué en français" },
    en: { name: "English", code: "EN", dir: "ltr", desc: "Learn Turkish explained in English" },
    ar: { name: "العربية", code: "AR", dir: "rtl", desc: "تعلّم التركية بشرح عربي" },
    kk: { name: "Қазақша", code: "KK", dir: "ltr", desc: "Түрік тілі қазақша түсіндіріледі" }
  };

  const UI = {
    fr: {
      change: "Changer de langue",
      siteLang: "Langue du site",
      sectionTitle: "Choisir la langue du site",
      sectionLead: "Les cours, les explications, les quiz et le vocabulaire s'affichent dans la langue choisie. Le turc reste la langue étudiée.",
      current: "Langue actuelle",
      choose: "Choisir",
      aria: "Langue du site"
    },
    en: {
      change: "Change language",
      siteLang: "Site language",
      sectionTitle: "Choose the site language",
      sectionLead: "Courses, explanations, quizzes and vocabulary are shown in the language you choose. Turkish remains the language you are learning.",
      current: "Current language",
      choose: "Choose",
      aria: "Site language"
    },
    ar: {
      change: "تغيير اللغة",
      siteLang: "لغة الموقع",
      sectionTitle: "اختر لغة الموقع",
      sectionLead: "تُعرض الدروس والشروحات والاختبارات والمفردات باللغة التي تختارها. وتبقى التركية هي اللغة التي تتعلمها.",
      current: "اللغة الحالية",
      choose: "اختر",
      aria: "لغة الموقع"
    },
    kk: {
      change: "Тілді ауыстыру",
      siteLang: "Сайт тілі",
      sectionTitle: "Сайт тілін таңдаңыз",
      sectionLead: "Сабақтар, түсіндірмелер, тесттер мен сөздік таңдаған тіліңізде көрсетіледі. Түрік тілі оқылатын тіл болып қалады.",
      current: "Ағымдағы тіл",
      choose: "Таңдау",
      aria: "Сайт тілі"
    }
  };

  const current = (document.documentElement.lang || "fr").split("-")[0];
  const labels = UI[current] || UI.fr;

  function currentFile() {
    const last = location.pathname.split("/").filter(Boolean).pop() || "index.html";
    return /\.html?$/i.test(last) ? last : "index.html";
  }

  function targetUrl(code) {
    const prefix = (current === "fr" ? "" : "../") + (code === "fr" ? "" : code + "/");
    return prefix + currentFile() + location.search + location.hash;
  }

  function remember(code) {
    try { localStorage.setItem("ta_lang", code); } catch (e) {}
  }

  function globeSvg() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>';
  }

  function buildSwitch() {
    const actions = document.querySelector(".nav-actions");
    if (!actions || document.querySelector(".lang-switch")) return;

    const wrap = document.createElement("div");
    wrap.className = "lang-switch";
    wrap.dataset.noI18n = "";

    const btn = document.createElement("button");
    btn.className = "icon-btn lang-btn";
    btn.id = "lang-btn";
    btn.type = "button";
    btn.setAttribute("aria-haspopup", "true");
    btn.setAttribute("aria-expanded", "false");
    btn.title = labels.change;
    btn.setAttribute("aria-label", labels.change);
    btn.innerHTML = globeSvg() + `<span class="lang-code">${(NATIVE[current] || NATIVE.fr).code}</span>`;

    const menu = document.createElement("div");
    menu.className = "lang-menu";
    menu.id = "lang-menu";
    menu.setAttribute("role", "menu");
    menu.setAttribute("aria-label", labels.siteLang);
    menu.dataset.noI18n = "";
    menu.innerHTML = Object.keys(NATIVE).map(code => {
      const n = NATIVE[code];
      const active = code === current;
      return `<a role="menuitem" href="${targetUrl(code)}" data-lang="${code}"${active ? ' class="active" aria-current="true"' : ""}>
        <span class="lang-name" lang="${code}" dir="${n.dir}">${n.name}</span>
        <span class="lang-meta">${n.code}${active ? `<em>${labels.current}</em>` : ""}</span>
      </a>`;
    }).join("");

    wrap.appendChild(btn);
    wrap.appendChild(menu);
    actions.insertBefore(wrap, actions.firstChild);

    const close = () => { wrap.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); };
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const open = !wrap.classList.contains("open");
      wrap.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => remember(a.dataset.lang));
    });
    document.addEventListener("click", e => { if (!wrap.contains(e.target)) close(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  }

  function buildHomeSection() {
    if (document.body.dataset.page !== "home") return;
    if (document.querySelector("#langues")) return;
    const main = document.querySelector("main");
    if (!main) return;

    const section = document.createElement("section");
    section.className = "section lang-section";
    section.id = "langues";
    section.dataset.noI18n = "";
    section.innerHTML = `
      <div class="container">
        <div class="section-head center">
          <span class="overline">${labels.siteLang}</span>
          <h2>${labels.sectionTitle}</h2>
          <p>${labels.sectionLead}</p>
        </div>
        <div class="lang-grid" dir="ltr">
          ${Object.keys(NATIVE).map(code => {
            const n = NATIVE[code];
            const active = code === current;
            return `<a class="lang-card${active ? " active" : ""}" href="${targetUrl(code)}" data-lang="${code}" lang="${code}" dir="${n.dir}">
              <span class="lang-card-code">${n.code}</span>
              <span class="lang-card-name">${n.name}</span>
              <span class="lang-card-desc">${n.desc}</span>
              <span class="lang-card-state">${active ? labels.current : labels.choose}</span>
            </a>`;
          }).join("")}
        </div>
      </div>`;
    main.appendChild(section);

    section.querySelectorAll(".lang-card").forEach(a => {
      a.addEventListener("click", () => remember(a.dataset.lang));
    });
  }

  function init() {
    buildSwitch();
    buildHomeSection();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
