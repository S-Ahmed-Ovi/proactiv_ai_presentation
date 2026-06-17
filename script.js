'use strict';

/* ═══════════════════════════════════════════════════════
   SLIDE CONTENT DEFINITIONS
═══════════════════════════════════════════════════════ */
const CHAPTERS = [
  { id:'hero',      title:'Hero',                 label:'01 — Hero' },
  { id:'exec',      title:'Executive Summary',    label:'02 — Executive' },
  { id:'problem',   title:'Business Problem',     label:'03 — Problem' },
  { id:'system',    title:'System Overview',      label:'04 — System' },
  { id:'highlevel', title:'High-Level Arch',      label:'05 — Architecture' },
  { id:'lifecycle', title:'Request Lifecycle',    label:'06 — Lifecycle' },
  { id:'pipeline',  title:'Training Pipeline',    label:'07 — Pipeline' },
  { id:'embedding', title:'Embedding Arch',       label:'08 — Embeddings' },
  { id:'algo',      title:'21 Algorithms',        label:'09 — Algorithms' },
  { id:'rationale', title:'Engineering Rationale',label:'10 — Why 21 Algorithms?' },
  { id:'selection', title:'Model Selection',      label:'11 — Selection' },
  { id:'metrics',   title:'Metrics Dashboard',    label:'12 — Metrics' },
  { id:'security',  title:'Security',             label:'13 — Security' },
  { id:'roadmap',   title:'Roadmap',              label:'14 — Roadmap' },
  { id:'closing',   title:'Closing',              label:'15 — Closing' },
];

/* ═══════════════════════════════════════════════════════
   SLIDE HTML GENERATORS
═══════════════════════════════════════════════════════ */
function slideHero() {
  return `
  <div class="slide-inner" style="min-height:100vh;justify-content:center;padding-top:80px;">
    <div class="hero-badge anim-up"><span class="hero-badge-dot"></span>Production-Ready · Multi-Tenant SaaS</div>
    <h1 class="hero-title anim-up delay-1">Proactive<span class="grad">AI</span><br/>Recommendation<br/>Engine <span style="opacity:0.3;font-weight:300;">v2</span></h1>
    <p class="hero-sub anim-up delay-2">Enterprise-grade personalization infrastructure. 21 algorithms. Automated model selection. Real-time inference under 100ms.</p>
    <div class="hero-kpis anim-up delay-3">
      <div class="kpi-card"><div class="kpi-val">21+</div><div class="kpi-lbl">Recommendation<br/>Algorithms</div></div>
      <div class="kpi-card"><div class="kpi-val">5</div><div class="kpi-lbl">Business<br/>Domains</div></div>
      <div class="kpi-card"><div class="kpi-val">&lt;100ms</div><div class="kpi-lbl">P99 Inference<br/>Latency</div></div>
      <div class="kpi-card"><div class="kpi-val">14</div><div class="kpi-lbl">Dashboard<br/>Pages</div></div>
    </div>
    <div class="hero-ctas anim-up delay-4">
      <button class="btn-brand" onclick="goTo(3)"><i class="fas fa-play"></i> Explore Architecture</button>
      <button class="btn-outline" onclick="goTo(8)"><i class="fas fa-cube"></i> View Algorithms</button>
      <button class="btn-outline" onclick="goTo(9)"><i class="fas fa-brain"></i> Why 21 Algorithms?</button>
    </div>
  </div>`;
}

function slideExec() {
  return `
  <div class="slide-inner">
    <div class="eyebrow anim-up">Chapter 02</div>
    <h2 class="slide-title anim-up delay-1">Executive Summary</h2>
    <p class="slide-lead anim-up delay-2">A complete SaaS platform eliminating 6–12 months of custom ML build time — deployable with any tenant's data in minutes.</p>
    <div class="g2 anim-up delay-2" style="margin-bottom:24px;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
        <div class="stat-big"><div class="val">35%</div><div class="lbl">of Amazon's revenue comes from recommendation algorithms</div></div>
        <div class="stat-big"><div class="val">80%</div><div class="lbl">of Netflix viewing time is driven by personalization</div></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:14px;">
        <div class="card"><div class="card-icon ci-blue">🎯</div><div class="card-title">Business Problem Solved</div><div class="card-body">Organizations lack plug-and-play recommendation infrastructure. This platform delivers a fully managed SaaS engine tenants deploy with their own data in minutes — no ML team required.</div></div>
        <div class="card"><div class="card-icon ci-purple">📈</div><div class="card-title">Expected Outcomes</div><div class="card-body">Measurable uplift in CTR, session depth, and revenue per user. Composite scoring (70% accuracy · 20% speed · 10% scalability) selects the optimal model automatically per tenant.</div></div>
      </div>
    </div>
    <div class="g3 anim-up delay-3">
      <div class="card"><div class="card-icon ci-green">👥</div><div class="card-title">Target Markets</div><div class="card-body">E-commerce, streaming, content publishers, government agencies, fintech — any vertical requiring personalized user experiences at scale.</div></div>
      <div class="card"><div class="card-icon ci-amber">🏢</div><div class="card-title">Multi-Tenant by Design</div><div class="card-body">Per-tenant model stores, training jobs, and deployment state under <code style="font-size:11px;background:#f1f5f9;padding:1px 5px;border-radius:4px;">tenants/{id}/</code> — zero cross-tenant data access.</div></div>
      <div class="card"><div class="card-icon ci-blue">⚡</div><div class="card-title">Zero ML Expertise</div><div class="card-body">The platform auto-selects, trains, benchmarks, and promotes the best model. Tenants interact only via a clean REST API and SaaS dashboard.</div></div>
    </div>
  </div>`;
}

function slideProblem() {
  return `
  <div class="slide-inner">
    <div class="eyebrow anim-up">Chapter 03</div>
    <h2 class="slide-title anim-up delay-1">The Business Problem<br/>& Market Gap</h2>
    <p class="slide-lead anim-up delay-2">Six recurring obstacles that prevent organizations from deploying personalization — each one solved by ProactiveAI.</p>
    <div class="g2 anim-up delay-3" style="margin-bottom:24px;">
      <div style="display:flex;flex-direction:column;gap:12px;">
        ${[
          ['⏱️','Massive Build Time','6–12 months to build recommendation infrastructure from scratch. Requires specialized ML teams most organizations do not have.'],
          ['🥶','Cold-Start Problem','New users and items receive poor recommendations without historical data. Most systems have no fallback strategy.'],
          ['📉','Model Drift','Performance degrades as user preferences shift. Without automated retraining pipelines, accuracy silently declines.'],
        ].map(([icon,title,desc])=>`
        <div style="display:flex;gap:16px;align-items:flex-start;padding:18px;border-radius:var(--r-md);background:white;border:1.5px solid var(--border);box-shadow:var(--shadow-xs);transition:all 0.3s var(--ease);" onmouseenter="this.style.transform='translateX(6px)';this.style.boxShadow='var(--shadow-md)'" onmouseleave="this.style.transform='';this.style.boxShadow='var(--shadow-xs)'">
          <div style="flex-shrink:0;width:40px;height:40px;border-radius:11px;background:rgba(220,38,38,0.08);display:flex;align-items:center;justify-content:center;font-size:18px;">${icon}</div>
          <div><div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:3px;">${title}</div><div style="font-size:13px;color:var(--text-2);line-height:1.6;">${desc}</div></div>
        </div>`).join('')}
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        ${[
          ['🧩','Domain Mismatch','One-size-fits-all models fail across verticals. A movie engine and an e-commerce engine need fundamentally different approaches.'],
          ['🏛️','Multi-Tenancy Afterthought','Most systems lack per-tenant data isolation. Cross-tenant data leakage creates real regulatory and trust risks.'],
          ['🔍','Discovery Friction','Users cannot find relevant items. Stale recommendations do not reflect evolving taste. No transparency in why items appear.'],
        ].map(([icon,title,desc])=>`
        <div style="display:flex;gap:16px;align-items:flex-start;padding:18px;border-radius:var(--r-md);background:white;border:1.5px solid var(--border);box-shadow:var(--shadow-xs);transition:all 0.3s var(--ease);" onmouseenter="this.style.transform='translateX(6px)';this.style.boxShadow='var(--shadow-md)'" onmouseleave="this.style.transform='';this.style.boxShadow='var(--shadow-xs)'">
          <div style="flex-shrink:0;width:40px;height:40px;border-radius:11px;background:rgba(220,38,38,0.08);display:flex;align-items:center;justify-content:center;font-size:18px;">${icon}</div>
          <div><div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:3px;">${title}</div><div style="font-size:13px;color:var(--text-2);line-height:1.6;">${desc}</div></div>
        </div>`).join('')}
      </div>
    </div>
    <div class="anim-up delay-4" style="background:var(--grad-brand);border-radius:var(--r-xl);padding:36px 48px;display:flex;align-items:center;justify-content:space-between;gap:32px;">
      <div>
        <div style="font-size:56px;font-weight:900;color:white;letter-spacing:-0.04em;line-height:1;">6–12 <span style="font-size:28px;font-weight:600;opacity:0.7;">months</span></div>
        <div style="font-size:16px;color:rgba(255,255,255,0.75);margin-top:4px;">of ML infrastructure build time</div>
      </div>
      <div style="width:1px;height:60px;background:rgba(255,255,255,0.2);"></div>
      <div style="font-size:18px;font-weight:700;color:white;max-width:360px;line-height:1.5;">Eliminated entirely. Any tenant deploys and starts receiving personalized recommendations in <span style="color:#a5f3fc;">minutes.</span></div>
    </div>
  </div>`;
}

function slideSystem() {
  return `
  <div class="slide-inner">
    <div class="eyebrow anim-up">Chapter 04</div>
    <h2 class="slide-title anim-up delay-1">End-to-End System Overview</h2>
    <p class="slide-lead anim-up delay-2">15 interconnected components — from data ingestion to real-time serving. Every node has a precise engineering role.</p>
    <div class="arch-canvas-wrap anim-up delay-3">
      <canvas id="ecosystemCanvas" style="width:100%;display:block;" height="420"></canvas>
    </div>
    <div class="g3 anim-up delay-4" style="margin-top:20px;">
      <div class="card"><div class="card-icon ci-blue">🔧</div><div class="card-title">FastAPI Backend</div><div class="card-body">12 route modules, dual JWT + API key auth, 11 permission scopes, Redis-backed rate limiting and call metering.</div></div>
      <div class="card"><div class="card-icon ci-purple">🧠</div><div class="card-title">21-Algorithm Registry</div><div class="card-body">SVD, NMF, ALS, BPR, EASE, SLIM, P3Alpha, RP3Beta, WARP, KNN variants, LightFM, Autoencoder, Content-TF-IDF, FM, and domain-specific models.</div></div>
      <div class="card"><div class="card-icon ci-green">🚀</div><div class="card-title">Auto-Promotion Engine</div><div class="card-body">Composite score (70% accuracy · 20% speed · 10% scalability) selects and promotes the best model per tenant automatically.</div></div>
    </div>
  </div>`;
}

