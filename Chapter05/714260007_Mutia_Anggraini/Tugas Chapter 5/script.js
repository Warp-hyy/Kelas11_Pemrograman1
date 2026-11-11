// FITUR 1: Navigasi menu untuk tampilan mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('show');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

// FITUR 2: Filter kategori menu
const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');

    const selectedCategory = button.dataset.filter;
    menuCards.forEach(card => {
      const shouldShow = selectedCategory === 'all' || card.dataset.category === selectedCategory;
      card.style.display = shouldShow ? 'block' : 'none';
    });
  });
});

// FITUR 3: Simulasi keranjang belanja
let cartCount = 0;
const cartStatus = document.getElementById('cartStatus');

document.querySelectorAll('.add-btn').forEach(button => {
  button.addEventListener('click', () => {
    cartCount += 1;
    cartStatus.textContent = `Keranjang: ${cartCount} item (terakhir ditambahkan: ${button.dataset.name})`;
    button.textContent = '✓ Ditambahkan';
    setTimeout(() => button.textContent = '+ Tambah', 900);
  });
});

// Menampilkan tahun secara otomatis pada footer
document.getElementById('year').textContent = new Date().getFullYear();
