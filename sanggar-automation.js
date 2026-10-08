/* SANGGAR Automation Catalog
   Original workflow specifications inspired by common automation patterns.
   Big-data and creative-asset capabilities are translated into SANGGAR-native specifications.
*/
const workflows=[
{id:"creator-onboarding",name:"Creator Onboarding",cat:"Identity",desc:"Profil → skill baseline → journey awal → rekomendasi track.",trigger:"signup",action:"profile + journey"},
{id:"evidence-intake",name:"Evidence Intake",cat:"Creator",desc:"Upload karya → metadata → klasifikasi → evidence record → portfolio candidate.",trigger:"upload",action:"evidence + portfolio"},
{id:"ai-portfolio-curator",name:"AI Portfolio Curator",cat:"AI",desc:"Menganalisis karya dan menyusun urutan portfolio berdasarkan tujuan creator.",trigger:"portfolio.update",action:"recommendation"},
{id:"learning-progress",name:"Learning Progress Engine",cat:"Academy",desc:"Aktivitas kursus → progress → milestone → next-best-action.",trigger:"lesson.completed",action:"journey update"},
{id:"submission-assistant",name:"Submission Assistant",cat:"Creator",desc:"Memeriksa kelengkapan submission dan membuat checklist sebelum dikirim.",trigger:"submission.created",action:"validation + review"},
{id:"creator-support",name:"AI Support + Memory",cat:"AI",desc:"Percakapan kontekstual dengan memory jangka panjang dan handoff manusia.",trigger:"message",action:"AI reply + memory"},
{id:"document-intelligence",name:"Document Intelligence / RAG",cat:"AI",desc:"Dokumen → ekstraksi → indexing → pencarian semantik → jawaban bersumber.",trigger:"document.upload",action:"knowledge base"},
{id:"marketplace-match",name:"Marketplace Match",cat:"Economy",desc:"Profil creator + kebutuhan pasar → scoring → rekomendasi peluang.",trigger:"opportunity.created",action:"match"},
{id:"order-operations",name:"Order & Client Operations",cat:"Economy",desc:"Order → status → reminder → handoff → completion evidence.",trigger:"order.created",action:"workflow state"},
{id:"notification-router",name:"Notification Router",cat:"Ops",desc:"Satu event dikirim ke channel yang sesuai berdasarkan preference creator.",trigger:"event",action:"email / web / messaging"},
{id:"content-repurpose",name:"Content Repurposing",cat:"Growth",desc:"Karya atau materi pembelajaran → draft caption, artikel, short-form content.",trigger:"content.ready",action:"drafts"},
{id:"seo-intelligence",name:"SEO Intelligence",cat:"Growth",desc:"Topik → keyword → clustering → content opportunities → reporting.",trigger:"seo.request",action:"SEO report"},
{id:"social-pulse",name:"Social Pulse",cat:"Growth",desc:"Sinyal sosial → trend extraction → creator opportunity insights.",trigger:"scheduled",action:"trend report"},
{id:"analytics-digest",name:"Analytics Digest",cat:"Admin",desc:"Data produk → KPI → anomaly hints → ringkasan operasional.",trigger:"scheduled",action:"admin digest"},
{id:"human-approval",name:"Human Approval Gate",cat:"Governance",desc:"Menahan aksi berisiko sampai moderator/admin memberi persetujuan.",trigger:"risk.detected",action:"approval queue"},
{id:"audit-governance",name:"Audit & Governance",cat:"Governance",desc:"Mencatat actor, event, decision, outcome dan timestamp untuk traceability.",trigger:"mutation",action:"audit log"},
{id:"data-ingestion",name:"Data Ingestion Gateway",cat:"Data Intelligence",desc:"Mengumpulkan event, evidence, marketplace, academy dan operational data ke canonical event model.",trigger:"data.received",action:"normalize + queue"},
{id:"data-quality",name:"Data Quality Guard",cat:"Data Intelligence",desc:"Memeriksa completeness, validity, uniqueness, consistency dan freshness sebelum data dipakai AI.",trigger:"data.ingested",action:"quality score + quarantine"},
{id:"data-lineage",name:"Data Lineage",cat:"Data Intelligence",desc:"Melacak asal data, transformasi, consumer dan dampak perubahan untuk audit dan debugging.",trigger:"data.mutated",action:"lineage graph"},
{id:"semantic-data-search",name:"Semantic Data Search",cat:"AI",desc:"Menggabungkan metadata terstruktur dengan semantic retrieval untuk mencari creator, evidence, knowledge dan opportunity.",trigger:"search",action:"hybrid ranking"},
{id:"analytics-intelligence",name:"Analytics Intelligence",cat:"Data Intelligence",desc:"Mengubah event produk menjadi KPI, cohort, funnel, retention, revenue dan operational insights.",trigger:"scheduled",action:"metrics + insights"},
{id:"realtime-signals",name:"Realtime Signal Engine",cat:"Data Intelligence",desc:"Memproses sinyal perubahan secara near-real-time untuk opportunity, notification, anomaly dan monitoring.",trigger:"stream.event",action:"signal + action"},
{id:"recommendation-engine",name:"Recommendation Engine",cat:"AI",desc:"Menggunakan skill, evidence, behavior, goals dan market signals untuk menghasilkan next-best-action.",trigger:"profile.changed",action:"ranked recommendations"},
{id:"data-governance",name:"Data Governance Guard",cat:"Governance",desc:"Menerapkan ownership, retention, access policy, sensitive-data controls dan audit sebelum data dipakai.",trigger:"data.access",action:"policy decision"},
{id:"data-anomaly",name:"Data Anomaly Detector",cat:"Data Intelligence",desc:"Mendeteksi lonjakan, penurunan, duplikasi atau pola tidak wajar pada KPI dan workflow.",trigger:"metric.updated",action:"alert + investigation"},
{id:"asset-discovery",name:"Creative Asset Discovery",cat:"Creative Assets",desc:"Brief creator → cari kandidat foto, ilustrasi, vector, video, pattern, font, icon, audio atau template.",trigger:"asset.search",action:"ranked asset references"},
{id:"asset-rights-check",name:"Asset Rights Check",cat:"Creative Assets",desc:"Kandidat asset → periksa license, attribution, commercial use dan restriction sebelum dipakai.",trigger:"asset.selected",action:"rights status"},
{id:"asset-provenance",name:"Asset Provenance",cat:"Creative Assets",desc:"Mencatat source, creator, license, project usage dan attribution agar output dapat ditelusuri.",trigger:"asset.attached",action:"provenance record"},
{id:"creative-library",name:"Creative Library",cat:"Creative Assets",desc:"Mengelola asset milik creator, saved references dan project collections tanpa mengklaim kepemilikan asset pihak ketiga.",trigger:"asset.saved",action:"library update"},
{id:"ai-asset-curator",name:"AI Asset Curator",cat:"AI",desc:"Menerjemahkan creative brief menjadi kebutuhan asset lalu meranking kandidat berdasarkan style, quality dan rights.",trigger:"brief.created",action:"asset recommendations"}
,{id:"ai-use-copilot",name:"AI Use Copilot",cat:"GenAI Intelligence",desc:"Intent creator → pilih tool → prompt/context → execute → evaluasi → simpan hasil dan preference.",trigger:"ai.request",action:"guided AI workflow"},
{id:"ai-system-builder",name:"AI System Builder",cat:"GenAI Intelligence",desc:"Use case → architecture → model/RAG/agent/tools → evaluation → production checklist.",trigger:"ai.system.request",action:"system blueprint"},
{id:"rag-pipeline",name:"RAG Knowledge Pipeline",cat:"GenAI Intelligence",desc:"Knowledge source → chunk → index → retrieve → grounded answer → citation/evaluation.",trigger:"knowledge.updated",action:"retrieval pipeline"},
{id:"agent-orchestration",name:"Agent Orchestration",cat:"GenAI Intelligence",desc:"Goal → planning → tools → memory → sub-agents → result → verification.",trigger:"agent.task",action:"multi-step execution"},
{id:"ai-evaluation",name:"AI Evaluation Loop",cat:"GenAI Intelligence",desc:"Prompt/model/agent output → quality, relevance, safety and latency checks → score → improvement.",trigger:"ai.output",action:"eval + feedback"},
{id:"ai-observability",name:"AI Observability",cat:"GenAI Intelligence",desc:"Track model usage, latency, errors, cost, tool calls, retrieval quality and user feedback.",trigger:"ai.call",action:"telemetry + insight"},
{id:"ai-safety-gate",name:"AI Safety & Security Gate",cat:"Governance",desc:"Input/output/tool action → risk classification → policy → block, transform, approve or execute.",trigger:"ai.action",action:"policy decision"},
{id:"multimodal-ai",name:"Multimodal Intelligence",cat:"GenAI Intelligence",desc:"Text, image, audio and document input → unified context → analysis → structured output.",trigger:"multimodal.input",action:"context fusion"},
{id:"ai-learning-path",name:"AI Learning Path",cat:"Academy",desc:"Creator goal + level → 101/201/301 curriculum → projects → evidence → assessment.",trigger:"learning.goal",action:"adaptive curriculum"},
{id:"ai-research-radar",name:"AI Research Radar",cat:"Research",desc:"Research signals → topic classification → relevance → summary → update knowledge graph.",trigger:"research.signal",action:"research digest"},
{id:"ai-interview-prep",name:"AI Role & Interview Prep",cat:"Academy",desc:"Target role → skills → question bank → mock interview → evaluation → gap analysis.",trigger:"career.goal",action:"adaptive preparation"}
];

