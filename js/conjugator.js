/* ============================================================
   Türkçe Akademi : conjugueur interactif
   Moteur de conjugaison : présent continu, présent simple,
   passé -di, passé -miş, futur, conditionnel, impératif.
   ============================================================ */

const CONJ_PERSONS = ["Ben", "Sen", "O", "Biz", "Siz", "Onlar"];
const CONJ_VOWELS = "aeıioöuü";
const CONJ_NARROW = { a: "ı", e: "i", ı: "ı", i: "i", o: "u", ö: "ü", u: "u", ü: "ü" };
const CONJ_IMP2 = { gitmek: "gidin", etmek: "edin", yemek: "yiyin" };

function conjLastVowel(s) {
  for (let i = s.length - 1; i >= 0; i--) {
    if (CONJ_VOWELS.includes(s[i])) return s[i];
  }
  return "e";
}
function conjNarrow(v) { return CONJ_NARROW[v] || "i"; }
function conjBack(v) { return "aıou".includes(v); }
function conjStem(v) { return v.inf.slice(0, -3); }
function conjNegStem(v) { return conjStem(v) + (conjBack(conjLastVowel(conjStem(v))) ? "ma" : "me"); }
function conjEvid(v) { return conjStem(v) + "m" + conjNarrow(conjLastVowel(conjStem(v))) + "ş"; }
function conjCond(v) { return conjStem(v) + (conjBack(conjLastVowel(conjStem(v))) ? "sa" : "se"); }
function conjNegPres(v) {
  const ns = conjNegStem(v);
  return ns.slice(0, -1) + conjNarrow(conjLastVowel(conjStem(v))) + "yor";
}
function conjNegAor(v) { return conjNegStem(v) + "z"; }
function conjNegPast(v) { return conjNegStem(v) + (conjBack(conjLastVowel(conjStem(v))) ? "dı" : "di"); }
function conjNegEvid(v) { return conjNegStem(v) + (conjBack(conjLastVowel(conjStem(v))) ? "mış" : "miş"); }
function conjNegFut(v) { return conjNegStem(v) + "y" + (conjBack(conjLastVowel(conjStem(v))) ? "acak" : "ecek"); }
function conjNegCond(v) { return conjNegStem(v) + (conjBack(conjLastVowel(conjStem(v))) ? "sa" : "se"); }
function conjDiEnd(base) {
  const n = conjNarrow(conjLastVowel(base));
  return [base + "m", base + "n", base, base + "k", base + "n" + n + "z", base + (conjBack(conjLastVowel(base)) ? "lar" : "ler")];
}

function conjPresForms(v, neg) {
  const b = neg ? conjNegPres(v) : v.pres;
  return [b + "um", b + "sun", b, b + "uz", b + "sunuz", b + "lar"];
}
function conjAorForms(v, neg) {
  if (neg) {
    const ns = conjNegStem(v), b = conjNegAor(v);
    const n = conjNarrow(conjLastVowel(b));
    return [ns + "m", b + "s" + n + "n", b, ns + "y" + n + "z", b + "s" + n + "n" + n + "z", b + (conjBack(conjLastVowel(b)) ? "lar" : "ler")];
  }
  const b = v.aor, n = conjNarrow(conjLastVowel(b));
  return [b + n + "m", b + "s" + n + "n", b, b + n + "z", b + "s" + n + "n" + n + "z", b + (conjBack(conjLastVowel(b)) ? "lar" : "ler")];
}
function conjPastForms(v, neg) {
  return conjDiEnd(neg ? conjNegPast(v) : v.past);
}
function conjEvidForms(v, neg) {
  const b = neg ? conjNegEvid(v) : conjEvid(v);
  const n = conjNarrow(conjLastVowel(b));
  return [b + n + "m", b + "s" + n + "n", b, b + n + "z", b + "s" + n + "n" + n + "z", b + (conjBack(conjLastVowel(b)) ? "lar" : "ler")];
}
function conjFutForms(v, neg) {
  const b = neg ? conjNegFut(v) : v.fut;
  const soft = b.slice(0, -1) + "ğ";
  const two = conjBack(conjLastVowel(b)) ? "ı" : "i";
  return [soft + two + "m", b + "s" + two + "n", b, soft + two + "z", b + "s" + two + "n" + two + "z", b + (conjBack(conjLastVowel(b)) ? "lar" : "ler")];
}
function conjCondForms(v, neg) {
  return conjDiEnd(neg ? conjNegCond(v) : conjCond(v));
}
function conjImpForms(v, neg) {
  const stem = conjStem(v), ns = conjNegStem(v);
  const n = conjNarrow(conjLastVowel(stem));
  if (neg) {
    const nn = conjNarrow(conjLastVowel(ns));
    const s2 = ns, s2pl = ns + "y" + nn + "n", s3 = ns + "s" + nn + "n";
    return [s2, s2pl, s3, s3 + (conjBack(conjLastVowel(s3)) ? "lar" : "ler")];
  }
  const endsVowel = CONJ_VOWELS.includes(stem.slice(-1));
  const s2 = stem;
  const s2pl = CONJ_IMP2[v.inf] || (endsVowel ? stem + "y" + n + "n" : stem + n + "n");
  const s3 = stem + "s" + n + "n";
  return [s2, s2pl, s3, s3 + (conjBack(conjLastVowel(s3)) ? "lar" : "ler")];
}

