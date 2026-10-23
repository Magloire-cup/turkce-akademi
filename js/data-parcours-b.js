/* ============================================================
   Türkçe Akademi : Parcours guidé, unités 10 à 17
   Contenu original rédigé pour le site (programme A2 → B1).
   ============================================================ */

const PARCOURS_B = [
  {
    id: "u10", num: 10, level: "A2", title: "Habitudes et politesse",
    goal: "Parler de ses habitudes, faire une demande polie et évoquer le passé récurrent.",
    blocks: [
      { t: "p", text: "Le <b>présent simple</b> (ou présent d'habitude) se forme avec <b>-ir / -ır / -ur / -ür</b>, ou simplement <b>-r</b> après une voyelle. Il décrit ce qui se répète, une vérité générale ou un goût." },
      { t: "table", caption: "gelmek (venir) au présent simple", head: ["Personne", "Affirmatif", "Négatif"],
        rows: [
          ["ben", "<tur>gelirim</tur>", "<tur>gelmem</tur>"],
          ["sen", "<tur>gelirsin</tur>", "<tur>gelmezsin</tur>"],
          ["o", "<tur>gelir</tur>", "<tur>gelmez</tur>"],
          ["biz", "<tur>geliriz</tur>", "<tur>gelmeyiz</tur>"],
          ["siz", "<tur>gelirsiniz</tur>", "<tur>gelmezsiniz</tur>"],
          ["onlar", "<tur>gelirler</tur>", "<tur>gelmezler</tur>"]
        ] },
      { t: "p", text: "Le <b>passé d'habitude</b> ajoute <b>-erdi / -ardı</b> : <tur>gelirdim</tur> (je venais, j'avais l'habitude de venir). Il sert aux souvenirs répétés : <tur>Çocukken her yaz köye giderdik.</tur>" },
      { t: "p", text: "Pour une demande polie, on utilise le présent simple + <tur>mi</tur> : <tur>Bana yardım eder misiniz?</tur> (Pourriez-vous m'aider ?), <tur>Bir dakika bekler misiniz?</tur> (Pourriez-vous patienter un instant ?). Pour offrir : <tur>Çay ister misiniz?</tur> (Voulez-vous du thé ?)." },
      { t: "ex", items: [
        { tr: "Her sabah erken kalkarım.", fr: "Je me lève tôt chaque matin." },
        { tr: "Genellikle otobüsle işe giderim.", fr: "Je vais généralement au travail en bus." },
        { tr: "Çocukken her yaz köye giderdik.", fr: "Enfant, nous allions au village chaque été." },
        { tr: "Bana yardım eder misin?", fr: "Peux-tu m'aider ?" }
      ] },
      { t: "note", kind: "tip", tag: "Fréquence", text: "<tur>her zaman</tur> (toujours), <tur>genellikle</tur> (généralement), <tur>sık sık</tur> (souvent), <tur>bazen</tur> (parfois), <tur>nadiren</tur> (rarement), <tur>asla</tur> (jamais)." }
    ],
    vocab: [
      ["kalkmak", "se lever"], ["yürümek", "marcher"], ["otobüs", "bus"], ["erken", "tôt"],
      ["geç", "tard"], ["her gün", "chaque jour"], ["sık sık", "souvent"], ["bazen", "parfois"],
      ["asla", "jamais"], ["beklemek", "attendre"]
    ],
    quiz: [
      { q: "Comment dit-on « je me lève tôt » ?", options: ["Erken kalkarım", "Erken kalkıyorum", "Erken kalktım"], a: 0, why: "Une habitude se rend au présent simple : kalk- + -ar + -ım = kalkarım." },
      { q: "Que signifie « giderdik » ?", options: ["nous allions (habituellement)", "nous irons", "nous sommes allés"], a: 0, why: "-erdi/-ardı exprime une habitude passée : giderdik = nous avions l'habitude d'aller." }
    ]
  },
  {
    id: "u11", num: 11, level: "B1", title: "Relier les idées",
    goal: "Former des relatives avec les participes -en, -dik et -ecek, et rapporter des propos.",
    blocks: [
      { t: "p", text: "Le turc relie les idées avec des <b>participes</b> placés avant le nom, sans pronom relatif séparé. Le suffixe <b>-en / -an</b> correspond à « qui » au présent : <tur>çalışan adam</tur> (l'homme qui travaille)." },
      { t: "table", caption: "Trois participes utiles", head: ["Forme", "Exemple", "Sens"],
        rows: [
          ["-en / -an", "<tur>bekleyen kadın</tur>", "la femme qui attend"],
          ["-dik / -dık", "<tur>aldığım kitap</tur>", "le livre que j'ai acheté"],
          ["-ecek / -acak", "<tur>gideceğimiz otel</tur>", "l'hôtel où nous irons"]
        ] },
      { t: "note", kind: "info", tag: "Possessif dans le participe", text: "Avec -dik et -ecek, le suffixe possessif indique qui fait l'action : <tur>aldığım</tur> (que j'ai acheté), <tur>aldığın</tur> (que tu as acheté), <tur>aldığı</tur> (qu'il a acheté), <tur>aldığımız</tur> (que nous avons acheté)." },
      { t: "p", text: "Pour rapporter des paroles, on peut citer directement : <tur>Ali « Yarın geleceğim » dedi.</tur> Ou intégrer la proposition : <tur>Ali yarın geleceğini söyledi.</tur> (Ali a dit qu'il viendrait demain.)." },
      { t: "ex", items: [
        { tr: "Kütüphanede çalışan öğrenci benim arkadaşım.", fr: "L'étudiant qui travaille à la bibliothèque est mon ami." },
        { tr: "Dün aldığım kitap çok güzel.", fr: "Le livre que j'ai acheté hier est très beau." },
        { tr: "Gideceğimiz otel deniz kenarında.", fr: "L'hôtel où nous irons est au bord de la mer." },
        { tr: "Ali yarın geleceğini söyledi.", fr: "Ali a dit qu'il viendrait demain." }
      ] },
      { t: "note", kind: "tip", tag: "Méthode", text: "Pour traduire une relative française, commence par le nom, puis place l'action au participe devant lui, et ajoute le possessif si nécessaire. <tur>Le train qui arrive</tur> → <tur>gelen tren</tur>." }
    ],
    vocab: [
      ["beklemek", "attendre"], ["tanımak", "connaître"], ["arkadaş", "ami"], ["otel", "hôtel"],
      ["deniz", "mer"], ["kenar", "bord"], ["söylemek", "dire"], ["duymak", "entendre"],
      ["gelen", "qui vient"], ["aldığım", "que j'ai acheté"]
    ],
    quiz: [
      { q: "Comment dire « le livre que j'ai acheté » ?", options: ["aldığım kitap", "alan kitap", "alacağım kitap"], a: 0, why: "Le participe -dik avec le possessif de la première personne donne aldığım." },
      { q: "Que signifie « çalışan adam » ?", options: ["l'homme qui travaille", "l'homme qui a travaillé", "l'homme qui travaillera"], a: 0, why: "-en/-an est le participe présent : çalışan = qui travaille." }
    ]
  },
  {
    id: "u12", num: 12, level: "B1", title: "Le passé indéfini",
    goal: "Employer -miş, rapporter une information non vérifiée et situer avec les postpositions.",
    blocks: [
      { t: "p", text: "Le suffixe <b>-miş / -mış / -muş / -müş</b> marque un passé <b>indirect</b> : information rapportée, découverte, conte ou événement dont on n'a pas été témoin. En français, on le rend par « il paraît que », « apparemment » ou « il se trouve que »." },
      { t: "table", caption: "gelmek au passé indéfini", head: ["Personne", "Forme", "Sens"],
        rows: [
          ["ben", "<tur>gelmişim</tur>", "il paraît que je suis venu"],
          ["sen", "<tur>gelmişsin</tur>", "il paraît que tu es venu"],
          ["o", "<tur>gelmiş</tur>", "il / elle serait venu(e)"],
          ["biz", "<tur>gelmişiz</tur>", "nous serions venus"],
          ["siz", "<tur>gelmişsiniz</tur>", "vous seriez venus"],
          ["onlar", "<tur>gelmişler</tur>", "ils / elles seraient venus"]
        ] },
      { t: "note", kind: "info", tag: "Négation et question", text: "Négatif : <tur>gelmemişim</tur> (il paraît que je ne suis pas venu). Question : <tur>gelmiş mi?</tur> (Serait-il venu ?)." },
      { t: "p", text: "Les <b>postpositions de lieu</b> se construisent avec le génitif : <tur>masanın üstünde</tur> (sur la table), <tur>kapının yanında</tur> (à côté de la porte), <tur>evin önünde</tur> (devant la maison), <tur>arabanın arkasında</tur> (derrière la voiture)." },
      { t: "ex", items: [
        { tr: "Ali eve gelmiş.", fr: "Apparemment, Ali est rentré à la maison." },
        { tr: "Ayşe yeni bir iş bulmuş.", fr: "Il paraît qu'Ayşe a trouvé un nouveau travail." },
        { tr: "Kitabım masanın üstünde.", fr: "Mon livre est sur la table." },
        { tr: "Duyduğuma göre hava yarın düzelecek.", fr: "D'après ce que j'ai entendu, le temps va s'améliorer demain." }
      ] },
      { t: "note", kind: "tip", tag: "Ne pas confondre", text: "<tur>Geldi</tur> = je l'ai vu venir, j'en suis témoin. <tur>Gelmiş</tur> = on me l'a dit, je le déduis. Le choix du suffixe change la source de l'information." }
    ],
    vocab: [
      ["duymak", "entendre"], ["bulmak", "trouver"], ["hasta", "malade"], ["haber", "nouvelle"],
      ["üst", "dessus"], ["alt", "dessous"], ["yan", "côté"], ["arka", "arrière"],
      ["karşı", "en face"], ["göre", "selon"]
    ],
    quiz: [
      { q: "Quelle phrase signifie « il paraît qu'il est venu » ?", options: ["Gelmiş", "Geldi", "Geliyor"], a: 0, why: "-miş marque le passé indirect, non témoigné : gelmiş." },
      { q: "Comment dire « sur la table » ?", options: ["masanın üstünde", "masaya", "masadan"], a: 0, why: "La postposition üstünde exige le génitif : masanın üstünde." }
    ]
  },
  {
    id: "u13", num: 13, level: "B1", title: "Conditions et souhaits",
    goal: "Formuler des hypothèses avec -se, exprimer un regret avec keşke.",
    blocks: [
      { t: "p", text: "Le <b>conditionnel</b> se forme avec <b>-se / -sa</b> suivi des marques de personne : <tur>gelsem</tur> (si je venais), <tur>gelsen</tur> (si tu venais). La condition réelle utilise souvent le présent ou le futur dans la proposition principale." },
      { t: "table", caption: "Le conditionnel de gelmek", head: ["Personne", "Forme", "Sens"],
        rows: [
          ["ben", "<tur>gelsem</tur>", "si je venais"],
          ["sen", "<tur>gelsen</tur>", "si tu venais"],
          ["o", "<tur>gelse</tur>", "s'il / elle venait"],
          ["biz", "<tur>gelsek</tur>", "si nous venions"],
          ["siz", "<tur>gelseniz</tur>", "si vous veniez"],
          ["onlar", "<tur>gelseler</tur>", "s'ils / elles venaient"]
        ] },
      { t: "p", text: "<tur>Eğer</tur> (si) est facultatif. Pour une hypothèse irréelle ou un regret, on combine -se avec le passé <b>-ydi</b> : <tur>Param olsaydı yeni bir araba alırdım.</tur> (Si j'avais de l'argent, j'achèterais une nouvelle voiture.)." },
      { t: "note", kind: "info", tag: "Hypothèse irréelle", text: "Le schéma complet est <tur>-seydi</tur> + <tur>-erdi</tur> : <tur>Daha erken çıksaydık trene yetişirdik.</tur> (Si nous étions partis plus tôt, nous aurions attrapé le train.). À la forme négative : <tur>söylemeseydim</tur> (si je ne l'avais pas dit) : <tur>Keşke ona söylemeseydim.</tur>" },
      { t: "note", kind: "tip", tag: "Keşke", text: "<tur>Keşke</tur> signifie « si seulement ». Il appelle souvent le conditionnel passé : <tur>Keşke daha erken gelseydim.</tur> (Si seulement j'étais venu plus tôt.), <tur>Keşke Türkçe konuşabilseydim.</tur> (Si seulement je savais parler turc.)" },
      { t: "ex", items: [
        { tr: "Yarın hava güzel olursa parka gideriz.", fr: "S'il fait beau demain, nous irons au parc." },
        { tr: "Eğer gelirsen beni ara.", fr: "Si tu viens, appelle-moi." },
        { tr: "Param olsaydı yeni bir araba alırdım.", fr: "Si j'avais de l'argent, j'achèterais une voiture neuve." },
        { tr: "Keşke daha erken gelseydim.", fr: "Si seulement j'étais venu plus tôt." },
        { tr: "Daha erken çıksaydık trene yetişirdik.", fr: "Si nous étions partis plus tôt, nous aurions attrapé le train." }
      ] },
      { t: "note", kind: "info", tag: "Famille", text: "<tur>anne</tur> (mère), <tur>baba</tur> (père), <tur>kardeş</tur> (frère ou sœur), <tur>eş</tur> (conjoint), <tur>çocuk</tur> (enfant), <tur>evli</tur> (marié), <tur>bekar</tur> (célibataire)." }
    ],
    vocab: [
      ["eğer", "si"], ["keşke", "si seulement"], ["şart", "condition"], ["aile", "famille"],
      ["evli", "marié"], ["bekar", "célibataire"], ["anne", "mère"], ["baba", "père"],
      ["kardeş", "frère, sœur"], ["çocuk", "enfant"]
    ],
    quiz: [
      { q: "Comment dire « si tu viens » ?", options: ["gelirsen", "gelsem", "gelsen"], a: 0, why: "La condition réelle avec sen se forme avec -irsen : gelirsen." },
      { q: "Que signifie « Keşke bilseydim » ?", options: ["Si seulement j'avais su", "Je sais", "Je saurai"], a: 0, why: "Keşke + conditionnel passé exprime le regret : « si seulement j'avais su »." }
    ]
  },
  {
    id: "u14", num: 14, level: "B1", title: "Devoir, nécessité, goûts",
    goal: "Exprimer l'obligation, la nécessité et parler de ce qu'on aime faire.",
    blocks: [
      { t: "p", text: "Pour parler d'une activité en général, on utilise le <b>nom verbal</b> : <tur>-mek / -mak</tur>, ou <tur>-me / -ma</tur> lorsqu'il porte un suffixe de cas : <tur>yüzmek</tur> (nager), <tur>yüzmeyi seviyorum</tur> (j'aime nager)." },
      { t: "table", caption: "Exprimer l'obligation et la nécessité", head: ["Structure", "Exemple", "Sens"],
        rows: [
          ["-meli / -malı", "<tur>Gitmeliyim.</tur>", "Je dois partir."],
          ["-meliydi / -malıydı", "<tur>Gitmeliydim.</tur>", "J'aurais dû partir."],
          ["-memeli / -mamalı", "<tur>Gitmemelisin.</tur>", "Tu ne dois pas partir."],
          ["-mek zorunda", "<tur>Çalışmak zorundayım.</tur>", "Je suis obligé de travailler."],
          ["-meye ihtiyaç", "<tur>Su içmeye ihtiyacım var.</tur>", "J'ai besoin de boire de l'eau."]
        ] },
      { t: "note", kind: "info", tag: "Nuance", text: "<b>-meli</b> exprime une obligation personnelle, un conseil ou une déduction (« je dois », « il faut que »). <b>zorunda</b> insiste sur une contrainte extérieure. <b>ihtiyaç</b> parle d'un besoin. Au passé, <tur>-meliydi</tur> exprime le regret d'une obligation non remplie : <tur>Daha erken kalkmalıydım.</tur> (J'aurais dû me lever plus tôt.)" },
      { t: "p", text: "Pour les goûts : <tur>sevmek</tur> (aimer), <tur>hoşlanmak</tur> (apprécier), <tur>nefret etmek</tur> (détester). L'activité aimée prend <b>-meyi / -mayı</b> : <tur>Yürümeyi seviyorum.</tur>" },
      { t: "ex", items: [
        { tr: "Yürümeyi seviyorum.", fr: "J'aime marcher." },
        { tr: "Bugün erken kalkmalıyım.", fr: "Je dois me lever tôt aujourd'hui." },
        { tr: "Otobüse binmek zorundayız.", fr: "Nous sommes obligés de prendre le bus." },
        { tr: "Gürültü yapmamalısın.", fr: "Tu ne dois pas faire de bruit." }
      ] },
      { t: "note", kind: "tip", tag: "À toi", text: "Compose trois phrases : une obligation avec -meli, une contrainte avec zorunda, et un goût avec -meyi sevmek. Dis-les à voix haute pour ancrer le rythme." }
    ],
    vocab: [
      ["yürümek", "marcher"], ["yüzmek", "nager"], ["gürültü", "bruit"], ["zorunda", "obligé"],
      ["ihtiyaç", "besoin"], ["nefret etmek", "détester"], ["hoşlanmak", "apprécier"],
      ["sevmek", "aimer"], ["binmek", "monter dans"], ["dinlenmek", "se reposer"]
    ],
    quiz: [
      { q: "Comment dire « Je dois partir » ?", options: ["Gitmeliyim", "Gidiyorum", "Gittim"], a: 0, why: "L'obligation se marque avec -meli : git- + -meli + -yim = gitmeliyim." },
      { q: "Quelle phrase signifie « J'aime nager » ?", options: ["Yüzmeyi seviyorum", "Yüzmek istiyorum", "Yüzmeyi sevmiyorum"], a: 0, why: "L'activité prend -meyi : yüzme + yi seviyorum." }
    ]
  },
  {
    id: "u15", num: 15, level: "B1", title: "Comparer et conseiller",
    goal: "Comparer avec daha, en et kadar, et utiliser les pronoms indéfinis.",
    blocks: [
      { t: "p", text: "Le <b>comparatif</b> se forme avec <tur>daha</tur> (plus) devant l'adjectif : <tur>daha büyük</tur> (plus grand). Le complément de comparaison prend l'ablatif : <tur>Ali'den daha uzun</tur> (plus grand qu'Ali)." },
      { t: "table", caption: "Comparer", head: ["Structure", "Exemple", "Sens"],
        rows: [
          ["daha + adjectif", "<tur>daha güzel</tur>", "plus beau"],
          ["en + adjectif", "<tur>en güzel</tur>", "le plus beau"],
          ["kadar", "<tur>senin kadar hızlı</tur>", "aussi rapide que toi"],
          ["ablatif + daha", "<tur>Ali'den daha uzun</tur>", "plus grand qu'Ali"]
        ] },
      { t: "p", text: "Pour conseiller, on peut utiliser <tur>bence</tur> (à mon avis), <tur>-meli</tur> (tu devrais) ou <tur>istersen</tur> (si tu veux) : <tur>Bence dinlenmelisin.</tur> (À mon avis, tu devrais te reposer.), <tur>İstersen yardım edebilirim.</tur> (Si tu veux, je peux aider.)." },
      { t: "note", kind: "info", tag: "Pronoms indéfinis", text: "<tur>herkes</tur> (tout le monde), <tur>kimse</tur> (personne), <tur>hiç kimse</tur> (absolument personne), <tur>bir şey</tur> (quelque chose), <tur>hiçbir şey</tur> (rien), <tur>her şey</tur> (tout), <tur>bazıları</tur> (certains)." },
      { t: "ex", items: [
        { tr: "Bugün daha iyiyim.", fr: "Je vais mieux aujourd'hui." },
        { tr: "Bu, dünyanın en güzel şehri.", fr: "C'est la plus belle ville du monde." },
        { tr: "Benim kadar hızlı koşabilir misin?", fr: "Peux-tu courir aussi vite que moi ?" },
        { tr: "Herkes Türkçe öğrenebilir.", fr: "Tout le monde peut apprendre le turc." }
      ] },
      { t: "note", kind: "tip", tag: "Attention", text: "Après un adjectif comparatif, le complément se met à l'ablatif : <tur>benden daha genç</tur> (plus jeune que moi). Ne traduis pas « que » par un mot séparé." }
    ],
    vocab: [
      ["daha", "plus"], ["en", "le plus"], ["kadar", "autant que"], ["herkes", "tout le monde"],
      ["kimse", "personne"], ["hiçbir", "aucun"], ["bazı", "certains"], ["bence", "à mon avis"],
      ["hızlı", "rapide"], ["genç", "jeune"]
    ],
    quiz: [
      { q: "Comment dire « plus grand » ?", options: ["daha büyük", "en büyük", "büyük kadar"], a: 0, why: "Le comparatif se forme avec daha : daha büyük." },
      { q: "Quel mot signifie « personne » ?", options: ["kimse", "herkes", "bazıları"], a: 0, why: "Kimse signifie « personne » ; herkes signifie « tout le monde »." }
    ]
  },
  {
    id: "u16", num: 16, level: "B1", title: "Pouvoir, passif, causatif",
    goal: "Exprimer la capacité, former le passif et faire faire une action.",
    blocks: [
      { t: "p", text: "La <b>capacité</b> se forme avec <b>-ebil / -abil</b> entre la racine et la terminaison : <tur>konuşabilirim</tur> (je peux parler). La forme négative est irrégulière : <tur>konuşamam</tur> (je ne peux pas parler)." },
      { t: "table", caption: "konuşmak (parler) : capacité", head: ["Personne", "Affirmatif", "Négatif"],
        rows: [
          ["ben", "<tur>konuşabilirim</tur>", "<tur>konuşamam</tur>"],
          ["sen", "<tur>konuşabilirsin</tur>", "<tur>konuşamazsın</tur>"],
          ["o", "<tur>konuşabilir</tur>", "<tur>konuşamaz</tur>"],
          ["biz", "<tur>konuşabiliriz</tur>", "<tur>konuşamayız</tur>"]
        ] },
      { t: "p", text: "Le <b>passif</b> se marque avec <b>-il / -in / -n</b> : <tur>yazılmak</tur> (être écrit), <tur>açılmak</tur> (être ouvert), <tur>soyulmak</tur> (être cambriolé). Le <b>causatif</b> ajoute <b>-dir / -t / -ir</b> : <tur>yaptırmak</tur> (faire faire), <tur>kestirmek</tur> (faire couper)." },
      { t: "note", kind: "info", tag: "Futur dans le passé", text: "<b>-ecekti / -acaktı</b> exprime une action qui était prévue dans le passé : <tur>Dün gelecektim ama işim çıktı.</tur> (Je devais venir hier, mais j'ai eu un imprévu.)." },
      { t: "ex", items: [
        { tr: "Türkçe konuşabiliyor musun? — Biraz konuşabiliyorum.", fr: "Sais-tu parler turc ? — Je sais un peu parler." },
        { tr: "Araba tamir edildi.", fr: "La voiture a été réparée." },
        { tr: "Saçımı kestirdim.", fr: "Je me suis fait couper les cheveux." },
        { tr: "Dün gelecektim ama işim çıktı.", fr: "Je devais venir hier, mais j'ai eu un imprévu." }
      ] },
      { t: "note", kind: "tip", tag: "Reconnaître", text: "Devant un verbe long, cherche les blocs : <tur>yap-tır-ıl-dı</tur> = faire faire + passif + passé : « cela a été fait faire ». Décompose de droite à gauche." }
    ],
    vocab: [
      ["konuşmak", "parler"], ["tamir etmek", "réparer"], ["kesmek", "couper"], ["açmak", "ouvrir"],
      ["yazmak", "écrire"], ["soymak", "cambrioler"], ["yaptırmak", "faire faire"],
      ["kestirmek", "faire couper"], ["tamir edilmek", "être réparé"], ["çıkmak", "sortir, survenir"]
    ],
    quiz: [
      { q: "Comment dire « Je peux parler » ?", options: ["konuşabilirim", "konuşamam", "konuşuyorum"], a: 0, why: "La capacité affirmative se forme avec -abil : konuş- + -abil + -irim." },
      { q: "Que signifie « Kapı açıldı » ?", options: ["La porte a été ouverte", "J'ai ouvert la porte", "La porte s'ouvrira"], a: 0, why: "Le passif -il transforme « ouvrir » en « être ouvert » : açıldı." }
    ]
  },
  {
    id: "u17", num: 17, level: "B1", title: "Passé continu et culture",
    goal: "Combiner les temps du passé, comprendre les proverbes et découvrir Atatürk.",
    blocks: [
      { t: "p", text: "Le <b>passé continu</b> (<tur>-yordu</tur>) décrit une action en cours dans le passé : <tur>geliyordum</tur> (j'étais en train de venir). Le <b>plus-que-parfait</b> (<tur>-mişti</tur>) marque une action antérieure à un autre moment passé : <tur>gelmiştim</tur> (j'étais déjà venu)." },
      { t: "table", caption: "Trois temps du passé avec gelmek", head: ["Temps", "Forme (ben)", "Sens"],
        rows: [
          ["Passé continu", "<tur>geliyordum</tur>", "j'étais en train de venir"],
          ["Plus-que-parfait", "<tur>gelmiştim</tur>", "j'étais déjà venu"],
          ["Habitude passée", "<tur>gelirdim</tur>", "je venais (souvent)"]
        ] },
      { t: "ex", items: [
        { tr: "Tam çıkıyorduk, yağmur yağmaya başladı.", fr: "Nous étions sur le point de sortir quand il a commencé à pleuvoir." },
        { tr: "O geldiğinde ben uyumuştum.", fr: "Quand il est arrivé, je m'étais déjà endormi." },
        { tr: "Küçükken her yaz denize giderdik.", fr: "Petits, nous allions à la mer chaque été." }
      ] },
      { t: "h", text: "Proverbes et expressions" },
      { t: "table", caption: "Trois proverbes à connaître", head: ["Proverbe", "Sens"],
        rows: [
          ["<tur>Damlaya damlaya göl olur.</tur>", "Petit à petit, l'oiseau fait son nid."],
          ["<tur>Bir elin nesi var, iki elin sesi var.</tur>", "L'union fait la force."],
          ["<tur>Acele işe şeytan karışır.</tur>", "La précipitation nuit au travail."]
        ] },
      { t: "table", caption: "Trois expressions imagées", head: ["Expression", "Mot à mot", "Sens"],
        rows: [
          ["<tur>Göz atmak</tur>", "jeter un œil", "jeter un coup d'œil"],
          ["<tur>Ağzı kulaklarında</tur>", "sa bouche est à ses oreilles", "être tout sourire"],
          ["<tur>Can kulağıyla dinlemek</tur>", "écouter avec l'oreille de l'âme", "écouter très attentivement"]
        ] },
      { t: "p", text: "<b>Mustafa Kemal Atatürk</b> (1881–1938) est le fondateur de la République de Turquie, proclamée en 1923. Il a engagé de grandes réformes : adoption de l'alphabet latin en 1928, développement de l'enseignement, droits politiques des femmes (éligibilité en 1934) et modernisation du pays. Son nom reste associé à la laïcité et à la souveraineté nationale." },
      { t: "note", kind: "tip", tag: "Presque au bout", text: "Tu viens de boucler les temps du passé. Deux unités concrètes t'attendent encore : chez le médecin et au téléphone." }
    ],
    vocab: [
      ["yağmur", "pluie"], ["başlamak", "commencer"], ["uyumak", "dormir"], ["cumhuriyet", "république"],
      ["kurmak", "fonder"], ["reform", "réforme"], ["harf", "lettre"], ["acele", "précipitation"],
      ["göl", "lac"], ["el", "main"]
    ],
    quiz: [
      { q: "Quelle phrase signifie « nous étions en train de sortir » ?", options: ["Çıkıyorduk", "Çıktık", "Çıkacağız"], a: 0, why: "Le passé continu -yordu exprime une action en cours : çıkıyorduk." },
      { q: "Que signifie « uyumuştum » ?", options: ["Je m'étais endormi", "Je dors", "Je vais dormir"], a: 0, why: "-mişti est le plus-que-parfait : une action accomplie avant un autre moment passé." }
    ]
  }
];
