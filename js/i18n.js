/* ============================================================
   Türkçe Akademi — traduction de l'interface (EN/AR/KK)
   Les données pédagogiques sont déjà traduites dans js/i18n/.
   Ce script traduit les libellés produits par les scripts de page.
   ============================================================ */
(function () {
  const dict = window.TA_UI || { strings: {}, patterns: [] };
  const strings = dict.strings || {};
  const templates = [];
  const patterns = [];

  function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

  Object.keys(strings).forEach(key => {
    if (!key.includes("{")) return;
    const parts = key.split(/(\{\w+\})/);
    const names = [];
    let source = "^";
    parts.forEach(part => {
      const m = /^\{(\w+)\}$/.exec(part);
      if (m) { names.push(m[1]); source += "(.+?)"; }
      else source += escapeRe(part);
    });
    source += "$";
    const value = strings[key];
    const repl = value.replace(/\{(\w+)\}/g, (_, name) => {
      const idx = names.indexOf(name);
      return idx >= 0 ? "$" + (idx + 1) : "";
    });
    try { templates.push([new RegExp(source, "u"), repl]); } catch (e) {}
  });

  (dict.patterns || []).forEach(p => {
    try {
      if (Array.isArray(p) && p.length === 2) patterns.push([new RegExp(p[0], "u"), p[1]]);
    } catch (e) {}
  });

  const SKIP_TEXT = "script,style,textarea,code,pre,.tr,.tur,tur,.word-tr,.tk,[data-no-i18n],[contenteditable='true']";
  const SKIP_ATTR = "script,style,code,pre,.tr,.tur,tur,.word-tr,.tk,[data-no-i18n],[contenteditable='true']";
  const ATTRS = ["title", "aria-label", "placeholder", "alt"];

  function skippedText(node) {
    const el = node.nodeType === 1 ? node : node.parentElement;
    return !el || (el.closest && el.closest(SKIP_TEXT));
  }

  function skippedAttr(el) {
    return !el || (el.closest && el.closest(SKIP_ATTR));
  }

  function translateText(raw) {
    if (typeof raw !== "string" || !raw.trim()) return raw;
    const lead = raw.match(/^\s*/)[0];
    const trail = raw.match(/\s*$/)[0];
    const core = raw.trim();
    if (Object.prototype.hasOwnProperty.call(strings, core)) {
      const out = strings[core];
      return typeof out === "string" && out !== core ? lead + out + trail : raw;
    }
    for (const [re, repl] of templates) {
      if (re.test(core)) {
        const out = core.replace(re, repl);
        return out !== core ? lead + out + trail : raw;
      }
    }
    for (const [re, repl] of patterns) {
      if (re.test(core)) {
        const out = core.replace(re, repl);
        return out !== core ? lead + out + trail : raw;
      }
    }
    if (core.includes(" · ")) {
      let changed = false;
      const parts = core.split(" · ").map(part => {
        if (Object.prototype.hasOwnProperty.call(strings, part) && part !== strings[part]) {
          changed = true;
          return strings[part];
        }
        return part;
      });
      if (changed) return lead + parts.join(" · ") + trail;
    }
    return raw;
  }

  function translateAttr(el, name) {
    if (!el.hasAttribute || !el.hasAttribute(name)) return;
    const value = el.getAttribute(name);
    const out = translateText(value);
    if (out !== value) el.setAttribute(name, out);
  }

  function translateElement(root) {
    if (!root) return;
    const isEl = root.nodeType === 1;
    if (isEl) {
      if (skippedAttr(root)) return;
      ATTRS.forEach(a => translateAttr(root, a));
    }
    const textRoot = isEl && skippedText(root) ? null : root;
    if (textRoot) {
      const walker = document.createTreeWalker(textRoot, NodeFilter.SHOW_TEXT, null);
      let node;
      while ((node = walker.nextNode())) {
        if (skippedText(node)) continue;
        const value = node.nodeValue;
        const out = translateText(value);
        if (out !== value) node.nodeValue = out;
      }
    }
    if (isEl && root.querySelectorAll) {
      root.querySelectorAll("*").forEach(el => {
        if (skippedAttr(el)) return;
        ATTRS.forEach(a => translateAttr(el, a));
      });
      root.querySelectorAll("input[placeholder],textarea[placeholder],img[alt]").forEach(el => {
        ATTRS.forEach(a => translateAttr(el, a));
      });
    }
  }

  function translateDocument() {
    translateElement(document.body);
    const title = translateText(document.title);
    if (title !== document.title) document.title = title;
    document.querySelectorAll('meta[name="description"],meta[property="og:title"],meta[property="og:description"]').forEach(m => {
      const value = m.getAttribute("content");
      if (value) {
        const out = translateText(value);
        if (out !== value) m.setAttribute("content", out);
      }
    });
  }

  let pending = false;
  function schedule() {
    if (pending) return;
    pending = true;
    setTimeout(() => {
      pending = false;
      translateDocument();
    }, 0);
  }

  function init() {
    translateDocument();
    const observer = new MutationObserver(schedule);
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ATTRS
    });
  }

  window.T = translateText;
  window.TA_I18N = { translate: translateText, apply: translateDocument };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
