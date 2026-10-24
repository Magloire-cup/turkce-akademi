/* ============================================================
   Türkçe Akademi : compagnon vidéo, niveau A1
   Fiches originales rédigées pour le site, alignées sur les
   grands points du programme A1 de la série « Türkçeyi Çözüyoruz ».
   ============================================================ */

const VIDEOS_A1 = [
  {
    id: "va1-1", level: "A1", num: 1,
    title: "Lire le turc : alphabet et sons",
    tr: "Türk alfabesi ve sesler",
    goal: "Reconnaître les 29 lettres, prononcer les voyelles et les consonnes qui n'existent pas en français.",
    watch: "Türk alfabesi",
    blocks: [
      { t: "p", text: "Le turc s'écrit avec un alphabet latin de <b>29 lettres</b>. Il n'utilise pas <b>q, w, x</b>, mais ajoute <b>ç, ğ, ı, ö, ş, ü</b>. Chaque lettre se prononce toujours de la même façon : une fois le son appris, tu peux lire n'importe quel mot." },
      { t: "table", caption: "Les sons à connaître en priorité", head: ["Lettre", "Son proche", "Exemple"],
        rows: [
          ["<b>a</b>", "[a]", "<tur>araba</tur> (voiture)"],
          ["<b>e</b>", "[ɛ] ouvert", "<tur>ev</tur> (maison)"],
          ["<b>ı</b>", "entre [e] et [ɨ]", "<tur>kır</tur> (campagne)"],
          ["<b>i</b>", "[i]", "<tur>iki</tur> (deux)"],
          ["<b>o</b>", "[o]", "<tur>okul</tur> (école)"],
          ["<b>ö</b>", "[œ] comme « peur »", "<tur>göz</tur> (œil)"],
          ["<b>u</b>", "[u]", "<tur>su</tur> (eau)"],
          ["<b>ü</b>", "[y] comme « tu »", "<tur>gül</tur> (rose)"],
          ["<b>c</b>", "[dʒ] comme « djinn »", "<tur>cam</tur> (vitre)"],
          ["<b>ç</b>", "[tʃ] comme « chat »", "<tur>çay</tur> (thé)"],
          ["<b>ş</b>", "[ʃ] comme « chou »", "<tur>şehir</tur> (ville)"],
          ["<b>ğ</b>", "allonge la voyelle", "<tur>dağ</tur> (montagne)"]
        ] },
      { t: "note", kind: "tip", tag: "Le ğ", text: "<b>ğ</b> ne commence jamais un mot et ne se prononce pas comme un g. Il allonge la voyelle qui le précède : <tur>dağ</tur> se dit [daː], <tur>öğretmen</tur> [øːretmen]. Entre deux voyelles, il s'entend à peine." },
      { t: "ex", items: [
        { tr: "Merhaba, Türkçe öğreniyorum.", fr: "Bonjour, j'apprends le turc." },
        { tr: "Şimdi çay içiyorum.", fr: "En ce moment, je bois du thé." },
        { tr: "Bu şehir çok güzel.", fr: "Cette ville est très belle." },
        { tr: "Güle güle, yarın görüşürüz.", fr: "Au revoir, à demain." }
      ] },
      { t: "note", kind: "info", tag: "ı ou i ?", text: "Le <b>ı</b> est un son postérieur, sans arrondir les lèvres, proche du « e » muet. Compare <tur>kır</tur> (campagne) et <tur>kir</tur> (saleté) : la différence change le sens du mot." }
    ],
    vocab: [
      ["merhaba", "bonjour"], ["günaydın", "bonjour (le matin)"], ["hoşça kal", "au revoir (dit par celui qui part)"],
      ["güle güle", "au revoir (dit à celui qui part)"], ["evet", "oui"], ["hayır", "non"],
      ["lütfen", "s'il te plaît"], ["teşekkürler", "merci"], ["Türkçe", "le turc"],
      ["öğrenmek", "apprendre"]
    ],
    quiz: [
      { q: "Quelle lettre se prononce comme le « ch » de « chat » ?", options: ["ç", "ş", "c"], a: 0, why: "ç = [tʃ]. La lettre ş se prononce [ʃ], comme dans « chou »." },
      { q: "Que fait la lettre ğ ?", options: ["Elle se prononce « g »", "Elle allonge la voyelle précédente", "Elle se prononce « y »"], a: 1, why: "ğ n'a pas de son propre : dağ se prononce [daː], avec un a allongé." }
    ]
  },
  {
    id: "va1-2", level: "A1", num: 2,
    title: "Saluer et se présenter",
    tr: "Selamlaşma ve kendini tanıtma",
    goal: "Dire bonjour, donner son nom, sa nationalité et son métier, puis passer au vouvoiement.",
    watch: "selamlaşma kendini tanıtma",
    blocks: [
      { t: "table", caption: "Les salutations du quotidien", head: ["Turc", "Français", "Quand l'utiliser"],
        rows: [
          ["<tur>Merhaba</tur>", "bonjour", "toute la journée, entre amis ou à l'école"],
          ["<tur>Günaydın</tur>", "bonjour", "le matin, jusqu'à midi environ"],
          ["<tur>İyi günler</tur>", "bonne journée", "en partant ou pour saluer l'après-midi"],
          ["<tur>İyi akşamlar</tur>", "bonsoir", "en fin de journée"],
          ["<tur>İyi geceler</tur>", "bonne nuit", "avant de se coucher"],
          ["<tur>Hoş geldin / Hoş geldiniz</tur>", "bienvenue", "à la personne qui arrive"],
          ["<tur>Hoş bulduk</tur>", "merci, je suis bien arrivé", "réponse à « hoş geldin »"],
          ["<tur>Görüşürüz</tur>", "à bientôt, on se voit", "entre amis, en partant"]
        ] },
      { t: "p", text: "Pour se présenter, on utilise <tur>Benim adım …</tur> (« mon nom est… ») ou simplement <tur>Ben …</tur>. La question est <tur>Adın ne?</tur> en tutoiement et <tur>Adınız ne?</tur> en vouvoiement." },
      { t: "table", caption: "Le suffixe « être » avec öğrenci (étudiant)", head: ["Personne", "Forme", "Sens"],
        rows: [
          ["ben", "<tur>öğrenciyim</tur>", "je suis étudiant(e)"],
          ["sen", "<tur>öğrencisin</tur>", "tu es étudiant(e)"],
          ["o", "<tur>öğrenci</tur>", "il / elle est étudiant(e)"],
          ["biz", "<tur>öğrenciyiz</tur>", "nous sommes étudiant(e)s"],
          ["siz", "<tur>öğrencisiniz</tur>", "vous êtes étudiant(e)(s)"],
          ["onlar", "<tur>öğrenciler</tur>", "ils / elles sont étudiant(e)s"]
        ] },
      { t: "ex", items: [
        { tr: "Merhaba, benim adım Ayşe. Memnun oldum.", fr: "Bonjour, je m'appelle Ayşe. Enchantée." },
        { tr: "Nerelisiniz? — Ben Fransızım.", fr: "D'où êtes-vous ? — Je suis français(e)." },
        { tr: "Ne iş yapıyorsunuz? — Öğrenciyim.", fr: "Que faites-vous dans la vie ? — Je suis étudiant(e)." },
        { tr: "Ben de memnun oldum. Görüşürüz!", fr: "Enchanté(e) aussi. À bientôt !" }
      ] },
      { t: "note", kind: "tip", tag: "sen ou siz ?", text: "Utilise <b>sen</b> avec les amis, la famille et les enfants. Utilise <b>siz</b> avec un inconnu, un aîné, un professeur ou dans un cadre professionnel. Le vouvoiement s'accorde avec les suffixes du pluriel : <tur>Nasılsınız?</tur> (comment allez-vous ?)." }
    ],
    vocab: [
      ["ad", "nom"], ["soyad", "nom de famille"], ["memnun olmak", "être enchanté"],
      ["tanışmak", "faire connaissance"], ["nereli", "de quelle origine"],
      ["ülke", "pays"], ["şehir", "ville"], ["yaşamak", "vivre, habiter"],
      ["öğrenci", "étudiant(e)"], ["öğretmen", "enseignant(e)"]
    ],
    quiz: [
      { q: "Comment dire « Je suis étudiant » ?", options: ["Öğrenciyim", "Öğrencisin", "Öğrenciyiz"], a: 0, why: "Avec ben, on ajoute -yim : öğrenci + yim = öğrenciyim." },
      { q: "Quelle question correspond à « Comment allez-vous ? » (vouvoiement) ?", options: ["Nasılsın?", "Nasılsınız?", "Nerelisiniz?"], a: 1, why: "Le vouvoiement ajoute -ınız : nasıl + sınız = nasılsınız." }
    ]
  },
  {
    id: "va1-3", level: "A1", num: 3,
    title: "Pluriel, pronoms et démonstratifs",
    tr: "Çoğul, zamirler ve işaret sıfatları",
    goal: "Dire « les », montrer un objet proche ou lointain et remplacer un nom par un pronom.",
    watch: "çoğul zamirler işaret",
    blocks: [
      { t: "p", text: "Le pluriel se forme avec <b>-ler</b> ou <b>-lar</b>, selon la dernière voyelle du mot : <tur>kitap → kitaplar</tur>, <tur>ev → evler</tur>, <tur>öğrenci → öğrenciler</tur>. Après un nombre, le nom reste au singulier : <tur>üç kitap</tur> (trois livres)." },
      { t: "table", caption: "Les pronoms personnels", head: ["Personne", "Pronom", "Sens"],
        rows: [
          ["1re sing.", "<tur>ben</tur>", "moi, je"],
          ["2e sing.", "<tur>sen</tur>", "toi, tu"],
          ["3e sing.", "<tur>o</tur>", "lui, elle"],
          ["1re plur.", "<tur>biz</tur>", "nous"],
          ["2e plur.", "<tur>siz</tur>", "vous"],
          ["3e plur.", "<tur>onlar</tur>", "eux, elles"]
        ] },
      { t: "table", caption: "Les démonstratifs", head: ["Singulier", "Pluriel", "Sens"],
        rows: [
          ["<tur>bu</tur>", "<tur>bunlar</tur>", "ceci / ceux-ci (proche)"],
          ["<tur>şu</tur>", "<tur>şunlar</tur>", "cela / ceux-là (un peu plus loin)"],
          ["<tur>o</tur>", "<tur>onlar</tur>", "cela / ceux-là (loin)"]
        ] },
      { t: "p", text: "Le démonstratif se place avant le nom : <tur>bu kitap</tur> (ce livre), <tur>şu çanta</tur> (ce sac), <tur>o araba</tur> (cette voiture là-bas). Au pluriel : <tur>bu kitaplar</tur>, <tur>şu çantalar</tur>, <tur>o arabalar</tur>." },
      { t: "ex", items: [
        { tr: "Bu kitaplar yeni.", fr: "Ces livres sont neufs." },
        { tr: "Şu çanta benim.", fr: "Ce sac est à moi." },
        { tr: "O öğrenciler nereden geliyor?", fr: "D'où viennent ces étudiants ?" },
        { tr: "Her gün Türkçe çalışıyorum.", fr: "J'étudie le turc tous les jours." }
      ] },
      { t: "note", kind: "info", tag: "Le double o", text: "<tur>O</tur> sert à la fois de pronom (« il / elle ») et de démonstratif éloigné (« ce / cette … là-bas »). C'est le contexte qui tranche : <tur>O öğretmen</tur> = « cet enseignant là-bas » ; <tur>O öğretmen.</tur> = « Il est enseignant. »" }
    ],
    vocab: [
      ["kitap", "livre"], ["çanta", "sac"], ["araba", "voiture"], ["ev", "maison"],
      ["masa", "table"], ["sandalye", "chaise"], ["yeni", "neuf, nouveau"],
      ["eski", "vieux, ancien"], ["her", "chaque"], ["bazı", "certains"]
    ],
    quiz: [
      { q: "Quel est le pluriel de « kitap » ?", options: ["kitapler", "kitaplar", "kitap"], a: 1, why: "La dernière voyelle de kitap est a : le pluriel est -lar, donc kitaplar." },
      { q: "Que signifie « şu çanta » ?", options: ["ce sac (proche)", "ce sac (un peu plus loin)", "ces sacs"], a: 1, why: "şu désigne un objet un peu éloigné ; bu est l'objet proche." }
    ]
  },
  {
    id: "va1-4", level: "A1", num: 4,
    title: "Poser les questions essentielles",
    tr: "Temel sorular",
    goal: "Demander qui, quoi, où, quand, pourquoi, comment et combien, puis répondre par oui ou non.",
    watch: "soru kelimeleri",
    blocks: [
      { t: "table", caption: "Les mots interrogatifs", head: ["Turc", "Français", "Exemple"],
        rows: [
          ["<tur>kim</tur>", "qui", "<tur>Bu kim?</tur> (Qui est-ce ?)"],
          ["<tur>ne</tur>", "quoi", "<tur>Ne yapıyorsun?</tur> (Que fais-tu ?)"],
          ["<tur>nerede</tur>", "où (état)", "<tur>Nerede oturuyorsun?</tur>"],
          ["<tur>nereye</tur>", "où (direction)", "<tur>Nereye gidiyorsun?</tur>"],
          ["<tur>nereden</tur>", "d'où", "<tur>Nereden geliyorsun?</tur>"],
          ["<tur>ne zaman</tur>", "quand", "<tur>Ne zaman geliyorsun?</tur>"],
          ["<tur>neden / niçin</tur>", "pourquoi", "<tur>Neden gelmiyorsun?</tur>"],
          ["<tur>nasıl</tur>", "comment", "<tur>Nasılsın?</tur>"],
          ["<tur>kaç</tur>", "combien", "<tur>Kaç kardeşin var?</tur>"],
          ["<tur>hangi</tur>", "quel(le)", "<tur>Hangi kitap?</tur>"]
        ] },
      { t: "p", text: "Pour une question fermée (oui / non), on ajoute la particule <b>mi</b> après le mot sur lequel porte la question. Elle s'écrit séparément et suit l'harmonie vocalique : <tur>mi, mı, mu, mü</tur>. <tur>Öğrenci misin?</tur> (Es-tu étudiant ?), <tur>Bu kitap mı?</tur> (C'est ce livre ?)." },
      { t: "p", text: "L'ordre habituel est sujet – compléments – verbe. Le mot interrogatif se place souvent juste avant le verbe : <tur>Ne yapıyorsun?</tur>, <tur>Nereye gidiyorsun?</tur>, <tur>Neden gelmiyorsun?</tur>." },
      { t: "ex", items: [
        { tr: "Adın ne?", fr: "Quel est ton nom ?" },
        { tr: "Nerede oturuyorsun?", fr: "Où habites-tu ?" },
        { tr: "Ne zaman geliyorsun?", fr: "Quand viens-tu ?" },
        { tr: "Nasılsın? — İyiyim, teşekkürler.", fr: "Comment vas-tu ? — Je vais bien, merci." }
      ] },
      { t: "note", kind: "tip", tag: "mi après un nom propre", text: "La particule s'accorde avec la dernière voyelle du mot précédent : <tur>Ali mi?</tur>, <tur>Ayşe mi?</tur>, <tur>öğrenci mi?</tur>. Elle ne se colle jamais au mot." }
    ],
    vocab: [
      ["kim", "qui"], ["ne", "quoi"], ["nerede", "où"], ["nereye", "vers où"],
      ["ne zaman", "quand"], ["neden", "pourquoi"], ["nasıl", "comment"],
      ["kaç", "combien"], ["hangi", "quel"], ["çünkü", "parce que"]
    ],
    quiz: [
      { q: "Quelle question signifie « Où habites-tu ? » ?", options: ["Nereye gidiyorsun?", "Nerede oturuyorsun?", "Nereden geliyorsun?"], a: 1, why: "Nerede indique le lieu où l'on est ; oturuyorsun vient de oturmak (habiter, s'asseoir)." },
      { q: "Comment demander « Es-tu étudiant ? » ?", options: ["Öğrenci mi?", "Öğrenci misin?", "Öğrenci ne?"], a: 1, why: "Avec sen, on ajoute -sin puis la particule mi : öğrenci misin?" }
    ]
  },
  {
    id: "va1-5", level: "A1", num: 5,
    title: "Situer : les cas du lieu",
    tr: "Bulunma, yönelme ve ayrılma",
    goal: "Dire où l'on est, où l'on va et d'où l'on vient avec -de, -e et -den.",
    watch: "bulunma yönelme ayrılma hali",
    blocks: [
      { t: "p", text: "Trois suffixes suffisent pour situer une action. Le <b>locatif</b> <tur>-da / -de</tur> indique où l'on est. Le <b>datif</b> <tur>-a / -e</tur> indique la destination. L'<b>ablatif</b> <tur>-dan / -den</tur> indique l'origine." },
      { t: "table", caption: "Les trois cas du lieu", head: ["Cas", "Suffixe", "ev (maison)", "okul (école)", "sokak (rue)"],
        rows: [
          ["Locatif", "<tur>-da / -de</tur>", "<tur>evde</tur>", "<tur>okulda</tur>", "<tur>sokakta</tur>"],
          ["Datif", "<tur>-a / -e</tur>", "<tur>eve</tur>", "<tur>okula</tur>", "<tur>sokağa</tur>"],
          ["Ablatif", "<tur>-dan / -den</tur>", "<tur>evden</tur>", "<tur>okuldan</tur>", "<tur>sokaktan</tur>"]
        ] },
      { t: "note", kind: "tip", tag: "Consonnes sourdes", text: "Après <b>p, ç, t, k, s, ş, f, h</b>, le d devient t : <tur>kitapta</tur>, <tur>sokakta</tur>, <tur>açtan</tur>. Après une voyelle, le datif ajoute un y de liaison : <tur>masa → masaya</tur>, <tur>araba → arabaya</tur>." },
      { t: "p", text: "Avec le locatif, <tur>var</tur> signifie « il y a » et <tur>yok</tur> « il n'y a pas » : <tur>Evde su var.</tur> (Il y a de l'eau à la maison.) <tur>Okulda kimse yok.</tur> (Il n'y a personne à l'école.)" },
      { t: "ex", items: [
        { tr: "Paris'te yaşıyorum.", fr: "J'habite à Paris." },
        { tr: "Okula gidiyorum.", fr: "Je vais à l'école." },
        { tr: "Marketten geliyorum.", fr: "Je reviens du marché." },
        { tr: "Kitap masada.", fr: "Le livre est sur la table." }
      ] }
    ],
    vocab: [
      ["ev", "maison"], ["okul", "école"], ["iş", "travail"], ["market", "supermarché"],
      ["şehir", "ville"], ["sokak", "rue"], ["masa", "table"], ["üstünde", "sur"],
      ["altında", "sous"], ["yanında", "à côté de"]
    ],
    quiz: [
      { q: "Quelle forme signifie « à l'école » (destination) ?", options: ["okulda", "okula", "okuldan"], a: 1, why: "La destination utilise le datif -a : okul + a = okula." },
      { q: "Comment dit-on « de la maison » ?", options: ["evde", "eve", "evden"], a: 2, why: "L'ablatif -den indique la provenance : ev + den = evden." }
    ]
  },
  {
    id: "va1-6", level: "A1", num: 6,
    title: "Nombres ordinaux et dates",
    tr: "Sıra sayıları ve tarihler",
    goal: "Dire premier, deuxième, troisième…, demander la date et parler de son anniversaire.",
    watch: "sıra sayıları",
    blocks: [
      { t: "p", text: "Pour former un nombre ordinal, on ajoute <b>-inci / -ıncı / -üncü / -uncu</b> selon la dernière voyelle. Le suffixe s'accorde avec le nombre : <tur>bir → birinci</tur>, <tur>iki → ikinci</tur>, <tur>üç → üçüncü</tur>, <tur>beş → beşinci</tur>." },
      { t: "table", caption: "Les dix premiers ordinaux", head: ["Nombre", "Ordinal", "Français"],
        rows: [
          ["<tur>bir</tur>", "<tur>birinci</tur>", "premier"],
          ["<tur>iki</tur>", "<tur>ikinci</tur>", "deuxième"],
          ["<tur>üç</tur>", "<tur>üçüncü</tur>", "troisième"],
          ["<tur>dört</tur>", "<tur>dördüncü</tur>", "quatrième"],
          ["<tur>beş</tur>", "<tur>beşinci</tur>", "cinquième"],
          ["<tur>altı</tur>", "<tur>altıncı</tur>", "sixième"],
          ["<tur>yedi</tur>", "<tur>yedinci</tur>", "septième"],
          ["<tur>sekiz</tur>", "<tur>sekizinci</tur>", "huitième"],
          ["<tur>dokuz</tur>", "<tur>dokuzuncu</tur>", "neuvième"],
          ["<tur>on</tur>", "<tur>onuncu</tur>", "dixième"]
        ] },
      { t: "note", kind: "tip", tag: "Attention à dört", text: "Le t final de <tur>dört</tur> devient <b>d</b> devant une voyelle : <tur>dördüncü</tur>. On retrouve la même alternance dans <tur>gitmek → gidiyorum</tur>." },
      { t: "p", text: "Pour la date, on dit le mois après le nombre : <tur>5 Mayıs</tur> (le 5 mai). « Quel jour du mois ? » se dit <tur>Ayın kaçında?</tur> et la réponse <tur>Ayın beşinde.</tur> (le cinq). Pour l'anniversaire : <tur>Doğum günün ne zaman?</tur> — <tur>12 Mart'ta.</tur>" },
      { t: "ex", items: [
        { tr: "İlk ders bugün.", fr: "Le premier cours, c'est aujourd'hui." },
        { tr: "İkinci katta oturuyorum.", fr: "J'habite au deuxième étage." },
        { tr: "Doğum günün ne zaman? — 12 Mart'ta.", fr: "C'est quand, ton anniversaire ? — Le 12 mars." },
        { tr: "Sınav ayın kaçında?", fr: "Le contrôle est le combien du mois ?" }
      ] },
      { t: "note", kind: "info", tag: "Vocabulaire utile", text: "<tur>ilk</tur> = premier (dans une série), <tur>son</tur> = dernier, <tur>sonuncu</tur> = le dernier (ordinal), <tur>kaçıncı</tur> = quel rang. <tur>İlk kez</tur> signifie « pour la première fois »." }
    ],
    vocab: [
      ["birinci", "premier"], ["ikinci", "deuxième"], ["üçüncü", "troisième"],
      ["dördüncü", "quatrième"], ["beşinci", "cinquième"], ["son", "dernier"],
      ["ilk", "premier"], ["doğum günü", "anniversaire"], ["tarih", "date"], ["ay", "mois"]
    ],
    quiz: [
      { q: "Quel est l'ordinal de « dört » ?", options: ["dörtüncü", "dördüncü", "dörtünci"], a: 1, why: "dört perd son t final devant la voyelle et prend ü : dördüncü." },
      { q: "Que signifie « Ayın kaçında? » ?", options: ["Quel jour sommes-nous ?", "Le combien du mois ?", "Quel mois ?"], a: 1, why: "Ayın kaçında demande la date précise : le combien du mois." }
    ]
  },
  {
    id: "va1-7", level: "A1", num: 7,
    title: "Le présent continu : -yor",
    tr: "Şimdiki zaman",
    goal: "Décrire ce qui se passe maintenant, poser la question et former la négation.",
    watch: "şimdiki zaman",
    blocks: [
      { t: "p", text: "On retire <b>-mek / -mak</b> de l'infinitif, on ajoute <b>-yor</b>, puis la marque de personne. <tur>gelmek → geliyor</tur>. La voyelle qui précède -yor dépend de l'harmonie vocalique : <tur>yap-ı-yor</tur>, <tur>gel-i-yor</tur>, <tur>oku-yor</tur>." },
      { t: "table", caption: "gelmek (venir) au présent continu", head: ["Personne", "Forme", "Sens"],
        rows: [
          ["ben", "<tur>geliyorum</tur>", "je viens"],
          ["sen", "<tur>geliyorsun</tur>", "tu viens"],
          ["o", "<tur>geliyor</tur>", "il / elle vient"],
          ["biz", "<tur>geliyoruz</tur>", "nous venons"],
          ["siz", "<tur>geliyorsunuz</tur>", "vous venez"],
          ["onlar", "<tur>geliyorlar</tur>", "ils / elles viennent"]
        ] },
      { t: "note", kind: "tip", tag: "Radicaux irréguliers", text: "Quelques verbes changent de radical : <tur>gitmek → gidiyorum</tur>, <tur>etmek → ediyorum</tur>, <tur>yemek → yiyorum</tur>. Le t final devient d devant la voyelle, et le e de yemek devient i." },
      { t: "p", text: "La négation se place avant -yor : <tur>gelmiyorum</tur> (je ne viens pas), <tur>çalışmıyorum</tur> (je ne travaille pas). Pour la question, on ajoute <tur>mu / mü</tur> : <tur>Geliyor musun?</tur> (Tu viens ?), <tur>Çalışıyor musunuz?</tur>." },
      { t: "ex", items: [
        { tr: "Şimdi ne yapıyorsun?", fr: "Que fais-tu maintenant ?" },
        { tr: "Ders çalışıyorum.", fr: "J'étudie." },
        { tr: "Annem çay içiyor.", fr: "Ma mère boit du thé." },
        { tr: "Bugün çalışmıyorum.", fr: "Aujourd'hui, je ne travaille pas." }
      ] }
    ],
    vocab: [
      ["şimdi", "maintenant"], ["bugün", "aujourd'hui"], ["çalışmak", "travailler, étudier"],
      ["okumak", "lire"], ["yazmak", "écrire"], ["içmek", "boire"],
      ["yemek", "manger"], ["gitmek", "aller"], ["gelmek", "venir"], ["yapmak", "faire"]
    ],
    quiz: [
      { q: "Quelle est la forme correcte de « je lis » ?", options: ["okuyorum", "okuyorsun", "okuyoruz"], a: 0, why: "La première personne du présent continu est -yorum : oku + yorum." },
      { q: "Comment dit-on « Je ne fais pas » ?", options: ["yapmıyorum", "yapıyorum", "yapmıyor"], a: 0, why: "La négation -mı/-mi/-mu/-mü s'insère avant -yor : yap-mı-yor-um." }
    ]
  },
  {
    id: "va1-8", level: "A1", num: 8,
    title: "De… à… : -dan -e kadar",
    tr: "-dan -e kadar",
    goal: "Exprimer un trajet, une durée ou une limite avec « de… à… / jusqu'à ».",
    watch: "-dan -e kadar",
    blocks: [
      { t: "p", text: "La structure <b>-dan / -den … -a / -e kadar</b> signifie « de … à … » ou « jusqu'à … ». Le premier nom prend l'ablatif, le second le datif, et <tur>kadar</tur> ferme le groupe : <tur>evden okula kadar</tur> (de la maison à l'école)." },
      { t: "table", caption: "Trois emplois de kadar", head: ["Structure", "Exemple", "Sens"],
        rows: [
          ["Lieu", "<tur>Karaköyden Taksime kadar yürüdüm.</tur>", "J'ai marché de Karaköy à Taksim."],
          ["Temps", "<tur>Dokuzdan beşe kadar çalışıyorum.</tur>", "Je travaille de neuf heures à cinq heures."],
          ["Limite", "<tur>Akşama kadar bekledim.</tur>", "J'ai attendu jusqu'au soir."]
        ] },
      { t: "note", kind: "tip", tag: "Harmonie et consonnes", text: "Les suffixes suivent la dernière voyelle : <tur>evden eve kadar</tur>, <tur>okuldan okula kadar</tur>. Après une consonne sourde, <b>d</b> devient <b>t</b> : <tur>sabahtan akşama kadar</tur>." },
      { t: "p", text: "On peut aussi exprimer la distance : <tur>Evden okula kadar kaç kilometre?</tur> (Combien de kilomètres de la maison à l'école ?). Et la limite temporelle : <tur>Yarına kadar vaktim var.</tur> (J'ai du temps jusqu'à demain.)" },
      { t: "ex", items: [
        { tr: "Evden okula kadar yürüyorum.", fr: "Je marche de la maison à l'école." },
        { tr: "Sabah dokuzdan akşam beşe kadar çalışıyorum.", fr: "Je travaille de 9 h à 17 h." },
        { tr: "Taksime kadar metroyla gidiyorum.", fr: "Je vais jusqu'à Taksim en métro." },
        { tr: "Yarına kadar bekleyelim.", fr: "Attendons jusqu'à demain." }
      ] },
      { t: "note", kind: "info", tag: "Aussi « autant que »", text: "<tur>Kadar</tur> peut signifier « autant que » : <tur>Senin kadar çalışıyorum.</tur> (Je travaille autant que toi.) Le contexte indique s'il s'agit d'une limite ou d'une comparaison." }
    ],
    vocab: [
      ["kadar", "jusqu'à, autant que"], ["sabah", "matin"], ["akşam", "soir"],
      ["saat", "heure"], ["dakika", "minute"], ["yol", "chemin, route"],
      ["yürümek", "marcher"], ["gitmek", "aller"], ["gelmek", "venir"], ["uzak", "loin"]
    ],
    quiz: [
      { q: "Comment dit-on « de l'école à la maison » ?", options: ["okulda eve kadar", "okuldan eve kadar", "okula evden kadar"], a: 1, why: "Le point de départ prend l'ablatif -dan : okuldan ; l'arrivée prend le datif : eve." },
      { q: "Que signifie « sabah dokuzdan akşam beşe kadar » ?", options: ["De 9 h du matin à 5 h du soir", "À 9 h et à 5 h", "Depuis 9 h seulement"], a: 0, why: "La structure -dan … -e kadar exprime l'intervalle complet, de 9 h à 17 h." }
    ]
  },
  {
    id: "va1-9", level: "A1", num: 9,
    title: "Possession et var / yok",
    tr: "İyelik ve var / yok",
    goal: "Dire ce qui est à moi, à toi, à lui, et exprimer « il y a » ou « je n'ai pas ».",
    watch: "iyelik var yok",
    blocks: [
      { t: "p", text: "La possession se marque par un suffixe collé au nom : <tur>evim</tur> (ma maison), <tur>evin</tur> (ta maison), <tur>evi</tur> (sa maison). On peut renforcer avec le pronom au génitif : <tur>benim evim</tur>, <tur>senin evin</tur>." },
      { t: "table", caption: "Les suffixes possessifs avec ev (maison)", head: ["Personne", "Forme", "Sens"],
        rows: [
          ["benim", "<tur>evim</tur>", "ma maison"],
          ["senin", "<tur>evin</tur>", "ta maison"],
          ["onun", "<tur>evi</tur>", "sa maison"],
          ["bizim", "<tur>evimiz</tur>", "notre maison"],
          ["sizin", "<tur>eviniz</tur>", "votre maison"],
          ["onların", "<tur>evleri</tur>", "leur maison"]
        ] },
      { t: "note", kind: "tip", tag: "Le s de liaison", text: "Après une voyelle, la 3e personne ajoute un <b>s</b> : <tur>araba → arabası</tur> (sa voiture), <tur>çanta → çantası</tur>. Après une consonne, le suffixe est simplement <tur>-i / -ı / -u / -ü</tur> : <tur>kitap → kitabı</tur>." },
      { t: "p", text: "<tur>Var</tur> signifie « il y a / j'ai », <tur>yok</tur> « il n'y a pas / je n'ai pas ». Avec un possessif, cela devient « avoir » : <tur>Bir kardeşim var.</tur> (J'ai un frère.) <tur>Param yok.</tur> (Je n'ai pas d'argent.)" },
      { t: "ex", items: [
        { tr: "Benim adım Ali.", fr: "Mon nom est Ali." },
        { tr: "Onun iki kardeşi var.", fr: "Il a deux frères et sœurs." },
        { tr: "Bizim evimiz küçük.", fr: "Notre maison est petite." },
        { tr: "Sizin arabanız var mı?", fr: "Avez-vous une voiture ?" }
      ] },
      { t: "note", kind: "info", tag: "Noms composés", text: "Dans un nom composé, le premier nom reste nu et le second prend le possessif de 3e personne : <tur>okul çantası</tur> (cartable, littéralement « le sac de l'école »), <tur>Türkçe kitabı</tur> (livre de turc), <tur>mutfak masası</tur> (table de cuisine)." }
    ],
    vocab: [
      ["ev", "maison"], ["araba", "voiture"], ["kardeş", "frère ou sœur"],
      ["anne", "mère"], ["baba", "père"], ["çanta", "sac"],
      ["para", "argent"], ["var", "il y a, j'ai"], ["yok", "il n'y a pas"],
      ["aile", "famille"]
    ],
    quiz: [
      { q: "Comment dit-on « ma maison » ?", options: ["evim", "evin", "evi"], a: 0, why: "La première personne du singulier ajoute -im : ev + im = evim." },
      { q: "Que signifie « Param yok » ?", options: ["J'ai de l'argent", "Je n'ai pas d'argent", "Il y a de l'argent"], a: 1, why: "yok exprime l'absence ; para (argent) + m (possessif) + yok = je n'ai pas d'argent." }
    ]
  }
];
