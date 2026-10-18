# Catatan Dasar Web Development

## Web Statis vs Web Dinamis

- **Web Statis:** 
  - **Karakteristik:** Tampilannya tetap dan kontennya sama untuk semua pengguna/setiap kali dibuka (kecuali kode sumbernya diubah secara manual).
  - **Contoh:** Website portofolio pribadi, landing page sederhana, atau dokumentasi statis.
- **Web Dinamis:** 
  - **Karakteristik:** Konten dapat berubah secara otomatis berdasarkan interaksi pengguna, data dari database, waktu, atau faktor lainnya.
  - **Contoh:** Dashboard admin, e-commerce, media sosial, dan platform berita.

---

## Analogi HTML, CSS, dan JavaScript

- **HTML (HyperText Markup Language):** **Tulang / Struktur**  
  Menyediakan pondasi, kerangka, dan elemen penyusun halaman web.
- **CSS (Cascading Style Sheets):** **Badan / Tampilan**  
  Mengatur gaya visual seperti warna, tata letak, ukuran teks, dan dekorasi agar menarik.
- **JavaScript (JS):** **Otak / Perilaku**  
  Memberikan logika, interaktivitas, pemrosesan data, dan respons terhadap aksi pengguna.

> **Pertanyaan:** *Apakah ketiganya merupakan bahasa pemrograman?*  
> **Jawab:** **Tidak semuanya.**
> - **HTML:** Bahasa markup (*Markup Language*).
> - **CSS:** Bahasa lembar gaya (*Style Sheet Language*).
> - **JavaScript:** Ya, ini adalah **bahasa pemrograman** (*Programming Language*).


## CSS Pseudo-classes & Pseudo-elements

### A. Pseudo-class (`:`)
Digunakan untuk mendefinisikan **status khusus (*state*)** dari suatu elemen.

* **Sintaks:** `selector:pseudo-class { ... }`
* **Contoh Umum:**
  * `:hover` — Mengubah gaya saat kursor diarahkan di atas elemen.
  * `:active` — Mengubah gaya saat elemen sedang diklik.
  * `:focus` — Mengubah gaya saat elemen sedang aktif menerima input (misal input form).
  * `:nth-child(n)` — Memilih elemen berdasarkan urutan posisinya di dalam parent.
  * `:not(selector)` — Memilih elemen yang *tidak* cocok dengan selektor tertentu.

### B. Pseudo-element (`::`)
Digunakan untuk memberi gaya pada **bagian spesifik/tertentu** dari suatu elemen tanpa perlu membuat tag HTML baru.

* **Sintaks:** `selector::pseudo-element { ... }`
* **Contoh Umum:**
  * `::before` — Menyisipkan konten buatan *sebelum* isi elemen.
  * `::after` — Menyisipkan konten buatan *setelah* isi elemen.
  * `::first-letter` — Memberi gaya khusus pada huruf pertama teks.
  * `::placeholder` — Memberi gaya pada teks instruksi di dalam input form.
  * `::selection` — Memberi gaya pada bagian teks yang di-blok/sorot oleh pengguna.

---

## Pengertian JavaScript DOM (Document Object Model)

DOM adalah antarmuka pemograman (*API*) yang mengubah dokumen HTML menjadi objek-objek terstruktur yang dapat dibaca dan dimanipulasi oleh JavaScript.

* **1. Struktur Pohon (*Tree Structure*):**
  HTML diterjemahkan menjadi hierarki bercabang (*DOM Tree*). Komponen HTML seperti tag, atribut, dan teks menjadi **simpul (*node*)** atau objek dalam pohon tersebut (`document` -> `html` -> `body` -> `h1`, `p`, dll).

* **2. Jembatan Akses (*Access Bridge*):**
  DOM berfungsi sebagai jembatan yang menghubungkan skrip JavaScript dengan dokumen HTML. Tanpa DOM, JavaScript tidak bisa membaca atau mengubah elemen HTML yang ada di browser.

* **3. Dinamis Real-Time (*Real-Time Dynamic*):**
  Perubahan yang dilakukan JavaScript melalui DOM akan langsung terefleksikan di layar browser secara instan tanpa perlu memuat ulang (*reload*) halaman.
  
---

## Daftar Referensi Lengkap HTML, CSS, dan JavaScript

---

### A. Referensi Elemen & Tag HTML

#### 1. Dokumen Dasar & Metadata
* `<!DOCTYPE html>` — Deklarasi tipe dokumen HTML5.
* `<html>` — Elemen akar (*root*) dari dokumen HTML.
* `<head>` — Wadah metadata (informasi yang tidak tampil di halaman utama).
* `<title>` — Judul halaman web (muncul di tab browser).
* `<meta>` — Metadata (misal: encoding karakter, viewport responsif).
* `<link>` — Menghubungkan berkas eksternal (misal: berkas CSS).
* `<script>` — Memuat atau menuliskan kode JavaScript.

