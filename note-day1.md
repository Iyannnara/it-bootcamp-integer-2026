# Day 1 — Sabtu, 17 Oktober 2026

## Topic
- Logic & Problem Solving
- CLI / Terminal
- Version Control

---

## 1. Apa itu Algorithm?

**Definisi**  
Serangkaian langkah yang disusun secara teratur, jelas, dan **efisien** untuk mencapai tujuan atau menyelesaikan masalah.  
Alur tidak boleh terlalu panjang atau berbelit-belit.

**Contoh sederhana: Algorithm memasak mie**
1. Siapkan air, mie, bumbu, dan panci.
2. Rebus air hingga mendidih.
3. Masukkan mie, masak 2–3 menit.
4. Tiriskan mie.
5. Campurkan bumbu.
6. Aduk rata → selesai.

**Karakteristik algorithm yang baik**
- **Finite** → pasti berakhir
- **Definite** → setiap langkah jelas, tidak ambigu
- **Effective** → langkahnya bisa dikerjakan
- **Efficient** → tidak boros waktu/sumber daya

---

## 2. Komponen Dasar Algorithm

| Komponen   | Penjelasan                 | Contoh                         |
| ---------- | -------------------------- | ------------------------------ |
| **Input**  | Data yang dimasukkan       | Bahan mie, air, bumbu          |
| **Proses** | Langkah-langkah pengolahan | Merebus, meniriskan, mencampur |
| **Output** | Hasil akhir                | Mie yang siap dimakan          |

---

## 3. Tiga Fondasi Algorithm

### 1. Sequence (Urutan)
Instruksi dijalankan **satu per satu** dari atas ke bawah.

```
1. Ambil panci
2. Isi air
3. Nyalakan kompor
```

### 2. Selection (Pengambilan Keputusan)
Ada kondisi `if` / `else` / `switch`.

```
Jika air sudah mendidih → masukkan mie
Jika belum → tunggu lagi
```

### 3. Iteration (Perulangan)
Mengulang langkah sampai kondisi terpenuhi.

```
Selama mie belum matang → aduk setiap 30 detik
```

---

## 4. Pseudocode & Flowchart

### Pseudocode
Menuliskan langkah algorithm dengan bahasa sederhana yang menyerupai kode program, **tanpa terikat** syntax bahasa tertentu.

**Contoh Pseudocode memasak mie:**
```
MULAI
Siapkan bahan
Rebus air sampai mendidih
Masukkan mie
Tunggu 3 menit
Tiriskan
Campur bumbu
Sajikan
SELESAI
```

### Flowchart
Diagram visual yang menunjukkan alur dengan simbol-simbol standar.

**Simbol penting:**
- Oval → Start / End
- Persegi panjang → Proses
- Belah ketupat → Keputusan (Ya/Tidak)
- Paralelogram → Input / Output
- Panah → Alur

### Kapan pakai apa?

| Situasi                                             | Rekomendasi    |
| --------------------------------------------------- | -------------- |
| Memahami gambaran besar & menjelaskan ke orang lain | **Flowchart**  |
| Menulis langkah detail sebelum coding               | **Pseudocode** |
| Dokumentasi & diskusi tim                           | **Keduanya**   |

---

## 5. Pola Pikir Software Engineer

1. **Problem Understanding**  
   Pahami masalahnya dulu. Apa yang sebenarnya terjadi? Siapa yang terdampak?

2. **Logical Thinking**  
   Gunakan hubungan sebab-akibat, aturan, batasan, dan kemungkinan yang harus ditangani sistem.

3. **Problem Solving**  
   Pecah masalah besar menjadi bagian kecil → pilih algorithm/pendekatan → uji apakah solusi benar.

4. **Implementation**  
   Implementasikan dengan struktur yang jelas, aman, efisien, dan mudah dikembangkan (maintainable).

---

## 6. Kesalahan Umum dalam Problem Solving

| Kesalahan                      | Dampak                            |
| ------------------------------ | --------------------------------- |
| Langsung coding tanpa analisis | Solusi berantakan, banyak bug     |
| Hanya mengobati gejala         | Masalah akar tetap ada            |
| Over-engineering               | Kode terlalu rumit, susah dirawat |
| Tanpa pengujian lengkap        | Bug muncul di production          |
| Abaikan dampak perubahan       | Fitur lama rusak (side effect)    |

**Prinsip:**  
Pahami dulu → pecah masalah → rancang → baru coding → uji.

---

## 7. CLI / Terminal (Command Line Interface)

### Apa itu Terminal?
Cara berinteraksi dengan komputer **tanpa GUI**, hanya dengan mengetik perintah (command).

### Kenapa penting buat developer?
- Lebih cepat untuk banyak tugas
- Wajib untuk Git, npm, Docker, server, dll.
- Bisa otomatisasi (script)
- Banyak tools hanya tersedia di CLI

