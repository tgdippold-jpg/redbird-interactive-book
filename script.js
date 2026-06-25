const screenOrder = ['cover', 'dashboard', 'toc', 'today', 'tracks', 'calendar', 'backmatter'];
let currentScreen = 'cover';
let toastTimer;

function getScreens() {
  return document.querySelectorAll('.screen');
}

function getSidebarButtons() {
  return document.querySelectorAll('.nav-btn');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 3200);
}

function animatePageTurn() {
  const frame = document.querySelector('.book-frame');
  if (!frame) return;

  frame.classList.remove('turning');
  window.requestAnimationFrame(() => {
    frame.classList.add('turning');
    window.setTimeout(() => frame.classList.remove('turning'), 360);
  });
}

function showScreen(screenName, options = {}) {
  const target = document.getElementById(`screen-${screenName}`);
  if (!target) {
    showToast(`Screen queued for future build: ${screenName}`);
    return;
  }

  getScreens().forEach((screen) => {
    screen.classList.toggle('active', screen.id === `screen-${screenName}`);
  });

  getSidebarButtons().forEach((button) => {
    button.classList.toggle('active', button.dataset.screen === screenName);
  });

  currentScreen = screenName;

  if (!options.skipAnimation) animatePageTurn();

  if (window.location.hash !== `#${screenName}`) {
    history.replaceState(null, '', `#${screenName}`);
  }
}

function showNextScreen() {
  const availableScreens = screenOrder.filter((name) => document.getElementById(`screen-${name}`));
  const index = availableScreens.indexOf(currentScreen);
  const next = availableScreens[(index + 1) % availableScreens.length] || 'cover';
  showScreen(next);
}

function handleActivation(element) {
  const screen = element.dataset.screen;
  const action = element.dataset.action;

  if (screen) {
    showScreen(screen);
    return;
  }

  if (action === 'next-page') {
    showNextScreen();
    return;
  }

  if (action === 'toast') {
    showToast(element.dataset.message || 'This action is queued for a future Notion/GitHub data hook.');
  }
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-screen], [data-action]');
  if (!target) return;
  handleActivation(target);
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter' && event.key !== ' ') return;

  const target = event.target.closest('[data-screen], [data-action]');
  if (!target) return;

  event.preventDefault();
  handleActivation(target);
});

async function hydrateDashboard() {
  try {
    const response = await fetch('data/redbird-dashboard.sample.json', { cache: 'no-store' });
    if (!response.ok) return;

    const data = await response.json();
    const active = document.getElementById('kpi-active-release');
    const rollout = document.getElementById('kpi-rollout-start');
    const mode = document.getElementById('kpi-mode');
    const readiness = document.getElementById('readiness-chart');

    if (active && data.currentPhase?.activeRelease) active.textContent = 'SL/CG';
    if (rollout && data.currentPhase?.publicRolloutStart) rollout.textContent = 'Sept';
    if (mode && data.currentPhase?.status) mode.textContent = data.currentPhase.status;

    if (readiness && Array.isArray(data.readiness)) {
      readiness.innerHTML = data.readiness.map((item) => `
        <div class="readiness-row">
          <span>${item.area}</span>
          <div class="readiness-track"><div class="readiness-fill" style="width:${item.percent}%"></div></div>
          <span>${item.percent}%</span>
        </div>
      `).join('');
    }
  } catch (error) {
    console.info('Dashboard data snapshot unavailable; using static fallback.', error);
  }
}

const initialHash = window.location.hash.replace('#', '');
if (initialHash && document.getElementById(`screen-${initialHash}`)) {
  showScreen(initialHash, { skipAnimation: true });
}

hydrateDashboard();
