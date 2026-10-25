# Türkçe Akademi

**Apprendre le turc en français : un cours complet et gratuit.**

Site statique (HTML / CSS / JavaScript, aucune dépendance, aucun framework) conçu pour les francophones qui veulent apprendre le turc sérieusement, en trois grandes étapes.

**Classe partenaire : BAIBU YTB TÖMER Sınıfı** — Bolu Abant İzzet Baysal Üniversitesi.

## Contenu

- **12 modules de cours** : leçon complète, dialogue joué, vocabulaire clé et quiz de validation pour chaque module.
- **Parcours guidé de 19 unités originales** : objectif, vocabulaire, tableaux de grammaire, exemples traduits et mini-quiz corrigés (38 questions).
- **625 mots et expressions** répartis en 29 thèmes, avec phrases d'exemple, dont quatre thèmes de verbes, des expressions du quotidien et des questions utiles.
- **Flashcards à révision espacée** : cinq paliers de maîtrise, filtres par degré de maîtrise, entraînement dans les deux sens et priorité aux mots les moins connus.
- **16 fiches de grammaire** de référence (harmonie vocalique, les 6 cas, passés -di/-miş, futur -ecek…).
- **Conjugueur interactif** : 36 verbes courants, 7 temps, formes affirmatives et négatives et mode test pour réviser de mémoire.
- **Compagnon vidéo** : 27 fiches originales en trois parties qui suivent le programme des cours vidéo de Yunus Emre Enstitüsü, avec objectif, tableau de grammaire, exemples traduits, 10 mots de vocabulaire et un mini-quiz par fiche. Les vidéos ne sont ni hébergées ni recopiées : chaque fiche renvoie vers la playlist officielle et une recherche par thème.
- **L'essentiel en une page** : les 6 cas, l'ordre SOV, la conjugaison de *gelmek*, 27 phrases de survie avec prononciation écrite, les nombres, les jours et les mois, six conseils, les 7 pièges du francophone, les faux amis, 8 codes culturels, des ressources vérifiées, un défi de 7 jours et une FAQ.
- **Quiz interactifs** : turc→français, français→turc, grammaire et grand mix. Chaque réponse est expliquée.
- **Alphabet expliqué** : 29 lettres avec repères de prononciation écrite, paires minimales et accent tonique.
- **Aucun audio généré par le site** : les prononciations sont données sous forme de transcriptions et de repères écrits.
- **Progression locale** : modules terminés, mots mémorisés, réponses justes et records de quiz, stockés dans `localStorage`.
- **Planning d'études** : routine adaptée aux cours de 9 h à 15 h 45, comparaison avec ton rythme actuel, révisions espacées, pomodoro 25/5 automatique, pauses et sommeil protégé.

## Utiliser

Aucune installation : ouvre simplement `index.html` dans un navigateur, ou héberge le dossier sur n'importe quel serveur statique (GitHub Pages, Netlify…).

> Le site ne lit aucun mot à voix haute : la prononciation est expliquée par des transcriptions et des repères écrits, à lire à haute voix soi-même.

## Langues

Le français reste la version de référence à la racine du site. Trois versions complètes sont disponibles :

| Langue | Dossier | Direction |
| --- | --- | --- |
| Français | `/` | LTR |
| English | `/en/` | LTR |
| العربية | `/ar/` | RTL |
| Қазақша | `/kk/` | LTR |

Les 11 pages, les données pédagogiques, les quiz, les fiches vidéo et les libellés dynamiques sont traduits. Le turc reste la langue étudiée : les mots, dialogues et exemples demeurent en turc, avec la traduction dans la langue choisie. Un sélecteur de langue est présent dans l'en-tête de chaque page, et une section dédiée figure sur l'accueil.

La section partenaire « BAIBU YTB TÖMER Sınıfı » est injectée par `js/lang.js` sur l'accueil de chaque version, avec le logo officiel et un lien vers l'université ; une ligne partenaire est ajoutée au pied de page.

Maintenance des traductions :

```
node tools/make-shells.js       # régénère en/ ar/ kk/ depuis les pages françaises
node tools/merge-ui.js ar       # fusionne i18n-src/ar/ui-*.json → ui.json
node tools/locales.js build ar  # génère js/i18n/ar/
node tools/verify-i18n.js ar    # vérifie la couverture des traductions
```

Remplacer `ar` par `en` ou `kk` pour les autres langues. Les sources de traduction sont dans `i18n-src/<langue>/`.

## Structure

```
├── index.html            Accueil + tableau de bord
├── cours.html            Les 12 modules
├── parcours.html         Parcours guidé en 19 unités
├── vocabulaire.html      Flashcards + liste
├── grammaire.html        Référence (16 fiches)
├── conjugaison.html      Conjugueur interactif (36 verbes, 7 temps)
├── videos.html           Compagnon vidéo : 27 fiches en trois parties
├── essentiel.html        Mémento : cas, SOV, phrases, pièges, faux amis, culture, ressources, FAQ
├── exercices.html        Quiz
├── prononciation.html    Alphabet interactif
├── emploi-du-temps.html  Planning d'études + minuteur Pomodoro
├── css/style.css         Design system (clair / sombre)
└── js/
    ├── app.js            Commun : nav, thème, progression
    ├── data-vocab.js     625 mots en 29 thèmes
    ├── data-course.js    Les 12 modules (leçons, dialogues, quiz)
    ├── data-grammar.js   Les 16 fiches de grammaire
    ├── data-verbs.js     36 verbes pour le conjugueur
    ├── conjugator.js     Moteur et interface du conjugueur
    ├── data-parcours-a.js  Parcours, unités 1 à 9
    ├── data-parcours-b.js  Parcours, unités 10 à 17
    ├── data-parcours-c.js  Parcours, unités 18 à 19
    ├── data-videos-a1.js   Compagnon vidéo, fiches A1
    ├── data-videos-a2.js   Compagnon vidéo, fiches A2
    ├── data-videos-b1.js   Compagnon vidéo, fiches B1
    ├── videos.js         Moteur du compagnon vidéo (onglets, quiz, progression)
    ├── data-quiz.js      Banque de quiz + mot du jour
    ├── schedule.js       Planning + minuteur Pomodoro
    ├── lang.js           Sélecteur de langue et section d'accueil
    ├── i18n.js           Traduction de l'interface au chargement
    ├── i18n/             Données traduites (en/, ar/, kk/)
    └── … un script par page

├── en/ ar/ kk/           Versions anglaise, arabe et kazakhe (11 pages)
├── assets/               Logo officiel BAIBU (domaine public)
├── i18n-src/             Sources de traduction et pages HTML traduites
└── tools/                Génération des coquilles, fusion et vérification
```

## Auteur

**by TAM** — conception, contenu pédagogique et développement.
Profil : [github.com/Magloire-cup](https://github.com/Magloire-cup)

## Partenariat

**BAIBU YTB TÖMER Sınıfı** — Bolu Abant İzzet Baysal Üniversitesi, [baibu.edu.tr](https://www.baibu.edu.tr/).

Le logo de l'université (`assets/baibu-logo.png`) provient de Wikimedia Commons (« BAİBÜ logo.png »), où il est publié dans le domaine public. Il est affiché uniquement pour identifier la classe partenaire, sans suggérer une affiliation officielle au-delà de ce co-branding.

## Licence

Code et contenu pédagogique fournis à titre éducatif. Utilise, partage et améliore librement.
