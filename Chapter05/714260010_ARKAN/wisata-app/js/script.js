/* ==================================================
   FILE   : js/script.js
   FUNGSI : Seluruh logika aplikasi WisataNusantara

   Isi file ini terbagi menjadi 4 bagian utama:
     1. DATABASE STATIS  -> data destinasi wisata
     2. TAMPILKAN KATALOG -> merender kartu destinasi
     3. PROSES PEMESANAN -> menghitung & menyimpan pesanan
     4. RIWAYAT PESANAN  -> membaca & menghapus pesanan

   Data pemesanan disimpan di localStorage sehingga
   tidak hilang walaupun halaman di-refresh.
   ================================================== */

/* =====================================================
   BAGIAN 1 : DATABASE STATIS (DATA DESTINASI WISATA)
   Array berisi objek. Setiap objek = 1 paket wisata.
   ===================================================== */
const dataDestinasi = [
  {
    id: 1,
    nama: "Raja Ampat",
    lokasi: "Papua Barat Daya",
    gambar: "img/raja-ampat.png",
    deskripsi: "Kepulauan dengan pemandangan karst ikonik dan menjadi salah satu titik selam terbaik di dunia.",
    harga: 4500000,
    durasi: "4 Hari 3 Malam"
  },
  {
    id: 2,
    nama: "Gunung Bromo",
    lokasi: "Jawa Timur",
    gambar: "img/bromo.png",
    deskripsi: "Menikmati matahari terbit dari Penanjakan dengan lanskap gunung berapi yang megah.",
    harga: 850000,
    durasi: "2 Hari 1 Malam"
  },
  {
    id: 3,
    nama: "Pantai Bali",
    lokasi: "Pulau Dewata, Bali",
    gambar: "img/bali.png",
    deskripsi: "Pantai berpasir putih, pura bersejarah, dan kesenian budaya yang memukau.",
    harga: 1200000,
    durasi: "3 Hari 2 Malam"
  },
  {
    id: 4,
    nama: "Borobudur & Prambanan",
    lokasi: "Yogyakarta",
    gambar: "img/jogja.png",
    deskripsi: "Mengunjungi dua candi terbesar di Indonesia serta wisata Malioboro dan Keraton.",
    harga: 750000,
    durasi: "2 Hari 1 Malam"
  },
  {
    id: 5,
    nama: "Labuan Bajo & Komodo",
    lokasi: "Nusa Tenggara Timur",
    gambar: "img/labuan-bajo.png",
    deskripsi: "Berlayar menuju Pulau Komodo, trekking Pulau Padar, dan snorkeling di Pink Beach.",
    harga: 2800000,
    durasi: "3 Hari 2 Malam"
  },
  {
    id: 6,
    nama: "Tana Toraja",
    lokasi: "Sulawesi Selatan",
    gambar: "img/toraja.png",
    deskripsi: "Budaya unik, rumah adat tongkonan, dan lanskap pegunungan yang sejuk.",
    harga: 1500000,
    durasi: "3 Hari 2 Malam"
  }
];

/* Nama "meja" penyimpanan di localStorage (ibarat nama tabel database) */
const KUNCI_PENYIMPANAN = "daftarPesanan";

/* =====================================================
   BAGIAN 2 : TAMPILKAN KATALOG WISATA
   ===================================================== */

/* formatRupiah : mengubah angka menjadi teks mata uang
   contoh : 1200000  ->  "Rp 1.200.000"                */
function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

/* tampilkanKatalog : membuat kartu destinasi satu per
   satu dari array dataDestinasi lalu menaruhnya ke dalam
   elemen <div id="daftar-katalog">                      */
function tampilkanKatalog() {
  const wadah = document.getElementById("daftar-katalog");

  dataDestinasi.forEach(function (item) {
    const kartu = document.createElement("div");
    kartu.className = "kartu";

    kartu.innerHTML = `
      <img src="${item.gambar}" alt="Paket wisata ${item.nama}">
      <div class="kartu-badan">
        <span class="badge-lokasi">${item.lokasi}</span>
        <h3>${item.nama}</h3>
        <p>${item.deskripsi}</p>
        <div class="kartu-info">
          <span class="harga">${formatRupiah(item.harga)}</span>
          <span class="durasi">${item.durasi}</span>
        </div>
        <button class="tombol tombol-utama" onclick="pilihPaket(${item.id})">
          Pesan Paket Ini
        </button>
      </div>
    `;

    wadah.appendChild(kartu);
  });
}

/* isiDropdownPaket : mengisi <select> pada form pemesanan
   dengan daftar paket dari database statis               */
function isiDropdownPaket() {
  const select = document.getElementById("input-paket");

  dataDestinasi.forEach(function (item) {
    const opsi = document.createElement("option");
    opsi.value = item.id;
    opsi.textContent = `${item.nama} - ${formatRupiah(item.harga)}`;
    select.appendChild(opsi);
  });
}

/* pilihPaket : dipanggil saat tombol "Pesan Paket Ini"
   diklik. Fungsinya memilih paket di dropdown lalu
   menggulir halaman ke form pemesanan.                   */
function pilihPaket(idPaket) {
  document.getElementById("input-paket").value = idPaket;
  hitungTotal();
  document.getElementById("pesan").scrollIntoView({ behavior: "smooth" });
}

/* =====================================================
   BAGIAN 3 : PROSES PEMESANAN
   ===================================================== */