function slideHighLevel() {
  return `
  <div class="slide-inner">
    <div class="eyebrow anim-up">Chapter 05</div>
    <h2 class="slide-title anim-up delay-1">High-Level Architecture</h2>
    <p class="slide-lead anim-up delay-2">Seven distinct layers with clean separation of concerns. Click any layer to expand technical details.</p>
    <div class="anim-up delay-3" style="max-width:840px;margin:0 auto;" id="archLayers">
      ${[
        { color:'#2563eb', icon:'👤', name:'User Layer', tags:['Browser','Mobile App','API Client'], detail:'HTTP requests from any client. JWT Bearer token or API key required in Authorization header. All requests pass through the FastAPI gateway for auth, rate limiting, and tenant resolution.' },
        { color:'#7c3aed', icon:'⚡', name:'Frontend Layer', tags:['React 18','Vite','Tailwind CSS','Recharts','Framer Motion'], detail:'14-page SaaS dashboard: Dashboard, Training, Benchmarks, Registry, Deployment, API Playground, Analytics, and more. Framer Motion animations, Recharts visualizations, tenant-scoped sessions.' },
        { color:'#0891b2', icon:'🔧', name:'Backend API Layer', tags:['FastAPI','Uvicorn','Pydantic v2','python-jose','Redis'], detail:'12 route modules: /recommend, /training, /models, /benchmarks, /analytics, /batch, /scheduler, /explain, /similar, /context, /deployment, /auth. Bearer + API key dual-auth via HMAC-SHA256.' },
        { color:'#059669', icon:'🧠', name:'Recommendation Layer', tags:['Strategy Service','Recommender Engine','21 Algorithms'], detail:'StrategyService routes to: top-model, weighted-ensemble, or single-algorithm strategies. RecommenderEngine scores users, excludes seen items, returns ranked list. Sub-100ms P99 latency.' },
        { color:'#d97706', icon:'🤖', name:'AI / ML Layer', tags:['Algorithm Registry','Model Loader','Optuna','Sentence-BERT'], detail:'ALGORITHM_REGISTRY maps 21 algorithms with feedback type, scalability tier, domain affinity metadata. ModelLoader loads promoted .pkl artifacts. Optuna TPE sampler runs per-algorithm hyperparameter studies.' },
        { color:'#dc2626', icon:'💾', name:'Data Layer', tags:['File Store','OpenSearch','Redis Cache','SQLAlchemy'], detail:'Filesystem per-tenant isolation under tenants/{id}/. Redis for caching and rate limiting. OpenSearch per-tenant HNSW kNN vector index. SQLAlchemy connectors for PostgreSQL and MySQL.' },
        { color:'#4f46e5', icon:'📊', name:'Analytics Layer', tags:['Benchmark Engine','Metrics','Leaderboard','Composite Score'], detail:'BenchmarkEngine.run() evaluates every eligible algorithm on held-out test set. Computes NDCG@K, Precision@K, Recall@K, RMSE, MAE, training time, and composite score per tenant.' },
      ].map((l,i)=>`
      <div class="arch-layer-row" id="alr-${i}" onclick="toggleArchLayer(${i})" style="margin-bottom:6px;cursor:pointer;">
        <div style="display:flex;align-items:center;gap:16px;padding:14px 18px;background:white;border:1.5px solid var(--border);border-left:4px solid ${l.color};border-radius:var(--r-md);box-shadow:var(--shadow-xs);transition:all 0.3s var(--ease);" class="alr-header">
          <span style="font-size:18px;flex-shrink:0;">${l.icon}</span>
          <span style="font-size:13px;font-weight:700;color:var(--text);min-width:160px;">${l.name}</span>
          <div style="display:flex;gap:6px;flex-wrap:wrap;flex:1;">${l.tags.map(t=>`<span class="tag tag-blue" style="border-color:${l.color}20;background:${l.color}12;color:${l.color};">${t}</span>`).join('')}</div>
          <i class="fas fa-chevron-down" style="color:var(--text-4);font-size:12px;transition:transform 0.3s;" id="alr-icon-${i}"></i>
        </div>
        <div id="alr-detail-${i}" style="display:none;padding:14px 18px 16px 56px;background:var(--surface);border:1.5px solid ${l.color}20;border-top:none;border-radius:0 0 var(--r-md) var(--r-md);font-size:13px;color:var(--text-2);line-height:1.7;">${l.detail}</div>
      </div>`).join('')}
    </div>
  </div>`;
}

function slideLifecycle() {
  return `
  <div class="slide-inner">
    <div class="eyebrow anim-up">Chapter 06</div>
    <h2 class="slide-title anim-up delay-1">Request Lifecycle</h2>
    <p class="slide-lead anim-up delay-2">From HTTP request to ranked recommendations — every hop instrumented, every step optimized. Total P99: sub-100ms.</p>

    <div class="lifecycle-flow anim-up delay-3" id="lcFlow">
      ${[
        {icon:'📡',label:'HTTP Request',color:'#2563eb'},
        {icon:'🔐',label:'Authentication',color:'#7c3aed'},
        {icon:'🏢',label:'Tenant Resolve',color:'#0891b2'},
        {icon:'⚡',label:'Rate Limiting',color:'#d97706'},
        {icon:'🎯',label:'Strategy Select',color:'#059669'},
        {icon:'📦',label:'Model Load',color:'#4f46e5'},
        {icon:'🔢',label:'Score & Rank',color:'#dc2626'},
        {icon:'📨',label:'JSON Response',color:'#059669'},
      ].map((s,i)=>`
      <div class="lf-step">
        <div class="lf-circle${i===0?' active':''}" id="lfc-${i}" style="${i===0?`border-color:${s.color};box-shadow:0 0 0 6px ${s.color}20,var(--shadow-md);`:''}">
          ${s.icon}
        </div>
        <div class="lf-label">${s.label}</div>
      </div>`).join('')}
    </div>

    <div id="lc-detail" class="anim-up delay-4" style="margin-bottom:24px;"></div>

    ${[
      {step:'Auth (~1ms)', icon:'🔐', color:'#7c3aed', desc:'Bearer token verified via HMAC-SHA256. TenantManager extracts tenant_id and loads config: default_algorithm, rate quota, active deployment state.'},
      {step:'Rate Check (~0.5ms)', icon:'⚡', color:'#d97706', desc:'Redis INCR counter per API key with TTL window. MeteringMiddleware tracks per-tenant call counts for billing and abuse detection.'},
      {step:'Strategy (~0.5ms)', icon:'🎯', color:'#059669', desc:'StrategyService selects: (1) top-model — promoted algorithm, (2) weighted-ensemble — blend multiple models, (3) single — explicit override.'},
      {step:'Model Load (~5ms)', icon:'📦', color:'#4f46e5', desc:'ModelLoader.load_promoted(tenant_id, algo). In-memory cache after first load — subsequent calls near zero disk I/O.'},
      {step:'Score + Filter (~50ms)', icon:'🔢', color:'#dc2626', desc:'score_matrix row → NumPy BLAS matmul → np.argpartition descending → filter seen items (O(n)). EmbeddingStore blend optional (alpha=0.7).'},
    ].map(s=>`
    <div style="display:flex;gap:16px;align-items:flex-start;padding:14px 18px;border-radius:var(--r-md);background:white;border:1px solid var(--border);margin-bottom:8px;box-shadow:var(--shadow-xs);">
      <div style="flex-shrink:0;width:36px;height:36px;border-radius:10px;background:${s.color}14;display:flex;align-items:center;justify-content:center;font-size:16px;">${s.icon}</div>
      <div style="flex:1;"><span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:${s.color};">${s.step}</span><p style="font-size:13px;color:var(--text-2);line-height:1.6;margin-top:3px;">${s.desc}</p></div>
    </div>`).join('')}

    <div class="code-block anim-up delay-5" style="margin-top:16px;">
<span class="cc">// POST /recommend → 200 OK</span>
{ <span class="ck">"user_id"</span>: <span class="cs">"usr_42"</span>, <span class="ck">"algorithm"</span>: <span class="cs">"EASE"</span>,
  <span class="ck">"recommendations"</span>: [
    { <span class="ck">"item_id"</span>: <span class="cs">"i99"</span>, <span class="ck">"score"</span>: <span class="cn">0.91</span>, <span class="ck">"rank"</span>: <span class="cn">1</span> },
    { <span class="ck">"item_id"</span>: <span class="cs">"i14"</span>, <span class="ck">"score"</span>: <span class="cn">0.87</span>, <span class="ck">"rank"</span>: <span class="cn">2</span> }
  ] }
    </div>
  </div>`;
}

