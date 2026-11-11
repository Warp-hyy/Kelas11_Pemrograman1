// ==========================================
// FITUR 1: DARK MODE TOGGLE
// ==========================================
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function() {
    // Menambahkan / menghapus class "dark-theme" di body
    document.body.classList.toggle("dark-theme");

    // Mengganti teks tombol
    if (document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "☀️ Mode Terang";
    } else {
        themeToggle.textContent = "🌙 Mode Gelap";
    }
});


// ==========================================
// FITUR 2: FILTER KATEGORI MENU
// ==========================================
const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(button => {
    button.addEventListener("click", function() {
        // Ganti status aktif pada tombol
        filterButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        const category = this.getAttribute("data-category");

        // Menyaring tampilan kartu menu
        menuCards.forEach(card => {
            const cardCategory = card.getAttribute("data-category");

            if (category === "all" || category === cardCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});


// ==========================================
// FITUR 3: HITUNG KERANJANG BELANJA & TOTAL
// ==========================================
let totalItems = 0;
let totalPrice = 0;

const cartCountNavbar = document.getElementById("cart-count");
const totalItemsEl = document.getElementById("total-items");
const totalPriceEl = document.getElementById("total-price");
const orderButtons = document.querySelectorAll(".btn-order");
const resetBtn = document.getElementById("btn-reset");
const checkoutBtn = document.getElementById("btn-checkout");

// Event saat tombol "+ Tambah" diklik
orderButtons.forEach(button => {
    button.addEventListener("click", function() {
        const itemPrice = parseInt(this.getAttribute("data-price"));
        const itemName = this.getAttribute("data-name");

        totalItems += 1;
        totalPrice += itemPrice;

        // Update tampilan ke layar
        cartCountNavbar.textContent = totalItems;
        totalItemsEl.textContent = totalItems;
        totalPriceEl.textContent = "Rp " + totalPrice.toLocaleString("id-ID");

        alert(`${itemName} berhasil ditambahkan ke pesanan!`);
    });
});

// Event Reset Pesanan
resetBtn.addEventListener("click", function() {
    if (totalItems === 0) {
        alert("Keranjang kamu masih kosong!");
        return;
    }
    
    totalItems = 0;
    totalPrice = 0;

    cartCountNavbar.textContent = 0;
    totalItemsEl.textContent = 0;
    totalPriceEl.textContent = "Rp 0";

    alert("Pesanan berhasil di-reset.");
});

// Event Checkout
checkoutBtn.addEventListener("click", function() {
    if (totalItems === 0) {
        alert("Pilih menu terlebih dahulu sebelum bayar!");
    } else {
        alert(`Terima kasih! Total pembayaran kamu sebesar Rp ${totalPrice.toLocaleString("id-ID")}. Pesanan segera diproses.`);

        totalItems = 0;
        totalPrice = 0;
        cartCountNavbar.textContent = 0;
        totalItemsEl.textContent = 0;
        totalPriceEl.textContent = "Rp 0";
    }
});