/* ============================================================
   Türkçe Akademi — données EN générées depuis le français.
   Ne pas modifier à la main : relancer tools/locales.js build en.
   ============================================================ */

const GRAMMAR = [
  {
    "id": "alphabet",
    "title": "The Turkish alphabet & pronunciation",
    "level": "A1",
    "blocks": [
      {
        "t": "p",
        "text": "29 letters, all pronounceable, no exceptions: Turkish is written the way it is pronounced. The Latin alphabet dates from 1928 (Atatürk's reform). The letters q, w and x do not exist."
      },
      {
        "t": "table",
        "caption": "The « new » letters",
        "head": [
          "Letter",
          "Sound",
          "Example"
        ],
        "rows": [
          [
            "ç",
            "ch",
            "<tur>çay</tur> (tea)"
          ],
          [
            "ş",
            "sh",
            "<tur>şehir</tur> (city)"
          ],
          [
            "c",
            "j",
            "<tur>cam</tur> (glass)"
          ],
          [
            "j",
            "zh (rare)",
            "<tur>jilet</tur> (razor)"
          ],
          [
            "ğ",
            "lengthens the preceding vowel",
            "<tur>dağ</tur> (mountain) → « daa »"
          ],
          [
            "ı",
            "short, unrounded « uh »",
            "<tur>ışık</tur> (light)"
          ],
          [
            "ö",
            "French « eu »",
            "<tur>göz</tur> (eye)"
          ],
          [
            "ü",
            "French « u »",
            "<tur>gül</tur> (rose)"
          ]
        ]
      },
      {
        "t": "ul",
        "items": [
          "The <b>h</b> is always aspirated: <tur>hava</tur> (air).",
          "The <b>r</b> is slightly rolled.",
          "The stress falls on the <b>last syllable</b> (except in some cases: place names ending in -e).",
          "The capital form of ı is I; the capital form of i is İ. A classic trap!"
        ]
      }
    ]
  },
  {
    "id": "harmonie",
    "title": "Vowel harmony",
    "level": "A1",
    "blocks": [
      {
        "t": "p",
        "text": "The golden rule of Turkish: suffixes copy the vowels of the word. There are two harmonies."
      },
      {
        "t": "table",
        "caption": "The vowel families",
        "head": [
          "Back (dark)",
          "Front (light)"
        ],
        "rows": [
          [
            "a, ı, o, u",
            "e, i, ö, ü"
          ]
        ]
      },
      {
        "t": "h",
        "text": "Two-way harmony (a/e)"
      },
      {
        "t": "table",
        "caption": "Examples with the plural -ler/-lar",
        "head": [
          "Word",
          "Family",
          "Plural"
        ],
        "rows": [
          [
            "<tur>ev</tur>",
            "front (e)",
            "<tur>evler</tur>"
          ],
          [
            "<tur>masa</tur>",
            "back (a)",
            "<tur>masalar</tur>"
          ],
          [
            "<tur>göz</tur>",
            "front (ö)",
            "<tur>gözler</tur>"
          ]
        ]
      },
      {
        "t": "h",
        "text": "Four-way harmony (i/ı/ü/u)"
      },
      {
        "t": "table",
        "caption": "Examples with the accusative -i",
        "head": [
          "Last vowel",
          "Suffix",
          "Example"
        ],
        "rows": [
          [
            "e, i",
            "-i",
            "<tur>evi</tur> (the house)"
          ],
          [
            "a, ı",
            "-ı",
            "<tur>masayı</tur> (the table: with y)"
          ],
          [
            "ö, ü",
            "-ü",
            "<tur>gözü</tur> (the eye)"
          ],
          [
            "o, u",
            "-u",
            "<tur>okulu</tur> (the school)"
          ]
        ]
      },
      {
        "t": "note",
        "kind": "tip",
        "tag": "Method",
        "text": "Look only at the <b>last vowel</b> of the word, choose its family, then apply it. With a little practice, your ear will decide on its own."
      }
    ]
  },
  {
    "id": "agglutination",
    "title": "Agglutination: words built like Lego",
    "level": "A1",
    "blocks": [
      {
        "t": "p",
        "text": "Turkish expresses through <b>suffixes</b> what English expresses through function words. The stacking order is strict: plural → possessive → case."
      },
      {
        "t": "table",
        "caption": "Breaking down a complete word",
        "head": [
          "Step",
          "Word",
          "Meaning"
        ],
        "rows": [
          [
            "root",
            "<tur>ev</tur>",
            "house"
          ],
          [
            "+ plural",
            "<tur>evler</tur>",
            "the houses"
          ],
          [
            "+ possessive",
            "<tur>evlerim</tur>",
            "my houses"
          ],
          [
            "+ locative case",
            "<tur>evlerimde</tur>",
            "in my houses"
          ]
        ]
      },
      {
        "t": "p",
        "text": "The logic runs from the <b>most general to the most specific</b>: the object, then the quantity (<tur>-ler/-lar</tur>), then the possessor (<tur>-im</tur>…), then the function in the sentence (<tur>-de</tur>, <tur>-den</tur>…)."
      },
      {
        "t": "table",
        "caption": "The same root, three levels of precision",
        "head": [
          "Formula",
          "Word",
          "Meaning"
        ],
        "rows": [
          [
            "root + plural + locative",
            "<tur>evlerde</tur>",
            "in the houses"
          ],
          [
            "root + possessive + locative",
            "<tur>evimde</tur>",
            "in my house"
          ],
          [
            "root + plural + possessive + locative",
            "<tur>evlerimde</tur>",
            "in my houses"
          ]
        ]
      },
      {
        "t": "note",
        "kind": "info",
        "tag": "Two linked nouns",
        "text": "The <b>genitive</b> links two nouns: it goes on the <b>possessor</b>, while the <b>possessive</b> goes on the possessed noun. Example: <tur>evin kapısı</tur> (the door of the house) = <tur>ev-in</tur> + <tur>kapı-sı</tur>. The genitive closes off the first word; it does not slip in after the possessive of the second noun."
      },
      {
        "t": "p",
        "text": "The same principle applies to verbs: root + negation + tense + person. <tur>gel-me-di-m</tur> = I did not come. One word = a mini-sentence."
      },
      {
        "t": "note",
        "kind": "tip",
        "tag": "Reading",
        "text": "When you meet a long Turkish word, peel it from the right: -ler/-lar? possessive? case? Then deal with the remaining root."
      }
    ]
  },
  {
    "id": "etre",
    "title": "To be (without a verb) & değil",
    "level": "A1",
    "blocks": [
      {
        "t": "p",
        "text": "There is no verb to be in the present tense: suffixes are added to the noun. Negation uses <tur>değil</tur>, a word placed after the noun that itself takes the person endings."
      },
      {
        "t": "table",
        "caption": "Affirmative / negative",
        "head": [
          "Person",
          "Affirmative",
          "Negative"
        ],
        "rows": [
          [
            "ben",
            "<tur>öğretmenim</tur>",
            "<tur>öğretmen değilim</tur>"
          ],
          [
            "sen",
            "<tur>öğrencisin</tur>",
            "<tur>öğrenci değilsin</tur>"
          ],
          [
            "o",
            "<tur>doktor</tur>",
            "<tur>doktor değil</tur>"
          ],
          [
            "biz",
            "<tur>Türküz</tur>",
            "<tur>Türk değiliz</tur>"
          ],
          [
            "siz",
            "<tur>yorgunsunuz</tur>",
            "<tur>yorgun değilsiniz</tur>"
          ],
          [
            "onlar",
            "<tur>öğretmen</tur>",
            "<tur>öğretmen değiller</tur>"
          ]
        ]
      },
      {
        "t": "p",
        "text": "The suffix -dir exists for the third person (very formal, written, announcements): <tur>Güzeldir.</tur> (it is beautiful, to be sure)."
      }
    ]
  },
  {
    "id": "pluriel",
    "title": "The plural -ler / -lar",
    "level": "A1",
    "blocks": [
      {
        "t": "p",
        "text": "A simple building block: -ler after a front vowel, -lar after a back vowel."
      },
      {
        "t": "ex",
        "items": [
          {
            "tr": "kitap → kitaplar",
            "fr": "book → books"
          },
          {
            "tr": "şehir → şehirler",
            "fr": "city → cities"
          },
          {
            "tr": "kadın → kadınlar",
            "fr": "woman → women"
          },
          {
            "tr": "gül → güller",
            "fr": "rose → roses"
          }
        ]
      },
      {
        "t": "note",
        "kind": "warn",
        "tag": "Rule",
        "text": "After a <b>number</b> or a quantifier (çok, biraz), the noun stays singular: <tur>üç kitap</tur> (three books), <tur>çok para</tur> (a lot of money)."
      },
      {
        "t": "p",
        "text": "In verb conjugation, the third-person human plural can be doubled: <tur>geldiler</tur> or <tur>gelmışlerdir</tur>… in practice: -ler is added to the already marked third person plural (onlar geldiler)."
      }
    ]
  },
  {
    "id": "pronoms",
    "title": "Pronouns & demonstratives",
    "level": "A1",
    "blocks": [
      {
        "t": "table",
        "caption": "Personal pronouns",
        "head": [
          "Turkish",
          "English"
        ],
        "rows": [
          [
            "<tur>ben, sen, o</tur>",
            "I/me, you, he/she"
          ],
          [
            "<tur>biz, siz, onlar</tur>",
            "we, you, they"
          ]
        ]
      },
      {
        "t": "table",
        "caption": "Demonstratives & interrogatives",
        "head": [
          "Turkish",
          "English"
        ],
        "rows": [
          [
            "<tur>bu</tur>",
            "this (near)"
          ],
          [
            "<tur>şu</tur>",
            "that (a little further away)"
          ],
          [
            "<tur>o</tur>",
            "that (far away) = also « he/she »"
          ],
          [
            "<tur>ne, kim, nerede</tur>",
            "what, who, where"
          ]
        ]
      },
      {
        "t": "p",
        "text": "Pronouns are often <b>implicit</b>: the verb ending already shows the person. <tur>Geliyorum</tur> is enough for « I am coming »."
      },
      {
        "t": "p",
        "text": "The polite you (siz) is standard with strangers, elders and in shops: but Turks quickly switch to a warm informal you, especially among young people."
      }
    ]
  },
  {
    "id": "cas",
    "title": "The six cases",
    "level": "A2",
    "blocks": [
      {
        "t": "p",
        "text": "Turkish « prepositions » are suffixes. Six cases, each with its function. The buffer y is inserted after a final vowel; final voiceless consonants (p ç t k s ş f h) harden d into t."
      },
      {
        "t": "table",
        "caption": "Overview of the six cases (example: ev, « house »)",
        "head": [
          "Case",
          "Suffix",
          "Example",
          "Function"
        ],
        "rows": [
          [
            "Nominative",
            "Ø",
            "<tur>ev</tur>",
            "subject / indefinite direct object"
          ],
          [
            "Accusative",
            "-i/-ı/-u/-ü",
            "<tur>evi</tur>",
            "definite direct object"
          ],
          [
            "Dative",
            "-e/-a",
            "<tur>eve</tur>",
            "to, towards (destination)"
          ],
          [
            "Locative",
            "-de/-da",
            "<tur>evde</tur>",
            "in, at, on (place)"
          ],
          [
            "Ablative",
            "-den/-dan",
            "<tur>evden</tur>",
            "from, since (origin)"
          ],
          [
            "Genitive",
            "-in/-ın/-un/-ün",
            "<tur>evin</tur>",
            "of (possession)"
          ]
        ]
      },
      {
        "t": "table",
        "caption": "Examples in use",
        "head": [
          "Turkish",
          "English"
        ],
        "rows": [
          [
            "<tur>Kitabı okudum.</tur>",
            "I read the book. (accusative)"
          ],
          [
            "<tur>Okula gidiyorum.</tur>",
            "I am going to school. (dative)"
          ],
          [
            "<tur>Okuldayım.</tur>",
            "I am at school. (locative)"
          ],
          [
            "<tur>Okuldan geliyorum.</tur>",
            "I am coming from school. (ablative)"
          ],
          [
            "<tur>Öğretmenin adı Ali.</tur>",
            "The teacher's name is Ali. (genitive)"
          ]
        ]
      },
      {
        "t": "note",
        "kind": "tip",
        "tag": "Voiceless consonants",
        "text": "p ç t k s ş f h → d becomes t: <tur>sokakta</tur> (in the street), <tur>işte</tur> (at work), <tur>otobüste</tur> (on the bus)."
      }
    ]
  },
  {
    "id": "possessif",
    "title": "Possession",
    "level": "A2",
    "blocks": [
      {
        "t": "p",
        "text": "The possessed noun takes a possessive suffix; the possessor (if expressed) takes the genitive. Structure: possessor-genitive + possessed-possessive."
      },
      {
        "t": "table",
        "caption": "Possessive suffixes (with « anne », mother)",
        "head": [
          "Person",
          "Suffix",
          "Example",
          "Meaning"
        ],
        "rows": [
          [
            "my",
            "-im",
            "<tur>annem</tur>",
            "my mother"
          ],
          [
            "your (informal)",
            "-in",
            "<tur>annen</tur>",
            "your mother"
          ],
          [
            "his/her",
            "-i",
            "<tur>annesi</tur>",
            "his/her mother"
          ],
          [
            "our",
            "-imiz",
            "<tur>annemiz</tur>",
            "our mother"
          ],
          [
            "your (polite)",
            "-iniz",
            "<tur>anneniz</tur>",
            "your mother"
          ],
          [
            "their",
            "-leri",
            "<tur>anneleri</tur>",
            "their mother"
          ]
        ]
      },
      {
        "t": "ex",
        "items": [
          {
            "tr": "Ali'nin arabası",
            "fr": "Ali's car"
          },
          {
            "tr": "benim evim",
            "fr": "my house"
          },
          {
            "tr": "öğretmenin kitapları",
            "fr": "the teacher's books"
          }
        ]
      },
      {
        "t": "note",
        "kind": "warn",
        "tag": "Buffer consonants",
        "text": "After a final vowel: the third person takes the buffer <b>n</b> (<tur>araba<b>sı</b></tur> = his/her car, <tur>oda<b>sı</b></tur> = his/her room); the other person forms attach directly (<tur>araba<b>m</b></tur> = my car, <tur>oda<b>n</b></tur> = your room). The buffer <b>y</b>, for its part, is used for the copula and for the cases: <tur>odayım</tur> (I am in the room), <tur>odaya</tur> (towards the room)."
      }
    ]
  },
  {
    "id": "varyok",
    "title": "Var / yok: possession & existence",
    "level": "A2",
    "blocks": [
      {
        "t": "p",
        "text": "There is no verb to have: <tur>var</tur> (there is) and <tur>yok</tur> (there is not), invariable, go at the end of the sentence."
      },
      {
        "t": "table",
        "caption": "Structures",
        "head": [
          "Structure",
          "Example",
          "English"
        ],
        "rows": [
          [
            "possessed noun + possessive + var",
            "<tur>Arabam var.</tur>",
            "I have a car."
          ],
          [
            "possessed noun + possessive + yok",
            "<tur>Zamanım yok.</tur>",
            "I don't have time."
          ],
          [
            "place + locative + var/yok",
            "<tur>Buzdolabında süt yok.</tur>",
            "There is no milk in the fridge."
          ],
          [
            "question",
            "<tur>Sigara var mı?</tur>",
            "Are there any cigarettes?"
          ]
        ]
      },
      {
        "t": "ex",
        "items": [
          {
            "tr": "Bir sorunum var.",
            "fr": "I have a problem."
          },
          {
            "tr": "Param yok, ama hayalim var.",
            "fr": "I have no money, but I have a dream."
          }
        ]
      }
    ]
  },
  {
    "id": "present",
    "title": "The present continuous: -iyor",
    "level": "A2",
    "blocks": [
      {
        "t": "p",
        "text": "Root + <b>-iyor</b> + person. The vowel of -iyor follows vowel harmony (i/ı/ü/u); the personal endings do not."
      },
      {
        "t": "table",
        "caption": "Full conjugation (gelmek, to come)",
        "head": [
          "Person",
          "Turkish",
          "English"
        ],
        "rows": [
          [
            "ben",
            "<tur>geliyorum</tur>",
            "I come"
          ],
          [
            "sen",
            "<tur>geliyorsun</tur>",
            "you come"
          ],
          [
            "o",
            "<tur>geliyor</tur>",
            "he/she comes"
          ],
          [
            "biz",
            "<tur>geliyoruz</tur>",
            "we come"
          ],
          [
            "siz",
            "<tur>geliyorsunuz</tur>",
            "you come (polite/plural)"
          ],
          [
            "onlar",
            "<tur>geliyorlar</tur>",
            "they come"
          ]
        ]
      },
      {
        "t": "p",
        "text": "Negative: -me/-ma slots in (gel<b>mi</b>yorum). After a vowel, a y appears: oku<b>y</b>orum (I read), bekle<b>y</b>or (he waits)."
      },
      {
        "t": "p",
        "text": "This tense covers the action in progress <b>and</b> the lasting state: <tur>İstanbul'da yaşıyorum</tur> (I live in Istanbul), <tur>Türkçe öğreniyorum</tur> (I am learning Turkish)."
      }
    ]
  },
  {
    "id": "negation",
    "title": "Negation",
    "level": "A2",
    "blocks": [
      {
        "t": "table",
        "caption": "Three tools of negation",
        "head": [
          "Context",
          "Tool",
          "Example"
        ],
        "rows": [
          [
            "Noun / adjective",
            "<tur>değil</tur>",
            "<tur>Hasta değilim.</tur> (I am not ill)"
          ],
          [
            "Verb",
            "<b>-me/-ma</b> before the tense",
            "<tur>gelmedim</tur> (I did not come)"
          ],
          [
            "Existence / possession",
            "<tur>yok</tur>",
            "<tur>Param yok.</tur> (I have no money)"
          ]
        ]
      },
      {
        "t": "p",
        "text": "The word <tur>hayır</tur> (no) answers a question; <tur>değil</tur>, -me and yok negate <b>inside</b> the sentence. For « not either »: <tur>ben de değilim</tur> / <tur>ben de gelmedim</tur>."
      },
      {
        "t": "ex",
        "items": [
          {
            "tr": "Kahve istemiyorum.",
            "fr": "I don't want any coffee."
          },
          {
            "tr": "Bu kitap benim değil.",
            "fr": "This book isn't mine."
          },
          {
            "tr": "Hiç sevmiyorum.",
            "fr": "I don't like it at all."
          }
        ]
      }
    ]
  },
  {
    "id": "question",
    "title": "The question: mi / mı / mu / mü",
    "level": "A2",
    "blocks": [
      {
        "t": "p",
        "text": "A <b>separate</b> question particle, placed right after the word in question and harmonised with the preceding vowel. After verb forms ending in a vowel, it takes the personal endings: <tur>geldin mi?</tur>, <tur>geliyor musun?</tur>, <tur>gelecek misin?</tur>"
      },
      {
        "t": "table",
        "caption": "Choosing the variant",
        "head": [
          "Last vowel before mi",
          "Particle",
          "Example"
        ],
        "rows": [
          [
            "e, i",
            "mi",
            "<tur>güzel mi?</tur>"
          ],
          [
            "a, ı",
            "mı",
            "<tur>var mı?</tur>"
          ],
          [
            "ö, ü",
            "mü",
            "<tur>Türk müsün?</tur>"
          ],
          [
            "o, u",
            "mu",
            "<tur>yoruldu mu?</tur>"
          ]
        ]
      },
      {
        "t": "p",
        "text": "Question words (ne, kim, nerede, nasıl, kaç, hangi…) do NOT take mi: <tur>Adın ne?</tur>, never « Adın ne mi? »."
      }
    ]
  },
  {
    "id": "alternances",
    "title": "Consonant alternations",
    "level": "B1",
    "blocks": [
      {
        "t": "p",
        "text": "Final consonants « breathe »: they harden or soften depending on what follows. Three phenomena to know."
      },
      {
        "t": "table",
        "caption": "The three alternations",
        "head": [
          "Phenomenon",
          "Rule",
          "Example"
        ],
        "rows": [
          [
            "Hardening (voiceless)",
            "d → t after p ç t k s ş f h",
            "<tur>sokakta</tur>, <tur>işte</tur>"
          ],
          [
            "Softening",
            "final k → ğ before a vowel",
            "<tur>yapacak → yapacağım</tur>, <tur>ayak → ayağı</tur>"
          ],
          [
            "Voicing",
            "p → b, ç → c, t → d before a vowel",
            "<tur>kitap → kitabı</tur>, <tur>ağaç → ağacı</tur>, <tur>kanat → kanadı</tur>"
          ]
        ]
      },
      {
        "t": "note",
        "kind": "tip",
        "tag": "Read what you see",
        "text": "The good news: these alternations are <b>written</b>, not hidden. By reading a lot, you memorise them like pictures of words."
      }
    ]
  },
  {
    "id": "passe",
    "title": "The past tenses: -di and -miş",
    "level": "B1",
    "blocks": [
      {
        "t": "table",
        "caption": "Witnessed past (-di): conjugation of gelmek",
        "head": [
          "Person",
          "Turkish",
          "English"
        ],
        "rows": [
          [
            "ben",
            "<tur>geldim</tur>",
            "I came"
          ],
          [
            "sen",
            "<tur>geldin</tur>",
            "you came"
          ],
          [
            "o",
            "<tur>geldi</tur>",
            "he/she came"
          ],
          [
            "biz",
            "<tur>geldik</tur>",
            "we came"
          ],
          [
            "siz",
            "<tur>geldiniz</tur>",
            "you came (polite/plural)"
          ],
          [
            "onlar",
            "<tur>geldiler</tur>",
            "they came"
          ]
        ]
      },
      {
        "t": "p",
        "text": "The evidential/reported past <b>-miş</b> follows the same pattern (gelmişim, gelmişsin…) and encodes the <b>source of the information</b>: you did not witness it, someone told you; or you are discovering it with surprise."
      },
      {
        "t": "ex",
        "items": [
          {
            "tr": "Dün Ankara'ya gittim.",
            "fr": "Yesterday I went to Ankara. (I know it, I was there)"
          },
          {
            "tr": "Dün Ankara'ya gitmiş.",
            "fr": "He supposedly went to Ankara yesterday. (I was told)"
          },
          {
            "tr": "Ayşe evlenmiş!",
            "fr": "Ayşe got married: who would have thought!"
          }
        ]
      },
      {
        "t": "note",
        "kind": "info",
        "tag": "Pluperfect",
        "text": "By combining the two: <tur>gelmışti</tur> = he had come (miş + di). Turkish stacks tenses like bricks."
      }
    ]
  },
  {
    "id": "futur",
    "title": "The future: -ecek / -acak",
    "level": "B1",
    "blocks": [
      {
        "t": "table",
        "caption": "Conjugation of gelmek in the future",
        "head": [
          "Person",
          "Turkish",
          "English"
        ],
        "rows": [
          [
            "ben",
            "<tur>geleceğim</tur>",
            "I will come"
          ],
          [
            "sen",
            "<tur>geleceksin</tur>",
            "you will come"
          ],
          [
            "o",
            "<tur>gelecek</tur>",
            "he/she will come"
          ],
          [
            "biz",
            "<tur>geleceğiz</tur>",
            "we will come"
          ],
          [
            "siz",
            "<tur>geleceksiniz</tur>",
            "you will come (polite/plural)"
          ],
          [
            "onlar",
            "<tur>gelecekler</tur>",
            "they will come"
          ]
        ]
      },
      {
        "t": "p",
        "text": "The k of -cek/-cak becomes ğ before the vowel of the personal endings: gelecek + im → gelece<b>ğ</b>im. Negative: gel<b>me</b>yeceğim. Question: gelecek misin?"
      },
      {
        "t": "p",
        "text": "To express an immediate intention, Turkish speakers often use the present: <tur>Şimdi gidiyorum</tur> (I am going now / right away)."
      }
    ]
  },
  {
    "id": "postpositions",
    "title": "Postpositions & connectors",
    "level": "B1",
    "blocks": [
      {
        "t": "p",
        "text": "Turkish places its « prepositions » <b>after</b> the noun (hence their name: postpositions). Some attach to the word (-le/-la), others remain separate words."
      },
      {
        "t": "table",
        "caption": "The essentials",
        "head": [
          "Turkish",
          "Meaning",
          "Example",
          "English"
        ],
        "rows": [
          [
            "<tur>-le / -la</tur> (= ile)",
            "with, by means of",
            "<tur>otobüsle</tur>",
            "by bus"
          ],
          [
            "<tur>için</tur>",
            "for, in order to",
            "<tur>senin için</tur>",
            "for you"
          ],
          [
            "<tur>gibi</tur>",
            "like, as",
            "<tur>kuş gibi</tur>",
            "like a bird"
          ],
          [
            "<tur>ile</tur>",
            "with (noun)",
            "<tur>arkadaşım ile</tur>",
            "with my friend"
          ],
          [
            "<tur>kadar</tur>",
            "until, as much as",
            "<tur>saat beşe kadar</tur>",
            "until five o'clock"
          ],
          [
            "<tur>önce / sonra</tur>",
            "before / after",
            "<tur>yemekten sonra</tur>",
            "after the meal"
          ],
          [
            "<tur>çünkü</tur>",
            "because",
            "<tur>yorgunum, çünkü…</tur>",
            "I am tired because…"
          ],
          [
            "<tur>ama / fakat</tur>",
            "but",
            "<tur>ama</tur>",
            "but"
          ]
        ]
      },
      {
        "t": "note",
        "kind": "tip",
        "tag": "Word order",
        "text": "Typical sentence: Subject-Object-Verb; the verb almost always closes the sentence: <tur>Ben yarın okula gideceğim.</tur> But the order remains flexible: it is the suffixes that carry the grammar, not the position."
      }
    ]
  }
];