function slidePipeline() {
  const steps = [
    { n:'01', icon:'📥', color:'#2563eb', title:'Data Ingestion', desc:'CSV upload or SQL connector (PostgreSQL, MySQL, SQLite, MongoDB). pandas DataFrame validated: userID, itemID, rating/timestamp columns required. LLM-powered SQL Planner for natural-language DB queries.' },
    { n:'02', icon:'🧹', color:'#7c3aed', title:'Data Cleaning & Validation', desc:'DataCleaner drops nulls, deduplicates interactions, normalises column names, caps rating range, and removes bots via minimum-interaction threshold. Outputs a clean DataFrame with guaranteed schema.' },
    { n:'03', icon:'🔍', color:'#0891b2', title:'Feedback Type Detection', desc:'FeedbackDetector auto-classifies: explicit (ratings 1–5 present) | implicit (binary events only) | both. Drives algorithm eligibility filter — SVD/NMF only run on explicit, ALS/BPR on implicit.' },
    { n:'04', icon:'⬛', color:'#059669', title:'Interaction Matrix Construction', desc:'InteractionMatrixBuilder constructs scipy.sparse CSR matrix — O(nnz) memory vs O(U×I) dense. user_index and item_index dicts for O(1) lookup. 80/20 stratified train/test split.' },
    { n:'05', icon:'🔢', color:'#d97706', title:'Semantic Embedding Generation', desc:'EmbeddingEnricher runs Sentence-BERT (all-MiniLM-L6-v2) on item metadata → 384-dim L2-normalized vectors → bulk upsert into per-tenant OpenSearch HNSW kNN index for semantic similarity retrieval.' },
    { n:'06', icon:'🏋️', color:'#dc2626', title:'Multi-Algorithm Training & Benchmarking', desc:'For each eligible algorithm: Optuna TPE tunes hyperparameters (SQLite-persisted study per tenant). BenchmarkEngine evaluates on held-out test: NDCG@K, Precision@K, Recall@K, RMSE, MAE, speed, scalability.' },
    { n:'07', icon:'🚀', color:'#4f46e5', title:'Auto-Promotion & Model Serving', desc:'Composite = 0.7×NDCG + 0.2×speed + 0.1×scalability. Top-ranked .pkl promoted to tenants/{id}/models/. registry.json updated. Next /recommend instantly uses the promoted model — zero manual step.' },
  ];
  return `
  <div class="slide-inner">
    <div class="eyebrow anim-up">Chapter 07</div>
    <h2 class="slide-title anim-up delay-1">Training Pipeline</h2>
    <p class="slide-lead anim-up delay-2">Seven deterministic stages from raw data to live recommendations. Fully automated — zero manual intervention at any step.</p>

    <div style="display:flex;align-items:center;gap:0;overflow-x:auto;padding:8px 0 24px;margin-bottom:8px;" class="anim-up delay-3">
      ${steps.map((s,i)=>`
      <div style="flex-shrink:0;display:flex;flex-direction:column;align-items:center;min-width:100px;position:relative;">
        <div style="width:52px;height:52px;border-radius:50%;background:${s.color};color:white;display:flex;align-items:center;justify-content:center;font-size:22px;box-shadow:0 4px 16px ${s.color}44;z-index:1;position:relative;">${s.icon}</div>
        <div style="font-size:10.5px;font-weight:700;color:var(--text-2);text-align:center;margin-top:8px;line-height:1.3;max-width:80px;">${s.title.split(' ').slice(0,2).join(' ')}</div>
        ${i<steps.length-1?`<div style="position:absolute;left:52px;top:25px;width:calc(100% - 52px);height:2px;background:linear-gradient(90deg,${s.color},${steps[i+1].color});opacity:0.35;"></div>`:''}
      </div>`).join('')}
    </div>

    <div style="display:flex;flex-direction:column;gap:8px;" class="anim-up delay-4">
      ${steps.map(s=>`
      <div class="pipeline-step">
        <div class="pipe-num" style="background:${s.color};">${s.n}</div>
        <div><div class="pipe-step-title">${s.icon} ${s.title}</div><div class="pipe-step-desc">${s.desc}</div></div>
      </div>`).join('')}
    </div>
  </div>`;
}

function slideEmbedding() {
  return `
  <div class="slide-inner">
    <div class="eyebrow anim-up">Chapter 08</div>
    <h2 class="slide-title anim-up delay-1">Embedding Architecture</h2>
    <p class="slide-lead anim-up delay-2">Sentence-BERT transforms raw item metadata into 384-dimensional semantic vectors — indexed in OpenSearch for millisecond approximate nearest-neighbour search.</p>

    <div class="arch-canvas-wrap anim-up delay-3" style="margin-bottom:28px;">
      <canvas id="embeddingCanvas" style="width:100%;display:block;" height="180"></canvas>
    </div>

    <div class="g2 anim-up delay-4">
      <div class="card">
        <div class="card-title" style="margin-bottom:14px;">OpenSearch Index Schema</div>
        <div class="code-block" style="font-size:12px;">Index: <span class="cs">embeddings_{tenant_id}</span>
Fields:
  item_id:    <span class="ck">keyword</span>
  vector:     knn_vector, <span class="cn">dims=384</span>
  metadata:   <span class="ck">object</span>
  indexed_at: <span class="ck">date</span>
Settings:
  knn: <span class="ck">true</span>  ·  ef_search: <span class="cn">100</span>
  similarity: <span class="cs">cosine</span>  ·  graph: <span class="cs">HNSW</span></div>
      </div>
      <div class="card">
        <div class="card-title" style="margin-bottom:14px;">Why all-MiniLM-L6-v2?</div>
        ${[
          ['⚡','Inference Speed','5× faster than full BERT — critical for real-time serving'],
          ['🎯','Semantic Quality','Retains ≥95% of full BERT embedding quality'],
          ['📦','Model Size','22M parameters — fits comfortably in production RAM'],
          ['🌍','Multilingual','Multilingual variants available for global tenants'],
          ['🔀','Hybrid Blending','CF score + embedding score blended: α=0.7 CF + 0.3 semantic'],
        ].map(([icon,title,desc])=>`
        <div style="display:flex;gap:12px;align-items:flex-start;padding:10px 0;border-bottom:1px solid var(--border);">
          <span style="font-size:18px;flex-shrink:0;">${icon}</span>
          <div><div style="font-size:13px;font-weight:700;color:var(--text);">${title}</div><div style="font-size:12px;color:var(--text-3);margin-top:2px;">${desc}</div></div>
        </div>`).join('')}
      </div>
    </div>
  </div>`;
}

function slideAlgo() {
  const algos = [
    {name:'SVD',type:'Matrix Factorization',fb:'Both',scale:'High',speed:'Fast',domain:'General',ready:true},
    {name:'NMF',type:'Matrix Factorization',fb:'Explicit',scale:'Med',speed:'Medium',domain:'General',ready:true},
    {name:'ALS',type:'Matrix Factorization',fb:'Implicit',scale:'∞',speed:'Fast',domain:'General',ready:true},
    {name:'BPR',type:'Matrix Factorization',fb:'Implicit',scale:'∞',speed:'Medium',domain:'General',ready:true},
    {name:'SVD++',type:'Matrix Factorization',fb:'Explicit',scale:'Low',speed:'Slow',domain:'General',ready:false},
    {name:'User-KNN',type:'Neighborhood',fb:'Both',scale:'Med',speed:'Medium',domain:'General',ready:false},
    {name:'Item-KNN',type:'Neighborhood',fb:'Both',scale:'High',speed:'Medium',domain:'General',ready:true},
    {name:'EASE',type:'Graph-Based',fb:'Both',scale:'High',speed:'Fast',domain:'General',ready:true},
    {name:'SLIM',type:'Graph-Based',fb:'Both',scale:'Low',speed:'Slow',domain:'General',ready:false},
    {name:'P3Alpha',type:'Graph-Based',fb:'Implicit',scale:'∞',speed:'Fast',domain:'General',ready:true},
    {name:'RP3Beta',type:'Graph-Based',fb:'Implicit',scale:'∞',speed:'Fast',domain:'General',ready:true},
    {name:'WARP',type:'Deep Learning',fb:'Implicit',scale:'∞',speed:'Slow',domain:'General',ready:false},
    {name:'Autoencoder',type:'Deep Learning',fb:'Both',scale:'Med',speed:'Slow',domain:'General',ready:false},
    {name:'LightFM',type:'Hybrid',fb:'Both',scale:'High',speed:'Medium',domain:'General',ready:false},
    {name:'Factorization M.',type:'Hybrid',fb:'Both',scale:'Med',speed:'Slow',domain:'General',ready:false},
    {name:'Temporal-SVD',type:'Hybrid',fb:'Both',scale:'Med',speed:'Medium',domain:'Movie',ready:false},
    {name:'Movie-KNN',type:'Hybrid',fb:'Explicit',scale:'Med',speed:'Medium',domain:'Movie',ready:false},
    {name:'Ecom-Popularity',type:'Content-Based',fb:'Implicit',scale:'∞',speed:'Fast',domain:'E-Commerce',ready:true},
    {name:'Ecom-ALS',type:'Content-Based',fb:'Implicit',scale:'∞',speed:'Medium',domain:'E-Commerce',ready:true},
    {name:'Content TF-IDF',type:'Content-Based',fb:'Both',scale:'High',speed:'Fast',domain:'General',ready:true},
    {name:'Semantic Embed.',type:'Semantic',fb:'Both',scale:'∞',speed:'Medium',domain:'General',ready:false},
  ];

  const typeColor = {
    'Matrix Factorization':'tag-blue','Neighborhood':'tag-purple','Graph-Based':'tag-green',
    'Deep Learning':'tag-amber','Hybrid':'tag-blue','Content-Based':'tag-red','Semantic':'tag-purple'
  };

  return `
  <div class="slide-inner">
    <div class="eyebrow anim-up">Chapter 09</div>
    <h2 class="slide-title anim-up delay-1">21 Algorithm Universe</h2>
    <p class="slide-lead anim-up delay-2">Seven paradigm families spanning the full spectrum of modern recommendation science. Interactive galaxy above — full comparison table below.</p>

    <div class="arch-canvas-wrap anim-up delay-3" style="margin-bottom:20px;padding:20px;">
      <canvas id="galaxyCanvas" style="width:100%;display:block;" height="280"></canvas>
    </div>

    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px;" class="anim-up delay-4" id="algoFilters">
      <button class="algo-filter-btn active" onclick="filterAlgos('all',this)">All 21</button>
      ${['Matrix Factorization','Neighborhood','Graph-Based','Deep Learning','Hybrid','Content-Based','Semantic'].map(t=>`<button class="algo-filter-btn" onclick="filterAlgos('${t}',this)">${t}</button>`).join('')}
    </div>
    <style>
    .algo-filter-btn{padding:6px 14px;border-radius:100px;font-size:11.5px;font-weight:600;border:1px solid var(--border);color:var(--text-2);background:white;cursor:pointer;transition:all 0.2s;}
    .algo-filter-btn:hover,.algo-filter-btn.active{background:var(--blue);color:white;border-color:var(--blue);}
    </style>

    <div class="algo-wrap anim-up delay-5">
      <table><thead><tr><th>Algorithm</th><th>Type</th><th>Feedback</th><th>Scale</th><th>Speed</th><th>Domain</th><th>Ready</th></tr></thead>
      <tbody id="algoTbody">
        ${algos.map(a=>`
        <tr data-type="${a.type}">
          <td class="algo-name">${a.name}</td>
          <td><span class="tag ${typeColor[a.type]||'tag-blue'}">${a.type}</span></td>
          <td><span class="tag ${a.fb==='Both'?'tag-green':a.fb==='Implicit'?'tag-blue':'tag-purple'}">${a.fb}</span></td>
          <td style="font-size:12px;font-weight:${a.scale==='∞'?700:400};color:${a.scale==='∞'?'var(--green)':'var(--text-3)'};">${a.scale==='∞'?'∞ Unlimited':a.scale}</td>
          <td><span class="tag ${a.speed==='Fast'?'tag-green':a.speed==='Medium'?'tag-blue':'tag-amber'}">${a.speed}</span></td>
          <td style="font-size:12px;color:var(--text-3);">${a.domain}</td>
          <td><span style="padding:3px 9px;border-radius:100px;font-size:11px;font-weight:700;background:${a.ready?'var(--green-lt)':'var(--surface-2)'};color:${a.ready?'var(--green)':'var(--text-4)'};">${a.ready?'✓ High':'Medium'}</span></td>
        </tr>`).join('')}
      </tbody></table>
    </div>
  </div>`;
}

