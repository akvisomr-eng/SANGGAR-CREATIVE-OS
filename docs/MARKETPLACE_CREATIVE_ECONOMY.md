# SANGGAR Marketplace & Creative Economy

## Tujuan

Menghubungkan kemampuan yang sudah dibuktikan pengguna dengan peluang ekonomi:

**Skill → Evidence → Portfolio → Listing/Peluang → Proposal → Order → Pendapatan → Reputasi**

Lapisan ini membuat SANGGAR bukan hanya tempat belajar dan berkarya, tetapi juga tempat pengguna mendapatkan peluang nyata.

## Fondasi data

### Marketplace Listings
Menampung penawaran:
- jasa
- produk
- kursus
- karya kreatif
- proyek

Setiap listing memiliki pemilik, status, visibilitas, harga opsional, mata uang, dan metadata.

### Project Opportunities
Menampung peluang:
- freelance
- kontrak
- kolaborasi
- magang
- pekerjaan
- komisi
- volunteer

Peluang dapat memiliki anggaran, jadwal, tenggat, dan visibilitas.

### Opportunity Applications
Menghubungkan pengguna dengan peluang melalui proposal. Lamaran dapat menunjuk portfolio yang relevan sehingga bukti kemampuan tidak perlu digandakan.

### Orders
Mewakili hubungan transaksi antara pembeli dan penjual atau hasil dari proposal peluang.

## Prinsip

1. Portfolio dan evidence adalah sumber bukti, bukan data duplikat.
2. Listing publik hanya dapat terlihat jika memang dipublikasikan.
3. Proposal dan order bersifat privat bagi pihak yang terlibat.
4. Harga menggunakan numeric precision, bukan floating point.
5. Mata uang disimpan eksplisit.
6. Status transaksi memiliki lifecycle yang jelas.
7. Pembayaran/payout nyata akan menjadi tahap terpisah dan tidak boleh dianggap selesai hanya karena order sudah ada.
8. Reputasi harus berbasis aktivitas yang dapat dibuktikan.
9. RLS wajib pada seluruh tabel publik.
10. Data pribadi tidak boleh otomatis menjadi data marketplace publik.

## Roadmap ekonomi

### Tahap berikutnya
- service/product detail
- kategori dan taxonomy
- review/reputation
- delivery/milestone
- proposal versioning
- dispute/refund workflow
- payout abstraction
- invoice/receipt
- marketplace search

### Setelah fondasi stabil
- Career & Talent
- matching berbasis skill/evidence
- recruitment
- agency/studio workflow
- business services
- enterprise procurement
- creator monetization

## Batasan penting

SANGGAR tidak menganggap sertifikat otomatis sebagai bukti kompetensi. Evidence, portfolio, hasil proyek, review, dan verifikasi tetap memiliki provenance masing-masing.

SANGGAR juga tidak boleh melakukan profiling sensitif secara diam-diam untuk menentukan peluang ekonomi. Rekomendasi harus dapat dijelaskan, purpose-limited, dan tunduk pada kebijakan serta kontrol pengguna.

## Arsitektur

Marketplace menjadi lapisan ekonomi di atas fondasi:

**Identity → Locker → Project → Learning → Skill → Evidence → Portfolio → Creative Passport → Marketplace → Career/Talent → Business/Enterprise**

Dengan demikian pengguna dapat bergerak secara natural:

**Belajar → Berlatih → Berkarya → Membuktikan → Menampilkan → Mendapat peluang → Mengerjakan → Mendapat penghasilan → Berkembang**
