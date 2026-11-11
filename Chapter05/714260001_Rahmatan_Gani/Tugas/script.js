// ===== DATA KURSUS =====
// Array berisi daftar kursus yang ditampilkan di halaman
const daftarKursus = [
  {
    id: 1,
    judul: 'HTML & Semantic HTML',
    kategori: 'web',
    level: 'Pemula',
    durasi: '4 jam',
    deskripsi: 'Belajar struktur halaman web dengan HTML yang benar dan semantik.',
    materi: [
      {
        judul: '1. Tag HTML Dasar',
        isi: 'Mengenal struktur dasar dokumen HTML: <html>, <head>, <body>. Tag container: <div> (generic block), <span> (generic inline). Atribut universal: id (unik), class (kelompok), style (inline CSS), data-* (custom data), aria-* (accessibility). Contoh: <div id="header" class="container">Konten</div>'
      },
      {
        judul: '2. Tag Semantik HTML5',
        isi: 'Ganti <div> berantakan dengan tag bermakna: <header> (kepala halaman/section), <nav> (navigasi), <main> (konten utama), <article> (konten mandiri), <section> (bagian tematik), <aside> (sampingan), <footer> (kaki halaman/section). Manfaat: SEO lebih baik, screen reader paham struktur, kode lebih readable.'
      },
      {
        judul: '3. Form dan Input',
        isi: 'Elemen form: <form action="/submit" method="POST">. Input type: text, email, password, number, date, checkbox, radio, file, submit. Label: <label for="email">Email</label> <input id="email" type="email" required>. Validasi HTML5: required, minlength, maxlength, pattern, placeholder. Aksesibilitas: aria-label, aria-describedby.'
      },
      {
        judul: '4. Media dan Embed',
        isi: 'Gambar: <img src="foto.jpg" alt="Deskripsi" width="300" height="200" loading="lazy">. Video: <video controls><source src="video.mp4" type="video/mp4"></video>. Audio: <audio controls><source src="lagu.mp3" type="audio/mpeg"></audio>. iframe untuk embed YouTube/Maps. Figure & figcaption untuk caption semantik.'
      },
      {
        judul: '5. Best Practice & Validasi',
        isi: 'Selalu deklarasikan <!DOCTYPE html> dan lang="id". Validasi di validator.w3.org. Heading hierarchy: h1 → h2 → h3 (jangan lompat). Alt text di semua gambar. Gunakan semantic tag, hindari divitis. Meta viewport untuk responsive: <meta name="viewport" content="width=device-width, initial-scale=1.0">. Komentar conditional untuk IE lama jika perlu.'
      }
    ]
  },
  {
    id: 2,
    judul: 'CSS Dasar dan Responsive',
    kategori: 'web',
    level: 'Pemula',
    durasi: '6 jam',
    deskripsi: 'Styling halaman web dan membuat desain yang responsive di semua perangkat.',
    materi: [
      {
        judul: '1. Selector & Spesifisitas',
        isi: 'Jenis selector: Element (h1), Class (.btn), ID (#header), Attribute ([type="text"]), Pseudo-class (:hover, :focus, :nth-child), Pseudo-element (::before, ::after). Kombinator: descendant (spasi), child (>), adjacent (+), general (~). Spesifisitas: ID (100) > Class (10) > Element (1). Important (!important) menghindari jika bisa.'
      },
      {
        judul: '2. Box Model & Display',
        isi: 'Setiap elemen adalah box: content → padding → border → margin. box-sizing: border-box (padding+border di dalam width). Display: block (baris baru), inline (samping), inline-block (keduanya), none (sembunyi). Collapsing margin: margin vertikal bertemu ambil yang terbesar. Outline tidak mempengaruhi layout.'
      },
      {
        judul: '3. Flexbox Layout',
        isi: 'Container: display: flex. Arah: flex-direction (row/column). Justify-content: start/center/end/space-between/space-around/space-evenly. Align-items: stretch/center/start/end/baseline. Gap: gap/row-gap/column-gap. Item: flex-grow, flex-shrink, flex-basis (shorthand: flex: 1). Order untuk urutan visual. Align-self override per item.'
      },
      {
        judul: '4. CSS Grid Layout',
        isi: 'Container: display: grid. Template: grid-template-columns: repeat(3, 1fr) / 200px 1fr 150px / auto-fit(minmax(250px, 1fr)). Baris: grid-template-rows. Gap: gap. Place item: justify-items, align-items. Place content: justify-content, align-content. Item: grid-column: 1/3, grid-row: 2/4. Named lines & areas untuk layout kompleks.'
      },
      {
        judul: '5. Responsive & Mobile-First',
        isi: 'Media query: @media (max-width: 768px) { ... }. Breakpoint umum: 480px (mobile), 768px (tablet), 1024px (desktop), 1200px (large). Mobile-first: tulis style mobile dulu, lalu override di @media (min-width: ...). Unit relative: rem (root), em (parent), %, vw/vh, clamp(). Fluid typography: clamp(1rem, 2vw + 0.5rem, 2rem). Container query: @container.'
      }
    ]
  },
  {
    id: 3,
    judul: 'JavaScript DOM Manipulation',
    kategori: 'web',
    level: 'Menengah',
    durasi: '8 jam',
    deskripsi: 'Interaksi DOM dengan JavaScript untuk membuat halaman yang dinamis.',
    materi: [
      {
        judul: '1. Seleksi Elemen DOM',
        isi: 'document.getElementById("id") → 1 elemen. document.querySelector("selector") → pertama match. document.querySelectorAll("selector") → NodeList (bisa forEach). document.getElementsByClassName / TagName → HTMLCollection (live). Perbedaan: querySelectorAll static, getElementsBy* live. Traversing: parentElement, children, nextElementSibling, previousElementSibling, closest("selector").'
      },
      {
        judul: '2. Manipulasi Konten & Atribut',
        isi: 'Konten: element.textContent (teks aman), element.innerHTML (HTML, hati-hati XSS), element.value (input). Atribut: element.getAttribute("href"), element.setAttribute("disabled", ""), element.removeAttribute("hidden"), element.hasAttribute("required"). Data attribute: element.dataset.userId → data-user-id. Class: element.classList.add/remove/toggle/contains("active"). Style: element.style.color = "red" (inline style).'
      },
      {
        judul: '3. Event Listener & Handling',
        isi: 'element.addEventListener("click", handler). Jenis event: click, dblclick, submit, change, input, keydown/keyup, focus/blur, mouseover/mouseout, load, DOMContentLoaded. Event object: e.target (yang diklik), e.currentTarget (yang listener), e.preventDefault() (stop default), e.stopPropagation() (stop bubble), e.key (keyboard). Delegation: listener di parent, cek e.target.matches(".btn").'
      },
      {
        judul: '4. Membuat & Menghapus Elemen',
        isi: 'Buat: document.createElement("div"), element.textContent = "Halo", element.className = "card". Sisipkan: parent.appendChild(child), parent.append(child1, child2, "teks"), parent.prepend(child), element.before/after(newEl). Clone: element.cloneNode(true/false). Hapus: element.remove(), parent.removeChild(child). Fragment: document.createDocumentFragment() untuk batch insert performa.'
      },
      {
        judul: '5. Form Handling & Validasi',
        isi: 'Submit form: form.addEventListener("submit", e => { e.preventDefault(); const data = new FormData(form); const obj = Object.fromEntries(data); }). Validasi: input.checkValidity(), input.reportValidity(), input.setCustomValidity("Pesan error"). Constraint validation API: required, min/max, pattern, type. Custom validasi: input.addEventListener("invalid", e => e.target.setCustomValidity("...")).'
      }
    ]
  },
  {
    id: 4,
    judul: 'Python untuk Pemula',
    kategori: 'backend',
    level: 'Pemula',
    durasi: '10 jam',
    deskripsi: 'Fondasi bahasa pemrograman Python dari dasar hingga siap untuk proyek.',
    materi: [
      {
        judul: '1. Syntax Dasar & Tipe Data',
        isi: 'Variable: nama = "Budi", umur = 20, tinggi = 1.75, aktif = True. Tipe: str, int, float, bool, None. Operator: + - * / // % **, perbandingan == != < > <= >=, logika and or not. String: f"Nama {nama}", "Halo".upper(), "a,b,c".split(","), "-".join(list). Input: input("Nama: ") → selalu string, butuh int() / float().'
      },
      {
        judul: '2. Control Flow',
        isi: 'If-elif-else: if umur >= 17: print("Dewasa") elif umur >= 13: print("Remaja") else: print("Anak"). Loop for: for i in range(5): print(i) → 0-4. for item in list: print(item). Loop while: while kondisi: ... break (keluar loop), continue (skip ke iterasi berikut). Else di loop: jalan kalau tidak break. Pass: placeholder kosong.'
      },
      {
        judul: '3. Fungsi & Scope',
        isi: 'def greet(nama, salam="Halo"): return f"{salam}, {nama}!". Parameter default, *args (tuple), **kwargs (dict). Return multiple: return x, y → tuple. Scope: LEGB (Local → Enclosing → Global → Built-in). global var (ubah global), nonlocal var (ubah enclosing). Lambda: lambda x: x*2. Docstring: """Fungsi ini...""". Type hint: def add(a: int, b: int) -> int:.'
      },
      {
        judul: '4. Struktur Data',
        isi: 'List: [1,2,3], append, pop, insert, remove, sort, reverse, slice [1:4], len. Tuple: (1,2,3) immutable, unpacking: a,b,c = tuple. Dict: {"nama": "Budi", "umur": 20}, get, setdefault, items/keys/values. Set: {1,2,3} unik, union |, intersection &, difference -. Comprehension: [x*2 for x in range(5)], {k:v for k,v in dict.items()}, {x for x in list}.'
      },
      {
        judul: '5. File I/O & Error Handling',
        isi: 'Baca: with open("file.txt", "r", encoding="utf-8") as f: teks = f.read(). Tulis: with open("out.txt", "w") as f: f.write("Halo"). Mode: r/w/a/r+/wb. JSON: json.load/dump, json.loads/dumps. Exception: try: ... except ValueError as e: ... except (TypeError, KeyError): ... else: (no error) finally: (always). Raise: raise ValueError("Invalid"). Custom exception: class MyError(Exception): pass.'
      }
    ]
  },
  {
    id: 5,
    judul: 'Database SQL Dasar',
    kategori: 'database',
    level: 'Pemula',
    durasi: '5 jam',
    deskripsi: 'Membuat dan mengelola database dengan SQL untuk menyimpan data aplikasi.',
    materi: [
      {
        judul: '1. DDL - Data Definition Language',
        isi: 'CREATE TABLE users (id INT PRIMARY KEY AUTO_INCREMENT, nama VARCHAR(100) NOT NULL, email VARCHAR(150) UNIQUE, umur INT CHECK (umur >= 0), dibuat TIMESTAMP DEFAULT CURRENT_TIMESTAMP). ALTER TABLE users ADD COLUMN alamat TEXT; ALTER TABLE users MODIFY COLUMN email VARCHAR(200); DROP TABLE users. Constraint: PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK, DEFAULT. Index: CREATE INDEX idx_email ON users(email).'
      },
      {
        judul: '2. DML - Data Manipulation Language',
        isi: 'INSERT INTO users (nama, email, umur) VALUES ("Budi", "budi@mail.com", 25). INSERT ... VALUES (...), (...), (...) multi-row. SELECT * FROM users WHERE umur > 20 AND nama LIKE "B%". UPDATE users SET umur = 26 WHERE id = 1. DELETE FROM users WHERE umur < 18. WHERE clause: =, !=, >, <, >=, <=, BETWEEN, IN, LIKE, IS NULL/IS NOT NULL, AND/OR/NOT.'
      },
      {
        judul: '3. Query Lanjutan & JOIN',
        isi: 'JOIN: INNER JOIN (match kedua), LEFT JOIN (semua kiri + match kanan), RIGHT JOIN, FULL OUTER JOIN. SELECT u.nama, o.total FROM users u INNER JOIN orders o ON u.id = o.user_id. GROUP BY: SELECT kategori, COUNT(*) FROM produk GROUP BY kategori HAVING COUNT(*) > 5. ORDER BY nama ASC, umur DESC. LIMIT 10 OFFSET 20 (pagination). DISTINCT untuk unik.'
      },
      {
        judul: '4. Fungsi Agregat & Subquery',
        isi: 'Agregat: COUNT(*), SUM(harga), AVG(rating), MIN(tanggal), MAX(stok). Subquery: SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE total > 100000). Subquery di SELECT: SELECT nama, (SELECT COUNT(*) FROM orders WHERE user_id = u.id) AS jml_order FROM users u. EXISTS: WHERE EXISTS (SELECT 1 FROM orders WHERE user_id = users.id).'
      },
      {
        judul: '5. Normalisasi & Relasi',
        isi: 'Normalisasi: 1NF (atomic value, no repeating group), 2NF (no partial dependency pada PK komposit), 3NF (no transitive dependency). Relasi: One-to-One (FK unik), One-to-Many (FK di tabel many), Many-to-Many (tabel junction/bridge). Contoh: users -< orders >- produk (junction: order_items). Foreign key: REFERENCES users(id) ON DELETE CASCADE / SET NULL.'
      }
    ]
  },
  {
    id: 6,
    judul: 'RESTful API dengan Node.js',
    kategori: 'backend',
    level: 'Menengah',
    durasi: '12 jam',
    deskripsi: 'Membuat API backend yang scalable menggunakan Node.js dan Express.',
    materi: [
      {
        judul: '1. HTTP & REST Fundamentals',
        isi: 'Method: GET (baca), POST (buat), PUT (update penuh), PATCH (update parsial), DELETE (hapus). Status code: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Server Error. Resource naming: /api/users (koleksi), /api/users/123 (item). Versioning: /api/v1/users. Query param: ?page=1&limit=10&sort=-createdAt.'
      },
      {
        judul: '2. Express Routing & Middleware',
        isi: 'App: const app = express(); app.use(express.json()) parse JSON body. Route: app.get("/users", handler), app.post("/users", handler), app.use("/api", router). Router: const router = express.Router(); router.get("/", ...); app.use("/api", router). Middleware: (req, res, next) => { console.log(req.method, req.url); next(); }. Error middleware: (err, req, res, next) => { res.status(500).json({ error: err.message }); }. Static files: app.use(express.static("public")).'
      },
      {
        judul: '3. Request & Response Handling',
        isi: 'Request: req.params (URL param /users/:id), req.query (?search=...), req.body (JSON body), req.headers, req.cookies, req.ip. Response: res.json(data), res.status(201).json(data), res.send("OK"), res.sendFile(path), res.redirect("/login"), res.setHeader("X-Custom", "value"), res.cookie("token", "abc", { httpOnly: true }). Content negotiation: res.format({ json: ..., html: ... }).'
      },
      {
        judul: '4. Validasi & Error Handling',
        isi: 'Validasi manual: if (!req.body.email) return res.status(400).json({error: "Email wajib"}). Library: express-validator (body("email").isEmail(), validationResult(req)). Custom error class: class AppError extends Error { constructor(msg, status) { super(msg); this.status = status; } }. Global handler: app.use((err, req, res, next) => { const status = err.status || 500; res.status(status).json({ error: err.message }); }). Async wrapper: const asyncHandler = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next).'
      },
      {
        judul: '5. Database Integration',
        isi: 'Driver: mysql2, pg, mongodb. Pool koneksi: const pool = mysql.createPool({ host, user, password, database, waitForConnections: true, connectionLimit: 10 }). Query: const [rows] = await pool.execute("SELECT * FROM users WHERE id = ?", [id]). Transaction: await pool.getConnection(); await conn.beginTransaction(); try { await conn.execute(...); await conn.commit(); } catch { await conn.rollback(); throw err; } finally { conn.release(); }. ORM: Prisma, Sequelize, TypeORM untuk abstraksi lebih tinggi.'
      }
    ]
  }
];

