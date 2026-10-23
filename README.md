# Türkçe Akademi

**Apprendre le turc en français : un cours complet, gratuit et sans inscription.**

Site statique (HTML / CSS / JavaScript, aucune dépendance, aucun framework) conçu pour les francophones qui veulent apprendre le turc sérieusement, du niveau A1 au B1.

## Contenu

- **12 modules de cours** (A1 → B1) : leçon complète, dialogue joué, vocabulaire clé et quiz de validation pour chaque module.
- **625 mots et expressions** répartis en 29 thèmes, avec phrases d'exemple et prononciation, dont quatre thèmes de verbes, des expressions du quotidien et des questions utiles.
- **Flashcards à révision espacée** : cinq niveaux de maîtrise, filtres par niveau, entraînement dans les deux sens et priorité aux mots les moins connus.
- **16 fiches de grammaire** de référence (harmonie vocalique, les 6 cas, passés -di/-miş, futur -ecek…).
- **Quiz interactifs** : turc→français, français→turc, compréhension orale, grammaire et grand mix. Chaque réponse est expliquée.
- **Alphabet interactif** : 29 lettres avec prononciation, paires minimales et accent tonique.
- **Prononciation sonore** partout grâce à la synthèse vocale du navigateur (voix `tr-TR`).
- **Progression locale** : XP, niveaux, série quotidienne, modules terminés et mots mémorisés, stockés dans `localStorage`, sans compte.
- **Planning d'études** : routine adaptée aux cours de 9 h à 15 h 45, comparaison avec ton rythme actuel, révisions espacées, pomodoro 25/5 qui rapporte des XP, pauses et sommeil protégé.

## Utiliser

Aucune installation : ouvre simplement `index.html` dans un navigateur, ou héberge le dossier sur n'importe quel serveur statique (GitHub Pages, Netlify…).

> Pour la prononciation, le site utilise l'API Web Speech. Si ta voix turque n'est pas installée, le navigateur utilisera une voix de secours ; installe un pack de voix `tr-TR` pour un rendu optimal.

## Structure

```
├── index.html            Accueil + tableau de bord
├── cours.html            Les 12 modules
├── vocabulaire.html      Flashcards + liste
├── grammaire.html        Référence (16 fiches)
├── exercices.html        Quiz
├── prononciation.html    Alphabet interactif
├── emploi-du-temps.html  Planning d'études + minuteur Pomodoro
├── css/style.css         Design system (clair / sombre)
└── js/
    ├── app.js            Commun : nav, thème, TTS, progression
    ├── data-vocab.js     625 mots en 29 thèmes
    ├── data-course.js    Les 12 modules (leçons, dialogues, quiz)
    ├── data-grammar.js   Les 16 fiches de grammaire
    ├── data-quiz.js      Banque de quiz + mot du jour
    ├── schedule.js       Planning + minuteur Pomodoro
    └── … un script par page
```

## Auteur

**by TAM** — conception, contenu pédagogique et développement.
Profil : [github.com/Magloire-cup](https://github.com/Magloire-cup)

## Licence

Code et contenu pédagogique fournis à titre éducatif. Utilise, partage et améliore librement.
