# Chunk brief — Türkçe Akademi

Read `TRANSLATION-RULES.md` and your language style file before starting. Every output file must be valid JSON with the exact same structure, array lengths, keys and top-level metadata as its template.

## Field map

### vocab-*.json
Translate:
- `items[].name`
- `items[].words[].fr`
- `items[].words[].exFr`

Do not translate `items[].id`, `words[].tr`, `words[].ex`. Turkish example sentences must stay identical.

### course-*.json
Translate:
- `items[].title`, `items[].subtitle`
- `items[].objectifs[]`
- `items[].blocks[]`:
  - `p` and `h`: `text`
  - `note`: `tag`, `text`
  - `table`: `caption` (if present), every string in `head`, every cell in `rows`
  - `ul`: every string in `items`
  - `ex`: `items[].fr` only
- `items[].dialogue.title`, `items[].dialogue.lines[].fr` (not `name`, not `tr`)
- `items[].vocab[].fr` (not `tr`)
- `items[].quiz[].q`, `quiz[].opts[]`, `quiz[].exp` (not `a`)

Do not translate `t`, `kind`, `id`, `num`, `level`, `a`, `tr`.

### grammar-*.json
Translate:
- `items[].title`
- `items[].blocks[]` with the same block rules as course.

Do not translate `id`, `level`, `t`, `kind`, or any `tr`.

### parcours-*.json
Translate:
- `items[].title`, `items[].goal`
- `items[].blocks[]` with the same block rules as course.
- `items[].vocab[j][1]` (the French meaning). Do not change `vocab[j][0]` (Turkish).
- `items[].quiz[].q`, `quiz[].options[]`, `quiz[].why` (not `a`).

If a quiz option is Turkish (e.g. `Öğrenciyim`, `kitaplar`), leave it unchanged. Translate only French options.

### videos-*.json
Translate:
- `items[].title`, `items[].goal`
- `items[].blocks[]` with the same block rules as course.
- `items[].vocab[j][1]` (French meaning). Do not change `vocab[j][0]` (Turkish).
- `items[].quiz[].q`, `quiz[].options[]`, `quiz[].why` (not `a`).

Do not translate `items[].tr` (Turkish title) or `items[].watch` (Turkish YouTube search phrase).

### quiz.json
Translate:
- `grammarQuiz[].q`, `grammarQuiz[].opts[]`, `grammarQuiz[].exp`
- `wordOfDay[].fr`, `wordOfDay[].exFr`

Do not translate `grammarQuiz[].a`, `wordOfDay[].tr`, `wordOfDay[].ex`.
Leave Turkish quiz options unchanged.

### verbs.json
This file is an exception: `items[].tr` is the **French** translation of the Turkish verb, so translate it into the target language.
- Translate `items[].tr`
- Translate `items[].note` when present
- Do not translate `items[].inf`, `pres`, `aor`, `past`, `fut`.

### ui-data.json
Translate:
- `alphabet[].sound`
- `alphabet[].words[].fr`
- `minimalPairs[].aFr`, `minimalPairs[].bFr`
- `conjTenses[].label`, `conjTenses[].usage`
- `quizTypes[].name`, `quizTypes[].desc`
- `planTypes.*.label`
- `planCurrent[].label`, `planCurrent[].warn`
- `planWeekday[].label`, `planWeekday[].warn`, `planWeekday[].note`
- `planWeekend[].label`, `planWeekend[].warn`, `planWeekend[].note`

Do not translate IDs, `l`, `type`, `vowel`, `short`, `cls`, `s`, `e`, `icon`, Turkish words in `alphabet[].words[].tr`, or `minimalPairs[].a/.b`.

## Quality rules

- Keep all HTML tags and `<tur>` wrappers. The text inside `<tur>` must remain byte-identical.
- Translate French prose in table cells but keep Turkish examples inside `<tur>` unchanged.
- Do not translate Turkish grammatical forms in prose when they are the object being explained (e.g. `-ler / -lar`, `evlerimde`, `geliyor`). They are part of the Turkish lesson.
- Do not add or remove examples, rows, options or items.
- Use the glossary in your language style file consistently.
- Validate JSON after writing.
