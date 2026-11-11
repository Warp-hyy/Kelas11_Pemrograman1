/* ==========================================================
    Brother John & Sons - script.js
   ========================================================== */

// ---------- Data menu ----------
// Catatan: harga dan deskripsi hanya contoh, silakan sesuaikan.
const menuItems = [
  {
    id: 1,
    name: "The 1984 Cheese Burger",
    category: "burger",
    price: 65000,
    image: "1984-cheese-burger.jpg",
    featured: true,
    description: "Menu andalan: patty juicy, keju leleh, dan saus khas di roti empuk."
  },
  {
    id: 2,
    name: "Boss of The Buns",
    category: "burger",
    price: 85000,
    image: "boss-of-the-buns.jpg",
    featured: true,
    description: "Burger paling mengenyangkan, ditumpuk tebal untuk yang lapar berat."
  },
  {
    id: 3,
    name: "Shoestring Fries",
    category: "side",
    price: 25000,
    image: "shoestring-fries.jpg",
    description: "Kentang goreng renyah dengan bumbu gurih."
  },
  {
    id: 4,
    name: "Onion Rings",
    category: "side",
    price: 28000,
    image: "onion-rings.jpg",
    description: "Bawang bombay berlapis tepung krispi."
  },
  {
    id: 5,
    name: "Coleslaw",
    category: "side",
    price: 20000,
    image: "coleslaw.jpg",
    description: "Salad kol segar, pas untuk menyeimbangkan burger."
  },
  {
    id: 6,
    name: "Iced Lemon Tea",
    category: "drink",
    price: 18000,
    image: "iced-lemon-tea.jpg",
    description: "Teh dingin dengan perasan lemon."
  },
  {
    id: 7,
    name: "Chocolate Shake",
    category: "drink",
    price: 32000,
    image: "chocolate-shake.jpg",
    imagePosition: "center 30%", // supaya ceri di atas gelas tidak terpotong
    description: "Milkshake cokelat kental dan dingin."
  }
];

// ---------- Elemen yang sering dipakai ----------
const menuGrid = document.querySelector("#menuGrid");
const filterButtons = document.querySelectorAll(".chip");

const cartPanel = document.querySelector("#cart");
const cartOverlay = document.querySelector("#overlay");
const cartButton = document.querySelector("#cartOpen");
const cartCloseButton = document.querySelector("#cartClose");
const cartList = document.querySelector("#cartList");
const cartEmptyText = document.querySelector("#cartEmpty");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const checkoutButton = document.querySelector("#checkout");

const nav = document.querySelector("#nav");
const navToggle = document.querySelector("#navToggle");
const toastBox = document.querySelector("#toast");
const bookForm = document.querySelector("#bookForm");

// Isi keranjang disimpan sebagai { idMenu: jumlah }
let cart = {};

// ---------- Fungsi bantuan ----------
function formatRupiah(number) {
  return "Rp " + number.toLocaleString("id-ID");
}

let toastTimer;

function showToast(message) {
  toastBox.textContent = message;
  toastBox.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastBox.classList.remove("show");
  }, 2600);
}

// ==========================================================
// Fitur 1: tampilkan menu dan filter berdasarkan kategori
// ==========================================================
function renderMenu(category = "all") {
  const items = menuItems.filter((item) => {
    return category === "all" || item.category === category;
  });

  menuGrid.innerHTML = items
    .map((item) => {
      // dua burger andalan tampil lebih lebar, hanya saat kategori "Semua"
      const sizeClass = item.featured && category === "all" ? "big" : "";
      const imageStyle = item.imagePosition
        ? ` style="object-position: ${item.imagePosition}"`
        : "";

      return `
        <article class="card ${item.category} ${sizeClass}">
          <div class="thumb">
            <img src="assets/images/${item.image}" alt="${item.name}" loading="lazy"${imageStyle}>
          </div>
          <div class="card-body">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="price-row">
              <span class="price">${formatRupiah(item.price)}</span>
              <button class="add" data-id="${item.id}">Tambah</button>
            </div>
          </div>
        </article>`;
    })
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    renderMenu(button.dataset.cat);
  });
});

