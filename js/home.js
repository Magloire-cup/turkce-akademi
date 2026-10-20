/* Türkçe Akademi — page d'accueil */

document.addEventListener("DOMContentLoaded", () => {
  // Statistiques
  el("#stat-modules").textContent = COURSE.length;
  el("#stat-words").textContent = VOCAB_TOTAL;
  el("#stat-grammar").textContent = GRAMMAR.length;

  // Mot du jour (rotation quotidière déterministe)
  const wod = WORD_OF_DAY[Math.floor(Date.now() / 86400000) % WORD_OF_DAY.length];
  el("#wod-tr").textContent = wod.tr;
  el("#wod-fr").textContent = wod.fr;
  el("#wod-ex").innerHTML = `<b>${wod.ex}</b> — ${wod.exFr}`;

  // Tableau de bord
  const d = Progress.data;
  el("#dash-xp").textContent = d.xp;
  el("#dash-lvl").textContent = `Niveau ${Progress.level()} · ${100 - Progress.levelProgress()} XP avant le suivant`;
  el("#dash-streak").textContent = d.streak;
  el("#dash-modules").textContent = `${d.doneModules.length} / ${COURSE.length}`;
  el("#dash-words").textContent = Progress.knownCount();
  el("#dash-words-sub").textContent = `sur ${VOCAB_TOTAL} au total`;
  el("#lvl-title").textContent = `Niveau ${Progress.level()}`;
  el("#lvl-next").textContent = `${100 - Progress.levelProgress()} XP pour le niveau ${Progress.level() + 1}`;
  requestAnimationFrame(() => { el("#lvl-fill").style.width = Progress.levelProgress() + "%"; });

  // Programme : les trois pistes
  const groups = { A1: [], A2: [], B1: [] };
  COURSE.forEach(m => groups[m.level].push(m));
  const colors = { A1: "var(--red)", A2: "var(--gold)", B1: "var(--green)" };
  const descs = {
    A1: "Les fondations : alphabet, premiers mots, nombres et la règle d'or de l'harmonie vocalique.",
    A2: "Tu construis : pluriel, possession, var/yok, présent, négation et questions.",
    B1: "Tu t'exprimes : les cas, le passé, le futur — et de vraies conversations."
  };

  el("#tracks").innerHTML = ["A1", "A2", "B1"].map(lvl => `
    <div class="track reveal">
      <div class="track-head">
        <span class="track-badge" style="background:${colors[lvl]}">${lvl}</span>
        <div class="info">
          <h3>${lvl === "A1" ? "Découverte" : lvl === "A2" ? "Construction" : "Expression"} — ${groups[lvl].length} modules</h3>
          <p>${descs[lvl]}</p>
        </div>
      </div>
      <div class="track-body">
        ${groups[lvl].map(m => `
          <a class="mod-item ${Progress.isModuleDone(m.id) ? "done" : ""}" href="cours.html#${m.id}">
            <span class="mod-num">${m.num}</span>
            <span><span class="t">${m.title}</span><br><span class="d">${m.subtitle}</span></span>
            ${Progress.isModuleDone(m.id) ? '<svg class="ck" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>' : ""}
          </a>`).join("")}
      </div>
    </div>`).join("");

  // Anime les pistes
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.05 });
  els("#tracks .reveal").forEach(t => io.observe(t));
});
