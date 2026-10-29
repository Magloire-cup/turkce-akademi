/* ============================================================
   Türkçe Akademi : Référence de grammaire
   16 fiches classées par étape
   ============================================================ */

const GRAMMAR = [
  {
    id: "alphabet", title: "L'alphabet turc & prononciation", level: "A1",
    blocks: [
      { t: "p", text: "29 lettres, toutes prononçables, aucune exception : le turc s'écrit comme il se prononce. L'alphabet latin date de 1928 (réforme d'Atatürk). Les lettres q, w et x n'existent pas." },
      { t: "table", caption: "Les lettres « nouvelles »", head: ["Lettre", "Son", "Exemple"],
        rows: [
          ["ç", "tch", "<tur>çay</tur> (thé)"],
          ["ş", "ch français", "<tur>şehir</tur> (ville)"],
          ["c", "dj", "<tur>cam</tur> (verre)"],
          ["j", "j français (rare)", "<tur>jilet</tur> (rasoir)"],
          ["ğ", "allonge la voyelle précédente", "<tur>dağ</tur> (montagne) → « daa »"],
          ["ı", "« eu » bref non arrondi", "<tur>ışık</tur> (lumière)"],
          ["ö", "eu français", "<tur>göz</tur> (œil)"],
          ["ü", "u français", "<tur>gül</tur> (rose)"]
        ] },
      { t: "ul", items: [
        "Le <b>h</b> est toujours aspiré : <tur>hava</tur> (air).",
        "Le <b>r</b> se roule légèrement.",
        "L'accent tonique tombe sur la <b>dernière syllabe</b> (sauf exceptions : place names avec -e).",
        "ı majuscule s'écrit I ; i majuscule s'écrit İ. Piège classique !"
      ] }
    ]
  },
  {
    id: "harmonie", title: "L'harmonie vocalique", level: "A1",
    blocks: [
      { t: "p", text: "Règle reine du turc : les suffixes copient les voyelles du mot. Deux harmonies existent." },
      { t: "table", caption: "Les familles de voyelles", head: ["Arrière (sombres)", "Avant (claires)"],
        rows: [
          ["a, ı, o, u", "e, i, ö, ü"]
        ] },
      { t: "h", text: "Harmonie à 2 (a/e)" },
      { t: "table", caption: "Exemples avec le pluriel -ler/-lar", head: ["Mot", "Famille", "Pluriel"],
        rows: [
          ["<tur>ev</tur>", "avant (e)", "<tur>evler</tur>"],
          ["<tur>masa</tur>", "arrière (a)", "<tur>masalar</tur>"],
          ["<tur>göz</tur>", "avant (ö)", "<tur>gözler</tur>"]
        ] },
      { t: "h", text: "Harmonie à 4 (i/ı/ü/u)" },
      { t: "table", caption: "Exemples avec l'accusatif -i", head: ["Dernière voyelle", "Suffixe", "Exemple"],
        rows: [
          ["e, i", "-i", "<tur>evi</tur> (la maison)"],
          ["a, ı", "-ı", "<tur>masayı</tur> (la table : avec y)"],
          ["ö, ü", "-ü", "<tur>gözü</tur> (l'œil)"],
          ["o, u", "-u", "<tur>okulu</tur> (l'école)"]
        ] },
      { t: "note", kind: "tip", tag: "Méthode", text: "Regarde uniquement la <b>dernière voyelle</b> du mot, choisis sa famille, et déroule. Avec un peu de pratique, l'oreille décide toute seule." }
    ]
  },
  {
    id: "agglutination", title: "L'agglutination : des mots en Lego", level: "A1",
    blocks: [
      { t: "p", text: "Le turc exprime par des <b>suffixes</b> ce que le français exprime par des mots-outils. L'ordre d'empilement est strict : pluriel → possessif → cas." },
      { t: "table", caption: "Décomposition d'un mot complet", head: ["Étape", "Mot", "Sens"],
        rows: [
          ["racine", "<tur>ev</tur>", "maison"],
          ["+ pluriel", "<tur>evler</tur>", "les maisons"],
          ["+ possessif", "<tur>evlerim</tur>", "mes maisons"],
          ["+ cas locatif", "<tur>evlerimde</tur>", "dans mes maisons"]
        ] },
      { t: "p", text: "La logique va du <b>plus général au plus précis</b> : l'objet, puis la quantité (<tur>-ler/-lar</tur>), puis le possesseur (<tur>-im</tur>…), puis la fonction dans la phrase (<tur>-de</tur>, <tur>-den</tur>…)." },
      { t: "table", caption: "Le même radical, trois niveaux de précision", head: ["Formule", "Mot", "Sens"],
        rows: [
          ["racine + pluriel + locatif", "<tur>evlerde</tur>", "dans les maisons"],
          ["racine + possessif + locatif", "<tur>evimde</tur>", "dans ma maison"],
          ["racine + pluriel + possessif + locatif", "<tur>evlerimde</tur>", "dans mes maisons"]
        ] },
      { t: "note", kind: "info", tag: "Deux noms liés", text: "Le <b>génitif</b> relie deux noms : il se place sur le <b>possesseur</b>, tandis que le <b>possessif</b> se place sur l'objet possédé. Exemple : <tur>evin kapısı</tur> (la porte de la maison) = <tur>ev-in</tur> + <tur>kapı-sı</tur>. Le génitif ferme le premier mot ; il ne se glisse pas après le possessif du second." },
      { t: "p", text: "Même principe pour les verbes : racine + négation + temps + personne. <tur>gel-me-di-m</tur> = je ne suis pas venu. Un mot = une mini-phrase." },
      { t: "note", kind: "tip", tag: "Lecture", text: "Face à un long mot turc, épluche-le par la droite : -ler/-lar ? possessif ? cas ? Puis traite le radical restant." }
    ]
  },
  {
    id: "etre", title: "L'être (sans verbe) & değil", level: "A1",
    blocks: [
      { t: "p", text: "Pas de verbe être au présent : des suffixes s'ajoutent au nom. La négation utilise <tur>değil</tur>, mot placé après le nom qui prend lui-même les personnes." },
      { t: "table", caption: "Affirmatif / négatif", head: ["Personne", "Affirmatif", "Négatif"],
        rows: [
          ["ben", "<tur>öğretmenim</tur>", "<tur>öğretmen değilim</tur>"],
          ["sen", "<tur>öğrencisin</tur>", "<tur>öğrenci değilsin</tur>"],
          ["o", "<tur>doktor</tur>", "<tur>doktor değil</tur>"],
          ["biz", "<tur>Türküz</tur>", "<tur>Türk değiliz</tur>"],
          ["siz", "<tur>yorgunsunuz</tur>", "<tur>yorgun değilsiniz</tur>"],
          ["onlar", "<tur>öğretmen</tur>", "<tur>öğretmen değiller</tur>"]
        ] },
      { t: "p", text: "Le suffixe -dir existe pour la 3e personne (très formel, écrit, annonces) : <tur>Güzeldir.</tur> (c'est beau, assurément)." }
    ]
  },
  {
    id: "pluriel", title: "Le pluriel -ler / -lar", level: "A1",
    blocks: [
      { t: "p", text: "Brique simple : -ler après voyelle avant, -lar après voyelle arrière." },
      { t: "ex", items: [
        { tr: "kitap → kitaplar", fr: "livre → des livres" },
        { tr: "şehir → şehirler", fr: "ville → des villes" },
        { tr: "kadın → kadınlar", fr: "femme → des femmes" },
        { tr: "gül → güller", fr: "rose → des roses" }
      ] },
      { t: "note", kind: "warn", tag: "Règle", text: "Après un <b>nombre</b> ou un quantificateur (çok, biraz), le nom reste au singulier : <tur>üç kitap</tur> (trois livres), <tur>çok para</tur> (beaucoup d'argent)." },
      { t: "p", text: "Avec les personnes verbales, le pluriel humain 3e peut doubler : <tur>geldiler</tur> ou <tur>gelmışlerdir</tur>… en pratique : -ler s'ajoute à la 3e personne du pluriel déjà marquée (onlar geldiler)." }
    ]
  },
  {
    id: "pronoms", title: "Pronoms & démonstratifs", level: "A1",
    blocks: [
      { t: "table", caption: "Pronoms personnels", head: ["Turc", "Français"],
        rows: [
          ["<tur>ben, sen, o</tur>", "je/moi, tu/toi, il/elle"],
          ["<tur>biz, siz, onlar</tur>", "nous, vous, ils/elles"]
        ] },
      { t: "table", caption: "Démonstratifs & interrogatifs", head: ["Turc", "Français"],
        rows: [
          ["<tur>bu</tur>", "ceci (proche)"],
          ["<tur>şu</tur>", "cela (un peu plus loin)"],
          ["<tur>o</tur>", "cela (lointain) = aussi « il/elle »"],
          ["<tur>ne, kim, nerede</tur>", "quoi, qui, où"]
        ] },
      { t: "p", text: "Les pronoms sont souvent <b>implicites</b> : la terminaison du verbe indique déjà la personne. <tur>Geliyorum</tur> suffit pour « je viens »." },
      { t: "p", text: "Le vouvoiement (siz) est de rigueur avec les inconnus, les aînés, en boutique : mais les Turcs passent vite au tutoiement chaleureux, surtout entre jeunes." }
    ]
  },
  {
    id: "cas", title: "Les six cas", level: "A2",
    blocks: [
      { t: "p", text: "Les « prépositions » turques sont des suffixes. Six cas, chacun avec sa fonction. Le tampon y s'intercale après voyelle finale ; les consonnes finales sourdes (p ç t k s ş f h) durcissent le d en t." },
      { t: "table", caption: "Panorama des six cas (exemple : ev, « maison »)", head: ["Cas", "Suffixe", "Exemple", "Fonction"],
        rows: [
          ["Nominatif", "Ø", "<tur>ev</tur>", "sujet / COD indéfini"],
          ["Accusatif", "-i/-ı/-u/-ü", "<tur>evi</tur>", "COD défini"],
          ["Datif", "-e/-a", "<tur>eve</tur>", "à, vers (destination)"],
          ["Locatif", "-de/-da", "<tur>evde</tur>", "dans, à, sur (lieu)"],
          ["Ablatif", "-den/-dan", "<tur>evden</tur>", "de, depuis (origine)"],
          ["Génitif", "-in/-ın/-un/-ün", "<tur>evin</tur>", "de (possession)"]
        ] },
      { t: "table", caption: "Exemples vivants", head: ["Turc", "Français"],
        rows: [
          ["<tur>Kitabı okudum.</tur>", "J'ai lu le livre. (accusatif)"],
          ["<tur>Okula gidiyorum.</tur>", "Je vais à l'école. (datif)"],
          ["<tur>Okuldayım.</tur>", "Je suis à l'école. (locatif)"],
          ["<tur>Okuldan geliyorum.</tur>", "Je viens de l'école. (ablatif)"],
          ["<tur>Öğretmenin adı Ali.</tur>", "Le nom de l'enseignant est Ali. (génitif)"]
        ] },
      { t: "note", kind: "tip", tag: "Consonnes sourdes", text: "p ç t k s ş f h → le d devient t : <tur>sokakta</tur> (dans la rue), <tur>işte</tur> (au travail), <tur>otobüste</tur> (dans le bus)." }
    ]
  },
  {
    id: "possessif", title: "La possession", level: "A2",
    blocks: [
      { t: "p", text: "En turc, le nom possédé porte une terminaison de possession. Le possesseur peut rester sous-entendu : <tur>odam</tur> signifie « ma chambre ». Quand on précise le possesseur, il prend le génitif et le nom possédé garde sa terminaison : <tur>benim odam</tur> (ma chambre)." },
      { t: "table", caption: "Les six terminaisons avec « oda » (chambre)", head: ["Personne", "Terminaison", "Exemple", "Français"],
        rows: [
          ["ben (je)", "-(ı/i/u/ü)m", "<tur>odam</tur>", "ma chambre"],
          ["sen (tu)", "-(ı/i/u/ü)n", "<tur>odan</tur>", "ta chambre"],
          ["o (il/elle)", "-(ı/i/u/ü)", "<tur>odası</tur>", "sa chambre"],
          ["biz (nous)", "-(ı/i/u/ü)mız", "<tur>odamız</tur>", "notre chambre"],
          ["siz (vous)", "-(ı/i/u/ü)nız", "<tur>odanız</tur>", "votre chambre"],
          ["onlar (ils/elles)", "-(ı/i/u/ü)ları", "<tur>odaları</tur>", "leur chambre / leurs chambres"]
        ] },
      { t: "p", text: "La voyelle du suffixe suit la dernière voyelle du mot : <b>a/ı → ı</b>, <b>e/i → i</b>, <b>o/u → u</b>, <b>ö/ü → ü</b>. Avec <tur>oda</tur>, la voyelle finale est <b>a</b> : on obtient donc <tur>odam</tur>, <tur>odan</tur>, <tur>odası</tur>, <tur>odamız</tur> et <tur>odanız</tur>." },
      { t: "table", caption: "Choisir la voyelle de la terminaison", head: ["Dernière voyelle", "Voyelle", "Exemple"],
        rows: [
          ["a, ı", "ı", "<tur>kapı → kapım</tur> (ma porte)"],
          ["e, i", "i", "<tur>ev → evim</tur> (ma maison)"],
          ["o, u", "u", "<tur>okul → okulum</tur> (mon école)"],
          ["ö, ü", "ü", "<tur>göz → gözüm</tur> (mon œil)"]
        ] },
      { t: "h", text: "Avec une voyelle finale : oda et araba" },
      { t: "p", text: "Quand le mot se termine par une voyelle, les terminaisons des personnes 1, 2 et 3 se fixent ainsi : <tur>oda + m = odam</tur> (ma chambre), <tur>oda + n = odan</tur> (ta chambre), mais la 3e personne prend <b>-sı/-si/-su/-sü</b> : <tur>odası</tur> (sa chambre). Le <b>s</b> protège la rencontre entre deux voyelles." },
      { t: "h", text: "Avec une consonne finale : zaman et kitap" },
      { t: "p", text: "<tur>zaman</tur> (temps) se termine par une consonne : <tur>zamanım</tur> (mon temps), <tur>zamanın</tur> (ton temps), <tur>zamanı</tur> (son temps), <tur>zamanımız</tur> (notre temps), <tur>zamanınız</tur> (votre temps), <tur>zamanları</tur> (leur temps / leurs temps). Avec <tur>kitap</tur>, le <b>p</b> devient <b>b</b> devant une terminaison vocalique : <tur>kitabım</tur> (mon livre)." },
      { t: "ex", items: [
        { tr: "Odam çok küçük.", fr: "Ma chambre est très petite." },
        { tr: "Zamanım yok.", fr: "Je n'ai pas le temps." },
        { tr: "Ali'nin odası mavi.", fr: "La chambre d'Ali est bleue." },
        { tr: "Ders çalışma zamanımız var.", fr: "Nous avons du temps pour étudier." },
        { tr: "Benim kitabım nerede?", fr: "Où est mon livre ?" }
      ] },
      { t: "note", kind: "warn", tag: "À retenir", text: "<tur>odam</tur> = ma chambre, <tur>odan</tur> = ta chambre, <tur>odası</tur> = sa chambre, <tur>odamız</tur> = notre chambre, <tur>odanız</tur> = votre chambre. Ne confonds pas <tur>odam</tur> (ma chambre) avec <tur>odayım</tur> (je suis dans la chambre)." }
    ]
  },
  {
    id: "varyok", title: "Var / yok : avoir & exister", level: "A2",
    blocks: [
      { t: "p", text: "Pas de verbe avoir : <tur>var</tur> (il y a) et <tur>yok</tur> (il n'y a pas), invariables, se placent en fin de phrase." },
      { t: "table", caption: "Structures", head: ["Structure", "Exemple", "Français"],
        rows: [
          ["possédé-possessif + var", "<tur>Arabam var.</tur>", "J'ai une voiture."],
          ["possédé-possessif + yok", "<tur>Zamanım yok.</tur>", "Je n'ai pas le temps."],
          ["lieu-locatif + var/yok", "<tur>Buzdolabında süt yok.</tur>", "Il n'y a pas de lait dans le frigo."],
          ["question", "<tur>Sigara var mı?</tur>", "Y a-t-il des cigarettes ?"]
        ] },
      { t: "ex", items: [
        { tr: "Bir sorunum var.", fr: "J'ai un problème." },
        { tr: "Param yok, ama hayalim var.", fr: "Je n'ai pas d'argent, mais j'ai un rêve." }
      ] }
    ]
  },
  {
    id: "present", title: "Le présent continu : -yor", level: "A2",
    blocks: [
      { t: "p", text: "Racine + <b>-yor</b> + personne. La voyelle qui précède -yor s'harmonise : -ıyor, -iyor, -uyor ou -üyor selon le mot." },
      { t: "table", caption: "Conjugaison complète (gelmek, venir)", head: ["Personne", "Turc", "Français"],
        rows: [
          ["ben", "<tur>geliyorum</tur>", "je viens"],
          ["sen", "<tur>geliyorsun</tur>", "tu viens"],
          ["o", "<tur>geliyor</tur>", "il/elle vient"],
          ["biz", "<tur>geliyoruz</tur>", "nous venons"],
          ["siz", "<tur>geliyorsunuz</tur>", "vous venez"],
          ["onlar", "<tur>geliyorlar</tur>", "ils/elles viennent"]
        ] },
      { t: "p", text: "Négation : -me/-ma s'intercale (gel<b>miyorum</b>). Après voyelle, le y de -yor reste visible : oku<b>yorum</b> (je lis), bekle<b>yor</b> (il attend)." },
      { t: "p", text: "Ce temps couvre l'action en cours <b>et</b> l'état durable : <tur>İstanbul'da yaşıyorum</tur> (j'habite à Istanbul), <tur>Türkçe öğreniyorum</tur> (j'apprends le turc)." }
    ]
  },
  {
    id: "negation", title: "La négation", level: "A2",
    blocks: [
      { t: "table", caption: "Trois outils de négation", head: ["Contexte", "Outil", "Exemple"],
        rows: [
          ["Nom / adjectif", "<tur>değil</tur>", "<tur>Hasta değilim.</tur> (je ne suis pas malade)"],
          ["Verbe", "<b>-me/-ma</b> avant le temps", "<tur>gelmedim</tur> (je ne suis pas venu)"],
          ["Existence / avoir", "<tur>yok</tur>", "<tur>Param yok.</tur> (je n'ai pas d'argent)"]
        ] },
      { t: "p", text: "Le mot <tur>hayır</tur> (non) répond à une question ; <tur>değil</tur>, -me et yok nient <b>à l'intérieur</b> de la phrase. Pour « non plus » : <tur>ben de değilim</tur> / <tur>ben de gelmedim</tur>." },
      { t: "ex", items: [
        { tr: "Kahve istemiyorum.", fr: "Je ne veux pas de café." },
        { tr: "Bu kitap benim değil.", fr: "Ce livre n'est pas à moi." },
        { tr: "Hiç sevmiyorum.", fr: "Je n'aime pas du tout." }
      ] }
    ]
  },
  {
    id: "question", title: "La question : mi / mı / mu / mü", level: "A2",
    blocks: [
      { t: "p", text: "Particule interrogative <b>séparée</b>, placée juste après le mot interrogé, harmonisée avec la voyelle précédente. Avec les formes verbales en voyelle, elle prend les personnes : <tur>geldin mi?</tur>, <tur>geliyor musun?</tur>, <tur>gelecek misin?</tur>" },
      { t: "table", caption: "Choix de la variante", head: ["Dernière voyelle avant mi", "Particule", "Exemple"],
        rows: [
          ["e, i", "mi", "<tur>güzel mi?</tur>"],
          ["a, ı", "mı", "<tur>var mı?</tur>"],
          ["ö, ü", "mü", "<tur>Türk müsün?</tur>"],
          ["o, u", "mu", "<tur>yoruldu mu?</tur>"]
        ] },
      { t: "p", text: "Les mots interrogatifs (ne, kim, nerede, nasıl, kaç, hangi…) ne demandent PAS mi : <tur>Adın ne?</tur> : jamais « Adın ne mi ? »." }
    ]
  },
  {
    id: "alternances", title: "Alternances consonantiques", level: "B1",
    blocks: [
      { t: "p", text: "Les consonnes finales « respirent » : elles se durcissent ou s'adoucissent selon ce qui suit. Trois phénomènes à connaître." },
      { t: "table", caption: "Les trois alternances", head: ["Phénomène", "Règle", "Exemple"],
        rows: [
          ["Durcissement (sourde)", "d → t après p ç t k s ş f h", "<tur>sokakta</tur>, <tur>işte</tur>"],
          ["Adoucissement", "k final → ğ devant voyelle", "<tur>yapacak → yapacağım</tur>, <tur>ayak → ayağı</tur>"],
          ["Voisement", "p → b, ç → c, t → d devant voyelle", "<tur>kitap → kitabı</tur>, <tur>ağaç → ağacı</tur>, <tur>kanat → kanadı</tur>"]
        ] },
      { t: "note", kind: "tip", tag: "Lis ce que tu vois", text: "La bonne nouvelle : ces alternances sont <b>écrites</b>, pas cachées. En lisant beaucoup, tu les mémorises comme des images de mots." }
    ]
  },
  {
    id: "passe", title: "Les passés : -di et -miş", level: "B1",
    blocks: [
      { t: "table", caption: "Passé vu (-di) : conjugaison de gelmek", head: ["Personne", "Turc", "Français"],
        rows: [
          ["ben", "<tur>geldim</tur>", "je suis venu(e)"],
          ["sen", "<tur>geldin</tur>", "tu es venu(e)"],
          ["o", "<tur>geldi</tur>", "il/elle est venu(e)"],
          ["biz", "<tur>geldik</tur>", "nous sommes venus"],
          ["siz", "<tur>geldiniz</tur>", "vous êtes venus"],
          ["onlar", "<tur>geldiler</tur>", "ils/elles sont venus"]
        ] },
      { t: "p", text: "Le passé rapporté <b>-miş</b> suit le même schéma (gelmişim, gelmişsin…) et encode la <b>source de l'information</b> : tu n'as pas été témoin, on te l'a raconté : ou tu découvres avec surprise." },
      { t: "ex", items: [
        { tr: "Dün Ankara'ya gittim.", fr: "Hier je suis allé à Ankara. (je le sais, j'y étais)" },
        { tr: "Dün Ankara'ya gitmiş.", fr: "Il serait allé à Ankara hier. (on me l'a dit)" },
        { tr: "Ayşe evlenmiş!", fr: "Ayşe s'est mariée : qui l'eût cru !" }
      ] },
      { t: "note", kind: "info", tag: "Plus-que-parfait", text: "En combinant les deux : <tur>gelmışti</tur> = il était venu (miş + di). Le turc empile les temps comme des briques." }
    ]
  },
  {
    id: "futur", title: "Le futur : -ecek / -acak", level: "B1",
    blocks: [
      { t: "table", caption: "Conjugaison de gelmek au futur", head: ["Personne", "Turc", "Français"],
        rows: [
          ["ben", "<tur>geleceğim</tur>", "je viendrai"],
          ["sen", "<tur>geleceksin</tur>", "tu viendras"],
          ["o", "<tur>gelecek</tur>", "il/elle viendra"],
          ["biz", "<tur>geleceğiz</tur>", "nous viendrons"],
          ["siz", "<tur>geleceksiniz</tur>", "vous viendrez"],
          ["onlar", "<tur>gelecekler</tur>", "ils/elles viendront"]
        ] },
      { t: "p", text: "Le k de -cek/-cak devient ğ devant la voyelle des personnes : gelecek + im → gelece<b>ğ</b>im. Négation : gel<b>me</b>yeceğim. Question : gelecek misin?" },
      { t: "p", text: "Pour exprimer une intention immédiate, les Turcs utilisent souvent le présent : <tur>Şimdi gidiyorum</tur> (j'y vais maintenant / tout de suite)." }
    ]
  },
  {
    id: "postpositions", title: "Postpositions & connecteurs", level: "B1",
    blocks: [
      { t: "p", text: "Le turc place ses « prépositions » <b>après</b> le nom (d'où leur nom : postpositions). Certaines se collent (-le/-la), d'autres restent des mots." },
      { t: "table", caption: "Les essentielles", head: ["Turc", "Sens", "Exemple", "Français"],
        rows: [
          ["<tur>-le / -la</tur> (= ile)", "avec, au moyen de", "<tur>otobüsle</tur>", "en bus"],
          ["<tur>için</tur>", "pour, afin de", "<tur>senin için</tur>", "pour toi"],
          ["<tur>gibi</tur>", "comme", "<tur>kuş gibi</tur>", "comme un oiseau"],
          ["<tur>ile</tur>", "avec (nom)", "<tur>arkadaşım ile</tur>", "avec mon ami"],
          ["<tur>kadar</tur>", "jusqu'à, autant que", "<tur>saat beşe kadar</tur>", "jusqu'à cinq heures"],
          ["<tur>önce / sonra</tur>", "avant / après", "<tur>yemekten sonra</tur>", "après le repas"],
          ["<tur>çünkü</tur>", "parce que", "<tur>yorgunum, çünkü…</tur>", "je suis fatigué parce que…"],
          ["<tur>ama / fakat</tur>", "mais", "<tur>ama</tur>", "mais"]
        ] },
      { t: "note", kind: "tip", tag: "Ordre des mots", text: "Phrase type : Sujet-Complément-Verbe, le verbe ferme presque toujours la phrase : <tur>Ben yarın okula gideceğim.</tur> Mais l'ordre reste flexible : c'est les suffixes qui portent la grammaire, pas la position." }
    ]
  }
];
