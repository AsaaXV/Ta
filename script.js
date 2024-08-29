// Daftar nama yang akan diacak
let namaList = ["Alice", "Budi", "Citra", "Dani", "Eka", "Fina", "Gita", "Hani", "Ivan", "Joko"];

// Fungsi untuk memperbarui tampilan daftar nama
function updateNamaList() {
    const ul = document.getElementById('nama-list');
    ul.innerHTML = '';
    namaList.forEach(nama => {
        const li = document.createElement('li');
        li.textContent = nama;
        ul.appendChild(li);
    });
}

// Fungsi untuk mengacak dan membentuk kelompok
function acakKelompok() {
    if (namaList.length < 4) {
        alert("Tidak cukup nama untuk membentuk kelompok!");
        return;
    }

    let kelompok = [];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * namaList.length);
        kelompok.push(namaList[randomIndex]);
        namaList.splice(randomIndex, 1); // Hapus nama yang sudah digunakan
    }

    const hasilDiv = document.getElementById('hasil-kelompok');
    hasilDiv.innerHTML = `<h3>Kelompok:</h3><p>${kelompok.join(', ')}</p>`;

    updateNamaList();
}

// Event listener untuk tombol acak
document.getElementById('acak-kelompok').addEventListener('click', acakKelompok);

// Inisialisasi tampilan awal
updateNamaList();