/* =========================================================
1. GAMBAR ILUSTRASI (SVG)
Gambar dibuat dengan kode SVG supaya tidak butuh file foto.
========================================================= */
function kerumunan(warna, tangan) {
    let s = "";
    for (let i = 0; i < 15; i++) {
        const x = 14 + i * 27 + (i % 2) * 9, y = 205 + (i % 3) * 7;
        s += `<rect x="${x - 12}" y="${y + 8}" width="24" height="40" rx="10" fill="${warna}"/><circle cx="${x}" cy="${y}" r="10" fill="${warna}"/>`;
        if (tangan && i % 2 === 0) s += `<line x1="${x + 8}" y1="${y + 12}" x2="${x + 16}" y2="${y - 14}" stroke="${warna}" stroke-width="5" stroke-linecap="round"/>`;
    }
    return s;
}

const buka = (id, a, b) => `<svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" role="img"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0.6" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="400" height="240" fill="url(#${id})"/>`;

const gambar = {
    panggung: () => buka("gA", "#1b2250", "#5a2a6e") + `<polygon points="80,0 120,0 190,190 40,190" fill="#ffd77a" opacity=".22"/><polygon points="280,0 320,0 360,190 210,190" fill="#ff8fb1" opacity=".22"/><polygon points="180,0 220,0 260,190 140,190" fill="#fff" opacity=".14"/> <rect y="170" width="400" height="14" fill="#0e1024"/><rect x="195" y="118" width="3" height="54" fill="#e9e4d8"/><circle cx="196" cy="114" r="7" fill="#e9e4d8"/>` + kerumunan("#0a0c1c", true) + `</svg>`,
    band: () => buka("gB", "#0f3d4c", "#241a4d") + `<circle cx="320" cy="56" r="32" fill="#ffd77a" opacity=".9"/><circle cx="50" cy="40" r="2" fill="#fff"/><circle cx="110" cy="70" r="1.5" fill="#fff"/><circle cx="240" cy="36" r="2" fill="#fff"/> <g fill="#0b0d1c"><ellipse cx="110" cy="182" rx="44" ry="36"/><ellipse cx="138" cy="148" rx="30" ry="25"/><rect x="146" y="48" width="11" height="104" transform="rotate(30 151 152)"/><rect x="168" y="32" width="18" height="28" rx="4" transform="rotate(30 177 46)"/></g> <rect x="236" y="186" width="104" height="44" fill="#1a2a5a"/><ellipse cx="288" cy="186" rx="52" ry="14" fill="#2a3d7a" stroke="#d9b45f" stroke-width="3"/> <ellipse cx="232" cy="124" rx="32" ry="5" fill="#d9b45f"/><line x1="232" y1="126" x2="232" y2="200" stroke="#d9b45f" stroke-width="3"/><rect y="228" width="400" height="12" fill="#0b0d1c"/></svg>`,
    festival: () => buka("gC", "#ff9a5a", "#3b2a6b") + `<line x1="0" y1="28" x2="400" y2="28" stroke="#2a1840" stroke-width="2"/>` + Array.from({ length: 10 }, (_, i) => `<line x1="${20 + i * 40}" y1="28" x2="${20 + i * 40}" y2="${40 + (i % 2) * 10}" stroke="#2a1840"/><circle cx="${20 + i * 40}" cy="${46 + (i % 2) * 10}" r="7" fill="#ffe08a"/>`).join("") + kerumunan("#1a1030", true) + `</svg>`,
    mic: () => buka("gD", "#d9b45f", "#8a5a1e") + `<g fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".85"><path d="M140 70 Q120 98 140 126"/><path d="M114 52 Q80 98 114 144"/><path d="M260 70 Q280 98 260 126"/><path d="M286 52 Q320 98 286 144"/></g> <circle cx="200" cy="96" r="36" fill="#1f2f5c"/><path d="M172 84 H228 M170 98 H230 M174 112 H226" stroke="#8fa4e8" stroke-width="3"/> <rect x="186" y="130" width="28" height="64" rx="12" fill="#1f2f5c"/><rect x="198" y="194" width="4" height="30" fill="#1f2f5c"/><rect x="170" y="222" width="60" height="8" rx="4" fill="#1f2f5c"/></svg>`
};

/* =========================================================
2. DATA EVENT DAN TIM
========================================================= */
const events = [
    { nama: "Bazar Akhir Tahun", jenis: "Bazar", tanggal: "2026-12-05T09:00:00", tempat: "Lapangan Kampus", ket: "Puluhan stan UMKM dan kuliner dengan panggung musik.", img: "1 (7).jpeg" },
    { nama: "Pensi Malam Kreasi", jenis: "Pensi", tanggal: "2026-12-18T18:00:00", tempat: "Gedung Serbaguna", ket: "Panggung musik, tari, dan teater.", img: "bb.jpg" },
    { nama: "Bazar Kuliner Nusantara", jenis: "Bazar", tanggal: "2027-01-23T10:00:00", tempat: "Taman Kota", ket: "Jajanan khas daerah dengan live music.", img: "1 (9).jpeg" },
    { nama: "Pensi Sekolah Bersinar", jenis: "Pensi", tanggal: "2027-02-20T15:00:00", tempat: "Aula Sekolah", ket: "Pentas seni pelajar: band, dance, bakat.", img: "1 (5).jpeg" },
    { nama: "Workshop Event Planning", jenis: "Workshop", tanggal: "2027-03-13T09:00:00", tempat: "Ruang Kreatif", ket: "Menyusun konsep, anggaran, dan rundown.", img: "1.jpeg" },
    { nama: "Lomba Band Antar Kampus", jenis: "Lomba", tanggal: "2027-04-03T13:00:00", tempat: "Lapangan Kampus", ket: "Adu penampilan band dari berbagai kampus.", img: "1 (12).jpeg" }
];