#### 2. Struktur Semantik (Tata Letak)
* `<header>` — Bagian kepala halaman atau bagian atas artikel.
* `<nav>` — Area navigasi/menu utama.
* `<main>` — Konten utama dari dokumen (hanya boleh ada satu per halaman).
* `<section>` — Kelompok atau seksi konten bertema sama.
* `<article>` — Konten mandiri (misal: postingan blog, berita).
* `<aside>` — Konten sampingan (sidebar, iklan, link terkait).
* `<footer>` — Catatan kaki halaman (hak cipta, link tambahan).

#### 3. Teks & Format Konten
* `<h1>` s/d `<h6>` — Judul/heading (h1 terbesar, h6 terkecil).
* `<p>` — Paragraf teks.
* `<span>` — Pembungkus teks *inline* (tanpa baris baru).
* `<div>` — Pembungkus generik *block-level*.
* `<strong>` / `<b>` — Teks tebal (strong menekankan pentingnya isi).
* `<em>` / `<i>` — Teks miring (em menekankan penekanan bacaan).
* `<mark>` — Teks berlatar warna (highlight).
* `<blockquote>` — Kutipan panjang dari sumber lain.
* `<code>` — Menampilkan teks kode komputer.
* `<br>` — Pindah baris (*line break*).
* `<hr>` — Garis pemisah horizontal.

#### 4. Media & Tautan
* `<a href="...">` — Tautan/link antarhalaman atau eksternal.
* `<img src="..." alt="...">` — Menampilkan gambar.
* `<audio src="...">` — Memutar berkas audio.
* `<video src="...">` — Memutar berkas video.
* `<iframe>` — Menampilkan halaman web lain di dalam halaman saat ini.

#### 5. Daftar (Lists)
* `<ul>` — Daftar tanpa urutan (*unordered list* / bullet point).
* `<ol>` — Daftar berurutan (*ordered list* / angka).
* `<li>` — Item dalam daftar (digunakan di dalam `<ul>` atau `<ol>`).
* `<dl>`, `<dt>`, `<dd>` — Daftar definisi/istilah dan penjelasannya.

#### 6. Formulir (Forms) & Input
* `<form action="..." method="...">` — Wadah elemen input data.
* `<input>` — Elemen masukan (tipe: `text`, `password`, `email`, `number`, `checkbox`, `radio`, `file`, dll).
* `<label>` — Label petunjuk untuk elemen input.
* `<textarea>` — Area teks multibaris.
* `<select>` & `<option>` — Menu pilihan dropdown.
* `<button>` — Tombol interaktif.

#### 7. Tabel
* `<table>` — Wadah utama tabel.
* `<thead>` — Kepala tabel.
* `<tbody>` — Badan/isi tabel.
* `<tr>` — Baris tabel (*table row*).
* `<th>` — Sel kepala tabel (*table header*).
* `<td>` — Sel data tabel (*table data*).

---

### B. Referensi Properti Utama CSS

#### 1. Warna & Latar Belakang (Color & Background)
* `color` — Warna teks.
* `background-color` — Warna latar belakang.
* `background-image` — Gambar latar belakang.
* `opacity` — Tingkat transparansi elemen (0.0 – 1.0).

#### 2. Teks & Tipografi (Text & Typography)
* `font-family` — Jenis font yang digunakan.
* `font-size` — Ukuran teks (`px`, `rem`, `em`, `%`).
* `font-weight` — Ketebalan teks (`normal`, `bold`, `100`-`900`).
* `text-align` — Meratakan teks (`left`, `center`, `right`, `justify`).
* `text-decoration` — Dekorasi teks (`none`, `underline`, `line-through`).
* `line-height` — Jarak antarbaris teks.
* `letter-spacing` — Jarak antarkarakter/huruf.

#### 3. Box Model (Ukuran & Jarak)
* `width` / `height` — Lebar dan tinggi elemen.
* `padding` — Jarak antara konten dan garis tepi (bagian dalam).
* `margin` — Jarak antara elemen dengan elemen lain (bagian luar).
* `border` — Garis tepi elemen (`width style color`).
* `border-radius` — Lengkungan sudut elemen.
* `box-sizing: border-box` — Menghitung padding dan border ke dalam total lebar/tinggi.

