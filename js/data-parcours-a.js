/* ============================================================
   Türkçe Akademi : Parcours guidé, unités 1 à 9
   Contenu original rédigé pour le site (programme A1 → A2).
   ============================================================ */

const PARCOURS_A = [
  {
    id: "u1", num: 1, level: "A1", title: "Premiers contacts",
    goal: "Saluer, se présenter, dire sa nationalité, sa ville et son métier.",
    blocks: [
      { t: "p", text: "En turc, le verbe « être » ne se conjugue pas au présent : des suffixes se collent directement au nom ou à l'adjectif. <tur>Öğretmenim</tur> signifie donc « je suis enseignant » (ou « mon enseignant », selon le contexte)." },
      { t: "table", caption: "Le présent de « être » avec öğretmen (enseignant)", head: ["Personne", "Forme", "Sens"],
        rows: [
          ["ben", "<tur>öğretmenim</tur>", "je suis enseignant(e)"],
          ["sen", "<tur>öğretmensin</tur>", "tu es enseignant(e)"],
          ["o", "<tur>öğretmen</tur>", "il / elle est enseignant(e)"],
          ["biz", "<tur>öğretmeniz</tur>", "nous sommes enseignant(e)s"],
          ["siz", "<tur>öğretmensiniz</tur>", "vous êtes enseignant(e)(s)"],
          ["onlar", "<tur>öğretmenler</tur>", "ils / elles sont enseignant(e)s"]
        ] },
      { t: "p", text: "Le pluriel des noms se forme avec <b>-ler</b> ou <b>-lar</b> selon la dernière voyelle : <tur>öğrenci → öğrenciler</tur>, <tur>kitap → kitaplar</tur>. L'article indéfini « un / une » se dit <tur>bir</tur>." },
      { t: "table", caption: "Les questions de présentation", head: ["Question", "Réponse modèle"],
        rows: [
          ["<tur>Adınız ne?</tur>", "<tur>Benim adım Ali.</tur>"],
          ["<tur>Nerelisiniz?</tur>", "<tur>Ben Fransızım.</tur>"],
          ["<tur>Nerede oturuyorsunuz?</tur>", "<tur>Paris'te oturuyorum.</tur>"],
          ["<tur>Ne iş yapıyorsunuz?</tur>", "<tur>Ben öğrenciyim.</tur>"]
        ] },
      { t: "ex", items: [
        { tr: "Merhaba, benim adım Ayşe.", fr: "Bonjour, je m'appelle Ayşe." },
        { tr: "Ben Türküm, ama Fransa'da yaşıyorum.", fr: "Je suis turque, mais je vis en France." },
        { tr: "Siz nerelisiniz?", fr: "D'où êtes-vous ?" },
        { tr: "Ben öğrenciyim, o öğretmen.", fr: "Je suis étudiant, il est enseignant." }
      ] },
      { t: "note", kind: "tip", tag: "Politesse", text: "Utilise <b>sen</b> avec les amis, la famille et les enfants ; <b>siz</b> avec les inconnus, les aînés et dans un contexte professionnel. Le pluriel de politesse prend les mêmes terminaisons que « vous »." }
    ],
    vocab: [
      ["merhaba", "bonjour"], ["günaydın", "bonjour (le matin)"], ["ad", "nom"], ["soyad", "nom de famille"],
      ["ülke", "pays"], ["şehir", "ville"], ["oturmak", "habiter"], ["iş", "travail, métier"],
      ["öğrenci", "étudiant"], ["öğretmen", "enseignant"]
    ],
    quiz: [
      { q: "Comment dire « Je suis étudiant » ?", options: ["Öğrenciyim", "Öğrencisin", "Öğrenciyiz"], a: 0, why: "Avec ben, on ajoute -yim : öğrenci + yim = öğrenciyim." },
      { q: "Quelle forme correspond à « vous êtes » (poli) ?", options: ["öğretmensin", "öğretmensiniz", "öğretmenler"], a: 1, why: "La deuxième personne du pluriel de politesse prend -siniz." }
    ]
  },
  {
    id: "u2", num: 2, level: "A1", title: "L'instant présent",
    goal: "Décrire ce qui se passe maintenant et utiliser le présent continu.",
    blocks: [
      { t: "p", text: "L'infinitif se termine par <b>-mek</b> ou <b>-mak</b> : <tur>gelmek</tur> (venir), <tur>yapmak</tur> (faire). Pour le présent continu, on retire cette terminaison et on ajoute <b>-yor</b>, puis la marque de personne." },
      { t: "table", caption: "yapmak (faire) au présent continu", head: ["Personne", "Forme", "Sens"],
        rows: [
          ["ben", "<tur>yapıyorum</tur>", "je fais"],
          ["sen", "<tur>yapıyorsun</tur>", "tu fais"],
          ["o", "<tur>yapıyor</tur>", "il / elle fait"],
          ["biz", "<tur>yapıyoruz</tur>", "nous faisons"],
          ["siz", "<tur>yapıyorsunuz</tur>", "vous faites"],
          ["onlar", "<tur>yapıyorlar</tur>", "ils / elles font"]
        ] },
      { t: "note", kind: "info", tag: "Négation et question", text: "La négation se place avant -yor : <tur>yapmıyorum</tur> (je ne fais pas). Pour interroger, on ajoute <tur>mu / mü</tur> après le verbe : <tur>Yapıyor musun?</tur> (Tu fais ?)." },
      { t: "ex", items: [
        { tr: "Şimdi ne yapıyorsun?", fr: "Que fais-tu maintenant ?" },
        { tr: "Şu anda kitap okuyorum.", fr: "En ce moment, je lis un livre." },
        { tr: "Ali çay içiyor, biz ders çalışıyoruz.", fr: "Ali boit du thé, nous étudions." },
        { tr: "Annem telefonda konuşuyor.", fr: "Ma mère parle au téléphone." }
      ] },
      { t: "note", kind: "tip", tag: "Pièges", text: "Certains verbes modifient leur racine : <tur>gitmek → gidiyorum</tur>, <tur>yemek → yiyorum</tur>, <tur>içmek → içiyorum</tur>. Apprends ces formes avec l'usage plutôt qu'en les isolant." }
    ],
    vocab: [
      ["şimdi", "maintenant"], ["şu anda", "en ce moment"], ["okumak", "lire"], ["yazmak", "écrire"],
      ["çalışmak", "travailler, étudier"], ["izlemek", "regarder"], ["dinlemek", "écouter"],
      ["konuşmak", "parler"], ["içmek", "boire"], ["uyumak", "dormir"]
    ],
    quiz: [
      { q: "Quelle est la forme correcte de « je lis » ?", options: ["okuyorum", "okuyorsun", "okuyoruz"], a: 0, why: "La première personne du présent continu est -yorum : oku + yorum." },
      { q: "Comment dit-on « Je ne fais pas » ?", options: ["yapmıyorum", "yapıyorum", "yapmıyor"], a: 0, why: "La négation -mı/-mi/-mu/-mü s'insère avant -yor : yap-mı-yor-um." }
    ]
  },
  {
    id: "u3", num: 3, level: "A1", title: "Faire ses courses",
    goal: "Utiliser les cas du lieu, demander un prix et dire l'heure.",
    blocks: [
      { t: "p", text: "Trois suffixes suffisent pour situer une action : le <b>datif</b> indique la destination (« vers, à »), le <b>locatif</b> le lieu où l'on est, et l'<b>ablatif</b> l'origine (« de, depuis »). Ils suivent l'harmonie vocalique." },
      { t: "table", caption: "Les trois cas du lieu", head: ["Cas", "Suffixe", "okul (école)", "ev (maison)", "sokak (rue)"],
        rows: [
          ["Datif", "-(y)a / -(y)e", "<tur>okula</tur>", "<tur>eve</tur>", "<tur>sokağa</tur>"],
          ["Locatif", "-da / -de (-ta / -te)", "<tur>okulda</tur>", "<tur>evde</tur>", "<tur>sokakta</tur>"],
          ["Ablatif", "-dan / -den (-tan / -ten)", "<tur>okuldan</tur>", "<tur>evden</tur>", "<tur>sokaktan</tur>"]
        ] },
      { t: "note", kind: "tip", tag: "Consonnes sourdes", text: "Après <b>p, ç, t, k, s, ş, f, h</b>, le d devient t : <tur>sokakta</tur>, <tur>kitapta</tur>. Et après une voyelle, le datif prend un y de liaison : <tur>masa → masaya</tur>." },
      { t: "p", text: "Pour demander l'heure : <tur>Saat kaç?</tur> (Quelle heure est-il ?). Réponses utiles : <tur>Saat üç.</tur> (3 h), <tur>Üç buçuk.</tur> (3 h 30), <tur>Üçü çeyrek geçiyor.</tur> (3 h 15), <tur>Üçe çeyrek var.</tur> (2 h 45)." },
      { t: "ex", items: [
        { tr: "Okula gidiyorum.", fr: "Je vais à l'école." },
        { tr: "Marketten ekmek alıyorum.", fr: "J'achète du pain au marché." },
        { tr: "Kütüphanede çalışıyorum.", fr: "Je travaille à la bibliothèque." },
        { tr: "Saat kaç? — Saat beş.", fr: "Quelle heure est-il ? — Cinq heures." }
      ] },
      { t: "note", kind: "info", tag: "Calendrier", text: "Les jours et les mois sont regroupés dans la page <a href=\"essentiel.html\">Essentiel</a> pour que tu puisses les réviser en une seule fois." }
    ],
    vocab: [
      ["alışveriş", "courses"], ["market", "supermarché"], ["ekmek", "pain"], ["süt", "lait"],
      ["para", "argent"], ["pazar", "marché ; dimanche"], ["saat", "heure, montre"], ["bugün", "aujourd'hui"],
      ["yarın", "demain"], ["dün", "hier"]
    ],
    quiz: [
      { q: "Quelle forme signifie « à l'école » (destination) ?", options: ["okulda", "okula", "okuldan"], a: 1, why: "La destination utilise le datif -a : okul + a = okula." },
      { q: "Comment dit-on « de la maison » ?", options: ["evde", "eve", "evden"], a: 2, why: "L'ablatif -den indique la provenance : ev + den = evden." }
    ]
  },
  {
    id: "u4", num: 4, level: "A1", title: "Décrire et s'orienter",
    goal: "Employer les adjectifs, les couleurs, l'impératif et les indications de direction.",
    blocks: [
      { t: "p", text: "Les titres se placent après le prénom : <tur>Ali Bey</tur> (M. Ali), <tur>Ayşe Hanım</tur> (Mme Ayşe). Les adverbes de fréquence se placent généralement avant le verbe : <tur>her zaman</tur> (toujours), <tur>genellikle</tur> (généralement), <tur>sık sık</tur> (souvent), <tur>bazen</tur> (parfois), <tur>hiç</tur> (jamais)." },
      { t: "table", caption: "L'impératif", head: ["Infinitif", "Tutoiement", "Vouvoiement", "Négatif poli"],
        rows: [
          ["<tur>gelmek</tur>", "<tur>gel</tur>", "<tur>gelin</tur>", "<tur>gelmeyin</tur>"],
          ["<tur>gitmek</tur>", "<tur>git</tur>", "<tur>gidin</tur>", "<tur>gitmeyin</tur>"],
          ["<tur>okumak</tur>", "<tur>oku</tur>", "<tur>okuyun</tur>", "<tur>okumayın</tur>"]
        ] },
      { t: "table", caption: "Adjectifs et couleurs utiles", head: ["Turc", "Français", "Contraire"],
        rows: [
          ["<tur>büyük</tur>", "grand", "<tur>küçük</tur>"],
          ["<tur>yeni</tur>", "neuf, nouveau", "<tur>eski</tur>"],
          ["<tur>pahalı</tur>", "cher", "<tur>ucuz</tur>"],
          ["<tur>kırmızı</tur>", "rouge", "<tur>mavi</tur> (bleu)"]
        ] },
      { t: "ex", items: [
        { tr: "Kırmızı arabayı görüyor musun?", fr: "Vois-tu la voiture rouge ?" },
        { tr: "Sağa dönün ve düz gidin.", fr: "Tournez à droite et allez tout droit." },
        { tr: "Her gün yürüyorum.", fr: "Je marche tous les jours." },
        { tr: "Bu çanta çok pahalı.", fr: "Ce sac est très cher." }
      ] },
      { t: "note", kind: "tip", tag: "Créer un adjectif", text: "Le suffixe <b>-lı/-li</b> signifie « avec » : <tur>tuz → tuzlu</tur> (salé). Le suffixe <b>-sız/-siz</b> signifie « sans » : <tur>tuzsuz</tur> (sans sel), <tur>renksiz</tur> (sans couleur)." }
    ],
    vocab: [
      ["renk", "couleur"], ["kırmızı", "rouge"], ["mavi", "bleu"], ["yeşil", "vert"],
      ["büyük", "grand"], ["küçük", "petit"], ["pahalı", "cher"], ["ucuz", "bon marché"],
      ["sağ", "droite"], ["sol", "gauche"]
    ],
    quiz: [
      { q: "Quel est l'impératif poli de « aller » ?", options: ["git", "gidin", "gitmeyin"], a: 1, why: "Le vouvoiement de l'impératif ajoute -in : git + in = gidin." },
      { q: "Que signifie « tuzsuz » ?", options: ["salé", "sans sel", "très salé"], a: 1, why: "Le suffixe -sız/-siz exprime l'absence : tuz (sel) + suz = sans sel." }
    ]
  },
  {
    id: "u5", num: 5, level: "A2", title: "Raconter le passé",
    goal: "Employer le passé -di, raconter ses souvenirs et situer les événements.",
    blocks: [
      { t: "p", text: "Le passé simple se forme avec <b>-di / -dı / -du / -dü</b>, choisi selon la dernière voyelle. Après une consonne sourde, le d devient t : <tur>git-ti-m</tur>." },
      { t: "table", caption: "Le passé de gelmek et gitmek", head: ["Personne", "gelmek (venir)", "gitmek (aller)"],
        rows: [
          ["ben", "<tur>geldim</tur>", "<tur>gittim</tur>"],
          ["sen", "<tur>geldin</tur>", "<tur>gittin</tur>"],
          ["o", "<tur>geldi</tur>", "<tur>gitti</tur>"],
          ["biz", "<tur>geldik</tur>", "<tur>gittik</tur>"],
          ["siz", "<tur>geldiniz</tur>", "<tur>gittiniz</tur>"],
          ["onlar", "<tur>geldiler</tur>", "<tur>gittiler</tur>"]
        ] },
      { t: "note", kind: "info", tag: "Négation et question", text: "Négatif : <tur>gelmedim</tur> (je ne suis pas venu). Question : <tur>geldin mi?</tur> (Es-tu venu ?). Le mot <tur>mi</tur> reste séparé et s'harmonise : <tur>gitti mi?</tur>." },
      { t: "table", caption: "Le passé de « être » : -ydi", head: ["Personne", "hasta (malade)", "evde (à la maison)"],
        rows: [
          ["ben", "<tur>hastaydım</tur>", "<tur>evdeydim</tur>"],
          ["sen", "<tur>hastaydın</tur>", "<tur>evdeydin</tur>"],
          ["o", "<tur>hastaydı</tur>", "<tur>evdeydi</tur>"],
          ["biz", "<tur>hastaydık</tur>", "<tur>evdeydik</tur>"]
        ] },
      { t: "ex", items: [
        { tr: "Dün sinemaya gittim.", fr: "Hier, je suis allé au cinéma." },
        { tr: "Geçen yaz Türkiye'ye gittik.", fr: "L'été dernier, nous sommes allés en Turquie." },
        { tr: "Hava çok güzeldi.", fr: "Il faisait très beau." },
        { tr: "Hiç Türkçe konuştun mu?", fr: "As-tu déjà parlé turc ?" }
      ] },
      { t: "note", kind: "tip", tag: "Repères de temps", text: "<tur>dün</tur> (hier), <tur>geçen hafta</tur> (la semaine dernière), <tur>geçen yaz</tur> (l'été dernier), <tur>iki gün önce</tur> (il y a deux jours), <tur>2019'da</tur> (en 2019)." }
    ],
    vocab: [
      ["dün", "hier"], ["geçen", "dernier, passé"], ["önce", "avant, il y a"], ["sonra", "après"],
      ["sinema", "cinéma"], ["tatil", "vacances"], ["gezmek", "se promener, visiter"],
      ["kalmak", "rester, séjourner"], ["dönmek", "revenir, rentrer"], ["görmek", "voir"]
    ],
    quiz: [
      { q: "Comment dit-on « je suis allé » ?", options: ["gittim", "geldim", "gidiyorum"], a: 0, why: "Aller au passé : git- + -ti- + -m = gittim (assimilation du d en t)." },
      { q: "Quelle est la forme passée de « güzel » avec « il » ?", options: ["güzeldi", "güzelmiş", "güzel"], a: 0, why: "Le passé de « être » ajoute -ydi : güzel + di = güzeldi." }
    ]
  },
  {
    id: "u6", num: 6, level: "A2", title: "Proposer et commander",
    goal: "Faire une proposition, offrir son aide et commander au restaurant.",
    blocks: [
      { t: "p", text: "Le <b>volontaire</b> (optatif) sert à proposer : <b>-eyim / -ayım</b> pour « je », <b>-elim / -alım</b> pour « nous ». On l'utilise aussi pour offrir son aide : <tur>Yardım edeyim mi?</tur> (Puis-je aider ?)." },
      { t: "table", caption: "Proposer et offrir", head: ["Forme", "Sens"],
        rows: [
          ["<tur>Geleyim.</tur>", "Je viens (volontiers)."],
          ["<tur>Gelelim.</tur>", "Venons."],
          ["<tur>Bir çay içelim.</tur>", "Prenons un thé."],
          ["<tur>Yardım edeyim mi?</tur>", "Puis-je aider ?"],
          ["<tur>Ne yapayım?</tur>", "Que dois-je faire ?"]
        ] },
      { t: "p", text: "Au restaurant, quelques formules suffisent : <tur>Bir çorba lütfen.</tur> (Une soupe, s'il vous plaît.), <tur>Ne tavsiye edersiniz?</tur> (Que recommandez-vous ?), <tur>Hesap lütfen.</tur> (L'addition, s'il vous plaît.)." },
      { t: "ex", items: [
        { tr: "Akşam yemeğe gidelim.", fr: "Allons dîner ce soir." },
        { tr: "Bir kahve istiyorum.", fr: "Je voudrais un café." },
        { tr: "Bu yemek çok lezzetli.", fr: "Ce plat est très délicieux." },
        { tr: "Hesap lütfen.", fr: "L'addition, s'il vous plaît." }
      ] },
      { t: "note", kind: "tip", tag: "Quantités", text: "<tur>biraz</tur> (un peu), <tur>çok</tur> (beaucoup), <tur>az</tur> (peu), <tur>birkaç</tur> (quelques), <tur>her</tur> (chaque), <tur>bütün</tur> (tout). Exemple : <tur>Biraz su lütfen.</tur>" },
      { t: "note", kind: "info", tag: "Démonstratifs", text: "<tur>bu</tur> (ceci), <tur>şu</tur> (cela, un peu plus loin), <tur>o</tur> (cela, là-bas). Au pluriel : <tur>bunlar, şunlar, onlar</tur>." }
    ],
    vocab: [
      ["lokanta", "restaurant"], ["garson", "serveur"], ["menü", "menu"], ["hesap", "addition"],
      ["çorba", "soupe"], ["pilav", "riz"], ["tavuk", "poulet"], ["balık", "poisson"],
      ["lezzetli", "délicieux"], ["aç", "affamé"]
    ],
    quiz: [
      { q: "Comment proposer « mangeons ensemble » ?", options: ["Birlikte yemek yiyelim.", "Birlikte yemek yiyorum.", "Birlikte yemek yedin."], a: 0, why: "La première personne du pluriel du volontaire est -elim : yiyelim." },
      { q: "Que signifie « Yardım edeyim mi? »", options: ["Puis-je aider ?", "Tu m'aides ?", "Je n'aide pas."], a: 0, why: "Le volontaire -eyim + la question mi exprime une offre : « Puis-je aider ? »" }
    ]
  },
  {
    id: "u7", num: 7, level: "A2", title: "Possession et appartenance",
    goal: "Dire ce qui appartient à qui, former des noms composés et utiliser var / yok.",
    blocks: [
      { t: "p", text: "La possession se marque par un suffixe ajouté au nom possédé : <b>-(i)m, -(i)n, -(s)i, -(i)miz, -(i)niz, -leri</b>. Le possesseur peut être exprimé avant, mais le suffixe reste obligatoire." },
      { t: "table", caption: "ev (maison) avec les possessifs", head: ["Personne", "Forme", "Sens"],
        rows: [
          ["benim", "<tur>evim</tur>", "ma maison"],
          ["senin", "<tur>evin</tur>", "ta maison"],
          ["onun", "<tur>evi</tur>", "sa maison"],
          ["bizim", "<tur>evimiz</tur>", "notre maison"],
          ["sizin", "<tur>eviniz</tur>", "votre maison"],
          ["onların", "<tur>evleri</tur>", "leur maison"]
        ] },
      { t: "note", kind: "tip", tag: "Consonnes qui changent", text: "Quand un suffixe commençant par une voyelle s'ajoute, <b>p → b</b>, <b>ç → c</b>, <b>t → d</b>, <b>k → ğ</b> : <tur>kitap → kitabım</tur>, <tur>ağaç → ağacım</tur>, <tur>sokak → sokağım</tur>." },
      { t: "p", text: "Le nom composé relie deux noms : le premier prend le génitif <b>-(n)ın / -in / -un / -ün</b>, le second le possessif. <tur>Türkiye'nin başkenti</tur> (la capitale de la Turquie), <tur>kapı kolu</tur> (la poignée de porte)." },
      { t: "ex", items: [
        { tr: "Bu benim evim.", fr: "C'est ma maison." },
        { tr: "Kitabım masada.", fr: "Mon livre est sur la table." },
        { tr: "Ankara, Türkiye'nin başkentidir.", fr: "Ankara est la capitale de la Turquie." },
        { tr: "Bugün vaktim yok.", fr: "Je n'ai pas le temps aujourd'hui." }
      ] },
      { t: "note", kind: "info", tag: "var / yok", text: "<tur>var</tur> signifie « il y a / il possède », <tur>yok</tur> « il n'y a pas ». Exemples : <tur>Bir arabam var.</tur> (J'ai une voiture.), <tur>Zamanım yok.</tur> (Je n'ai pas le temps.)." }
    ],
    vocab: [
      ["ev", "maison"], ["araba", "voiture"], ["kitap", "livre"], ["masa", "table"],
      ["anahtar", "clé"], ["başkent", "capitale"], ["aile", "famille"], ["kendi", "soi-même"],
      ["vakit", "temps"], ["sahip", "propriétaire"]
    ],
    quiz: [
      { q: "Comment dit-on « mon livre » ?", options: ["kitapım", "kitabım", "kitabın"], a: 1, why: "Le p de kitap devient b devant le suffixe vocalique -ım : kitabım." },
      { q: "Comment dire « J'ai une voiture » ?", options: ["Bir arabam var.", "Bir arabam yok.", "Bir araba istiyorum."], a: 0, why: "La possession avec « avoir » se forme avec var : bir araba + m + var." }
    ]
  },
  {
    id: "u8", num: 8, level: "A2", title: "Parler du futur",
    goal: "Employer le futur -ecek, parler de la météo et des projets.",
    blocks: [
      { t: "p", text: "Le futur se forme avec <b>-ecek / -acak</b>, selon l'harmonie vocalique. À la première personne, le k devient ğ : <tur>geleceğim</tur>." },
      { t: "table", caption: "gelmek (venir) au futur", head: ["Personne", "Forme", "Sens"],
        rows: [
          ["ben", "<tur>geleceğim</tur>", "je viendrai"],
          ["sen", "<tur>geleceksin</tur>", "tu viendras"],
          ["o", "<tur>gelecek</tur>", "il / elle viendra"],
          ["biz", "<tur>geleceğiz</tur>", "nous viendrons"],
          ["siz", "<tur>geleceksiniz</tur>", "vous viendrez"],
          ["onlar", "<tur>gelecekler</tur>", "ils / elles viendront"]
        ] },
      { t: "note", kind: "info", tag: "Négation et question", text: "Négatif : <tur>gelmeyeceğim</tur> (je ne viendrai pas). Question : <tur>gelecek misin?</tur> (Viendras-tu ?)." },
      { t: "table", caption: "Météo et points cardinaux", head: ["Turc", "Français"],
        rows: [
          ["<tur>güneşli</tur>", "ensoleillé"], ["<tur>bulutlu</tur>", "nuageux"],
          ["<tur>yağmurlu</tur>", "pluvieux"], ["<tur>rüzgarlı</tur>", "venteux"],
          ["<tur>kuzey / güney</tur>", "nord / sud"], ["<tur>doğu / batı</tur>", "est / ouest"]
        ] },
      { t: "ex", items: [
        { tr: "Yarın İstanbul'a gideceğim.", fr: "Demain, j'irai à Istanbul." },
        { tr: "Hava yarın yağmurlu olacak.", fr: "Il pleuvra demain." },
        { tr: "Gelecek yaz Türkçe öğreneceğim.", fr: "L'été prochain, j'apprendrai le turc." },
        { tr: "Ne zaman döneceksin?", fr: "Quand reviendras-tu ?" }
      ] },
      { t: "note", kind: "tip", tag: "Repères du futur", text: "<tur>yarın</tur> (demain), <tur>gelecek hafta</tur> (la semaine prochaine), <tur>bir saat sonra</tur> (dans une heure), <tur>yakında</tur> (bientôt)." }
    ],
    vocab: [
      ["gelecek", "futur, prochain"], ["yarın", "demain"], ["hava", "temps, météo"], ["yağmur", "pluie"],
      ["kar", "neige"], ["güneş", "soleil"], ["rüzgar", "vent"], ["sıcak", "chaud"],
      ["soğuk", "froid"], ["dönmek", "revenir"]
    ],
    quiz: [
      { q: "Comment dit-on « j'irai » ?", options: ["gideceğim", "gidiyorum", "gittim"], a: 0, why: "Futur de gitmek à la première personne : git- + -ecek + -im, avec k → ğ : gideceğim." },
      { q: "Quelle phrase annonce « il pleuvra » ?", options: ["Yağmur yağacak.", "Yağmur yağıyor.", "Yağmur yağdı."], a: 0, why: "Le futur de yağmak est yağacak : « il pleuvra »." }
    ]
  },
  {
    id: "u9", num: 9, level: "A2", title: "L'objet défini",
    goal: "Employer l'accusatif, distinguer objet défini et indéfini, et placer les mots.",
    blocks: [
      { t: "p", text: "L'<b>accusatif</b> marque le complément d'objet direct quand celui-ci est défini (connu, précisé, déjà mentionné). Il se forme avec <b>-(y)ı / -i / -u / -ü</b>. Un objet indéfini reste sans suffixe." },
      { t: "table", caption: "Former l'accusatif", head: ["Mot", "Accusatif", "Sens"],
        rows: [
          ["<tur>ev</tur>", "<tur>evi</tur>", "la maison"],
          ["<tur>okul</tur>", "<tur>okulu</tur>", "l'école"],
          ["<tur>kitap</tur>", "<tur>kitabı</tur>", "le livre"],
          ["<tur>masa</tur>", "<tur>masayı</tur>", "la table"]
        ] },
      { t: "note", kind: "tip", tag: "Défini ou indéfini ?", text: "<tur>Kitabı okudum.</tur> = j'ai lu le livre (précis). <tur>Bir kitap okudum.</tur> = j'ai lu un livre. Le suffixe change le sens et l'attention du locuteur." },
      { t: "table", caption: "Pronoms objets", head: ["Sujet", "Objet", "Exemple"],
        rows: [
          ["ben", "<tur>beni</tur>", "<tur>Beni anlıyor musun?</tur>"],
          ["sen", "<tur>seni</tur>", "<tur>Seni dün gördüm.</tur>"],
          ["o", "<tur>onu</tur>", "<tur>Onu tanıyorum.</tur>"],
          ["biz", "<tur>bizi</tur>", "<tur>Bizi davet ettiler.</tur>"]
        ] },
      { t: "ex", items: [
        { tr: "Kitabı okudum.", fr: "J'ai lu le livre." },
        { tr: "Bir kitap okudum.", fr: "J'ai lu un livre." },
        { tr: "Beni anlıyor musun?", fr: "Me comprends-tu ?" },
        { tr: "Mehmet'e anahtarı verdim.", fr: "J'ai donné la clé à Mehmet." }
      ] },
      { t: "note", kind: "info", tag: "Ordre des mots", text: "L'ordre neutre est <b>Sujet – Objet – Verbe</b> (SOV). On peut déplacer un élément en tête pour le mettre en relief, mais le verbe reste généralement en fin de phrase." }
    ],
    vocab: [
      ["kitap", "livre"], ["anahtar", "clé"], ["hediye", "cadeau"], ["görmek", "voir"],
      ["vermek", "donner"], ["almak", "prendre, acheter"], ["anlamak", "comprendre"],
      ["unutmak", "oublier"], ["tanımak", "connaître"], ["davet etmek", "inviter"]
    ],
    quiz: [
      { q: "Comment dire « J'ai vu la maison » ?", options: ["Evi gördüm.", "Ev gördüm.", "Eve gördüm."], a: 0, why: "La maison est un objet défini : ev + i = evi, placé avant le verbe." },
      { q: "Quel est le pronom objet de « ben » ?", options: ["beni", "bana", "benim"], a: 0, why: "L'accusatif de ben est beni ; bana est le datif et benim le génitif." }
    ]
  }
];
