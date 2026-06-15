/* =========================================================
   ProactiveAI Architecture Showcase — script.js
   ========================================================= */

'use strict';

/* =========================================================
   1. MERMAID INIT
   ========================================================= */
mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  themeVariables: {
    background:       '#0d1526',
    primaryColor:     '#0d1a30',
    primaryTextColor: '#e2e8f0',
    primaryBorderColor: '#38bdf8',
    lineColor:        '#38bdf8',
    secondaryColor:   '#111d35',
    tertiaryColor:    '#0d1526',
    edgeLabelBackground: '#0d1526',
    clusterBkg:       '#0d1526',
    titleColor:       '#e2e8f0',
    nodeTextColor:    '#e2e8f0',
    fontFamily:       'Inter, system-ui, sans-serif',
    fontSize:         '13px',
  },
  flowchart: { curve: 'basis', htmlLabels: true },
  sequence:  { useMaxWidth: true },
});

/* =========================================================
   2. PROGRESS BAR
   ========================================================= */
(function initProgressBar() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop  = document.documentElement.scrollTop;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width  = pct + '%';
  }, { passive: true });
})();

/* =========================================================
   3. SIDEBAR — ACTIVE LINK & MOBILE TOGGLE
   ========================================================= */
(function initSidebar() {
  const sidebar  = document.getElementById('sidebar');
  const toggle   = document.getElementById('mobile-toggle');
  const overlay  = document.getElementById('sidebar-overlay');
  const navLinks = document.querySelectorAll('.nav-link');

  // Mobile open/close
  if (toggle) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('open');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
    });
  }

  // Close sidebar on nav click (mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
      }
    });
  });

  // Active section detection via IntersectionObserver
  const sections = document.querySelectorAll('section[id], div[id]');
  const sectionIds = new Set(Array.from(navLinks).map(l => l.dataset.section).filter(Boolean));

  const observableSections = Array.from(sections).filter(s => sectionIds.has(s.id));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === entry.target.id);
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

  observableSections.forEach(s => observer.observe(s));
})();

/* =========================================================
   4. ANIMATED COUNTERS
   ========================================================= */
