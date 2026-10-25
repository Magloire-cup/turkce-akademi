#!/usr/bin/env node
"use strict";

/* Génère les modèles de traduction et les données locales EN/AR/KK.
   Usage :
     node tools/locales.js templates
     node tools/locales.js build en
     node tools/locales.js check en
*/

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const TEMPLATES = path.join(ROOT, "i18n-src", "templates");
const SRC = path.join(ROOT, "i18n-src");
const OUT = path.join(ROOT, "js", "i18n");
const LANGS = ["en", "ar", "kk"];

function read(file) { return fs.readFileSync(file, "utf8"); }
function readJson(file) { return JSON.parse(read(file)); }
function write(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, data, "utf8");
}
function writeJson(file, data) { write(file, JSON.stringify(data, null, 2) + "\n"); }
function clone(v) { return JSON.parse(JSON.stringify(v)); }
function fail(msg) { throw new Error(msg); }

/* ---------- Lecture des constantes JS sans exécuter la page ---------- */

function extractConst(file, name) {
  const source = read(path.join(ROOT, file));
  const re = new RegExp(`\\bconst\\s+${name}\\s*=\\s*`);
  const match = re.exec(source);
  if (!match) fail(`Constante ${name} introuvable dans ${file}`);
  const start = match.index + match[0].length;
  let depth = 0;
  let quote = null;
  let escaped = false;
  let lineComment = false;
  let blockComment = false;

  for (let i = start; i < source.length; i++) {
    const c = source[i];
    const n = source[i + 1];

    if (lineComment) { if (c === "\n") lineComment = false; continue; }
    if (blockComment) { if (c === "*" && n === "/") { blockComment = false; i++; } continue; }
    if (quote) {
      if (escaped) { escaped = false; continue; }
      if (c === "\\") { escaped = true; continue; }
      if (c === quote) quote = null;
      continue;
    }
    if (c === "/" && n === "/") { lineComment = true; i++; continue; }
    if (c === "/" && n === "*") { blockComment = true; i++; continue; }
    if (c === '"' || c === "'" || c === "`") { quote = c; continue; }
    if (c === "(" || c === "[" || c === "{") { depth++; continue; }
    if (c === ")" || c === "]" || c === "}") { depth--; continue; }
    if (depth === 0 && c === ";") return source.slice(start, i).trim();
  }
  fail(`Fin de constante introuvable pour ${name} dans ${file}`);
}

function evalConst(file, name, stubs) {
  const expr = extractConst(file, name);
  const context = Object.assign({ console }, stubs || {});
  vm.createContext(context);
  return vm.runInContext(`(${expr})`, context, { filename: file });
}

function loadFrench() {
  const data = {
    VOCAB: evalConst("js/data-vocab.js", "VOCAB"),
    COURSE: evalConst("js/data-course.js", "COURSE"),
    GRAMMAR: evalConst("js/data-grammar.js", "GRAMMAR"),
    PARCOURS_A: evalConst("js/data-parcours-a.js", "PARCOURS_A"),
    PARCOURS_B: evalConst("js/data-parcours-b.js", "PARCOURS_B"),
    PARCOURS_C: evalConst("js/data-parcours-c.js", "PARCOURS_C"),
    GRAMMAR_QUIZ: evalConst("js/data-quiz.js", "GRAMMAR_QUIZ"),
    WORD_OF_DAY: evalConst("js/data-quiz.js", "WORD_OF_DAY"),
    VERBES: evalConst("js/data-verbs.js", "VERBES"),
    VIDEOS_A1: evalConst("js/data-videos-a1.js", "VIDEOS_A1"),
    VIDEOS_A2: evalConst("js/data-videos-a2.js", "VIDEOS_A2"),
    VIDEOS_B1: evalConst("js/data-videos-b1.js", "VIDEOS_B1"),
    PARCOURS: [],
    VIDEOS: []
  };
  data.PARCOURS = [...data.PARCOURS_A, ...data.PARCOURS_B, ...data.PARCOURS_C];
  data.VIDEOS = [...data.VIDEOS_A1, ...data.VIDEOS_A2, ...data.VIDEOS_B1];
  return data;
}