### Perintah Dasar yang Harus Dikuasai

| Perintah           | Fungsi                             |
| ------------------ | ---------------------------------- |
| `pwd`              | Lihat lokasi folder sekarang       |
| `ls` / `ls -la`    | Lihat isi folder                   |
| `cd nama_folder`   | Pindah folder                      |
| `cd ..`            | Naik satu level                    |
| `mkdir nama`       | Buat folder baru                   |
| `touch file.txt`   | Buat file kosong                   |
| `cat file.txt`     | Baca isi file                      |
| `rm file.txt`      | Hapus file                         |
| `rm -r folder`     | Hapus folder + isinya              |
| `cp sumber tujuan` | Copy file/folder                   |
| `mv sumber tujuan` | Pindah / rename                    |
| `clear`            | Bersihkan layar terminal           |
| `history`          | Lihat perintah sebelumnya          |
| `Ctrl + C`         | Hentikan proses yang sedang jalan  |
| `Ctrl + L`         | Clear layar (sama seperti `clear`) |

### Tips
- Gunakan `Tab` untuk auto-complete
- Gunakan `↑` / `↓` untuk memanggil perintah sebelumnya
- Selalu hati-hati dengan `rm -rf` (sangat berbahaya)

---

## 8. Version Control

### Pengertian
Sistem yang **mencatat setiap perubahan** pada file.  
Kita bisa melihat sejarah, membandingkan, dan mengembalikan ke versi sebelumnya.

### Manfaat utama
- Riwayat perubahan (siapa, kapan, kenapa)
- Backup otomatis
- Kolaborasi tim
- Rollback saat ada kesalahan

### Solo vs Team

| Mode               | Analogi                                               |
| ------------------ | ----------------------------------------------------- |
| **Solo Developer** | Checkpoint di game → alat penyelamat progress         |
| **Team**           | Sistem koordinasi → kerja bareng tidak saling menimpa |

---

## 9. Git vs GitHub

| Istilah               | Arti                                                        |
| --------------------- | ----------------------------------------------------------- |
| **Repository (Repo)** | Folder proyek yang dilacak Git                              |
| **Commit**            | Menyimpan perubahan + pesan                                 |
| **Push**              | Kirim update ke remote (GitHub)                             |
| **Pull**              | Ambil update dari remote                                    |
| **Clone**             | Menyalin seluruh repo dari GitHub ke lokal                  |
| **Branch**            | Jalur kerja terpisah (untuk fitur baru / eksperimen)        |
| **Pull Request (PR)** | Ajukan perubahan agar ditinjau & digabung                   |
| **Conflict**          | Perubahan di tempat yang sama, tidak bisa digabung otomatis |
| **Merge**             | Menggabungkan history dari satu branch ke branch lain       |

### Alur Kerja Git

```
Working Directory → Staging Area → Local Repository → Remote (GitHub)
(edit file)         (git add)       (git commit)       (git push)
```

### Perintah Git Dasar yang Wajib Diingat

```bash
git init                    # Mulai repo baru
git status                  # Cek status file
git add .                   # Masukkan semua perubahan ke staging
git add nama_file           # Masukkan file tertentu
git commit -m "pesan"       # Simpan perubahan
git log                     # Lihat history commit
git branch                  # Lihat daftar branch
git branch nama-branch      # Buat branch baru
git checkout nama-branch    # Pindah branch
git checkout -b nama-branch # Buat + pindah branch
git merge nama-branch       # Gabungkan branch
git pull                    # Ambil update dari remote
git push                    # Kirim ke remote
git clone url-repo          # Salin repo dari GitHub
```

### Aturan Kolaborasi yang Baik
1. Bagi tugas dengan jelas
2. Selalu kerja di **branch terpisah**
3. Commit harus **fokus** (satu tujuan per commit)
4. Review kode sebelum merge (via Pull Request)
5. Jangan push langsung ke `main` / `master`
6. Selalu `git pull` dulu sebelum mulai kerja baru
7. Jaga keamanan: jangan commit file sensitif (`.env`, password, dll)

---

## Ringkasan Hari Ini

| Materi                 | Poin Kunci                                                 |
| ---------------------- | ---------------------------------------------------------- |
| Algorithm              | Langkah teratur + efisien (Sequence, Selection, Iteration) |
| Pseudocode & Flowchart | Pseudocode untuk detail, Flowchart untuk gambaran besar    |
| Pola pikir Engineer    | Pahami → Logika → Pecah masalah → Implementasi             |
| CLI                    | Wajib dikuasai, jauh lebih cepat daripada GUI              |
| Version Control        | Git = tool lokal, GitHub = tempat remote + kolaborasi      |

---

