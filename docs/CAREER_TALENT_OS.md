# SANGGAR Career & Talent OS

## Tujuan

Career & Talent OS mengubah data kemampuan yang sudah dibangun pengguna menjadi peluang karier dan kolaborasi yang lebih relevan.

Alur utama:

**Skill → Evidence → Portfolio → Talent Profile → Opportunity → Match → Application → Engagement**

## Komponen

### Talent Profile
Profil profesional yang dapat dikontrol pengguna: headline, ringkasan, availability, preferensi kerja, dan visibility.

Profil publik tidak berarti seluruh data pengguna menjadi publik.

### Talent Preferences
Preferensi pengguna untuk tipe peluang, kategori, lokasi, minimum rate, dan mata uang. Preferensi adalah sinyal untuk membantu pencarian dan rekomendasi, bukan izin untuk melakukan profiling sensitif.

### Talent Profile Skills
Menghubungkan talent profile dengan skill yang diprioritaskan pengguna. Sumber skill tetap berada pada Skill Graph SANGGAR sehingga tidak ada duplikasi data.

### Talent Opportunity Match
Menyimpan kandidat peluang yang cocok dengan profil. Match memiliki score, reasons, source, dan status. Source membedakan rule-based, AI-assisted, dan manual.

AI hanya membantu rekomendasi. AI tidak boleh secara otomatis menentukan kelayakan seseorang untuk pekerjaan tanpa kebijakan, transparansi, dan kontrol yang sesuai.

### Talent Engagement
Mencatat perjalanan setelah aplikasi: application, interview, contract, hire, collaboration. Lifecycle: **active → completed/cancelled**.

## Prinsip matching

Prioritas sinyal:
1. Skill yang relevan
2. Evidence yang relevan
3. Portfolio
4. Pengalaman/proyek
5. Preferensi kerja
6. Ketersediaan
7. Budget/rate
8. Lokasi jika memang relevan

SANGGAR harus dapat menjelaskan alasan sebuah peluang direkomendasikan.

Contoh:
> Cocok karena Anda memiliki skill UI Design level 7, tiga evidence terkait, portfolio yang relevan, dan preferensi kerja hybrid.

Bukan:
> Anda cocok karena AI menilai kepribadian Anda.

## Privacy & fairness

- Pengguna mengontrol visibility talent profile.
- Data pribadi tidak otomatis dipublikasikan.
- Profiling sensitif dilarang tanpa dasar kebijakan yang jelas.
- Matching harus dapat diaudit.
- Pengguna dapat menolak/dismiss rekomendasi.
- AI-assisted matching harus dapat dibedakan dari keputusan manusia.
- Sistem tidak boleh menjadikan atribut sensitif sebagai dasar keputusan karier.

## Hubungan dengan marketplace

Marketplace menangani: **Jasa → Produk → Order**.

Career & Talent menangani: **Talent → Opportunity → Application → Engagement**.

Keduanya berbagi fondasi: **Identity → Skill → Evidence → Portfolio**.

## Tahap berikutnya

- talent search
- recruiter workspace
- company talent pools
- interview workflow
- hiring pipeline
- contracts
- workforce planning
- competency gap analysis
- career path
- internal mobility
- organization talent intelligence

Fondasi finansial dan payroll tidak dicampur ke tahap ini; keduanya masuk Business/Enterprise OS setelah workflow talent stabil.
