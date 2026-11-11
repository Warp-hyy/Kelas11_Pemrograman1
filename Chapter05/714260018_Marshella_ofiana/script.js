// ===============================
// FITUR 1: TAMBAH KE KERANJANG
// ===============================

let jumlahKeranjang = 0;

const tombolTambah = document.querySelectorAll(".addCart");
const cartCount = document.getElementById("cartCount");

tombolTambah.forEach(function(tombol) {
    tombol.addEventListener("click", function() {
        jumlahKeranjang++;

        cartCount.textContent = jumlahKeranjang;

        alert("Produk berhasil ditambahkan ke keranjang!");
    });
});


// ===============================
// FITUR 2: DARK MODE
// ===============================

const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});


// ===============================
// FITUR 3: PENCARIAN PRODUK
// ===============================

const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", function() {
    const keyword = searchInput.value.toLowerCase();

    products.forEach(function(product) {
        const productName = product.querySelector("h3")
            .textContent.toLowerCase();

        if (productName.includes(keyword)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});


// ===============================
// TOMBOL KERANJANG
// ===============================

const cartButton = document.getElementById("cartButton");

cartButton.addEventListener("click", function() {
    alert("Jumlah produk di keranjang: " + jumlahKeranjang);
});