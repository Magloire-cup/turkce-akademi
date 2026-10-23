/* ============================================================
   Türkçe Akademi : Parcours guidé, unités 18 à 19
   Contenu original rédigé pour le site (niveau B1, situations concrètes).
   ============================================================ */

const PARCOURS_C = [
  {
    id: "u18", num: 18, level: "B1", title: "Chez le médecin",
    goal: "Décrire ses symptômes, comprendre les questions du médecin et suivre une ordonnance.",
    blocks: [
      { t: "p", text: "Pour dire où l'on a mal, la partie du corps se met au <b>possessif</b> et le verbe <b>ağrımak</b> reste à la 3e personne : <tur>başım ağrıyor</tur> (mot à mot : ma tête fait mal). Pour la fièvre, on utilise <tur>var</tur> : <tur>ateşim var</tur> (j'ai de la fièvre)." },
      { t: "table", caption: "Décrire ses symptômes", head: ["Français", "Turc", "Mot à mot"],
        rows: [
          ["J'ai mal à la tête", "<tur>Başım ağrıyor.</tur>", "ma tête fait mal"],
          ["J'ai mal au ventre", "<tur>Karnım ağrıyor.</tur>", "mon ventre fait mal"],
          ["J'ai mal à la gorge", "<tur>Boğazım ağrıyor.</tur>", "ma gorge fait mal"],
          ["J'ai de la fièvre", "<tur>Ateşim var.</tur>", "j'ai de la fièvre"],
          ["Je tousse", "<tur>Öksürüyorum.</tur>", "je tousse"],
          ["J'ai la nausée", "<tur>Midem bulanıyor.</tur>", "mon estomac se trouble"]
        ] },
      { t: "h", text: "Les questions du médecin" },
      { t: "table", caption: "Ce que le médecin demande", head: ["Question", "Traduction"],
        rows: [
          ["<tur>Neyiniz var?</tur>", "Qu'avez-vous ?"],
          ["<tur>Nerede ağrıyor?</tur>", "Où avez-vous mal ?"],
          ["<tur>Ne zamandan beri?</tur>", "Depuis quand ?"],
          ["<tur>Ateşiniz var mı?</tur>", "Avez-vous de la fièvre ?"],
          ["<tur>İlaçlara alerjiniz var mı?</tur>", "Êtes-vous allergique aux médicaments ?"],
          ["<tur>Daha önce ameliyat oldunuz mu?</tur>", "Avez-vous déjà été opéré ?"]
        ] },
      { t: "ex", items: [
        { tr: "Kendimi iyi hissetmiyorum, başım ağrıyor ve ateşim var.", fr: "Je ne me sens pas bien, j'ai mal à la tête et de la fièvre." },
        { tr: "Ne zamandan beri böyle? — Dünden beri.", fr: "Depuis quand êtes-vous comme ça ? — Depuis hier." },
        { tr: "İlaçlara alerjiniz var mı? — Hayır, yok.", fr: "Êtes-vous allergique aux médicaments ? — Non." },
        { tr: "Çok geçmiş olsun, umarım yakında iyileşirsiniz.", fr: "Bon rétablissement, j'espère que vous irez mieux bientôt." }
      ] },
      { t: "h", text: "Comprendre l'ordonnance" },
      { t: "table", caption: "Les consignes du médecin", head: ["Turc", "Sens"],
        rows: [
          ["<tur>Günde iki kez, tok karnına</tur>", "Deux fois par jour, après le repas"],
          ["<tur>Yemekten yarım saat önce</tur>", "Une demi-heure avant le repas"],
          ["<tur>Bol su için</tur>", "Buvez beaucoup d'eau"],
          ["<tur>Dinlenin, işe gitmeyin</tur>", "Reposez-vous, n'allez pas travailler"],
          ["<tur>Eğer geçmezse, tekrar gelin</tur>", "Si cela ne passe pas, revenez"]
        ] },
      { t: "p", text: "La consigne conditionnelle combine <b>-mezse</b> (si cela n'arrive pas) et l'impératif poli : <tur>Eğer ateşiniz geçmezse, yarın tekrar gelin.</tur> (Si votre fièvre ne passe pas, revenez demain.)." },
      { t: "note", kind: "info", tag: "Le réflexe possessif", text: "La partie du corps se met au possessif : <tur>baş-ım</tur>, <tur>karın-ım</tur>, <tur>boğaz-ım</tur>, <tur>diş-im</tur>. Le verbe <tur>ağrımak</tur> ne se conjugue pas avec « je » : on dit <tur>dişim ağrıyor</tur>, jamais <tur>ben ağrıyorum</tur>." },
      { t: "note", kind: "tip", tag: "Au cabinet", text: "<tur>Geçmiş olsun</tur> se dit à une personne malade ou après un accident. Réponse habituelle : <tur>Teşekkür ederim</tur> ou <tur>Sağ olun</tur>. Le vouvoiement est de rigueur avec le médecin : <tur>Neyiniz var?</tur>, pas <tur>Neyin var?</tur>." }
    ],
    vocab: [
      ["ağrımak", "avoir mal"], ["baş", "tête"], ["boğaz", "gorge"], ["ateş", "fièvre"],
      ["öksürmek", "tousser"], ["hissetmek", "se sentir"], ["ilaç", "médicament"],
      ["reçete", "ordonnance"], ["dinlenmek", "se reposer"], ["geçmek", "passer (douleur)"]
    ],
    quiz: [
      { q: "Comment dire « J'ai mal à la tête » ?", options: ["Başım ağrıyor", "Başım var", "Baş ağrıyorum"], a: 0, why: "La partie du corps prend le possessif et ağrımak reste à la 3e personne : başım ağrıyor." },
      { q: "Que signifie « Günde iki kez, yemekten sonra » ?", options: ["Deux fois par jour, après le repas", "Deux fois par semaine, avant le repas", "Une fois par jour, à jeun"], a: 0, why: "günde iki kez = deux fois par jour ; yemekten sonra = après le repas." }
    ]
  },
  {
    id: "u19", num: 19, level: "B1", title: "Au téléphone et à l'administration",
    goal: "Téléphoner, laisser un message et comprendre le registre formel des démarches.",
    blocks: [
      { t: "p", text: "Au téléphone, on décroche avec <tur>Alo</tur> ou <tur>Buyurun</tur> (je vous écoute). Pour demander quelqu'un : <tur>Kimi arıyorsunuz?</tur> (Qui appelez-vous ?). Si la personne est indisponible : <tur>Şu anda müsait değil.</tur> (Elle n'est pas disponible pour le moment.)." },
      { t: "table", caption: "Les phrases du téléphone", head: ["Turc", "Sens"],
        rows: [
          ["<tur>Alo, buyurun.</tur>", "Allô, je vous écoute."],
          ["<tur>Kimi arıyorsunuz?</tur>", "Qui appelez-vous ?"],
          ["<tur>Ali Bey'le görüşebilir miyim?</tur>", "Puis-je parler à M. Ali ?"],
          ["<tur>Bir dakika, lütfen.</tur>", "Un instant, s'il vous plaît."],
          ["<tur>Şu anda meşgul.</tur>", "Il est occupé pour le moment."],
          ["<tur>Mesaj bırakmak ister misiniz?</tur>", "Voulez-vous laisser un message ?"],
          ["<tur>Sizi tekrar arayabilir miyim?</tur>", "Puis-je vous rappeler ?"],
          ["<tur>Yanlış numara.</tur>", "Mauvais numéro."]
        ] },
      { t: "p", text: "À l'administration, le registre est plus soutenu. On ajoute souvent <b>-dır / -dir</b> pour énoncer un fait de façon neutre : <tur>Aradığınız numara yanlıştır.</tur> (Le numéro que vous avez appelé est erroné.), <tur>Randevunuz onaylanmıştır.</tur> (Votre rendez-vous est confirmé.)." },
      { t: "table", caption: "Le registre formel", head: ["Situation", "Formule polie"],
        rows: [
          ["Accueillir au téléphone", "<tur>Buyurun, nasıl yardımcı olabilirim?</tur>"],
          ["Annoncer une erreur de numéro", "<tur>Aradığınız numara yanlıştır.</tur>"],
          ["Demander de patienter", "<tur>Kısa bir süre bekler misiniz?</tur>"],
          ["Demander un document", "<tur>Kimlik belgenizi gösterebilir misiniz?</tur>"],
          ["Confirmer un rendez-vous", "<tur>Randevunuz onaylanmıştır.</tur>"],
          ["Prendre congé", "<tur>İyi günler dilerim.</tur>"]
        ] },
      { t: "p", text: "La demande polie se forme avec <b>-abilir misiniz?</b> : <tur>Mesajımı iletir misiniz?</tur> (Pourriez-vous transmettre mon message ?), <tur>Beni bağlayabilir misiniz?</tur> (Pourriez-vous me passer la personne ?), <tur>Biraz daha yavaş konuşabilir misiniz?</tur> (Pourriez-vous parler un peu plus lentement ?)." },
      { t: "ex", items: [
        { tr: "Alo, buyurun. — Merhaba, Ayşe Hanım'la görüşebilir miyim?", fr: "Allô, je vous écoute. — Bonjour, puis-je parler à Mme Ayşe ?" },
        { tr: "Şu anda toplantıda, mesaj bırakmak ister misiniz?", fr: "Elle est en réunion pour le moment, voulez-vous laisser un message ?" },
        { tr: "Aradığınız numara yanlıştır, lütfen kontrol ediniz.", fr: "Le numéro que vous avez appelé est erroné, veuillez vérifier." },
        { tr: "Kayıt için kimlik belgenizi gösterebilir misiniz?", fr: "Pour l'inscription, pourriez-vous montrer votre pièce d'identité ?" },
        { tr: "Biraz daha yavaş konuşabilir misiniz?", fr: "Pourriez-vous parler un peu plus lentement ?" }
      ] },
      { t: "note", kind: "tip", tag: "Bon réflexe", text: "Au téléphone, le turc préfère les formules courtes : <tur>Buyurun</tur> remplace « allô », et <tur>Bir dakika</tur> suffit pour demander d'attendre. Ne traduis pas mot à mot le français." },
      { t: "note", kind: "info", tag: "Un suffixe, deux usages", text: "<b>-dır</b> sert au registre administratif, mais il peut aussi exprimer une déduction : <tur>Şu anda evdedir.</tur> (Il est sûrement à la maison.). C'est le contexte qui décide." },
      { t: "note", kind: "warn", tag: "Rester poli", text: "<tur>Yanlış numara</tur> est correct mais sec. La formule complète <tur>Aradığınız numara yanlıştır, özür dilerim.</tur> est plus polie." },
      { t: "note", kind: "tip", tag: "Fin du parcours", text: "Tu as parcouru les 19 étapes ! Pour consolider, refais les mini-quiz, puis choisis un module de cours et une série de flashcards. La régularité vaut mieux que les sessions marathon." }
    ],
    vocab: [
      ["aramak", "appeler"], ["görüşmek", "parler (à quelqu'un)"], ["meşgul", "occupé"],
      ["mesaj", "message"], ["bırakmak", "laisser"], ["numara", "numéro"],
      ["yanlış", "faux, erroné"], ["belge", "document"], ["randevu", "rendez-vous"],
      ["onaylamak", "confirmer, approuver"]
    ],
    quiz: [
      { q: "Que répond-on en décrochant le téléphone ?", options: ["Buyurun", "Güle güle", "Geçmiş olsun"], a: 0, why: "Buyurun invite poliment l'interlocuteur à parler au téléphone ; güle güle sert à dire au revoir." },
      { q: "Que signifie « Aradığınız numara yanlıştır » ?", options: ["Le numéro que vous avez appelé est erroné", "Votre appel est en attente", "Le numéro est occupé"], a: 0, why: "yanlış = faux, erroné ; le suffixe -dır donne ici un ton administratif." }
    ]
  }
];
