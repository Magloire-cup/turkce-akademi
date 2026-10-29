/* ============================================================
   Türkçe Akademi : Programme de cours
   12 modules répartis en trois grandes étapes
   Chaque module : objectifs, leçon (blocs), dialogue, vocabulaire, quiz
   ============================================================ */

const COURSE = [
  /* ============ MODULE 1 ============ */
  {
    id: "m1", num: 1, level: "A1",
    title: "L'alphabet turc & premiers mots",
    subtitle: "Prononcer les 29 lettres et saluer comme un local",
    objectifs: [
      "Connaître les 29 lettres de l'alphabet turc",
      "Prononcer correctement ç, ş, ğ, ı, ö, ü",
      "Lire n'importe quel mot turc à voix haute",
      "Saluer et remercier"
    ],
    blocks: [
      { t: "p", text: "Bonne nouvelle : le turc est une langue <b>phonétique</b>. Chaque lettre se prononce toujours de la même façon, sans exception. Une fois l'alphabet maîtrisé, tu peux lire n'importe quel mot : même sans le comprendre. L'alphabet latin est utilisé depuis 1928, suite à la grande réforme des lettres voulue par <b>Atatürk</b>." },
      { t: "h", text: "Les 8 voyelles" },
      { t: "p", text: "Le turc a 8 voyelles. Quatre te sont familières (a, e, i comme en espagnol, o), quatre demandent un petit effort." },
      { t: "table", caption: "Les voyelles turques", head: ["Lettre", "Prononciation (approx. française)", "Exemple"],
        rows: [
          ["a / e / i / o", "a, é, i (bref et net), o", "<tur>elma</tur> (pomme)"],
          ["u", "ou", "<tur>okul</tur> (école)"],
          ["ı (i sans point)", "« eu » bref, non arrondi : comme dans « le »", "<tur>ışık</tur> (lumière)"],
          ["ü", "u français (comme « rue »)", "<tur>gül</tur> (rose)"],
          ["ö", "eu français (comme « peu »)", "<tur>göz</tur> (œil)"]
        ] },
      { t: "note", kind: "tip", tag: "Astuce", text: "Attention au piège classique : <b>ı</b> (I majuscule sans point) et <b>i</b> (İ avec point) sont deux lettres différentes. <tur>kedi</tur> (chat) ≠ <tur>kırmızı</tur> (rouge)." },
      { t: "h", text: "Les consonnes qui changent tout" },
      { t: "table", caption: "Consonnes spécifiques", head: ["Lettre", "Se prononce", "Exemple"],
        rows: [
          ["ç", "« tch »", "<tur>çay</tur> (thé) : tchaï"],
          ["ş", "« ch » français", "<tur>şehir</tur> (ville) : chéhir"],
          ["c", "« dj »", "<tur>cam</tur> (verre) : djam"],
          ["j", "« j » français (rare)", "<tur>jilet</tur> (rasoir)"],
          ["ğ", "se prononce à peine : il allonge la voyelle précédente", "<tur>dağ</tur> (montagne) : « daa »"],
          ["h", "toujours aspiré, comme en anglais", "<tur>hava</tur> (air, temps)"]
        ] },
      { t: "p", text: "Les autres lettres se prononcent comme en français, à deux détails près : le <b>r</b> est roulé, et le <b>v</b> est parfois plus doux, entre « v » et « w ». Le <b>y</b> vaut « y » comme dans « yaourt »." },
      { t: "h", text: "Lis à voix haute" },
      { t: "ex", items: [
        { tr: "Merhaba", fr: "Bonjour" },
        { tr: "teşekkür ederim", fr: "Merci" },
        { tr: "günaydın", fr: "Bonjour (le matin)" },
        { tr: "nasılsın?", fr: "Comment vas-tu ?" },
        { tr: "çok güzel", fr: "Très beau / très bien" },
        { tr: "hoş geldiniz", fr: "Bienvenue" }
      ] },
      { t: "note", kind: "tip", tag: "Méthode", text: "Lis chaque mot à voix haute en imitant le rythme. Le turc est une langue à accent final : l'accent tonique tombe presque toujours sur la <b>dernière syllabe</b> : merhaba (merha-<b>BA</b>), güzel (gu-<b>ZEL</b>), teşekkür (te-şek-<b>KÜR</b>)." }
    ],
    dialogue: {
      title: "Première rencontre",
      lines: [
        { name: "Elif", tr: "Merhaba!", fr: "Bonjour !" },
        { name: "Magloire", tr: "Merhaba, nasılsın?", fr: "Bonjour, comment vas-tu ?" },
        { name: "Elif", tr: "İyiyim, teşekkür ederim. Sen nasılsın?", fr: "Je vais bien, merci. Et toi ?" },
        { name: "Magloire", tr: "Ben de iyiyim. Adın ne?", fr: "Moi aussi je vais bien. Comment t'appelles-tu ?" },
        { name: "Elif", tr: "Benim adım Elif. Sen?", fr: "Je m'appelle Elif. Et toi ?" },
        { name: "Magloire", tr: "Ben Magloire. Memnun oldum!", fr: "Moi c'est Magloire. Enchanté !" },
        { name: "Elif", tr: "Ben de memnun oldum. Görüşürüz!", fr: "Enchantée aussi. À bientôt !" }
      ]
    },
    vocab: [
      { tr: "merhaba", fr: "bonjour, salut" },
      { tr: "günaydın", fr: "bonjour (matin)" },
      { tr: "iyi akşamlar", fr: "bonsoir" },
      { tr: "nasılsın?", fr: "comment vas-tu ?" },
      { tr: "iyiyim", fr: "je vais bien" },
      { tr: "teşekkür ederim", fr: "merci" },
      { tr: "memnun oldum", fr: "enchanté" },
      { tr: "görüşürüz", fr: "à bientôt" },
      { tr: "çok", fr: "très" },
      { tr: "güzel", fr: "beau, joli" }
    ],
    quiz: [
      { q: "Comment se prononce la lettre « ş » ?", opts: ["« ch » comme « chat »", "« ch » comme « tché »", "« s » sifflant", "« j » français"], a: 0, exp: "ş se prononce comme le « ch » français : şehir = ché-hir." },
      { q: "Combien de lettres compte l'alphabet turc ?", opts: ["26", "29", "32", "24"], a: 1, exp: "29 lettres : l'alphabet latin moins q, w, x, plus ç, ğ, ı, ö, ş, ü." },
      { q: "La lettre « ğ » (soft g)…", opts: ["se prononce comme un « g » dur", "allonge la voyelle qui précède", "ne s'écrit plus aujourd'hui", "se prononce « y »"], a: 1, exp: "dağ se prononce « daa » : le ğ n'est jamais un g dur, il étire la voyelle." },
      { q: "Comment se prononce « ı » (I sans point) ?", opts: ["comme « i » français", "comme un « eu » bref non arrondi", "comme « y »", "il est muet"], a: 1, exp: "Iı ressemble au « e » de « le » : ışık (lumière) se dit « eu-cheuk »." },
      { q: "Que signifie « teşekkür ederim » ?", opts: ["Au revoir", "S'il vous plaît", "Merci", "Excusez-moi"], a: 2, exp: "teşekkür ederim = je te remercie. Forme courte familière : sağ ol." }
    ]
  },

  /* ============ MODULE 2 ============ */
  {
    id: "m2", num: 2, level: "A1",
    title: "Se présenter : je suis…",
    subtitle: "Le verbe être n'existe pas : il se colle à la fin du mot",
    objectifs: [
      "Dire ton nom, ta nationalité, ton métier",
      "Comprendre la logique des suffixes personnels",
      "Demander « et toi ? »"
    ],
    blocks: [
      { t: "p", text: "Surprise : en turc, <b>il n'y a pas de verbe « être » au présent</b>. Pour dire « je suis étudiant », on accroche un petit suffixe à la fin du nom : <tur>öğrenci</tur> + <b>-im</b> → <tur>öğrenciyim</tur>. Le pronom (ben, sen…) est facultatif : le suffixe dit déjà qui parle." },
      { t: "h", text: "La conjugaison de l'être" },
      { t: "table", caption: "Suffixes personnels de l'être", head: ["Pronom", "Suffixe", "Exemple", "Traduction"],
        rows: [
          ["ben (je)", "-im / -ım / -üm / -um", "<tur>öğretmenim</tur>", "je suis enseignant"],
          ["sen (tu)", "-sin / -sın / -sün / -sun", "<tur>öğrencisin</tur>", "tu es étudiant"],
          ["o (il/elle)", "Ø", "<tur>doktor</tur>", "il est médecin"],
          ["biz (nous)", "-iz / -ız / -üz / -uz", "<tur>Türküz</tur>", "nous sommes turcs"],
          ["siz (vous)", "-siniz / -sınız / -sünüz / -sunuz", "<tur>yorgunsunuz</tur>", "vous êtes fatigués"],
          ["onlar (ils)", "Ø (ou -ler)", "<tur>öğretmen</tur>", "ils sont enseignants"]
        ] },
      { t: "note", kind: "info", tag: "Pourquoi 4 formes ?", text: "-im, -ım, -üm, -um… le suffixe s'adapte à la dernière voyelle du mot. C'est <b>l'harmonie vocalique</b>, au programme du module 4. Pour l'instant, apprends chaque mot comme un bloc." },
      { t: "h", text: "Ton prénom" },
      { t: "p", text: "Deux façons de dire ton nom : <tur>Benim adım Elif</tur> (mon nom est Elif : littéralement « ad-ım ») ou plus simplement <tur>Ben Elif</tur> (moi [c'est] Elif). Pour demander : <tur>Adın ne?</tur> (tu) / <tur>Adınız ne?</tur> (vous)." },
      { t: "h", text: "Nationalités & métiers" },
      { t: "ex", items: [
        { tr: "Ben Magloire. Fransızım.", fr: "Je m'appelle Magloire. Je suis français." },
        { tr: "Ben Türküm.", fr: "Je suis turc." },
        { tr: "Öğretmenim.", fr: "Je suis enseignant(e)." },
        { tr: "Mühendisim.", fr: "Je suis ingénieur(e)." },
        { tr: "Öğrenci misin?", fr: "Es-tu étudiant ?" },
        { tr: "Evet, öğrenciyim.", fr: "Oui, je suis étudiant." }
      ] },
      { t: "note", kind: "tip", tag: "Culture", text: "La question <tur>nerelisin?</tur> signifie « tu es d'où ? ». Réponses naturelles : <tur>Fransızım</tur> (je suis français) ou <tur>Fransa'dan geliyorum</tur> (je viens de France)." }
    ],
    dialogue: {
      title: "À la cafétéria de l'université",
      lines: [
        { name: "Magloire", tr: "Merhaba! Burada oturabilir miyim?", fr: "Bonjour ! Puis-je m'asseoir ici ?" },
        { name: "Zeynep", tr: "Tabii, buyurun.", fr: "Bien sûr, je t'en prie." },
        { name: "Magloire", tr: "Benim adım Magloire. Siz öğrenci misiniz?", fr: "Je m'appelle Magloire. Êtes-vous étudiante ?" },
        { name: "Zeynep", tr: "Hayır, ben öğretmenim. Fransızca dersleri veriyorum.", fr: "Non, je suis enseignante. J'enseigne le français." },
        { name: "Magloire", tr: "Ah, çok güzel! Ben Fransızım, mühendislik öğrencisiyim.", fr: "Ah, très bien ! Je suis français, étudiant en ingénierie." },
        { name: "Zeynep", tr: "Hoş geldiniz! Türkçe öğreniyorsunuz, çok başarılısınız.", fr: "Bienvenue ! Vous apprenez le turc, vous êtes très doué." },
        { name: "Magloire", tr: "Teşekkür ederim!", fr: "Merci !" }
      ]
    },
    vocab: [
      { tr: "ben / sen / o", fr: "je / tu / il, elle" },
      { tr: "biz / siz / onlar", fr: "nous / vous / ils, elles" },
      { tr: "ad", fr: "prénom" },
      { tr: "Fransız", fr: "français" },
      { tr: "Türk", fr: "turc" },
      { tr: "öğrenci", fr: "étudiant(e)" },
      { tr: "öğretmen", fr: "enseignant(e)" },
      { tr: "mühendis", fr: "ingénieur(e)" },
      { tr: "evet / hayır", fr: "oui / non" },
      { tr: "nerelisin?", fr: "tu es d'où ?" }
    ],
    quiz: [
      { q: "Comment dit-on « je suis étudiant » ?", opts: ["Ben öğrenci olmak", "Öğrenciyim", "Ben öğrenci var", "Öğrenci benim"], a: 1, exp: "öğrenci + -im → öğrenciyim. Le pronom ben est facultatif." },
      { q: "Complète : « Biz Türk… » (nous sommes turcs)", opts: ["-im", "-sin", "-üz", "-ler"], a: 2, exp: "Türk + üz → Türküz (la voyelle ü s'harmonise avec ü de Türk)." },
      { q: "« Siz öğretmen… » (vous êtes enseignant)", opts: ["-im", "-siniz", "-sin", "-üz"], a: 1, exp: "Pour « vous », le suffixe est -siniz : öğretmensiniz." },
      { q: "Que veut dire « Adın ne? »", opts: ["Quel âge as-tu ?", "Comment t'appelles-tu ?", "Où habites-tu ?", "Que fais-tu ?"], a: 1, exp: "ad (nom) + -ın (ton) + ne (quoi) : « ton nom, quoi ? »." },
      { q: "Avec « o » (il/elle), le suffixe de l'être est…", opts: ["-dir toujours obligatoire", "souvent rien du tout", "-sin", "-lar"], a: 1, exp: "O doktor suffit. Le suffixe -dir existe mais est très formel/écrit." }
    ]
  },

  /* ============ MODULE 3 ============ */
  {
    id: "m3", num: 3, level: "A1",
    title: "Nombres, âge & heure",
    subtitle: "Compter jusqu'à 1000 et demander l'heure",
    objectifs: [
      "Compter de 0 à 1000",
      "Dire ton âge et demander celui de quelqu'un",
      "Demander et donner l'heure"
    ],
    blocks: [
      { t: "h", text: "Compter" },
      { t: "table", caption: "Les nombres de base", head: ["Chiffre", "Turc", "Chiffre", "Turc"],
        rows: [
          ["0", "<tur>sıfır</tur>", "7", "<tur>yedi</tur>"],
          ["1", "<tur>bir</tur>", "8", "<tur>sekiz</tur>"],
          ["2", "<tur>iki</tur>", "9", "<tur>dokuz</tur>"],
          ["3", "<tur>üç</tur>", "10", "<tur>on</tur>"],
          ["4", "<tur>dört</tur>", "20", "<tur>yirmi</tur>"],
          ["5", "<tur>beş</tur>", "30", "<tur>otuz</tur>"],
          ["6", "<tur>altı</tur>", "40", "<tur>kırk</tur>"]
        ] },
      { t: "p", text: "Le système est <b>totalement transparent</b> : 11 = <tur>on bir</tur> (dix-un), 17 = <tur>on yedi</tur>, 23 = <tur>yirmi üç</tur>, 45 = <tur>kırk beş</tur>. Et pour les centaines : 100 = <tur>yüz</tur>, 1000 = <tur>bin</tur>, donc 350 = <tur>üç yüz elli</tur>, 1985 = <tur>bin dokuz yüz seksen beş</tur>." },
      { t: "h", text: "L'âge" },
      { t: "p", text: "Question : <tur>Kaç yaşındasın?</tur> (quel âge as-tu ?). Réponse : <tur>Yirmi iki yaşındayım</tur> (j'ai 22 ans). Note la petite particule <b>-da-</b> au milieu : « dans mes vingt-deux ans »." },
      { t: "h", text: "L'heure" },
      { t: "p", text: "Question magique : <tur>Saat kaç?</tur> (littéralement « heure combien ? »). Structure : <tur>Saat</tur> + nombre. Ensuite deux mots utiles : <b>buçuk</b> (et demie) et <b>çeyrek</b> (quart)." },
      { t: "table", caption: "Dire l'heure", head: ["Heure", "Turc", "Remarque"],
        rows: [
          ["3 h", "<tur>Saat üç.</tur>", "simplicité totale"],
          ["3 h 30", "<tur>Saat üç buçuk.</tur>", "buçuk = et demie"],
          ["5 h 10", "<tur>Saat beşi on geçiyor.</tur>", "« cinq-dix passe » : geçiyor = passées"],
          ["2 h 50", "<tur>Saat üçe on var.</tur>", "« à trois, dix il reste » : var = moins"],
          ["11 h 15", "<tur>Saat on bir çeyrek geçiyor.</tur>", "et quart"]
        ] },
      { t: "note", kind: "tip", tag: "Logique turque", text: "Pour « 5 h 10 », le turc met le nombre à un cas spécial (beş<b>i</b>, üç<b>e</b>) : tu comprendras pourquoi au module 10. Pour l'instant, retiens les blocs tout faits." },
      { t: "ex", items: [
        { tr: "Affedersiniz, saat kaç?", fr: "Excusez-moi, quelle heure est-il ?" },
        { tr: "Saat dokuz buçuk.", fr: "Il est neuf heures et demie." },
        { tr: "Kaç yaşındasın?", fr: "Quel âge as-tu ?" },
        { tr: "Ben yirmi yaşındayım.", fr: "J'ai vingt ans." },
        { tr: "Bu kaç lira?", fr: "C'est combien (ces livres) ?" }
      ] }
    ],
    dialogue: {
      title: "Devant l'arrêt de bus",
      lines: [
        { name: "Magloire", tr: "Affedersiniz, saat kaç oldu?", fr: "Excusez-moi, quelle heure est-il ?" },
        { name: "Passant", tr: "Saat on buçuk oldu.", fr: "Il est dix heures et demie." },
        { name: "Magloire", tr: "Otobüs ne zaman geliyor?", fr: "Quand est-ce que le bus arrive ?" },
        { name: "Passant", tr: "On beşte geliyor. Siz kaç yaşındasınız?", fr: "Il arrive à dix heures cinq. Vous avez quel âge ?" },
        { name: "Magloire", tr: "Ben yirmi yaşındayım. Neden sordunuz?", fr: "J'ai vingt ans. Pourquoi cette question ?" },
        { name: "Passant", tr: "Öğrenci bileti var mı diye. Gençlere indirim var!", fr: "Pour savoir si vous avez un billet étudiant. Il y a une réduction pour les jeunes !" }
      ]
    },
    vocab: [
      { tr: "bir … on", fr: "un … dix" },
      { tr: "yirmi … doksan", fr: "vingt … quatre-vingt-dix" },
      { tr: "yüz / bin", fr: "cent / mille" },
      { tr: "kaç", fr: "combien" },
      { tr: "yaş", fr: "âge, an (d'âge)" },
      { tr: "saat", fr: "heure, horloge" },
      { tr: "buçuk", fr: "et demie" },
      { tr: "çeyrek", fr: "quart" },
      { tr: "geç / kala", fr: "passées / moins (l'heure)" },
      { tr: "lira", fr: "livre turque (monnaie)" }
    ],
    quiz: [
      { q: "Comment dit-on 17 ?", opts: ["yedi on", "on yedi", "yetmiş", "yedi bir"], a: 1, exp: "10 = on, 7 = yedi : on yedi. Le turc compte « dix-sept » littéralement." },
      { q: "« Saat yedi buçuk » signifie…", opts: ["7 h 15", "7 h 45", "7 h 30", "7 h 00"], a: 2, exp: "buçuk = et demie : il est sept heures et demie." },
      { q: "Que vaut « bin » ?", opts: ["100", "1 000", "1 000 000", "10"], a: 1, exp: "bin = mille. Mille = bin, un million = milyon." },
      { q: "« Kaç yaşındasın? » veut dire…", opts: ["Où habites-tu ?", "Quel âge as-tu ?", "Que fais-tu ?", "Combien ça coûte ?"], a: 1, exp: "yaş = âge. Réponse : [nombre] yaşındayım." },
      { q: "« Saat üçe on var » signifie…", opts: ["3 h 10", "2 h 50", "3 h 50", "10 h 03"], a: 1, exp: "var = « il reste » : à trois heures il reste dix minutes → 2 h 50." }
    ]
  },

  /* ============ MODULE 4 ============ */
  {
    id: "m4", num: 4, level: "A1",
    title: "L'harmonie vocalique",
    subtitle: "LA règle d'or qui explique 80 % de la grammaire turque",
    objectifs: [
      "Classer les voyelles en deux familles",
      "Choisir entre a/e et i/ı/ü/u dans un suffixe",
      "Appliquer la règle automatiquement"
    ],
    blocks: [
      { t: "p", text: "Voici le concept le plus rentable de tout le turc. Les voyelles se répartissent en <b>deux familles</b> : celles dites « de l'arrière » et celles « de l'avant ». Règle : <b>les suffixes copient la famille de la dernière voyelle du mot</b>. C'est l'harmonie vocalique (<tur>ünlü uyumu</tur>) : la langue « chante » en restant cohérente d'un bout à l'autre." },
      { t: "table", caption: "Les deux familles de voyelles", head: ["Famille ARRIÈRE", "Famille AVANT"],
        rows: [
          ["a, ı, o, u", "e, i, ö, ü"],
          ["bouche arrondie vers l'arrière", "bouche vers l'avant"]
        ] },
      { t: "h", text: "Harmonie à 2 voyelles : a ou e" },
      { t: "p", text: "Certains suffixes hésitent seulement entre <b>a</b> et <b>e</b> (comme le pluriel). Si la dernière voyelle du mot est de l'arrière → <b>a</b>, sinon → <b>e</b>." },
      { t: "table", caption: "Le pluriel -ler / -lar", head: ["Mot", "Dernière voyelle", "Pluriel"],
        rows: [
          ["<tur>ev</tur> (maison)", "e → avant", "<tur>evler</tur>"],
          ["<tur>masa</tur> (table)", "a → arrière", "<tur>masalar</tur>"],
          ["<tur>köprü</tur> (pont)", "ü → avant", "<tur>köprüler</tur>"],
          ["<tur>kitap</tur> (livre)", "a → arrière", "<tur>kitaplar</tur>"],
          ["<tur>göz</tur> (œil)", "ö → avant", "<tur>gözler</tur>"]
        ] },
      { t: "h", text: "Harmonie à 4 voyelles : i, ı, ü ou u" },
      { t: "p", text: "D'autres suffixes (comme -im « je suis ») ont 4 variantes. La règle reste la même : regarde la dernière voyelle du mot et copie-la dans sa famille et son arrondi." },
      { t: "table", caption: "Le suffixe -im (je suis…)", head: ["Dernière voyelle du mot", "Suffixe", "Exemple"],
        rows: [
          ["e ou i", "-im", "<tur>öğretmenim</tur> (je suis enseignant)"],
          ["a ou ı", "-ım", "<tur>hastayım</tur> (je suis malade : avec tampon y)"],
          ["ö ou ü", "-üm", "<tur>Türküm</tur> (je suis turc)"],
          ["o ou u", "-um", "<tur>varım</tur> (j'existe)"]
        ] },
      { t: "note", kind: "warn", tag: "Buffer", text: "Si le mot finit par une voyelle, une consonne « tampon » s'intercale : <tur>hasta</tur> + -ım → hasta<b>y</b>ım (je suis malade), <tur>öğrenci</tur> + -im → öğrenci<b>y</b>im (je suis étudiant). Retiens : voyelle finale → tampon y." },
      { t: "h", text: "Ta méthode en 3 secondes" },
      { t: "ul", items: [
        "<b>1.</b> Repère la <b>dernière voyelle</b> du mot (ignore les consonnes finales).",
        "<b>2.</b> Famille arrière (a ı o u) → choisis la variante « sombre » du suffixe (a, ı, u).",
        "<b>3.</b> Famille avant (e i ö ü) → choisis la variante « claire » (e, i, ü)."
      ] },
      { t: "ex", items: [
        { tr: "okul + lar → okullar", fr: "les écoles (u → arrière → lar)" },
        { tr: "şehir + ler → şehirler", fr: "les villes (i → avant → ler)" },
        { tr: "kadın + lar → kadınlar", fr: "les femmes (ı → arrière → lar)" },
        { tr: "gül + ler → güller", fr: "les roses (ü → avant → ler)" }
      ] },
      { t: "note", kind: "tip", tag: "Rassure-toi", text: "Même les Turcs appliquent cette règle sans y penser : c'est devenu un réflexe auditif. Après quelques jours d'exercices, tu « entendras » quel suffixe sonne juste. C'est le module le plus rentable du cours : tout ce qui suit (cas, temps, possessifs) obéit à cette mécanique." }
    ],
    dialogue: {
      title: "Cours de turc : « evler » ou « evlar » ?",
      lines: [
        { name: "Magloire", tr: "Öğretmenim, bir sorum var. « Evlar » mı, « evler » mi?", fr: "Professeur, j'ai une question. « Evlar » ou « evler » ?" },
        { name: "Öğretmen", tr: "« Evler ». Çünkü « ev » içinde « e » var. « e » önde bir ünlü.", fr: "« Evler ». Parce qu'il y a un « e » dans « ev ». Le « e » est une voyelle de l'avant." },
        { name: "Magloire", tr: "Peki « masa »? « Masalar » mı?", fr: "Et « masa » ? C'est « masalar » ?" },
        { name: "Öğretmen", tr: "Aferin! « a » arkada, o yüzden « masalar ».", fr: "Bravo ! Le « a » est à l'arrière, donc « masalar »." },
        { name: "Magloire", tr: "Köprü? « Köprüler »?", fr: "Köprü ? « Köprüler » ?" },
        { name: "Öğretmen", tr: "Çok doğru! Artık kuralı biliyorsun.", fr: "Parfait ! Maintenant tu connais la règle." }
      ]
    },
    vocab: [
      { tr: "ünlü", fr: "voyelle" },
      { tr: "ünsüz", fr: "consonne" },
      { tr: "arka", fr: "arrière" },
      { tr: "ön / önde", fr: "devant / à l'avant" },
      { tr: "kural", fr: "règle" },
      { tr: "çünkü", fr: "parce que" },
      { tr: "o yüzden", fr: "c'est pour ça" },
      { tr: "aferin!", fr: "bravo !" },
      { tr: "yüzünden", fr: "à cause de" }
    ],
    quiz: [
      { q: "« kalem » (crayon) au pluriel ?", opts: ["kalem-lar", "kalem-ler", "kalem-lır", "kalem-lor"], a: 1, exp: "Dernière voyelle = e (avant) → -ler : kalemler." },
      { q: "« okul » (école) au pluriel ?", opts: ["okuller", "okullar", "okullır", "okulnur"], a: 1, exp: "u = arrière → -lar : okullar." },
      { q: "Laquelle de ces voyelles est de la famille AVANT ?", opts: ["ı", "u", "ü", "o"], a: 2, exp: "Avant = e, i, ö, ü. Arrière = a, ı, o, u." },
      { q: "« güzelller »… quelle est la bonne écriture ?", opts: ["güzeller", "güzallar", "güzullur", "güzelar"], a: 0, exp: "e final (avant) → güzeller. Le suffixe copie la DERNIÈRE voyelle seulement." },
      { q: "Le suffixe s'accorde avec…", opts: ["la première voyelle du mot", "la dernière voyelle du mot", "le nombre de syllabes", "la consonne finale"], a: 1, exp: "Uniquement la dernière voyelle : c'est elle qui commande l'harmonie." }
    ]
  },

  /* ============ MODULE 5 ============ */
  {
    id: "m5", num: 5, level: "A2",
    title: "L'agglutination & le pluriel",
    subtitle: "Construire des mots comme des Lego",
    objectifs: [
      "Comprendre la logique des suffixes enchaînés",
      "Former le pluriel",
      "Connaître l'ordre des suffixes"
    ],
    blocks: [
      { t: "p", text: "Le turc est une langue <b>agglutinante</b> : au lieu de mots séparés (de, à, mon, mes…), on <b>colle</b> des briques de sens en fin de mot. Un mot turc peut être une phrase entière. Exemple culte :" },
      { t: "table", caption: "Anatomie d'un mot", head: ["Brique", "Sens", "Total cumulé"],
        rows: [
          ["<tur>ev</tur>", "maison", "la maison"],
          ["<tur>ev-ler</tur>", "+ pluriel", "les maisons"],
          ["<tur>ev-ler-im</tur>", "+ mon", "mes maisons"],
          ["<tur>ev-ler-im-de</tur>", "+ dans", "dans mes maisons"]
        ] },
      { t: "p", text: "Quatre briques, zéro mot-outil. C'est exactement le même principe que le français « ardoise-s »… mais généralisé à tout : possession, cas, temps, personne." },
      { t: "h", text: "Le pluriel : -ler / -lar" },
      { t: "ex", items: [
        { tr: "kitap → kitaplar", fr: "livre → des livres" },
        { tr: "şehir → şehirler", fr: "ville → des villes" },
        { tr: "çocuk → çocuklar", fr: "enfant → des enfants" },
        { tr: "kadın → kadınlar", fr: "femme → des femmes" }
      ] },
      { t: "note", kind: "warn", tag: "Piège", text: "Après un nombre, le nom reste au <b>singulier</b> : <tur>üç elma</tur> (trois pommes), jamais « üç elmalar ». On précise la quantité avec <tur>tane</tur> : <tur>üç tane elma</tur> (trois pommes, littéralement « trois pièces de pomme »)." },
      { t: "h", text: "L'ordre des briques" },
      { t: "p", text: "Les suffixes arrivent toujours dans le même ordre, comme une recette : <b>1.</b> pluriel → <b>2.</b> possessif → <b>3.</b> cas. Ainsi <tur>evlerimde</tur> = ev-ler-im-de. Inverser l'ordre est impossible." },
      { t: "ex", items: [
        { tr: "evlerde", fr: "dans les maisons (pluriel + locatif)" },
        { tr: "evimde", fr: "dans ma maison (possessif + locatif)" },
        { tr: "evlerimde", fr: "dans mes maisons (pluriel + possessif + locatif)" }
      ] },
      { t: "p", text: "Cette mécanique va du <b>plus général au plus précis</b> : l'objet de base, puis la quantité, puis le possesseur, puis la fonction dans la phrase." },
      { t: "note", kind: "info", tag: "Deux noms liés", text: "Le <b>génitif</b> (<tur>-in</tur>) relie deux noms : il se place sur le <b>possesseur</b>, et le <b>possessif</b> sur l'objet possédé. <tur>evin kapısı</tur> = la porte de la maison (<tur>ev-in</tur> + <tur>kapı-sı</tur>). Le génitif termine le premier mot ; il ne s'insère pas dans l'ordre interne du second." },
      { t: "note", kind: "tip", tag: "Repère", text: "Quand tu vois un long mot turc, ne panique pas : découpe-le par la droite. Cherche -ler/-lar (pluriel), puis un suffixe connu. La lecture « épluchage d'oignon » rend 90 % des longs mots transparents." }
    ],
    dialogue: {
      title: "Au marché",
      lines: [
        { name: "Magloire", tr: "Merhaba! Üç tane elma ve iki ekmek, lütfen.", fr: "Bonjour ! Trois pommes et deux pains, s'il vous plaît." },
        { name: "Esnaf", tr: "Buyurun. Başka bir şey ister misiniz?", fr: "Voilà. Souhaitez-vous autre chose ?" },
        { name: "Magloire", tr: "Domatesler güzel mi?", fr: "Les tomates sont-elles bonnes ?" },
        { name: "Esnaf", tr: "Çok taze! Sabah geldiler.", fr: "Très fraîches ! Elles sont arrivées ce matin." },
        { name: "Magloire", tr: "O zaman beş tane domates de alın.", fr: "Alors je prends aussi cinq tomates." },
        { name: "Esnaf", tr: "Hepsi yirmi lira. Afiyet olsun!", fr: "Le tout fait vingt livres. Bon appétit !" }
      ]
    },
    vocab: [
      { tr: "tane", fr: "pièce (compteur)" },
      { tr: "başka", fr: "autre" },
      { tr: "taze", fr: "frais" },
      { tr: "sabah", fr: "matin" },
      { tr: "hepsi", fr: "tout, le tout" },
      { tr: "market / pazar", fr: "supermarché / marché" },
      { tr: "almak", fr: "prendre, acheter" },
      { tr: "istemek", fr: "vouloir" }
    ],
    quiz: [
      { q: "Que signifie « evlerimde » ?", opts: ["mes maisons", "dans mes maisons", "ta maison", "les maisons lointaines"], a: 1, exp: "ev-ler-im-de : maison + pluriel + mon + dans = dans mes maisons." },
      { q: "« dans ma maison » se dit…", opts: ["evlerde", "evimde", "evlerimde", "evim"], a: 1, exp: "ev-im-de : maison + mon + dans. Sans pluriel, evlerimde signifierait « dans mes maisons »." },
      { q: "« şehir » (ville) au pluriel ?", opts: ["şehirler", "şıhırlar", "şehirlar", "şehirlor"], a: 0, exp: "i (avant) → -ler : şehirler." },
      { q: "Après un nombre (ex. üç elma), le nom est…", opts: ["toujours au pluriel", "au singulier", "au duel", "au cas locatif"], a: 1, exp: "üç elma, beş kitap : le nombre suffit, pas de pluriel après un chiffre." },
      { q: "L'ordre correct des suffixes est…", opts: ["cas → pluriel → possessif", "possessif → cas → pluriel", "pluriel → possessif → cas", "peu importe"], a: 2, exp: "Toujours : pluriel → possessif → cas (ev-ler-im-de)." },
      { q: "« çocuk » (enfant) au pluriel ?", opts: ["çocukler", "çocuklar", "çocuklir", "çocuklor"], a: 1, exp: "u/o = arrière → -lar : çocuklar." }
    ]
  },

  /* ============ MODULE 6 ============ */
  {
    id: "m6", num: 6, level: "A2",
    title: "La famille & la possession",
    subtitle: "Mon, ton, son : des suffixes encore",
    objectifs: [
      "Présenter les membres de ta famille",
      "Exprimer la possession avec des suffixes",
      "Demander « de qui ? c'est quoi ? »"
    ],
    blocks: [
      { t: "p", text: "En français, la possession utilise des mots séparés (mon, ta, ses…). En turc, le nom possédé porte directement un suffixe : <tur>oda</tur> (chambre) devient <tur>odam</tur> (ma chambre). Le possesseur peut être ajouté au génitif : <tur>benim odam</tur> (ma chambre)." },
      { t: "h", text: "La formule générale des suffixes" },
      { t: "p", text: "Pour lire les formules turques, retiens deux symboles : <b>I</b> représente <b>ı, i, u ou ü</b> (harmonie à 4 voyelles) et <b>A</b> représente <b>a ou e</b> (harmonie à 2 voyelles). La voyelle choisie dépend toujours de la <b>dernière voyelle</b> du mot, pas de sa dernière lettre. Dans la possession, les formules sont : <b>-(I)m</b> (ma), <b>-(I)n</b> (ta), <b>-(s)I</b> (sa), <b>-(I)mız</b> (notre), <b>-(I)nız</b> (votre) et <b>-(l)ArI</b> (leur). Les parenthèses indiquent une lettre qui apparaît seulement lorsque le mot en a besoin." },
      { t: "table", caption: "Détailler l'harmonie de I et de A", head: ["Dernière voyelle", "Famille", "I dans un possessif", "A dans un suffixe"],
        rows: [
          ["a, ı", "arrière, non arrondie", "ı : <tur>kapım</tur>", "a : <tur>kapılar</tur>"],
          ["e, i", "avant, non arrondie", "i : <tur>evim</tur>", "e : <tur>evler</tur>"],
          ["o, u", "arrière, arrondie", "u : <tur>okulum</tur>", "a : <tur>okullar</tur>"],
          ["ö, ü", "avant, arrondie", "ü : <tur>gözüm</tur>", "e : <tur>gözler</tur>"]
        ] },
      { t: "table", caption: "Les terminaisons de possession avec « oda »", head: ["Personne", "Terminaison", "Turc", "Français"],
        rows: [
          ["ben (je)", "-(ı/i/u/ü)m", "<tur>odam</tur>", "ma chambre"],
          ["sen (tu)", "-(ı/i/u/ü)n", "<tur>odan</tur>", "ta chambre"],
          ["o (il/elle)", "-(ı/i/u/ü)", "<tur>odası</tur>", "sa chambre"],
          ["biz (nous)", "-(ı/i/u/ü)mız", "<tur>odamız</tur>", "notre chambre"],
          ["siz (vous)", "-(ı/i/u/ü)nız", "<tur>odanız</tur>", "votre chambre"],
          ["onlar (ils/elles)", "-(ı/i/u/ü)ları", "<tur>odaları</tur>", "leur chambre / leurs chambres"]
        ] },
      { t: "p", text: "Dans les formules possessives, <b>I</b> suit l'harmonie à 4 voyelles : <b>a/ı → ı</b>, <b>e/i → i</b>, <b>o/u → u</b>, <b>ö/ü → ü</b>. Ainsi, <tur>kapı + (I)m → kapım</tur>, <tur>ev + (I)m → evim</tur>, <tur>okul + (I)m → okulum</tur> et <tur>göz + (I)m → gözüm</tur>. Pour un suffixe à 2 variantes, <b>A</b> suit uniquement la famille : arrière → <b>a</b> et avant → <b>e</b>, comme dans <tur>okullar</tur> et <tur>evler</tur>." },
      { t: "table", caption: "Deux mots à comparer : oda et zaman", head: ["Mot", "Ma...", "Ta...", "Sa...", "Notre..."],
        rows: [
          ["<tur>oda</tur> (chambre)", "<tur>odam</tur>", "<tur>odan</tur>", "<tur>odası</tur>", "<tur>odamız</tur>"],
          ["<tur>zaman</tur> (temps)", "<tur>zamanım</tur>", "<tur>zamanın</tur>", "<tur>zamanı</tur>", "<tur>zamanımız</tur>"]
        ] },
      { t: "h", text: "Le cas particulier de la 3e personne" },
      { t: "p", text: "Après une voyelle finale, la 3e personne ajoute <b>s</b> : <tur>oda-sı</tur> (sa chambre), <tur>araba-sı</tur> (sa voiture). Après une consonne, il n'y a pas de s : <tur>zaman-ı</tur> (son temps), <tur>kitab-ı</tur> (son livre). Le <b>p</b> de <tur>kitap</tur> devient <b>b</b> devant cette terminaison vocalique." },
      { t: "h", text: "Présenter sa famille" },
      { t: "ex", items: [
        { tr: "Odam çok küçük.", fr: "Ma chambre est très petite." },
        { tr: "Zamanım yok.", fr: "Je n'ai pas le temps." },
        { tr: "Annem öğretmen, babam mühendis.", fr: "Ma mère est enseignante, mon père ingénieur." },
        { tr: "Ali'nin odası mavi.", fr: "La chambre d'Ali est bleue." },
        { tr: "Bu kim? Bu ablam.", fr: "C'est qui ? C'est ma grande sœur." }
      ] },
      { t: "p", text: "La Turquie distingue finement la famille : <tur>abla</tur> = grande sœur, <tur>abi</tur> = grand frère, <tur>kız kardeş</tur> = petite sœur, <tur>erkek kardeş</tur> = petit frère. Et « abla/abi » s'emploient aussi poliment pour des inconnus plus âgés !" },
      { t: "note", kind: "info", tag: "À noter", text: "Pour dire « le prénom DE ma mère », on utilise le génitif : <tur>annemin adı</tur> (annem-in ad-ı) = littéralement « de-ma-mère son-nom ». Deux suffixes qui s'enchaînent : la possession à la turque est <b>réfléchie</b> : le possédé porte aussi la marque de son possesseur." }
    ],
    dialogue: {
      title: "Photos de famille",
      lines: [
        { name: "Elif", tr: "Bu fotoğrafa bak! Ailem bu.", fr: "Regarde cette photo ! C'est ma famille." },
        { name: "Magloire", tr: "Çok güzel! Bu kim?", fr: "Très joli ! C'est qui ?" },
        { name: "Elif", tr: "Bu ablam. Adı Zeynep.", fr: "C'est ma grande sœur. Elle s'appelle Zeynep." },
        { name: "Magloire", tr: "Peki bu? Çocuk çok tatlı.", fr: "Et celui-là ? L'enfant est très mignon." },
        { name: "Elif", tr: "Yeğenim! Ablamın oğlu.", fr: "Mon neveu ! Le fils de ma grande sœur." },
        { name: "Magloire", tr: "Kaç yaşında?", fr: "Il a quel âge ?" },
        { name: "Elif", tr: "Beş yaşında. Çok yaramaz!", fr: "Cinq ans. Très turbulent !" }
      ]
    },
    vocab: [
      { tr: "aile", fr: "famille" },
      { tr: "anne / baba", fr: "mère / père" },
      { tr: "abla / abi", fr: "grande sœur / grand frère" },
      { tr: "kardeş", fr: "frère ou sœur" },
      { tr: "dede / nine", fr: "grand-père / grand-mère" },
      { tr: "yeğen", fr: "neveu ou nièce" },
      { tr: "oğul / kız", fr: "fils / fille" },
      { tr: "fotoğraf", fr: "photo" },
      { tr: "tatlı", fr: "mignon, doux" },
      { tr: "yaramaz", fr: "turbulent" }
    ],
    quiz: [
      { q: "« annem » signifie…", opts: ["sa mère", "ma mère", "ta mère", "leurs mères"], a: 1, exp: "anne + -m (1re personne) = ma mère." },
      { q: "« babası » = ?", opts: ["mon père", "votre père", "son père", "nos pères"], a: 2, exp: "baba + -sı (3e personne) = son/leur père." },
      { q: "« araba » (voiture) → « sa voiture » ?", opts: ["arabai", "arabaı", "arabası", "arabasıı"], a: 2, exp: "Après voyelle, tampon n + -ı/-i : araba-sı." },
      { q: "« ablamın oğlu » signifie…", opts: ["le fils de ma grande sœur", "mon grand frère", "le frère de mon fils", "mon neveu par mon frère"], a: 0, exp: "abla-m-ın (de ma grande sœur) + oğul→oğlu (son fils). Le possédé porte les deux marques." },
      { q: "Qui est « yeğenim » ?", opts: ["mon oncle", "mon cousin", "mon neveu/ma nièce", "mon beau-père"], a: 2, exp: "yeğen = neveu/nièce (fils ou fille d'un frère ou sœur)." }
    ]
  },

  /* ============ MODULE 7 ============ */
  {
    id: "m7", num: 7, level: "A2",
    title: "Var / yok : avoir à la turque",
    subtitle: "« Il y a » et « je n'ai pas » sans verbe",
    objectifs: [
      "Exprimer la possession (j'ai / je n'ai pas)",
      "Dire ce qu'il y a (ou non) quelque part",
      "Poser la question « y a-t-il… ? »"
    ],
    blocks: [
      { t: "p", text: "Deuxième surprise de taille : le turc n'a pas de verbe <b>« avoir »</b>. On dit littéralement « à moi, il existe » ou « à moi, il n'existe pas » avec deux mots invariables : <tur>var</tur> (il y a / existant) et <tur>yok</tur> (il n'y a pas / inexistant)." },
      { t: "table", caption: "La possession avec var / yok", head: ["Turc", "Littéralement", "Français"],
        rows: [
          ["<tur>Param var.</tur>", "mon argent existe", "J'ai de l'argent."],
          ["<tur>Param yok.</tur>", "mon argent n'existe pas", "Je n'ai pas d'argent."],
          ["<tur>İki kardeşim var.</tur>", "mes deux frères existent", "J'ai deux frères et sœurs."],
          ["<tur>Zamanımız yok.</tur>", "notre temps n'existe pas", "Nous n'avons pas le temps."],
          ["<tur>Bir sorunumuz var.</tur>", "un notre problème existe", "Nous avons un problème."]
        ] },
      { t: "p", text: "La structure : <b>possesseur (avec suffixe possessif) + var/yok</b>. Le complément « à moi » peut aussi apparaître en tête avec le génitif : <tur>Benim bir arabam var</tur> (moi, j'ai une voiture) : forme complète mais pas obligatoire." },
      { t: "h", text: "« Il y a » dans un lieu" },
      { t: "p", text: "Même couple, autre usage : <b>lieu + var/yok</b> = il y a / il n'y a pas. Le lieu se met au <b>locatif</b> (-de/-da), que tu approfondiras au module 10." },
      { t: "ex", items: [
        { tr: "Odada bir yatak var.", fr: "Il y a un lit dans la chambre." },
        { tr: "Mutfakta ekmek yok.", fr: "Il n'y a pas de pain dans la cuisine." },
        { tr: "Cüzdanımda para yok.", fr: "Je n'ai pas d'argent dans mon portefeuille." },
        { tr: "Buzdolabında iki bira var.", fr: "Il y a deux bières dans le frigo." }
      ] },
      { t: "h", text: "La question : var mı ? yok mu ?" },
      { t: "p", text: "On ajoute la particule <tur>mi</tur> : <tur>Kahve var mı?</tur> (y a-t-il du café ?), <tur>Para yok mu?</tur> (il n'y a pas d'argent ?). Réponse courte toute simple : <tur>Var.</tur> / <tur>Yok.</tur>" },
      { t: "note", kind: "tip", tag: "Culture", text: "<tur>Yok</tur> est un mot hautement turc : on l'entend toute la journée. Un marchand : « Coca-Cola var mı? » : « Yok, maalesef. » Il exprime aussi l'absence totale et sert de réponse négative familière (« non, rien »)." }
    ],
    dialogue: {
      title: "Arrivée à l'hôtel",
      lines: [
        { name: "Magloire", tr: "Merhaba, bir rezervasyonum var.", fr: "Bonjour, j'ai une réservation." },
        { name: "Resepsiyon", tr: "Hoş geldiniz. Odanız 305. Buyurun.", fr: "Bienvenue. Votre chambre est la 305. Voici la clé." },
        { name: "Magloire", tr: "Odada klima var mı?", fr: "Y a-t-il la climatisation dans la chambre ?" },
        { name: "Resepsiyon", tr: "Evet, var. Wi-Fi de var.", fr: "Oui, il y en a. Il y a aussi le Wi-Fi." },
        { name: "Magloire", tr: "Peki balkon var mı?", fr: "Et y a-t-il un balcon ?" },
        { name: "Resepsiyon", tr: "Maalesef balkon yok, ama deniz manzarası var.", fr: "Malheureusement pas de balcon, mais il y a une vue sur la mer." },
        { name: "Magloire", tr: "Çok iyi, teşekkür ederim!", fr: "Très bien, merci !" }
      ]
    },
    vocab: [
      { tr: "var", fr: "il y a, j'ai" },
      { tr: "yok", fr: "il n'y a pas, je n'ai pas" },
      { tr: "oda", fr: "chambre" },
      { tr: "otel", fr: "hôtel" },
      { tr: "kat", fr: "étage" },
      { tr: "manzara", fr: "vue, paysage" },
      { tr: "buzdolabı", fr: "réfrigérateur" },
      { tr: "para", fr: "argent" },
      { tr: "zaman", fr: "temps" },
      { tr: "sorun", fr: "problème" }
    ],
    quiz: [
      { q: "« Param yok » signifie…", opts: ["J'ai de l'argent", "Je n'ai pas d'argent", "C'est cher", "Il y a de l'argent ici"], a: 1, exp: "param (mon argent) + yok (n'existe pas) = je n'ai pas d'argent." },
      { q: "Comment demande-t-on « y a-t-il du thé ? »", opts: ["Çay var mı?", "Çay mı var?", "Çay yok mu?", "Var çay?"], a: 0, exp: "Çay var mı ? : la particule interrogative mi suit directement var." },
      { q: "« Odada bir yatak var » : où est le lit ?", opts: ["sous la chambre", "dans la chambre", "près de la chambre", "hors de la chambre"], a: 1, exp: "oda-da = dans la chambre (suffixe locatif -da)." },
      { q: "Pour dire « nous avons un problème »…", opts: ["Biz problem var", "Bir sorunumuz var", "Sorun biz var", "Var sorunumuz biz"], a: 1, exp: "sorun-umuz (notre problème) + var : bir sorunumuz var." },
      { q: "« Buzdolabında bira yok » veut dire…", opts: ["Il y a de la bière dans le frigo", "Le frigo est vide de bière", "La bière est froide", "Il n'y a pas de frigo"], a: 1, exp: "Dans le frigo (buzdolabı-nda), bière inexistante : il n'y a pas de bière dans le frigo." }
    ]
  },

  /* ============ MODULE 8 ============ */
  {
    id: "m8", num: 8, level: "A2",
    title: "Le présent continu : -yor",
    subtitle: "Ce que tu es en train de faire, maintenant",
    objectifs: [
      "Conjuguer les verbes au présent",
      "Former la négation",
      "Poser « qu'est-ce que tu fais ? »"
    ],
    blocks: [
      { t: "p", text: "Le temps du présent s'appelle <b>şimdiki zaman</b> (temps de maintenant). Sa brique centrale est le suffixe <b>-yor</b>, dont la voyelle s'harmonise : <b>-ıyor, -iyor, -uyor ou -üyor</b>. Schéma : <b>racine + -yor + personne</b>." },
      { t: "table", caption: "Conjugaison de « yapmak » (faire)", head: ["Personne", "Turc", "Traduction"],
        rows: [
          ["ben", "<tur>yapıyorum</tur>", "je fais"],
          ["sen", "<tur>yapıyorsun</tur>", "tu fais"],
          ["o", "<tur>yapıyor</tur>", "il/elle fait"],
          ["biz", "<tur>yapıyoruz</tur>", "nous faisons"],
          ["siz", "<tur>yapıyorsunuz</tur>", "vous faites"],
          ["onlar", "<tur>yapıyorlar</tur>", "ils/elles font"]
        ] },
      { t: "p", text: "Repère la mécanique : yap- (racine) + -ıyor (variante de -yor) + -um (je). La voyelle de <b>-yor</b> s'harmonise avec la racine : <tur>geliyorum</tur> (je viens), <tur>bakıyorum</tur> (je regarde), <tur>sürüyor</tur>… mais les terminaisons (-um, -sun, Ø, -uz, -sunuz, -lar) restent stables." },
      { t: "h", text: "La négation : -miyor" },
      { t: "p", text: "On intercale <b>-me/-ma</b> juste avant -yor : <tur>yapmıyorum</tur> (je ne fais pas), <tur>gelmiyor</tur> (il ne vient pas), <tur>sevmiyorum</tur> (je n'aime pas). Facile à repérer : le petit <b>m</b> qui barre le verbe." },
      { t: "h", text: "Emplois" },
      { t: "ul", items: [
        "Action en cours : <tur>Şimdi ders çalışıyorum.</tur> (je révise maintenant)",
        "Habitude : <tur>Her sabah kahve içerim</tur>… au présent simple : mais à l'oral, <tur>Her sabah kahve içiyorum</tur> (je bois du café chaque matin) est très courant.",
        "États durables : <tur>İstanbul'da yaşıyorum.</tur> (j'habite à Istanbul)"
      ] },
      { t: "ex", items: [
        { tr: "Ne yapıyorsun?", fr: "Qu'est-ce que tu fais ?" },
        { tr: "Kitap okuyorum.", fr: "Je lis un livre." },
        { tr: "Nereye gidiyorsun?", fr: "Où vas-tu ?" },
        { tr: "Eve gidiyorum.", fr: "Je rentre à la maison." },
        { tr: "Türkçe öğreniyorum.", fr: "J'apprends le turc." },
        { tr: "Seni seviyorum.", fr: "Je t'aime." }
      ] },
      { t: "note", kind: "tip", tag: "Prononciation", text: "Attention au <b>y</b> de -iyor après voyelle : oku<b>y</b>orum (je lis), bekle<b>y</b>or (il attend). Ce y est un vrai son, pas un ornement." }
    ],
    dialogue: {
      title: "Appel téléphonique",
      lines: [
        { name: "Elif", tr: "Alo, Magloire? Ne yapıyorsun?", fr: "Allô, Magloire ? Qu'est-ce que tu fais ?" },
        { name: "Magloire", tr: "Şimdi yemek yapıyorum. Sen?", fr: "Je suis en train de cuisiner. Et toi ?" },
        { name: "Elif", tr: "Ben müzik dinliyorum. Yarın sinemaya gidiyoruz, geliyor musun?", fr: "Moi j'écoute de la musique. Demain on va au cinéma, tu viens ?" },
        { name: "Magloire", tr: "Ne seyrediyorsunuz?", fr: "Vous regardez quoi (comme film) ?" },
        { name: "Elif", tr: "Yeni Türk filmini. Çok komikmiş!", fr: "Le nouveau film turc. Il paraît très drôle !" },
        { name: "Magloire", tr: "Olur, geliyorum! Saat kaçta buluşuyorsunuz?", fr: "Ça marche, je viens ! Vous vous retrouvez à quelle heure ?" },
        { name: "Elif", tr: "Yedide, sinema önünde.", fr: "À sept heures, devant le cinéma." }
      ]
    },
    vocab: [
      { tr: "yapmak", fr: "faire" },
      { tr: "okumak", fr: "lire, étudier" },
      { tr: "beklemek", fr: "attendre" },
      { tr: "seyretmek", fr: "regarder (film, TV)" },
      { tr: "dinlemek", fr: "écouter" },
      { tr: "gelmek / gitmek", fr: "venir / aller" },
      { tr: "buluşmak", fr: "se retrouver" },
      { tr: "şimdi", fr: "maintenant" },
      { tr: "seyir", fr: "visionnage" },
      { tr: "alo", fr: "allô" }
    ],
    quiz: [
      { q: "« geliyorum » signifie…", opts: ["je pars", "je viens", "il vient", "je viendrai"], a: 1, exp: "gel (racine de venir) + -iyor + -um : je viens." },
      { q: "Complète : « Ben bak… » (je regarde)", opts: ["-ıyorum", "-iyorum", "-uyorum", "-üyorum"], a: 0, exp: "bak- contient a (arrière) → bakıyorum." },
      { q: "« yapmıyorum » signifie…", opts: ["je fais", "je ne fais pas", "tu ne fais pas", "je défaismois"], a: 1, exp: "Le -me/-ma de négation s'intercale : yap-mı-yorum." },
      { q: "« Ne yapıyorsun? » : que réponds-tu si tu lis ?", opts: ["Kitap okuyorum", "Kitap okumuyorum", "Kitap yapıyorum", "Kitabım var"], a: 0, exp: "oku (lire) + -yorum : kitap okuyorum = je lis un livre." },
      { q: "Comment se dit « j'habite à Istanbul » ?", opts: ["İstanbul'da oturuyorum", "İstanbul yaşıyorum var", "İstanbul'da varım", "İstanbul yaşamak"], a: 0, exp: "Deux verbes possibles : yaşamak ou oturmak, avec -da (locatif) : İstanbul'da yaşıyorum / oturuyorum." }
    ]
  },

  /* ============ MODULE 9 ============ */
  {
    id: "m9", num: 9, level: "A2",
    title: "Négation & questions",
    subtitle: "Dire non et interroger avec élégance",
    objectifs: [
      "Nier un nom (değil) et un verbe (-me)",
      "Poser des questions avec mi/mı/mu/mü",
      "Placer correctement la particule de question"
    ],
    blocks: [
      { t: "h", text: "Nier l'être : değil" },
      { t: "p", text: "Pour nier « je suis… », on utilise le mot <tur>değil</tur> (ne… pas être), placé <b>après</b> le nom, et qui prend lui-même les terminaisons personnelles : <tur>Öğretmen değilim</tur> (je ne suis pas enseignant), <tur>Hasta değilsin</tur> (tu n'es pas malade), <tur>Türk değil</tur> (il n'est pas turc)." },
      { t: "h", text: "Nier un verbe : -me/-ma" },
      { t: "p", text: "Pour les verbes, la négation est une brique <b>-me/-ma</b> collée à la racine, avant le temps : <tur>gelmiyorum</tur> (je ne viens pas), <tur>yapmadım</tur> (je n'ai pas fait), <tur>gitmeyeceğim</tur> (je n'irai pas). Un seul -me suffit pour nier tout le verbe." },
      { t: "table", caption: "Récapitulatif des négations", head: ["Type", "Positif", "Négatif"],
        rows: [
          ["Être (nom)", "<tur>öğrenciyim</tur>", "<tur>öğrenci değilim</tur>"],
          ["Présent", "<tur>geliyorum</tur>", "<tur>gelmiyorum</tur>"],
          ["Passé", "<tur>geldim</tur>", "<tur>gelmedim</tur>"],
          ["Futur", "<tur>geleceğim</tur>", "<tur>gelmeyeceğim</tur>"],
          ["Avoir", "<tur>param var</tur>", "<tur>param yok</tur>"]
        ] },
      { t: "h", text: "La question : mi, mı, mu, mü" },
      { t: "p", text: "La particule interrogative se place <b>après le mot interrogé</b> et s'écrit <b>séparée</b> (avec un tiret dans les manuels : mı-). Elle s'harmonise avec la dernière voyelle du mot précédent : comme un suffixe détaché." },
      { t: "ex", items: [
        { tr: "Öğrenci misin?", fr: "Es-tu étudiant ?" },
        { tr: "Geliyor musun?", fr: "Est-ce que tu viens ?" },
        { tr: "Bu kalem mi?", fr: "C'est (bien) un crayon ?" },
        { tr: "Anladın mı?", fr: "Tu as compris ?" },
        { tr: "Türk müsünüz?", fr: "Êtes-vous turc ?" },
        { tr: "Kahve var mı?", fr: "Y a-t-il du café ?" }
      ] },
      { t: "note", kind: "warn", tag: "Placement", text: "mi interroge <b>le mot juste avant lui</b> : <tur>Yarın mı geliyorsun?</tur> (= c'est demain que tu viens ?) ≠ <tur>Yarın geliyor musun?</tur> (= tu viens demain ?). En turc, on n'a pas besoin d'inversion : on « marque » simplement ce dont on doute." },
      { t: "p", text: "À l'oral familier, une simple intonation montante suffit aussi : <tur>Geliyorsun?</tur> (tu viens ?). Mais la forme avec mi reste la référence à l'écrit." }
    ],
    dialogue: {
      title: "Ça viendras ou pas ?",
      lines: [
        { name: "Elif", tr: "Yarın partiye geliyor musun?", fr: "Tu viens à la fête demain ?" },
        { name: "Magloire", tr: "Gelmiyorum, maalesef. Çok yorgunum.", fr: "Je ne viens pas, malheureusement. Je suis très fatigué." },
        { name: "Elif", tr: "Neden gelmiyorsun? Partiyi sevmiyor musun?", fr: "Pourquoi tu ne viens pas ? Tu n'aimes pas les fêtes ?" },
        { name: "Magloire", tr: "Hayır, partileri seviyorum. Ama sınavım var.", fr: "Non, j'aime les fêtes. Mais j'ai un examen." },
        { name: "Elif", tr: "Ha, anladım! Sınav mı? Ne zaman?", fr: "Ah, je comprends ! Un examen ? Quand ?" },
        { name: "Magloire", tr: "Cumartesi günü. Hafta sonu çalışacağım.", fr: "Samedi. Le week-end je devrai réviser." },
        { name: "Elif", tr: "Tamam, geçmiş olsun şimdiden!", fr: "D'accord, bon courage d'avance !" }
      ]
    },
    vocab: [
      { tr: "değil", fr: "ne… pas être" },
      { tr: "parti", fr: "fête, soirée" },
      { tr: "neden", fr: "pourquoi" },
      { tr: "anladım", fr: "j'ai compris" },
      { tr: "hafta sonu", fr: "week-end" },
      { tr: "maalesef", fr: "malheureusement" },
      { tr: "şimdiden", fr: "d'avance, dès maintenant" },
      { tr: "sınav", fr: "examen" }
    ],
    quiz: [
      { q: "« Öğretmen değilim » signifie…", opts: ["je suis enseignant", "je ne suis pas enseignant", "tu n'es pas enseignant", "il n'est pas enseignant"], a: 1, exp: "değil + -im = je ne suis pas." },
      { q: "Complète : « Geliyor… ? » (tu viens ?)", opts: ["mi", "mı", "mu", "mü"], a: 1, exp: "Le mot avant (geliyor) finit par o/u (arrière, arrondi) → mı. Geliyor musun ?" },
      { q: "« Türk…sünüz? » (vous êtes turcs ?)", opts: ["mi", "mı", "mu", "mü"], a: 3, exp: "Türk finit par ü → mü : Türk müsünüz ?" },
      { q: "Où se place la particule de question ?", opts: ["toujours en début de phrase", "après le mot interrogé", "après le verbe uniquement", "en fin de phrase uniquement"], a: 1, exp: "Elle suit le mot mis en doute : la place définit ce qu'on questionne." },
      { q: "« Partiyi sevmiyor musun? » signifie…", opts: ["tu aimes les fêtes ?", "tu n'aimes pas les fêtes ?", "tu iras à la fête ?", "la fête est annulée ?"], a: 1, exp: "sev-mi-yor (n'aime pas) + musun : question négative « tu n'aimes pas… ? »." }
    ]
  },

  /* ============ MODULE 10 ============ */
  {
    id: "m10", num: 10, level: "B1",
    title: "Au restaurant : les premiers cas",
    subtitle: "Locatif, accusatif, datif : commander comme un local",
    objectifs: [
      "Employer le locatif -de/-da",
      "Comprendre l'accusatif du COD défini",
      "Commander, demander l'addition"
    ],
    blocks: [
      { t: "p", text: "Le turc remplace les prépositions françaises (à, dans, sur, vers…) par des <b>suffixes cas</b> collés à la fin du nom. Il y en a six ; ce module t'apprend les trois plus utiles au restaurant." },
      { t: "h", text: "Le locatif : -de / -da (dans, à, sur)" },
      { t: "table", caption: "Le locatif", head: ["Mot", "Locatif", "Traduction"],
        rows: [
          ["<tur>ev</tur>", "<tur>evde</tur>", "à la maison"],
          ["<tur>masa</tur>", "<tur>masada</tur>", "sur la table"],
          ["<tur>okul</tur>", "<tur>okulda</tur>", "à l'école"],
          ["<tur>iş</tur>", "<tur>işte</tur>", "au travail"],
          ["<tur>sokak</tur>", "<tur>sokakta</tur>", "dans la rue"]
        ] },
      { t: "note", kind: "info", tag: "Consonnes sourdes", text: "Si le mot finit par une consonne sourde (p, ç, t, k, s, ş, f, h), le <b>d</b> du suffixe devient <b>t</b> : sokak → soka<b>kta</b>, et → e<b>tte</b>, iş → i<b>şte</b>. Astuce mnémotechnique pour retenir les sourdes : « <b>p ç t k s ş f h</b> » : le poisson frais turc se cuit vite." },
      { t: "h", text: "L'accusatif : le COD défini (-i, -ı, -u, -ü)" },
      { t: "p", text: "Subtilité clé : l'accusatif ne marque pas n'importe quel COD, mais le COD <b>défini</b> : celui qu'on connaît déjà. Compare :" },
      { t: "ex", items: [
        { tr: "Ekmek aldım.", fr: "J'ai acheté du pain. (indéfini : du pain en général)" },
        { tr: "Ekmeği aldım.", fr: "J'ai pris le pain. (défini : celui qu'on attendait)" },
        { tr: "Kitap okuyorum.", fr: "Je lis (des livres). (activité générale)" },
        { tr: "Kitabı okuyorum.", fr: "Je lis le livre. (ce livre précis)" }
      ] },
      { t: "p", text: "Après voyelle finale, un tampon <b>y</b> s'intercale : <tur>masa-y-ı</tur> (la table), <tur>kapı-y-ı</tur> (la porte), <tur>çay-ı</tur> (le thé)." },
      { t: "h", text: "Le datif : -e / -a (à, vers)" },
      { t: "p", text: "Il marque la destination : <tur>Eve gidiyorum</tur> (je vais à la maison), <tur>Okula gittik</tur> (nous sommes allés à l'école), <tur>Masaya koydum</tur> (je l'ai posé sur la table). Après voyelle : tampon y : <tur>araba-y-a</tur>." },
      { t: "h", text: "Kit de survie du restaurant" },
      { t: "ex", items: [
        { tr: "Bir menü alabilir miyim?", fr: "Puis-je avoir une carte ?" },
        { tr: "İki kebap ve bir ayran, lütfen.", fr: "Deux kebabs et un ayran, s'il vous plaît." },
        { tr: "Hesabı alabilir miyiz?", fr: "Pouvez-nous apporter l'addition ?" },
        { tr: "Çok lezzetliydi!", fr: "C'était délicieux !" },
        { tr: "Bahşiş bırakalım mı?", fr: "On laisse un pourboire ?" }
      ] },
      { t: "note", kind: "tip", tag: "Formule magique", text: "<b>alabilir miyim?</b> (puis-je…) transforme n'importe quelle demande en formule polie : <tur>Su alabilir miyim?</tur>, <tur>Oturabilir miyim?</tur>. Ajoute <b>efendim</b> pour un ton très courtois." }
    ],
    dialogue: {
      title: "Dîner au restaurant",
      lines: [
        { name: "Garson", tr: "Hoş geldiniz! Buyurun.", fr: "Bienvenue ! Je vous en prie." },
        { name: "Magloire", tr: "Teşekkürler. Bir menü alabilir miyim?", fr: "Merci. Puis-je avoir la carte ?" },
        { name: "Garson", tr: "Tabii, buyurun. Ne içersiniz?", fr: "Bien sûr, tenez. Que buvez-vous ?" },
        { name: "Magloire", tr: "Ben bir ayran, Elif bir şalgam istiyor.", fr: "Moi un ayran, Elif veut un şalgam." },
        { name: "Elif", tr: "Yok yok, ben de ayran içiyorum!", fr: "Non non, moi aussi je bois un ayran !" },
        { name: "Garson", tr: "Ne yersiniz?", fr: "Qu'allez-vous manger ?" },
        { name: "Magloire", tr: "İki Adana kebabı, lütfen. Acısız olsun.", fr: "Deux kebabs d'Adana, s'il vous plaît. Sans piment." },
        { name: "Garson", tr: "Buyurun, afiyet olsun!", fr: "Voilà, bon appétit !" },
        { name: "Magloire", tr: "Çok lezzetliydi! Hesabı alabilir miyiz?", fr: "C'était délicieux ! L'addition s'il vous plaît ?" },
        { name: "Garson", tr: "Tabii. Yüz seksen lira.", fr: "Bien sûr. Cent quatre-vingts livres." }
      ]
    },
    vocab: [
      { tr: "garson", fr: "serveur" },
      { tr: "menü", fr: "carte, menu" },
      { tr: "hesap", fr: "addition" },
      { tr: "lezzetli", fr: "délicieux" },
      { tr: "acılı / acısız", fr: "épicé / sans piment" },
      { tr: "içmek / yemek", fr: "boire / manger" },
      { tr: "ayran", fr: "boisson au yaourt" },
      { tr: "kebap", fr: "kebab" },
      { tr: "afiyet olsun", fr: "bon appétit" },
      { tr: "servis", fr: "service" }
    ],
    quiz: [
      { q: "« evde » signifie…", opts: ["vers la maison", "à la maison", "de la maison", "la maison (COD)"], a: 1, exp: "-de = locatif : dans/à la maison." },
      { q: "Pourquoi « sokakta » et non « sokakda » ?", opts: ["harmonie vocalique", "k final est sourd → t", "erreur courante des apprenants", "le k disparaît"], a: 1, exp: "Après consonne sourde (k), d → t : sokaKTA. Idem : işte, otobüste." },
      { q: "« Ekmeği aldım » signifie…", opts: ["j'ai acheté du pain", "j'ai pris LE pain", "je vais au pain", "le pain est à moi"], a: 1, exp: "L'accusatif -i marque le COD défini : le pain en question." },
      { q: "Complète : « Okul… gidiyorum » (je vais à l'école)", opts: ["-da", "-a", "-ı", "-dan"], a: 1, exp: "Destination → datif -a : okula gidiyorum." },
      { q: "Formule la plus polie pour commander ?", opts: ["Ekmek ver!", "Ekmek!", "Ekmek alabilir miyim?", "Ekmek var, ekmek yok"], a: 2, exp: "alabilir miyim = « puis-je prendre… », la formule de politesse passe-partout." }
    ]
  },

  /* ============ MODULE 11 ============ */
  {
    id: "m11", num: 11, level: "B1",
    title: "Le passé : -di et -miş",
    subtitle: "Raconter ce qu'on a vu… et ce qu'on a entendu",
    objectifs: [
      "Conjuguer au passé défini (-di)",
      "Découvrir le passé rapporté (-miş)",
      "Raconter ta journée"
    ],
    blocks: [
      { t: "h", text: "Le passé vu : -di" },
      { t: "p", text: "Appelé <b>görülen geçmiş</b> (passé vu), le -di raconte ce dont tu as été <b>témoin direct</b>. Schéma : racine + <b>-di</b> + personne. Tout se colle et s'harmonise." },
      { t: "table", caption: "« gelmek » (venir) au passé", head: ["Personne", "Turc", "Traduction"],
        rows: [
          ["ben", "<tur>geldim</tur>", "je suis venu(e)"],
          ["sen", "<tur>geldin</tur>", "tu es venu(e)"],
          ["o", "<tur>geldi</tur>", "il/elle est venu(e)"],
          ["biz", "<tur>geldik</tur>", "nous sommes venus"],
          ["siz", "<tur>geldiniz</tur>", "vous êtes venus"],
          ["onlar", "<tur>geldiler</tur>", "ils/elles sont venus"]
        ] },
      { t: "p", text: "Négation : <tur>gelmedim</tur> (je ne suis pas venu), avec le -me familier. Attention aux harmonies : <tur>baktım</tur> (j'ai regardé), <tur>koştum</tur> (j'ai couru), <tur>içtim</tur> (j'ai bu), <tur>öptüm</tur>… (j'ai embrassé : la fameuse chanson)." },
      { t: "h", text: "Le passé rapporté : -miş" },
      { t: "p", text: "Voici la pépite du turc : le <b>duyulan geçmiş</b> (passé entendu). On l'utilise quand on <b>rapporte</b> un événement qu'on n'a pas vu soi-même : ou pour exprimer la surprise." },
      { t: "ex", items: [
        { tr: "Yağmur yağmış.", fr: "Il a plu, paraît-il. (je ne l'ai pas vu)" },
        { tr: "Ali evlenmiş!", fr: "Ali se serait marié ! (je viens de l'apprendre)" },
        { tr: "Çok yorgunmuş.", fr: "Il paraît qu'il était très fatigué." },
        { tr: "Bir varmış, bir yokmuş.", fr: "Il était une fois… (ouverture des contes)" }
      ] },
      { t: "note", kind: "info", tag: "Nuance", text: "Français « paraît-il / aurait / se serait » ≈ -miş. En turc, dire « Ali geldi » (je l'ai vu arriver) vs « Ali gelmiş » (on m'a dit qu'il était arrivé) distingue <b>la source de l'information</b> : une précision que le français n'a pas, et que les Turcs trouvent indispensable !" },
      { t: "h", text: "Raconter sa journée" },
      { t: "ex", items: [
        { tr: "Sabah erken kalktım.", fr: "Le matin je me suis levé tôt." },
        { tr: "Kahvaltı yaptım, sonra ders çalıştım.", fr: "J'ai pris mon petit-déjeuner, puis j'ai étudié." },
        { tr: "Akşam arkadaşlarla buluştum.", fr: "Le soir je me suis retrouvé avec des amis." },
        { tr: "Çok eğlendik!", fr: "On s'est beaucoup amusés !" }
      ] }
    ],
    dialogue: {
      title: "Le lundi matin",
      lines: [
        { name: "Elif", tr: "Hafta sonu ne yaptın?", fr: "Qu'as-tu fait le week-end ?" },
        { name: "Magloire", tr: "Cumartesi sinemaya gittim. Film çok güzeldi.", fr: "Samedi je suis allé au cinéma. Le film était très bien." },
        { name: "Elif", tr: "Hangi filmi seyrettin?", fr: "Quel film as-tu vu ?" },
        { name: "Magloire", tr: "Yeni Türk komedisini. Çok güldüm!", fr: "La nouvelle comédie turque. J'ai beaucoup ri !" },
        { name: "Elif", tr: "Ben de duydum, çok komikmiş.", fr: "Moi aussi j'en ai entendu parler, il paraît très drôle." },
        { name: "Magloire", tr: "Evet! Pazar günü ise evde kaldım ve dinlendim.", fr: "Oui ! Dimanche en revanche je suis resté à la maison et je me suis reposé." },
        { name: "Elif", tr: "Bence en doğru karar. Ben de yorgundum, hiçbir şey yapmadım.", fr: "À mon avis la meilleure décision. Moi aussi j'étais fatiguée, je n'ai rien fait." }
      ]
    },
    vocab: [
      { tr: "kalkmak", fr: "se lever" },
      { tr: "dinlenmek", fr: "se reposer" },
      { tr: "eğlenmek", fr: "s'amuser" },
      { tr: "gülmek", fr: "rire" },
      { tr: "seyretmek", fr: "regarder (un film)" },
      { tr: "duymak", fr: "entendre" },
      { tr: "hiçbir şey", fr: "rien" },
      { tr: "karar", fr: "décision" }
    ],
    quiz: [
      { q: "« gittim » signifie…", opts: ["je viens", "je suis allé(e)", "je partirai", "il est allé"], a: 1, exp: "git + -ti + -m : je suis allé(e). (la racine git- garde son t → gitti, pas « gitedi »)" },
      { q: "« Ali evlenmiş » exprime…", opts: ["que j'ai vu Ali se marier", "qu'on m'a dit qu'Ali s'est marié", "qu'Ali va se marier", "qu'Ali n'est pas marié"], a: 1, exp: "-miş = passé rapporté : je le sais de source indirecte." },
      { q: "Négation de « geldik » (nous sommes venus) ?", opts: ["gelmedik", "gelmediler", "gelmeyiz", "gelmiyoruz"], a: 0, exp: "-me s'intercale avant la terminaison : gel-me-dik." },
      { q: "« Bir varmış, bir yokmuş » ouvre…", opts: ["un journal télévisé", "un conte", "un discours politique", "une recette"], a: 1, exp: "C'est le « il était une fois » turc : au passé rapporté, comme il se doit pour les histoires." },
      { q: "« Çok güldüm » signifie…", opts: ["j'ai beaucoup ri", "j'étais drôle", "il a ri", "je vais rire"], a: 0, exp: "gül (rire) + -d + -üm : güldüm." }
    ]
  },

  /* ============ MODULE 12 ============ */
  {
    id: "m12", num: 12, level: "B1",
    title: "Le futur & les projets",
    subtitle: "-ecek, petits mots essentiels et conversations du quotidien",
    objectifs: [
      "Conjuguer au futur (-ecek)",
      "Parler de tes projets",
      "Utiliser ile, için, gibi, çünkü"
    ],
    blocks: [
      { t: "h", text: "Le futur : -ecek / -acak" },
      { t: "table", caption: "« gelmek » (venir) au futur", head: ["Personne", "Turc", "Traduction"],
        rows: [
          ["ben", "<tur>geleceğim</tur>", "je viendrai"],
          ["sen", "<tur>geleceksin</tur>", "tu viendras"],
          ["o", "<tur>gelecek</tur>", "il/elle viendra"],
          ["biz", "<tur>geleceğiz</tur>", "nous viendrons"],
          ["siz", "<tur>geleceksiniz</tur>", "vous viendrez"],
          ["onlar", "<tur>gelecekler</tur>", "ils/elles viendront"]
        ] },
      { t: "note", kind: "warn", tag: "Le fameux k → ğ", text: "Regarde <tur>geleceğim</tur> : le <b>k</b> de « gelecek » devient <b>ğ</b> quand une voyelle suit. Règle générale : un k final se soften en ğ devant voyelle (yapacak → yapacağım). C'est l'alternance consonantique : le turc adore adoucir ses consonnes finales." },
      { t: "p", text: "Négation : <tur>gelmeyeceğim</tur> (je ne viendrai pas) : le -me s'intercale, et le k redevient… k ! (gel-me-y-ecek-im). Question : <tur>Gelecek misin?</tur> (viendras-tu ?)." },
      { t: "h", text: "Parler de projets" },
      { t: "ex", items: [
        { tr: "Yarın spor yapacağım.", fr: "Demain je ferai du sport." },
        { tr: "Önümüzdeki hafta sınavım var.", fr: "La semaine prochaine j'ai un examen." },
        { tr: "Gelecek ay Türkiye'ye gideceğim.", fr: "Le mois prochain j'irai en Turquie." },
        { tr: "Bu akşam evde kalacağım.", fr: "Ce soir je resterai à la maison." }
      ] },
      { t: "h", text: "Les petits mots qui changent tout" },
      { t: "table", caption: "Postpositions & connecteurs essentiels", head: ["Mot", "Sens", "Exemple"],
        rows: [
          ["<tur>ile</tur> (ou -le/-la)", "avec", "<tur>arkadaşımla</tur> = avec mon ami"],
          ["<tur>için</tur>", "pour, afin de", "<tur>senin için</tur> = pour toi"],
          ["<tur>gibi</tur>", "comme", "<tur>kedi gibi</tur> = comme un chat"],
          ["<tur>çünkü</tur>", "parce que", "<tur>Yorgunum, çünkü az uyudum.</tur>"],
          ["<tur>ama / fakat</tur>", "mais", "<tur>İstedim ama yapamadım.</tur>"],
          ["<tur>ve</tur>", "et", "<tur>çay ve kahve</tur>"]
        ] },
      { t: "note", kind: "tip", tag: "Félicitations", text: "Tu as terminé le parcours ! Tu peux maintenant te présenter, compter, conjuguer aux trois temps principaux, nier, questionner, commander au restaurant et raconter ta journée. La suite logique : enrichis ton vocabulaire avec les flashcards, révise la grammaire de référence, et surtout : <b>parle</b>. Türkçe konuşmak istiyorsan, konuş! Un Türk qui te corrige vaut mille exercices. Bol şans ! (Bonne chance !)" }
    ],
    dialogue: {
      title: "Projets du week-end",
      lines: [
        { name: "Elif", tr: "Yarın ne yapacaksın?", fr: "Qu'est-ce que tu vas faire demain ?" },
        { name: "Magloire", tr: "Sabah spor yapacağım, sonra kütüphanede ders çalışacağım.", fr: "Le matin je ferai du sport, puis j'étudierai à la bibliothèque." },
        { name: "Elif", tr: "Akşam sinemaya gidecek misin?", fr: "Le soir tu iras au cinéma ?" },
        { name: "Magloire", tr: "Bilmiyorum. Yorgun olursa evde kalacağım.", fr: "Je ne sais pas. Si je suis fatigué, je resterai à la maison." },
        { name: "Elif", tr: "Biz Deniz'le dışarı yiyeceğiz. Katılmak ister misin?", fr: "Nous, on mangera dehors avec Deniz. Tu veux nous rejoindre ?" },
        { name: "Magloire", tr: "Ne için? Kutlama mı var?", fr: "À quelle occasion ? Il y a une fête ?" },
        { name: "Elif", tr: "Evet! Deniz işe girdi, kutlayacağız.", fr: "Oui ! Deniz a trouvé du travail, on va fêter ça." },
        { name: "Magloire", tr: "O zaman ben de geleceğim. Nerede buluşacaksınız?", fr: "Alors je viendrai aussi. Où vous retrouverez-vous ?" },
        { name: "Elif", tr: "Saat sekizde, Kadıköy'de. Görüşürüz!", fr: "À vingt heures, à Kadıköy. À plus !" }
      ]
    },
    vocab: [
      { tr: "katılmak", fr: "rejoindre, participer" },
      { tr: "kutlamak", fr: "fêter, féliciter" },
      { tr: "dışarı", fr: "dehors, à l'extérieur" },
      { tr: "önümüzdeki hafta", fr: "la semaine prochaine" },
      { tr: "gelecek ay", fr: "le mois prochain" },
      { tr: "ile / -la", fr: "avec" },
      { tr: "için", fr: "pour" },
      { tr: "gibi", fr: "comme" },
      { tr: "çünkü", fr: "parce que" },
      { tr: "bol şans", fr: "bonne chance" }
    ],
    quiz: [
      { q: "« geleceğim » signifie…", opts: ["je viens", "je viendrai", "il viendra", "je suis venu"], a: 1, exp: "gel + -ecek + -im → geleceğim (k devient ğ devant la voyelle du suffixe)." },
      { q: "Pourquoi « yapacağım » et pas « yapacakım » ?", opts: ["harmonie vocalique", "le k final s'adoucit en ğ devant voyelle", "le a disparaît", "erreur d'école"], a: 1, exp: "Alternance consonantique k→ğ : yap-acak-ım → yapacağım." },
      { q: "« Gelecek ay Türkiye'ye gideceğim » signifie…", opts: ["Ce mois-ci je vais en Turquie", "Le mois prochain j'irai en Turquie", "L'an dernier je suis allé en Turquie", "Je voudrais aller en Turquie"], a: 1, exp: "gelecek ay = le mois qui vient ; gideceğim = futur de gitmek." },
      { q: "« senin için » signifie…", opts: ["avec toi", "comme toi", "pour toi", "sans toi"], a: 2, exp: "için = pour. senin için = pour toi." },
      { q: "« Yorgunum, çünkü az uyudum » signifie…", opts: ["Je suis fatigué mais j'ai bien dormi", "Je suis fatigué parce que j'ai peu dormi", "Je serai fatigué si je dors peu", "Bien que fatigué, j'ai dormi"], a: 1, exp: "çünkü = parce que ; az = peu ; uyudum = j'ai dormi." }
    ]
  }
];