function loadUiFrench() {
  const conjExpr = extractConst("js/conjugator.js", "CONJ_TENSES_BASE");
  const conjStubs = {};
  (conjExpr.match(/make:\s*(\w+)/g) || []).forEach(m => {
    const name = m.split(":")[1].trim();
    conjStubs[name] = function () { return []; };
  });
  const conjTenses = evalConst("js/conjugator.js", "CONJ_TENSES_BASE", conjStubs);
  return {
    alphabet: evalConst("js/alpha.js", "ALPHABET_BASE"),
    minimalPairs: evalConst("js/alpha.js", "MINIMAL_PAIRS_BASE"),
    conjTenses,
    quizTypes: evalConst("js/quiz.js", "QUIZ_TYPES_BASE"),
    planTypes: evalConst("js/schedule.js", "PLAN_TYPES_BASE"),
    planCurrent: evalConst("js/schedule.js", "PLAN_CURRENT_BASE"),
    planWeekday: evalConst("js/schedule.js", "PLAN_WEEKDAY_BASE"),
    planWeekend: evalConst("js/schedule.js", "PLAN_WEEKEND_BASE")
  };
}

/* ---------- Découpage ---------- */

function chunkItems(items, size, domain, fields) {
  const chunks = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push({
      domain,
      fields,
      start: i,
      end: Math.min(i + size, items.length),
      items: items.slice(i, i + size)
    });
  }
  return chunks;
}

function chunkVocab(themes, maxWords, fields) {
  const chunks = [];
  let start = 0;
  let words = 0;
  for (let i = 0; i < themes.length; i++) {
    if (i > start && words >= maxWords) {
      chunks.push({ domain: "vocab", fields, start, end: i, items: themes.slice(start, i) });
      start = i;
      words = 0;
    }
    words += themes[i].words.length;
  }
  if (start < themes.length) {
    chunks.push({ domain: "vocab", fields, start, end: themes.length, items: themes.slice(start) });
  }
  return chunks;
}

/* ---------- Application des traductions ---------- */

function checkStringArray(base, translated, where) {
  if (!Array.isArray(translated) || translated.length !== base.length) {
    fail(`${where}: tableau de ${base.length} attendu, reçu ${translated && translated.length}`);
  }
}

function setString(base, translated, key, where) {
  if (translated && typeof translated[key] === "string" && translated[key].trim() !== "") {
    base[key] = translated[key];
  } else {
    fail(`${where}.${key}: traduction manquante`);
  }
}

function applyBlocks(base, translated, where) {
  if (!Array.isArray(translated) || translated.length !== base.length) {
    fail(`${where}: ${base.length} blocs attendus, reçu ${translated && translated.length}`);
  }
  base.forEach((block, i) => {
    const tr = translated[i];
    const at = `${where}[${i}]`;
    if (!tr || tr.t !== block.t) fail(`${at}: type de bloc modifié`);
    switch (block.t) {
      case "p":
      case "h":
        setString(block, tr, "text", at);
        break;
      case "note":
        setString(block, tr, "tag", at);
        setString(block, tr, "text", at);
        break;
      case "table":
        if (block.caption) setString(block, tr, "caption", at);
        checkStringArray(block.head, tr.head, at + ".head");
        base[i].head = tr.head.slice();
        checkStringArray(block.rows, tr.rows, at + ".rows");
        block.rows.forEach((row, r) => {
          checkStringArray(row, tr.rows[r], `${at}.rows[${r}]`);
          row.forEach((cell, c) => {
            if (typeof tr.rows[r][c] !== "string" || !tr.rows[r][c].trim()) {
              fail(`${at}.rows[${r}][${c}]: traduction manquante`);
            }
            row[c] = tr.rows[r][c];
          });
        });
        break;
      case "ul":
        checkStringArray(block.items, tr.items, at + ".items");
        block.items = block.items.map((item, j) => {
          if (typeof tr.items[j] !== "string" || !tr.items[j].trim()) fail(`${at}.items[${j}]: traduction manquante`);
          return tr.items[j];
        });
        break;
      case "ex":
        checkStringArray(block.items, tr.items, at + ".items");
        block.items.forEach((item, j) => {
          setString(item, tr.items[j], "fr", `${at}.items[${j}]`);
        });
        break;
      default:
        fail(`${at}: type de bloc inconnu ${block.t}`);
    }
  });
}