const tim = [
    ["Rafi Hidayat", "Project Director"], 
    ["Nadia Putri", "Koordinator Acara"], 
    ["Bayu Setiawan", "Humas dan Sponsor"], 
];

/* =========================================================
3. MENAMPILKAN KE HALAMAN
========================================================= */
document.getElementById("banner").innerHTML = gambar.panggung();
document.getElementById("galeriBox").innerHTML = [["panggung", "Panggung utama"], ["band", "Penampilan band"], ["festival", "Malam festival"], ["mic", "Sesi akustik"]]
    .map(g => `<figure>${gambar[g[0]]()}<figcaption>${g[1]}</figcaption></figure>`).join("");

document.getElementById("timList").innerHTML = tim.map(t => `<div class="card person"><div class="avatar">${t[0][0]}</div><h3>${t[0]}</h3><small>${t[1]}</small></div>`).join("");

const pilih = document.getElementById("pilihEvent");
pilih.innerHTML = events.map(e => `<option>${e.nama}</option>`).join("");

const kotak = document.getElementById("eventList");
function tampil(jenis) {
    const data = jenis === "Semua" ? events : events.filter(e => e.jenis === jenis);
    kotak.innerHTML = data.map(e => `
        <article class="card">
            <div class="cover">
    <img src="${e.img}" alt="${e.nama}" style="width: 100%; height: 100%; object-fit: cover;">
</div>

            <div class="isi">
                <span class="tag">${e.jenis}</span>
                <h3>${e.nama}</h3>
                <p>${e.ket}</p>
                <div class="meta">${new Date(e.tanggal).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })} · ${e.tempat}</div>
                <button class="mini" data-nama="${e.nama}">Daftar</button>
            </div>
        </article>
    `).join("");
}

const filters = document.getElementById("filters");
["Semua", ...new Set(events.map(e => e.jenis))].forEach(j => {
    const b = document.createElement("button");
    b.textContent = j;
    if (j === "Semua") b.classList.add("active");
    b.onclick = () => {
        filters.querySelectorAll("button").forEach(x => x.classList.remove("active"));
        b.classList.add("active");
        tampil(j);
    };
    filters.appendChild(b);
});
tampil("Semua");

// Tombol "Daftar" pada kartu event
kotak.addEventListener("click", e => {
    if (e.target.classList.contains("mini")) {
        pilih.value = e.target.dataset.nama;
        document.getElementById("daftar").scrollIntoView();
    }
});

/* =========================================================
4. HITUNG MUNDUR KE EVENT TERDEKAT
========================================================= */
function hitung() {
    const sekarang = new Date();
    const berikut = events.find(e => new Date(e.tanggal) > sekarang);
    if (!berikut) {
        document.getElementById("cdJudul").textContent = "Belum ada event mendatang";
        return;
    }
    document.getElementById("cdJudul").textContent = "Menuju: " + berikut.nama;
    const s = new Date(berikut.tanggal) - sekarang;
    document.getElementById("cdHari").textContent = Math.floor(s / 86400000);
    document.getElementById("cdJam").textContent = Math.floor(s / 3600000) % 24;
    document.getElementById("cdMenit").textContent = Math.floor(s / 60000) % 60;
    document.getElementById("cdDetik").textContent = Math.floor(s / 1000) % 60;
}
hitung();
setInterval(hitung, 1000);

/* =========================================================
5. FORM, MENU HP, TEMA
========================================================= */
document.getElementById("kirim").addEventListener("click", () => {
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan");
    pesan.classList.add("tampil");
    if (nama.length < 3) pesan.textContent = "Nama diisi dulu, minimal 3 huruf.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) pesan.textContent = "Format email belum benar.";
    else {
        pesan.textContent = `Terima kasih, ${nama}. Pendaftaran untuk “${pilih.value}” sudah kami catat.`;
        document.getElementById("nama").value = "";
        document.getElementById("email").value = "";
    }
});

const menu = document.getElementById("menu");
document.getElementById("menuBtn").onclick = () => menu.classList.toggle("open");
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));

document.getElementById("themeBtn").onclick = () => {
    const r = document.documentElement;
    const gelap = r.dataset.theme === "dark" || (!r.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
    r.dataset.theme = gelap ? "light" : "dark";
};
