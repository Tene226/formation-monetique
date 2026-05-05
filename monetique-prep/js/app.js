/* ===== CONSTANTS ===== */
const STORAGE_KEY = 'monetiqueprep_progress';
const PASS_THRESHOLD = 4;
const QUESTIONS_PER_SESSION = 5;

const MODULE_META = {
  module1: { title: 'Réglementation GIM-UEMOA / BCEAO',   icon: '⚖️',  file: 'module1.html' },
  module2: { title: 'Schémas de paiement Visa & Mastercard', icon: '💳', file: 'module2.html' },
  module3: { title: 'Sécurité monétique & PCI-DSS',        icon: '🔐', file: 'module3.html' },
  module4: { title: 'Gestion des litiges & Chargeback',    icon: '⚠️',  file: 'module4.html' },
  module5: { title: 'Gestion de projets monétiques',       icon: '📋', file: 'module5.html' },
};

/* ===== PROGRESS STORAGE ===== */
function getProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return buildDefaultProgress();
}

function buildDefaultProgress() {
  const p = {};
  Object.keys(MODULE_META).forEach(k => {
    p[k] = { status: 'not_started', bestScore: null, attempts: 0 };
  });
  return p;
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
  return buildDefaultProgress();
}

function updateModuleResult(moduleKey, score) {
  const p = getProgress();
  const mod = p[moduleKey];
  mod.attempts = (mod.attempts || 0) + 1;
  if (mod.bestScore === null || score > mod.bestScore) {
    mod.bestScore = score;
  }
  mod.status = mod.bestScore >= PASS_THRESHOLD ? 'completed' : 'in_progress';
  saveProgress(p);
  return p;
}

/* ===== QUESTION PICKER ===== */
function pickQuestions(moduleKey, n) {
  n = n || QUESTIONS_PER_SESSION;
  if (typeof QUESTION_BANK === 'undefined') {
    console.error('QUESTION_BANK not loaded');
    return [];
  }
  const bank = QUESTION_BANK[moduleKey];
  if (!bank || !bank.length) return [];
  return [...bank].sort(() => Math.random() - 0.5).slice(0, n);
}

/* ===== SIDEBAR TOGGLE ===== */
function initSidebar() {
  const hamburger = document.getElementById('hamburger');
  const sidebar   = document.getElementById('sidebar');
  const overlay   = document.getElementById('overlay');
  if (!hamburger || !sidebar) return;

  function openSidebar()  { sidebar.classList.add('open'); overlay && overlay.classList.add('show'); }
  function closeSidebar() { sidebar.classList.remove('open'); overlay && overlay.classList.remove('show'); }

  hamburger.addEventListener('click', () => {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });
  overlay && overlay.addEventListener('click', closeSidebar);
}

/* ===== SIDEBAR NAV BADGES ===== */
function renderSidebarBadges() {
  const p = getProgress();
  Object.keys(MODULE_META).forEach(key => {
    const el = document.getElementById('nav-badge-' + key);
    if (!el) return;
    const status = p[key].status;
    el.className = 'nav-badge ' + status;
    el.textContent = status === 'completed' ? '✓' : status === 'in_progress' ? '…' : '';
  });
}