function applyQuiz(base, translated, optionsKey, whyKey, where) {
  if (!Array.isArray(translated) || translated.length !== base.length) {
    fail(`${where}: ${base.length} questions attendues`);
  }
  base.forEach((q, i) => {
    const tr = translated[i];
    const at = `${where}[${i}]`;
    if (!tr) fail(`${at}: traduction manquante`);
    setString(q, tr, "q", at);
    checkStringArray(q[optionsKey], tr[optionsKey], `${at}.${optionsKey}`);
    q[optionsKey] = tr[optionsKey].slice();
    setString(q, tr, whyKey, at);
  });
}

function applyCourse(base, translated) {
  if (!Array.isArray(translated) || translated.length !== base.length) {
    fail(`course: ${base.length} modules attendus`);
  }
  base.forEach((m, i) => {
    const tr = translated[i];
    const at = `course[${i}]`;
    setString(m, tr, "title", at);
    setString(m, tr, "subtitle", at);
    checkStringArray(m.objectifs, tr.objectifs, at + ".objectifs");
    m.objectifs = tr.objectifs.slice();
    applyBlocks(m.blocks, tr.blocks, at + ".blocks");
    if (m.dialogue) {
      setString(m.dialogue, tr.dialogue, "title", at + ".dialogue");
      checkStringArray(m.dialogue.lines, tr.dialogue.lines, at + ".dialogue.lines");
      m.dialogue.lines.forEach((line, j) => {
        setString(line, tr.dialogue.lines[j], "fr", `${at}.dialogue.lines[${j}]`);
      });
    }
    if (m.vocab) {
      checkStringArray(m.vocab, tr.vocab, at + ".vocab");
      m.vocab.forEach((w, j) => setString(w, tr.vocab[j], "fr", `${at}.vocab[${j}]`));
    }
    if (m.quiz) applyQuiz(m.quiz, tr.quiz, "opts", "exp", at + ".quiz");
  });
}

function applyGrammar(base, translated) {
  if (!Array.isArray(translated) || translated.length !== base.length) {
    fail(`grammar: ${base.length} fiches attendues`);
  }
  base.forEach((g, i) => {
    const at = `grammar[${i}]`;
    setString(g, translated[i], "title", at);
    applyBlocks(g.blocks, translated[i].blocks, at + ".blocks");
  });
}

function applyParcours(base, translated) {
  if (!Array.isArray(translated) || translated.length !== base.length) {
    fail(`parcours: ${base.length} unités attendues`);
  }
  base.forEach((u, i) => {
    const tr = translated[i];
    const at = `parcours[${i}]`;
    setString(u, tr, "title", at);
    setString(u, tr, "goal", at);
    applyBlocks(u.blocks, tr.blocks, at + ".blocks");
    checkStringArray(u.vocab, tr.vocab, at + ".vocab");
    u.vocab.forEach((pair, j) => {
      const item = Array.isArray(tr.vocab[j]) ? { fr: tr.vocab[j][1] } : tr.vocab[j];
      if (!item || typeof item.fr !== "string" || !item.fr.trim()) fail(`${at}.vocab[${j}]: traduction manquante`);
      pair[1] = item.fr;
    });
    applyQuiz(u.quiz, tr.quiz, "options", "why", at + ".quiz");
  });
}

function applyVideos(base, translated) {
  if (!Array.isArray(translated) || translated.length !== base.length) {
    fail(`videos: ${base.length} fiches attendues`);
  }
  base.forEach((v, i) => {
    const tr = translated[i];
    const at = `videos[${i}]`;
    setString(v, tr, "title", at);
    setString(v, tr, "goal", at);
    applyBlocks(v.blocks, tr.blocks, at + ".blocks");
    checkStringArray(v.vocab, tr.vocab, at + ".vocab");
    v.vocab.forEach((pair, j) => {
      const item = Array.isArray(tr.vocab[j]) ? { fr: tr.vocab[j][1] } : tr.vocab[j];
      if (!item || typeof item.fr !== "string" || !item.fr.trim()) fail(`${at}.vocab[${j}]: traduction manquante`);
      pair[1] = item.fr;
    });
    applyQuiz(v.quiz, tr.quiz, "options", "why", at + ".quiz");
  });
}