(function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const easeOutQuart = t => 1 - Math.pow(1 - t, 4);

  function animateCounter(el) {
    const target   = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start    = performance.now();

    function step(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      el.textContent = Math.round(easeOutQuart(progress) * target);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
})();

/* =========================================================
   5. FADE-IN ON SCROLL
   ========================================================= */
(function initFadeIn() {
  // Add fade-in class to cards, tech-cards, etc.
  const targets = document.querySelectorAll(
    '.card, .kpi-card, .tech-card, .chart-card, .arch-node, .roadmap-content, .maturity-item, .big-stat'
  );

  targets.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  targets.forEach(el => observer.observe(el));
})();

/* =========================================================
   6. EXPANDABLE ARCH NODES
   ========================================================= */
function toggleNode(el) {
  el.classList.toggle('open');
}

/* =========================================================
   7. MODEL TABLE FILTER
   ========================================================= */
function filterTable(type) {
  const rows   = document.querySelectorAll('#model-table tbody tr');
  const btns   = document.querySelectorAll('#table-filters button');

  rows.forEach(row => {
    row.classList.toggle('hidden', type !== 'all' && row.dataset.type !== type);
  });

  btns.forEach(btn => {
    const isActive = btn.dataset.filter === type;
    btn.classList.toggle('btn-primary', isActive);
    btn.classList.toggle('btn-ghost',   !isActive);
  });
}

/* =========================================================
   8. CHART.JS CHARTS
   ========================================================= */
(function initCharts() {
  // Wait for Chart.js to be available
  if (typeof Chart === 'undefined') {
    window.addEventListener('load', initCharts);
    return;
  }

  Chart.defaults.color            = '#94a3b8';
  Chart.defaults.borderColor      = 'rgba(255,255,255,0.06)';
  Chart.defaults.font.family      = 'Inter, system-ui, sans-serif';
  Chart.defaults.font.size        = 12;
  Chart.defaults.plugins.legend.labels.boxWidth = 12;
  Chart.defaults.plugins.legend.labels.padding  = 14;

  const COLORS = {
    sky:    '#38bdf8',
    indigo: '#818cf8',
    green:  '#34d399',
    amber:  '#fbbf24',
    red:    '#f87171',
  };

  const GRADIENT_SKY    = makeGradient('#38bdf8', '#818cf8');
  const GRADIENT_GREEN  = makeGradient('#34d399', '#38bdf8');

  function makeGradient(c1, c2) {
    // Returns a function that produces a gradient for a given chart context
    return function(ctx) {
      if (!ctx || !ctx.chart || !ctx.chart.chartArea) return c1;
      const { left, right } = ctx.chart.chartArea;
      const grad = ctx.chart.ctx.createLinearGradient(left, 0, right, 0);
      grad.addColorStop(0, c1);
      grad.addColorStop(1, c2);
      return grad;
    };
  }

  const algorithms = [
    'Ecommerce-Popularity',
    'Movie-Item-KNN',
    'EASE',
    'SVD',
    'ALS',
    'LightFM',
    'RP3Beta',
    'BPR',
    'SLIM',
    'NMF',
  ];

  const ndcgScores      = [0.2286, 0.1563, 0.1380, 0.1180, 0.1095, 0.1010, 0.0910, 0.0820, 0.0680, 0.0505];
  const precisionScores = [0.095,  0.062,  0.058,  0.050,  0.046,  0.042,  0.038,  0.034,  0.028,  0.020];
  const recallScores    = [0.142,  0.093,  0.087,  0.075,  0.069,  0.063,  0.057,  0.051,  0.042,  0.030];
  const compositeScores = [0.9919, 0.7450, 0.6990, 0.6220, 0.5870, 0.5510, 0.5200, 0.4810, 0.3900, 0.3100];
  const trainingTimes   = [0.02,   0.08,   0.40,   1.20,   3.10,   4.50,   0.30,   5.20,   12.00,  2.80];

  // ── NDCG@10 Bar Chart ──
  const ndcgCtx = document.getElementById('ndcgChart');
  if (ndcgCtx) {
    new Chart(ndcgCtx, {
      type: 'bar',
      data: {
        labels: algorithms,
        datasets: [{
          label: 'NDCG@10',
          data: ndcgScores,
          backgroundColor: algorithms.map((_, i) =>
            i === 0 ? 'rgba(56,189,248,0.85)' : 'rgba(129,140,248,0.45)'
          ),
          borderColor: algorithms.map((_, i) =>
            i === 0 ? '#38bdf8' : '#818cf8'
          ),
          borderWidth: 1,
          borderRadius: 4,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => ` NDCG@10: ${ctx.parsed.x.toFixed(4)}`,
            },
          },
        },
        scales: {
          x: {
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#94a3b8', font: { size: 11 } },
          },
          y: {
            grid: { display: false },
            ticks: { color: '#94a3b8', font: { size: 11 } },
          },
        },
      },
    });
  }

  // ── Composite Score Doughnut ──
  const compositeCtx = document.getElementById('compositeChart');
  if (compositeCtx) {
    new Chart(compositeCtx, {
      type: 'doughnut',
      data: {
        labels: algorithms.slice(0, 6),
        datasets: [{
          data: compositeScores.slice(0, 6),
          backgroundColor: [
            'rgba(56,189,248,0.85)',
            'rgba(129,140,248,0.65)',
            'rgba(52,211,153,0.65)',
            'rgba(251,191,36,0.65)',
            'rgba(248,113,113,0.65)',
            'rgba(56,189,248,0.40)',
          ],
          borderColor: 'rgba(13,21,38,0.8)',
          borderWidth: 2,
          hoverOffset: 6,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: '#94a3b8', font: { size: 11 }, padding: 10 },
          },
          tooltip: {
            callbacks: {
              label: ctx => ` Composite: ${ctx.parsed.toFixed(4)}`,
            },
          },
        },
      },
    });
  }

  // ── Precision vs Recall Scatter ──
  const prCtx = document.getElementById('prChart');
  if (prCtx) {
    new Chart(prCtx, {
      type: 'scatter',
      data: {
        datasets: algorithms.map((algo, i) => ({
          label: algo,
          data: [{ x: recallScores[i], y: precisionScores[i] }],
          backgroundColor: i === 0 ? '#38bdf8' : (i < 4 ? '#818cf8' : 'rgba(129,140,248,0.45)'),
          pointRadius: i === 0 ? 9 : 6,
          pointHoverRadius: 10,
        })),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => ` ${ctx.dataset.label}: P@10=${ctx.parsed.y.toFixed(3)}, R@10=${ctx.parsed.x.toFixed(3)}`,
            },
          },
        },
        scales: {
          x: {
            title: { display: true, text: 'Recall@10', color: '#94a3b8', font: { size: 11 } },
            grid:  { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#94a3b8', font: { size: 11 } },
          },
          y: {
            title: { display: true, text: 'Precision@10', color: '#94a3b8', font: { size: 11 } },
            grid:  { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#94a3b8', font: { size: 11 } },
          },
        },
      },
    });
  }

  // ── Training Speed Bar ──
  const speedCtx = document.getElementById('speedChart');
  if (speedCtx) {
    new Chart(speedCtx, {
      type: 'bar',
      data: {
        labels: algorithms,
        datasets: [{
          label: 'Training time (s)',
          data: trainingTimes,
          backgroundColor: trainingTimes.map(t =>
            t < 1 ? 'rgba(52,211,153,0.75)' : t < 5 ? 'rgba(251,191,36,0.65)' : 'rgba(248,113,113,0.65)'
          ),
          borderColor: trainingTimes.map(t =>
            t < 1 ? '#34d399' : t < 5 ? '#fbbf24' : '#f87171'
          ),
          borderWidth: 1,
          borderRadius: 4,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => ` ${ctx.parsed.x}s training time`,
            },
          },
        },
        scales: {
          x: {
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#94a3b8', font: { size: 11 } },
            title: { display: true, text: 'Seconds (lower = better)', color: '#94a3b8', font: { size: 11 } },
          },
          y: {
            grid: { display: false },
            ticks: { color: '#94a3b8', font: { size: 11 } },
          },
        },
      },
    });
  }
})();

/* =========================================================
   9. SMOOTH ANCHOR SCROLL (offset for sticky header / mobile)
   ========================================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = window.innerWidth <= 768 ? 60 : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* =========================================================
   10. MATURITY BARS — animate on scroll
   ========================================================= */
(function initMaturityBars() {
  const bars = document.querySelectorAll('.maturity-bar-fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // bars already have inline width; trigger CSS transition by re-setting it
        const bar = entry.target;
        const w   = bar.style.width;
        bar.style.width = '0%';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => { bar.style.width = w; });
        });
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  bars.forEach(b => observer.observe(b));
})();

/* =========================================================
   11. SCORE BAR ANIMATIONS
   ========================================================= */
(function initScoreBars() {
  const fills = document.querySelectorAll('.score-fill');
  if (!fills.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const w    = fill.style.width;
        fill.style.width = '0%';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => { fill.style.width = w; });
        });
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.2 });

  fills.forEach(f => observer.observe(f));
})();
