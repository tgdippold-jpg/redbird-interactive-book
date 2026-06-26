// REDBIRD Interactive Book v0.11 — checkpoints 9, 10, 11

(function () {
  function q(selector) {
    return document.querySelector(selector);
  }

  function setStatus() {
    const status = q('.status-pill');
    if (status) status.textContent = 'v0.11 · stabilized book pass';

    document.title = 'The Book of REDBIRD — v0.11 Stabilized Book Pass';
  }

  function addNav(screen, icon, label) {
    if (typeof addNavButton === 'function') addNavButton(screen, icon, label);
  }

  function makeScreen(id, html) {
    if (typeof createScreen === 'function') createScreen(id, html);
  }

  function addToOrder(items) {
    if (typeof screenOrder === 'undefined' || !Array.isArray(screenOrder)) return;
    items.forEach((item) => {
      if (!screenOrder.includes(item)) screenOrder.push(item);
    });
  }

  function addToc(screen, icon, title, subtitle) {
    if (typeof addTocItem === 'function') addTocItem(screen, icon, title, subtitle);
  }

  function updateTodayPage() {
    const today = q('#screen-today');
    if (!today) return;

    today.innerHTML = `
      <div class="page-heading"><div><h2>REDBIRD Today</h2><p>A daily cockpit for the next useful move.</p></div><div class="pixel-label">what matters next</div></div>
      <div class="today-cockpit">
        <article class="today-panel hero clickable-card" tabindex="0" data-screen="current-release">
          <div class="today-kicker">Current focus</div>
          <strong class="today-title">Self Love / Clark Gable</strong>
          <div class="today-copy">Lead release package for the September rollout. Keep attention on mix, artwork, release copy, metadata, and files.</div>
          <div class="today-actions"><button class="pixel-button" data-screen="current-release">REVIEW RELEASE</button><button class="pixel-button" data-screen="audio">AUDIO NOTES</button></div>
        </article>
        <article class="today-panel clickable-card" tabindex="0" data-screen="audio">
          <div class="today-kicker">Latest listening notes</div>
          <strong class="today-title">Mix attention</strong>
          <div class="today-list"><div>First “Let go” may need a bigger reverb moment.</div><div>Bern dynamics may need slight evening.</div><div>“Before I can truly love…” may need a gentler crescendo.</div></div>
        </article>
        <article class="today-panel clickable-card" tabindex="0" data-screen="decisions">
          <div class="today-kicker">Open decisions</div>
          <strong class="today-title">Keep decisions separate</strong>
          <div class="today-list"><div>Final mix shape.</div><div>Artwork direction.</div><div>Release copy and metadata.</div><div>What belongs in the public book.</div></div>
        </article>
        <article class="today-panel clickable-card" tabindex="0" data-screen="roadmap">
          <div class="today-kicker">Next useful action</div>
          <strong class="today-title">Move one thing forward</strong>
          <div class="today-copy">Choose the smallest practical task: review the lead package, add one listening note, check files, or make one visual decision.</div>
          <div class="today-actions"><button class="pixel-button" data-screen="files">CHECK FILES</button><button class="pixel-button" data-screen="visual">VISUAL PASS</button></div>
        </article>
        <article class="today-panel full clickable-card" tabindex="0" data-screen="dashboard">
          <div class="today-kicker">Release readiness</div>
          <strong class="today-title">Lead package is building.</strong>
          <div class="today-copy">The readiness bars stay on the Dashboard. Today is for deciding what gets touched next.</div>
          <div class="readiness"><span style="width:38%"></span></div>
        </article>
      </div>
    `;
  }

  function createStabilizationScreen() {
    makeScreen('stabilization', `
      <div class="page-heading"><div><h2>Review + Stabilization</h2><p>Check that the book still feels coherent after the expansion pass.</p></div><div class="pixel-label">checkpoint 9</div></div>
      <div class="review-grid">
        <article class="review-card done"><div class="review-kicker">Nav</div><strong class="review-title">Main routes reviewed</strong><div class="review-copy">The expanded project sections now have clearer destinations instead of looping back to the same few screens.</div></article>
        <article class="review-card done"><div class="review-kicker">TOC</div><strong class="review-title">Contents expanded</strong><div class="review-copy">The table of contents now reads as a broad REDBIRD project map.</div></article>
        <article class="review-card done"><div class="review-kicker">Dashboard</div><strong class="review-title">Still calm</strong><div class="review-copy">Dashboard remains focused on current release, readiness, needs attention, and recent update.</div></article>
        <article class="review-card done"><div class="review-kicker">Today</div><strong class="review-title">Rebuilt as cockpit</strong><div class="review-copy">Today now gives a current focus, latest note, open decisions, and next practical action.</div></article>
        <article class="review-card watch"><div class="review-kicker">Watch</div><strong class="review-title">Mobile feel</strong><div class="review-copy">Next human review should check phone scrolling, page-turn placement, and density.</div></article>
        <article class="review-card watch"><div class="review-kicker">Watch</div><strong class="review-title">Visual balance</strong><div class="review-copy">Keep restoring the book/game atmosphere while adding function.</div></article>
      </div>
    `);
  }

  function createAestheticScreen() {
    makeScreen('aesthetic-lab', `
      <div class="page-heading"><div><h2>Aesthetic + Sound Lab</h2><p>Game-reference direction, interface cues, and optional sound moments.</p></div><div class="pixel-label">checkpoint 11</div></div>
      <div class="style-grid">
        <article class="style-card full"><div class="style-kicker">Direction</div><strong class="style-title">Playable album archive</strong><div class="style-copy">The book should feel like a late-80s adventure-game object: dithered, atmospheric, readable, and useful.</div></article>
        <article class="style-card"><div class="style-kicker">Storybook</div><strong class="style-title">Loom / King's Quest</strong><div class="style-copy">Use for painterly pixel shading, fantasy menu framing, and storybook atmosphere.</div></article>
        <article class="style-card"><div class="style-kicker">Gothic UI</div><strong class="style-title">Castlevania II / III</strong><div class="style-copy">Use for menu gravity, item screens, password-style archive cues, and darker interface contrast.</div></article>
        <article class="style-card"><div class="style-kicker">Text</div><strong class="style-title">Game Boy / pixel labels</strong><div class="style-copy">Use sparingly for labels, navigation, menu states, and small archival UI details.</div></article>
        <article class="style-card"><div class="style-kicker">Maps</div><strong class="style-title">Release path as map</strong><div class="style-copy">Calendar and rollout pages can behave like a project map rather than a list.</div></article>
      </div>
      <div class="sound-grid" style="margin-top:12px">
        <article class="sound-card full"><div class="sound-kicker">Optional cues</div><strong class="sound-title">Small sound references</strong><div class="sound-copy">These are optional UI cue prototypes only. They do not autoplay.</div><div class="sound-actions"><button class="sound-chip" data-sound="page">Page turn</button><button class="sound-chip" data-sound="item">Item found</button><button class="sound-chip" data-sound="key">Archive key</button><button class="sound-chip" data-sound="error">Unavailable</button></div></article>
      </div>
    `);
  }

  function wireSoundCues() {
    document.addEventListener('click', (event) => {
      const chip = event.target.closest('[data-sound]');
      if (!chip) return;
      const kind = chip.dataset.sound;
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const frequencies = { page: 220, item: 523, key: 392, error: 146 };
      oscillator.type = kind === 'error' ? 'square' : 'triangle';
      oscillator.frequency.value = frequencies[kind] || 220;
      gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.05, audioContext.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.18);
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.2);
      if (typeof showToast === 'function') showToast(`${chip.textContent.trim()} cue`);
    });
  }

  function improveRoutes() {
    const routes = [
      ['Review + Stabilization', 'stabilization'],
      ['Aesthetic + Sound Lab', 'aesthetic-lab']
    ];
    routes.forEach(([title, screen]) => addToc(screen, '◇', title, screen === 'stabilization' ? 'Review, QA, and watch items' : 'Game references and optional sound cues'));
  }

  function run() {
    setStatus();
    addNav('stabilization', '◇', 'Review');
    addNav('aesthetic-lab', '◈', 'Style Lab');
    addToOrder(['stabilization', 'aesthetic-lab']);
    createStabilizationScreen();
    createAestheticScreen();
    updateTodayPage();
    improveRoutes();
    wireSoundCues();
  }

  run();
})();