function applyVocab(base, translated) {
  if (!Array.isArray(translated) || translated.length !== base.length) {
    fail(`vocab: ${base.length} thèmes attendus`);
  }
  base.forEach((theme, i) => {
    const tr = translated[i];
    const at = `vocab[${i}]`;
    setString(theme, tr, "name", at);
    checkStringArray(theme.words, tr.words, at + ".words");
    theme.words.forEach((w, j) => {
      const tw = tr.words[j];
      w.frSrc = w.fr;
      setString(w, tw, "fr", `${at}.words[${j}]`);
      setString(w, tw, "exFr", `${at}.words[${j}]`);
    });
  });
}

function applyQuizBank(base, translated) {
  if (!translated || !Array.isArray(translated.grammarQuiz) || !Array.isArray(translated.wordOfDay)) {
    fail("quiz: grammarQuiz et wordOfDay attendus");
  }
  if (translated.grammarQuiz.length !== base.GRAMMAR_QUIZ.length) fail("quiz: nombre de questions modifié");
  if (translated.wordOfDay.length !== base.WORD_OF_DAY.length) fail("quiz: nombre de mots du jour modifié");
  applyQuiz(base.GRAMMAR_QUIZ, translated.grammarQuiz, "opts", "exp", "quiz.grammar");
  base.WORD_OF_DAY.forEach((w, i) => {
    setString(w, translated.wordOfDay[i], "fr", `quiz.wordOfDay[${i}]`);
    setString(w, translated.wordOfDay[i], "exFr", `quiz.wordOfDay[${i}]`);
  });
}

function applyVerbs(base, translated) {
  if (!Array.isArray(translated) || translated.length !== base.length) fail("verbs: nombre de verbes modifié");
  base.forEach((v, i) => {
    setString(v, translated[i], "tr", `verbs[${i}]`);
    if (translated[i].note) v.note = translated[i].note;
  });
}

/* ---------- Validation ---------- */

function turkishFragments(text) {
  const out = [];
  const re = /<tur>([\s\S]*?)<\/tur>/gi;
  let m;
  while ((m = re.exec(text))) out.push(m[1]);
  return out;
}

function checkTurkishPreserved(original, translated, where) {
  if (typeof original !== "string" || typeof translated !== "string") return;
  const a = turkishFragments(original);
  const b = turkishFragments(translated);
  if (a.length !== b.length || a.some((x, i) => x !== b[i])) {
    fail(`${where}: les exemples turcs entre <tur> ont été modifiés`);
  }
}

function walkStrings(base, translated, where, requiredPaths) {
  if (typeof base === "string") {
    if (requiredPaths && typeof translated !== "string") fail(`${where}: chaîne attendue`);
    if (typeof translated === "string") checkTurkishPreserved(base, translated, where);
    return;
  }
  if (Array.isArray(base)) {
    if (!Array.isArray(translated) || translated.length !== base.length) fail(`${where}: tableau attendu`);
    base.forEach((v, i) => walkStrings(v, translated[i], `${where}[${i}]`, requiredPaths));
    return;
  }
  if (base && typeof base === "object") {
    if (!translated || typeof translated !== "object") fail(`${where}: objet attendu`);
    for (const key of Object.keys(base)) {
      if (translated[key] === undefined) continue;
      walkStrings(base[key], translated[key], `${where}.${key}`, requiredPaths);
    }
  }
}

/* ---------- Commandes ---------- */

