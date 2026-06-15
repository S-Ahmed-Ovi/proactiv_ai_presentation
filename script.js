/* =====================================================
   PROACTIVE AI — PREMIUM CINEMATIC SCRIPT
   ===================================================== */

'use strict';

/* ── HELPERS ── */
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

/* ── SCROLL TO SECTION ── */
window.scrollTo = function(id) {
  const el = $(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

/* ── MOBILE MENU ── */
window.toggleMobileMenu = function() {
  const m = $('mobile-menu');
  m.style.display = m.style.display === 'flex' ? 'none' : 'flex';
};

/* ── LAYER TOGGLE ── */
window.toggleLayer = function(el) {
  const detail = el.nextElementSibling;
  const isOpen = detail && detail.classList.contains('open');
  // close all
  $$('.arch-layer-detail').forEach(d => d.classList.remove('open'));
  $$('.arch-layer').forEach(l => l.classList.remove('expanded'));
  if (!isOpen && detail) {
    detail.classList.add('open');
    el.classList.add('expanded');
  }
};

/* ── TABLE FILTER ── */
window.filterTable = function(type, btn) {
  $$('.btn-filter').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  $$('#algoTbody tr').forEach(row => {
    row.style.display = (type === 'all' || row.dataset.type === type) ? '' : 'none';
  });
};

/* =====================================================
   PROGRESS BAR
   ===================================================== */
function initProgress() {
  const bar = $('progress');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = window.scrollY / (h.scrollHeight - h.clientHeight);
    bar.style.transform = `scaleX(${pct})`;
  }, { passive: true });
}

/* =====================================================
   NAV ACTIVE STATE
   ===================================================== */
function initNav() {
  const sections = ['ch1','ch2','ch3','ch4','ch5','ch6','ch7','ch8','ch9','ch10','ch11','ch12','ch13'];
  const links = $$('.nav-link');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const idx = sections.indexOf(entry.target.id);
        if (idx > -1 && links[idx]) links[idx].classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(id => { const el = $(id); if (el) observer.observe(el); });
}

/* =====================================================
   SCROLL REVEAL
   ===================================================== */
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('in');
        }, i * 40);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  $$('.reveal, .reveal-scale, .reveal-left').forEach(el => observer.observe(el));
}

/* =====================================================
   ANIMATED COUNTERS
   ===================================================== */
function initCounters() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const spans = entry.target.querySelectorAll('.counter');
        spans.forEach(span => {
          const target = +span.dataset.target;
          let current = 0;
          const step = target / 50;
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            span.textContent = Math.round(current);
            if (current >= target) clearInterval(timer);
          }, 30);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  $$('.hero-kpis, .stat-highlight').forEach(el => observer.observe(el));
}

/* =====================================================
   HERO CANVAS — NEURAL NETWORK PARTICLES
   ===================================================== */
