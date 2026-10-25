#!/usr/bin/env node
"use strict";

/* Génère les coquilles HTML des versions anglaise, arabe et kazakhe.
   Les pages restent identiques au français ; seuls les chemins, la
   langue, la direction et les scripts de données changent.
   Usage : node tools/make-shells.js
*/

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const LANGS = {
  en: { dir: "ltr", font: null },
  ar: {
    dir: "rtl",
    font: '<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap" rel="stylesheet">'
  },
  kk: {
    dir: "ltr",
    font: '<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">'
  }
};

const PAGES = [
  "index.html",
  "cours.html",
  "parcours.html",
  "vocabulaire.html",
  "grammaire.html",
  "conjugaison.html",
  "videos.html",
  "essentiel.html",
  "exercices.html",
  "prononciation.html",
  "devoirs.html"
];

const DATA_MAP = {
  "data-vocab.js": "data-vocab.js",
  "data-course.js": "data-course.js",
  "data-grammar.js": "data-grammar.js",
  "data-quiz.js": "data-quiz.js",
  "data-verbs.js": "data-verbs.js",
  "data-parcours-a.js": "data-parcours.js",
  "data-parcours-b.js": "data-parcours.js",
  "data-parcours-c.js": "data-parcours.js",
  "data-videos-a1.js": "data-videos.js",
  "data-videos-a2.js": "data-videos.js",
  "data-videos-b1.js": "data-videos.js"
};

function eachPage(lang, fn) {
  const sourceDir = path.join(ROOT, "i18n-src", lang);
  fs.mkdirSync(path.join(ROOT, lang), { recursive: true });
  PAGES.forEach(page => {
    const translated = path.join(sourceDir, page);
    const source = fs.existsSync(translated) ? translated : path.join(ROOT, page);
    fn(page, fs.readFileSync(source, "utf8"));
  });
}

function rewritePaths(html) {
  return html
    .replace(/href="css\//g, 'href="../css/')
    .replace(/src="js\//g, 'src="../js/')
    .replace(/href="favicon\.svg"/g, 'href="../favicon.svg"')
    .replace(/src="favicon\.svg"/g, 'src="../favicon.svg"');
}

function rewriteDataScripts(html, lang) {
  const tagRe = /<script\s+src="\.\.\/js\/(data-[a-z0-9-]+\.js)"><\/script>/g;
  const seen = new Set();
  let out = html.replace(tagRe, (tag, file) => {
    const target = DATA_MAP[file];
    if (!target) return tag;
    if (seen.has(target)) return "";
    seen.add(target);
    return `<script src="../js/i18n/${lang}/${target}"></script>`;
  });
  out = out.replace(/[ \t]*\n[ \t]*\n/g, "\n");
  return out;
}

function insertLocaleScripts(html, lang) {
  const app = '<script src="../js/app.js"></script>';
  if (!html.includes(app)) throw new Error("app.js introuvable");
  const langTag = html.includes('src="../js/lang.js"') ? "" : '\n  <script src="../js/lang.js"></script>';
  return html.replace(app, `${app}
  <script src="../js/i18n/${lang}/ui-data.js"></script>
  <script src="../js/i18n/${lang}/ui.js"></script>
  <script src="../js/i18n.js"></script>${langTag}`);
}

function setHtmlLang(html, lang) {
  const conf = LANGS[lang];
  let out = html.replace(/<html\s+lang="[a-z-]+"(?:\s+dir="[a-z]+")?\s*>/i, `<html lang="${lang}" dir="${conf.dir}">`);
  if (conf.font) {
    out = out.replace(/(<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Inter[^>]*>\s*)/i, `$1\n  ${conf.font}\n  `);
  }
  return out;
}

function makeShell(lang, page, raw) {
  let html = rewritePaths(raw);
  html = rewriteDataScripts(html, lang);
  html = insertLocaleScripts(html, lang);
  html = setHtmlLang(html, lang);
  const dest = path.join(ROOT, lang, page);
  fs.writeFileSync(dest, html, "utf8");
}

Object.keys(LANGS).forEach(lang => {
  eachPage(lang, (page, html) => makeShell(lang, page, html));
  console.log(`${lang}/ : ${PAGES.length} pages générées`);
});