function slideRationale() {
  const families = [
    { name:'Matrix Factorization', members:'SVD · SVD++ · NMF · ALS', icon:'🔢', why:'Four variants are kept because they fail differently: SVD is the fast general default, SVD++ squeezes extra accuracy from small explicit datasets at the cost of speed, NMF\'s non-negativity makes factors human-interpretable, and ALS is the only one built for unlimited-scale implicit data.' },
    { name:'Pairwise Ranking', members:'BPR · WARP', icon:'📊', why:'These optimize ranking order directly — matching the platform\'s actual top-K serving objective better than reconstruction-error models. BPR is the fast unlimited-scale default; WARP trades training cost for more aggressive ranking precision.' },
    { name:'Neighborhood Methods', members:'User-KNN · Item-KNN', icon:'🔍', why:'Zero black-box risk — a recommendation explains in one sentence ("users like you bought X"). Critical for government and trust-sensitive publisher tenants where an opaque score is a harder sell than a transparent match.' },
    { name:'Linear & Sparse Linear', members:'EASE · SLIM', icon:'📐', why:'No iterative optimization, no local-minima risk. EASE solves a single closed-form ridge regression and is a deceptively strong baseline. SLIM trades training speed for some of the highest interpretability and accuracy on small catalogs.' },
    { name:'Graph / Random Walk', members:'P3Alpha · RP3Beta', icon:'🕸️', why:'Captures multi-hop collaborative signal far more cheaply than factorization, with no scale ceiling. RP3Beta adds popularity-damping to counteract rich-get-richer bias — a built-in check against over-concentration.' },
    { name:'Hybrid', members:'LightFM', icon:'🧬', why:'The only registry member that natively blends collaborative signal with item/user side features inside one model — softening cold-start since a brand-new item can still get a reasonable embedding from its features alone.' },
    { name:'Neural', members:'Autoencoder-CF', icon:'🤖', why:'A deliberate, low-risk foothold for non-linear modeling. It proves the production pipeline can support a neural candidate before committing to GPU infrastructure — deeper architectures are explicitly deferred to the roadmap.' },
    { name:'Content-Based', members:'Content TF-IDF', icon:'📄', why:'The only algorithm needing zero interaction history to function. It serves the true cold-start case — a brand-new tenant\'s first day of traffic — which every purely collaborative algorithm is structurally unable to do.' },
    { name:'Feature Interaction', members:'Factorization Machines', icon:'🧮', why:'Generalizes matrix factorization to model interactions between arbitrary feature pairs, not just user-item. The bridge for tenants with structured side data — demographics, price tiers, content tags.' },
    { name:'Domain-Specialized', members:'Temporal-SVD · Movie-KNN · Ecom-Pop. · Ecom-ALS', icon:'🏷️', why:'Encode vertical-specific priors generic CF cannot infer: taste drift over time, genre similarity, a zero-training popularity floor, purchase-over-click weighting. The exception, not the pattern — 16 of 21 stay domain-agnostic.' },
    { name:'Semantic Retrieval', members:'Sentence-BERT Embeddings', icon:'🔮', why:'Solves cold start through item content semantics rather than collaborative signal. Marked "External req." since it depends on OpenSearch — blended into serving (CF × 0.7 + embedding) rather than competing on the standard leaderboard.' },
  ];

  const axes = [
    { num:'AXIS 01', icon:'📡', name:'Feedback Type', tip:'Explicit star ratings vs. implicit clicks, views, and purchases. Forcing one model family to handle both causes silent accuracy loss.' },
    { num:'AXIS 02', icon:'🧩', name:'Algorithm Paradigm', tip:'The dimension that does the most work — 11 structurally distinct families, not 11 flavors of one idea.' },
    { num:'AXIS 03', icon:'📈', name:'Scale & Capacity', tip:'From 5K-item small-scale tiers to fully unlimited-scale algorithms — tiered explicitly so the eligibility filter has real work to do.' },
    { num:'AXIS 04', icon:'🏛️', name:'Domain Specialization', tip:'Movie, e-commerce, publishing, government — vertical priors added only where they have well-documented lift, not as a default strategy.' },
  ];

  const pipelineSteps = ['📥 Dataset Upload','🔍 Feedback Detection','📊 Scale Classification','🧮 Eligibility Filter','🎯 Optuna Tuning','🏆 Benchmarking','📋 Composite Leaderboard','🚀 Auto Promotion'];

  const gaps = [
    { title:'Diversity Metrics Not Yet Implemented', desc:'MAP, MRR, Hit Rate, Coverage, and Diversity are not currently in the composite score — the 70% Performance weight is built entirely from ranking-position and rating-error metrics today. Correctly the first item on the short-term roadmap.', tag:'Short-Term Roadmap' },
    { title:'Deep Sequential Models Deferred', desc:'SASRec, DIN, and Transformers4Rec are not in the current registry. They need GPU infrastructure and operational maturity the platform is still building toward — a reasonable call for a deploy-in-minutes SaaS product.', tag:'Long-Term Roadmap' },
    { title:'Graph Neural Networks — Future Roadmap', desc:'PinSage and LightGCN are explicitly long-term items. Autoencoder-CF is the deliberate low-risk foothold that proves the pipeline can support a neural candidate before this infrastructure commitment is made.', tag:'Long-Term Roadmap' },
    { title:'Semantic Embedding — Special Case', desc:'Served through OpenSearch HNSW rather than a self-contained training artifact. Blended directly into serving (CF × 0.7 + embedding score) instead of the standard benchmark-then-promote path — a named exception, not a silent one.', tag:'Architectural Exception' },
  ];

  return `
  <div class="slide-inner" style="position:relative;max-width:1200px;">
    <div class="er-glow-bg"></div>
    <div class="eyebrow anim-up" style="position:relative;z-index:1;">Chapter 10 — Engineering Design Rationale</div>
    <h2 class="slide-title anim-up delay-1" style="position:relative;z-index:1;">Why These 21 Algorithms?</h2>
    <p class="slide-lead anim-up delay-2" style="position:relative;z-index:1;max-width:680px;">Enterprise-grade automated model selection requires diversity, not a single "best" algorithm.</p>

    <div class="er-statement anim-up delay-3">
      <div class="line-dim">The platform's value is not choosing one algorithm.</div>
      <div class="line-bright">It is allowing each tenant's own data to automatically choose its best algorithm.</div>
    </div>

    <!-- Section 1: Core Design Principle -->
    <div class="anim-up delay-4" style="position:relative;z-index:1;margin-bottom:48px;">
      <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.4);margin-bottom:16px;">Section 01 · Core Design Principle</div>
      <div class="g3" style="grid-template-columns:repeat(5,1fr);gap:14px;">
        ${[
          ['📡','Feedback Type','Explicit ratings vs. implicit behavior signals — clicks, views, purchases.'],
          ['📈','Scale','Different tenant sizes require structurally different model families.'],
          ['🏛️','Domain Knowledge','Movie, e-commerce, publishing, government — each with exploitable structure.'],
          ['🔍','Interpretability','Some industries require explainable recommendations, not opaque scores.'],
          ['🥶','Cold Start','New users and new items require specialized, non-collaborative approaches.'],
        ].map(([icon,t,d])=>`
        <div class="er-glass-card">
          <div class="er-glass-icon">${icon}</div>
          <div class="er-glass-title">${t}</div>
          <div class="er-glass-body">${d}</div>
        </div>`).join('')}
      </div>
    </div>

    <!-- Section 2: Diversity Is The Feature -->
    <div class="anim-up delay-5" style="position:relative;z-index:1;margin-bottom:48px;">
      <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.4);margin-bottom:16px;">Section 02 · Diversity Is the Feature</div>
      <div style="display:flex;align-items:center;gap:0;overflow-x:auto;padding:8px 0;">
        ${['21 Algorithms','11 Algorithm Families','Automated Selection Pipeline','Best Model Per Tenant'].map((label,i,arr)=>`
        <div style="display:flex;align-items:center;flex-shrink:0;">
          <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:100px;padding:12px 22px;font-size:13px;font-weight:700;color:white;white-space:nowrap;backdrop-filter:blur(10px);">${label}</div>
          ${i<arr.length-1?`<div style="width:36px;height:2px;background:linear-gradient(90deg,var(--blue),var(--purple));margin:0 4px;position:relative;flex-shrink:0;"><span style="position:absolute;right:-4px;top:50%;transform:translateY(-50%);color:#a5b4fc;font-size:12px;">▶</span></div>`:''}
        </div>`).join('')}
      </div>
      <div style="margin-top:18px;padding:16px 20px;background:rgba(217,119,6,0.08);border:1px solid rgba(217,119,6,0.25);border-radius:var(--r-md);font-size:13px;color:#fcd34d;font-weight:600;font-style:italic;">
        "Removing an algorithm is only justified if no capability gap appears."
      </div>
    </div>

    <!-- Section 3: Algorithm Family Showcase -->
    <div class="anim-up delay-5" style="position:relative;z-index:1;margin-bottom:48px;">
      <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.4);margin-bottom:16px;">Section 03 · Algorithm Family Showcase — Click to Expand</div>
      <div class="g3" id="erFamilyGrid">
        ${families.map((f,i)=>`
        <div class="er-family-card" id="erfam-${i}" onclick="toggleERFamily(${i})">
          <div class="er-family-head">
            <div>
              <div class="er-family-name">${f.icon} ${f.name}</div>
              <div class="er-family-members">${f.members}</div>
            </div>
            <i class="fas fa-chevron-down er-family-chevron"></i>
          </div>
          <div class="er-family-detail">${f.why}</div>
        </div>`).join('')}
      </div>
    </div>

    <!-- Section 4: The Four Axes -->
    <div class="anim-up delay-5" style="position:relative;z-index:1;margin-bottom:48px;">
      <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.4);margin-bottom:16px;">Section 04 · The Four Axes — Hover to Explore</div>
      <div class="g4">
        ${axes.map(a=>`
        <div class="er-axis-pillar">
          <div class="er-axis-num">${a.num}</div>
          <div class="er-axis-icon">${a.icon}</div>
          <div class="er-axis-name">${a.name}</div>
          <div class="er-axis-tooltip">${a.tip}</div>
        </div>`).join('')}
      </div>
    </div>

    <!-- Section 5: Automated Selection Pipeline -->
    <div class="anim-up delay-5" style="position:relative;z-index:1;margin-bottom:48px;">
      <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.4);margin-bottom:16px;">Section 05 · Automated Selection Pipeline</div>
      <div class="er-pipe-track" id="erPipeTrack">
        ${pipelineSteps.map((s,i,arr)=>{
          const [icon,...rest]=s.split(' ');
          return `<div class="er-pipe-node">
            <div class="er-pipe-circle" id="erpc-${i}">${icon}</div>
            <div class="er-pipe-label">${rest.join(' ')}</div>
          </div>${i<arr.length-1?`<div class="er-pipe-connector" id="erpcon-${i}"></div>`:''}`;
        }).join('')}
      </div>
    </div>

    <!-- Section 6: Production Tradeoffs -->
    <div class="anim-up delay-5" style="position:relative;z-index:1;margin-bottom:48px;">
      <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.4);margin-bottom:16px;">Section 06 · Production Trade-offs</div>
      <div class="g3" style="margin-bottom:16px;">
        <div class="er-tradeoff-card"><div class="er-tradeoff-pct">70%</div><div class="er-tradeoff-label">Accuracy</div><div class="er-tradeoff-sub">NDCG@K · Precision@K · Recall@K</div></div>
        <div class="er-tradeoff-card"><div class="er-tradeoff-pct">20%</div><div class="er-tradeoff-label">Speed</div><div class="er-tradeoff-sub">Training time, normalized</div></div>
        <div class="er-tradeoff-card"><div class="er-tradeoff-pct">10%</div><div class="er-tradeoff-label">Scalability</div><div class="er-tradeoff-sub">Max users / items ceiling</div></div>
      </div>
      <div style="text-align:center;padding:18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:var(--r-md);">
        <div style="font-size:14px;font-weight:700;color:white;">Composite Score = 0.70 × Performance + 0.20 × Speed + 0.10 × Scalability</div>
      </div>
    </div>

    <!-- Section 7: Honest Engineering Gaps -->
    <div class="anim-up delay-5" style="position:relative;z-index:1;margin-bottom:48px;">
      <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.4);margin-bottom:16px;">Section 07 · Engineering Decisions, Not Limitations</div>
      <div class="g2">
        ${gaps.map(g=>`
        <div class="er-gap-card">
          <div class="er-gap-title">${g.title}</div>
          <div class="er-gap-desc">${g.desc}</div>
          <div class="er-gap-tag">🗺️ ${g.tag}</div>
        </div>`).join('')}
      </div>
    </div>

    <!-- Final Hero Statement -->
    <div class="er-final anim-up delay-5">
      <div class="er-final-title"><span class="num">21</span> Algorithms. <span class="num">11</span> Families. <span class="num">1</span> Automated Decision Engine.</div>
      <div class="er-final-sub">Every tenant receives the model that best matches its data — automatically.</div>
    </div>
  </div>`;
}

