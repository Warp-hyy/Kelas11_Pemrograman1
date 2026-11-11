var produk = [
  { nama: "Kaos Polos",      harga: 65000,  kategori: "Fashion",    gambar: "👕" },
  { nama: "Sepatu",          harga: 250000, kategori: "Fashion",    gambar: "👟" },
  { nama: "Topi",            harga: 45000,  kategori: "Fashion",    gambar: "🧢" },
  { nama: "Headphone",       harga: 150000, kategori: "Elektronik", gambar: "🎧" },
  { nama: "Smartwatch",      harga: 450000, kategori: "Elektronik", gambar: "⌚" },
  { nama: "Power Bank",      harga: 120000, kategori: "Elektronik", gambar: "🔋" }
];

var keranjang = [];

function tampilkanProduk() {
  var pilihan = document.getElementById("kategori").value;
  var hasil = "";

  for (var i = 0; i < produk.length; i++) {
    
    if (pilihan == "semua" || produk[i].kategori == pilihan) {
      hasil = hasil +
        '<div class="produk">' +
          '<div class="gambar">' + produk[i].gambar + '</div>' +
          '<h3>' + produk[i].nama + '</h3>' +
          '<p>Rp ' + produk[i].harga + '</p>' +
          '<button onclick="tambah(' + i + ')">Beli</button>' +
        '</div>';
    }
  }

  document.getElementById("daftarProduk").innerHTML = hasil;
}

function tambah(nomor) {
  keranjang.push(produk[nomor]);   
  tampilkanKeranjang();
}

function hapus(nomor) {
  keranjang.splice(nomor, 1);    
  tampilkanKeranjang();
}

function tampilkanKeranjang() {
  var hasil = "";
  var total = 0;

  for (var i = 0; i < keranjang.length; i++) {
    hasil = hasil +
      '<li>' +
        '<span>' + keranjang[i].nama + ' - Rp ' + keranjang[i].harga + '</span>' +
        '<button onclick="hapus(' + i + ')">Hapus</button>' +
      '</li>';

    total = total + keranjang[i].harga;   
  }

  document.getElementById("daftarKeranjang").innerHTML = hasil;
  document.getElementById("total").innerHTML = "Rp " + total;
  document.getElementById("jumlah").innerHTML = keranjang.length;
}

tampilkanProduk();
tampilkanKeranjang();