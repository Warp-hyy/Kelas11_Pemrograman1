# NgodingYuk - Platform Kursus Coding

Platform pembelajaran interaktif untuk kursus coding dengan fitur kuis, progress tracking, dan tema gelap/terang.

## Identitas Mahasiswa

**Nama:** Rahmatan Gani
**NIM:** 714260001
**Kelas:** 1A(11)  

## Deskripsi Website

NgodingYuk adalah platform e-learning yang dibangun untuk membantu pemula belajar coding dari dasar. Website ini menyediakan:

- **Katalog Kursus:** 6 kursus berbeda dengan kategori web, backend, dan database
- **Sistem Pencarian & Filter:** Cari dan filter kursus berdasarkan kategori
- **Kuis Interaktif:** 5 soal untuk menguji pemahaman materi
- **Progress Tracker:** Checklist materi dengan progress bar yang terupdate
- **Dark/Light Theme:** Toggle tema gelap dan terang, tersimpan di localStorage

Dibangun dengan HTML, CSS, dan JavaScript murni (tanpa framework atau library).

## Fitur Utama

### 1. Navbar & Menu
- Logo "NgodingYuk" dengan warna aksen cyan
- Menu navigasi (Kursus, Kuis, Progress)
- Hamburger menu responsif di mobile
- Tombol toggle tema gelap/terang

### 2. Hero Section
- Judul menarik dengan tagline
- Tombol "Mulai Belajar" yang scroll ke bagian kursus

### 3. Daftar Kursus
- 6 kartu kursus dengan judul, deskripsi, kategori, level, durasi
- Search bar untuk mencari kursus
- Filter tombol (Semua, Web, Backend, Database)
- Pesan "Kursus tidak ditemukan" jika pencarian/filter tidak ada hasil
- Responsive grid: 1 kolom di mobile, 3 kolom di desktop

### 4. Kuis Interaktif
- 5 soal dengan multiple choice
- Navigasi sebelumnya/lanjut antar soal
- Halaman hasil dengan skor dan persentase
- Tombol ulangi untuk mengerjakan kuis lagi

### 5. Progress Belajar
- Checklist 5 materi pembelajaran
- Progress bar visual yang terupdate
- Persentase progress yang ditampilkan
- Data tersimpan di localStorage

### 6. Footer
- Copyright dan deskripsi singkat

## Fitur JavaScript (4 Fitur Utama)

### Fitur 1: Cari & Filter Kursus
**Alur:** User mengetik di search bar atau klik filter kategori → fungsi `handleSearch()` / `handleFilter()` disimpan di variabel global `cariSekarang` / `filterSekarang` → fungsi `tampilkanKursus()` loop array kursus, filter berdasarkan kategori dan pencarian → update DOM dengan kartu kursus atau pesan "Kursus tidak ditemukan".

**Kode utama:** Loop `for` di `tampilkanKursus()` untuk filter dan render, `filter()` built-in, event listener di search input dan filter buttons.

### Fitur 2: Kuis Interaktif
**Alur:** User klik "Mulai Kuis" → state `quizState` set ke mulai → `tampilkanKuis()` render soal dari array `daftarSoal` → user pilih jawaban disimpan di `quizState.jawaban` → klik "Lanjut" increment `quizState.soalSekarang` → setelah soal terakhir, `tampilkanHasilKuis()` hitung skor dengan loop dan tampilkan persentase.

**Kode utama:** Object state `quizState`, array `daftarSoal` dengan soal dan jawaban benar, loop di `tampilkanHasilKuis()` untuk hitung skor, conditional untuk render soal atau hasil.

### Fitur 3: Progress Tracking
**Alur:** Saat halaman load, `initProgress()` ambil data dari localStorage → set checkbox yang sudah tercentang → user check/uncheck checkbox → event listener trigger `hitungProgress()` → loop semua checkbox, hitung yang tercentang → hitung persentase → update DOM progress bar dan simpan data baru ke localStorage.

**Kode utama:** `localStorage.getItem()` / `localStorage.setItem()` untuk persist data, loop checkbox di `hitungProgress()`, event listener `change` di setiap checkbox.

### Fitur 4: Toggle Dark/Light Theme
**Alur:** Saat halaman load, `initTheme()` ambil tema dari localStorage (default dark) → set `document.body.className` ke class tema → user klik tombol toggle → `toggleTheme()` switch antara `dark-theme` dan `light-theme` → simpan ke localStorage → CSS auto update warna berdasarkan class.

**Kode utama:** `localStorage` untuk persist tema, `document.body.className` untuk ganti class, CSS custom properties `--bg`, `--text` dst. yang berbeda per theme.

## Tech Stack

- **HTML5** - Struktur semantic
- **CSS3** - Styling responsif dengan CSS variables
- **JavaScript Vanilla** - Logika interaktif tanpa framework
- **localStorage** - Persistent storage untuk tema dan progress

## Cara Menjalankan

gunakan ekstensi open with live server 

## File Structure

```
NgodingYuk/
├── index.html      # Struktur HTML halaman
├── style.css       # Styling responsif dengan dark/light theme
├── script.js       # Logika JavaScript (4 fitur utama)
└── README.md       # File ini
```

## Catatan

- Tema dan progress tersimpan di localStorage (persisten antar session)
- Kuis data disimpan sementara dalam session, akan reset saat reload
- Mobile-first responsive design dengan breakpoint 768px
- Tidak ada external dependencies

---

**Dibuat sebagai tugas kuliah Pemrograman Web**  

