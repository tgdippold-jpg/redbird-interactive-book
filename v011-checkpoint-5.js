// REDBIRD Interactive Book v0.13 — release stories and package pages

(function () {
  const releases = [
    {
      id: 'release-slcg', icon: '♥', title: 'Self Love / Clark Gable', type: 'Lead single', month: 'September 2026', status: 'Active focus',
      role: 'One song, two names, and the first open door into the REDBIRD album.',
      story: 'The public story begins here: a lead release shaped around self-recognition, performance, and the strange work of learning how to be seen. Its September arrival turns the private REDBIRD workshop into a shared listening space.',
      package: [['Mix', 'Final listening pass and shape decisions', 'active'], ['Artwork', 'Choose the image language for the first doorway', 'open'], ['Words', 'Finish the short release description and credits', 'open'], ['Files', 'Gather the final audio, artwork, and delivery set', 'open']],
      notes: ['Listen for the scale of the first “Let go” and its reverb moment.', 'Check the Bern section for splice-based changes in weight and dynamics.', 'Let the midpoint crescendo grow without giving away the arrival too early.'],
      assets: ['Cover artwork', 'Final master', 'Credits + metadata', 'Short release story', 'Teaser fragment'],
      buttons: [['Listen', 'audio'], ['Visual', 'visual'], ['Files', 'files'], ['Decisions', 'decisions']]
    },
    {
      id: 'release-taylor', icon: '✦', title: 'Taylor Swift Mashup Set', type: 'Single + B-side companion', month: 'October 2026', status: 'Companion release',
      role: 'A fan-facing companion release: playful, recognizable, and built as a single with a B-side.',
      story: 'After the lead single opens the book, this two-part set widens the invitation. It lets familiar songs pass through REDBIRD’s arranging voice, creating a bright social chapter without taking the album story off its path.',
      package: [['Sequence', 'Lock which piece leads and which follows as the B-side', 'open'], ['Audio', 'Confirm the final pair and listening order', 'open'], ['Visual', 'Build a companion look related to, but distinct from, the lead', 'open'], ['Social', 'Prepare concise, fan-facing release language', 'open']],
      notes: ['Make the two-part relationship instantly legible.', 'Keep the presentation generous and playful rather than explanatory.', 'Let the set support the REDBIRD world while retaining its own identity.'],
      assets: ['Single artwork', 'B-side identifier', 'Final audio pair', 'Credits + metadata', 'Social excerpts'],
      buttons: [['Calendar', 'calendar'], ['Tracks', 'tracks'], ['Visual', 'visual'], ['Decisions', 'decisions']]
    },
    {
      id: 'release-missa', icon: '♱', title: 'Missa Brevis', type: 'EP', month: 'November 2026', status: 'Planned',
      role: 'The sacred and classical chamber of REDBIRD, built from liturgical vocal architecture.',
      story: 'A quieter room in the book: devotional forms, tuned arrivals, and the album’s oldest musical shadows gathered into a compact November chapter.',
      package: [['Story', 'Clarify the listener-facing liturgical frame', 'open'], ['Audio', 'Confirm the EP sequence and source readiness', 'open'], ['Archive', 'Preserve tuning and composition notes in the back matter', 'open']],
      notes: ['Keep the public page spare; let the music carry the architecture.'], assets: ['EP artwork', 'Final sequence', 'Credits + text', 'Tuning notes'],
      buttons: [['Back Matter', 'backmatter'], ['Style Lab', 'aesthetic-lab'], ['Calendar', 'calendar'], ['Files', 'files']]
    },
    {
      id: 'release-looping', icon: '∞', title: 'Looping Pedal EP', type: 'EP', month: 'December 2026', status: 'Planned',
      role: 'The live-process chapter: loops, accumulation, performance, and the sound of a piece being built in real time.',
      story: 'A December field note from inside the making—less a polished window than a record of motion, repetition, and performance memory.',
      package: [['Material', 'Choose the performances that belong together', 'open'], ['Files', 'Gather loops, stems, and final exports', 'open'], ['Frame', 'Decide how much process becomes part of the public story', 'open']],
      notes: ['Keep the feeling of discovery without turning the page into a technical log.'], assets: ['EP artwork', 'Performance audio', 'Session notes', 'Live-process excerpt'],
      buttons: [['Files', 'files'], ['Roadmap', 'roadmap'], ['Calendar', 'calendar'], ['Back Matter', 'backmatter']]
    },
    {
      id: 'release-album', icon: '◆', title: 'REDBIRD Album', type: 'Full album', month: 'January 2027', status: 'Final rollout',
      role: 'The full arrival: the sequence, the central story, and the object that gives every earlier release its place.',
      story: 'In January, the doors opened by the earlier releases resolve into the complete album. The book becomes both companion and archive, holding the record’s path forward into zine, video, remix, and live forms.',
      package: [['Sequence', 'Protect the final album arc', 'active'], ['Artifact', 'Connect the album to the book and zine', 'open'], ['Afterlife', 'Prepare the post-album visual and live cycle', 'open']],
      notes: ['Let the album page feel like an arrival, not another project card.'], assets: ['Album masters', 'Full artwork system', 'Credits', 'Book + zine edition', 'Post-album map'],
      buttons: [['Calendar', 'calendar'], ['Visual', 'visual'], ['Files', 'files'], ['Back Matter', 'backmatter']]
    }
  ];

  const makeButton = (label, screen) => `<button class="pixel-button" data-screen="${screen}">${label.toUpperCase()}</button>`;
  const makePackageItem = ([label, detail, state]) => `<div class="release-package-item ${state}"><span class="release-package-mark" aria-hidden="true"></span><div><strong>${label}</strong><span>${detail}</span></div></div>`;

  function makeScreen(release) {
    if (typeof createScreen !== 'function') return;
    createScreen(release.id, `
      <div class="page-heading"><div><h2>${release.title}</h2><p>${release.role}</p></div><div class="pixel-label">${release.type}</div></div>
      <div class="release-detail-grid story-edition">
        <article class="release-hero"><div class="release-kicker">${release.type}</div><strong class="release-detail-title">${release.title}</strong><div class="release-detail-copy">${release.story}</div><div class="release-status-row"><div class="release-status-pill"><span>Chapter</span><strong>${release.month}</strong></div><div class="release-status-pill"><span>State</span><strong>${release.status}</strong></div><div class="release-status-pill"><span>Place in the book</span><strong>${release.type}</strong></div></div></article>
        <article class="release-panel package-panel"><div class="release-panel-label">Release package</div><div class="release-package-list">${release.package.map(makePackageItem).join('')}</div></article>
        <article class="release-panel"><div class="release-panel-label">Listening + story notes</div><div class="release-work-list">${release.notes.map((item) => `<div>${item}</div>`).join('')}</div></article>
        <article class="release-panel"><div class="release-panel-label">Artifacts to gather</div><div class="release-asset-ribbon">${release.assets.map((item) => `<span>${item}</span>`).join('')}</div></article>
        <article class="release-panel release-related"><div class="release-panel-label">Continue through the book</div><div class="release-panel-copy">Follow this release into its listening notes, images, files, and place in the wider sequence.</div><div class="release-command-row">${release.buttons.map(([label, screen]) => makeButton(label, screen)).join('')} ${makeButton('All releases', 'tracks')}</div></article>
      </div>
    `);
  }

  function addReleaseNav() { if (typeof addNavButton === 'function') addNavButton('release-slcg', '♥', 'Lead Release'); }
  function addReleaseToc() {
    const toc = document.querySelector('#screen-toc .toc-grid');
    if (!toc || toc.querySelector('[data-screen="release-slcg"]')) return;
    const label = document.createElement('div'); label.className = 'toc-section-label'; label.textContent = 'Release pages'; toc.appendChild(label);
    releases.forEach((release) => { if (typeof addTocItem === 'function') addTocItem(release.id, release.icon, release.title, `${release.type} · ${release.month}`); });
  }
  function addToPageOrder() {
    if (typeof screenOrder === 'undefined' || !Array.isArray(screenOrder)) return;
    const anchor = screenOrder.indexOf('tracks');
    releases.map((release) => release.id).forEach((id, offset) => { if (!screenOrder.includes(id)) screenOrder.splice(anchor + 1 + offset, 0, id); });
  }
  function routeStaticCards() {
    const routes = [['Self Love / Clark Gable', 'release-slcg'], ['Taylor Swift Mashup Set', 'release-taylor'], ['Missa Brevis', 'release-missa'], ['Looping Pedal EP', 'release-looping'], ['REDBIRD', 'release-album']];
    document.querySelectorAll('.track-card, .release-row, .focus-card, .toc-item').forEach((card) => {
      const found = routes.find(([needle]) => (card.textContent || '').includes(needle));
      if (!found) return; card.dataset.screen = found[1]; card.classList.add('clickable-card'); if (!card.hasAttribute('tabindex')) card.setAttribute('tabindex', '0');
    });
  }
  function addQuickReleaseButtons() {
    const tracks = document.querySelector('#screen-tracks .tracks-grid');
    if (!tracks || tracks.querySelector('.release-panel')) return;
    const panel = document.createElement('article'); panel.className = 'release-panel'; panel.style.gridColumn = '1 / -1';
    panel.innerHTML = `<div class="release-panel-label">Release pages</div><div class="release-panel-copy">Open each chapter of the rollout.</div><div class="release-command-row">${releases.map((release) => makeButton(release.title, release.id)).join('')}</div>`; tracks.appendChild(panel);
  }
  function setStatus() { const status = document.querySelector('.status-pill'); if (status) status.textContent = 'v0.13 · release stories'; document.title = 'The Book of REDBIRD — Release Stories'; }
  function run() { setStatus(); releases.forEach(makeScreen); addReleaseNav(); addReleaseToc(); addToPageOrder(); routeStaticCards(); addQuickReleaseButtons(); }
  run();
})();
