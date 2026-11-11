function cariDestinasi() {
  let input = document.getElementById("cari").value.toLowerCase();
  let cards = document.querySelectorAll(".card");
  cards.forEach(function(card) {
    let judul = card.querySelector("h3").textContent.toLowerCase();
    if (judul.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function filterDestinasi(kategori) {
  let cards = document.querySelectorAll(".card");
  cards.forEach(function(card) {
    let kat = card.getAttribute("data-kategori");
    if (kategori === "semua" || kat === kategori) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function lihatDetail(judul, isi) {
  document.getElementById("judulModal").textContent = judul;
  document.getElementById("isiModal").textContent = isi;
  document.getElementById("modal").style.display = "block";
}

function tutupModal() {
  document.getElementById("modal").style.display = "none";
}

function kirimForm(event) {
  event.preventDefault();
  document.getElementById("pesanSukses").textContent = "Pesan berhasil dikirim! Terima kasih.";
}

window.onclick = function(event) {
  let modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}