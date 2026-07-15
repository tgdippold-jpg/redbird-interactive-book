// REDBIRD Interactive Book v0.13 — listener edition and EPK

(function () {
  const releaseRoutes = [
    ['Self Love / Clark Gable', 'release-slcg'],
    ['Taylor Swift Mashup Set', 'release-taylor'],
    ['Missa Brevis', 'release-missa'],
    ['Looping Pedal EP', 'release-looping'],
    ['REDBIRD Album', 'release-album']
  ];

  const shareableRoutes = [
    ['album', 'Album'],
    ['listen', 'Listening Room'],
    ['releases', 'Release Chapters'],
    ['release-slcg', 'Self Love / Clark Gable'],
    ['release-taylor', 'Taylor Swift Mashup Set'],
    ['release-missa', 'Missa Brevis'],
    ['release-looping', 'Looping Pedal EP'],
    ['release-album', 'REDBIRD Album'],
    ['archive', 'Archive Index'],
    ['media', 'Visual Archive'],
    ['epk', 'Press Kit']
  ];

  function makeNavButton(screen, icon, label) {
    const button = document.createElement('button');
    button.className = 'nav-btn';
    button.dataset.screen = screen;
    button.innerHTML = `<span class="nav-icon" aria-hidden="true">${icon}</span> ${label}`;
    return button;
  }

  function shapeFrontDoor() {
    const status = document.querySelector('.status-pill');
    const sidebarSubtitle = document.querySelector('.sidebar-title small');
    const cover = document.querySelector('#screen-cover .cover-screen');
    const nav = document.querySelector('.nav-list');

    document.title = 'The Book of REDBIRD — Interactive Album Archive';
    if (status) status.textContent = 'listener edition · shareable chapters';
    if (sidebarSubtitle) sidebarSubtitle.textContent = 'Interactive Album Archive';

    if (cover) {
      cover.innerHTML = `
        <div class="cover-book listener-cover">
          <div class="pixel-label">INTERACTIVE ALBUM ARCHIVE</div>
          <div class="cover-title-small">THE BOOK OF</div>
          <h2>REDBIRD</h2>
          <p>Music, release stories, visual artifacts, and the unfolding album.</p>
          <div class="listener-cover-actions">
            <button class="pixel-button" data-screen="album">ENTER REDBIRD</button>
            <button class="paper-link" data-screen="release-slcg">CURRENT CHAPTER: SELF LOVE / CLARK GABLE</button>
          </div>
        </div>`;
    }

    if (nav) {
      const coverButton = nav.querySelector('[data-screen="cover"]') || makeNavButton('cover', '▰', 'Cover');
      const studioButton = nav.querySelector('[data-screen="dashboard"]') || makeNavButton('dashboard', '▣', 'Studio');
      coverButton.innerHTML = '<span class="nav-icon" aria-hidden="true">▰</span> Cover';
      studioButton.innerHTML = '<span class="nav-icon" aria-hidden="true">▣</span> Studio';
      nav.replaceChildren(
        coverButton,
        makeNavButton('album', '◆', 'Album'),
        makeNavButton('listen', '♪', 'Listen'),
        makeNavButton('releases', '✦', 'Releases'),
        makeNavButton('archive', '▤', 'Archive'),
        makeNavButton('epk', '¶', 'Press Kit'),
        studioButton
      );
    }
  }

  function createListenerScreens() {
    createScreen('album', `
      <div class="listener-page album-page">
        <section class="album-hero">
          <div class="album-hero-copy">
            <div class="listener-eyebrow">THE FULL ALBUM · JANUARY 2027</div>
            <h2>REDBIRD</h2>
            <p class="listener-deck">An album unfolding as a sequence of releases, an interactive book, and a growing archive of music, images, and process.</p>
            <div class="listener-actions">
              <button class="pixel-button" data-screen="release-slcg">BEGIN WITH THE LEAD RELEASE</button>
              <button class="paper-link light" data-screen="listen">OPEN THE LISTENING ROOM</button>
            </div>
          </div>
          <div class="album-sigil" aria-hidden="true"><span>R</span><i></i><b>01·27</b></div>
        </section>

        <section class="listener-section current-chapter">
          <div class="section-number">CHAPTER 01</div>
          <div>
            <div class="listener-eyebrow">LEAD RELEASE · SEPTEMBER 2026</div>
            <h3>Self Love / Clark Gable</h3>
            <p>One song, two names, and the first open door into the REDBIRD album.</p>
          </div>
          <button class="chapter-arrow" data-screen="release-slcg" aria-label="Open Self Love / Clark Gable">↗</button>
        </section>

        <section class="listener-section album-path-section">
          <div class="section-heading-row"><div><div class="listener-eyebrow">THE RELEASE PATH</div><h3>Five arrivals, one record</h3></div><button class="paper-link" data-screen="releases">VIEW ALL RELEASES</button></div>
          <div class="album-path" aria-label="REDBIRD release sequence">
            <button data-screen="release-slcg"><span>SEP</span><strong>Self Love /<br>Clark Gable</strong></button>
            <button data-screen="release-taylor"><span>OCT</span><strong>Taylor Swift<br>Mashup Set</strong></button>
            <button data-screen="release-missa"><span>NOV</span><strong>Missa<br>Brevis</strong></button>
            <button data-screen="release-looping"><span>DEC</span><strong>Looping<br>Pedal EP</strong></button>
            <button data-screen="release-album"><span>JAN</span><strong>REDBIRD</strong></button>
          </div>
        </section>
      </div>
    `);

    createScreen('listen', `
      <div class="page-heading listener-heading"><div><h2>Listening Room</h2><p>Music enters the archive as each REDBIRD chapter is released.</p></div><div class="pixel-label">NO AUTOPLAY · LISTENER FIRST</div></div>
      <div class="listening-stage">
        <article class="featured-listen-card">
          <div class="record-window" aria-hidden="true"><span>01</span><i></i></div>
          <div class="listen-copy">
            <div class="listener-eyebrow">CURRENT CHAPTER</div>
            <h3>Self Love / Clark Gable</h3>
            <p>The lead release and first public doorway into REDBIRD.</p>
            <div class="listening-status"><span aria-hidden="true"></span><strong>Listening link reserved</strong><small>Final audio will appear here when it is cleared for release.</small></div>
            <div class="listener-actions"><button class="pixel-button" data-screen="release-slcg">READ THE RELEASE STORY</button><button class="paper-link" data-action="toast" data-message="The final listening link has not been confirmed yet.">CHECK LISTENING STATUS</button></div>
          </div>
        </article>
        <section class="listener-section">
          <div class="section-heading-row"><div><div class="listener-eyebrow">UPCOMING ROOMS</div><h3>The album opens one chapter at a time</h3></div></div>
          <div class="listening-shelf">
            <button data-screen="release-taylor"><span>02 · OCT 2026</span><strong>Taylor Swift Mashup Set</strong><small>Single + B-side companion</small></button>
            <button data-screen="release-missa"><span>03 · NOV 2026</span><strong>Missa Brevis</strong><small>EP</small></button>
            <button data-screen="release-looping"><span>04 · DEC 2026</span><strong>Looping Pedal EP</strong><small>EP</small></button>
            <button data-screen="release-album"><span>05 · JAN 2027</span><strong>REDBIRD</strong><small>Full album</small></button>
          </div>
        </section>
      </div>
    `);

    createScreen('releases', `
      <div class="page-heading listener-heading"><div><h2>Release Chapters</h2><p>The path from the first single to the full REDBIRD album.</p></div><div class="pixel-label">SEPTEMBER 2026 → JANUARY 2027</div></div>
      <div class="listener-release-list">
        <article class="listener-release featured" tabindex="0" data-screen="release-slcg"><div class="release-index">01</div><div><span>SEPTEMBER 2026 · LEAD SINGLE</span><h3>Self Love / Clark Gable</h3><p>One track and the public doorway into the album.</p></div><b>↗</b></article>
        <article class="listener-release" tabindex="0" data-screen="release-taylor"><div class="release-index">02</div><div><span>OCTOBER 2026 · SINGLE + B-SIDE COMPANION</span><h3>Taylor Swift Mashup Set</h3><p>A playful, fan-facing companion release.</p></div><b>↗</b></article>
        <article class="listener-release" tabindex="0" data-screen="release-missa"><div class="release-index">03</div><div><span>NOVEMBER 2026 · EP</span><h3>Missa Brevis</h3><p>The sacred and classical chamber of REDBIRD.</p></div><b>↗</b></article>
        <article class="listener-release" tabindex="0" data-screen="release-looping"><div class="release-index">04</div><div><span>DECEMBER 2026 · EP</span><h3>Looping Pedal EP</h3><p>The live-process chapter: repetition, performance, and accumulation.</p></div><b>↗</b></article>
        <article class="listener-release album-arrival" tabindex="0" data-screen="release-album"><div class="release-index">05</div><div><span>JANUARY 2027 · FULL ALBUM</span><h3>REDBIRD</h3><p>The complete sequence and the arrival point for the interactive archive.</p></div><b>↗</b></article>
      </div>
    `);

    createScreen('archive', `
      <div class="page-heading listener-heading"><div><h2>Archive Index</h2><p>The listener-facing rooms of the Book of REDBIRD.</p></div><div class="pixel-label">MUSIC · STORIES · ARTIFACTS</div></div>
      <div class="archive-index-grid">
        <article class="archive-index-card primary" tabindex="0" data-screen="album"><span>01 · ENTER</span><h3>The Album</h3><p>The central story and the path from first release to full record.</p><b>OPEN CHAPTER ↗</b></article>
        <article class="archive-index-card" tabindex="0" data-screen="listen"><span>02 · HEAR</span><h3>Listening Room</h3><p>Release audio and listening links as each chapter becomes public.</p><b>OPEN ROOM ↗</b></article>
        <article class="archive-index-card" tabindex="0" data-screen="releases"><span>03 · FOLLOW</span><h3>Release Stories</h3><p>Five arrivals across the REDBIRD release sequence.</p><b>OPEN STORIES ↗</b></article>
        <article class="archive-index-card" tabindex="0" data-screen="media"><span>04 · SEE</span><h3>Visual + Zine World</h3><p>The book, typography, imagery, and artifact direction surrounding the album.</p><b>OPEN ARCHIVE ↗</b></article>
        <article class="archive-index-card" tabindex="0" data-screen="epk"><span>05 · READ</span><h3>Press Kit</h3><p>Confirmed project facts, album framing, and approved materials.</p><b>OPEN EPK ↗</b></article>
        <article class="archive-index-card quiet" tabindex="0" data-screen="backmatter"><span>06 · DEEPER</span><h3>Back Matter</h3><p>Composition notes, references, project memory, and the deeper working archive.</p><b>TURN TO BACK MATTER ↗</b></article>
      </div>
      <article class="archive-rule"><div class="listener-eyebrow">ARCHIVE PRINCIPLE</div><p>Confirmed listener-facing material belongs in the front rooms. Working notes and unfinished source material remain available in the Studio and Back Matter.</p></article>
    `);

    createScreen('media', `
      <div class="page-heading listener-heading"><div><h2>Visual Archive</h2><p>The book, zine, image, and moving-picture world surrounding REDBIRD.</p></div><div class="pixel-label">KEY ART · ZINE · MEDIA</div></div>
      <div class="media-archive">
        <figure class="media-hero">
          <img src="og.jpg" alt="The Book of REDBIRD key art: an oxblood and gold interactive album archive presented as an illuminated adventure-game book." />
          <figcaption><div><span>FOLIO 01 · INTERACTIVE ARCHIVE KEY ART</span><strong>The book is the first visual artifact.</strong></div><a href="og.jpg" target="_blank" rel="noopener">VIEW FULL SIZE ↗</a></figcaption>
        </figure>

        <section class="listener-section media-folios">
          <div class="section-heading-row"><div><div class="listener-eyebrow">ARCHIVE FOLIOS</div><h3>A home for every approved artifact</h3></div></div>
          <div class="media-folio-grid">
            <article class="media-folio active"><span>ACTIVE FOLIO</span><strong>Interactive book</strong><p>Key art, page design, typography, interface details, and the public archive itself.</p><button class="paper-link" data-screen="album">ENTER THE BOOK</button></article>
            <article class="media-folio"><span>RESERVED FOLIO</span><strong>Release artwork</strong><p>Approved single, companion, EP, and album artwork will collect here without replacing the book’s identity.</p><small>Awaiting approved masters</small></article>
            <article class="media-folio"><span>RESERVED FOLIO</span><strong>Press photography</strong><p>Portraits and project photographs prepared for editorial and press use.</p><small>Awaiting approved photographs</small></article>
            <article class="media-folio"><span>RESERVED FOLIO</span><strong>Video + performance</strong><p>Music video, live-process, and performance links as they are cleared for public viewing.</p><small>Awaiting confirmed links</small></article>
            <article class="media-folio"><span>IN DEVELOPMENT</span><strong>Zine + flipbook</strong><p>The printable and screen-based companion artifact extending the Book of REDBIRD beyond the browser.</p><small>Part of the post-album cycle</small></article>
            <article class="media-folio"><span>PRESS MATERIAL</span><strong>Social preview card</strong><p>A shareable image for links to the interactive archive.</p><a class="paper-link" href="og.jpg" download="book-of-redbird-social-card.jpg">DOWNLOAD CARD</a></article>
          </div>
        </section>
      </div>
    `);

    createScreen('epk', `
      <div class="page-heading listener-heading"><div><h2>Press Kit</h2><p>A concise guide to the REDBIRD album and its unfolding release cycle.</p></div><div class="pixel-label">ELECTRONIC PRESS KIT</div></div>
      <div class="epk-grid">
        <article class="epk-statement">
          <div class="listener-eyebrow">PROJECT STATEMENT</div>
          <h3>An album designed to be entered.</h3>
          <p>REDBIRD unfolds through music, release stories, visual artifacts, and this interactive book. Each release opens another part of the archive before the full album arrives in January 2027.</p>
          <button class="paper-link light" data-screen="album">EXPLORE THE ALBUM</button>
        </article>
        <article class="epk-facts">
          <div class="listener-eyebrow">AT A GLANCE</div>
          <dl>
            <div><dt>Project</dt><dd>REDBIRD</dd></div>
            <div><dt>Format</dt><dd>Full album + interactive archive</dd></div>
            <div><dt>Public cycle</dt><dd>September 2026 – March 2027</dd></div>
            <div><dt>Lead release</dt><dd>Self Love / Clark Gable</dd></div>
            <div><dt>Album arrival</dt><dd>January 2027</dd></div>
          </dl>
        </article>
        <figure class="epk-key-art">
          <img src="og.jpg" alt="The Book of REDBIRD interactive album archive key art." />
          <figcaption><div><div class="listener-eyebrow">CURRENT KEY ART</div><strong>The Book of REDBIRD</strong><span>Interactive archive artwork for site and press-link review.</span></div><a class="paper-link light" href="og.jpg" download="book-of-redbird-social-card.jpg">DOWNLOAD KEY ART</a></figcaption>
        </figure>
        <article class="epk-timeline">
          <div class="listener-eyebrow">RELEASE SEQUENCE</div>
          <ol>
            <li><span>SEP 2026</span><strong>Self Love / Clark Gable</strong><small>Lead single</small></li>
            <li><span>OCT 2026</span><strong>Taylor Swift Mashup Set</strong><small>Single + B-side companion</small></li>
            <li><span>NOV 2026</span><strong>Missa Brevis</strong><small>EP</small></li>
            <li><span>DEC 2026</span><strong>Looping Pedal EP</strong><small>EP</small></li>
            <li><span>JAN 2027</span><strong>REDBIRD</strong><small>Full album</small></li>
          </ol>
        </article>
        <article class="epk-materials">
          <div class="listener-eyebrow">MATERIALS</div>
          <div class="epk-material-list">
            <button data-screen="album"><strong>Album overview</strong><span>Project statement and release path</span><b>OPEN</b></button>
            <button data-screen="releases"><strong>Release stories</strong><span>Five chapters from lead single to album</span><b>OPEN</b></button>
            <button data-screen="media"><strong>Visual world</strong><span>Book, zine, typography, and artifact direction</span><b>OPEN</b></button>
            <button data-screen="listen"><strong>Listening room</strong><span>Release audio as links are confirmed</span><b>OPEN</b></button>
          </div>
        </article>
        <article class="epk-language">
          <div class="listener-eyebrow">PROJECT LANGUAGE</div>
          <div class="epk-language-list"><span>Interactive album archive</span><span>Playable project archive</span><span>Interactive zine</span><span>Late-80s adventure-game book</span></div>
        </article>
        <article class="epk-note">
          <div class="listener-eyebrow">PRESS ASSETS IN PROGRESS</div>
          <p>Confirmed biography, credits, photography, contact details, and downloadable media will be added here as those materials are approved.</p>
        </article>
        <article class="epk-actions" data-no-print>
          <div><div class="listener-eyebrow">PRESS HANDOFF</div><p>Print this confirmed-facts edition or save it as a PDF. Unconfirmed personal and release information is intentionally omitted.</p></div>
          <button class="pixel-button" data-action="print-epk">PRINT / SAVE EPK</button>
        </article>
      </div>
    `);
  }

  function setListenerPageOrder() {
    const preferred = ['cover', 'album', 'listen', 'releases', 'release-slcg', 'release-taylor', 'release-missa', 'release-looping', 'release-album', 'archive', 'media', 'epk', 'dashboard', 'toc', 'today', 'current-release', 'tracks', 'audio', 'visual', 'calendar', 'roadmap', 'decisions', 'files', 'style', 'grant', 'backmatter'];
    screenOrder.splice(0, screenOrder.length, ...preferred.filter((id) => document.getElementById(`screen-${id}`)));
  }

  function addShareableChapterTools() {
    shareableRoutes.forEach(([route, label]) => {
      const screen = document.getElementById(`screen-${route}`);
      if (!screen || screen.querySelector('.chapter-tools')) return;

      const tools = document.createElement('div');
      tools.className = 'chapter-tools';
      tools.dataset.noPrint = '';
      tools.innerHTML = `<span>SHAREABLE CHAPTER · ${label}</span><button class="paper-link" data-action="copy-link">COPY CHAPTER LINK</button>`;
      screen.prepend(tools);
    });
  }

  function applyRequestedRoute() {
    const requested = window.location.hash.replace('#', '') || 'cover';
    const route = document.getElementById(`screen-${requested}`) ? requested : 'cover';
    showScreen(route, { skipAnimation: true, skipHistory: true, skipFocus: true });
  }

  function routeExistingReleaseCards(root = document) {
    root.querySelectorAll('.track-card, .release-row').forEach((card) => {
      const match = releaseRoutes.find(([title]) => (card.textContent || '').includes(title));
      if (!match) return;
      card.dataset.screen = match[1];
      card.classList.add('clickable-card');
      if (!card.hasAttribute('tabindex')) card.tabIndex = 0;
    });
  }

  function watchDynamicReleaseLists() {
    const roots = [document.querySelector('#screen-tracks'), document.querySelector('#screen-calendar')].filter(Boolean);
    roots.forEach((root) => {
      new MutationObserver(() => routeExistingReleaseCards(root)).observe(root, { childList: true, subtree: true });
      routeExistingReleaseCards(root);
    });
  }

  function addListenerActions() {
    document.addEventListener('click', (event) => {
      const trigger = event.target.closest('[data-action="print-epk"]');
      if (!trigger) return;
      showScreen('epk', { skipAnimation: true });
      window.setTimeout(() => window.print(), 80);
    });
  }

  shapeFrontDoor();
  createListenerScreens();
  setListenerPageOrder();
  addShareableChapterTools();
  enhanceInteractiveSemantics(document);
  applyRequestedRoute();
  watchDynamicReleaseLists();
  addListenerActions();
})();