const CONJ_TENSES_BASE = [
  {
    id: "pres", label: "Présent continu", short: "-yor",
    usage: "Une action en cours, au moment où l'on parle : « je suis en train de… ».",
    make: conjPresForms
  },
  {
    id: "aor", label: "Présent simple", short: "-ir / -er",
    usage: "Une habitude, une vérité générale ou une offre polie : « je viens (souvent) ».",
    make: conjAorForms
  },
  {
    id: "past", label: "Passé -di", short: "-dı / -di",
    usage: "Une action passée terminée, un fait constaté : « je suis venu ».",
    make: conjPastForms
  },
  {
    id: "evid", label: "Passé -miş", short: "-mış / -miş",
    usage: "Un passé découvert, entendu ou raconté : « il paraît que… », « j'ai bien vu que… ».",
    make: conjEvidForms
  },
  {
    id: "fut", label: "Futur -ecek", short: "-ecek / -acak",
    usage: "Une action à venir, une intention ou une promesse : « je viendrai ».",
    make: conjFutForms
  },
  {
    id: "cond", label: "Conditionnel -se", short: "-se / -sa",
    usage: "Une condition : « si je venais… ». Le verbe principal porte souvent -erdi / -ecekti.",
    make: conjCondForms
  },
  {
    id: "imp", label: "Impératif", short: "—",
    usage: "Un ordre, un conseil ou une invitation. L'impératif n'a pas de première personne.",
    persons: ["Sen", "Siz", "O", "Onlar"],
    make: conjImpForms
  }
];

const CONJ_TENSES = CONJ_TENSES_BASE.map(t => {
  const tr = window.TA_LOCALE && window.TA_LOCALE.conjTenses && window.TA_LOCALE.conjTenses[t.id];
  return tr ? Object.assign({}, t, { label: tr.label || t.label, usage: tr.usage || t.usage }) : t;
});

const CONJ_SPEAK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>';

const conjState = { verb: 0, tense: "pres", neg: false, hidden: false };

function initConj() {
  const verbSel = el("#conj-verb");
  const tenseSel = el("#conj-tense");
  if (!verbSel || !tenseSel) return;

  verbSel.innerHTML = VERBES.map((v, i) => `<option value="${i}">${esc(v.inf)} — ${esc(v.tr)}</option>`).join("");
  tenseSel.innerHTML = CONJ_TENSES.map(t => `<option value="${t.id}">${esc(t.label)}</option>`).join("");

  verbSel.addEventListener("change", () => {
    conjState.verb = +verbSel.value;
    conjState.hidden = false;
    renderConj();
  });
  tenseSel.addEventListener("change", () => {
    conjState.tense = tenseSel.value;
    conjState.hidden = false;
    renderConj();
  });
  els(".conj-polarity button").forEach(btn => {
    btn.addEventListener("click", () => {
      conjState.neg = btn.dataset.polarity === "neg";
      conjState.hidden = false;
      els(".conj-polarity button").forEach(b => b.classList.toggle("active", b === btn));
      renderConj();
    });
  });
  el("#conj-hide").addEventListener("click", () => {
    conjState.hidden = !conjState.hidden;
    renderConj();
  });

  renderConj();
}

function renderConj() {
  const v = VERBES[conjState.verb];
  const t = CONJ_TENSES.find(x => x.id === conjState.tense);
  const persons = t.persons || CONJ_PERSONS;
  const forms = t.make(v, conjState.neg);
  const stem = conjStem(v);
  const lv = conjLastVowel(stem);

  el("#conj-infinitive").textContent = v.inf;
  el("#conj-translation").textContent = v.tr;
  el("#conj-tense-label").textContent = t.label;
  el("#conj-title").textContent = forms[0];
  el("#conj-ending").textContent = t.short;
  el("#conj-usage").textContent = t.usage;
  el("#conj-badge").textContent = conjState.neg ? "Négatif" : "Affirmatif";
  el("#conj-badge").className = "chip " + (conjState.neg ? "red" : "green");
  el("#conj-meta").innerHTML = `
    <div><span>Radical</span><b>${esc(stem)}-</b></div>
    <div><span>Dernière voyelle</span><b>${lv}</b></div>
    <div><span>Harmonie</span><b>${conjBack(lv) ? "arrière" : "avant"}</b></div>`;

  const note = v.note;
  el("#conj-tip").className = "note " + (note ? "warn" : "info");
  el("#conj-tip").innerHTML = `
    <b class="tag">${note ? "Irrégularité" : "À retenir"}</b>
    <div>${note || "L'harmonie vocalique choisit la voyelle du suffixe d'après la dernière voyelle du radical. Les consonnes sourdes peuvent durcir le d en t."}</div>`;

  el("#conj-table").classList.toggle("is-hidden", conjState.hidden);
  el("#conj-body").innerHTML = forms.map((f, i) => `
    <tr data-i="${i}" tabindex="0">
      <td>${persons[i]}</td>
      <td>
        <div class="conj-cell">
          <button class="speak-btn sb-xs" data-speak="${esc(f)}" title="Écouter" aria-label="Écouter ${esc(f)}">${CONJ_SPEAK_SVG}</button>
          <span class="conj-form">${esc(f)}</span>
        </div>
      </td>
    </tr>`).join("");

  const hideBtn = el("#conj-hide");
  hideBtn.textContent = conjState.hidden ? "Afficher les formes" : "Mode test";
  hideBtn.setAttribute("aria-pressed", String(conjState.hidden));
  el("#conj-hint").textContent = conjState.hidden
    ? "Clique sur une ligne pour révéler la forme."
    : "Clique sur le haut-parleur pour écouter la forme.";

  if (conjState.hidden) {
    els("#conj-body tr").forEach(tr => {
      const reveal = () => tr.classList.add("revealed");
      tr.addEventListener("click", reveal);
      tr.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); reveal(); }
      });
    });
  }
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initConj);
else initConj();
