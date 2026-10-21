/* ============================================================
   Türkçe Akademi : Banque de quiz de grammaire
   36 questions avec explications (les quiz de vocabulaire
   sont générés dynamiquement depuis VOCAB)
   ============================================================ */

const GRAMMAR_QUIZ = [
  { q: "Comment se prononce « ğ » ?", opts: ["comme un g dur", "il allonge la voyelle précédente", "comme un k", "il est muet"], a: 1, exp: "Le soft g ne bloque pas l'air : dağ → « daa »." },
  { q: "« şehir » se prononce…", opts: ["sé-hir", "ché-hir", "tché-hir", "zé-hir"], a: 1, exp: "ş = « ch » français. La ville : şehir." },
  { q: "Combien de voyelles en turc ?", opts: ["5", "6", "8", "10"], a: 2, exp: "a e ı i o ö u ü : huit voyelles, deux familles." },
  { q: "Laquelle est une voyelle d'« avant » ?", opts: ["ı", "u", "ö", "a"], a: 2, exp: "Avant : e i ö ü. Arrière : a ı o u." },
  { q: "« öğretmenim » signifie…", opts: ["tu es enseignant", "je suis enseignant", "son enseignant", "enseignants"], a: 1, exp: "öğretmen + -im (1re personne) : je suis enseignant." },
  { q: "« Türküz » = nous sommes turcs. Quel est le suffixe ?", opts: ["-üz", "-z", "-süz", "-üzler"], a: 0, exp: "Türk + üz : la marque de « nous » de l'être." },
  { q: "« öğrenci değilim » signifie…", opts: ["je suis étudiant", "je ne suis pas étudiant", "tu n'es pas étudiant", "étudiant ou non"], a: 1, exp: "değil = ne pas être ; değilim = je ne suis pas." },
  { q: "Négation de « geliyor » (il vient) ?", opts: ["gelmiyor", "yok geliyor", "gelmeyor değil", "gelmiyor değil"], a: 0, exp: "-me s'intercale : gel-me-yor." },
  { q: "« Suyum var » signifie…", opts: ["je n'ai pas d'eau", "j'ai de l'eau", "l'eau existe", "je bois de l'eau"], a: 1, exp: "su-yum (mon eau) + var (existe) = j'ai de l'eau." },
  { q: "« Kahve yok » signifie…", opts: ["il y a du café", "il n'y a pas de café", "le café est froid", "je veux un café"], a: 1, exp: "yok = inexistant. Aucune négation supplémentaire nécessaire." },
  { q: "Pluriel de « kitap » (livre) ?", opts: ["kitapler", "kitaplar", "kitaplır", "kitaplor"], a: 1, exp: "a = arrière → -lar : kitaplar." },
  { q: "Pluriel de « gözlük » (lunettes) ?", opts: ["gözlükler", "gözlüklar", "gözlüklır", "gözlüknar"], a: 0, exp: "ü = avant → -ler : gözlükler." },
  { q: "« üç elma » (trois pommes) : pourquoi pas « üç elmalar » ?", opts: ["après un nombre, pas de pluriel", "elma est invariable", "harmonie vocalique", "elma est déjà pluriel"], a: 0, exp: "Le nombre rend le pluriel superflu : üç elma, iki ev, beş kitap." },
  { q: "Ordre correct des suffixes ?", opts: ["cas → possessif → pluriel", "pluriel → cas → possessif", "pluriel → possessif → cas", "possessif → pluriel → cas"], a: 2, exp: "ev-ler-im-de : pluriel, possessif, cas. Toujours." },
  { q: "« annem » signifie…", opts: ["ta mère", "sa mère", "ma mère", "leur mère"], a: 2, exp: "anne + -m : ma mère." },
  { q: "« odası » signifie…", opts: ["ma chambre", "ta chambre", "sa chambre", "nos chambres"], a: 2, exp: "oda + -sı (avec tampon n après voyelle) : sa chambre." },
  { q: "« Arabam var » signifie…", opts: ["j'ai une voiture", "sa voiture existe", "il y a des voitures", "ma voiture est là-bas"], a: 0, exp: "araba-m (ma voiture) + var : j'ai une voiture." },
  { q: "« Ne yapıyorsun? » signifie…", opts: ["Qui es-tu ?", "Qu'est-ce que tu fais ?", "Où vas-tu ?", "Comment vas-tu ?"], a: 1, exp: "yapmak (faire) au présent + 2e personne." },
  { q: "« okuyorum » signifie…", opts: ["je lis", "tu lis", "il écrit", "j'écris"], a: 0, exp: "oku- (lire) + -yor + -um." },
  { q: "Complète : « Ben bak… » (je regarde)", opts: ["-iyorum", "-ıyorum", "-uyorum", "-üyorum"], a: 1, exp: "bak- contient a (arrière) → bakıyorum." },
  { q: "Complète : « Ben sür… » (je conduis)", opts: ["-iyorum", "-ıyorum", "-uyorum", "-üyorum"], a: 3, exp: "sür- contient ü (avant arrondie) → sürüyorum." },
  { q: "« sevmiyorum » signifie…", opts: ["j'aime", "je n'aime pas", "tu n'aimes pas", "j'aimerai"], a: 1, exp: "sev-me-yorum : le -me de négation avant le temps." },
  { q: "« Geliyor musun? » signifie…", opts: ["tu viens ?", "il vient ?", "tu ne viens pas ?", "viendras-tu ?"], a: 0, exp: "geliyor + mu (harmonie o/u) + sun : tu viens ?" },
  { q: "« Türk müsün? » : pourquoi « mü » ?", opts: ["harmonie avec ü de Türk", "c'est une exception", "mü est la seule forme", "harmonie avec le pronom"], a: 0, exp: "Türk finit par ü (avant arrondie) → mü." },
  { q: "« var mı? » : pourquoi « mı » ?", opts: ["harmonie avec a de var", "parce que c'est une question", "mı est invariable", "harmonie avec r"], a: 0, exp: "var finit par a (arrière) → mı." },
  { q: "Où se place la particule mi ?", opts: ["toujours en fin de phrase", "juste après le mot interrogé", "avant le verbe", "après le sujet"], a: 1, exp: "Yarın MI geliyorsun ? (c'est demain ?) ≠ Yarın geliyor MUSUN ? (tu viens demain ?)." },
  { q: "« evde » signifie…", opts: ["vers la maison", "de la maison", "à la maison", "la maison"], a: 2, exp: "-de = locatif (dans, à, sur)." },
  { q: "« eve » signifie…", opts: ["à la maison (destination)", "dans la maison", "de la maison", "ma maison"], a: 0, exp: "-e = datif : mouvement vers." },
  { q: "« evden » signifie…", opts: ["vers la maison", "dans la maison", "de la maison (origine)", "la maison de"], a: 2, exp: "-den = ablatif : provenance." },
  { q: "Pourquoi « sokakta » (dans la rue) et non « sokakda » ?", opts: ["k final est sourd → d devient t", "harmonie vocalique", "erreur volontaire", "le k s'assimile"], a: 0, exp: "Après p ç t k s ş f h, le d des suffixes devient t." },
  { q: "« Kitabı okudum » signifie…", opts: ["j'ai lu un livre (n'importe lequel)", "j'ai lu le livre (ce livre précis)", "je lis le livre", "le livre m'a lu"], a: 1, exp: "L'accusatif -ı marque le COD défini, connu des deux interlocuteurs." },
  { q: "« Ekmek aldım » signifie…", opts: ["j'ai acheté du pain", "j'ai acheté le pain", "je veux du pain", "le pain est acheté"], a: 0, exp: "Sans accusatif, le COD est indéfini : du pain en général." },
  { q: "« geldim » signifie…", opts: ["je viens", "je suis venu(e)", "je viendrai", "il est venu"], a: 1, exp: "gel-di-m : passé vu, 1re personne." },
  { q: "« Ali gelmiş » exprime…", opts: ["j'ai vu Ali venir", "on dit qu'Ali est venu", "Ali viendra", "Ali ne vient pas"], a: 1, exp: "-miş : passé rapporté, information de seconde main." },
  { q: "« geleceğim » signifie…", opts: ["je viens", "je viendrai", "je suis venu", "viens !"], a: 1, exp: "gel-ecek-im, avec k→ğ devant la voyelle." },
  { q: "« yapacağım » : pourquoi le ğ ?", opts: ["le k final s'adoucit en ğ devant voyelle", "harmonie vocalique", "le a exige un ğ", "c'est irrégulier"], a: 0, exp: "Alternance consonantique : yap-acak-ım → yapacağım." },
  { q: "« senin için » signifie…", opts: ["avec toi", "comme toi", "pour toi", "chez toi"], a: 2, exp: "için = pour. senin için = pour toi." },
  { q: "« otobüsle gittim » signifie…", opts: ["je suis allé en bus", "j'ai pris le bus demain", "le bus est parti", "j'attendais le bus"], a: 0, exp: "-le = au moyen de : otobüsle = en bus." },
  { q: "Dans « Ben yarın okula gidiyorum », l'ordre normal turc est…", opts: ["Sujet-COD-Verbe", "Verbe-Sujet-COD", "COD-Verbe-Sujet", "libre sans règle"], a: 0, exp: "Le verbe ferme généralement la phrase ; les suffixes portent les rôles." },
  { q: "« Ben de gelmedim » signifie…", opts: ["je suis venu aussi", "moi non plus je ne suis pas venu", "je ne viendrai pas non plus", "je n'ai jamais dit ça"], a: 1, exp: "de (aussi) + passé négatif : « moi non plus »." }
];

/* Mot du jour (rotation déterministe) */
const WORD_OF_DAY = [
  { tr: "gönül", fr: "le cœur (siège des émotions)", ex: "Gönül ister ki…", exFr: "Le cœur voudrait que…" },
  { tr: "keyif", fr: "plaisir, ambiance", ex: "Keyifli bir akşamdı.", exFr: "Ce fut une soirée agréable." },
  { tr: "merak", fr: "curiosité, inquiétude", ex: "Merak etme!", exFr: "Ne t'inquiète pas !" },
  { tr: "hayat", fr: "la vie", ex: "Hayat güzel.", exFr: "La vie est belle." },
  { tr: "özlem", fr: "la nostalgie, le manque", ex: "Özlemle bekliyorum.", exFr: "J'attends avec impatience." },
  { tr: "şans", fr: "la chance", ex: "Sana şans diliyorum.", exFr: "Je te souhaite bonne chance." },
  { tr: "emektar", fr: "fidèle serviteur, dévoué", ex: "Bu çanta emektar artık.", exFr: "Ce sac m'a bien servi." },
  { tr: "gurbet", fr: "l'exil, être loin des siens", ex: "Gurbette olmak zor.", exFr: "Vivre loin des siens est dur." }
];
