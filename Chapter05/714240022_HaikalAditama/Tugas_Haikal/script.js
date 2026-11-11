
/* =====================================
   ALECTO SHOP - DATA PRODUK
===================================== */

const products = [

    {
        id: 1,
        name: "Classic White Shirt",
        category: "fashion",
        price: 125000,
        image: "assets/images/kameja_putih.jpg"
    },

    {
        id: 2,
        name: "Casual Sneakers",
        category: "fashion",
        price: 275000,
        image: "assets/images/sneakers.jpg"
    },

    {
        id: 3,
        name: "Wireless Headphone",
        category: "electronics",
        price: 350000,
        image: "assets/images/headphone.jpg"
    },

    {
        id: 4,
        name: "Smart Watch",
        category: "electronics",
        price: 450000,
        image: "assets/images/smartwatch.jpg"
    },

    {
        id: 5,
        name: "Minimalist Backpack",
        category: "accessories",
        price: 185000,
        image: "assets/images/backpack.jpg"
    },

    {
        id: 6,
        name: "Classic Sunglasses",
        category: "accessories",
        price: 95000,
        image: "assets/images/sunglasses.jpg"
    },

    {
        id: 7,
        name: "Denim Jacket",
        category: "fashion",
        price: 220000,
        image: "assets/images/denim-jacket.jpg"
    },

    {
        id: 8,
        name: "Digital Camera",
        category: "electronics",
        price: 850000,
        image: "assets/images/camera.jpg"
    }

];


/* =====================================
   VARIABEL UTAMA
===================================== */

let cart = [];

let selectedCategory = "all";

const productList = document.getElementById("product-list");

const searchInput = document.getElementById("search-input");

const categoryButtons = document.querySelectorAll(".category-card");

const cartModal = document.getElementById("cart-modal");

const cartItems = document.getElementById("cart-items");

const cartCount = document.getElementById("cart-count");

const cartTotal = document.getElementById("cart-total");

const emptyMessage = document.getElementById("empty-message");

const productDescription = document.getElementById("product-description");


/* =====================================
   FORMAT HARGA RUPIAH
===================================== */

function formatRupiah(price) {

    return new Intl.NumberFormat("id-ID", {

        style: "currency",

        currency: "IDR",

        maximumFractionDigits: 0

    }).format(price);

}


/* =====================================
   MENAMPILKAN PRODUK
===================================== */

