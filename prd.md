PRODUCT REQUIREMENTS DOCUMENT  

Aplikasi Web E-Learning: Network Learning 
Interactive 

 Bab 1: Ringkasan Eksekutif  
Aplikasi Network Learning Interactive adalah platform e-learning berbasis web yang dirancang untuk mengubah materi jaringan komputer menjadi pengalaman belajar yang menyenangkan dan kompetitif. Mengadaptasi gaya interaksi Kahoot, aplikasi ini menggabungkan modul pembelajaran singkat dengan kuis interaktif yang dilengkapi sistem reward (badges), streak, dan animasi visual untuk meningkatkan retensi dan motivasi belajar pengguna.  

Bab 2: Tujuan & Sasaran  Tujuan Utama: Menyediakan media pembelajaran interaktif untuk materi dasar jaringan komputer (LAN, WAN, MAN, Topologi, dan Perangkat Jaringan).  Pengalaman Pengguna: Menciptakan UI/UX yang dinamis, modern, dengan feedback visual instan saat pengguna berinteraksi dengan kuis.  

Bab 3: Alur Pengguna (User Flow)  Layar Sambutan (Onboarding): Pengguna membuka aplikasi dan disambut dengan layar berdesain cerah. Pengguna diwajibkan memasukkan nama (Nickname) sebelum bisa menekan tombol "Mulai Belajar".  Dashboard / Menu Utama: Setelah memasukkan nama, pengguna diarahkan ke menu utama yang menampilkan sapaan "Halo, [Nama Pengguna]!" dan menyajikan dua area utama: Materi Belajar (Kartu interaktif) dan Arena Kuis.  Sesi Kuis: Pengguna memilih kategori kuis. Soal akan muncul satu per satu dengan batas waktu tertentu.  Hasil Akhir: Menampilkan skor total, jumlah jawaban benar/salah, dan Badge yang didapatkan. 

Bab 4: Ruang Lingkup Fitur (Feature Scope)
4.1. Modul Materi Pembelajaran  LAN: Konsep dan ruang lingkup.  WAN: Skala dan implementasi.  MAN: Konektivitas antar kota.  Topologi: Star, Bus, Ring, Mesh, Tree.  Perangkat Jaringan: Router, Switch, Hub, Access Point, Kabel UTP.  
4.2. Mesin Kuis Interaktif (Quiz Engine)  
Setiap kategori materi memiliki 10 soal pilihan ganda. Layout soal menempatkan pertanyaan di tengah atas, timer berdetak di sudut, dan 4 kotak jawaban besar dengan warna berbeda (Merah, Biru, Kuning, Hijau).  
4.3. Sistem Gamifikasi & Umpan Balik (Feedback)  Streak (3x Benar Beruntun): Memunculkan efek suara kecil dan teks animasi ringan "3x Streak! On Fire!".  Amazing Popup (5x Benar Beruntun): Menghentikan layar sejenak untuk memunculkan modal/pop-up besar dengan animasi "AMAZING!".  Badges: Bronze Node (<50%), Silver Switch (50% - 70%), Golden Router (> 80%). 

 Bab 5: Spesifikasi UI/UX  Gaya Visual: Modern, playful, menggunakan bentuk geometris dengan sudut membulat.  Skema Warna: Warna solid kontras tinggi dan cerah.  Responsivitas: Harus tampil sempurna di layar desktop maupun mobile.  
 
 Bab 6: Kebutuhan Teknologi (Tech Stack)  Bahasa Inti: HTML5, CSS3, JavaScript (Vanilla/ES6).  Framework CSS: Bootstrap sangat direkomendasikan untuk Grid system, Cards, dan Modals (Alternatif: Tailwind CSS).  Library Tambahan: SweetAlert2 untuk pop-up input nama/notifikasi, dan FontAwesome untuk ikon jaringan/topologi.  
 
 Bab 7: Rencana Eksekusi Tahapan (Milestones)  Tahap 1: Setup UI/UX (HTML, CDN Bootstrap, Halaman Login).  Tahap 2: Setup Database Lokal (JSON array untuk soal dan jawaban).  Tahap 3: Pengembangan Logika Kuis (Timer, validasi jawaban).  Tahap 4: Integrasi Gamifikasi (Streak 3x dan Popup 5x).  Tahap 5: Finishing (Efek hover, perbaikan responsivitas mobile).  
 
Bab 8: Pendekatan Desain Responsif (Mobile-First)  
Untuk memastikan antarmuka tetap rapi di perangkat seluler maupun komputer meja, pengembangan akan mengadopsi pendekatan Mobile-First. Desain awal difokuskan pada layar sempit (smartphone) terlebih dahulu, kemudian tata letak akan menyesuaikan dan melebar (expand) saat diakses melalui layar yang lebih besar (tablet atau desktop).  

Bab 9: Strategi Tata Letak & Sistem Grid  
9.1. Layar Menu Utama (Materi & Pilihan Kuis)  Mobile (Smartphone): Kartu materi dan tombol kuis disusun secara vertikal dari atas ke bawah menggunakan kelas dasar seperti col-12.  Desktop (Laptop/PC): Ruang layar yang lebih luas dimanfaatkan dengan mengubah susunan menjadi grid multi-kolom (misal 3 atau 4 kolom) menggunakan kelas seperti col-md-4 atau col-lg-3.  
9.2. Layar Arena Kuis (Quiz UI)  Mobile: 4 kotak pilihan jawaban ditumpuk vertikal (1x4) atau dibentuk grid 2x2 yang ringkas agar mudah dijangkau oleh ibu jari saat digenggam.  Desktop: 4 kotak pilihan jawaban ditampilkan dalam format grid 2x2 berukuran besar di bagian tengah bawah layar.  

Bab 10: Alur Perancangan Visual  
Sebelum masuk ke tahap penulisan kode HTML, tahap perancangan wireframe dan penentuan state responsif dapat dipetakan dan disimulasikan terlebih dahulu di alat desain vektor seperti Figma. Hal ini sangat membantu untuk memastikan proporsi tombol, jarak antar elemen (padding & margin), serta keterbacaan teks sudah proporsional baik saat di kanvas berukuran ponsel maupun kanvas ukuran desktop sebelum kode Bootstrap diterapkan sepenuhnya. 

Bab 11: Optimasi Interaksi Layar (Touch vs Mouse)  Target Sentuh (Mobile): Tombol jawaban, tombol Next, dan ikon navigasi harus memiliki area sentuh minimal 48x48 piksel agar tidak menyulitkan navigasi layar sentuh.  Efek Sorot (Desktop): Pengguna yang menggunakan mouse memerlukan umpan balik visual saat kursor berada di atas tombol. Efek hover akan ditambahkan secara spesifik untuk interaksi desktop.  Dokumen ini disusun untuk keperluan tugas Media Interaktif © 2026  