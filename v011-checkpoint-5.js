// REDBIRD Interactive Book v0.11 — checkpoint 5 release-specific placeholder pages

(function () {
  const releases = [
    {
      id: 'release-slcg',
      icon: '♥',
      title: 'Self Love / Clark Gable',
      type: 'Lead single',
      month: 'September 2026',
      status: 'Active focus',
      role: 'This is the lead release package and the public doorway into the REDBIRD rollout.',
      work: ['Finalize mix notes and listening decisions.', 'Confirm artwork direction and visual language.', 'Tighten release copy, metadata, and file readiness.', 'Keep song identity pages separate from the release package.'],
      buttons: [['Audio', 'audio'], ['Visual', 'visual'], ['Files', 'files'], ['Decisions', 'decisions']]
    },
    {
      id: 'release-taylor',
      icon: '✦',
      title: 'Taylor Swift Mashup Set',
      type: 'Single + B-side',
      month: 'October 2026',
      status: 'Companion release',
      role: 'This is the fan-facing social release after the lead single begins moving.',
      work: ['Keep language clear: single with B-side, not bridge.', 'Clarify which track is the single and which functions as the B-side.', 'Prepare social copy and asset needs.', 'Keep this release supportive, not distracting from SL/CG.'],
      buttons: [['Calendar', 'calendar'], ['Tracks', 'tracks'], ['Visual', 'visual'], ['Decisions', 'decisions']]
    },
    {
      id: 'release-missa',
      icon: '♱',
      title: 'Missa Brevis',
      type: 'EP',
      month: 'November 2026',
      status: 'Planned',
      role: 'This release carries the sacred/classical and liturgical architecture layer of REDBIRD.',
      work: ['Clarify liturgical framing and listener-facing copy.', 'Preserve tuning and composition notes in back matter.', 'Confirm audio/source-file readiness later in the rollout.', 'Decide what belongs in public book pages versus archive notes.'],
      buttons: [['Back Matter', 'backmatter'], ['Style Lab', 'aesthetic-lab'], ['Calendar', 'calendar'], ['Files', 'files']]
    },
    {
      id: 'release-looping',
      icon: '∞',
      title: 'Looping Pedal EP',
      type: 'EP',
      month: 'December 2026',
      status: 'Planned',
      role: 'This release holds the live-process, looping, and performance-material layer.',
      work: ['Identify which materials belong in the EP package.', 'Keep performance-process notes separate from final release copy.', 'Prepare file/archive rules for loops, stems, and exports.', 'Decide how much process becomes public-facing.'],
      buttons: [['Files', 'files'], ['Roadmap', 'roadmap'], ['Calendar', 'calendar'], ['Back Matter', 'backmatter']]
    },
    {
      id: 'release-album',
      icon: '◆',
      title: 'REDBIRD Album',
      type: 'Full album',
      month: 'January 2027',
      status: 'Final rollout',
      role: 'This is the full album arrival, sequencing endpoint, and anchor for the post-album artifact cycle.',
      work: ['Protect the full-album sequence and final story arc.', 'Keep January as the album arrival point unless intentionally changed.', 'Connect album to zine, book, video, remix, and live-set afterlife.', 'Use the interactive book as a public-facing archive layer.'],
      buttons: [['Calendar', 'calendar'], ['Visual', 'visual'], ['Files', 'files'], ['Back Matter', 'backmatter']]
    }
  ];

  function makeButton(label, screen) {
    return `<button class="pixel-button" data-screen="${screen}">${label.toUpperCase()}</button>`;
  }

  function makeScreen(release) {
    if (typeof createScreen !== 'function') return;
    createScreen(release.id, `
      <div class="page-heading"><div><h2>${release.title}</h2><p>${release.role}</p></div><div class="pixel-label">${release.type}</div></div>
      <div class="release-detail-grid two">
        <article class="release-hero">
          <div class="release-kicker">${release.type}</div>
          <strong class="release-detail-title">${release.title}</strong>
          <div class="release-detail-copy">${release.role}</div>
          <div class="release-status-row">
            <div class="release-status-pill"><span>Month</span><strong>${release.month}</strong></div>
            <div class="release-status-pill"><span>Status</span><strong>${release.status}</strong></div>
            <div class="release-status-pill"><span>Book role</span><strong>${release.type}</strong></div>
          </div>
        </article>
        <article class="release-panel">
          <div class="release-panel-label">Open work</div>
          <div class="release-work-list">${release.work.map((item) => `<div>${item}</div>`).join('')}</div>
        </article>
        <article class="release-panel" style="grid-column:1 / -1">
          <div class="release-panel-label">Related pages</div>
          <div class="release-panel-copy">Use these buttons to move from the release placeholder into the practical project areas.</div>
          <div class="release-command-row">${release.buttons.map(([label, screen]) => makeButton(label, screen)).join('')} ${makeButton('All releases', 'tracks')}</div>
        </article>
      </div>
    `);
  }

  function addReleaseNav() {
    if (typeof addNavButton === 'function') addNavButton('release-slcg', '♥', 'Lead Release');
  }

  function addReleaseToc() {
    const toc = document.querySelector('#screen-toc .toc-grid');
    if (!toc) return;
    if (toc.querySelector('[data-screen="release-slcg"]')) return;

    const releaseLabel = document.createElement('div');
    releaseLabel.className = 'toc-section-label';
    releaseLabel.textContent = 'Release pages';
    toc.appendChild(releaseLabel);

    releases.forEach((release) => {
      if (typeof addTocItem === 'function') addTocItem(release.id, release.icon, release.title, `${release.type} · ${release.month}`);
    });
  }

  function addToPageOrder() {
    if (typeof screenOrder === 'undefined' || !Array.isArray(screenOrder)) return;
    const anchor = screenOrder.indexOf('tracks');
    const ids = releases.map((release) => release.id);
    ids.forEach((id, offset) => {
      if (!screenOrder.includes(id)) screenOrder.splice(anchor + 1 + offset, 0, id);
    });
  }

  function routeStaticCards() {
    const routeMap = [
      ['Self Love / Clark Gable', 'release-slcg'],
      ['Taylor Swift Mashup Set', 'release-taylor'],
      ['Missa Brevis', 'release-missa'],
      ['Looping Pedal EP', 'release-looping'],
      ['REDBIRD', 'release-album']
    ];

    document.querySelectorAll('.track-card, .release-row, .focus-card, .toc-item').forEach((card) => {
      const text = card.textContent || '';
      const found = routeMap.find(([needle]) => text.includes(needle));
      if (found) {
        card.dataset.screen = found[1];
        card.classList.add('clickable-card');
        if (!card.hasAttribute('tabindex')) card.setAttribute('tabindex', '0');
      }
    });
  }

  function addQuickReleaseButtons() {
    const tracks = document.querySelector('#screen-tracks .tracks-grid');
    if (!tracks || tracks.querySelector('.release-panel')) return;
    const panel = document.createElement('article');
    panel.className = 'release-panel';
    panel.style.gridColumn = '1 / -1';
    panel.innerHTML = `
      <div class="release-panel-label">Release pages</div>
      <div class="release-panel-copy">Open the dedicated placeholder page for each release package.</div>
      <div class="release-command-row">${releases.map((release) => makeButton(release.title, release.id)).join('')}</div>
    `;
    tracks.appendChild(panel);
  }

  function setStatus() {
    const status = document.querySelector('.status-pill');
    if (status) status.textContent = 'v0.11 · release pages complete';
    document.title = 'The Book of REDBIRD — v0.11 Release Pages Complete';
  }

  function run() {
    setStatus();
    releases.forEach(makeScreen);
    addReleaseNav();
    addReleaseToc();
    addToPageOrder();
    routeStaticCards();
    addQuickReleaseButtons();
  }

  run();
})();
