/* Vérifie les traductions i18n-src/{lang} contre i18n-src/templates. */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "i18n-src");
const lang = process.argv[2];

if (!["en", "ar", "kk"].includes(lang)) {
  console.error("Usage : node tools/verify-i18n.js <en|ar|kk>");
  process.exit(1);
}

const CONTENT = [
  "vocab-1", "vocab-2", "vocab-3", "vocab-4",
  "course-1", "course-2", "course-3",
  "grammar-1", "grammar-2",
  "parcours-1", "parcours-2", "parcours-3",
  "videos-1", "videos-2", "videos-3",
  "quiz", "verbs", "ui-data"
];
const UI = ["ui-html-1", "ui-html-2", "ui-js"];
const PROTECTED = new Set([
  "id", "level", "num", "type", "t", "kind", "icon", "inf", "pres", "aor",
  "past", "fut", "neg", "s", "e", "a", "l", "short", "cls", "vowel",
  "start", "end", "domain", "fields", "watch", "href", "src"
]);
const TR_PROTECTED = new Set(["vocab", "course", "parcours", "videos", "quiz", "ui-data"]);

let errors = 0;
let warnings = 0;
function err(file, msg) { errors++; console.log(`  ERREUR [${file}] ${msg}`); }
function warn(file, msg) { warnings++; if (warnings <= 25) console.log(`  alerte [${file}] ${msg}`); }

function readJson(file) {
  if (!fs.existsSync(file)) return null;
  try { return JSON.parse(fs.readFileSync(file, "utf8")); }
  catch (e) { err(path.basename(file), "JSON invalide : " + e.message); return null; }
}

function turSpans(value, out = []) {
  if (typeof value === "string") {
    const re = /<tur>[\s\S]*?<\/tur>/g;
    let m;
    while ((m = re.exec(value))) out.push(m[0]);
  } else if (Array.isArray(value)) value.forEach(v => turSpans(v, out));
  else if (value && typeof value === "object") Object.values(value).forEach(v => turSpans(v, out));
  return out;
}

function walk(src, dst, file, domain, pathStr) {
  if (Array.isArray(src)) {
    if (!Array.isArray(dst)) return err(file, `${pathStr} : tableau attendu`);
    if (src.length !== dst.length) return err(file, `${pathStr} : ${dst.length} éléments au lieu de ${src.length}`);
    src.forEach((v, i) => walk(v, dst[i], file, domain, `${pathStr}[${i}]`));
    return;
  }
  if (src && typeof src === "object") {
    if (!dst || typeof dst !== "object" || Array.isArray(dst)) return err(file, `${pathStr} : objet attendu`);
    const sk = Object.keys(src), dk = Object.keys(dst);
    if (sk.join("|") !== dk.join("|")) return err(file, `${pathStr} : clés différentes`);
    sk.forEach(k => walk(src[k], dst[k], file, domain, pathStr ? `${pathStr}.${k}` : k));
    return;
  }
  if (src === null || typeof src !== "object") {
    if (typeof src !== typeof dst) return err(file, `${pathStr} : type différent`);
    if (typeof src === "number" || typeof src === "boolean" || src === null) {
      if (src !== dst) err(file, `${pathStr} : valeur ${JSON.stringify(dst)} au lieu de ${JSON.stringify(src)}`);
      return;
    }
    const last = pathStr.split(".").pop().replace(/\[\d+\]$/, "");
    const protectedKey = PROTECTED.has(last) || (last === "tr" && TR_PROTECTED.has(domain));
    if (protectedKey && src !== dst) err(file, `${pathStr} : champ protégé modifié (${JSON.stringify(dst).slice(0, 60)})`);
    if (!dst.trim()) err(file, `${pathStr} : traduction vide`);
  }
}

function latinResidue(value, out = []) {
  if (typeof value === "string") {
    const matches = value.match(/[A-Za-zÀ-ÿ]{2,}/g);
    if (matches) matches.forEach(m => out.push(m));
  } else if (Array.isArray(value)) value.forEach(v => latinResidue(v, out));
  else if (value && typeof value === "object") Object.values(value).forEach(v => latinResidue(v, out));
  return out;
}

const ALLOW = /^(Türkçe|Akademi|Yunus|Emre|Enstitüsü|TAM|AsMemoire|MatheSciences|FluenTurk|Pomodomate|TurkishFluent|A1|A2|B1|CEFR|PDF|HTML|CSS|JavaScript|Google|YouTube|Spotify|Netflix|WhatsApp|Instagram|Ankara|İstanbul|Istanbul|Türkiye|Turkey|Atatürk|Ramazan|Kurban|Bayram|LGS|YKS|KPSS|TDK|TÖMER|Hacı|Bektaş|Veli|Nasreddin|Hoca|Dede|Korkut|Amazon|Disney|TRT|Euro|TL|Wi|Fi|OK|DNA|MP3|TV|GPS|SIM|SMS|ISBN|Türk|Lira)$/i;