function slideSelection() {
  return `
  <div class="slide-inner">
    <div class="eyebrow anim-up">Chapter 11</div>
    <h2 class="slide-title anim-up delay-1">Automated Model<br/>Selection Engine</h2>
    <p class="slide-lead anim-up delay-2">Zero manual intervention from data upload to live serving. The pipeline discovers, evaluates, and promotes the optimal model autonomously.</p>

    <div class="g2 anim-up delay-3">
      <div>
        ${[
          {n:'1',color:'#2563eb',title:'Feedback Type Detection',desc:'FeedbackDetector inspects dataset columns. Explicit = rating column present. Implicit = binary events. Filters algorithm pool to eligible_feedback ∈ {explicit|implicit|both}.'},
          {n:'2',color:'#7c3aed',title:'Scale Tier Classification',desc:'DatasetAnalyzer counts unique users and items. Tier-A (>10K users or >5K items): downsamples to limits. Tier-B (>3K/2K): lighter downsample. Prevents OOM on dense algorithms.'},
          {n:'3',color:'#0891b2',title:'Algorithm Eligibility Filter',desc:'Algorithms with hard max_users/max_items limits checked against dataset dimensions. Ineligible algorithms skipped with recorded skip_reason — full audit trail maintained.'},
          {n:'4',color:'#d97706',title:'Optuna Hyperparameter Tuning',desc:'For each eligible algorithm, Optuna TPE sampler runs N auto-budgeted trials. Best params stored in SQLite study (results/optuna_studies.db). TimeoutCallback limits total to 600s.'},
        ].map(s=>`
        <div style="display:flex;gap:16px;align-items:flex-start;padding:18px;border-radius:var(--r-md);background:white;border:1.5px solid var(--border);box-shadow:var(--shadow-xs);margin-bottom:10px;">
          <div style="flex-shrink:0;width:36px;height:36px;border-radius:10px;background:${s.color};color:white;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;">${s.n}</div>
          <div><div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:4px;">${s.title}</div><div style="font-size:13px;color:var(--text-2);line-height:1.6;">${s.desc}</div></div>
        </div>`).join('')}
      </div>
      <div>
        ${[
          {n:'5',color:'#059669',title:'BenchmarkEngine Evaluation',desc:'BenchmarkEngine.run() evaluates each algorithm on held-out test. Computes NDCG@K, Precision@K, Recall@K, RMSE, MAE, training time, scalability_score. Full leaderboard in last_training_result.json.'},
          {n:'6',color:'#dc2626',title:'Composite Scoring',desc:'composite = 0.70 × normalize(NDCG) + 0.20 × normalize(speed) + 0.10 × scalability_score. Normalized so all metrics compete on the same 0–1 scale regardless of units.'},
          {n:'7',color:'#4f46e5',title:'Auto-Promotion & Serving',desc:'Top-ranked model promoted to tenants/{id}/models/ as {algo}_v{N}_{uuid}.pkl. registry.json updated. Next /recommend call instantly uses the new model — zero restart, zero manual step.'},
        ].map(s=>`
        <div style="display:flex;gap:16px;align-items:flex-start;padding:18px;border-radius:var(--r-md);background:white;border:1.5px solid var(--border);box-shadow:var(--shadow-xs);margin-bottom:10px;">
          <div style="flex-shrink:0;width:36px;height:36px;border-radius:10px;background:${s.color};color:white;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;">${s.n}</div>
          <div><div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:4px;">${s.title}</div><div style="font-size:13px;color:var(--text-2);line-height:1.6;">${s.desc}</div></div>
        </div>`).join('')}
        <div style="background:var(--grad-brand);border-radius:var(--r-lg);padding:24px;margin-top:4px;">
          <div style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.75);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Composite Formula</div>
          <div style="font-size:17px;font-weight:700;color:white;line-height:1.5;">0.70 × NDCG + 0.20 × Speed + 0.10 × Scalability</div>
          <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-top:8px;">Example: Ecom-Popularity on Tenant 002 → 0.70×1.00 + 0.20×0.99 + 0.10×0.94 = <strong style="color:white;">0.992</strong></div>
        </div>
      </div>
    </div>
  </div>`;
}

function slideMetrics() {
  return `
  <div class="slide-inner">
    <div class="eyebrow anim-up">Chapter 12</div>
    <h2 class="slide-title anim-up delay-1">Evaluation Metrics<br/>Dashboard</h2>
    <p class="slide-lead anim-up delay-2">Benchmark results from Tenant 002 — actual algorithm runs, real data, composite leaderboard.</p>

    <div class="g2 anim-up delay-3" style="margin-bottom:20px;">
      <div class="chart-card"><div class="chart-title">NDCG@10 by Algorithm</div><div class="chart-sub">Primary ranking metric — normalized discounted cumulative gain</div><div class="chart-wrap"><canvas id="ndcgChart"></canvas></div></div>
      <div class="chart-card"><div class="chart-title">Training Speed (seconds)</div><div class="chart-sub">Lower is better · 20% weight in composite scoring</div><div class="chart-wrap"><canvas id="speedChart"></canvas></div></div>
    </div>

    <div class="anim-up delay-4">
      <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-3);margin-bottom:12px;">🏆 Composite Score Leaderboard</div>
      ${[
        {rank:1,medal:'gold',algo:'Ecom-Popularity',score:0.9919,ndcg:0.2286,type:'Content-Based'},
        {rank:2,medal:'silver',algo:'Movie-Item-KNN',score:0.7812,ndcg:0.1563,type:'Neighborhood'},
        {rank:3,medal:'bronze',algo:'EASE',score:0.7401,ndcg:0.1380,type:'Graph-Based'},
        {rank:4,medal:'rest',algo:'SVD',score:0.6720,ndcg:0.1180,type:'Matrix Factor.'},
        {rank:5,medal:'rest',algo:'ALS',score:0.6234,ndcg:0.1095,type:'Matrix Factor.'},
        {rank:6,medal:'rest',algo:'LightFM',score:0.5912,ndcg:0.1010,type:'Hybrid'},
      ].map(r=>`
      <div class="lb-row">
        <div class="lb-rank ${r.medal}">${r.rank}</div>
        <div class="lb-algo">${r.algo} <span class="tag tag-blue" style="font-size:10px;margin-left:4px;">${r.type}</span></div>
        <div style="font-size:12px;color:var(--text-3);min-width:90px;">NDCG: ${r.ndcg.toFixed(4)}</div>
        <div class="lb-bar-wrap"><div class="lb-bar" style="width:${(r.score*100).toFixed(0)}%"></div></div>
        <div class="lb-score">${r.score.toFixed(4)}</div>
      </div>`).join('')}
    </div>
  </div>`;
}

function slideSecurity() {
  return `
  <div class="slide-inner">
    <div class="eyebrow anim-up">Chapter 13</div>
    <h2 class="slide-title anim-up delay-1">Security Architecture</h2>
    <p class="slide-lead anim-up delay-2">Defense-in-depth across every platform layer — seven implemented security controls protecting tenant data and API access.</p>

    <div class="security-grid anim-up delay-3" style="margin-bottom:28px;">
      ${[
        {icon:'🔑',title:'JWT Authentication',desc:'HMAC-SHA256 signed tokens via python-jose. Configurable TTL expiry. Token revocation list for immediate invalidation on logout or key rotation.'},
        {icon:'🗝️',title:'API Key Authentication',desc:'Per-tenant hashed API keys. TenantManager.resolve_api_key() maps hash to tenant_id — raw keys never stored in any datastore.'},
        {icon:'🛡️',title:'RBAC Authorization',desc:'11 permission scopes from recommend:read to admin:write. @require_auth(scopes=[...]) decorator enforces authorization on every route — no route is unauthenticated.'},
        {icon:'🏢',title:'Tenant Isolation',desc:'All model loads use tenant_id prefix path: tenants/{id}/models/. Cross-tenant model access is architecturally impossible at the API and filesystem level.'},
        {icon:'🔒',title:'BCrypt Password Hashing',desc:'passlib[bcrypt] with appropriate work factor for all credential storage. No plain-text passwords exist anywhere in the system — including logs and backups.'},
        {icon:'⚡',title:'Redis Rate Limiting',desc:'INCR counter with TTL per API key. Configurable requests-per-minute per tenant tier. MeteringMiddleware tracks usage for billing and abuse detection.'},
        {icon:'✅',title:'Input Validation',desc:'Pydantic v2 validates all request bodies with custom field_validators. Business rule enforcement at schema level — invalid requests rejected before any business logic executes.'},
      ].map(s=>`
      <div class="sec-card">
        <div class="sec-icon">${s.icon}</div>
        <div class="sec-title">${s.title}</div>
        <div class="sec-desc">${s.desc}</div>
        <div class="sec-badge">✓ Implemented</div>
      </div>`).join('')}
    </div>

    <div class="anim-up delay-4" style="background:var(--grad-brand);border-radius:var(--r-xl);padding:28px 36px;display:flex;align-items:center;gap:32px;">
      <div style="font-size:48px;flex-shrink:0;">🔐</div>
      <div>
        <div style="font-size:16px;font-weight:800;color:white;margin-bottom:6px;">11 Permission Scopes · Dual Authentication · Zero Plain-Text Credentials</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.7);line-height:1.6;">Every API endpoint is scope-guarded. Every credential is hashed. Every tenant operates in complete data isolation. The security architecture is production-grade by design.</div>
      </div>
    </div>
  </div>`;
}