function initHeroCanvas() {
  const canvas = $('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, nodes = [], raf;

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    nodes = Array.from({ length: 60 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2.5 + 1,
      opacity: Math.random() * 0.5 + 0.1
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    // connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          const alpha = (1 - dist/120) * 0.12;
          ctx.strokeStyle = `rgba(37,99,235,${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    // nodes
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(37,99,235,${n.opacity})`;
      ctx.fill();
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });
    raf = requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener('resize', () => { resize(); });
}

/* =====================================================
   ECOSYSTEM CANVAS — ANIMATED ARCHITECTURE MAP
   ===================================================== */
function initEcosystem() {
  const canvas = $('ecosystemCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const nodes = [
    { id:'react', label:'React Frontend', icon:'⚡', x:0.08, y:0.18, color:'#7c3aed' },
    { id:'fastapi', label:'FastAPI Backend', icon:'🔧', x:0.28, y:0.18, color:'#2563eb' },
    { id:'auth', label:'Auth Gateway', icon:'🔐', x:0.28, y:0.48, color:'#dc2626' },
    { id:'tenant', label:'Tenant Manager', icon:'🏢', x:0.48, y:0.18, color:'#059669' },
    { id:'training', label:'Training Pipeline', icon:'🎓', x:0.48, y:0.48, color:'#d97706' },
    { id:'registry', label:'21 Algorithms', icon:'🧠', x:0.68, y:0.18, color:'#7c3aed' },
    { id:'benchmark', label:'Benchmark Engine', icon:'📊', x:0.68, y:0.48, color:'#0ea5e9' },
    { id:'models', label:'Model Registry', icon:'💾', x:0.88, y:0.18, color:'#059669' },
    { id:'serving', label:'Serving Pipeline', icon:'🚀', x:0.88, y:0.48, color:'#2563eb' },
    { id:'redis', label:'Redis Cache', icon:'⚡', x:0.18, y:0.78, color:'#dc2626' },
    { id:'opensearch', label:'OpenSearch', icon:'🔍', x:0.48, y:0.78, color:'#d97706' },
    { id:'embedding', label:'Embedding Service', icon:'🔢', x:0.68, y:0.78, color:'#7c3aed' },
    { id:'llm', label:'LLM SQL Planner', icon:'🤖', x:0.08, y:0.78, color:'#059669' },
    { id:'webhook', label:'Webhook SDK', icon:'🔗', x:0.88, y:0.78, color:'#0ea5e9' },
  ];

  const edges = [
    ['react','fastapi'],['fastapi','auth'],['fastapi','tenant'],
    ['tenant','training'],['training','benchmark'],['training','registry'],
    ['benchmark','models'],['models','serving'],['serving','react'],
    ['fastapi','redis'],['training','opensearch'],['opensearch','embedding'],
    ['llm','training'],['webhook','serving'],['auth','redis'],
    ['registry','benchmark'],['serving','embedding'],
  ];

  let W, H;
  let particles = [];
  let t = 0;

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight || 520;
    canvas.height = H;
  }

  function nodePos(n) {
    return { x: n.x * W, y: n.y * H };
  }

  function spawnParticle(edge) {
    const from = nodes.find(n => n.id === edge[0]);
    const to   = nodes.find(n => n.id === edge[1]);
    if (!from || !to) return;
    particles.push({ from: nodePos(from), to: nodePos(to), t: 0, color: from.color });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    t++;
    if (t % 40 === 0) {
      const edge = edges[Math.floor(Math.random() * edges.length)];
      spawnParticle(edge);
    }

    // edges
    edges.forEach(([a, b]) => {
      const fn = nodes.find(n => n.id === a);
      const tn = nodes.find(n => n.id === b);
      if (!fn || !tn) return;
      const fp = nodePos(fn), tp = nodePos(tn);
      ctx.beginPath();
      ctx.moveTo(fp.x, fp.y);
      ctx.lineTo(tp.x, tp.y);
      ctx.strokeStyle = 'rgba(0,0,0,0.06)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);
    });

    // particles
    particles = particles.filter(p => p.t <= 1);
    particles.forEach(p => {
      p.t += 0.018;
      const x = p.from.x + (p.to.x - p.from.x) * p.t;
      const y = p.from.y + (p.to.y - p.from.y) * p.t;
      const alpha = Math.sin(p.t * Math.PI);
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = p.color + Math.round(alpha * 255).toString(16).padStart(2,'0');
      ctx.fill();
      // glow
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fillStyle = p.color + Math.round(alpha * 60).toString(16).padStart(2,'0');
      ctx.fill();
    });

    // nodes
    nodes.forEach(n => {
      const {x, y} = nodePos(n);
      const pulse = 1 + Math.sin(t * 0.03 + n.x * 10) * 0.06;
      const r = 32 * pulse;

      // shadow glow
      ctx.save();
      ctx.shadowColor = n.color;
      ctx.shadowBlur = 16;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.restore();

      // border
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.strokeStyle = n.color + '44';
      ctx.lineWidth = 2;
      ctx.stroke();

      // icon
      ctx.font = `${20 * pulse}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(n.icon, x, y - 2);

      // label
      ctx.font = `600 9.5px Inter, sans-serif`;
      ctx.fillStyle = '#3d4663';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      // wrap label
      const words = n.label.split(' ');
      if (words.length <= 2) {
        ctx.fillText(n.label, x, y + r + 14);
      } else {
        ctx.fillText(words.slice(0,2).join(' '), x, y + r + 12);
        ctx.fillText(words.slice(2).join(' '), x, y + r + 24);
      }
    });

    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener('resize', resize);
}

/* =====================================================
   PIPELINE CANVAS — ANIMATED FLOW
   ===================================================== */
function initPipelineCanvas() {
  const canvas = $('pipelineCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = canvas.offsetWidth, H = 200;
  canvas.width = W; canvas.height = H;

  const steps = [
    { icon:'📥', label:'Data\nIngestion', color:'#2563eb' },
    { icon:'🧹', label:'Data\nCleaning', color:'#7c3aed' },
    { icon:'📐', label:'Interaction\nMatrix', color:'#0ea5e9' },
    { icon:'🔢', label:'Embedding\nStep', color:'#059669' },
    { icon:'🏋️', label:'Model\nTraining', color:'#d97706' },
    { icon:'🏆', label:'Model\nPromotion', color:'#dc2626' },
    { icon:'⚡', label:'Real-Time\nServing', color:'#2563eb' },
  ];

  const particles = [];
  let t = 0;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const stepW = W / steps.length;
    const cy = H / 2;
    const r = 32;

    // connector lines
    steps.forEach((s, i) => {
      if (i < steps.length - 1) {
        const x1 = stepW * i + stepW / 2 + r;
        const x2 = stepW * (i+1) + stepW / 2 - r;
        const grad = ctx.createLinearGradient(x1, cy, x2, cy);
        grad.addColorStop(0, s.color + '66');
        grad.addColorStop(1, steps[i+1].color + '66');
        ctx.beginPath();
        ctx.moveTo(x1, cy);
        ctx.lineTo(x2, cy);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 3;
        ctx.stroke();
      }
    });

    // spawn particles along pipe
    t++;
    if (t % 35 === 0) {
      const si = Math.floor(Math.random() * (steps.length - 1));
      const x1 = stepW * si + stepW / 2;
      const x2 = stepW * (si+1) + stepW / 2;
      particles.push({ x: x1, tx: x2, y: cy, t: 0, color: steps[si].color });
    }

    // draw particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.t += 0.022;
      if (p.t > 1) { particles.splice(i, 1); continue; }
      const px = p.x + (p.tx - p.x) * p.t;
      const alpha = Math.sin(p.t * Math.PI);
      ctx.beginPath();
      ctx.arc(px, p.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    // step nodes
    steps.forEach((s, i) => {
      const cx = stepW * i + stepW / 2;
      const pulse = 1 + Math.sin(t * 0.04 + i * 1.2) * 0.05;
      const nr = r * pulse;

      // glow
      ctx.save();
      ctx.shadowColor = s.color;
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(cx, cy, nr, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.restore();

      // ring
      ctx.beginPath();
      ctx.arc(cx, cy, nr, 0, Math.PI * 2);
      ctx.strokeStyle = s.color + '88';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // icon
      ctx.font = `${20 * pulse}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(s.icon, cx, cy);

      // label
      ctx.font = '600 10px Inter, sans-serif';
      ctx.fillStyle = '#3d4663';
      const lines = s.label.split('\n');
      lines.forEach((line, li) => {
        ctx.fillText(line, cx, cy + nr + 14 + li * 14);
      });
    });

    requestAnimationFrame(draw);
  }

  draw();
  window.addEventListener('resize', () => {
    W = canvas.width = canvas.offsetWidth;
    canvas.height = H = 200;
  });
}