/* ===== DASHBOARD ===== */
function renderDashboard() {
  const p = getProgress();
  const completed = Object.values(p).filter(m => m.status === 'completed').length;
  const total = Object.keys(MODULE_META).length;

  const fillEl = document.getElementById('global-progress-fill');
  const textEl = document.getElementById('global-progress-text');
  if (fillEl) fillEl.style.width = ((completed / total) * 100) + '%';
  if (textEl) textEl.textContent = completed + ' / ' + total + ' modules complétés';

  const statsCompleted = document.getElementById('stat-completed');
  const statsAttempts  = document.getElementById('stat-attempts');
  const statsBest      = document.getElementById('stat-best');
  if (statsCompleted) statsCompleted.textContent = completed;
  if (statsAttempts) {
    const totalAttempts = Object.values(p).reduce((sum, m) => sum + (m.attempts || 0), 0);
    statsAttempts.textContent = totalAttempts;
  }
  if (statsBest) {
    const scores = Object.values(p).map(m => m.bestScore).filter(s => s !== null);
    statsBest.textContent = scores.length ? Math.max(...scores) + '/5' : '—';
  }

  Object.keys(MODULE_META).forEach(key => {
    const mod    = p[key];
    const meta   = MODULE_META[key];
    const card   = document.getElementById('card-' + key);
    if (!card) return;

    card.className = 'module-card ' + mod.status;

    const badgeEl = document.getElementById('badge-' + key);
    if (badgeEl) {
      badgeEl.className = 'badge ' + mod.status;
      badgeEl.textContent = {
        completed:   'Complété',
        in_progress: 'En cours',
        not_started: 'Non commencé',
      }[mod.status];
    }

    const scoreEl = document.getElementById('score-' + key);
    if (scoreEl) {
      if (mod.bestScore !== null) {
        scoreEl.innerHTML = 'Meilleur score : <strong>' + mod.bestScore + '/5</strong>';
        scoreEl.className = 'card-score ' + (mod.bestScore >= PASS_THRESHOLD ? 'good' : '');
      } else {
        scoreEl.textContent = 'Pas encore tenté';
        scoreEl.className = 'card-score';
      }
    }

    const attEl = document.getElementById('attempts-' + key);
    if (attEl) {
      attEl.textContent = mod.attempts > 0
        ? mod.attempts + ' tentative' + (mod.attempts > 1 ? 's' : '')
        : '';
    }

    const btnEl = document.getElementById('btn-' + key);
    if (btnEl) {
      const labels = { not_started: 'Commencer', in_progress: 'Reprendre', completed: 'Revoir' };
      const classes = { not_started: 'btn btn-primary btn-full', in_progress: 'btn btn-warning btn-full', completed: 'btn btn-success btn-full' };
      btnEl.textContent = labels[mod.status];
      btnEl.className = classes[mod.status];
      const num = key.replace('module', '');
      btnEl.href = 'modules/module' + num + '.html';
    }
  });
}

/* ===== QCM ENGINE ===== */
let qcmState = {
  questions: [],
  answers: {},
  submitted: {},
  moduleKey: null,
};

function initQCM(moduleKey) {
  qcmState.moduleKey = moduleKey;
  qcmState.questions = pickQuestions(moduleKey);
  qcmState.answers   = {};
  qcmState.submitted = {};
  renderQCM();
}

function renderQCM() {
  const container = document.getElementById('qcm-questions');
  const resultEl  = document.getElementById('qcm-result');
  if (!container) return;

  resultEl && resultEl.classList.remove('show');
  container.classList.remove('hidden');

  container.innerHTML = '';
  qcmState.questions.forEach((q, i) => renderQuestion(q, i, container));
  updateQCMProgress();

  const submitBtn = document.getElementById('qcm-submit');
  if (submitBtn) {
    submitBtn.classList.remove('hidden');
    submitBtn.onclick = submitAllAnswers;
  }
}

function renderQuestion(q, idx, container) {
  const letters = ['A', 'B', 'C', 'D'];
  const block = document.createElement('div');
  block.className = 'question-block';
  block.id = 'qblock-' + idx;

  const numEl = document.createElement('div');
  numEl.className = 'question-num';
  numEl.textContent = 'Question ' + (idx + 1) + ' / ' + qcmState.questions.length;
  block.appendChild(numEl);

  const textEl = document.createElement('div');
  textEl.className = 'question-text';
  textEl.textContent = q.q;
  block.appendChild(textEl);

  const choicesEl = document.createElement('div');
  choicesEl.className = 'choices';
  q.choices.forEach((choice, ci) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.type = 'button';
    btn.dataset.qi = idx;
    btn.dataset.ci = ci;
    btn.innerHTML = '<span class="choice-letter">' + letters[ci] + '</span><span>' + choice + '</span>';
    btn.addEventListener('click', () => selectChoice(idx, ci));
    choicesEl.appendChild(btn);
  });
  block.appendChild(choicesEl);

  const feedbackEl = document.createElement('div');
  feedbackEl.className = 'feedback-box';
  feedbackEl.id = 'feedback-' + idx;
  block.appendChild(feedbackEl);

  container.appendChild(block);
}

function selectChoice(qi, ci) {
  if (qcmState.submitted[qi]) return;
  qcmState.answers[qi] = ci;
  const block = document.getElementById('qblock-' + qi);
  if (!block) return;
  block.querySelectorAll('.choice-btn').forEach(btn => {
    btn.classList.remove('selected');
    if (parseInt(btn.dataset.ci) === ci) btn.classList.add('selected');
  });
  updateQCMProgress();
}