// ===== DATA KUIS =====
// Array berisi soal-soal kuis dengan jawaban benar dan pilihan
const daftarSoal = [
  {
    id: 1,
    soal: 'Tag HTML mana yang digunakan untuk judul utama halaman?',
    pilihan: ['<header>', '<h1>', '<title>', '<heading>'],
    jawaban: 1
  },
  {
    id: 2,
    soal: 'Properti CSS mana yang mengatur lebar elemen?',
    pilihan: ['height', 'size', 'width', 'length'],
    jawaban: 2
  },
  {
    id: 3,
    soal: 'Fungsi JavaScript mana yang memilih elemen berdasarkan ID?',
    pilihan: ['getElementById()', 'getElementClass()', 'queryElement()', 'findById()'],
    jawaban: 0
  },
  {
    id: 4,
    soal: 'Apa output dari 2 + "2" di JavaScript?',
    pilihan: ['4', '22', 'Error', 'undefined'],
    jawaban: 1
  },
  {
    id: 5,
    soal: 'Git command mana untuk menyimpan perubahan?',
    pilihan: ['git push', 'git commit', 'git add', 'git save'],
    jawaban: 1
  }
];

// ===== STATE GLOBAL =====
// Variabel untuk menyimpan status aplikasi
let quizState = {
  soalSekarang: 0,
  jawaban: [],
  mulai: false
};