/* =====================================================
   GALAXY CANVAS — 21 ALGORITHM CONSTELLATION
   ===================================================== */
function initGalaxy() {
  const canvas = $('galaxyCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const groups = [
    { name: 'Matrix Factorization', color: '#2563eb', algos: ['SVD','SVD++','NMF','ALS','BPR'], angle: 0 },
    { name: 'Neighborhood', color: '#7c3aed', algos: ['User-KNN','Item-KNN'], angle: 72 },
    { name: 'Graph', color: '#059669', algos: ['EASE','SLIM','P3Alpha','RP3Beta'], angle: 144 },
    { name: 'Neural', color: '#d97706', algos: ['WARP','Autoencoder-CF'], angle: 216 },
    { name: 'Content', color: '#dc2626', algos: ['Content TF-IDF','Semantic Embed.'], angle: 288 },
    { name: 'Hybrid', color: '#0ea5e9', algos: ['LightFM','FM','Temporal-SVD','Movie-KNN','Ecommerce-Pop.','Ecommerce-ALS'], angle: 340 },
  ];

  let W, H, cx, cy;
  let hoveredNode = null;
  const nodePositions = [];
  let t = 0;

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = 420;
    canvas.height = H;
    cx = W / 2; cy = H / 2;
    computePositions();
  }

  function computePositions() {
    nodePositions.length = 0;
    groups.forEach((g, gi) => {
      // group center
      const gAngle = (g.angle * Math.PI) / 180;
      const gR = Math.min(W, H) * 0.28;
      const gcx = cx + Math.cos(gAngle) * gR;
      const gcy = cy + Math.sin(gAngle) * gR;
      // group label node
      nodePositions.push({ type: 'group', label: g.name, x: gcx, y: gcy, color: g.color, r: 24, gi });
      // algo nodes
      g.algos.forEach((algo, ai) => {
        const aAngle = gAngle + (ai - (g.algos.length-1)/2) * 0.45;
        const aR = 60 + Math.min(W, H) * 0.07;
        nodePositions.push({
          type: 'algo', label: algo, x: gcx + Math.cos(aAngle) * aR, y: gcy + Math.sin(aAngle) * aR,
          color: g.color, r: 18, gi, ai
        });
      });
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    t++;

    // connections from group centers to algos
    nodePositions.forEach(n => {
      if (n.type === 'algo') {
        const grp = nodePositions.find(p => p.type === 'group' && p.gi === n.gi);
        if (!grp) return;
        ctx.beginPath();
        ctx.moveTo(grp.x, grp.y);
        ctx.lineTo(n.x, n.y);
        ctx.strokeStyle = n.color + '25';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    });

    // nodes
    nodePositions.forEach((n, i) => {
      const pulse = n.type === 'group'
        ? 1 + Math.sin(t * 0.03 + i * 0.8) * 0.1
        : 1 + Math.sin(t * 0.05 + i * 1.2) * 0.06;
      const nr = n.r * pulse;
      const isHov = hoveredNode === i;

      ctx.save();
      ctx.shadowColor = n.color;
      ctx.shadowBlur = isHov ? 28 : (n.type === 'group' ? 16 : 8);

      // circle
      ctx.beginPath();
      ctx.arc(n.x, n.y, nr, 0, Math.PI * 2);
      if (n.type === 'group') {
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, nr);
        g.addColorStop(0, n.color);
        g.addColorStop(1, n.color + 'aa');
        ctx.fillStyle = g;
      } else {
        ctx.fillStyle = isHov ? n.color : 'white';
        if (!isHov) {
          ctx.strokeStyle = n.color + '88';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }
      ctx.fill();
      ctx.restore();

      // label
      ctx.font = n.type === 'group' ? '700 9px Inter' : '500 9px Inter';
      ctx.fillStyle = n.type === 'group' ? 'white' : (isHov ? 'white' : '#3d4663');
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      if (n.type === 'algo') {
        ctx.fillText(n.label, n.x, n.y + nr + 12);
      } else {
        // split group name
        const words = n.label.split(' ');
        if (words.length === 1) {
          ctx.fillText(n.label, n.x, n.y);
        } else {
          ctx.fillText(words[0], n.x, n.y - 5);
          ctx.fillText(words.slice(1).join(' '), n.x, n.y + 7);
        }
      }
    });

    // center decoration
    ctx.save();
    ctx.shadowColor = '#2563eb';
    ctx.shadowBlur = 24;
    ctx.beginPath();
    ctx.arc(cx, cy, 28 + Math.sin(t*0.04)*3, 0, Math.PI*2);
    const cg = ctx.createRadialGradient(cx,cy,0,cx,cy,28);
    cg.addColorStop(0,'#2563eb');
    cg.addColorStop(1,'#7c3aed');
    ctx.fillStyle = cg;
    ctx.fill();
    ctx.restore();
    ctx.font = 'bold 18px Inter';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('21', cx, cy - 4);
    ctx.font = '600 8px Inter';
    ctx.fillText('algos', cx, cy + 8);

    requestAnimationFrame(draw);
  }

  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    hoveredNode = null;
    nodePositions.forEach((n, i) => {
      const dx = mx - n.x, dy = my - n.y;
      if (Math.sqrt(dx*dx + dy*dy) < n.r + 12) hoveredNode = i;
    });
    canvas.style.cursor = hoveredNode !== null ? 'pointer' : 'default';
  });

  resize();
  draw();
  window.addEventListener('resize', resize);
}

