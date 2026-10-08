/* SANGGAR Automation Catalog
   Original workflow specifications inspired by common n8n automation patterns.
   Big-data capabilities are translated into SANGGAR-native workflow specifications.
   No third-party workflow JSON is copied into this project.
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
{id:"human-approval",name:"Human Approval Gate",cat:"Governance",desc:"Menahan aksi sensitif sampai moderator/admin memberi persetujuan.",trigger:"risk.detected",action:"approval queue"},
{id:"audit-governance",name:"Audit & Governance",cat:"Governance",desc:"Mencatat actor, event, decision, outcome dan timestamp untuk traceability.",trigger:"mutation",action:"audit log"},

{id:"data-ingestion",name:"Data Ingestion Gateway",cat:"Data Intelligence",desc:"Mengumpulkan event, evidence, marketplace, academy dan operational data ke canonical event model.",trigger:"data.received",action:"normalize + queue"},
{id:"data-quality",name:"Data Quality Guard",cat:"Data Intelligence",desc:"Memeriksa completeness, validity, uniqueness, consistency dan freshness sebelum data dipakai AI.",trigger:"data.ingested",action:"quality score + quarantine"},
{id:"data-lineage",name:"Data Lineage",cat:"Data Intelligence",desc:"Melacak asal data, transformasi, consumer dan dampak perubahan untuk audit dan debugging.",trigger:"data.mutated",action:"lineage graph"},
{id:"semantic-data-search",name:"Semantic Data Search",cat:"AI",desc:"Menggabungkan metadata terstruktur dengan semantic retrieval untuk mencari creator, evidence, knowledge dan opportunity.",trigger:"search",action:"hybrid ranking"},
{id:"analytics-intelligence",name:"Analytics Intelligence",cat:"Data Intelligence",desc:"Mengubah event produk menjadi KPI, cohort, funnel, retention, revenue dan operational insights.",trigger:"scheduled",action:"metrics + insights"},
{id:"realtime-signals",name:"Realtime Signal Engine",cat:"Data Intelligence",desc:"Memproses sinyal perubahan secara near-real-time untuk opportunity, notification, anomaly dan monitoring.",trigger:"stream.event",action:"signal + action"},
{id:"recommendation-engine",name:"Recommendation Engine",cat:"AI",desc:"Menggunakan skill, evidence, behavior, goals dan market signals untuk menghasilkan next-best-action.",trigger:"profile.changed",action:"ranked recommendations"},
{id:"data-governance",name:"Data Governance Guard",cat:"Governance",desc:"Menerapkan ownership, retention, access policy, sensitive-data controls dan audit sebelum data dipakai.",trigger:"data.access",action:"policy decision"},
{id:"data-anomaly",name:"Data Anomaly Detector",cat:"Data Intelligence",desc:"Mendeteksi lonjakan, penurunan, duplikasi atau pola tidak wajar pada KPI dan workflow.",trigger:"metric.updated",action:"alert + investigation"}
];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const render=filter=>{const data=workflows.filter(w=>(w.name+' '+w.cat+' '+w.desc).toLowerCase().includes(filter.toLowerCase()));document.getElementById('activeCount').textContent=data.length;document.getElementById('grid').innerHTML=data.map(w=>`<article class="sg-card sg-card-compact sg-card-interactive sg-stack"><div class="sg-cluster" style="justify-content:space-between"><span class="sg-badge sg-badge-info">${esc(w.cat)}</span><span class="sg-badge">${esc(w.trigger)}</span></div><h3 style="margin:2px 0">${esc(w.name)}</h3><p style="color:var(--sg-muted);margin:0;line-height:1.55">${esc(w.desc)}</p><div class="sg-cluster" style="margin-top:auto"><span class="sg-badge">${esc(w.action)}</span><button class="sg-button sg-button-secondary sg-button-sm" data-id="${esc(w.id)}">Detail</button></div></article>`).join('')||'<div class="sg-empty" style="grid-column:1/-1"><strong>Workflow tidak ditemukan</strong>Coba kata kunci lain.</div>'};
document.getElementById('search').addEventListener('input',e=>render(e.target.value));
document.getElementById('grid').addEventListener('click',e=>{const id=e.target.dataset.id;if(!id)return;const w=workflows.find(x=>x.id===id);alert(w.name+'\n\nTrigger: '+w.trigger+'\nAction: '+w.action+'\n\nWorkflow ini adalah blueprint SANGGAR dan belum mengeksekusi kredensial eksternal dari browser.')});
render('');
