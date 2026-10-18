
const judul = document.getElementById('judul');
const tombol = document.getElementById('btnUbah');


tombol.addEventListener('click', function() {
    judul.textContent = "Teks Berhasil Diubah! 🎉";
    judul.style.color = "#28a745"; 
});