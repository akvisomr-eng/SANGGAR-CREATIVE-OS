# SANGGAR Open Web Intelligence

SANGGAR mengintegrasikan [mendel5/alternative-front-ends](https://github.com/mendel5/alternative-front-ends) sebagai **reference intelligence**, bukan sebagai dependency aplikasi.

Repository sumber adalah katalog alternative front-end/open-source client untuk layanan web populer. Isinya mencakup video, music, social, search, translation, media, collaboration dan privacy redirect. Repository tersebut berlisensi AGPL-3.0 dan README-nya sendiri menjelaskan bahwa cakupannya telah berkembang melampaui sekadar "front-end".

## Keputusan arsitektur

Jangan menyalin source code atau mengemas seluruh daftar sebagai runtime dependency SANGGAR.

SANGGAR mengambil pola dan metadata konseptual:

```
SERVICE
  ↓
ALTERNATIVE DISCOVERY
  ↓
HEALTH / MAINTENANCE
  ↓
PRIVACY / LICENSE / RISK
  ↓
CAPABILITY MATCH
  ↓
SERVER-SIDE ROUTING
  ↓
USER EXPERIENCE
```

### Mengapa berguna

1. **Privacy Web Gateway** — creator dapat menemukan alternatif yang lebih privacy-aware.
2. **Alternative Instance Router** — endpoint dipilih berdasarkan health, latency, policy dan availability.
3. **Open Web Learning Discovery** — project open-source dapat menjadi sumber belajar dan skill signal.
4. **Privacy Link Normalizer** — URL dapat dibersihkan dari tracking parameter melalui policy yang dikontrol SANGGAR.

## Batas integrasi

- Tidak mengklaim kepemilikan project pihak ketiga.
- Tidak menyalin source code atau seluruh katalog ke aplikasi.
- Tidak mengandalkan public instance tanpa health check.
- Tidak menaruh credential/API key pihak ketiga di GitHub Pages.
- Tidak menjanjikan bahwa setiap alternative frontend selalu tersedia.
- License dan terms harus diperiksa per project sebelum redistribusi, embedding atau deployment.

## SANGGAR flow

```
CREATOR REQUEST
      ↓
OPEN WEB CAPABILITY MATCH
      ↓
ALTERNATIVE / INSTANCE CANDIDATES
      ↓
HEALTH + POLICY + LICENSE CHECK
      ↓
HUMAN / POLICY GATE (jika berisiko)
      ↓
SAFE CONNECTOR
      ↓
RESULT
      ↓
AUDIT + FEEDBACK
```

## Hubungan dengan SANGGAR

Integrasi ini memperkuat:

**CONNECT → RESEARCH → LEARN → CREATE → PUBLISH → EARN**

Open Web Intelligence berada di antara **API/Connector Intelligence**, **Academy**, **Data Intelligence**, **AI Research Radar** dan **Creative Studio**.

## Implementasi saat ini

- Automation catalog: 4 workflow baru.
- UI: `alternative-frontends.html`.
- Navigation: Automation Center → Open Web.
- Runtime execution tetap server-side; halaman GitHub Pages hanya discovery/UI.
