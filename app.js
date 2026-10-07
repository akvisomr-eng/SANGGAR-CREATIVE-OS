(()=>{document.documentElement.classList.add("js");const links=document.querySelectorAll('a[href^="#"]');links.forEach(a=>a.addEventListener("click",e=>{const el=document.querySelector(a.getAttribute("href"));if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth",block:"start"})}}));

const companionKnowledge=[
{match:/mulai di sanggar|masuk ke workspace|^mulai$/i,title:"Mulai di SANGGAR",text:"Ini adalah pintu masuk ke Workspace. Di sana Anda dapat membuat portfolio, passport, evidence, menilai karya, dan menyiapkan paket pengajuan.",next:"Jika Anda baru mulai, buka Workspace lalu buat Evidence atau Creator Journey pertama.",speak:"Ini adalah pintu masuk ke Workspace. Jika Anda baru mulai, buka Workspace untuk memulai perjalanan Anda."},
{match:/academy/i,title:"Academy",text:"Academy mengubah tujuan menjadi kemampuan melalui learning path, praktik, proyek, dan evidence. Jalurnya dapat diarahkan ke 3D, AR, fotografi, video, desain, audio, digital product, dan jasa kreatif.",next:"Pilih bidang yang ingin Anda kuasai, lalu bangun proyek yang bisa menjadi bukti kemampuan.",speak:"Academy membantu Anda mengubah tujuan menjadi kemampuan melalui belajar, praktik, proyek, dan bukti kemampuan."},
{match:/gallery|tampilkan karya/i,title:"Creator Gallery",text:"Gallery adalah ruang publik untuk menampilkan karya dan menghubungkannya dengan portofolio serta Creative Passport.",next:"Publikasikan karya terbaik setelah metadata, hak, provenance, dan kualitasnya siap.",speak:"Creator Gallery adalah ruang untuk menampilkan karya terbaik Anda secara profesional."},
{match:/creator journey|journey/i,title:"Creator Journey",text:"Creator Journey menghubungkan tujuan → skill gap → learning → project → evidence → portfolio → marketplace match → outcome.",next:"Gunakan Journey ketika Anda memiliki tujuan konkret, misalnya ingin menghasilkan uang dari 3D.",speak:"Creator Journey menghubungkan tujuan Anda dengan skill, karya, bukti, peluang, dan hasil."},
{match:/platform/i,title:"Arsitektur Platform",text:"SANGGAR dibangun berlapis: Identity, Data, Workflow, Intelligence, Economy, dan Governance. Semua domain berbagi fondasi yang sama.",next:"Pelajari layer Intelligence untuk melihat bagaimana AI membantu tanpa mengambil alih kendali manusia.",speak:"Arsitektur SANGGAR menyatukan identitas, data, workflow, kecerdasan, ekonomi, dan governance."},
{match:/identity/i,title:"Identity",text:"Identity adalah fondasi identitas digital SANGGAR. Creative Passport dapat menghubungkan profil, evidence, portfolio, skill, dan kredensial.",next:"Bangun identitas terlebih dahulu sebelum memperluas portofolio dan peluang.",speak:"Identity adalah fondasi identitas digital Anda di SANGGAR."},
{match:/data/i,title:"Data",text:"Data menyimpan konteks perjalanan: karya, skill, evidence, portfolio, aktivitas, dan sinyal outcome dengan kontrol akses dan audit.",next:"Data yang terstruktur membuat rekomendasi AI lebih relevan.",speak:"Data menyimpan konteks perjalanan Anda agar rekomendasi SANGGAR lebih relevan."},
{match:/workflow/i,title:"Workflow",text:"Workflow menghubungkan pekerjaan nyata dari proyek, evidence, assessment, portfolio, hingga peluang.",next:"Jangan berhenti di belajar; ubah pembelajaran menjadi output yang dapat dibuktikan.",speak:"Workflow menghubungkan proses kerja nyata dari proyek sampai peluang."},
{match:/intelligence|ai-native|ai membantu/i,title:"AI Intelligence",text:"AI SANGGAR dirancang untuk analisis, rekomendasi, pencocokan, evaluasi, dan bantuan kontekstual dengan policy checks, evidence, provenance, audit trail, dan human approval untuk risiko tinggi.",next:"Gunakan AI sebagai co-pilot: minta analisis dan rekomendasi, lalu tetap kendalikan keputusan penting.",speak:"AI SANGGAR bertindak sebagai co-pilot untuk analisis, rekomendasi, pencocokan, dan dukungan keputusan dengan kendali manusia."},
{match:/economy|peluang/i,title:"Economy",text:"Economy menghubungkan kemampuan dan karya dengan marketplace, klien, proyek, monetisasi, dan pertumbuhan.",next:"Pastikan karya memiliki bukti, hak, metadata, dan kualitas sebelum diarahkan ke pasar.",speak:"Economy menghubungkan kemampuan dan karya Anda dengan peluang ekonomi."},
{match:/governance/i,title:"Governance",text:"Governance menjaga agar AI dan workflow tetap dapat diaudit. Risiko tinggi membutuhkan human approval dan keputusan penting tidak diserahkan sepenuhnya kepada AI.",next:"Governance bukan penghambat; ini fondasi agar ekosistem dapat dipercaya.",speak:"Governance menjaga AI tetap dapat dipercaya, diaudit, dan berada dalam kendali manusia."},
{match:/jelajahi platform|domain utama|dibuat untuk dunia nyata/i,title:"Jelajahi Ekosistem",text:"Empat pintu utama SANGGAR adalah Academy, Creator Gallery, Creator Journey, dan Workspace. Masing-masing melayani tahap berbeda dalam perjalanan kreator.",next:"Jika ingin belajar pilih Academy; jika ingin menampilkan karya pilih Gallery; jika punya tujuan pilih Journey; jika ingin bekerja pilih Workspace.",speak:"Empat pintu utama SANGGAR adalah Academy, Gallery, Creator Journey, dan Workspace."}
];

function makeCompanion(){
 if(!document.body.matches('[data-sanggar-companion="true"]')||document.getElementById("sanggar-ai-companion"))return;
 const root=document.createElement("aside");root.id="sanggar-ai-companion";root.className="ai-companion";root.setAttribute("aria-label","SANGGAR AI Companion");
 root.innerHTML='<div class="ai-companion-head"><div class="ai-avatar" aria-hidden="true">S</div><div><strong>SANGGAR AI Companion</strong><small>Context-aware guide</small></div><button class="ai-minimize" type="button" aria-label="Minimalkan AI Companion">−</button></div><div class="ai-companion-body"><span class="ai-context-label">SIAP MEMBIMBING</span><h3>Halo, saya pendamping SANGGAR.</h3><p>Arahkan mouse ke bagian mana pun di halaman ini. Saya akan menjelaskan fungsinya dan menyarankan langkah berikutnya.</p><div class="ai-next"><b>Langkah berikutnya</b><span>Mulai dari tujuan Anda, lalu saya bantu menemukan jalurnya.</span></div></div><div class="ai-companion-actions"><button type="button" class="ai-action ai-listen">🔊 Dengarkan</button><button type="button" class="ai-action ai-stop" hidden>■ Hentikan</button><button type="button" class="ai-action ai-help">✦ Pandu saya</button></div><div class="ai-status" aria-live="polite"></div>';
 document.body.appendChild(root);

 const body=root.querySelector(".ai-companion-body"),status=root.querySelector(".ai-status");
 const title=root.querySelector("h3"),p=root.querySelector(".ai-companion-body p"),next=root.querySelector(".ai-next span"),label=root.querySelector(".ai-context-label");
 let current={title:"SANGGAR AI Companion",text:"Halo, saya pendamping SANGGAR.",next:"Mulai dari tujuan Anda.",speak:"Halo, saya pendamping SANGGAR."};
 let lastTarget=null,hoverTimer=null,idleTimer=null;

 function knowledgeFor(el){
   if(!el)return current;
   const raw=((el.getAttribute("data-ai-context")||"")+" "+(el.getAttribute("aria-label")||"")+" "+(el.textContent||"")+" "+(el.getAttribute("href")||"")).replace(/\s+/g," ").trim();
   for(const item of companionKnowledge)if(item.match.test(raw))return item;
   if(el.tagName==="A")return {title:"Tautan SANGGAR",text:"Tautan ini membawa Anda ke bagian atau pengalaman lain di ekosistem SANGGAR.",next:"Buka bagian ini jika sesuai dengan tujuan Anda.",speak:"Tautan ini membawa Anda ke bagian lain di ekosistem SANGGAR."};
   if(el.tagName==="BUTTON")return {title:"Action",text:"Tombol ini menjalankan sebuah tindakan di SANGGAR.",next:"Klik ketika Anda siap menjalankan tindakan tersebut.",speak:"Ini adalah action di SANGGAR. Klik ketika Anda siap."};
   return null;
 }
 function render(item,voice=false){
   if(!item)return;
   current=item;label.textContent="KONTEKS AKTIF";title.textContent=item.title;p.textContent=item.text;next.textContent=item.next;
   status.textContent="AI Companion memahami konteks: "+item.title;
   root.classList.add("is-active");
   if(voice)speak(item.speak||item.text);
 }
 function speak(text){
   if(!("speechSynthesis" in window)) {status.textContent="Voice tidak tersedia di browser ini.";return}
   window.speechSynthesis.cancel();
   const u=new SpeechSynthesisUtterance(text);u.lang="id-ID";u.rate=.96;u.pitch=1;
   const voices=window.speechSynthesis.getVoices();const id=voices.find(v=>/^id(-|_)/i.test(v.lang));if(id)u.voice=id;
   u.onstart=()=>{status.textContent="AI Companion sedang berbicara…";root.classList.add("is-speaking")};
   u.onend=()=>{status.textContent="Selesai berbicara.";root.classList.remove("is-speaking")};
   window.speechSynthesis.speak(u);
 }
 function watch(el){
   if(!el||root.contains(el))return;
   const item=knowledgeFor(el);if(!item)return;
   clearTimeout(hoverTimer);hoverTimer=setTimeout(()=>{if(el!==lastTarget){lastTarget=el;render(item,false)}},420);
 }
 function resetIdle(){clearTimeout(idleTimer);idleTimer=setTimeout(()=>{const item={title:"Bimbingan berikutnya",text:"Anda dapat menjelajahi SANGGAR tanpa harus mengingat semuanya. Mulai dari tujuan, kemudian biarkan Journey, Academy, Evidence, dan Portfolio membentuk jalurnya.",next:"Jika tujuan Anda adalah menghasilkan karya atau pendapatan, buka Creator Journey.",speak:"Anda tidak perlu mengingat semuanya. Mulai dari tujuan, dan SANGGAR akan membantu membentuk jalurnya."};render(item,false)},9000)}
 document.addEventListener("mouseover",e=>{watch(e.target.closest("a,button,[data-ai-context],h1,h2,h3,article,.domain-card,.floating-chip,.ai-card"));resetIdle()},{passive:true});
 document.addEventListener("focusin",e=>watch(e.target.closest("a,button,[data-ai-context],h1,h2,h3,article")), {passive:true});
 root.querySelector(".ai-listen").addEventListener("click",()=>speak(current.speak||current.text));
 root.querySelector(".ai-stop").addEventListener("click",()=>{window.speechSynthesis?.cancel();root.classList.remove("is-speaking")});
 root.querySelector(".ai-help").addEventListener("click",()=>{const item={title:"Pandu saya",text:"Pilih tujuan Anda. Untuk belajar kemampuan baru, gunakan Academy. Untuk membangun jalur dari tujuan ke penghasilan, gunakan Creator Journey. Untuk mengelola output dan bukti, gunakan Workspace.",next:"Rekomendasi awal: Creator Journey → Learning → Project → Evidence → Portfolio → Marketplace Match.",speak:"Pilih tujuan Anda. Untuk belajar gunakan Academy. Untuk jalur dari tujuan ke penghasilan gunakan Creator Journey. Untuk mengelola karya gunakan Workspace."};render(item,true)});
 root.querySelector(".ai-minimize").addEventListener("click",()=>root.classList.toggle("is-collapsed"));
 window.speechSynthesis?.addEventListener?.("voiceschanged",()=>{});
 resetIdle();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",makeCompanion);else makeCompanion();
})();