/* =====================================================
   ALGORITHM TABLE DATA
   ===================================================== */
function initAlgoTable() {
  const algos = [
    { name:'SVD', type:'Matrix Factor.', typeKey:'Matrix', feedback:'Both', scale:'High', speed:'Fast', domain:'General', ready:true },
    { name:'SVD++', type:'Matrix Factor.', typeKey:'Matrix', feedback:'Explicit', scale:'Low', speed:'Slow', domain:'General', ready:false },
    { name:'NMF', type:'Matrix Factor.', typeKey:'Matrix', feedback:'Explicit', scale:'Medium', speed:'Medium', domain:'General', ready:true },
    { name:'ALS', type:'Matrix Factor.', typeKey:'Matrix', feedback:'Implicit', scale:'∞ Unlimited', speed:'Fast', domain:'General', ready:true },
    { name:'BPR', type:'Pairwise Rank.', typeKey:'Matrix', feedback:'Implicit', scale:'∞ Unlimited', speed:'Medium', domain:'General', ready:true },
    { name:'User-KNN', type:'Neighborhood', typeKey:'Neighborhood', feedback:'Both', scale:'12K users', speed:'Medium', domain:'General', ready:false },
    { name:'Item-KNN', type:'Neighborhood', typeKey:'Neighborhood', feedback:'Both', scale:'20K items', speed:'Medium', domain:'General', ready:true },
    { name:'EASE', type:'Linear Closed-Form', typeKey:'Graph', feedback:'Both', scale:'50K users', speed:'Fast', domain:'General', ready:true },
    { name:'SLIM', type:'Sparse Linear', typeKey:'Graph', feedback:'Both', scale:'5K items', speed:'Slow', domain:'General', ready:false },
    { name:'P3Alpha', type:'Graph Walk', typeKey:'Graph', feedback:'Implicit', scale:'∞ Unlimited', speed:'Fast', domain:'General', ready:true },
    { name:'RP3Beta', type:'Graph Walk', typeKey:'Graph', feedback:'Implicit', scale:'∞ Unlimited', speed:'Fast', domain:'General', ready:true },
    { name:'WARP', type:'Pairwise MF', typeKey:'Neural', feedback:'Implicit', scale:'∞ Unlimited', speed:'Slow', domain:'General', ready:false },
    { name:'LightFM', type:'Hybrid MF', typeKey:'Hybrid', feedback:'Both', scale:'20K users', speed:'Medium', domain:'General', ready:false },
    { name:'Autoencoder-CF', type:'Neural', typeKey:'Neural', feedback:'Both', scale:'6K users', speed:'Slow', domain:'General', ready:false },
    { name:'Content TF-IDF', type:'Content-Based', typeKey:'Content', feedback:'Both', scale:'25K users', speed:'Fast', domain:'General', ready:true },
    { name:'Factorization M.', type:'Feature Interaction', typeKey:'Hybrid', feedback:'Both', scale:'15K users', speed:'Slow', domain:'General', ready:false },
    { name:'Temporal-SVD', type:'Time-Aware SVD', typeKey:'Hybrid', feedback:'Both', scale:'25K users', speed:'Medium', domain:'Movie', ready:false },
    { name:'Movie-Item-KNN', type:'Genre-Aware KNN', typeKey:'Hybrid', feedback:'Explicit', scale:'10K items', speed:'Medium', domain:'Movie', ready:false },
    { name:'Ecommerce-Pop.', type:'Popularity Baseline', typeKey:'Hybrid', feedback:'Implicit', scale:'∞ Unlimited', speed:'Fast', domain:'E-Commerce', ready:true },
    { name:'Ecommerce-ALS', type:'Purchase-Weighted', typeKey:'Hybrid', feedback:'Implicit', scale:'∞ Unlimited', speed:'Medium', domain:'E-Commerce', ready:true },
    { name:'Semantic Embed.', type:'Neural Semantic', typeKey:'Content', feedback:'Both', scale:'∞ (scaled)', speed:'Medium', domain:'General', ready:false },
  ];

  const typeColors = {
    Matrix: 'tag-blue', Neighborhood: 'tag-purple', Graph: 'tag-green',
    Neural: 'tag-amber', Content: 'tag-red', Hybrid: 'tag-blue'
  };

  const tbody = $('algoTbody');
  if (!tbody) return;

  algos.forEach(a => {
    const tr = document.createElement('tr');
    tr.dataset.type = a.typeKey;
    tr.innerHTML = `
      <td class="algo-name">${a.name}</td>
      <td><span class="tag ${typeColors[a.typeKey] || 'tag-blue'}">${a.type}</span></td>
      <td><span class="tag ${a.feedback==='Both'?'tag-green':(a.feedback==='Implicit'?'tag-blue':'tag-purple')}">${a.feedback}</span></td>
      <td style="font-size:12px;color:${a.scale.includes('∞')?'#059669':'#7b85a3'};font-weight:${a.scale.includes('∞')?700:500};">${a.scale}</td>
      <td><span class="tag ${a.speed==='Fast'?'tag-green':(a.speed==='Medium'?'tag-blue':'tag-amber')}">${a.speed}</span></td>
      <td style="font-size:12px;color:var(--text-2);">${a.domain}</td>
      <td><span class="ready-badge ${a.ready?'ready-hi':'ready-md'}">${a.ready?'✓ High':'Medium'}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

/* =====================================================
   CHART.JS CHARTS
   ===================================================== */
function initCharts() {
  const algos = ['Ecom-Pop.','Movie-KNN','EASE','SVD','ALS','LightFM','RP3Beta','BPR','SLIM','NMF'];
  const ndcg   = [0.2286, 0.1563, 0.1380, 0.1180, 0.1095, 0.1010, 0.0910, 0.0820, 0.0680, 0.0505];
  const comp   = [0.9919, 0.7812, 0.7401, 0.6720, 0.6234, 0.5912, 0.5820, 0.5510, 0.3912, 0.3401];
  const prec   = [0.095, 0.062, 0.058, 0.050, 0.046, 0.042, 0.038, 0.034, 0.028, 0.020];
  const rec    = [0.412, 0.308, 0.287, 0.255, 0.231, 0.218, 0.204, 0.188, 0.156, 0.112];
  const speed  = [0.02, 0.08, 0.40, 1.20, 3.10, 4.50, 0.30, 5.20, 12.0, 2.80];

  const baseOpts = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { color: '#7b85a3', font: { size: 10 } } },
      y: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { color: '#7b85a3', font: { size: 10 } } }
    },
    animation: { duration: 1000, easing: 'easeOutQuart' }
  };

  const blueGrad = ctx => {
    const g = ctx.createLinearGradient(0, 0, 0, 200);
    g.addColorStop(0, 'rgba(37,99,235,0.85)');
    g.addColorStop(1, 'rgba(124,58,237,0.6)');
    return g;
  };

  // NDCG Chart
  const ndcgCtx = $('ndcgChart');
  if (ndcgCtx) {
    new Chart(ndcgCtx, {
      type: 'bar',
      data: {
        labels: algos,
        datasets: [{ data: ndcg, backgroundColor: ctx => blueGrad(ctx.chart.ctx), borderRadius: 6, borderSkipped: false }]
      },
      options: { ...baseOpts, plugins: { ...baseOpts.plugins, tooltip: { callbacks: { label: c => `NDCG: ${c.raw.toFixed(4)}` } } } }
    });
  }

  // Composite Chart
  const compCtx = $('compositeChart');
  if (compCtx) {
    new Chart(compCtx, {
      type: 'bar',
      data: {
        labels: algos,
        datasets: [{
          data: comp,
          backgroundColor: ctx => {
            const g = ctx.chart.ctx.createLinearGradient(0,0,0,200);
            g.addColorStop(0,'rgba(5,150,105,0.85)');
            g.addColorStop(1,'rgba(37,99,235,0.6)');
            return g;
          },
          borderRadius: 6, borderSkipped: false
        }]
      },
      options: { ...baseOpts, plugins: { ...baseOpts.plugins, tooltip: { callbacks: { label: c => `Score: ${c.raw.toFixed(4)}` } } } }
    });
  }

  // Precision vs Recall
  const prCtx = $('prChart');
  if (prCtx) {
    new Chart(prCtx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Algorithms',
          data: algos.map((a,i) => ({ x: rec[i], y: prec[i], label: a })),
          backgroundColor: 'rgba(37,99,235,0.7)',
          pointRadius: 7, pointHoverRadius: 10
        }]
      },
      options: {
        ...baseOpts,
        plugins: {
          ...baseOpts.plugins,
          tooltip: { callbacks: { label: ctx => `${ctx.raw.label}: P=${ctx.raw.y.toFixed(3)} R=${ctx.raw.x.toFixed(3)}` } }
        },
        scales: {
          x: { ...baseOpts.scales.x, title: { display: true, text: 'Recall@10', color: '#7b85a3', font: { size: 10 } } },
          y: { ...baseOpts.scales.y, title: { display: true, text: 'Precision@10', color: '#7b85a3', font: { size: 10 } } }
        }
      }
    });
  }

  // Speed Chart
  const speedCtx = $('speedChart');
  if (speedCtx) {
    new Chart(speedCtx, {
      type: 'bar',
      data: {
        labels: algos,
        datasets: [{
          data: speed,
          backgroundColor: ctx => {
            const v = speed[ctx.dataIndex];
            if (v <= 0.5) return 'rgba(5,150,105,0.8)';
            if (v <= 3) return 'rgba(217,119,6,0.8)';
            return 'rgba(220,38,38,0.8)';
          },
          borderRadius: 6, borderSkipped: false
        }]
      },
      options: { ...baseOpts, plugins: { ...baseOpts.plugins, tooltip: { callbacks: { label: c => `${c.raw}s training time` } } } }
    });
  }
}

/* =====================================================
   CLOSING CANVAS — PARTICLES
   ===================================================== */
function initClosingCanvas() {
  const canvas = $('closingCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, stars = [];
  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    stars = Array.from({length:80}, () => ({
      x: Math.random()*W, y: Math.random()*H,
      r: Math.random()*1.5+0.5,
      opacity: Math.random()*0.6+0.1,
      vx: (Math.random()-0.5)*0.3,
      vy: (Math.random()-0.5)*0.3
    }));
  }
  function draw() {
    ctx.clearRect(0,0,W,H);
    stars.forEach(s => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(255,255,255,${s.opacity})`;
      ctx.fill();
      s.x += s.vx; s.y += s.vy;
      if (s.x<0||s.x>W) s.vx*=-1;
      if (s.y<0||s.y>H) s.vy*=-1;
    });
    requestAnimationFrame(draw);
  }
  resize();
  draw();
  window.addEventListener('resize', resize);
}

