# Catatan Dasar Web Development

## 1. Web Statis vs Web Dinamis

- **Web Statis:** 
  - **Karakteristik:** Tampilannya tetap dan kontennya sama untuk semua pengguna/setiap kali dibuka (kecuali kode sumbernya diubah secara manual).
  - **Contoh:** Website portofolio pribadi, landing page sederhana, atau dokumentasi statis.
- **Web Dinamis:** 
  - **Karakteristik:** Konten dapat berubah secara otomatis berdasarkan interaksi pengguna, data dari database, waktu, atau faktor lainnya.
  - **Contoh:** Dashboard admin, e-commerce, media sosial, dan platform berita.

---

## 2. Analogi HTML, CSS, dan JavaScript

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

---

## 3. Tag & Sintaks Dasar

### A. HTML (Elemen / Tag Utama)

Tag HTML digunakan untuk membangun struktur halaman web.

```html
<!DOCTYPE1 html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Judul Halaman Web</title>
</head>
<body>
  <!-- Header / Judul -->
  <h1>Ini Judul Utama (Heading 1)</h1>
  <h2>Ini Sub-judul (Heading 2)</h2>

  <!-- Teks & Paragraf -->
  <p>Ini adalah sebuah paragraf teks.</p>

  <!-- Container / Pembungkus -->
  <div>
    <p>Di dalam container (div)</p>
  </div>

  <!-- Tautan / Link -->
  <a href="https://example.com">Klik di sini untuk buka link</a>

  <!-- Gambar -->
  <img src="gambar.jpg" alt="Deskripsi gambar">

  <!-- List / Daftar -->
  <ul>
    <li>Item list 1</li>
    <li>Item list 2</li>
  </ul>

  <!-- Form & Tombol -->
  <input type="text" placeholder="Masukkan nama...">
  <button>Klik Saya</button>
</body>
</html>
```

---

### B. CSS (Sintaks & Properti Utama)

CSS digunakan untuk menghias dan memberi gaya pada tag HTML.

```css
/* Menargetkan elemen h1 */
h1 {
  color: #2c3e50;         /* Warna teks */
  font-size: 24px;         /* Ukuran font */
  text-align: center;      /* Sumbu posisi teks */
}

/* Menargetkan class (.tombol) */
.tombol {
  background-color: #3498db; /* Warna latar belakang */
  color: white;              /* Warna teks */
  padding: 10px 20px;        /* Jarak dalam tombol */
  border-radius: 5px;        /* Kelengkungan sudut */
  border: none;              /* Garis tepi */
  cursor: pointer;           /* Bentuk kursor saat hover */
}

/* Efek saat tombol di-hover cursor */
.tombol:hover {
  background-color: #2980b9;
}
```

---

### C. JavaScript (Dasar Interaktivitas)

JavaScript digunakan untuk membuat logika dan respon pada web.

```javascript
// 1. Variabel
let nama = "Budi";
const umur = 20;

// 2. Fungsi sederhana
function sapaPengguna(namaUser) {
  console.log("Halo, " + namaUser + "!");
}

// Menjalankan fungsi
sapaPengguna(nama);

// 3. Mengambil elemen HTML dan memberi aksi (Event Listener)
const tombol = document.querySelector(".tombol");

tombol.addEventListener("click", function() {
  alert("Tombol berhasil diklik!");
});
```