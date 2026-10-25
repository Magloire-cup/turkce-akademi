# Translation rules — Türkçe Akademi

You are translating a French-language website that teaches Turkish. The site will exist in French (source), English, Arabic and Kazakh. The Turkish being taught must NEVER be translated or altered.

## Non-negotiable rules

1. Translate only the fields listed for your file in `i18n-src/templates/manifest.json` and in your task. Keep every other field byte-identical.
2. Never translate, reorder, correct or transliterate Turkish content:
   - fields `tr`, `ex`, `watch`, `inf`, `pres`, `aor`, `past`, `fut`
   - anything inside `<tur>...</tur>`
   - Turkish personal names (Elif, Magloire, Esnaf, Ayşe, Ali…)
   - Turkish words quoted as examples, even when they have no `<tur>` wrapper (for example quiz options such as `Öğrenciyim`, `kitaplar`, `evlerimde`).
3. Preserve all HTML tags, attributes, entities and punctuation structure: `<b>`, `<i>`, `<br>`, `<tur>`, `&nbsp;`, `«…»`, etc. Translate the prose between tags, not the tags.
4. Preserve array lengths, object keys, indices, IDs, levels (`A1`, `A2`, `B1`), numbers and answer keys (`a`).
5. For quiz options: translate French options; leave Turkish options exactly as they are. The answer index must not change.
6. Keep the brand names `Türkçe Akademi`, `by TAM`, `Atatürk`, `Yunus Emre Enstitüsü` and video/series names unchanged.
7. No gamification vocabulary (XP, levels, streaks, player ranks). Progress is factual.
8. Tone: clear, friendly, precise, for an adult learner. Explain grammar without dumbing it down. Prefer short sentences.
9. Output valid UTF-8 JSON with the same top-level metadata (`domain`, `fields`, `start`, `end`, `items`, etc.). Do not wrap it in Markdown fences.
10. After writing the file, verify it parses with:
    `node -e "JSON.parse(require('fs').readFileSync('PATH','utf8')); console.log('ok')"`

## Grammar terminology

Use the glossary in your language-specific style file consistently. The French source sometimes uses several names for the same notion; map them to one target term.

## Quality checks

- Read the whole source chunk before translating so context and terminology stay consistent.
- Do not translate line by line mechanically; produce natural target-language prose.
- Keep the Turkish examples in place inside sentences, with the same surrounding tags.
- Do not add explanations, footnotes or content that is not in the source.
- Do not remove examples or shorten tables.