function slideRoadmap() {
  return `
  <div class="slide-inner">
    <div class="eyebrow anim-up">Chapter 14</div>
    <h2 class="slide-title anim-up delay-1">Product Roadmap</h2>
    <p class="slide-lead anim-up delay-2">Three phases of platform evolution — from production hardening to next-generation AI.</p>

    <div class="rm-timeline anim-up delay-3">
      <div class="rm-item">
        <div class="rm-dot rm-dot-green">🌱</div>
        <div class="rm-phase" style="color:var(--green);">Phase 1 · 0–3 Months</div>
        <div class="rm-title">Production Hardening</div>
        <div class="rm-chips">
          ${['Prometheus + Grafana','JSON Structured Logging','Kubernetes + Helm','GitHub Actions CI/CD','NGINX + TLS','Redis Token Revocation','API Key Rotation','MAP · MRR · Hit Rate Metrics','SLIM Parallel Training','Pre-computed Redis Cache'].map(c=>`<div class="rm-chip rm-chip-green">✓ ${c}</div>`).join('')}
        </div>
      </div>

      <div class="rm-item">
        <div class="rm-dot rm-dot-blue">🚀</div>
        <div class="rm-phase" style="color:var(--blue);">Phase 2 · 3–9 Months</div>
        <div class="rm-title">Platform Scale</div>
        <div class="rm-chips">
          ${['MLflow Experiment Tracking','S3 / GCS Model Artifacts','PostgreSQL Metadata Store','A/B Testing Framework','Kafka Real-Time Streaming','LightGBM Re-ranking Layer','Model Drift Detection','FAISS ANN Fallback','Multi-Armed Bandit','Tenant SLA Dashboard'].map(c=>`<div class="rm-chip rm-chip-blue">→ ${c}</div>`).join('')}
        </div>
      </div>

      <div class="rm-item">
        <div class="rm-dot rm-dot-purple">⭐</div>
        <div class="rm-phase" style="color:var(--purple);">Phase 3 · 9–24 Months</div>
        <div class="rm-title">Next-Generation AI</div>
        <div class="rm-chips">
          ${['DIN · SASRec · Transformers4Rec','Graph Neural Networks (LightGCN)','Federated Learning + Differential Privacy','Sub-10ms P99 Edge Serving','LLM Explanation Generation','Conversational Recommendations','AutoFE Feature Discovery','Algorithm Marketplace','On-Device Edge Inference','SOC2 · GDPR · HIPAA Compliance'].map(c=>`<div class="rm-chip rm-chip-purple">◆ ${c}</div>`).join('')}
        </div>
      </div>
    </div>
  </div>`;
}

function slideClosing() {
  return `
  <div class="slide-inner" style="min-height:100vh;justify-content:center;align-items:center;text-align:center;">
    <canvas id="closingCanvas" style="position:absolute;inset:0;pointer-events:none;width:100%;height:100%;"></canvas>
    <div style="position:relative;z-index:1;max-width:700px;margin:0 auto;">
      <div class="eyebrow anim-up" style="justify-content:center;">Chapter 15</div>
      <h2 class="slide-title anim-up delay-1" style="color:white;font-size:clamp(40px,5vw,72px);text-align:center;">The Future of<br/>Personalization<br/><span style="background:var(--grad-brand);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Is Already Built</span></h2>
      <p class="slide-lead anim-up delay-2" style="text-align:center;margin:0 auto 48px;">Production-ready. Multi-tenant. AI-powered. Enterprise-scale. 21 algorithms. Zero ML expertise required.</p>
      <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-bottom:48px;" class="anim-up delay-3">
        ${['✅ Production Ready','🏢 Multi-Tenant','🤖 21 Algorithms','⚡ Sub-100ms','🔐 Enterprise Security','🗺️ Clear Roadmap'].map(l=>`
        <div style="display:flex;align-items:center;gap:8px;padding:10px 18px;border-radius:100px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);font-size:13px;font-weight:600;color:white;transition:all 0.2s;" onmouseenter="this.style.background='rgba(255,255,255,0.14)'" onmouseleave="this.style.background='rgba(255,255,255,0.08)'">${l}</div>`).join('')}
      </div>
      <div class="anim-up delay-4">
        <button class="btn-brand" onclick="goTo(0)" style="font-size:16px;padding:16px 36px;">↑ Back to Start</button>
      </div>
    </div>
  </div>`;
}

/* ═══════════════════════════════════════════════════════
   SLIDE ENGINE
═══════════════════════════════════════════════════════ */
let currentSlide = 0;
let isAnimating = false;
let lcInterval = null;
let lcStep = 0;
let erPipeInterval = null;
const TOTAL = CHAPTERS.length;

const SLIDE_RENDERERS = [
  slideHero, slideExec, slideProblem, slideSystem,
  slideHighLevel, slideLifecycle, slidePipeline, slideEmbedding,
  slideAlgo, slideRationale, slideSelection, slideMetrics, slideSecurity,
  slideRoadmap, slideClosing
];

const slidesEl = document.getElementById('slides');

function createSlideEl(index) {
  const el = document.createElement('div');
  el.className = 'slide';
  el.id = `slide-${index}`;
  el.innerHTML = SLIDE_RENDERERS[index]();
  return el;
}

function goTo(index, direction) {
  if (isAnimating || index === currentSlide || index < 0 || index >= TOTAL) return;
  isAnimating = true;
  const dir = direction !== undefined ? direction : (index > currentSlide ? 1 : -1);

  const outEl = document.getElementById(`slide-${currentSlide}`);
  const inEl = createSlideEl(index);
  slidesEl.appendChild(inEl);

  // position incoming
  inEl.style.transform = dir > 0 ? 'translateX(100%)' : 'translateX(-100%)';
  inEl.style.opacity = '0';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      inEl.style.transition = 'transform 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease';
      inEl.style.transform = 'translateX(0)';
      inEl.style.opacity = '1';

      if (outEl) {
        outEl.style.transition = 'transform 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease';
        outEl.style.transform = dir > 0 ? 'translateX(-100%)' : 'translateX(100%)';
        outEl.style.opacity = '0';
      }

      setTimeout(() => {
        if (outEl) outEl.remove();
        currentSlide = index;
        isAnimating = false;
        onSlideEnter(index);
        updateUI();
      }, 580);
    });
  });
}

window.goTo = goTo;

function onSlideEnter(idx) {
  if (lcInterval) { clearInterval(lcInterval); lcInterval = null; }
  if (erPipeInterval) { clearInterval(erPipeInterval); erPipeInterval = null; }

  if (idx === 3) setTimeout(initEcosystemCanvas, 100);
  if (idx === 5) setTimeout(initLifecycleAnim, 100);
  if (idx === 7) setTimeout(initEmbeddingCanvas, 100);
  if (idx === 8) setTimeout(initGalaxyCanvas, 100);
  if (idx === 9) setTimeout(initRationaleAnimations, 100);
  if (idx === 11) setTimeout(initCharts, 100);
  if (idx === 14) setTimeout(initClosingCanvas, 100);
}

function updateUI() {
  // progress bar
  const pct = (currentSlide / (TOTAL - 1)) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';

  // counter
  document.getElementById('slide-counter').textContent = `${currentSlide + 1} / ${TOTAL}`;

  // chapter label
  document.getElementById('topbar-chapter').textContent = CHAPTERS[currentSlide].label;

  // nav dots
  document.querySelectorAll('.ch-dot').forEach((d, i) => {
    d.classList.toggle('active', i === currentSlide);
  });

  // arrow states
  document.getElementById('nav-prev').classList.toggle('disabled', currentSlide === 0);
  document.getElementById('nav-next').classList.toggle('disabled', currentSlide === TOTAL - 1);
}

/* ─── CHAPTER DOTS ─── */
function buildNav() {
  const nav = document.getElementById('chapter-nav');
  CHAPTERS.forEach((ch, i) => {
    const d = document.createElement('div');
    d.className = 'ch-dot' + (i === 0 ? ' active' : '');
    d.onclick = () => goTo(i);
    d.innerHTML = `<div class="ch-dot-tooltip">${ch.label}</div>`;
    nav.appendChild(d);
  });
}

/* ─── KEYBOARD ─── */
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') goTo(currentSlide + 1, 1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')  goTo(currentSlide - 1, -1);
});

document.getElementById('nav-prev').onclick = () => goTo(currentSlide - 1, -1);
document.getElementById('nav-next').onclick = () => goTo(currentSlide + 1, 1);

/* ─── TOUCH SWIPE ─── */
let touchX = 0;
document.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
document.addEventListener('touchend', e => {
  const dx = touchX - e.changedTouches[0].clientX;
  if (Math.abs(dx) > 60) goTo(dx > 0 ? currentSlide + 1 : currentSlide - 1, dx > 0 ? 1 : -1);
}, { passive: true });

/* ─── ARCH LAYER TOGGLE ─── */
window.toggleArchLayer = function(i) {
  const detail = document.getElementById(`alr-detail-${i}`);
  const icon   = document.getElementById(`alr-icon-${i}`);
  const header = document.querySelector(`#alr-${i} .alr-header`);
  const isOpen = detail.style.display !== 'none';
  document.querySelectorAll('[id^="alr-detail-"]').forEach(d => { d.style.display='none'; });
  document.querySelectorAll('[id^="alr-icon-"]').forEach(ic => { ic.style.transform=''; });
  if (!isOpen) {
    detail.style.display = 'block';
    icon.style.transform = 'rotate(180deg)';
  }
};

/* ─── ENGINEERING RATIONALE: FAMILY CARD TOGGLE ─── */
window.toggleERFamily = function(i) {
  const card = document.getElementById(`erfam-${i}`);
  if (!card) return;
  card.classList.toggle('open');
};

