// MENU NAVIGASI
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("show");
});

// MENUTUP MENU SETELAH DIKLIK
document.querySelectorAll("#navMenu a").forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("show");
    });
});

// PENCARIAN WISATA
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
const noResult = document.getElementById("noResult");

let selectedCategory = "semua";

function filterWisata() {
    const keyword = searchInput.value.toLowerCase();
    let jumlah = 0;

    cards.forEach(function(card) {
        const nama = card.dataset.name.toLowerCase();
        const kategori = card.dataset.category;

        const cocokNama = nama.includes(keyword);
        const cocokKategori =
            selectedCategory === "semua" ||
            kategori === selectedCategory;

        if (cocokNama && cocokKategori) {
            card.style.display = "block";
            jumlah++;
        } else {
            card.style.display = "none";
        }
    });

    noResult.style.display = jumlah === 0 ? "block" : "none";
}

searchInput.addEventListener("input", filterWisata);

// FILTER KATEGORI
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        filterWisata();
    });
});

// DETAIL WISATA
const detailButtons = document.querySelectorAll(".detail-btn");
const detailModal = document.getElementById("detailModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");
const mapButton = document.getElementById("mapButton");

detailButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const nama = button.dataset.name;
        const deskripsi = button.dataset.description;

        modalTitle.textContent = nama;
        modalDescription.textContent = deskripsi;

        mapButton.onclick = function() {
            const lokasi = encodeURIComponent(nama + ", Pacitan");
            window.open(
                "https://www.google.com/maps/search/?api=1&query=" + lokasi,
                "_blank"
            );
        };

        detailModal.style.display = "flex";
    });
});

// MENUTUP DETAIL
closeModal.addEventListener("click", function() {
    detailModal.style.display = "none";
});

detailModal.addEventListener("click", function(event) {
    if (event.target === detailModal) {
        detailModal.style.display = "none";
    }
});

// TOMBOL KEMBALI KE ATAS
const topButton = document.getElementById("topButton");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});