function commandTemplates() {
  const data = loadFrench();
  const ui = loadUiFrench();

  writeJson(path.join(TEMPLATES, "manifest.json"), {
    note: "Traduire uniquement les champs listés. Ne jamais modifier le turc (tr, ex, watch, inf, formes, noms propres turcs) ni les balises <tur>.",
    chunks: {
      vocab: "vocab-*.json — name, words[].fr, words[].exFr",
      course: "course-*.json — title, subtitle, objectifs, blocks (text/caption/tag/head/rows/items), dialogue.title, dialogue.lines[].fr, vocab[].fr, quiz.q, quiz.opts, quiz.exp",
      grammar: "grammar-*.json — title, blocks",
      parcours: "parcours-*.json — title, goal, blocks, vocab[].fr, quiz.q, quiz.options, quiz.why",
      videos: "videos-*.json — title, goal, blocks, vocab[].fr, quiz.q, quiz.options, quiz.why. Ne pas toucher tr/watch.",
      quiz: "quiz.json — grammarQuiz[].q/opts/exp, wordOfDay[].fr/exFr",
      verbs: "verbs.json — tr, note",
      "ui-data": "ui-data.json — alphabet[].sound/words[].fr, minimalPairs[].aFr/bFr, conjTenses[].label/usage, quizTypes[].name/desc, planTypes.*.label, plan*.label/warn/note"
    }
  });

  const vocabChunks = chunkVocab(data.VOCAB, 150, "name, words[].fr, words[].exFr");
  vocabChunks.forEach((chunk, i) => writeJson(path.join(TEMPLATES, `vocab-${i + 1}.json`), chunk));

  const courseChunks = chunkItems(data.COURSE, 4, "course", "title, subtitle, objectifs, blocks, dialogue.title, dialogue.lines[].fr, vocab[].fr, quiz.q/opts/exp");
  courseChunks.forEach((chunk, i) => writeJson(path.join(TEMPLATES, `course-${i + 1}.json`), chunk));

  const grammarChunks = chunkItems(data.GRAMMAR, 8, "grammar", "title, blocks");
  grammarChunks.forEach((chunk, i) => writeJson(path.join(TEMPLATES, `grammar-${i + 1}.json`), chunk));

  const parcoursChunks = chunkItems(data.PARCOURS, 7, "parcours", "title, goal, blocks, vocab[].fr, quiz.q/options/why");
  parcoursChunks.forEach((chunk, i) => writeJson(path.join(TEMPLATES, `parcours-${i + 1}.json`), chunk));

  const videoChunks = chunkItems(data.VIDEOS, 9, "videos", "title, goal, blocks, vocab[].fr, quiz.q/options/why");
  videoChunks.forEach((chunk, i) => writeJson(path.join(TEMPLATES, `videos-${i + 1}.json`), chunk));

  writeJson(path.join(TEMPLATES, "quiz.json"), {
    domain: "quiz",
    fields: "grammarQuiz[].q/opts/exp, wordOfDay[].fr/exFr",
    grammarQuiz: data.GRAMMAR_QUIZ,
    wordOfDay: data.WORD_OF_DAY
  });

  writeJson(path.join(TEMPLATES, "verbs.json"), {
    domain: "verbs",
    fields: "tr, note",
    items: data.VERBES
  });

  writeJson(path.join(TEMPLATES, "ui-data.json"), {
    domain: "ui-data",
    fields: "alphabet[].sound, alphabet[].words[].fr, minimalPairs[].aFr, minimalPairs[].bFr, conjTenses[].label, conjTenses[].usage, quizTypes[].name, quizTypes[].desc, planTypes.*.label, plan*.label/warn/note",
    alphabet: ui.alphabet,
    minimalPairs: ui.minimalPairs,
    conjTenses: ui.conjTenses.map(t => ({ id: t.id, label: t.label, short: t.short, usage: t.usage })),
    quizTypes: ui.quizTypes.map(q => ({ id: q.id, name: q.name, desc: q.desc })),
    planTypes: ui.planTypes,
    planCurrent: ui.planCurrent,
    planWeekday: ui.planWeekday,
    planWeekend: ui.planWeekend
  });

  console.log("Modèles écrits dans", path.relative(ROOT, TEMPLATES));
}

function readChunks(lang, prefix) {
  const dir = path.join(SRC, lang);
  const files = fs.readdirSync(dir)
    .filter(f => new RegExp(`^${prefix}-\\d+\\.json$`).test(f))
    .sort((a, b) => parseInt(a.match(/-(\d+)\.json$/)[1]) - parseInt(b.match(/-(\d+)\.json$/)[1]));
  if (!files.length) fail(`Aucun fichier ${prefix}-*.json dans i18n-src/${lang}`);
  return files.map(f => readJson(path.join(dir, f)));
}

