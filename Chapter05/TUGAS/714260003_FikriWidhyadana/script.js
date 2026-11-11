// Array penampung keranjang belanja
let cart = [];

// Fitur 1: Filter Kategori Produk
function filterProduct(category) {
  const products = document.querySelectorAll('.product-card');
  
  products.forEach(product => {
    if (category === 'semua' || product.classList.contains(category)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

// Fitur 2: Tambah ke Keranjang
function addToCart(productName) {
  cart.push(productName);
  
  // Update jumlah item di navbar
  document.getElementById('cart-count').innerText = cart.length;
  
  // Update isi modal keranjang
  renderCart();
  
  alert(productName + ' berhasil ditambahkan ke keranjang!');
}

// Fungsi bantu tampilkan list di modal
function renderCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  
  if (cart.length === 0) {
    cartList.innerHTML = '<li>Keranjang masih kosong.</li>';
  } else {
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerText = (index + 1) + '. ' + item;
      cartList.appendChild(li);
    });
  }
}

// Fitur 3: Buka / Tutup Modal Keranjang
function toggleCart() {
  const modal = document.getElementById('cart-modal');
  if (modal.style.display === 'flex') {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'flex';
  }
}