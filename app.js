/* ============================================================
   CURIOSITAS.AI — APP.JS
   Reads everything from content.js and builds the page.
   You should NEVER need to edit this file.
   All content changes go in content.js
   ============================================================ */

(function () {
  'use strict';
  const S = SITE; // shorthand

  /* ──────────────────────────────────────────
     1. GOOGLE ANALYTICS 4
     Activates automatically once you add your
     GA ID to content.js → meta.gaId
  ────────────────────────────────────────── */
  function loadGA() {
    if (!S.meta.gaId || S.meta.gaId === 'G-XXXXXXXXXX') return;
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${S.meta.gaId}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', S.meta.gaId, { send_page_view: true });
    // Track scroll depth
    trackScrollDepth();
  }

  /* ──────────────────────────────────────────
     2. GOOGLE ADSENSE
     Activates automatically once you add your
     AdSense publisher ID to content.js → meta.adsenseId
  ────────────────────────────────────────── */
  function loadAdSense() {
    if (!S.meta.adsenseId) return;
    // Load AdSense script
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${S.meta.adsenseId}`;
    s.crossOrigin = 'anonymous';
    document.head.appendChild(s);
    // Replace placeholder text with real ad units
    setupAdSlots();
  }

  function setupAdSlots() {
    const slots = [
      { id: 'ad-top',    format: 'auto',          style: 'display:block' },
      { id: 'ad-mid',    format: 'rectangle',      style: 'display:block;width:336px;height:280px' },
      { id: 'ad-bottom', format: 'auto',           style: 'display:block' },
    ];
    slots.forEach(slot => {
      const el = document.getElementById(slot.id);
      if (!el) return;
      el.innerHTML = `<ins class="adsbygoogle" style="${slot.style}" data-ad-client="${S.meta.adsenseId}" data-ad-slot="AUTO" data-ad-format="${slot.format}" data-full-width-responsive="true"></ins>`;
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    });
  }

  /* ──────────────────────────────────────────
     3. EVENT TRACKING HELPERS
     All clicks are tracked in GA automatically
  ────────────────────────────────────────── */
  function track(eventName, params) {
    if (window.gtag) {
      window.gtag('event', eventName, params || {});
    }
  }

  function trackScrollDepth() {
    const depths = [25, 50, 75, 90];
    const fired = new Set();
    window.addEventListener('scroll', () => {
      const pct = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      depths.forEach(d => {
        if (pct >= d && !fired.has(d)) {
          fired.add(d);
          track('scroll_depth', { depth: d + '%', page: window.location.pathname });
        }
      });
    }, { passive: true });
  }

  /* ──────────────────────────────────────────
     4. SEO META TAGS
  ────────────────────────────────────────── */
  function buildMeta() {
    const m = S.meta;
    document.getElementById('page-title').textContent     = `${m.siteName} — ${m.tagline}`;
    document.getElementById('meta-desc').content          = m.description;
    document.getElementById('meta-canonical').href        = m.url + '/';
    document.getElementById('og-title').content           = `${m.siteName} — ${m.tagline}`;
    document.getElementById('og-desc').content            = m.description;
    document.getElementById('og-url').content             = m.url;
    document.getElementById('og-site').content            = m.siteName;
    document.getElementById('tw-title').content           = `${m.siteName} — ${m.tagline}`;
    document.getElementById('tw-desc').content            = m.description;

    // JSON-LD structured data
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "EducationalOrganization",
          "name": m.siteName,
          "url": m.url,
          "description": m.description,
          "teaches": S.topics.map(t => t.title),
          "audience": { "@type": "EducationalAudience", "audienceType": "Beginner, Kids, Teenagers, Adults" },
          "offers": { "@type": "Offer", "name": "30-Minute 1-on-1 Session", "price": "0", "priceCurrency": "USD" }
        },
        {
          "@type": "FAQPage",
          "mainEntity": S.faq.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        }
      ]
    };
    document.getElementById('structured-data').textContent = JSON.stringify(schema);
  }

  /* ──────────────────────────────────────────
     5. BUILD THE PAGE FROM content.js
  ────────────────────────────────────────── */
  function buildPage() {
    const siteName = S.meta.siteName;

    // Header
    setText('h-eyebrow',  S.header.eyebrow);
    setText('h-title',    S.header.title);
    setText('h-subtitle', S.header.subtitle);
    setText('h-desc',     S.header.description);
    setText('nav-brand',  siteName);

    // Intro
    setText('intro-eyebrow', S.intro.eyebrow);
    setText('intro-heading', S.intro.heading);
    setText('quote-text',    S.intro.quote.text);
    setText('quote-author',  '— ' + S.intro.quote.author);
    document.getElementById('intro-paragraphs').innerHTML =
      S.intro.paragraphs.map(p => `<p>${p}</p>`).join('');

    // Explainer boxes
    document.getElementById('explainer-row').innerHTML =
      S.explainers.map(e => `
        <div class="explainer-box fade-in">
          <span class="em">${e.emoji}</span>
          <h4>${e.title}</h4>
          <p>${e.body}</p>
        </div>`).join('');

    // Topics
    document.getElementById('topics-grid').innerHTML =
      S.topics.map(t => `
        <div class="topic-card fade-in">
          <span class="topic-num">${t.number}</span>
          <h3>${t.title}</h3>
          <p style="font-size:.95rem;margin-top:12px;">${t.description}</p>
          <div class="tag-list">${t.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
        </div>`).join('');

    // Lessons
    document.getElementById('lessons-list').innerHTML =
      S.lessons.map((l, i) => {
        const num = String(i + 1).padStart(2, '0');
        const link = l.link ? `data-link="${l.link}"` : '';
        const onclick = l.link
          ? `onclick="trackAndGo('${l.link}','lesson_click','${l.title.replace(/'/g,"\\'")}')"`
          : '';
        return `
        <div class="lesson-item fade-in" ${link} ${onclick}>
          <span class="lesson-num">${num}</span>
          <div>
            <h3>${l.title}</h3>
            <p class="lesson-meta">Topic: ${l.topic} · ${l.duration} · ${l.note}</p>
          </div>
          <span class="badge badge-${l.level}">${l.level.charAt(0).toUpperCase() + l.level.slice(1)}</span>
        </div>`;
      }).join('');

    // Resources
    document.getElementById('files-grid').innerHTML =
      S.resources.map(r => `
        <a href="${r.link}" class="file-card fade-in"
           onclick="track('resource_click',{resource:'${r.title}'})">
          <span class="file-icon">${r.emoji}</span>
          <h4>${r.title}</h4>
          <p>${r.body}</p>
          <span class="file-type">${r.label}</span>
        </a>`).join('');

    // Booking
    setText('book-eyebrow', S.booking.eyebrow);
    document.getElementById('book-heading').innerHTML =
      S.booking.heading.replace('30-minute', '<em>30-minute</em>');
    setText('book-desc', S.booking.description);
    setText('book-note', S.booking.note);
    document.getElementById('book-perks').innerHTML =
      S.booking.perks.map(p => `<li>${p}</li>`).join('');
    const timeSelect = document.getElementById('book-time');
    S.booking.timeSlots.forEach(t => {
      const o = document.createElement('option');
      o.textContent = t; timeSelect.appendChild(o);
    });
    const topicSelect = document.getElementById('book-topic');
    S.booking.topics.forEach(t => {
      const o = document.createElement('option');
      o.textContent = t; topicSelect.appendChild(o);
    });

    // FAQ
    document.getElementById('faq-list').innerHTML =
      S.faq.map((f, i) => `
        <div class="faq-item">
          <button class="faq-q" onclick="toggleFaq(this,${i})" aria-expanded="false">${f.q}</button>
          <div class="faq-a"><p>${f.a}</p></div>
        </div>`).join('');

    // About
    setText('about-eyebrow', S.about.eyebrow);
    document.getElementById('about-heading').innerHTML =
      S.about.heading.replace('genuine', '<em>genuine</em>');
    document.getElementById('about-paragraphs').innerHTML =
      S.about.paragraphs.map(p => `<p>${p}</p>`).join('');
    document.getElementById('stat-row').innerHTML =
      S.about.stats.map(s => `
        <div class="stat">
          <span class="stat-number">${s.number}</span>
          <span class="stat-label">${s.label}</span>
        </div>`).join('');

    // Footer
    setText('footer-brand', siteName);
    setText('footer-copy',
      `© ${new Date().getFullYear()} ${siteName} · Free AI Education for Everyone · curiositas · Latin for "the desire to know"`);
  }

  /* ──────────────────────────────────────────
     6. BOOKING FORM & ICS DOWNLOAD
  ────────────────────────────────────────── */
  let bookingData = {};

  window.handleBooking = function () {
    const n  = val('book-name');
    const e  = val('book-email');
    const d  = val('book-date');
    const t  = val('book-time');
    const tp = val('book-topic');
    if (!n || !e || !d || !t || !tp) { alert('Please fill in all required fields.'); return; }
    if (!e.includes('@'))            { alert('Please enter a valid email address.'); return; }
    bookingData = { name: n, email: e, date: d, time: t, topic: tp };
    document.getElementById('bookingFormContainer').style.display = 'none';
    document.getElementById('bookingSuccess').style.display = 'block';
    document.getElementById('confirm-email').textContent = e;
    track('booking_request', { topic: tp });
  };

  document.getElementById('submit-btn').addEventListener('click', function(){ window.handleBooking(); });

  document.getElementById('download-ics-btn').addEventListener('click', function(){
    const { name, email, date, time, topic } = bookingData;
    const startH = +time.split('–')[0].trim().split(':')[0];
    const startM = +time.split('–')[0].trim().split(':')[1];
    const endTot = startH * 60 + startM + 30;
    const endH   = Math.floor(endTot / 60), endM = endTot % 60;
    const [yr, mo, dy] = date.split('-').map(Number);
    const p  = n => String(n).padStart(2, '0');
    const dtS = `${yr}${p(mo)}${p(dy)}T${p(startH)}${p(startM)}00`;
    const dtE = `${yr}${p(mo)}${p(dy)}T${p(endH)}${p(endM)}00`;
    const now = new Date().toISOString().replace(/[-:.]/g,'').slice(0,15) + 'Z';
    const uid = `curiositas-${Date.now()}@curiositas.ai`;
    const ics = [
      'BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Curiositas.ai//Booking//EN',
      'CALSCALE:GREGORIAN','METHOD:REQUEST',
      'BEGIN:VEVENT',
      `UID:${uid}`,`DTSTAMP:${now}`,`DTSTART:${dtS}`,`DTEND:${dtE}`,
      `SUMMARY:Curiositas.ai — 30-Min Session with ${name}`,
      `DESCRIPTION:Topic: ${topic}\\n\\nYour 30-minute Curiositas.ai session is confirmed.\\nA video call link will be sent to your email.\\n\\nBooked by: ${name} (${email})`,
      'LOCATION:Video Call (link sent by email)',
      `ORGANIZER;CN=Curiositas.ai:mailto:hello@curiositas.ai`,
      `ATTENDEE;CN=${name};RSVP=TRUE:mailto:${email}`,
      'STATUS:CONFIRMED','SEQUENCE:0',
      'BEGIN:VALARM','TRIGGER:-PT30M','ACTION:DISPLAY',
      'DESCRIPTION:Your Curiositas.ai session starts in 30 minutes',
      'END:VALARM','END:VEVENT','END:VCALENDAR'
    ].join('\r\n');
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `curiositas-session-${date}.ics`;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
    track('ics_downloaded', { date: date });
  });

  /* ──────────────────────────────────────────
     7. FAQ ACCORDION
  ────────────────────────────────────────── */
  window.toggleFaq = function (btn, idx) {
    const ans = btn.nextElementSibling;
    const wasOpen = btn.classList.contains('open');
    document.querySelectorAll('.faq-q.open').forEach(b => {
      b.classList.remove('open');
      b.setAttribute('aria-expanded','false');
      b.nextElementSibling.classList.remove('open');
    });
    if (!wasOpen) {
      btn.classList.add('open');
      btn.setAttribute('aria-expanded','true');
      ans.classList.add('open');
      track('faq_open', { question: S.faq[idx] && S.faq[idx].q });
    }
  };

  /* ──────────────────────────────────────────
     8. SCROLL ANIMATIONS
  ────────────────────────────────────────── */
  function initAnimations() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
  }

  /* ──────────────────────────────────────────
     9. NAV ACTIVE STATE
  ────────────────────────────────────────── */
  function initNav() {
    const secs = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('nav a[href^="#"]');
    window.addEventListener('scroll', () => {
      let cur = '';
      secs.forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
    }, { passive: true });
  }

  /* ──────────────────────────────────────────
     10. NAV CLICK TRACKING
  ────────────────────────────────────────── */
  document.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('click', () => track('nav_click', { destination: a.textContent.trim() }));
  });

  /* ──────────────────────────────────────────
     11. LESSON CLICK HELPER (for linked lessons)
  ────────────────────────────────────────── */
  window.trackAndGo = function(url, event, label) {
    track(event, { label: label });
    window.location.href = url;
  };

  // Also expose track globally for inline onclick attributes
  window.track = track;

  /* ──────────────────────────────────────────
     12. BOOKING: set min date
  ────────────────────────────────────────── */
  const di = document.getElementById('book-date');
  if (di) { const t = new Date(); t.setDate(t.getDate() + 1); di.min = t.toISOString().split('T')[0]; }

  /* ──────────────────────────────────────────
     UTILITY
  ────────────────────────────────────────── */
  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }
  function val(id) { return (document.getElementById(id) || {}).value || ''; }

  /* ──────────────────────────────────────────
     INIT — run everything
  ────────────────────────────────────────── */
  buildMeta();
  buildPage();
  loadGA();
  loadAdSense();
  initAnimations();
  initNav();

})();