// ==========================================================
// Fitur 2: keranjang pesanan (tambah, kurangi, total harga)
// ==========================================================
function renderCart() {
  const ids = Object.keys(cart);
  let total = 0;
  let count = 0;

  cartList.innerHTML = ids
    .map((id) => {
      const item = menuItems.find((m) => m.id === Number(id));
      const qty = cart[id];

      total += item.price * qty;
      count += qty;

      return `
        <li>
          <strong>${item.name}</strong>
          <span>${formatRupiah(item.price * qty)}</span>
          <div class="qty">
            <button data-action="dec" data-id="${id}" aria-label="Kurangi">−</button>
            ${qty}
            <button data-action="inc" data-id="${id}" aria-label="Tambah">+</button>
          </div>
        </li>`;
    })
    .join("");

  cartEmptyText.hidden = ids.length > 0;
  cartTotal.textContent = formatRupiah(total);
  cartCount.textContent = count;
  checkoutButton.disabled = ids.length === 0;
}

function setCartOpen(isOpen) {
  cartPanel.classList.toggle("open", isOpen);
  cartPanel.setAttribute("aria-hidden", !isOpen);
  cartOverlay.classList.toggle("show", isOpen);
}

// klik "Tambah" di kartu menu
menuGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest(".add");
  if (!addButton) return;

  const id = Number(addButton.dataset.id);
  cart[id] = (cart[id] || 0) + 1;
  renderCart();

  const item = menuItems.find((m) => m.id === id);
  showToast(item.name + " ditambahkan");

  // animasi kecil di tombol keranjang
  cartButton.classList.remove("bump");
  void cartButton.offsetWidth; // paksa browser mengulang animasi
  cartButton.classList.add("bump");
});

// klik tombol + dan - di dalam keranjang
cartList.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const id = button.dataset.id;
  cart[id] += button.dataset.action === "inc" ? 1 : -1;

  if (cart[id] <= 0) {
    delete cart[id];
  }
  renderCart();
});

cartButton.addEventListener("click", () => setCartOpen(true));
cartCloseButton.addEventListener("click", () => setCartOpen(false));
cartOverlay.addEventListener("click", () => setCartOpen(false));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setCartOpen(false);
});

checkoutButton.addEventListener("click", () => {
  const total = cartTotal.textContent;

  cart = {};
  renderCart();
  setCartOpen(false);
  showToast("Pesanan diterima! Total " + total + ". Terima kasih.");
});

// ==========================================================
// Fitur 3: menu hamburger untuk tampilan mobile
// ==========================================================
navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// tutup menu setelah salah satu link diklik
nav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    nav.classList.remove("open");
  }
});

// ==========================================================
// Fitur 4: validasi form reservasi
// ==========================================================
const dateInput = document.querySelector("#fDate");

// tanggal paling awal = hari ini (pakai waktu lokal, bukan UTC)
dateInput.min = new Date().toLocaleDateString("en-CA");

const bookingRules = [
  {
    input: document.querySelector("#fName"),
    error: document.querySelector("#eName"),
    isValid: (value) => value.trim().length >= 3,
    message: "Nama minimal 3 huruf."
  },
  {
    input: document.querySelector("#fPhone"),
    error: document.querySelector("#ePhone"),
    isValid: (value) => /^(\+62|62|0)8\d{7,11}$/.test(value.replace(/[\s-]/g, "")),
    message: "Isi nomor HP yang valid, contoh 081234567890."
  },
  {
    input: dateInput,
    error: document.querySelector("#eDate"),
    isValid: (value) => value !== "" && value >= dateInput.min,
    message: "Pilih tanggal hari ini atau setelahnya."
  },
  {
    input: document.querySelector("#fGuests"),
    error: document.querySelector("#eGuests"),
    isValid: (value) => Number(value) >= 1 && Number(value) <= 20,
    message: "Jumlah orang antara 1 sampai 20."
  }
];

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let formIsValid = true;

  bookingRules.forEach((rule) => {
    const valid = rule.isValid(rule.input.value);

    rule.error.textContent = valid ? "" : rule.message;
    rule.input.classList.toggle("bad", !valid);

    if (!valid) formIsValid = false;
  });

  const successMessage = document.querySelector("#bookOk");

  if (!formIsValid) {
    successMessage.textContent = "";
    return;
  }

  const name = document.querySelector("#fName").value.trim();
  const guests = document.querySelector("#fGuests").value;
  successMessage.textContent = `Terima kasih, ${name}! Meja untuk ${guests} orang kami catat.`;

  bookForm.reset();
  document.querySelector("#fGuests").value = 2;
});

// ---------- Jalankan saat halaman dibuka ----------
renderMenu();
renderCart();
