/* Minuteur de concentration pour le planning d'études */

document.addEventListener("DOMContentLoaded", () => {
  const clock = document.getElementById("focus-clock");
  const modeLabel = document.getElementById("focus-mode");
  const status = document.getElementById("focus-status");
  const toggle = document.getElementById("focus-toggle");
  const reset = document.getElementById("focus-reset");
  if (!clock || !modeLabel || !status || !toggle || !reset) return;

  const workDuration = 25 * 60;
  const shortBreakDuration = 5 * 60;
  const longBreakDuration = 15 * 60;
  let remaining = workDuration;
  let mode = "work";
  let completedSessions = 0;
  let deadline = 0;
  let intervalId = null;

  function render() {
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    clock.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    modeLabel.textContent = mode === "work" ? "Séance de travail" : "Pause";
    toggle.textContent = intervalId === null ? "Démarrer" : "Mettre en pause";
  }

  function finishPhase() {
    if (intervalId !== null) window.clearInterval(intervalId);
    intervalId = null;
    if (mode === "work") {
      completedSessions += 1;
      const isLongBreak = completedSessions % 4 === 0;
      mode = "break";
      remaining = isLongBreak ? longBreakDuration : shortBreakDuration;
      status.textContent = isLongBreak
        ? "Quatre séances terminées. Prends une pause de 15 minutes."
        : "Séance terminée. Lève-toi et profite de ta pause.";
    } else {
      mode = "work";
      remaining = workDuration;
      status.textContent = "Pause terminée. Choisis ta prochaine petite tâche.";
    }
    render();
  }

  function tick() {
    remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    if (remaining === 0) {
      finishPhase();
      return;
    }
    render();
  }

  toggle.addEventListener("click", () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
      remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      status.textContent = "Minuteur en pause.";
      render();
      return;
    }
    if (remaining === 0) remaining = mode === "work" ? workDuration : shortBreakDuration;
    deadline = Date.now() + remaining * 1000;
    intervalId = window.setInterval(tick, 250);
    status.textContent = mode === "work" ? "Concentre-toi sur une seule tâche." : "Pause en cours, bouge un peu.";
    render();
  });

  reset.addEventListener("click", () => {
    if (intervalId !== null) window.clearInterval(intervalId);
    intervalId = null;
    mode = "work";
    remaining = workDuration;
    completedSessions = 0;
    status.textContent = "Minuteur remis à zéro.";
    render();
  });

  render();
});
