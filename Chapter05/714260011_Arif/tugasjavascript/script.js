/* =========================================================
   Kopi Senja – script.js
   Fitur JavaScript:
   1. Menu navigasi hamburger (mobile)
   2. Filter kategori + pencarian menu (render dinamis)
   3. Keranjang pesanan (tambah, ubah jumlah, total harga)
   4. Mode gelap/terang (disimpan di localStorage)
   5. Validasi formulir kontak
   ========================================================= */

// ---------- DATA MENU ----------
const menuItems = [
  { id: 1, nama: "Espresso",         kategori: "kopi",    harga: 18000, emoji: "☕", desk: "Shot tunggal, pekat dan bersih." },
  { id: 2, nama: "Kopi Susu Senja",  kategori: "kopi",    harga: 24000, emoji: "🥛", desk: "Kopi, susu segar, gula aren." },
  { id: 3, nama: "V60 Manual",       kategori: "kopi",    harga: 28000, emoji: "🫖", desk: "Seduh manual, biji pilihan barista." },
  { id: 4, nama: "Matcha Latte",     kategori: "nonkopi", harga: 26000, emoji: "🍵", desk: "Matcha murni dengan susu oat." },
  { id: 5, nama: "Cokelat Panas",    kategori: "nonkopi", harga: 22000, emoji: "🍫", desk: "Cokelat pekat, tidak terlalu manis." },
  { id: 6, nama: "Teh Lemon Madu",   kategori: "nonkopi", harga: 20000, emoji: "🍋", desk: "Segar, bisa panas atau dingin." },
  { id: 7, nama: "Croissant Butter", kategori: "makanan", harga: 25000, emoji: "🥐", desk: "Dipanggang pagi hari, renyah." },
  { id: 8, nama: "Roti Bakar Keju",  kategori: "makanan", harga: 23000, emoji: "🍞", desk: "Keju leleh dan sedikit madu." },
  { id: 9, nama: "Nasi Goreng Senja",kategori: "makanan", harga: 32000, emoji: "🍳", desk: "Nasi goreng rempah dengan telur." }
];

// ---------- STATE ----------
let kategoriAktif = "semua";
let kataCari = "";
let keranjang = []; // [{id, jumlah}]

// ---------- ELEMEN ----------
const $ = (sel) => document.querySelector(sel);
const menuGrid   = $("#menuGrid");
const emptyMsg   = $("#emptyMsg");
const cartPanel  = $("#cartPanel");
const overlay    = $("#overlay");
const cartList   = $("#cartList");
const cartEmpty  = $("#cartEmpty");
const cartTotal  = $("#cartTotal");
const cartCount  = $("#cartCount");
const toastEl    = $("#toast");

// ---------- UTIL ----------
const rupiah = (n) => "Rp" + n.toLocaleString("id-ID");

function tampilToast(pesan) {
  toastEl.textContent = pesan;
  toastEl.classList.add("show");
  clearTimeout(tampilToast.timer);
  tampilToast.timer = setTimeout(() => toastEl.classList.remove("show"), 2000);
}

/* =========================================================
   FITUR 1 – Navigasi hamburger
   ========================================================= */
const burger = $("#burger");
const navLinks = $("#menuNav");

burger.addEventListener("click", () => {
  const terbuka = navLinks.classList.toggle("open");
  burger.setAttribute("aria-expanded", terbuka);
});
// tutup menu setelah salah satu link diklik
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    burger.setAttribute("aria-expanded", false);
  })
);

/* =========================================================
   FITUR 2 – Filter kategori + pencarian
   ========================================================= */
function renderMenu() {
  const hasil = menuItems.filter((item) => {
    const cocokKategori = kategoriAktif === "semua" || item.kategori === kategoriAktif;
    const cocokCari = item.nama.toLowerCase().includes(kataCari.toLowerCase());
    return cocokKategori && cocokCari;
  });

  menuGrid.innerHTML = hasil
    .map(
      (item) => `
      <article class="card">
        <span class="emoji" aria-hidden="true">${item.emoji}</span>
        <h3>${item.nama}</h3>
        <p>${item.desk}</p>
        <div class="row">
          <span class="price">${rupiah(item.harga)}</span>
          <button class="add-btn" data-id="${item.id}">Tambah</button>
        </div>
      </article>`
    )
    .join("");

  emptyMsg.hidden = hasil.length > 0;
}

document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    btn.classList.add("active");
    kategoriAktif = btn.dataset.filter;
    renderMenu();
  });
});

$("#searchInput").addEventListener("input", (e) => {
  kataCari = e.target.value.trim();
  renderMenu();
});