/* =====================================================
   LIFECYCLE STEP ANIMATION
   ===================================================== */
function initLifecycleAnimation() {
  const steps = ['ls-a','ls-b','ls-c','ls-d','ls-e','ls-f'];
  let current = 0;
  function cycle() {
    steps.forEach(id => { const el=$(id); if(el) el.classList.remove('active-step'); });
    const el = $(steps[current]);
    if (el) el.classList.add('active-step');
    current = (current + 1) % steps.length;
  }
  // only start when visible
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      cycle();
      setInterval(cycle, 1200);
      observer.disconnect();
    }
  }, { threshold: 0.3 });
  const section = $('ch6');
  if (section) observer.observe(section);
}

/* =====================================================
   INIT ALL
   ===================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initProgress();
  initNav();
  initReveal();
  initCounters();
  initHeroCanvas();
  initAlgoTable();

  // Lazy-init canvas-heavy sections
  const heavy = [
    { id: 'ch4', fn: initEcosystem, done: false },
    { id: 'ch7', fn: initPipelineCanvas, done: false },
    { id: 'ch9', fn: initGalaxy, done: false },
    { id: 'ch11', fn: initCharts, done: false },
    { id: 'ch14', fn: initClosingCanvas, done: false },
  ];

  const lazyObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const h = heavy.find(x => x.id === entry.target.id);
        if (h && !h.done) { h.fn(); h.done = true; }
      }
    });
  }, { threshold: 0.1 });

  heavy.forEach(h => { const el=$(h.id); if(el) lazyObserver.observe(el); });

  initLifecycleAnimation();

  // Hero entrance
  setTimeout(() => {
    $$('#ch1 .reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('in'), i * 120);
    });
  }, 200);
});