function assemble(lang, prefix, total, domain) {
  const chunks = readChunks(lang, prefix);
  const items = [];
  let expected = 0;
  chunks.forEach((chunk, i) => {
    if (chunk.domain !== domain) fail(`${prefix}-${i + 1}.json: domain ${domain} attendu`);
    if (chunk.start !== expected) fail(`${prefix}-${i + 1}.json: start ${chunk.start}, attendu ${expected}`);
    if (!Array.isArray(chunk.items) || chunk.items.length !== chunk.end - chunk.start) {
      fail(`${prefix}-${i + 1}.json: items incohérents`);
    }
    expected = chunk.end;
    items.push(...chunk.items);
  });
  if (items.length !== total) fail(`${prefix}: ${total} éléments attendus, reçu ${items.length}`);
  return items;
}

function commandBuild(lang) {
  if (!LANGS.includes(lang)) fail("Langue attendue : en, ar ou kk");
  const data = loadFrench();
  const working = clone(data);
  const trans = {};

  trans.VOCAB = assemble(lang, "vocab", data.VOCAB.length, "vocab");
  trans.COURSE = assemble(lang, "course", data.COURSE.length, "course");
  trans.GRAMMAR = assemble(lang, "grammar", data.GRAMMAR.length, "grammar");
  trans.PARCOURS = assemble(lang, "parcours", data.PARCOURS.length, "parcours");
  trans.VIDEOS = assemble(lang, "videos", data.VIDEOS.length, "videos");
  trans.QUIZ = readJson(path.join(SRC, lang, "quiz.json"));
  trans.VERBS = readJson(path.join(SRC, lang, "verbs.json")).items;
  const ui = readJson(path.join(SRC, lang, "ui-data.json"));

  walkStrings(data.VOCAB, trans.VOCAB, "vocab");
  walkStrings(data.COURSE, trans.COURSE, "course");
  walkStrings(data.GRAMMAR, trans.GRAMMAR, "grammar");
  walkStrings(data.PARCOURS, trans.PARCOURS, "parcours");
  walkStrings(data.VIDEOS, trans.VIDEOS, "videos");

  applyVocab(working.VOCAB, trans.VOCAB);
  applyCourse(working.COURSE, trans.COURSE);
  applyGrammar(working.GRAMMAR, trans.GRAMMAR);
  applyParcours(working.PARCOURS, trans.PARCOURS);
  applyVideos(working.VIDEOS, trans.VIDEOS);
  applyQuizBank(working, trans.QUIZ);
  applyVerbs(working.VERBES, trans.VERBS);

  const dir = path.join(OUT, lang);
  const header = `/* ============================================================
   Türkçe Akademi — données ${lang.toUpperCase()} générées depuis le français.
   Ne pas modifier à la main : relancer tools/locales.js build ${lang}.
   ============================================================ */\n\n`;
  const js = value => JSON.stringify(value, null, 2).replace(/<\/script/gi, "<\\/script");

  write(path.join(dir, "data-vocab.js"),
    header + `const VOCAB = ${js(working.VOCAB)};\n\nconst VOCAB_TOTAL = VOCAB.reduce((n, t) => n + t.words.length, 0);\n`);
  write(path.join(dir, "data-course.js"), header + `const COURSE = ${js(working.COURSE)};\n`);
  write(path.join(dir, "data-grammar.js"), header + `const GRAMMAR = ${js(working.GRAMMAR)};\n`);
  write(path.join(dir, "data-parcours.js"),
    header + `const PARCOURS_A = ${js(working.PARCOURS.slice(0, data.PARCOURS_A.length))};\n\n` +
    `const PARCOURS_B = ${js(working.PARCOURS.slice(data.PARCOURS_A.length, data.PARCOURS_A.length + data.PARCOURS_B.length))};\n\n` +
    `const PARCOURS_C = ${js(working.PARCOURS.slice(data.PARCOURS_A.length + data.PARCOURS_B.length))};\n`);
  write(path.join(dir, "data-videos.js"),
    header + `const VIDEOS_A1 = ${js(working.VIDEOS.slice(0, data.VIDEOS_A1.length))};\n\n` +
    `const VIDEOS_A2 = ${js(working.VIDEOS.slice(data.VIDEOS_A1.length, data.VIDEOS_A1.length + data.VIDEOS_A2.length))};\n\n` +
    `const VIDEOS_B1 = ${js(working.VIDEOS.slice(data.VIDEOS_A1.length + data.VIDEOS_A2.length))};\n`);
  write(path.join(dir, "data-quiz.js"),
    header + `const GRAMMAR_QUIZ = ${js(working.GRAMMAR_QUIZ)};\n\nconst WORD_OF_DAY = ${js(working.WORD_OF_DAY)};\n`);
  write(path.join(dir, "data-verbs.js"), header + `const VERBES = ${js(working.VERBES)};\n`);

  const uiBase = loadUiFrench();
  if (!Array.isArray(ui.alphabet) || ui.alphabet.length !== uiBase.alphabet.length) fail("ui-data: alphabet invalide");
  if (!Array.isArray(ui.minimalPairs) || ui.minimalPairs.length !== uiBase.minimalPairs.length) fail("ui-data: minimalPairs invalide");
  if (!Array.isArray(ui.conjTenses) || ui.conjTenses.length !== uiBase.conjTenses.length) fail("ui-data: conjTenses invalide");
  if (!Array.isArray(ui.quizTypes) || ui.quizTypes.length !== uiBase.quizTypes.length) fail("ui-data: quizTypes invalide");
  if (!ui.planTypes || Object.keys(ui.planTypes).length !== Object.keys(uiBase.planTypes).length) fail("ui-data: planTypes invalide");
  if (!Array.isArray(ui.planCurrent) || ui.planCurrent.length !== uiBase.planCurrent.length) fail("ui-data: planCurrent invalide");
  if (!Array.isArray(ui.planWeekday) || ui.planWeekday.length !== uiBase.planWeekday.length) fail("ui-data: planWeekday invalide");
  if (!Array.isArray(ui.planWeekend) || ui.planWeekend.length !== uiBase.planWeekend.length) fail("ui-data: planWeekend invalide");

  const locale = {
    alphabet: ui.alphabet.map((a, i) => ({
      sound: a.sound,
      words: (a.words || []).map((w, j) => ({ fr: w.fr }))
    })),
    minimalPairs: ui.minimalPairs.map(p => ({ aFr: p.aFr, bFr: p.bFr })),
    conjTenses: Object.fromEntries(ui.conjTenses.map(t => [t.id, { label: t.label, usage: t.usage }])),
    quizTypes: Object.fromEntries(ui.quizTypes.map(q => [q.id, { name: q.name, desc: q.desc }])),
    planTypes: Object.fromEntries(Object.entries(ui.planTypes).map(([k, v]) => [k, { label: v.label }])),
    planCurrent: ui.planCurrent.map(b => ({ label: b.label, warn: b.warn || "", note: b.note || "" })),
    planWeekday: ui.planWeekday.map(b => ({ label: b.label, warn: b.warn || "", note: b.note || "" })),
    planWeekend: ui.planWeekend.map(b => ({ label: b.label, warn: b.warn || "", note: b.note || "" }))
  };
  write(path.join(dir, "ui-data.js"), header + `window.TA_LOCALE = ${js(locale)};\n`);

  const uiDictFile = path.join(SRC, lang, "ui.json");
  if (fs.existsSync(uiDictFile)) {
    const dict = readJson(uiDictFile);
    if (!dict.strings || typeof dict.strings !== "object") fail("ui.json: objet strings attendu");
    if (dict.patterns && !Array.isArray(dict.patterns)) fail("ui.json: patterns doit être un tableau");
    write(path.join(dir, "ui.js"), header + `window.TA_UI = ${js({
      strings: dict.strings,
      patterns: dict.patterns || []
    })};\n`);
  }

  console.log(`Données ${lang} générées dans ${path.relative(ROOT, dir)}`);
}

function commandCheck(lang) {
  commandBuild(lang);
  console.log(`Contrôles structurels ${lang} : OK`);
}

const [cmd, lang] = process.argv.slice(2);
try {
  if (cmd === "templates") commandTemplates();
  else if (cmd === "build") commandBuild(lang);
  else if (cmd === "check") commandCheck(lang);
  else {
    console.log("Usage : node tools/locales.js templates | build <en|ar|kk> | check <en|ar|kk>");
    process.exit(1);
  }
} catch (err) {
  console.error("ERREUR :", err.message);
  process.exit(1);
}