const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const render=filter=>{const data=workflows.filter(w=>(w.name+' '+w.cat+' '+w.desc).toLowerCase().includes(filter.toLowerCase()));document.getElementById('activeCount').textContent=data.length;document.getElementById('grid').innerHTML=data.map(w=>`<article class="sg-card sg-card-compact sg-card-interactive sg-stack"><div class="sg-cluster" style="justify-content:space-between"><span class="sg-badge sg-badge-info">${esc(w.cat)}</span><span class="sg-badge">${esc(w.trigger)}</span></div><h3 style="margin:2px 0">${esc(w.name)}</h3><p style="color:var(--sg-muted);margin:0;line-height:1.55">${esc(w.desc)}</p><div class="sg-cluster" style="margin-top:auto"><span class="sg-badge">${esc(w.action)}</span><button class="sg-button sg-button-secondary sg-button-sm" data-id="${esc(w.id)}">Detail</button></div></article>`).join('')||'<div class="sg-empty" style="grid-column:1/-1"><strong>Workflow tidak ditemukan</strong>Coba kata kunci lain.</div>'};
document.getElementById('search').addEventListener('input',e=>render(e.target.value));
document.getElementById('grid').addEventListener('click',e=>{const id=e.target.dataset.id;if(!id)return;const w=workflows.find(x=>x.id===id);alert(w.name+'\n\nTrigger: '+w.trigger+'\nAction: '+w.action+'\n\nWorkflow ini adalah blueprint SANGGAR dan belum mengeksekusi kredensial eksternal dari browser.')});
render('');
