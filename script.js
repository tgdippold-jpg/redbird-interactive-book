const screenOrder = ['cover', 'dashboard', 'toc', 'today', 'current-release', 'tracks', 'audio', 'visual', 'calendar', 'roadmap', 'decisions', 'files', 'style', 'grant', 'backmatter'];
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
    showToast(`This page is queued for a future build: ${screenName}`);
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

  if (action === 'toggle-drawer') {
    toggleDrawer();
    return;
  }

  if (action === 'close-drawer') {
    closeDrawer();
    return;
  }

  if (action === 'toast') {
    showToast(element.dataset.message || 'This action is queued for a future project page.');
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
  ensureStylesheet('v012-mobile-book-polish.css');
  ensureStylesheet('v011-dashboard-cleanup.css');
  ensureStylesheet('v011-toc-expansion.css');

  const status = document.querySelector('.status-pill');
  if (status) status.textContent = 'v0.11 · navigation cleanup';

  const title = document.querySelector('title');
  if (title) title.textContent = 'The Book of REDBIRD — v0.11 Navigation Cleanup';

  addNavButton('decisions', '✦', 'Decisions');
  addNavButton('files', '▤', 'Files');

  createScreen('current-release', `
    <div class="page-heading"><div><h2>Current Release Package</h2><p>Self Love / Clark Gable and the work needed to get it ready.</p></div><div class="pixel-label">lead release</div></div>
    <div class="portal-grid">
      <article class="portal-card full-width"><div class="portal-kicker">Active focus</div><strong class="portal-title">Self Love / Clark Gable</strong><div class="portal-meta">Lead release for the September public rollout. Current work centers on mix review, artwork direction, release copy, metadata, and file readiness.</div></article>
      <article class="decision-card active clickable-card" tabindex="0" data-screen="audio"><div class="decision-status">Audio</div><strong class="decision-title">Mix + listening</strong><div class="decision-detail">Track playback notes and final-shape decisions.</div></article>
      <article class="decision-card open clickable-card" tabindex="0" data-screen="visual"><div class="decision-status">Visual</div><strong class="decision-title">Artwork + zine</strong><div class="decision-detail">Book, visual identity, and asset direction.</div></article>
      <article class="decision-card open clickable-card" tabindex="0" data-screen="decisions"><div class="decision-status">Copy</div><strong class="decision-title">Public language</strong><div class="decision-detail">Release copy, story framing, and calendar wording.</div></article>
    </div>
    <div class="portal-command-row"><button class="pixel-button" data-screen="audio">AUDIO</button><button class="pixel-button" data-screen="visual">VISUAL</button><button class="pixel-button" data-screen="files">FILES</button></div>
  `);

  createScreen('audio', `
    <div class="page-heading"><div><h2>Audio + Listening</h2><p>Mix notes, playback checks, and track-level attention.</p></div><div class="pixel-label">listening log</div></div>
    <div class="portal-grid">
      <article class="portal-card full-width"><div class="portal-kicker">Current audio focus</div><strong class="portal-title">Self Love / Clark Gable mix review</strong><div class="portal-meta">Recent listening work has focused on reverb, splice perception, dynamics, and the gradual crescendo into the midpoint.</div></article>
      <article class="decision-card active"><div class="decision-status">Note</div><strong class="decision-title">First “Let go”</strong><div class="decision-detail">May need a bigger reverb moment.</div></article>
      <article class="decision-card active"><div class="decision-status">Note</div><strong class="decision-title">Bern dynamics</strong><div class="decision-detail">May need light evening due to splice-based unevenness.</div></article>
      <article class="decision-card open"><div class="decision-status">Question</div><strong class="decision-title">Crescendo shape</strong><div class="decision-detail">“Before I can truly love...” may need a more moderate climb.</div></article>
    </div>
    <div class="portal-command-row"><button class="pixel-button" data-screen="current-release">RELEASE PACKAGE</button><button class="pixel-button" data-screen="tracks">TRACKS</button><button class="pixel-button" data-screen="decisions">DECISIONS</button></div>
  `);

  createScreen('visual', `
    <div class="page-heading"><div><h2>Visual + Zine Assets</h2><p>Artwork, book direction, pixel references, and artifact design.</p></div><div class="pixel-label">visual buildout</div></div>
    <div class="portal-grid">
      <article class="portal-card full-width"><div class="portal-kicker">Current direction</div><strong class="portal-title">Late-80s adventure-game book object</strong><div class="portal-meta">The interface should stay atmospheric, dithered, and playable while becoming clearer and more useful.</div></article>
      <article class="asset-card source clickable-card" tabindex="0" data-screen="style"><div class="asset-type">Reference</div><strong class="asset-title">Game menu language</strong><div class="asset-detail">Loom, King's Quest, Castlevania, Zelda, Game Boy typography.</div></article>
      <article class="asset-card active"><div class="asset-type">Book</div><strong class="asset-title">Page feel</strong><div class="asset-detail">Book-like proportions, page turns, and clearer spacing.</div></article>
      <article class="asset-card pending"><div class="asset-type">Zine</div><strong class="asset-title">Artifact layer</strong><div class="asset-detail">Lyric spreads, back matter, visual motifs, and release materials.</div></article>
    </div>
    <div class="portal-command-row"><button class="pixel-button" data-screen="style">STYLE REFS</button><button class="pixel-button" data-screen="files">FILES</button><button class="pixel-button" data-screen="current-release">RELEASE</button></div>
  `);

  createScreen('roadmap', `
    <div class="page-heading"><div><h2>Roadmap + Tasks</h2><p>Open work, next steps, and what needs attention.</p></div><div class="pixel-label">open work</div></div>
    <div class="portal-grid">
      <article class="decision-card active"><div class="decision-status">Now</div><strong class="decision-title">Interactive book cleanup</strong><div class="decision-detail">Language, dashboard, contents, navigation, and detail pages.</div></article>
      <article class="decision-card active"><div class="decision-status">Now</div><strong class="decision-title">Lead release readiness</strong><div class="decision-detail">Audio, artwork, copy, metadata, and files.</div></article>
      <article class="decision-card open"><div class="decision-status">Next</div><strong class="decision-title">Detail page buildout</strong><div class="decision-detail">Give each release and project area a meaningful destination.</div></article>
    </div>
    <div class="portal-command-row"><button class="pixel-button" data-screen="dashboard">DASHBOARD</button><button class="pixel-button" data-screen="decisions">DECISIONS</button><button class="pixel-button" data-screen="calendar">CALENDAR</button></div>
  `);

  createScreen('style', `
    <div class="page-heading"><div><h2>Style References</h2><p>Pixel games, fonts, sprites, textures, and sound cues.</p></div><div class="pixel-label">reference shelf</div></div>
    <div class="portal-grid">
      <article class="asset-card source"><div class="asset-type">Adventure</div><strong class="asset-title">Loom / King's Quest</strong><div class="asset-detail">Storybook atmosphere, dithered backgrounds, menu framing.</div></article>
      <article class="asset-card source"><div class="asset-type">Gothic</div><strong class="asset-title">Castlevania II / III</strong><div class="asset-detail">Menus, item screens, password entry, dark fantasy UI.</div></article>
      <article class="asset-card source"><div class="asset-type">Sound</div><strong class="asset-title">Zelda-style cues</strong><div class="asset-detail">Page turns, item moments, keys, stairs, chimes, and alerts as references.</div></article>
      <article class="asset-card source"><div class="asset-type">Type</div><strong class="asset-title">Game Boy / pixel fonts</strong><div class="asset-detail">Compact labels, menu text, and small UI accents.</div></article>
    </div>
    <div class="portal-command-row"><button class="pixel-button" data-screen="visual">VISUAL</button><button class="pixel-button" data-screen="backmatter">BACK MATTER</button><button class="pixel-button" data-screen="dashboard">DASHBOARD</button></div>
  `);

  createScreen('grant', `
    <div class="page-heading"><div><h2>Grant / Salt Lick Materials</h2><p>Application framing, budget thinking, and project support materials.</p></div><div class="pixel-label">support layer</div></div>
    <div class="portal-grid">
      <article class="portal-card full-width"><div class="portal-kicker">Grant-facing frame</div><strong class="portal-title">REDBIRD as album, archive, and artifact</strong><div class="portal-meta">This section should eventually hold concise application materials, budget notes, and project language for support opportunities.</div></article>
      <article class="decision-card active"><div class="decision-status">Budget</div><strong class="decision-title">Funding frame</strong><div class="decision-detail">Keep support needs clear without crowding the public book experience.</div></article>
      <article class="decision-card open"><div class="decision-status">Open</div><strong class="decision-title">What becomes public?</strong><div class="decision-detail">Decide what grant language belongs in the live archive versus private notes.</div></article>
    </div>
    <div class="portal-command-row"><button class="pixel-button" data-screen="calendar">CALENDAR</button><button class="pixel-button" data-screen="decisions">DECISIONS</button><button class="pixel-button" data-screen="backmatter">BACK MATTER</button></div>
  `);

  createScreen('decisions', `
    <div class="page-heading"><div><h2>Decision Log</h2><p>Locked choices, open questions, and what still needs a call.</p></div><div class="pixel-label">choices + questions</div></div>
    <div class="portal-grid" id="decision-grid">
      <article class="decision-card locked"><div class="decision-status">Locked</div><strong class="decision-title">September begins the public rollout</strong><div class="decision-detail">Self Love / Clark Gable remains the lead release focus.</div></article>
      <article class="decision-card active"><div class="decision-status">Active</div><strong class="decision-title">Lead release package</strong><div class="decision-detail">Mix, artwork, copy, metadata, and files need continued review.</div></article>
      <article class="decision-card open"><div class="decision-status">Open</div><strong class="decision-title">What belongs in the book?</strong><div class="decision-detail">Decide which project details should be visible in this interactive archive.</div></article>
    </div>
    <div class="portal-command-row"><button class="pixel-button" data-screen="dashboard">DASHBOARD</button><button class="pixel-button" data-screen="files">FILES</button><button class="pixel-button" data-screen="today">TODAY</button></div>
  `);

  createScreen('files', `
    <div class="page-heading"><div><h2>Files / Assets</h2><p>Masters, exports, artwork, references, and project links.</p></div><div class="pixel-label">asset map</div></div>
    <div class="portal-grid" id="asset-grid">
      <article class="asset-card active"><div class="asset-type">Book</div><strong class="asset-title">Interactive book</strong><div class="asset-detail">The live project archive and review surface.</div></article>
      <article class="asset-card active"><div class="asset-type">Audio</div><strong class="asset-title">Audio + Listening</strong><div class="asset-detail">Mix notes, listening passes, and playback observations.</div></article>
      <article class="asset-card source"><div class="asset-type">Visual</div><strong class="asset-title">Visual + Zine Assets</strong><div class="asset-detail">Artwork, typography, book, zine, and style direction.</div></article>
      <article class="asset-card pending"><div class="asset-type">Archive</div><strong class="asset-title">Source files</strong><div class="asset-detail">Masters, exports, stems, source links, and long-term project memory.</div></article>
    </div>
    <article class="portal-card full-width"><div class="portal-kicker">Working rule</div><strong class="portal-title">Keep public-facing pages clean.</strong><div class="portal-meta">Detailed source links can stay tucked behind clear project sections instead of crowding the book experience.</div></article>
    <div class="portal-command-row"><button class="pixel-button" data-screen="dashboard">DASHBOARD</button><button class="pixel-button" data-screen="decisions">DECISIONS</button><button class="pixel-button" data-screen="backmatter">BACK MATTER</button></div>
  `);
}