#### 4. Tata Letak & Posisi (Layout & Positioning)
* `display` — Menentukan tipe tampilan (`block`, `inline`, `inline-block`, `flex`, `grid`, `none`).
* `position` — Mode posisi (`static`, `relative`, `absolute`, `fixed`, `sticky`).
* `top`, `bottom`, `left`, `right` — Offset koordinat untuk posisi elemen.
* `z-index` — Tumpukan kedalaman elemen (elemen dengan z-index lebih tinggi berada di depan).
* `overflow` — Penanganan konten yang meluap (`visible`, `hidden`, `scroll`, `auto`).

#### 5. Flexbox Layout
* `display: flex` — Mengaktifkan mode flexbox pada wadah.
* `flex-direction` — Arah item (`row`, `column`).
* `justify-content` — Penataan di sumbu utama (`flex-start`, `center`, `space-between`, `space-around`).
* `align-items` — Penataan di sumbu silang (`stretch`, `center`, `flex-start`, `flex-end`).
* `gap` — Jarak antar-item flex.

#### 6. Grid Layout
* `display: grid` — Mengaktifkan mode grid pada wadah.
* `grid-template-columns` — Menentukan jumlah dan ukuran kolom.
* `grid-template-rows` — Menentukan jumlah dan ukuran baris.
* `gap` — Jarak antar-sel grid.

#### 7. Animasi & Transisi
* `transition` — Perubahan properti CSS secara halus saat terjadi perubahan state.
* `transform` — Memutar, mengubah ukuran, atau menggeser elemen (`rotate`, `scale`, `translate`).
* `@keyframes` & `animation` — Pembuatan animasi kustom kompleks.

---

### C. Referensi Sintaks & Konsep Utama JavaScript

#### 1. Deklarasi Variabel
* `let` — Variabel yang nilainya dapat diubah (*block-scoped*).
* `const` — Variabel konstan yang nilainya tidak dapat diubah setelah diinisialisasi.
* `var` — Variabel versi lama (*function-scoped*, sebaiknya dihindari di JS modern).

#### 2. Tipe Data Utama
* **Primitive:** `String`, `Number`, `Boolean` (`true`/`false`), `Undefined`, `Null`, `Symbol`, `BigInt`.
* **Non-Primitive:** `Object`, `Array`, `Function`.

#### 3. Operator
* **Aritmatika:** `+`, `-`, `*`, `/`, `%` (sisa bagi), `**` (pangkat).
* **Penugasan:** `=`, `+=`, `-=`, `*=`, `/=`.
* **Perbandingan:** `==` (nilai sama), `===` (nilai dan tipe data sama), `!=`, `!==`, `>`, `<`, `>=`, `<=`.
* **Logika:** `&&` (AND), `||` (OR), `!` (NOT).

#### 4. Pengondisian (Control Flow)
```javascript
// if ... else
if (nilai >= 75) {
  console.log("Lulus");
} else {
  console.log("Tidak Lulus");
}

// Ternary Operator
const status = nilai >= 75 ? "Lulus" : "Tidak Lulus";

// Switch Case
switch (hari) {
  case "Senin":
    console.log("Awal minggu");
    break;
  default:
    console.log("Hari biasa");
}
```

#### 5. Perulangan (Loops)
```javascript
// For Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Array Methods (Perulangan Modern)
const angka = [1, 2, 3];
angka.forEach(n => console.log(n));      // Iterasi item
const ganda = angka.map(n => n * 2);      // Membuat array baru
const genap = angka.filter(n => n % 2 === 0); // Menyaring item
```

#### 6. Fungsi (Functions)
```javascript
// Regular Function
function sapa(nama) {
  return "Halo " + nama;
}

// Arrow Function (ES6)
const sapaModern = (nama) => `Halo ${nama}`;
```

#### 7. DOM Manipulation (Interaksi dengan HTML)
* `document.getElementById('id')` — Mengambil elemen berdasarkan ID.
* `document.querySelector('.class / tag / #id')` — Mengambil satu elemen pertama dengan selektor CSS.
* `document.querySelectorAll('.class')` — Mengambil semua elemen yang cocok.
* `element.textContent` — Mengubah isi teks di dalam elemen.
* `element.innerHTML` — Mengubah isi HTML di dalam elemen.
* `element.classList.add() / remove() / toggle()` — Manipulasi class CSS pada elemen.
* `element.addEventListener('click', callback)` — Menjalankan fungsi saat terjadi event (seperti klik, ketik, submit).

#### 8. Asynchronous JavaScript
* `Promise` — Objek untuk menangani operasi asinkron.
* `async` / `await` — Sintaks modern untuk membaca kode asinkron layaknya sinkron.
* `fetch(url)` — Mengambil data dari server/API secara asinkron.

```javascript
// Contoh Fetch Data
async function ambilData() {
  try {
    const respon = await fetch('https://api.example.com/data');
    const data = await respon.json();
    console.log(data);
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }
}
```