function submitAllAnswers() {
  const q = qcmState.questions;
  let score = 0;
  q.forEach((qdata, i) => {
    const chosen = qcmState.answers[i];
    qcmState.submitted[i] = true;
    const block = document.getElementById('qblock-' + i);
    if (!block) return;
    const buttons = block.querySelectorAll('.choice-btn');
    buttons.forEach(btn => {
      btn.disabled = true;
      const ci = parseInt(btn.dataset.ci);
      if (ci === qdata.correct) btn.classList.add('correct');
      if (ci === chosen && ci !== qdata.correct) btn.classList.add('wrong');
    });
    const feedbackEl = document.getElementById('feedback-' + i);
    if (!feedbackEl) return;
    const isCorrect = chosen === qdata.correct;
    if (isCorrect) score++;
    feedbackEl.className = 'feedback-box show ' + (isCorrect ? 'correct-fb' : 'wrong-fb');
    feedbackEl.innerHTML =
      '<span class="feedback-icon">' + (isCorrect ? '✅' : '❌') + '</span>' +
      '<span><strong>' + (isCorrect ? 'Correct !' : 'Incorrect.') + '</strong> ' + qdata.exp + '</span>';
  });

  const submitBtn = document.getElementById('qcm-submit');
  if (submitBtn) submitBtn.classList.add('hidden');

  updateModuleResult(qcmState.moduleKey, score);
  renderSidebarBadges();
  showScoreResult(score);
}

function showScoreResult(score) {
  const resultEl = document.getElementById('qcm-result');
  if (!resultEl) return;
  resultEl.classList.add('show');

  const circleEl = document.getElementById('score-circle');
  const numEl    = document.getElementById('score-num');
  const msgEl    = document.getElementById('score-msg');

  if (numEl) numEl.innerHTML = '<span class="score-num">' + score + '</span><span class="score-denom">/5</span>';
  if (circleEl) circleEl.className = 'score-circle ' + (score >= PASS_THRESHOLD ? 'pass' : 'fail');

  const messages = {
    5: 'Parfait ! Score maximal — maîtrise totale.',
    4: 'Très bien ! Module validé avec succès.',
    3: 'Bien essayé. Encore un effort pour valider.',
    2: 'Il faut revoir le cours. Tu peux le faire !',
    1: 'Retourne au cours, ne te décourage pas.',
    0: 'Relis attentivement le cours avant de réessayer.',
  };
  if (msgEl) msgEl.textContent = messages[score] || '';

  resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function retryQCM() {
  const container = document.getElementById('qcm-questions');
  const resultEl  = document.getElementById('qcm-result');
  if (resultEl) resultEl.classList.remove('show');
  if (container) { container.innerHTML = ''; container.classList.remove('hidden'); }
  initQCM(qcmState.moduleKey);
  document.getElementById('qcm-section') && document.getElementById('qcm-section').scrollIntoView({ behavior: 'smooth' });
}

function updateQCMProgress() {
  const answered = Object.keys(qcmState.answers).length;
  const total    = qcmState.questions.length;
  const fillEl   = document.getElementById('qcm-progress-fill');
  if (fillEl) fillEl.style.width = (total > 0 ? (answered / total) * 100 : 0) + '%';
}

/* ===== 45-SECOND COUNTDOWN ===== */
function initQCMCountdown(moduleKey) {
  const lockedEl  = document.getElementById('qcm-locked');
  const unlockedEl = document.getElementById('qcm-unlocked');
  const countEl   = document.getElementById('countdown-num');
  if (!lockedEl || !unlockedEl) return;

  let remaining = 45;
  if (countEl) countEl.textContent = remaining;

  const timer = setInterval(() => {
    remaining--;
    if (countEl) countEl.textContent = remaining;
    if (remaining <= 0) {
      clearInterval(timer);
      lockedEl.classList.add('hidden');
      unlockedEl.classList.remove('hidden');
      initQCM(moduleKey);
    }
  }, 1000);

  const skipBtn = document.getElementById('skip-countdown');
  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      clearInterval(timer);
      remaining = 0;
      lockedEl.classList.add('hidden');
      unlockedEl.classList.remove('hidden');
      initQCM(moduleKey);
    });
  }
}

/* ===== RESET BUTTON ===== */
function initResetButton() {
  const btn = document.getElementById('reset-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const confirmed = window.confirm(
      'Réinitialiser toute la progression ?\n\nCette action effacera tous les scores et statuts. Elle est irréversible.'
    );
    if (!confirmed) return;
    resetProgress();
    renderDashboard();
    renderSidebarBadges();
  });
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  renderSidebarBadges();
  renderDashboard();
  initResetButton();
});
