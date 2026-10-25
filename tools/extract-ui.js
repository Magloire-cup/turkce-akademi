#!/usr/bin/env node
"use strict";

/* Extrait les chaînes visibles des pages HTML et les regroupe dans
   i18n-src/templates/ui-html.json. Les clés sont les textes français
   exacts (espaces de début/fin retirés) que js/i18n.js doit traduire.
   Usage : node tools/extract-ui.js
*/

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
/* essentiel.html est traduit statiquement (fichier complet) car ses
   tableaux mêlent turc et français et ne passent pas par le dictionnaire. */
const PAGES = [
  "index.html",
  "cours.html",
  "parcours.html",
  "vocabulaire.html",
  "grammaire.html",
  "conjugaison.html",
  "videos.html",
  "exercices.html",
  "prononciation.html",
  "devoirs.html"
];

const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
const SKIP_TAGS = new Set(["script", "style", "svg", "template", "noscript"]);
const SKIP_CLASSES = new Set(["tr", "tk", "word-tr"]);
const ATTRS = ["title", "aria-label", "placeholder", "alt"];

function decode(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&laquo;/g, "«")
    .replace(/&raquo;/g, "»")
    .replace(/&hellip;/g, "…")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&rarr;/g, "→")
    .replace(/&larr;/g, "←")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(parseInt(n, 10)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
}

function classList(attrs) {
  const m = /\bclass\s*=\s*"([^"]*)"/i.exec(attrs);
  return m ? m[1].split(/\s+/).filter(Boolean) : [];
}

function attrValue(attrs, name) {
  const re = new RegExp(`\\b${name}\\s*=\\s*"([^"]*)"`, "i");
  const m = re.exec(attrs);
  return m ? decode(m[1]) : "";
}

function walk(html, add) {
  const tagRe = /<!--[\s\S]*?-->|<\/?[a-zA-Z][^>]*>/g;
  const stack = [];
  let last = 0;
  let m;

  function skipped() {
    return stack.some(s => s.skip);
  }

  while ((m = tagRe.exec(html))) {
    const text = html.slice(last, m.index);
    if (text && !skipped()) {
      const clean = text.replace(/\s+/g, " ").trim();
      if (clean && /[a-zA-ZÀ-ÿİıĞğŞşÇçÖöÜü0-9]/.test(clean)) add(clean);
    }
    last = tagRe.lastIndex;

    const tag = m[0];
    if (tag.startsWith("<!--")) continue;
    if (/^<\//.test(tag)) {
      const name = /^<\/\s*([a-zA-Z0-9-]+)/.exec(tag)[1].toLowerCase();
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i].name === name) { stack.splice(i, 1); break; }
      }
      continue;
    }

    const nameMatch = /^<\s*([a-zA-Z0-9-]+)/.exec(tag);
    if (!nameMatch) continue;
    const name = nameMatch[1].toLowerCase();
    const attrs = tag.slice(nameMatch[0].length);
    const classes = classList(attrs);
    const parentSkip = skipped();
    const skip = parentSkip || SKIP_TAGS.has(name) || classes.some(c => SKIP_CLASSES.has(c)) || /\bdata-no-i18n\b/.test(attrs);

    if (!parentSkip) {
      ATTRS.forEach(attr => {
        const value = attrValue(attrs, attr);
        if (value && value.trim() && /[a-zA-ZÀ-ÿ]/.test(value)) add(value.replace(/\s+/g, " ").trim());
      });
    }

    const selfClosing = /\/\s*>$/.test(tag) || VOID.has(name);
    if (!selfClosing) stack.push({ name, skip });
  }

  const tail = html.slice(last);
  if (tail && !skipped()) {
    const clean = tail.replace(/\s+/g, " ").trim();
    if (clean && /[a-zA-ZÀ-ÿ]/.test(clean)) add(clean);
  }
}

function main() {
  const strings = new Map();
  const add = s => {
    if (!strings.has(s)) strings.set(s, { pages: new Set() });
  };

  PAGES.forEach(page => {
    const html = fs.readFileSync(path.join(ROOT, page), "utf8");
    const pageAdd = s => {
      add(s);
      strings.get(s).pages.add(page);
    };

    walk(html, pageAdd);

    const title = /<title>([\s\S]*?)<\/title>/i.exec(html);
    if (title) pageAdd(decode(title[1]).replace(/\s+/g, " ").trim());

    const desc = /<meta\s+name="description"\s+content="([^"]*)"/i.exec(html);
    if (desc) pageAdd(decode(desc[1]).replace(/\s+/g, " ").trim());
  });

  const out = {};
  [...strings.keys()].sort((a, b) => a.localeCompare(b, "fr")).forEach(key => {
    out[key] = "";
  });

  const file = path.join(ROOT, "i18n-src", "templates", "ui-html.json");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(out, null, 2) + "\n", "utf8");
  console.log(`${Object.keys(out).length} chaînes uniques écrites dans ${path.relative(ROOT, file)}`);
}

main();