/* ─── ALGO FILTER ─── */
window.filterAlgos = function(type, btn) {
  document.querySelectorAll('.algo-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#algoTbody tr').forEach(tr => {
    tr.style.display = (type === 'all' || tr.dataset.type === type) ? '' : 'none';
  });
};

/* ═══════════════════════════════════════════════════════
   CANVAS: ECOSYSTEM
═══════════════════════════════════════════════════════ */
function initEcosystemCanvas() {
  const canvas = document.getElementById('ecosystemCanvas');
  if (!canvas || canvas._init) return;
  canvas._init = true;
  const ctx = canvas.getContext('2d');

  const nodes = [
    {id:'fe',   label:'React\nFrontend',   icon:'⚡', x:0.08, y:0.22, color:'#7c3aed'},
    {id:'api',  label:'FastAPI\nBackend',  icon:'🔧', x:0.28, y:0.22, color:'#2563eb'},
    {id:'auth', label:'Auth\nGateway',    icon:'🔐', x:0.28, y:0.58, color:'#dc2626'},
    {id:'tenant',label:'Tenant\nManager', icon:'🏢', x:0.48, y:0.22, color:'#059669'},
    {id:'train',label:'Training\nPipeline',icon:'🎓',x:0.48, y:0.58, color:'#d97706'},
    {id:'reg',  label:'Algorithm\nRegistry',icon:'🧠',x:0.68,y:0.22, color:'#7c3aed'},
    {id:'bench',label:'Benchmark\nEngine', icon:'📊', x:0.68, y:0.58, color:'#0891b2'},
    {id:'models',label:'Model\nRegistry', icon:'💾', x:0.88, y:0.22, color:'#059669'},
    {id:'serve',label:'Serving\nPipeline',icon:'🚀', x:0.88, y:0.58, color:'#2563eb'},
    {id:'redis',label:'Redis\nCache',     icon:'⚡', x:0.18, y:0.85, color:'#dc2626'},
    {id:'os',   label:'OpenSearch',       icon:'🔍', x:0.48, y:0.85, color:'#d97706'},
    {id:'emb',  label:'Embedding\nSvc',  icon:'🔢', x:0.68, y:0.85, color:'#4f46e5'},
    {id:'llm',  label:'LLM SQL\nPlanner',icon:'🤖', x:0.08, y:0.85, color:'#059669'},
    {id:'sdk',  label:'Webhook\nSDK',    icon:'🔗', x:0.88, y:0.85, color:'#0891b2'},
  ];

  const edges = [
    ['fe','api'],['api','auth'],['api','tenant'],['tenant','train'],
    ['train','bench'],['train','reg'],['bench','models'],['models','serve'],
    ['serve','fe'],['api','redis'],['train','os'],['os','emb'],
    ['llm','train'],['sdk','serve'],['auth','redis'],['reg','bench'],['serve','emb'],
  ];

  let W, H, particles = [], t = 0;

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = 420;
  }

  function pos(n) { return {x: n.x*W, y: n.y*H}; }

  function drawArrow(ctx, x1,y1,x2,y2,color) {
    const dx=x2-x1, dy=y2-y1, len=Math.sqrt(dx*dx+dy*dy);
    if(len<2) return;
    const ux=dx/len, uy=dy/len;
    const nx1=x1+ux*26, ny1=y1+uy*26;
    const nx2=x2-ux*26, ny2=y2-uy*26;
    const aLen=8;
    ctx.beginPath();
    ctx.moveTo(nx1,ny1);
    ctx.lineTo(nx2,ny2);
    ctx.strokeStyle=color+'40';
    ctx.lineWidth=1.5;
    ctx.setLineDash([4,5]);
    ctx.stroke();
    ctx.setLineDash([]);
    // arrowhead
    ctx.beginPath();
    ctx.moveTo(nx2,ny2);
    ctx.lineTo(nx2-ux*aLen+uy*5,ny2-uy*aLen-ux*5);
    ctx.lineTo(nx2-ux*aLen-uy*5,ny2-uy*aLen+ux*5);
    ctx.closePath();
    ctx.fillStyle=color+'80';
    ctx.fill();
  }

  function draw() {
    ctx.clearRect(0,0,W,H);
    t++;
    if(t%45===0) {
      const e=edges[Math.floor(Math.random()*edges.length)];
      const fn=nodes.find(n=>n.id===e[0]), tn=nodes.find(n=>n.id===e[1]);
      if(fn&&tn) particles.push({fx:pos(fn).x,fy:pos(fn).y,tx:pos(tn).x,ty:pos(tn).y,t:0,color:fn.color});
    }
    // edges
    edges.forEach(([a,b])=>{
      const fn=nodes.find(n=>n.id===a),tn=nodes.find(n=>n.id===b);
      if(!fn||!tn) return;
      drawArrow(ctx,pos(fn).x,pos(fn).y,pos(tn).x,pos(tn).y,fn.color);
    });
    // particles
    particles=particles.filter(p=>p.t<=1);
    particles.forEach(p=>{
      p.t+=0.02;
      const x=p.fx+(p.tx-p.fx)*p.t, y=p.fy+(p.ty-p.fy)*p.t;
      const a=Math.sin(p.t*Math.PI);
      ctx.save();
      ctx.shadowColor=p.color;ctx.shadowBlur=10;
      ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);
      ctx.fillStyle=p.color;ctx.globalAlpha=a;ctx.fill();
      ctx.restore();
    });
    // nodes
    nodes.forEach(n=>{
      const {x,y}=pos(n);
      const pulse=1+Math.sin(t*0.035+n.x*8)*0.05;
      const r=26*pulse;
      ctx.save();
      ctx.shadowColor=n.color;ctx.shadowBlur=16;
      ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);
      ctx.fillStyle='white';ctx.fill();
      ctx.restore();
      ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);
      ctx.strokeStyle=n.color+'60';ctx.lineWidth=2;ctx.stroke();
      ctx.font=`${18*pulse}px serif`;
      ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(n.icon,x,y-1);
      const lines=n.label.split('\n');
      ctx.font='600 8.5px Inter,sans-serif';
      ctx.fillStyle='#374151';
      lines.forEach((line,i)=>ctx.fillText(line,x,y+r+11+i*11));
    });
    requestAnimationFrame(draw);
  }
  resize();
  draw();
  window.addEventListener('resize',resize);
}

/* ═══════════════════════════════════════════════════════
   CANVAS: EMBEDDING FLOW
═══════════════════════════════════════════════════════ */
function initEmbeddingCanvas() {
  const canvas = document.getElementById('embeddingCanvas');
  if (!canvas || canvas._init) return;
  canvas._init = true;
  const ctx = canvas.getContext('2d');
  let W, H, t = 0, particles = [];

  const nodes = [
    {label:'Item\nMetadata',icon:'📄',color:'#2563eb',x:0.08},
    {label:'Sentence-\nBERT',icon:'🤖',color:'#7c3aed',x:0.26},
    {label:'384-dim\nVector',icon:'🔢',color:'#059669',x:0.44},
    {label:'OpenSearch\nHNSW',icon:'🔍',color:'#d97706',x:0.62},
    {label:'ANN\nSearch',icon:'⚡',color:'#0891b2',x:0.80},
    {label:'Semantic\nResults',icon:'🎯',color:'#059669',x:0.96},
  ];

  function resize() {
    W=canvas.width=canvas.offsetWidth;H=canvas.height=180;
  }

  function draw() {
    ctx.clearRect(0,0,W,H);t++;
    const cy=H*0.42,r=28;

    if(t%50===0&&nodes.length>1) {
      const i=Math.floor(Math.random()*(nodes.length-1));
      particles.push({fx:nodes[i].x*W,fy:cy,tx:nodes[i+1].x*W,ty:cy,t:0,color:nodes[i].color});
    }

    // connector lines with arrows
    for(let i=0;i<nodes.length-1;i++) {
      const x1=nodes[i].x*W+r, x2=nodes[i+1].x*W-r;
      const grad=ctx.createLinearGradient(x1,cy,x2,cy);
      grad.addColorStop(0,nodes[i].color+'60');
      grad.addColorStop(1,nodes[i+1].color+'60');
      ctx.beginPath();ctx.moveTo(x1,cy);ctx.lineTo(x2-8,cy);
      ctx.strokeStyle=grad;ctx.lineWidth=2.5;ctx.stroke();
      // arrowhead
      ctx.beginPath();ctx.moveTo(x2,cy);
      ctx.lineTo(x2-9,cy-5);ctx.lineTo(x2-9,cy+5);ctx.closePath();
      ctx.fillStyle=nodes[i+1].color+'80';ctx.fill();
    }

    // particles
    particles=particles.filter(p=>p.t<=1);
    particles.forEach(p=>{
      p.t+=0.025;
      const x=p.fx+(p.tx-p.fx)*p.t,y=p.fy;
      const a=Math.sin(p.t*Math.PI);
      ctx.save();ctx.shadowColor=p.color;ctx.shadowBlur=8;
      ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);
      ctx.fillStyle=p.color;ctx.globalAlpha=a;ctx.fill();
      ctx.restore();
    });

    // nodes
    nodes.forEach(n=>{
      const x=n.x*W, pulse=1+Math.sin(t*0.05+n.x*6)*0.06, nr=r*pulse;
      ctx.save();ctx.shadowColor=n.color;ctx.shadowBlur=14;
      ctx.beginPath();ctx.arc(x,cy,nr,0,Math.PI*2);
      const g=ctx.createRadialGradient(x,cy,0,x,cy,nr);
      g.addColorStop(0,'white');g.addColorStop(1,n.color+'15');
      ctx.fillStyle=g;ctx.fill();
      ctx.restore();
      ctx.beginPath();ctx.arc(x,cy,nr,0,Math.PI*2);
      ctx.strokeStyle=n.color+'80';ctx.lineWidth=2;ctx.stroke();
      ctx.font=`${17*pulse}px serif`;ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(n.icon,x,cy);
      const lines=n.label.split('\n');
      ctx.font='600 9px Inter,sans-serif';ctx.fillStyle='#374151';
      lines.forEach((l,i)=>ctx.fillText(l,x,cy+nr+12+i*12));
    });
    requestAnimationFrame(draw);
  }
  resize(); draw();
  window.addEventListener('resize',resize);
}

