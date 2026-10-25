/* Suivi personnel des tâches, sans prétendre publier les annonces de la classe. */
(() => {
  const TEXT = {
    fr: {
      title: "Espace de travail",
      intro: "Retrouve les ressources du site et organise tes propres révisions.",
      official: "Informations officielles de la classe",
      noNews: "Aucune annonce, date d’examen ou consigne officielle n’est publiée ici pour le moment. Demande confirmation à ton enseignant.",
      homework: "Travaux de révision à faire chez soi",
      homeworkLead: "Des exercices concrets construits à partir des unités du site. Ce sont des propositions pédagogiques, pas des devoirs attribués par ton enseignant.",
      homeworkAdd: "Ajouter à mon suivi",
      openUnit: "Ouvrir l’unité",
      unitLabel: "Unité",
      homeworkAdded: "Devoir ajouté à ton suivi personnel.",
      assignments: [
        { unit: 1, duration: "20 min", title: "Se présenter en turc", brief: "Prépare une courte présentation personnelle.", steps: ["Écris cinq phrases : ton nom, ta nationalité, ta ville, tes études et une salutation.", "Lis-les à voix haute en faisant attention à ç, ş, ğ, ı, ö et ü.", "Refais le mini-quiz de l’unité 1 sans regarder les réponses."], expected: "Un texte de cinq phrases et une présentation orale d’environ une minute." },
        { unit: 2, duration: "25 min", title: "Conjuguer au présent continu", brief: "Entraîne-toi à parler de ce que tu fais maintenant.", steps: ["Conjugue okumak (lire) et çalışmak (étudier) aux six personnes.", "Écris trois phrases affirmatives, deux négatives et deux questions avec -yor.", "Vérifie l’harmonie vocalique et les formes irrégulières dans la leçon."], expected: "Sept phrases personnelles correctement formées au présent." },
        { unit: 3, duration: "25 min", title: "Utiliser les cas du lieu et dire l’heure", brief: "Choisis le bon suffixe pour indiquer destination, lieu et provenance.", steps: ["Complète okul, ev et sokak avec les formes du datif, du locatif et de l’ablatif.", "Écris une phrase avec chacune de ces formes.", "Écris trois heures en turc : une heure pile, une heure et demie et un quart d’heure."], expected: "Neuf formes de cas, trois phrases et trois heures écrites en turc." },
        { unit: 5, duration: "25 min", title: "Raconter sa journée d’hier", brief: "Réutilise le passé en -di dans un récit simple.", steps: ["Écris six phrases sur une journée passée, avec au moins quatre verbes différents.", "Souligne le suffixe du passé dans chaque verbe et vérifie l’harmonie vocalique.", "Réponds au mini-quiz de l’unité 5 et lis ton texte à voix haute."], expected: "Un court récit de six phrases au passé, relu et corrigé." },
        { unit: 18, duration: "30 min", title: "Préparer un dialogue chez le médecin", brief: "Révise le vocabulaire de la santé et entraîne-toi à expliquer un symptôme.", steps: ["Relis l’unité 18 et note huit mots utiles avec leur traduction.", "Écris un dialogue de six répliques entre un patient et un médecin.", "Ajoute deux questions du médecin et deux réponses précisant depuis quand tu as un symptôme."], expected: "Un dialogue de six répliques avec huit mots de santé réutilisés." }
      ],
      resources: "Ressources pédagogiques",
      resourceLead: "Accès direct aux contenus déjà disponibles sur le site.",
      links: [
        ["Cours", "Leçons structurées avec dialogues et exercices.", "cours.html"],
        ["Vocabulaire", "Recherche, exemples, thèmes et favoris personnels.", "vocabulaire.html"],
        ["Grammaire", "Règles, suffixes et harmonie vocalique.", "grammaire.html"],
        ["Exercices", "Quiz corrigés avec explications.", "exercices.html"],
        ["Vidéos", "Fiches de révision associées aux vidéos.", "videos.html"]
      ],
      personal: "Mon suivi personnel",
      local: "Tes tâches sont enregistrées uniquement dans ce navigateur. Elles ne sont pas visibles par l’enseignant ni par les autres élèves.",
      task: "Tâche à réviser",
      taskPlaceholder: "Ex. Réviser les suffixes du datif",
      category: "Catégorie",
      categories: [["homework", "Devoir"], ["vocab", "Vocabulaire"], ["grammar", "Grammaire"], ["exam", "Préparation d’examen"]],
      due: "Échéance (facultative)",
      add: "Ajouter à mon suivi",
      progress: "Tâches terminées",
      empty: "Aucune tâche personnelle pour le moment. Ajoute une révision ou un devoir que tu veux suivre.",
      done: "Terminée",
      todo: "À faire",
      remove: "Supprimer",
      noDue: "Sans échéance",
      saved: "Enregistré sur cet appareil.",
      invalid: "Écris une tâche de 1 à 120 caractères.",
      loadError: "Les tâches enregistrées n’ont pas pu être lues. Aucune donnée n’a été remplacée.",
      saveError: "Enregistrement impossible. Vérifie l’espace disponible et les paramètres du navigateur.",
      status: "Liste mise à jour."
    },
    en: {
      title: "Study space",
      intro: "Find the site's learning resources and organize your own revision.",
      official: "Official class information",
      noNews: "No official announcement, exam date, or instruction has been published here yet. Please confirm with your teacher.",
      homework: "At-home revision assignments",
      homeworkLead: "Practical exercises based on the site's units. These are learning suggestions, not assignments issued by your teacher.",
      homeworkAdd: "Add to my tracker",
      openUnit: "Open unit",
      unitLabel: "Unit",
      homeworkAdded: "Assignment added to your personal tracker.",
      assignments: [
        { unit: 1, duration: "20 min", title: "Introduce yourself in Turkish", brief: "Prepare a short personal introduction.", steps: ["Write five sentences: your name, nationality, city, studies, and a greeting.", "Read them aloud, focusing on ç, ş, ğ, ı, ö, and ü.", "Take unit 1's mini-quiz without looking at the answers."], expected: "A five-sentence text and a one-minute spoken introduction." },
        { unit: 2, duration: "25 min", title: "Conjugate the present continuous", brief: "Practice talking about what you are doing now.", steps: ["Conjugate okumak (to read) and çalışmak (to study) for all six persons.", "Write three affirmative sentences, two negatives, and two questions using -yor.", "Check vowel harmony and irregular forms in the lesson."], expected: "Seven original sentences correctly formed in the present." },
        { unit: 3, duration: "25 min", title: "Use location cases and tell the time", brief: "Choose the right suffix for destination, location, and origin.", steps: ["Complete okul, ev, and sokak with dative, locative, and ablative forms.", "Write one sentence using each form.", "Write three times in Turkish: an exact hour, half past, and quarter past."], expected: "Nine case forms, three sentences, and three times written in Turkish." },
        { unit: 5, duration: "25 min", title: "Describe yesterday", brief: "Reuse the -di past tense in a simple account.", steps: ["Write six sentences about a past day, using at least four different verbs.", "Underline the past suffix in each verb and check vowel harmony.", "Take unit 5's mini-quiz and read your text aloud."], expected: "A short six-sentence past-tense account, checked and corrected." },
        { unit: 18, duration: "30 min", title: "Prepare a doctor dialogue", brief: "Review health vocabulary and practice describing a symptom.", steps: ["Review unit 18 and note eight useful words with translations.", "Write a six-line dialogue between a patient and a doctor.", "Include two doctor questions and two answers saying how long a symptom has lasted."], expected: "A six-line dialogue reusing eight health words." }
      ],
      resources: "Learning resources",
      resourceLead: "Quick access to content already available on the site.",
      links: [
        ["Courses", "Structured lessons with dialogues and practice.", "cours.html"],
        ["Vocabulary", "Search, examples, themes, and personal favorites.", "vocabulaire.html"],
        ["Grammar", "Rules, suffixes, and vowel harmony.", "grammaire.html"],
        ["Exercises", "Quizzes with answers and explanations.", "exercices.html"],
        ["Videos", "Revision sheets linked to videos.", "videos.html"]
      ],
      personal: "My personal tracker",
      local: "Your tasks are saved only in this browser. They are not visible to your teacher or other students.",
      task: "Task to study",
      taskPlaceholder: "e.g. Review the dative suffix",
      category: "Category",
      categories: [["homework", "Homework"], ["vocab", "Vocabulary"], ["grammar", "Grammar"], ["exam", "Exam preparation"]],
      due: "Due date (optional)",
      add: "Add to my list",
      progress: "Tasks completed",
      empty: "No personal tasks yet. Add a revision goal or homework task to track.",
      done: "Completed",
      todo: "To do",
      remove: "Delete",
      noDue: "No due date",
      saved: "Saved on this device.",
      invalid: "Enter a task between 1 and 120 characters.",
      loadError: "Saved tasks could not be read. No data has been overwritten.",
      saveError: "Unable to save. Check browser storage and available space.",
      status: "List updated."
    },
    ar: {
      title: "مساحة الدراسة",
      intro: "اعثر على موارد الموقع ونظّم مراجعتك الشخصية.",
      official: "معلومات الصف الرسمية",
      noNews: "لا يوجد هنا حاليًا إعلان رسمي أو موعد امتحان أو تعليمات منشورة. يُرجى التأكد من المدرّس.",
      homework: "تمارين مراجعة منزلية",
      homeworkLead: "تمارين عملية مستندة إلى وحدات الموقع. هذه مقترحات تعليمية وليست واجبات كلّف بها المدرّس.",
      homeworkAdd: "أضف إلى متابعتي",
      openUnit: "افتح الوحدة",
      unitLabel: "الوحدة",
      homeworkAdded: "أُضيف الواجب إلى متابعتك الشخصية.",
      assignments: [
        { unit: 1, duration: "20 دقيقة", title: "عرّف بنفسك باللغة التركية", brief: "حضّر تعريفًا قصيرًا بنفسك.", steps: ["اكتب خمس جمل عن اسمك وجنسيتك ومدينتك ودراستك والتحية.", "اقرأها بصوت عالٍ مع الانتباه إلى ç وş وğ وı وö وü.", "أجب عن الاختبار القصير للوحدة الأولى دون النظر إلى الإجابات."], expected: "نص من خمس جمل وتعريف شفهي مدته نحو دقيقة." },
        { unit: 2, duration: "25 دقيقة", title: "صرّف المضارع المستمر", brief: "تدرّب على وصف ما تفعله الآن.", steps: ["صرّف okumak (يقرأ) وçalışmak (يدرس) مع الضمائر الستة.", "اكتب ثلاث جمل مثبتة وجملتين منفيتين وسؤالين باستخدام -yor.", "تحقق من تناغم الحروف المتحركة والصيغ الخاصة في الدرس."], expected: "سبع جمل من إنشائك بصيغة المضارع." },
        { unit: 3, duration: "25 دقيقة", title: "استخدم حالات المكان واذكر الوقت", brief: "اختر اللاحقة المناسبة للاتجاه والمكان والمصدر.", steps: ["أكمل okul وev وsokak بصيغ المفعول إليه والمكان والمصدر.", "اكتب جملة باستخدام كل صيغة.", "اكتب ثلاثة أوقات بالتركية: ساعة كاملة ونصف ساعة وربع ساعة."], expected: "تسع صيغ حالات وثلاث جمل وثلاثة أوقات بالتركية." },
        { unit: 5, duration: "25 دقيقة", title: "احكِ عمّا فعلته أمس", brief: "استخدم الماضي -di في سرد بسيط.", steps: ["اكتب ست جمل عن يوم مضى مستخدمًا أربعة أفعال مختلفة على الأقل.", "ضع خطًا تحت لاحقة الماضي في كل فعل وتحقق من التناغم الصوتي.", "أجب عن اختبار الوحدة الخامسة واقرأ النص بصوت عالٍ."], expected: "سرد قصير من ست جمل في الماضي بعد مراجعته وتصحيحه." },
        { unit: 18, duration: "30 دقيقة", title: "حضّر حوارًا عند الطبيب", brief: "راجع مفردات الصحة وتدرّب على وصف أحد الأعراض.", steps: ["راجع الوحدة 18 واكتب ثماني كلمات مفيدة مع ترجمتها.", "اكتب حوارًا من ستة أسطر بين مريض وطبيب.", "أضف سؤالين من الطبيب وإجابتين توضّحان منذ متى بدأ العرض."], expected: "حوار من ستة أسطر يستخدم ثماني كلمات صحية." }
      ],
      resources: "موارد التعلّم",
      resourceLead: "روابط مباشرة إلى المحتوى المتاح على الموقع.",
      links: [
        ["الدروس", "دروس منظمة مع حوارات وتمارين.", "cours.html"],
        ["المفردات", "بحث وأمثلة وموضوعات ومفضّلات شخصية.", "vocabulaire.html"],
        ["القواعد", "قواعد ولاحقات وتناغم الحروف المتحركة.", "grammaire.html"],
        ["التمارين", "اختبارات مع إجابات وتفسيرات.", "exercices.html"],
        ["الفيديوهات", "بطاقات مراجعة مرتبطة بالفيديوهات.", "videos.html"]
      ],
      personal: "متابعتي الشخصية",
      local: "تُحفظ مهامك في هذا المتصفح فقط، ولا تظهر للمدرّس أو الطلاب الآخرين.",
      task: "مهمة للمراجعة",
      taskPlaceholder: "مثال: مراجعة لاحقة الاتجاه",
      category: "الفئة",
      categories: [["homework", "واجب"], ["vocab", "مفردات"], ["grammar", "قواعد"], ["exam", "الاستعداد للامتحان"]],
      due: "الموعد النهائي (اختياري)",
      add: "أضف إلى قائمتي",
      progress: "المهام المكتملة",
      empty: "لا توجد مهام شخصية بعد. أضف مراجعة أو واجبًا لمتابعته.",
      done: "مكتملة",
      todo: "قيد الإنجاز",
      remove: "حذف",
      noDue: "بلا موعد نهائي",
      saved: "حُفظت على هذا الجهاز.",
      invalid: "اكتب مهمة من حرف واحد إلى 120 حرفًا.",
      loadError: "تعذرت قراءة المهام المحفوظة. لم يتم استبدال أي بيانات.",
      saveError: "تعذر الحفظ. تحقق من مساحة التخزين وإعدادات المتصفح.",
      status: "تم تحديث القائمة."
    },
    kk: {
      title: "Оқу кеңістігі",
      intro: "Сайттағы оқу материалдарын тауып, жеке қайталауыңды жоспарла.",
      official: "Сыныптың ресми ақпараты",
      noNews: "Әзірге мұнда ресми хабарландыру, емтихан күні немесе тапсырма жарияланған жоқ. Мұғалімнен нақтыла.",
      homework: "Үйде орындауға арналған қайталау",
      homeworkLead: "Сайттағы бөлімдерге негізделген практикалық жаттығулар. Бұлар мұғалім берген тапсырма емес, оқу ұсыныстары.",
      homeworkAdd: "Жеке тізіміме қосу",
      openUnit: "Бөлімді ашу",
      unitLabel: "Бөлім",
      homeworkAdded: "Тапсырма жеке тізіміңе қосылды.",
      assignments: [
        { unit: 1, duration: "20 мин", title: "Түрік тілінде өзіңді таныстыр", brief: "Өзің туралы қысқаша таныстыру дайында.", steps: ["Атың, ұлтың, қалаң, оқуың және сәлемдесу туралы бес сөйлем жаз.", "ç, ş, ğ, ı, ö және ü дыбыстарына мән беріп, дауыстап оқы.", "1-бөлімнің шағын тестін жауаптарға қарамай орында."], expected: "Бес сөйлемнен тұратын мәтін және шамамен бір минуттық ауызша таныстыру." },
        { unit: 2, duration: "25 мин", title: "Осы шақты жікте", brief: "Қазір не істеп жатқаныңды айтуға жаттық.", steps: ["okumak (оқу) және çalışmak (сабақ оқу) етістіктерін алты жақта жікте.", "-yor қолданып, үш болымды сөйлем, екі болымсыз сөйлем және екі сұрақ жаз.", "Сабақтан үндестік заңын және ерекше тұлғаларды тексер."], expected: "Осы шақта дұрыс құрылған жеті сөйлем." },
        { unit: 3, duration: "25 мин", title: "Мекен септіктері мен уақытты қолдан", brief: "Бағыт, мекен және шығу тегін білдіретін жалғауларды таңда.", steps: ["okul, ev және sokak сөздерін барыс, жатыс және шығыс септіктерінде жаз.", "Әр тұлғамен бір сөйлем құрастыр.", "Үш уақытты түрікше жаз: дәл уақыт, жарты және ширек өткен уақыт."], expected: "Тоғыз септік тұлғасы, үш сөйлем және түрікше жазылған үш уақыт." },
        { unit: 5, duration: "25 мин", title: "Кешегі күніңді әңгімеле", brief: "-di өткен шағын қарапайым әңгімеде қолдан.", steps: ["Өткен күнің туралы кемінде төрт түрлі етістік қолданып, алты сөйлем жаз.", "Әр етістіктегі өткен шақ жалғауын белгілеп, үндестігін тексер.", "5-бөлімнің шағын тестін орындап, мәтінді дауыстап оқы."], expected: "Тексеріліп, түзетілген өткен шақтағы алты сөйлемдік мәтін." },
        { unit: 18, duration: "30 мин", title: "Дәрігермен диалог дайында", brief: "Денсаулық сөздерін қайталап, белгіңді түсіндіруге жаттық.", steps: ["18-бөлімді қайталап, аудармасымен бірге сегіз пайдалы сөз жаз.", "Науқас пен дәрігер арасында алты репликадан тұратын диалог құрастыр.", "Дәрігердің екі сұрағын және белгі қашан басталғанын айтатын екі жауапты қос."], expected: "Денсаулыққа қатысты сегіз сөз қолданылған алты репликалық диалог." }
      ],
      resources: "Оқу материалдары",
      resourceLead: "Сайтта бар материалдарға жылдам өту.",
      links: [
        ["Сабақтар", "Диалогтар мен жаттығулары бар жүйелі сабақтар.", "cours.html"],
        ["Сөздік", "Іздеу, мысалдар, тақырыптар және жеке таңдаулылар.", "vocabulaire.html"],
        ["Грамматика", "Ережелер, жұрнақтар және үндестік заңы.", "grammaire.html"],
        ["Жаттығулар", "Жауаптары мен түсіндірмелері бар тесттер.", "exercices.html"],
        ["Бейнелер", "Бейнелерге арналған қайталау парақтары.", "videos.html"]
      ],
      personal: "Жеке тапсырмаларым",
      local: "Тапсырмалар тек осы браузерде сақталады. Мұғалім мен басқа оқушылар оларды көрмейді.",
      task: "Қайталау тапсырмасы",
      taskPlaceholder: "Мысалы: барыс септік жалғауын қайталау",
      category: "Санат",
      categories: [["homework", "Үй тапсырмасы"], ["vocab", "Сөздік"], ["grammar", "Грамматика"], ["exam", "Емтиханға дайындық"]],
      due: "Мерзімі (міндетті емес)",
      add: "Тізіміме қосу",
      progress: "Аяқталған тапсырмалар",
      empty: "Әзірге жеке тапсырма жоқ. Қайталау немесе үй тапсырмасын қос.",
      done: "Орындалды",
      todo: "Орындау керек",
      remove: "Жою",
      noDue: "Мерзімсіз",
      saved: "Осы құрылғыда сақталды.",
      invalid: "1–120 таңбадан тұратын тапсырма енгіз.",
      loadError: "Сақталған тапсырмалар оқылмады. Деректер ауыстырылған жоқ.",
      saveError: "Сақтау мүмкін болмады. Браузер жадын тексер.",
      status: "Тізім жаңартылды."
    }
  };

  const locale = (document.documentElement.lang || "fr").split("-")[0];
  const text = TEXT[locale] || TEXT.fr;
  const storageKey = "ta_personal_tasks_v1";
  const root = document.getElementById("classroom-board");
  if (!root) return;

  document.title = `${text.title} | Türkçe Akademi`;
  root.innerHTML = `
    <div class="section-head">
      <span class="overline">${text.title}</span>
      <h1>${text.intro}</h1>
    </div>
    <section class="class-info-card" aria-labelledby="official-info-title">
      <div class="class-info-icon" aria-hidden="true">i</div>
      <div><h2 id="official-info-title">${text.official}</h2><p>${text.noNews}</p></div>
    </section>
    <section class="classroom-section homework-section" aria-labelledby="homework-title">
      <div class="section-head"><h2 id="homework-title">${text.homework}</h2><p>${text.homeworkLead}</p></div>
      <div class="homework-grid" id="homework-list"></div>
    </section>
    <section class="classroom-section" aria-labelledby="resource-title">
      <div class="section-head"><h2 id="resource-title">${text.resources}</h2><p>${text.resourceLead}</p></div>
      <div class="class-resource-grid">${text.links.map(([title, description, href]) =>
        `<a class="class-resource-card" href="${href}"><span>${title}</span><p>${description}</p></a>`
      ).join("")}</div>
    </section>
    <section class="classroom-section personal-work" aria-labelledby="personal-title">
      <div class="section-head"><h2 id="personal-title">${text.personal}</h2><p>${text.local}</p></div>
      <form id="task-form" class="task-form">
        <div class="task-field task-name-field">
          <label for="task-title">${text.task}</label>
          <input id="task-title" name="title" type="text" maxlength="120" required placeholder="${text.taskPlaceholder}">
        </div>
        <div class="task-field">
          <label for="task-category">${text.category}</label>
          <select id="task-category" name="category">${text.categories.map(([value, label]) => `<option value="${value}">${label}</option>`).join("")}</select>
        </div>
        <div class="task-field">
          <label for="task-due">${text.due}</label>
          <input id="task-due" name="due" type="date">
        </div>
        <button class="btn btn-primary task-add" type="submit">${text.add}</button>
      </form>
      <div class="task-summary"><b id="task-progress">0</b><span>${text.progress}</span></div>
      <p id="task-status" class="task-status" role="status" aria-live="polite"></p>
      <ul id="task-list" class="task-list"></ul>
    </section>`;

  const form = root.querySelector("#task-form");
  const list = root.querySelector("#task-list");
  const status = root.querySelector("#task-status");
  let tasks = [];

  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        tasks = parsed.filter(task => task && typeof task.id === "string"
          && typeof task.title === "string" && typeof task.done === "boolean"
          && text.categories.some(([category]) => category === task.category)
          && (task.due === "" || /^\d{4}-\d{2}-\d{2}$/.test(task.due)));
      }
    }
  } catch {
    status.textContent = text.loadError;
  }

  function saveTasks() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(tasks));
      status.textContent = text.saved;
      return true;
    } catch {
      status.textContent = text.saveError;
      return false;
    }
  }

  function renderTasks() {
    const complete = tasks.filter(task => task.done).length;
    root.querySelector("#task-progress").textContent = `${complete} / ${tasks.length}`;
    list.replaceChildren();
    if (!tasks.length) {
      const empty = document.createElement("li");
      empty.className = "task-empty";
      empty.textContent = text.empty;
      list.appendChild(empty);
      return;
    }

    const sorted = tasks.slice().sort((a, b) => Number(a.done) - Number(b.done)
      || (a.due || "9999-12-31").localeCompare(b.due || "9999-12-31"));
    sorted.forEach(task => {
      const item = document.createElement("li");
      item.className = `task-item${task.done ? " is-done" : ""}`;
      item.dataset.taskId = task.id;

      const checkbox = document.createElement("input");
      checkbox.className = "task-toggle";
      checkbox.type = "checkbox";
      checkbox.checked = task.done;
      checkbox.setAttribute("aria-label", `${task.done ? text.done : text.todo} : ${task.title}`);

      const details = document.createElement("div");
      details.className = "task-details";
      const title = document.createElement("span");
      title.className = "task-title";
      title.textContent = task.title;
      const meta = document.createElement("span");
      meta.className = "task-meta";
      meta.textContent = `${text.categories.find(([category]) => category === task.category)[1]} · ${
        task.due ? new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(new Date(`${task.due}T00:00:00`)) : text.noDue}`;
      details.append(title, meta);

      const remove = document.createElement("button");
      remove.className = "btn btn-ghost btn-sm task-remove";
      remove.type = "button";
      remove.dataset.action = "remove";
      remove.textContent = text.remove;
      remove.setAttribute("aria-label", `${text.remove} : ${task.title}`);
      item.append(checkbox, details, remove);
      list.appendChild(item);
    });
  }

  function addTask(title, category) {
    tasks.push({
      id: globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      title,
      category,
      due: "",
      done: false
    });
    if (saveTasks()) {
      renderTasks();
      status.textContent = text.homeworkAdded;
      root.querySelector("#personal-title").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  text.assignments.forEach(assignment => {
    const card = document.createElement("article");
    card.className = "homework-card";

    const meta = document.createElement("div");
    meta.className = "homework-meta";
    meta.textContent = `${text.unitLabel} ${assignment.unit} · ${assignment.duration}`;

    const title = document.createElement("h3");
    title.textContent = assignment.title;
    const brief = document.createElement("p");
    brief.className = "homework-brief";
    brief.textContent = assignment.brief;

    const steps = document.createElement("ol");
    steps.className = "homework-steps";
    assignment.steps.forEach(step => {
      const item = document.createElement("li");
      item.textContent = step;
      steps.appendChild(item);
    });

    const expected = document.createElement("p");
    expected.className = "homework-expected";
    expected.textContent = assignment.expected;

    const actions = document.createElement("div");
    actions.className = "homework-actions";
    const link = document.createElement("a");
    link.className = "btn btn-ghost btn-sm";
    link.href = `parcours.html#u${assignment.unit}`;
    link.textContent = `${text.openUnit} ${assignment.unit}`;
    const add = document.createElement("button");
    add.className = "btn btn-primary btn-sm";
    add.type = "button";
    add.textContent = text.homeworkAdd;
    add.addEventListener("click", () => addTask(assignment.title, "homework"));
    actions.append(link, add);
    card.append(meta, title, brief, steps, expected, actions);
    root.querySelector("#homework-list").appendChild(card);
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(form);
    const title = String(formData.get("title") || "").trim();
    if (!title || title.length > 120) {
      status.textContent = text.invalid;
      form.elements.title.focus();
      return;
    }
    const id = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    tasks.push({
      id,
      title,
      category: String(formData.get("category")),
      due: String(formData.get("due") || ""),
      done: false
    });
    if (saveTasks()) {
      form.reset();
      form.elements.title.focus();
    }
    renderTasks();
  });

  list.addEventListener("change", event => {
    if (!event.target.matches(".task-toggle")) return;
    const item = event.target.closest("[data-task-id]");
    const task = tasks.find(entry => entry.id === item?.dataset.taskId);
    if (!task) return;
    task.done = event.target.checked;
    saveTasks();
    renderTasks();
  });

  list.addEventListener("click", event => {
    const button = event.target.closest('[data-action="remove"]');
    if (!button) return;
    const item = button.closest("[data-task-id]");
    tasks = tasks.filter(task => task.id !== item.dataset.taskId);
    saveTasks();
    renderTasks();
  });

  renderTasks();
})();