function displayProducts() {

    const keyword = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product => {

        const matchName = product.name
            .toLowerCase()
            .includes(keyword);

        const matchCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        return matchName && matchCategory;

    });


    productList.innerHTML = "";

    emptyMessage.style.display =
        filteredProducts.length === 0 ? "block" : "none";


    filteredProducts.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

            </div>

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>${product.name}</h3>

                <p class="product-price">
                    ${formatRupiah(product.price)}
                </p>

                <button
                    class="add-button"
                    data-id="${product.id}"
                >
                    + Tambah ke Keranjang
                </button>

            </div>

        `;

        productList.appendChild(card);

    });


    // Deskripsi sesuai kategori

    const descriptions = {

        all: "Temukan berbagai produk terbaik dari koleksi kami.",

        fashion: "Temukan pilihan fashion untuk menunjang penampilanmu.",

        electronics: "Jelajahi produk teknologi modern pilihan kami.",

        accessories: "Lengkapi penampilanmu dengan aksesoris pilihan."

    };

    productDescription.textContent =
        descriptions[selectedCategory];

}


/* =====================================
   FITUR PENCARIAN PRODUK
===================================== */

searchInput.addEventListener("input", () => {

    displayProducts();

});


/* =====================================
   FITUR FILTER KATEGORI
===================================== */

function selectCategory(category, shouldScroll = true) {

    selectedCategory = category;


    // Mengaktifkan tombol kategori yang dipilih

    categoryButtons.forEach(button => {

        button.classList.toggle(

            "active",

            button.dataset.category === category

        );

    });


    // Memperbarui produk

    displayProducts();


    // Mengarahkan halaman ke katalog produk

    if (shouldScroll) {

        document.getElementById("products").scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

}


// Event klik kategori

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        selectCategory(button.dataset.category);

    });

});


/* =====================================
   KATEGORI PADA FOOTER
===================================== */

document.querySelectorAll("[data-footer-category]").forEach(link => {

    link.addEventListener("click", () => {

        selectCategory(link.dataset.footerCategory, false);

    });

});


/* =====================================
   TAMBAH PRODUK KE KERANJANG
===================================== */

productList.addEventListener("click", event => {

    const button = event.target.closest(".add-button");

    if (!button) return;


    const productId = Number(button.dataset.id);

    const product = products.find(item => item.id === productId);


    const existingItem = cart.find(item => item.id === productId);


    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    updateCart();

    alert(product.name + " berhasil ditambahkan ke keranjang!");

});


/* =====================================
   MEMPERBARUI KERANJANG
===================================== */

function updateCart() {

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <p class="cart-empty">
                Keranjang belanjamu masih kosong.
            </p>

        `;

    }


    cart.forEach(item => {

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
            >

            <div class="cart-item-info">

                <h4>${item.name}</h4>

                <p>${formatRupiah(item.price)}</p>

                <div class="quantity-control">

                    <button
                        data-action="minus"
                        data-id="${item.id}"
                    >
                        -
                    </button>

                    <span>${item.quantity}</span>

                    <button
                        data-action="plus"
                        data-id="${item.id}"
                    >
                        +
                    </button>

                </div>

            </div>

            <button
                class="remove-button"
                data-action="remove"
                data-id="${item.id}"
            >
                Hapus
            </button>

        `;


        cartItems.appendChild(cartItem);

    });


    // Menghitung total jumlah barang

    const totalQuantity = cart.reduce(

        (total, item) => total + item.quantity,

        0

    );


    // Menghitung total harga

    const totalPrice = cart.reduce(

        (total, item) => total + (item.price * item.quantity),

        0

    );


    cartCount.textContent = totalQuantity;

    cartTotal.textContent = formatRupiah(totalPrice);

}


/* =====================================
   MENGATUR JUMLAH DAN HAPUS PRODUK
===================================== */

cartItems.addEventListener("click", event => {

    const button = event.target.closest("button");

    if (!button) return;


    const action = button.dataset.action;

    const productId = Number(button.dataset.id);


    const item = cart.find(product => product.id === productId);

    if (!item) return;


    if (action === "plus") {

        item.quantity++;

    }

    else if (action === "minus") {

        item.quantity--;

        if (item.quantity <= 0) {

            cart = cart.filter(product => product.id !== productId);

        }

    }

    else if (action === "remove") {

        cart = cart.filter(product => product.id !== productId);

    }


    updateCart();

});


/* =====================================
   MEMBUKA KERANJANG
===================================== */

document.getElementById("open-cart").addEventListener("click", () => {

    cartModal.classList.add("show");

});


/* =====================================
   MENUTUP KERANJANG
===================================== */

document.getElementById("close-cart").addEventListener("click", () => {

    cartModal.classList.remove("show");

});


cartModal.addEventListener("click", event => {

    if (event.target === cartModal) {

        cartModal.classList.remove("show");

    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        cartModal.classList.remove("show");

    }

});


/* =====================================
   SIMULASI CHECKOUT
===================================== */

document.getElementById("checkout-button").addEventListener("click", () => {

    if (cart.length === 0) {

        alert("Keranjang belanjamu masih kosong!");

        return;

    }


    const total = cart.reduce(

        (sum, item) => sum + (item.price * item.quantity),

        0

    );


    alert(

        "Terima kasih telah berbelanja di ALECTO SHOP!\n\n" +

        "Total belanja: " + formatRupiah(total) +

        "\n\nIni merupakan simulasi checkout."

    );


    cart = [];

    updateCart();

    cartModal.classList.remove("show");

});


/* =====================================
   NAVBAR MOBILE
===================================== */

document.getElementById("menu-toggle").addEventListener("click", () => {

    document.getElementById("nav-menu").classList.toggle("show");

});


document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("nav-menu").classList.remove("show");

    });

});


/* =====================================
   MENJALANKAN WEBSITE
===================================== */

displayProducts();

updateCart();
