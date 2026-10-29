/* Türkçe Akademi : mini-cours des couleurs */
const COLOR_COURSE = {
  fr: {
    quizTitle: "Mini-quiz couleurs",
    questions: [
      { q: "« kırmızı » signifie…", opts: ["bleu", "rouge", "vert"], a: 1, exp: "kırmızı = rouge." },
      { q: "Complète : « ___ bir araba » (une voiture blanche)", opts: ["beyaz", "beyazı", "beyazlar"], a: 0, exp: "L'adjectif se place avant le nom : beyaz bir araba." },
      { q: "« Hangi rengi seviyorsun? » signifie…", opts: ["Quelle couleur préfères-tu ?", "Où est la couleur ?", "La couleur est-elle claire ?"], a: 0, exp: "hangi = quel, renk = couleur, sevmek = aimer." }
    ],
    start: "Commencer le quiz", next: "Question suivante", score: "Score", finish: "Terminer", correct: "Bonne réponse !", wrong: "Pas encore.", retry: "Recommencer"
  },
  en: {
    quizTitle: "Colour mini-quiz",
    questions: [
      { q: "« kırmızı » means…", opts: ["blue", "red", "green"], a: 1, exp: "kırmızı = red." },
      { q: "Complete: « ___ bir araba » (a white car)", opts: ["beyaz", "beyazı", "beyazlar"], a: 0, exp: "The adjective comes before the noun: beyaz bir araba." },
      { q: "« Hangi rengi seviyorsun? » means…", opts: ["Which colour do you prefer?", "Where is the colour?", "Is the colour light?"], a: 0, exp: "hangi = which, renk = colour, sevmek = to like." }
    ],
    start: "Start quiz", next: "Next question", score: "Score", finish: "Finish", correct: "Correct!", wrong: "Not quite.", retry: "Try again"
  },
  ar: {
    quizTitle: "اختبار الألوان",
    questions: [
      { q: "ما معنى « kırmızı »؟", opts: ["أزرق", "أحمر", "أخضر"], a: 1, exp: "kırmızı = أحمر." },
      { q: "أكمل: « ___ bir araba » (سيارة بيضاء)", opts: ["beyaz", "beyazı", "beyazlar"], a: 0, exp: "تأتي الصفة قبل الاسم: beyaz bir araba." },
      { q: "ما معنى « Hangi rengi seviyorsun? »؟", opts: ["أي لون تفضّل؟", "أين اللون؟", "هل اللون فاتح؟"], a: 0, exp: "hangi = أي، renk = لون، sevmek = يحب." }
    ],
    start: "ابدأ الاختبار", next: "السؤال التالي", score: "النتيجة", finish: "إنهاء", correct: "إجابة صحيحة!", wrong: "ليست صحيحة بعد.", retry: "أعد المحاولة"
  },
  kk: {
    quizTitle: "Түстер мини-тесті",
    questions: [
      { q: "« kırmızı » дегеніміз…", opts: ["көк", "қызыл", "жасыл"], a: 1, exp: "kırmızı = қызыл." },
      { q: "Толықтыр: « ___ bir araba » (ақ көлік)", opts: ["beyaz", "beyazı", "beyazlar"], a: 0, exp: "Сын есім зат есімнің алдында тұрады: beyaz bir araba." },
      { q: "« Hangi rengi seviyorsun? » дегеніміз…", opts: ["Қай түсті ұнатасың?", "Түс қайда?", "Түс ашық па?"], a: 0, exp: "hangi = қай, renk = түс, sevmek = ұнату." }
    ],
    start: "Тестті бастау", next: "Келесі сұрақ", score: "Ұпай", finish: "Аяқтау", correct: "Дұрыс!", wrong: "Дұрыс емес.", retry: "Қайта бастау"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("color-quiz");
  if (!root) return;
  const copy = COLOR_COURSE[document.documentElement.lang] || COLOR_COURSE.fr;
  const title = root.querySelector("[data-color-title]");
  const start = root.querySelector("#color-start");
  const content = root.querySelector("#color-question");
  title.textContent = copy.quizTitle;
  let index = 0, score = 0;

  function renderStart() {
    content.replaceChildren();
    start.hidden = false;
    start.textContent = copy.start;
    start.onclick = () => { index = 0; score = 0; renderQuestion(); };
  }
  function renderQuestion() {
    start.hidden = true;
    const item = copy.questions[index];
    content.replaceChildren();
    const counter = document.createElement("div");
    counter.className = "quiz-head";
    counter.textContent = `${copy.score}: ${score} · ${index + 1}/${copy.questions.length}`;
    content.appendChild(counter);
    const question = document.createElement("h3");
    question.className = "color-question";
    question.textContent = item.q;
    content.appendChild(question);
    item.opts.forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.className = "quiz-opt";
      button.type = "button";
      button.textContent = option;
      button.onclick = () => {
        els(".quiz-opt", content).forEach(btn => { btn.disabled = true; });
        const feedback = document.createElement("p");
        feedback.className = optionIndex === item.a ? "quiz-feedback ok" : "quiz-feedback no";
        if (optionIndex === item.a) score++;
        feedback.textContent = `${optionIndex === item.a ? copy.correct : copy.wrong} ${item.exp}`;
        content.appendChild(feedback);
        const next = document.createElement("button");
        next.className = "btn btn-dark btn-sm";
        next.type = "button";
        next.textContent = index === copy.questions.length - 1 ? copy.finish : copy.next;
        next.onclick = () => {
          if (index === copy.questions.length - 1) {
            content.replaceChildren();
            const result = document.createElement("p");
            result.textContent = `${copy.score}: ${score}/${copy.questions.length}`;
            content.appendChild(result);
            start.hidden = false;
            start.textContent = copy.retry;
          } else { index++; renderQuestion(); }
        };
        content.appendChild(next);
      };
      content.appendChild(button);
    });
  }
  renderStart();
});