function checkResidue(file, data, domain) {
  const values = [];
  (function collect(v, key) {
    if (typeof v === "string") {
      const last = (key || "").split(".").pop();
      if (PROTECTED.has(last) || (last === "tr" && TR_PROTECTED.has(domain))) return;
      values.push(v);
    } else if (Array.isArray(v)) v.forEach(x => collect(x, key));
    else if (v && typeof v === "object") Object.keys(v).forEach(k => collect(v[k], k));
  })(data, "");
  const fr = [" le ", " la ", " les ", " des ", " une ", " est ", " pour ", " dans ", " avec ", " vous ", " sur ", " aux ", " du ", " ne ", " pas ", " que ", " qui ", " ton ", " ta ", " tes ", " cette ", " nous ", " sont "];
  const joined = " " + values.join(" ").toLowerCase() + " ";
  const hits = fr.filter(w => joined.includes(w));
  if (hits.length > 3) warn(file, `mots français résiduels probables : ${hits.join(", ")}`);
  const stray = [...new Set(latinResidue(values))].filter(w => !ALLOW.test(w) && !/^[A-Z]{1,4}$/.test(w));
  if (lang === "en" && stray.length > 400) warn(file, `${stray.length} mots latins (normal en anglais)`);
}

for (const name of CONTENT) {
  const tf = path.join(SRC, "templates", name + ".json");
  const lf = path.join(SRC, lang, name + ".json");
  if (!fs.existsSync(lf)) { console.log(`  manquant : ${lang}/${name}.json`); continue; }
  const src = readJson(tf), dst = readJson(lf);
  if (!src || !dst) continue;
  const before = errors;
  const domain = src.domain || name.replace(/-\d+$/, "");
  walk(src, dst, name, domain, "");
  const st = turSpans(src), dt = turSpans(dst);
  if (st.length !== dt.length || st.some((x, i) => x !== dt[i])) {
    err(name, `<tur> modifiés : ${st.length} source / ${dt.length} traduction`);
  }
  checkResidue(name, dst, domain);
  if (errors === before) console.log(`  OK ${name}`);
}

for (const name of UI) {
  const tf = path.join(SRC, "templates", name + ".json");
  const lf = path.join(SRC, lang, name + ".json");
  if (!fs.existsSync(lf)) { console.log(`  manquant : ${lang}/${name}.json`); continue; }
  const src = readJson(tf), dst = readJson(lf);
  if (!src || !dst) continue;
  const before = errors;
  const sk = Object.keys(src), dk = Object.keys(dst);
  if (sk.length !== dk.length) err(name, `${dk.length} clés au lieu de ${sk.length}`);
  const missing = sk.filter(k => !Object.prototype.hasOwnProperty.call(dst, k));
  const extra = dk.filter(k => !Object.prototype.hasOwnProperty.call(src, k));
  if (missing.length) err(name, `${missing.length} clé(s) manquante(s) : ${missing.slice(0, 3).join(" | ")}`);
  if (extra.length) err(name, `${extra.length} clé(s) en trop : ${extra.slice(0, 3).join(" | ")}`);
  for (const key of sk) {
    if (!(key in dst)) continue;
    const value = dst[key];
    if (typeof value !== "string" || !value.trim()) { err(name, `valeur vide pour « ${key.slice(0, 40)} »`); continue; }
    const ph = key.match(/\{(\w+)\}/g) || [];
    for (const token of ph) if (!value.includes(token)) err(name, `placeholder ${token} perdu dans « ${key.slice(0, 40)} »`);
  }
  if (lang !== "en") {
    const words = [...new Set(latinResidue(dst).filter(w => !ALLOW.test(w)))];
    if (words.length) warn(name, `${words.length} mot(s) latin(s) à vérifier : ${words.slice(0, 12).join(", ")}`);
  }
  if (errors === before) console.log(`  OK ${name}`);
}

const uiDict = path.join(SRC, lang, "ui.json");
if (fs.existsSync(uiDict)) {
  const d = readJson(uiDict);
  if (d && (!d.strings || typeof d.strings !== "object")) err("ui.json", "objet strings manquant");
  const empty = d && d.strings ? Object.values(d.strings).filter(v => typeof v !== "string" || !v.trim()).length : 0;
  if (empty) err("ui.json", `${empty} traduction(s) vide(s)`);
}

console.log(`\n${errors} erreur(s), ${warnings} alerte(s).`);
process.exit(errors ? 1 : 0);