/* ═══════════════════════════════════════════════════════
   CANVAS: GALAXY (21 Algorithms)
═══════════════════════════════════════════════════════ */
function initGalaxyCanvas() {
  const canvas = document.getElementById('galaxyCanvas');
  if (!canvas || canvas._init) return;
  canvas._init = true;
  const ctx = canvas.getContext('2d');
  let W, H, t = 0, hoveredGroup = -1;

  const groups = [
    {name:'Matrix\nFactorization',color:'#2563eb',angle:0,   algos:['SVD','NMF','ALS','BPR','SVD++']},
    {name:'Neighborhood',         color:'#7c3aed',angle:60,  algos:['User-KNN','Item-KNN']},
    {name:'Graph-Based',          color:'#059669',angle:120, algos:['EASE','P3Alpha','RP3Beta','SLIM']},
    {name:'Deep\nLearning',       color:'#dc2626',angle:180, algos:['WARP','Autoencoder']},
    {name:'Content-Based\n& Semantic',color:'#d97706',angle:240,algos:['Ecom-Pop.','TF-IDF','Semantic']},
    {name:'Hybrid',               color:'#0891b2',angle:300, algos:['LightFM','FM','Temporal-SVD','Movie-KNN','Ecom-ALS']},
  ];

  let nodeData = [];

  function resize() {
    W=canvas.width=canvas.offsetWidth;H=canvas.height=280;
    const cx=W/2,cy=H/2,gR=Math.min(W,H)*0.32;
    nodeData=[];
    groups.forEach((g,gi)=>{
      const ga=g.angle*Math.PI/180;
      const gcx=cx+Math.cos(ga)*gR, gcy=cy+Math.sin(ga)*gR;
      nodeData.push({type:'group',label:g.name,x:gcx,y:gcy,color:g.color,r:24,gi});
      g.algos.forEach((algo,ai)=>{
        const spread=0.55, offset=(ai-(g.algos.length-1)/2)*spread;
        const aAngle=ga+offset;
        const aR=gR*0.42;
        nodeData.push({type:'algo',label:algo,x:gcx+Math.cos(aAngle)*aR,y:gcy+Math.sin(aAngle)*aR,color:g.color,r:16,gi,ai});
      });
    });
  }

  function draw() {
    ctx.clearRect(0,0,W,H); t++;
    const cx=W/2,cy=H/2;
    // spokes from center to groups
    nodeData.filter(n=>n.type==='group').forEach(n=>{
      ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(n.x,n.y);
      ctx.strokeStyle=n.color+'18';ctx.lineWidth=1.5;ctx.stroke();
    });
    // edges group→algo
    nodeData.filter(n=>n.type==='algo').forEach(n=>{
      const grp=nodeData.find(p=>p.type==='group'&&p.gi===n.gi);
      if(!grp) return;
      ctx.beginPath();ctx.moveTo(grp.x,grp.y);ctx.lineTo(n.x,n.y);
      ctx.strokeStyle=n.color+'28';ctx.lineWidth=1;ctx.stroke();
    });
    // nodes
    nodeData.forEach((n,i)=>{
      const pulse=n.type==='group'
        ?1+Math.sin(t*0.035+i)*0.08
        :1+Math.sin(t*0.05+i*1.4)*0.05;
      const nr=n.r*pulse;
      const isHov=hoveredGroup===n.gi;
      ctx.save();
      ctx.shadowColor=n.color;ctx.shadowBlur=isHov?(n.type==='group'?24:14):(n.type==='group'?12:6);
      ctx.beginPath();ctx.arc(n.x,n.y,nr,0,Math.PI*2);
      if(n.type==='group'){
        const g=ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,nr);
        g.addColorStop(0,n.color);g.addColorStop(1,n.color+'cc');
        ctx.fillStyle=g;
      } else {
        ctx.fillStyle=isHov?n.color:'white';
        if(!isHov){ctx.strokeStyle=n.color+'70';ctx.lineWidth=1.5;ctx.stroke();}
      }
      ctx.fill();ctx.restore();
      ctx.font=n.type==='group'?'700 8px Inter':'500 8px Inter';
      ctx.fillStyle=n.type==='group'?'white':(isHov?'white':'#374151');
      ctx.textAlign='center';ctx.textBaseline='middle';
      if(n.type==='algo'){ctx.fillText(n.label,n.x,n.y+nr+11);}
      else{const lines=n.label.split('\n');lines.forEach((l,li)=>ctx.fillText(l,n.x,n.y+(li-lines.length/2+0.5)*9));}
    });
    // center node
    const cx2=W/2,cy2=H/2,cr=22+Math.sin(t*0.04)*2;
    ctx.save();ctx.shadowColor='#2563eb';ctx.shadowBlur=24;
    ctx.beginPath();ctx.arc(cx2,cy2,cr,0,Math.PI*2);
    const cg=ctx.createRadialGradient(cx2,cy2,0,cx2,cy2,cr);
    cg.addColorStop(0,'#2563eb');cg.addColorStop(1,'#7c3aed');
    ctx.fillStyle=cg;ctx.fill();ctx.restore();
    ctx.font='700 11px Inter';ctx.fillStyle='white';
    ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText('21',cx2,cy2-4);
    ctx.font='500 8px Inter';ctx.fillText('algos',cx2,cy2+7);
    requestAnimationFrame(draw);
  }

  canvas.addEventListener('mousemove',e=>{
    const rect=canvas.getBoundingClientRect(),mx=e.clientX-rect.left,my=e.clientY-rect.top;
    hoveredGroup=-1;
    nodeData.forEach(n=>{
      const dx=mx-n.x,dy=my-n.y;
      if(Math.sqrt(dx*dx+dy*dy)<n.r+10) hoveredGroup=n.gi;
    });
    canvas.style.cursor=hoveredGroup>-1?'pointer':'default';
  });

  resize(); draw();
  window.addEventListener('resize',resize);
}

/* ═══════════════════════════════════════════════════════
   LIFECYCLE ANIMATION
═══════════════════════════════════════════════════════ */
function initLifecycleAnim() {
  const steps = document.querySelectorAll('.lf-circle');
  if (!steps.length) return;
  const colors = ['#2563eb','#7c3aed','#0891b2','#d97706','#059669','#4f46e5','#dc2626','#059669'];
  let cur = 0;
  function advance() {
    steps.forEach((s,i) => {
      s.classList.toggle('active', i===cur);
      s.style.borderColor = i===cur ? colors[i] : '';
      s.style.boxShadow = i===cur ? `0 0 0 6px ${colors[i]}20,var(--shadow-md)` : '';
      s.style.transform = i===cur ? 'scale(1.12)' : '';
    });
    cur=(cur+1)%steps.length;
  }
  advance();
  lcInterval = setInterval(advance, 1100);
}

/* ═══════════════════════════════════════════════════════
   ENGINEERING RATIONALE — SEQUENTIAL PIPELINE GLOW
═══════════════════════════════════════════════════════ */
function initRationaleAnimations() {
  const circles = document.querySelectorAll('[id^="erpc-"]');
  const connectors = document.querySelectorAll('[id^="erpcon-"]');
  if (!circles.length) return;
  let cur = 0;
  function advance() {
    circles.forEach((c, i) => c.classList.toggle('lit', i <= cur));
    connectors.forEach((c, i) => c.classList.toggle('lit', i < cur));
    cur = (cur + 1) % (circles.length + 2);
    if (cur === 0) {
      circles.forEach(c => c.classList.remove('lit'));
      connectors.forEach(c => c.classList.remove('lit'));
    }
  }
  advance();
  erPipeInterval = setInterval(advance, 550);
}


function initCharts() {
  const algos = ['Ecom-Pop.','Movie-KNN','EASE','SVD','ALS','LightFM'];
  const ndcg  = [0.2286,0.1563,0.1380,0.1180,0.1095,0.1010];
  const speed = [0.02,0.08,0.40,1.20,3.10,4.50];

  const base = {
    responsive:true, maintainAspectRatio:false,
    plugins:{legend:{display:false}},
    animation:{duration:900,easing:'easeOutQuart'},
    scales:{
      x:{grid:{color:'rgba(0,0,0,0.04)'},ticks:{color:'#9ca3af',font:{size:10}}},
      y:{grid:{color:'rgba(0,0,0,0.04)'},ticks:{color:'#9ca3af',font:{size:10}}}
    }
  };

  const blueGrad = (ctx) => {
    if (!ctx.chart || !ctx.chart.ctx) return '#2563eb';
    const g=ctx.chart.ctx.createLinearGradient(0,0,0,180);
    g.addColorStop(0,'rgba(37,99,235,0.9)');
    g.addColorStop(1,'rgba(124,58,237,0.7)');
    return g;
  };

  const ndcgEl = document.getElementById('ndcgChart');
  if (ndcgEl && !ndcgEl._chart) {
    ndcgEl._chart = new Chart(ndcgEl, {
      type:'bar',
      data:{labels:algos,datasets:[{data:ndcg,backgroundColor:blueGrad,borderRadius:6,borderSkipped:false}]},
      options:{...base,plugins:{...base.plugins,tooltip:{callbacks:{label:c=>`NDCG: ${c.raw.toFixed(4)}`}}}}
    });
  }

  const speedEl = document.getElementById('speedChart');
  if (speedEl && !speedEl._chart) {
    speedEl._chart = new Chart(speedEl, {
      type:'bar',
      data:{labels:algos,datasets:[{
        data:speed,
        backgroundColor:speed.map(v=>v<=0.5?'rgba(5,150,105,0.8)':v<=2?'rgba(217,119,6,0.8)':'rgba(220,38,38,0.8)'),
        borderRadius:6,borderSkipped:false
      }]},
      options:{...base,plugins:{...base.plugins,tooltip:{callbacks:{label:c=>`${c.raw}s`}}}}
    });
  }
}

/* ═══════════════════════════════════════════════════════
   CLOSING CANVAS
═══════════════════════════════════════════════════════ */
function initClosingCanvas() {
  const canvas = document.getElementById('closingCanvas');
  if (!canvas || canvas._init) return;
  canvas._init = true;
  const ctx = canvas.getContext('2d');
  let W, H, stars = [];
  function resize() {
    W=canvas.width=canvas.offsetWidth; H=canvas.height=canvas.offsetHeight;
    stars=Array.from({length:100},()=>({
      x:Math.random()*W,y:Math.random()*H,
      r:Math.random()*1.5+0.3,
      op:Math.random()*0.5+0.1,
      vx:(Math.random()-0.5)*0.25,vy:(Math.random()-0.5)*0.25
    }));
  }
  function draw() {
    ctx.clearRect(0,0,W,H);
    stars.forEach(s=>{
      ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(255,255,255,${s.op})`;ctx.fill();
      s.x+=s.vx;s.y+=s.vy;
      if(s.x<0||s.x>W)s.vx*=-1;if(s.y<0||s.y>H)s.vy*=-1;
    });
    requestAnimationFrame(draw);
  }
  resize(); draw();
  window.addEventListener('resize',resize);
}

/* ═══════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  buildNav();

  // Load first slide
  const firstSlide = createSlideEl(0);
  slidesEl.appendChild(firstSlide);
  updateUI();

  // hide key hint after 4s
  setTimeout(() => {
    const h = document.getElementById('key-hint');
    if (h) h.style.opacity = '0';
  }, 4000);
});