let filterSekarang = 'semua';
let cariSekarang = '';

// ===== INISIALISASI =====
// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  tampilkanKursus();
  initQuiz();
  initProgress();
  setupEventListeners();
});

// ===== TEMA (DARK/LIGHT) =====
// Fungsi untuk menginisialisasi tema dari localStorage
function initTheme() {
  const themeTersimpan = localStorage.getItem('tema');
  const tema = themeTersimpan || 'dark-theme';
  
  // Terapkan tema ke body
  document.body.className = tema;
}

// Fungsi untuk toggle antara dark dan light theme
function toggleTheme() {
  const bodyClass = document.body.className;
  const temaBaru = bodyClass === 'dark-theme' ? 'light-theme' : 'dark-theme';
  
  // Simpan ke localStorage dan terapkan
  localStorage.setItem('tema', temaBaru);
  document.body.className = temaBaru;
}

// ===== HAMBURGER MENU =====
// Fungsi untuk toggle hamburger menu saat di mobile
function toggleMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  
  // Toggle class active pada hamburger dan menu
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

// Fungsi untuk menutup menu saat link diklik
function closeMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}

// ===== KURSUS: TAMPILKAN & FILTER =====
// Fungsi untuk menampilkan kartu kursus berdasarkan filter dan pencarian
function tampilkanKursus() {
  const grid = document.getElementById('kursusGrid');
  const noResults = document.getElementById('noResults');
  
  // Filter kursus berdasarkan kategori dan pencarian
  const kursusFilter = daftarKursus.filter(function(kursus) {
    const cocokKategori = filterSekarang === 'semua' || kursus.kategori === filterSekarang;
    const cocokCari = kursus.judul.toLowerCase().includes(cariSekarang.toLowerCase());
    return cocokKategori && cocokCari;
  });
  
  // Jika tidak ada hasil, tampilkan pesan
  if (kursusFilter.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  
  noResults.style.display = 'none';
  
  // Loop untuk membuat kartu setiap kursus
  let html = '';
  for (let i = 0; i < kursusFilter.length; i++) {
    const k = kursusFilter[i];
    html += `
      <div class="kursus-card" onclick="bukaModal(${k.id})">
        <h3>${k.judul}</h3>
        <p>${k.deskripsi}</p>
        <div class="kursus-meta">
          <span>📚 ${k.kategori.charAt(0).toUpperCase() + k.kategori.slice(1)}</span>
          <span>⭐ ${k.level}</span>
          <span>⏱ ${k.durasi}</span>
        </div>
      </div>
    `;
  }
  
  grid.innerHTML = html;
}

// ===== KURSUS: SEARCH & FILTER =====
// Fungsi untuk handle pencarian kursus
function handleSearch(event) {
  cariSekarang = event.target.value;
  tampilkanKursus();
}

// Fungsi untuk handle filter kategori
function handleFilter(kategori) {
  filterSekarang = kategori;
  
  // Highlight tombol filter yang aktif
  const btnFilter = document.querySelectorAll('.filter-btn');
  btnFilter.forEach(function(btn) {
    if (btn.dataset.filter === kategori) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  tampilkanKursus();
}

// ===== KUIS: INISIALISASI & TAMPILKAN =====
// Fungsi untuk menginisialisasi kuis (setup awal)
function initQuiz() {
  tampilkanKuis();
}

// Fungsi untuk menampilkan soal kuis atau hasil akhir
function tampilkanKuis() {
  const container = document.getElementById('quizContainer');
  
  // Jika belum mulai kuis, tampilkan tombol mulai
  if (!quizState.mulai) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem;">
        <h3 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 1rem;">Uji Pengetahuan Anda</h3>
        <p style="color: var(--text-muted); margin-bottom: 2rem;">5 soal pertanyaan untuk mengukur pemahaman materi dasar coding.</p>
        <button class="cta-button" onclick="mulaiKuis()">Mulai Kuis</button>
      </div>
    `;
    return;
  }
  
  // Jika sudah selesai semua soal, tampilkan hasil
  if (quizState.soalSekarang >= daftarSoal.length) {
    tampilkanHasilKuis();
    return;
  }
  
  // Tampilkan soal saat ini
  const soal = daftarSoal[quizState.soalSekarang];
  let html = `
    <div class="quiz-question">
      <div class="quiz-number">Soal ${soal.id} dari ${daftarSoal.length}</div>
      <h3>${soal.soal}</h3>
      <div class="quiz-options">
  `;
  
  // Loop untuk membuat pilihan jawaban
  for (let i = 0; i < soal.pilihan.length; i++) {
    const pilihan = soal.pilihan[i].replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const terpilih = quizState.jawaban[quizState.soalSekarang] === i ? 'selected' : '';
    
    html += `
      <label class="quiz-option ${terpilih}">
        <input type="radio" name="jawaban" value="${i}" 
          ${terpilih ? 'checked' : ''} 
          onchange="pilihJawaban(${i})">
        ${pilihan}
      </label>
    `;
  }
  
  html += `
      </div>
      <div class="quiz-buttons">
        <button class="quiz-btn" onclick="sebelumnyaKuis()" ${quizState.soalSekarang === 0 ? 'disabled' : ''}>
          ← Sebelumnya
        </button>
        <button class="quiz-btn primary" onclick="lanjutKuis()">
          ${quizState.soalSekarang === daftarSoal.length - 1 ? 'Selesai' : 'Lanjut'} →
        </button>
      </div>
    </div>
  `;
  
  container.innerHTML = html;
}

// ===== KUIS: NAVIGASI & JAWABAN =====
// Fungsi untuk memulai kuis
function mulaiKuis() {
  quizState.mulai = true;
  quizState.soalSekarang = 0;
  quizState.jawaban = [];
  tampilkanKuis();
}

// Fungsi untuk menyimpan jawaban yang dipilih
function pilihJawaban(index) {
  quizState.jawaban[quizState.soalSekarang] = index;
}

// Fungsi untuk lanjut ke soal berikutnya
function lanjutKuis() {
  if (quizState.soalSekarang < daftarSoal.length - 1) {
    quizState.soalSekarang++;
    tampilkanKuis();
  } else {
    quizState.soalSekarang++;
    tampilkanKuis();
  }
}

// Fungsi untuk kembali ke soal sebelumnya
function sebelumnyaKuis() {
  if (quizState.soalSekarang > 0) {
    quizState.soalSekarang--;
    tampilkanKuis();
  }
}

// ===== KUIS: HASIL AKHIR =====
// Fungsi untuk menampilkan hasil akhir kuis
function tampilkanHasilKuis() {
  const container = document.getElementById('quizContainer');
  
  // Hitung skor dengan loop
  let skor = 0;
  for (let i = 0; i < daftarSoal.length; i++) {
    if (quizState.jawaban[i] === daftarSoal[i].jawaban) {
      skor++;
    }
  }
  
  // Hitung persentase
  const persen = Math.round((skor / daftarSoal.length) * 100);
  
  // Pesan feedback berdasarkan skor
  let pesan = '';
  if (persen >= 80) {
    pesan = 'Luar biasa! Pemahaman Anda sangat baik.';
  } else if (persen >= 60) {
    pesan = 'Bagus! Terus tingkatkan pemahaman Anda.';
  } else {
    pesan = 'Coba pelajari ulang materi dan coba lagi.';
  }
  
  container.innerHTML = `
    <div class="quiz-result">
      <h3>Kuis Selesai!</h3>
      <div class="quiz-score">${skor}/${daftarSoal.length}</div>
      <div class="quiz-message">${pesan} (${persen}%)</div>
      <button class="cta-button" onclick="ulangiKuis()">Ulangi Kuis</button>
    </div>
  `;
}

// Fungsi untuk mengulang kuis dari awal
function ulangiKuis() {
  quizState.mulai = false;
  quizState.soalSekarang = 0;
  quizState.jawaban = [];
  tampilkanKuis();
}

// ===== PROGRESS: INISIALISASI & HITUNGAN =====
// Fungsi untuk menginisialisasi progress dari localStorage
function initProgress() {
  // Ambil data progress yang sudah tersimpan
  const progressTersimpan = localStorage.getItem('progress');
  
  // Jika ada data, set checkbox sesuai data lama
  if (progressTersimpan) {
    const data = JSON.parse(progressTersimpan);
    const checkboxes = document.querySelectorAll('.materi-checkbox');
    
    checkboxes.forEach(function(checkbox) {
      if (data[checkbox.dataset.materi]) {
        checkbox.checked = true;
      }
    });
  }
  
  // Hitung progress bar
  hitungProgress();
}

// Fungsi untuk menghitung dan update progress bar
function hitungProgress() {
  const checkboxes = document.querySelectorAll('.materi-checkbox');
  let tercentang = 0;
  
  // Loop untuk hitung checkbox yang tercentang
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      tercentang++;
    }
  });
  
  // Hitung persentase
  const persen = Math.round((tercentang / checkboxes.length) * 100);
  
  // Update progress bar visual
  document.getElementById('progressFill').style.width = persen + '%';
  document.getElementById('progressPercent').textContent = persen + '%';
  
  // Simpan ke localStorage
  const data = {};
  checkboxes.forEach(function(checkbox) {
    data[checkbox.dataset.materi] = checkbox.checked;
  });
  localStorage.setItem('progress', JSON.stringify(data));
}

// ===== EVENT LISTENERS SETUP =====
// Fungsi untuk setup semua event listener
function setupEventListeners() {
  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }
  
  // Menu links untuk menutup menu
  const navLinks = document.querySelectorAll('.navbar-menu a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });
  
  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Search input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }
  
  // Filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      handleFilter(this.dataset.filter);
    });
  });
  
  // Progress checkboxes
  const checkboxes = document.querySelectorAll('.materi-checkbox');
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', hitungProgress);
  });
  
  // Modal close on background click
  const modal = document.getElementById('detailModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        tutupModal();
      }
    });
  }
}

// ===== MODAL DETAIL KURSUS =====
// Fungsi untuk membuka modal detail kursus
function bukaModal(idKursus) {
  // Cari kursus berdasarkan ID
  let kursus = null;
  for (let i = 0; i < daftarKursus.length; i++) {
    if (daftarKursus[i].id === idKursus) {
      kursus = daftarKursus[i];
      break;
    }
  }
  
  if (!kursus) return;
  
  // Isi data ke modal
  document.getElementById('modalJudul').textContent = kursus.judul;
  document.getElementById('modalKategori').textContent = '📚 ' + kursus.kategori.charAt(0).toUpperCase() + kursus.kategori.slice(1);
  document.getElementById('modalLevel').textContent = '⭐ ' + kursus.level;
  document.getElementById('modalDurasi').textContent = '⏱ ' + kursus.durasi;
  document.getElementById('modalDeskripsi').textContent = kursus.deskripsi;
  
  // Render list materi (objek dengan judul & isi) - escape HTML di isi
  const materiList = document.getElementById('modalMateri');
  let materiHTML = '';
  for (let i = 0; i < kursus.materi.length; i++) {
    const m = kursus.materi[i];
    // Escape HTML tags in isi so they display as code, not render as elements
    const escapedIsi = m.isi
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    materiHTML += `
      <li class="materi-item">
        <h4>${m.judul}</h4>
        <p>${escapedIsi}</p>
      </li>
    `;
  }
  materiList.innerHTML = materiHTML;
  
  // Tampilkan modal
  const modal = document.getElementById('detailModal');
  modal.classList.add('active');
  
  // Disable scroll body
  document.body.style.overflow = 'hidden';
}

// Fungsi untuk menutup modal
function tutupModal() {
  const modal = document.getElementById('detailModal');
  modal.classList.remove('active');
  
  // Enable scroll body
  document.body.style.overflow = 'auto';
}

// Fungsi placeholder untuk mulai pembelajaran (bisa dikembangkan)
function mulaiPelajaran() {
  alert('Fitur pembelajaran akan segera hadir! Untuk saat ini, Anda bisa mempelajari outline materi yang tersedia.');
  tutupModal();
}
