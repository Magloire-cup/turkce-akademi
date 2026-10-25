#!/usr/bin/env node
"use strict";

/* Assemble les morceaux de traduction d'interface en i18n-src/{lang}/ui.json.
   Usage : node tools/merge-ui.js <en|ar|kk>
*/

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "i18n-src");
const [lang] = process.argv.slice(2);
if (!["en", "ar", "kk"].includes(lang)) {
  console.error("Usage : node tools/merge-ui.js <en|ar|kk>");
  process.exit(1);
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function keysOf(obj) { return Object.keys(obj); }

function main() {
  const htmlTemplate = readJson(path.join(SRC, "templates", "ui-html.json"));
  const jsTemplate = readJson(path.join(SRC, "templates", "ui-js.json"));
  const expected = new Set([...keysOf(htmlTemplate), ...keysOf(jsTemplate)].filter(key =>
    !/^<!DOCTYPE/i.test(key) && /[A-Za-zÀ-ÿ]/.test(key)
  ));

  const dir = path.join(SRC, lang);
  const files = fs.readdirSync(dir).filter(f => /^ui-(html-\d+|js)\.json$/.test(f)).sort();
  if (!files.length) {
    console.error(`Aucun fichier ui-*.json dans ${path.relative(ROOT, dir)}`);
    process.exit(1);
  }

  const strings = {};
  const seen = new Map();
  const unknown = [];
  files.forEach(file => {
    const data = readJson(path.join(dir, file));
    Object.keys(data).forEach(key => {
      if (!expected.has(key)) { unknown.push(`${file}: ${key}`); return; }
      if (seen.has(key) && seen.get(key) !== data[key]) {
        console.error(`Clé traduite deux fois différemment : ${key}`);
        process.exit(1);
      }
      seen.set(key, data[key]);
      strings[key] = data[key];
    });
  });

  const missing = [...expected].filter(k => !(k in strings));
  const patternsFile = path.join(dir, "ui-patterns.json");
  const patterns = fs.existsSync(patternsFile) ? readJson(patternsFile) : [];

  const out = { strings, patterns };
  const target = path.join(dir, "ui.json");
  fs.writeFileSync(target, JSON.stringify(out, null, 2) + "\n", "utf8");

  console.log(`${lang}: ${Object.keys(strings).length} chaînes, ${missing.length} manquantes, ${unknown.length} inconnues`);
  if (missing.length) console.log("Manquantes :\n" + missing.map(k => "  - " + k).join("\n"));
  if (unknown.length) console.log("Inconnues :\n" + unknown.map(k => "  - " + k).join("\n"));
  if (missing.length) process.exitCode = 2;
}

main();
