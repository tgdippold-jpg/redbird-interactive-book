const screenOrder = ['cover', 'dashboard', 'toc', 'today', 'tracks', 'calendar', 'decisions', 'files', 'backmatter'];
let currentScreen = 'cover';
let toastTimer;
let dashboardSnapshot = null;

function escapeHTML(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function getScreens() {
  return document.querySelectorAll('.screen');
}

function getSidebarButtons() {
  return document.querySelectorAll('.nav-btn');
}

function ensureStylesheet(href) {
  if ([...document.styleSheets].some((sheet) => sheet.href && sheet.href.includes(href))) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
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

function addNavButton(screen, icon, label) {
  const nav = document.querySelector('.nav-list');
  if (!nav || nav.querySelector(`[data-screen="${screen}"]`)) return;

  const button = document.createElement('button');
  button.className = 'nav-btn';
  button.dataset.screen = screen;
  button.innerHTML = `<span class="nav-icon">${escapeHTML(icon)}</span> ${escapeHTML(label)}`;

  const backmatter = nav.querySelector('[data-screen="backmatter"]');
  nav.insertBefore(button, backmatter || null);
}

function createScreen(id, html) {
  if (document.getElementById(`screen-${id}`)) return;

  const frame = document.querySelector('.book-frame');
  if (!frame) return;

  const section = document.createElement('section');
  section.className = 'screen';
  section.id = `screen-${id}`;
  section.innerHTML = html;

  const backmatter = document.getElementById('screen-backmatter');
  frame.insertBefore(section, backmatter || null);
}

function addTocItem(screen, icon, title, subtitle) {
  const toc = document.querySelector('#screen-toc .toc-grid');
  if (!toc || toc.querySelector(`[data-screen="${screen}"]`)) return;

  const item = document.createElement('div');
  item.className = 'toc-item';
  item.tabIndex = 0;
  item.dataset.screen = screen;
  item.innerHTML = `<span>${escapeHTML(icon)}</span><div><div class="toc-title">${escapeHTML(title)}</div><div class="toc-sub">${escapeHTML(subtitle)}</div></div><span class="chev">›</span>`;
  toc.appendChild(item);
}

function createPortalScreens() {
  ensureStylesheet('v011-modules.css');

  const status = document.querySelector('.status-pill');
  if (status) status.textContent = 'v0.11 · portal modules';

  const title = document.querySelector('title');
  if (title) title.textContent = 'The Book of REDBIRD — v0.11 Portal Modules';

  addNavButton('decisions', '✦', 'Decisions');
  addNavButton('files', '▤', 'Files');
  addTocItem('decisions', '✦', 'Decision Log', 'Locked choices and open questions');
  addTocItem('files', '▤', 'Files / Assets', 'Sources, hosts, exports, and links');

  createScreen('decisions', `
    <div class="page-heading"><div><h2>Decision Log</h2><p>Durable choices, open questions, and next operational decisions.</p></div><div class="pixel-label">source-of-truth queue</div></div>
    <div class="portal-grid" id="decision-grid">
      <article class="decision-card locked"><div class="decision-status">Locked</div><strong class="decision-title">Notion remains canonical</strong><div class="decision-detail">The Netlify book displays summaries and snapshots; it does not replace Notion.</div></article>
      <article class="decision-card active"><div class="decision-status">Active</div><strong class="decision-title">Self Love / Clark Gable leads rollout</strong><div class="decision-detail">Lead release stays focused on September 2026 with July/August prep.</div></article>
      <article class="decision-card open"><div class="decision-status">Open</div><strong class="decision-title">Public/private boundary</strong><div class="decision-detail">Decide which Notion-derived data can appear in the deployed interface.</div></article>
    </div>
    <div class="portal-command-row"><button class="pixel-button" data-screen="dashboard">DASHBOARD</button><button class="pixel-button" data-screen="files">FILES</button><button class="pixel-button" data-screen="today">TODAY</button></div>
  `);

  createScreen('files', `
    <div class="page-heading"><div><h2>Files / Assets</h2><p>Project hosts, source files, exports, and future link policy.</p></div><div class="pixel-label">asset map</div></div>
    <div class="portal-grid" id="asset-grid">
      <article class="asset-card active"><div class="asset-type">Repo</div><strong class="asset-title">GitHub source repo</strong><div class="asset-detail">Versioned code, docs, CSS, script, and JSON snapshots.</div></article>
      <article class="asset-card active"><div class="asset-type">Site</div><strong class="asset-title">Netlify live site</strong><div class="asset-detail">Hosted interactive book and review layer.</div></article>
      <article class="asset-card source"><div class="asset-type">Notion</div><strong class="asset-title">Visual + Zine Assets</strong><div class="asset-detail">Book, zine, moodboard, typography, and artifact direction.</div></article>
      <article class="asset-card pending"><div class="asset-type">Archive</div><strong class="asset-title">Dropbox / source files</strong><div class="asset-detail">Long-term file host and source-file archive.</div></article>
    </div>
    <article class="portal-card full-width"><div class="portal-kicker">Link policy</div><strong class="portal-title">Do not expose private source links by default.</strong><div class="portal-meta">Use this screen to separate public links, private production links, and internal-only Notion references.</div></article>
    <div class="portal-command-row"><button class="pixel-button" data-screen="dashboard">DASHBOARD</button><button class="pixel-button" data-screen="decisions">DECISIONS</button><button class="pixel-button" data-screen="backmatter">BACK MATTER</button></div>
  `);
}

function renderDecisionLog(data) {
  const grid = document.getElementById('decision-grid');
  if (!grid || !Array.isArray(data.decisions)) return;

  grid.innerHTML = data.decisions.map((item) => `
    <article class="decision-card ${escapeHTML(item.status).toLowerCase()} clickable-card" tabindex="0" data-screen="dashboard">
      <div class="decision-status">${escapeHTML(item.status)}</div>
      <strong class="decision-title">${escapeHTML(item.title)}</strong>
      <div class="decision-detail">${escapeHTML(item.detail)}</div>
    </article>
  `).join('');
}

function renderAssets(data) {
  const grid = document.getElementById('asset-grid');
  if (!grid || !Array.isArray(data.filesAssets)) return;

  grid.innerHTML = data.filesAssets.map((item) => `
    <article class="asset-card ${escapeHTML(item.status).toLowerCase().replaceAll(' ', '-')} clickable-card" tabindex="0" data-screen="backmatter">
      <div class="asset-type">${escapeHTML(item.type)}</div>
      <strong class="asset-title">${escapeHTML(item.name)}</strong>
      <div class="asset-detail">${escapeHTML(item.detail)}</div>
    </article>
  `).join('');
}

function enhanceExistingRoutes() {
  const newDecisionButtons = [...document.querySelectorAll('button')].filter((button) => button.textContent.trim().toLowerCase().includes('decision'));
  newDecisionButtons.forEach((button) => {
    button.dataset.screen = 'decisions';
    delete button.dataset.action;
  });

  const assetLike = [...document.querySelectorAll('[data-screen="backmatter"]')].filter((element) => {
    const text = element.textContent.toLowerCase();
    return text.includes('asset') || text.includes('files') || text.includes('archive');
  });
  assetLike.slice(0, 6).forEach((element) => {
    element.dataset.screen = 'files';
  });
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
    dashboardSnapshot = data;

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
          <span>${escapeHTML(item.area)}</span>
          <div class="readiness-track"><div class="readiness-fill" style="width:${Number(item.percent) || 0}%"></div></div>
          <span>${Number(item.percent) || 0}%</span>
        </div>
      `).join('');
    }

    renderDecisionLog(data);
    renderAssets(data);
  } catch (error) {
    console.info('Dashboard data snapshot unavailable; using static fallback.', error);
  }
}

createPortalScreens();
enhanceExistingRoutes();

const initialHash = window.location.hash.replace('#', '');
if (initialHash && document.getElementById(`screen-${initialHash}`)) {
  showScreen(initialHash, { skipAnimation: true });
}

hydrateDashboard();