// event delegation: satu listener untuk semua tombol "Tambah"
menuGrid.addEventListener("click", (e) => {
  const tombol = e.target.closest(".add-btn");
  if (!tombol) return;
  tambahKeKeranjang(Number(tombol.dataset.id));
});

/* =========================================================
   FITUR 3 – Keranjang pesanan
   ========================================================= */
function tambahKeKeranjang(id) {
  const ada = keranjang.find((k) => k.id === id);
  if (ada) ada.jumlah++;
  else keranjang.push({ id, jumlah: 1 });

  const item = menuItems.find((m) => m.id === id);
  tampilToast(`${item.nama} ditambahkan`);
  renderKeranjang();
}

function ubahJumlah(id, delta) {
  const item = keranjang.find((k) => k.id === id);
  if (!item) return;
  item.jumlah += delta;
  if (item.jumlah <= 0) keranjang = keranjang.filter((k) => k.id !== id);
  renderKeranjang();
}

function renderKeranjang() {
  let total = 0;
  let jumlahItem = 0;

  cartList.innerHTML = keranjang
    .map((k) => {
      const m = menuItems.find((x) => x.id === k.id);
      total += m.harga * k.jumlah;
      jumlahItem += k.jumlah;
      return `
        <li class="cart-item">
          <strong>${m.nama}</strong>
          <div class="qty">
            <button data-aksi="kurang" data-id="${m.id}" aria-label="Kurangi ${m.nama}">−</button>
            <span>${k.jumlah}</span>
            <button data-aksi="tambah" data-id="${m.id}" aria-label="Tambah ${m.nama}">+</button>
          </div>
          <span class="sub">${rupiah(m.harga)} × ${k.jumlah} = ${rupiah(m.harga * k.jumlah)}</span>
        </li>`;
    })
    .join("");

  cartTotal.textContent = rupiah(total);
  cartCount.textContent = jumlahItem;
  cartEmpty.hidden = keranjang.length > 0;
  $("#checkoutBtn").disabled = keranjang.length === 0;
  $("#clearBtn").disabled = keranjang.length === 0;
}

cartList.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  ubahJumlah(Number(btn.dataset.id), btn.dataset.aksi === "tambah" ? 1 : -1);
});

function bukaKeranjang(buka) {
  cartPanel.classList.toggle("open", buka);
  cartPanel.setAttribute("aria-hidden", !buka);
  overlay.hidden = !buka;
}
$("#cartBtn").addEventListener("click", () => bukaKeranjang(true));
$("#closeCart").addEventListener("click", () => bukaKeranjang(false));
overlay.addEventListener("click", () => bukaKeranjang(false));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") bukaKeranjang(false); });

$("#clearBtn").addEventListener("click", () => { keranjang = []; renderKeranjang(); });
$("#checkoutBtn").addEventListener("click", () => {
  alert(`Terima kasih! Pesanan Anda senilai ${cartTotal.textContent} sedang disiapkan.`);
  keranjang = [];
  renderKeranjang();
  bukaKeranjang(false);
});

/* =========================================================
   FITUR 4 – Mode gelap / terang
   ========================================================= */
const themeBtn = $("#themeBtn");

function setTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  themeBtn.textContent = tema === "dark" ? "☀️" : "🌙";
  try { localStorage.setItem("tema", tema); } catch (e) { /* abaikan jika storage diblokir */ }
}

let temaAwal = "light";
try {
  temaAwal = localStorage.getItem("tema") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
} catch (e) {}
setTema(temaAwal);

themeBtn.addEventListener("click", () => {
  const sekarang = document.documentElement.getAttribute("data-theme");
  setTema(sekarang === "dark" ? "light" : "dark");
});

/* =========================================================
   FITUR 5 – Validasi formulir kontak
   ========================================================= */
const form = $("#contactForm");

function setError(idInput, idError, pesan) {
  $(idError).textContent = pesan;
  $(idInput).classList.toggle("invalid", Boolean(pesan));
  return !pesan;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nama  = $("#nama").value.trim();
  const email = $("#email").value.trim();
  const pesan = $("#pesan").value.trim();

  const okNama  = setError("#nama",  "#errNama",  nama.length < 3 ? "Nama minimal 3 karakter." : "");
  const okEmail = setError("#email", "#errEmail", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Format email belum benar.");
  const okPesan = setError("#pesan", "#errPesan", pesan.length < 10 ? "Pesan minimal 10 karakter." : "");

  const sukses = $("#formOk");
  if (okNama && okEmail && okPesan) {
    sukses.textContent = `Terima kasih, ${nama}. Pesan Anda sudah kami terima.`;
    sukses.hidden = false;
    form.reset();
  } else {
    sukses.hidden = true;
  }
});

/* ---------- INISIALISASI ---------- */
$("#year").textContent = new Date().getFullYear();
renderMenu();
renderKeranjang();