/* hitungTotal : total = harga paket x jumlah orang.
   Dijalankan setiap kali paket / jumlah orang berubah.   */
function hitungTotal() {
  const idPaket   = document.getElementById("input-paket").value;
  const jumlah    = Number(document.getElementById("input-jumlah").value);
  const labelTotal = document.getElementById("total-harga");

  /* Jika paket belum dipilih, tampilkan Rp 0 */
  if (idPaket === "") {
    labelTotal.textContent = "Rp 0";
    return;
  }

  const paket = dataDestinasi.find(function (item) {
    return item.id === Number(idPaket);
  });

  labelTotal.textContent = formatRupiah(paket.harga * jumlah);
}

/* simpanPesanan : dipanggil saat form dikirim.
   1) Ambil data form  2) Validasi  3) Simpan ke localStorage
   4) Tampilkan riwayat terbaru                           */
function simpanPesanan(event) {
  event.preventDefault(); /* cegah halaman ter-reload */

  const nama    = document.getElementById("input-nama").value.trim();
  const idPaket = Number(document.getElementById("input-paket").value);
  const tanggal = document.getElementById("input-tanggal").value;
  const jumlah  = Number(document.getElementById("input-jumlah").value);

  /* --- Validasi sederhana --- */
  if (nama === "" || idPaket === 0 || tanggal === "" || jumlah < 1) {
    alert("Mohon lengkapi semua data terlebih dahulu!");
    return;
  }

  /* --- Cari data paket dari database statis --- */
  const paket = dataDestinasi.find(function (item) {
    return item.id === idPaket;
  });

  /* --- Susun satu objek pesanan --- */
  const pesananBaru = {
    id: Date.now(),          /* id unik dari angka waktu */
    nama: nama,
    paket: paket.nama,
    hargaSatuan: paket.harga,
    tanggalBerangkat: tanggal,
    jumlahOrang: jumlah,
    total: paket.harga * jumlah,
    waktuPesan: new Date().toLocaleString("id-ID")
  };

  /* --- Simpan : baca data lama -> tambah -> tulis lagi --- */
  const daftar = bacaSemuaPesanan();
  daftar.push(pesananBaru);
  localStorage.setItem(KUNCI_PENYIMPANAN, JSON.stringify(daftar));

  /* --- Tampilkan hasil --- */
  tampilkanRiwayat();
  document.getElementById("form-pesanan").reset();
  document.getElementById("total-harga").textContent = "Rp 0";
  alert(`Terima kasih ${nama}! Pesanan ${paket.nama} berhasil disimpan.`);
}

/* =====================================================
   BAGIAN 4 : RIWAYAT PESANAN (baca & hapus localStorage)
   ===================================================== */

/* bacaSemuaPesanan : mengambil seluruh pesanan dari
   localStorage. Jika belum ada, kembalikan array kosong. */
function bacaSemuaPesanan() {
  const dataTeks = localStorage.getItem(KUNCI_PENYIMPANAN);
  if (dataTeks === null) {
    return [];
  }
  return JSON.parse(dataTeks);
}

/* tampilkanRiwayat : merender daftar pesanan dari
   localStorage ke bagian #riwayat                        */
function tampilkanRiwayat() {
  const wadah   = document.getElementById("daftar-riwayat");
  const daftar  = bacaSemuaPesanan();
  wadah.innerHTML = ""; /* bersihkan tampilan lama */

  /* Jika belum ada pesanan, tampilkan pesan kosong */
  if (daftar.length === 0) {
    wadah.innerHTML = `
      <div class="kosong">
        Belum ada pesanan. Pilih paket wisata di atas untuk memesan.
      </div>
    `;
    return;
  }

  daftar.forEach(function (p) {
    const item = document.createElement("div");
    item.className = "item-riwayat";
    item.innerHTML = `
      <div class="info-pesanan">
        <h4>${p.paket} &mdash; ${formatRupiah(p.total)}</h4>
        <p>
          Atas nama ${p.nama} &bull; ${p.jumlahOrang} orang &bull;
          Berangkat ${p.tanggalBerangkat} &bull; Dipesan ${p.waktuPesan}
        </p>
      </div>
      <button class="hapus" onclick="hapusPesanan(${p.id})">Hapus</button>
    `;
    wadah.appendChild(item);
  });
}

/* hapusPesanan : menghapus 1 pesanan berdasarkan id,
   lalu menampilkan ulang daftar                          */
function hapusPesanan(idPesanan) {
  const daftarBaru = bacaSemuaPesanan().filter(function (p) {
    return p.id !== idPesanan;
  });

  localStorage.setItem(KUNCI_PENYIMPANAN, JSON.stringify(daftarBaru));
  tampilkanRiwayat();
}

/* =====================================================
   BAGIAN 5 : INISIALISASI SAAT HALAMAN DIBUKA
   Semua fungsi dijalankan agar aplikasi siap digunakan.
   ===================================================== */
document.addEventListener("DOMContentLoaded", function () {
  tampilkanKatalog();      /* render kartu destinasi  */
  isiDropdownPaket();      /* isi dropdown form       */
  tampilkanRiwayat();      /* render riwayat pesanan  */

  /* Pasang "pendengar" event pada form dan input */
  document.getElementById("form-pesanan").addEventListener("submit", simpanPesanan);
  document.getElementById("input-paket").addEventListener("change", hitungTotal);
  document.getElementById("input-jumlah").addEventListener("input", hitungTotal);
});
