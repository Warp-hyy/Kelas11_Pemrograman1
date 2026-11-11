/* =================================
   1. SAPAAN PENGUNJUNG
================================= */

// Mengambil elemen sapaan dari HTML
const sapaan = document.getElementById("sapaan");

// Mengambil jam saat ini
const jam = new Date().getHours();

// Menentukan sapaan berdasarkan waktu
if (jam >= 5 && jam < 11) {

    sapaan.textContent =
        "Selamat pagi, selamat menjelajah!";

} else if (jam >= 11 && jam < 15) {

    sapaan.textContent =
        "Selamat siang, mari temukan tempat baru!";

} else if (jam >= 15 && jam < 18) {

    sapaan.textContent =
        "Selamat sore, waktunya berpetualang!";

} else {

    sapaan.textContent =
        "Selamat malam, rencanakan perjalananmu!";

}


/* =================================
   2. PENCARIAN DESTINASI
================================= */

// Mengambil elemen input dan kategori
const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

// Mengambil seluruh kartu wisata
const cards = document.querySelectorAll(".card");

// Membuat fungsi pencarian dan filter
function filterDestinasi() {

    // Mengambil kata yang diketik pengguna
    const keyword = searchInput.value.toLowerCase();

    // Mengambil kategori yang dipilih
    const kategori = categoryFilter.value;

    // Memeriksa setiap kartu wisata
    cards.forEach(function(card) {

        // Mengambil nama destinasi
        const nama = card.querySelector("h3")
            .textContent.toLowerCase();

        // Mengambil lokasi destinasi
        const lokasi = card.querySelector(".location")
            .textContent.toLowerCase();

        // Mengambil kategori wisata
        const kategoriWisata = card.dataset.category;

        // Memeriksa kecocokan pencarian
        const cocokNama =
            nama.includes(keyword) ||
            lokasi.includes(keyword);

        // Memeriksa kecocokan kategori
        const cocokKategori =
            kategori === "semua" ||
            kategori === kategoriWisata;

        // Menampilkan atau menyembunyikan kartu
        if (cocokNama && cocokKategori) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// Menjalankan pencarian ketika pengguna mengetik
searchInput.addEventListener(
    "input",
    filterDestinasi
);

// Menjalankan filter ketika kategori dipilih
categoryFilter.addEventListener(
    "change",
    filterDestinasi
);


/* =================================
   3. DETAIL DESTINASI
================================= */

// Mengambil seluruh tombol detail
const detailButtons =
    document.querySelectorAll(".detail-btn");

// Memberikan fungsi pada setiap tombol
detailButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Mengambil informasi dari tombol
        const informasi = button.dataset.info;

        // Menampilkan informasi kepada pengunjung
        alert(informasi);

    });

});
