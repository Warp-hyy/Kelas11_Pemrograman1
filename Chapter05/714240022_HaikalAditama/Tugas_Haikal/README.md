# ALECTO. - Website Katalog Online Shop Modern

Tugas Praktikum Pemrograman 1 (Chapter 05) — Pembuatan Website Sederhana Menggunakan HTML, CSS, dan JavaScript.

---

## 1. Identitas Mahasiswa

* **Nama Lengkap:** Haikal Aditama
* **NIM / NPM:** 714240022
* **Tema Website:** 2. Online Shop (ALECTO SHOP)

---

## 2. Deskripsi Lengkap Website

**ALECTO.** (*ALECTO SHOP*) merupakan sebuah platform website katalog *e-commerce* (*Online Shop*) sederhana yang berfokus pada penjualan produk pakaian (*fashion apparel*), sepatu, dan aksesoris gaya hidup modern. Website ini dirancang dengan pendekatan desain *Warm Minimalist*, memadukan palet warna krem hangat (*beige*), tipografi yang tegas, serta tata letak yang bersih agar pengunjung dapat menjelajahi produk dengan nyaman dan fokus pada visual barang yang ditawarkan.

Tujuan utama dari pembuatan website **ALECTO.** adalah mengimplementasikan konsep dasar pengembangan web *front-end* yang mencakup struktur dokumen yang terorganisir (HTML5), estetika visual serta tata letak responsif yang mampu beradaptasi di layar komputer maupun ponsel pintar (CSS3), serta logika pemrograman sisi klien untuk menciptakan pengalaman berbelanja yang interaktif dan dinamis (JavaScript).

---

## 3. Struktur Halaman & Navigasi

Website ini dibangun dalam format *Single Page Application* sederhana yang terbagi ke dalam beberapa bagian utama:

1. **Header & Bar Navigasi (Sticky Navbar):**
   Terletak di bagian paling atas halaman yang memuat identitas brand **ALECTO.**, menu tautan navigasi cepat (*Home*, *Kategori*, *Produk*, *Tentang*), serta tombol indikator **Keranjang Belanja** yang menampilkan jumlah barang secara *real-time*.
2. **Hero Section (Halaman Utama):**
   Menampilkan pesan pembuka utama *"Belanja Lebih Mudah, Gaya Lebih Berkelas."* yang dilengkapi tombol aksi cepat (*Call-to-Action*) **Jelajahi Produk**, statistik ringkas keunggulan toko (*100% Produk Pilihan*, *Easy Shopping Experience*, *Best Quality Products*), serta visual banner koleksi terbaru (*New Collection - Find Your Favorite*).
3. **Bagian Kategori & Katalog Produk:**
   Area utama tempat pengguna melihat daftar produk lengkap beserta foto, kategori, harga, dan tombol untuk memasukkan barang ke dalam keranjang belanja.
4. **Bagian Tentang Kami (About) & Footer:**
   Menyajikan informasi singkat mengenai komitmen kualitas layanan dari ALECTO SHOP serta informasi hak cipta di bagian bawah halaman.

---

## 4. Fitur & Interaksi JavaScript

Untuk memenuhi ketentuan interaktivitas website, proyek ini mengimplementasikan beberapa fitur berbasis **Vanilla JavaScript (DOM Manipulation)**:

1. **Penyaringan Kategori & Pencarian Produk Dinamis (Live Filtering):**
   Pengguna dapat memilih kategori produk tertentu atau mencari barang yang diinginkan secara langsung. JavaScript akan menyaring dan memperbarui tampilan daftar produk di layar seketika tanpa perlu memuat ulang (*reload*) halaman web.
2. **Sistem Manajemen Keranjang Belanja (Interactive Shopping Cart):**
   Setiap kali pengguna menekan tombol tambah ke keranjang pada produk, JavaScript secara otomatis menghitung ulang jumlah barang pada badge tombol **Keranjang**, menyimpan daftar produk yang dipilih, menjumlahkan total harga belanjaan secara akurat, serta menyediakan fitur hapus item dan konfirmasi *Checkout*.
3. **Navigasi Interaktif & Responsivitas Antarmuka (Responsive UI Interaction):**
   Dilengkapi dengan efek perpindahan halaman yang halus (*smooth scrolling*) saat menu navigasi diklik, jendela *pop-up* (*modal*) untuk menampilkan rincian keranjang belanja, serta penyesuaian tata letak otomatis (*responsive layout*) ketika diakses melalui perangkat berlayar kecil (Mobile/Tablet).

---

## 5. Teknologi yang Digunakan

* **HTML5:** Menyusun kerangka semantik halaman (`header`, `nav`, `section`, `footer`).
* **CSS3:** Mengatur desain visual, skema warna, tata letak modern menggunakan *Flexbox* dan *CSS Grid*, serta *Media Queries* untuk tampilan responsif.
* **JavaScript:** Mengelola data produk, logika keranjang belanja, penyaringan katalog, dan interaksi pengguna pada halaman.