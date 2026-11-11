# Nusantara Fest – Event Organizer

Website profil dan informasi layanan *Event Organizer* (EO) yang menangani berbagai acara seperti bazar, pentas seni (pensi), lokakarya (*workshop*), dan konser musik kampus.

## Identitas Pembuat
* **Nama:** Wijdan Athar Nurfaizi
* **NIM:** 714260009
* **Kelas:** 1A

## Deskripsi Website
**Nusantara Fest** adalah halaman web statis interaktif yang dibangun menggunakan **HTML5**, **CSS3**, dan **JavaScript (Vanilla JS)**. Website ini dirancang untuk memudahkan calon klien maupun pengunjung dalam melihat alur kerja jasa EO, memantau jadwal acara mendatang, serta melakukan pendaftaran atau pengajuan pertanyaan secara langsung.

## Fitur Utama
* **Hitung Mundur Event (*Countdown Timer*).** Menampilkan sisa waktu secara *real-time* (hari, jam, menit, detik) menuju jadwal acara terdekat yang belum terlaksana.
* **Filter Jadwal Event Dinamis.** Pengguna dapat menyaring daftar acara berdasarkan kategori (*Semua, Bazar, Pensi, Workshop, Lomba*) tanpa perlu memuat ulang halaman.
* **Galeri Suasana & Tim.** Menampilkan dokumentasi acara dalam tata letak *grid* serta profil singkat tim inti penyelenggara.
* **Formulir Pendaftaran Interaktif.** Dilengkapi validasi input (nama minimal 3 karakter dan format email) serta pengisian otomatis pilihan acara saat tombol **Daftar** pada kartu event diklik.
* **Mode Terang & Gelap (*Light/Dark Theme*).** Mendukung pergantian tema tampilan secara manual maupun mengikuti pengaturan sistem perangkat pengguna.
* **Desain Responsif.** Tampilan dan menu navigasi otomatis menyesuaikan ukuran layar desktop maupun perangkat seluler (*smartphone*).

## Struktur File Proyek
```text
├── index.html      # Struktur utama halaman web
├── style.css       # Pengaturan tata letak, variabel warna tema, dan responsivitas
├── script.js       # Logika data event, filter, countdown timer, validasi form, dan tema
├── README.md       # Dokumentasi proyek
└── [file-gambar]   # Aset foto banner, cover event, dan galeri (.jpeg / .jpg)
```

## Cara Menjalankan Proyek
1. Pastikan seluruh file (`index.html`, `style.css`, `script.js`, dan file gambar) berada di dalam satu folder yang sama.
2. Buka file `index.html` menggunakan peramban web (*browser*) seperti Google Chrome, Mozilla Firefox, atau Microsoft Edge.