function createOpenQuestionsDrawer() {
  if (document.getElementById('open-questions-drawer')) return;
  const app = document.querySelector('.redbird-app');
  const frame = document.querySelector('.book-frame');
  if (!app || !frame) return;

  const toggle = document.createElement('div');
  toggle.className = 'open-questions-toggle';
  toggle.innerHTML = '<button class="pixel-button" data-action="toggle-drawer">OPEN QUESTIONS</button>';
  frame.appendChild(toggle);

  const drawer = document.createElement('aside');
  drawer.className = 'drawer-panel';
  drawer.id = 'open-questions-drawer';
  drawer.innerHTML = `
    <button class="pixel-button drawer-close" data-action="close-drawer">CLOSE</button>
    <h3>Open Questions</h3>
    <div class="drawer-list" id="drawer-list">
      <div class="drawer-item"><strong>What belongs in the book?</strong><span>Decide which project details should be visible in the interactive archive.</span></div>
    </div>
  `;
  app.appendChild(drawer);
}

function toggleDrawer() {
  const drawer = document.getElementById('open-questions-drawer');
  if (drawer) drawer.classList.toggle('open');
}

function closeDrawer() {
  const drawer = document.getElementById('open-questions-drawer');
  if (drawer) drawer.classList.remove('open');
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

function renderTracks(data) {
  const grid = document.querySelector('#screen-tracks .tracks-grid');
  if (!grid || !Array.isArray(data.tracks)) return;

  grid.innerHTML = data.tracks.map((track) => `
    <article class="track-card ${track.primary ? 'primary' : ''} clickable-card" tabindex="0" data-screen="calendar">
      <div class="track-kicker">${track.primary ? '<span class="status-dot"></span>' : ''}${escapeHTML(track.kicker)}</div>
      <strong class="track-title">${escapeHTML(track.title)}</strong>
      <div class="track-meta">${escapeHTML(track.detail)}</div>
      <div class="action-row">
        <button class="action-chip" data-screen="today">Today</button>
        <button class="action-chip" data-screen="calendar">Timeline</button>
        <button class="action-chip" data-screen="decisions">Decisions</button>
      </div>
    </article>
  `).join('');
}

function renderReleaseCalendar(data) {
  const list = document.querySelector('#screen-calendar .release-list');
  if (!list || !Array.isArray(data.releaseArc)) return;

  list.innerHTML = data.releaseArc.map((item) => `
    <article class="release-row ${escapeHTML(item.type).toLowerCase()} clickable-card" tabindex="0" data-screen="tracks">
      <div class="month">${escapeHTML(item.month.replace(' 2026', '').replace(' 2027', ''))}</div>
      <div><div class="release-name">${escapeHTML(item.label)}</div><div class="release-sub">${escapeHTML(item.detail || item.type)}</div></div>
      <div class="release-type">${escapeHTML(item.type)}</div>
    </article>
  `).join('');
}

function renderDrawer(data) {
  const list = document.getElementById('drawer-list');
  if (!list) return;

  const questions = Array.isArray(data.openQuestions) ? data.openQuestions : [];
  const actions = Array.isArray(data.nextActions) ? data.nextActions.map((action) => ({ title: 'Next action', detail: action })) : [];
  const items = [...questions, ...actions];

  if (!items.length) return;

  list.innerHTML = items.map((item) => `
    <div class="drawer-item"><strong>${escapeHTML(item.title)}</strong><span>${escapeHTML(item.detail)}</span></div>
  `).join('');
}

function setRouteWhenTextIncludes(terms, screen) {
  const candidates = document.querySelectorAll('[data-screen], button, .toc-item, .project-area-card, .info-card, .kpi-card, .track-card, .reference-row');
  candidates.forEach((element) => {
    const text = element.textContent.toLowerCase();
    if (terms.some((term) => text.includes(term))) {
      element.dataset.screen = screen;
      delete element.dataset.action;
    }
  });
}

function enhanceExistingRoutes() {
  setRouteWhenTextIncludes(['current release package', 'self love / clark gable', 'lead release', 'release readiness'], 'current-release');
  setRouteWhenTextIncludes(['audio + listening', 'mix pass', 'mix review', 'final mix notes', 'listening note'], 'audio');
  setRouteWhenTextIncludes(['visual + zine', 'artwork direction', 'visual pass'], 'visual');
  setRouteWhenTextIncludes(['style references', 'pixel games', 'sound cues'], 'style');
  setRouteWhenTextIncludes(['roadmap + tasks', 'open work', 'next steps'], 'roadmap');
  setRouteWhenTextIncludes(['files / assets', 'masters, exports', 'metadata + files'], 'files');
  setRouteWhenTextIncludes(['grant / salt lick', 'salt lick materials'], 'grant');
  setRouteWhenTextIncludes(['decisions', 'open decisions', 'new decision', 'public language'], 'decisions');
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
    renderTracks(data);
    renderReleaseCalendar(data);
    renderDrawer(data);
    enhanceExistingRoutes();
  } catch (error) {
    console.info('Project data unavailable; using static fallback.', error);
  }
}

createPortalScreens();
createOpenQuestionsDrawer();
enhanceExistingRoutes();

const initialHash = window.location.hash.replace('#', '');
if (initialHash && document.getElementById(`screen-${initialHash}`)) {
  showScreen(initialHash, { skipAnimation: true });
}

hydrateDashboard();
