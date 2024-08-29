// Daftar nama yang akan diacak
let namaList = [
    "sulung", "fety", "emil", "Haikal", "Fathir", "zenmatho", "syahfira", 
    "jelani", "Luppiiii", "zula", "Lily", "Anggi", "Doal", "Eclin", "R A F A", 
    "Akbar", "fadlur", "stepi", "risma", "keisei", "krecia", "Annisya", "suci", 
    "Qanitah", "Kezia", "Nabile", "naura", "aura", "Fiqhy", "patim", "Aronaru",
    "FACHRI FAUZHAN A.", "Nuna", "Fahrizal", "shabrina", "lucky", "Mbut", 
    "baso (bom)", "Muh Fatur Idris"
];

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

// Fungsi untuk mengacak dan membentuk kelompok berisi 5 orang
function acakKelompok() {
    if (namaList.length < 5) {
        alert("Tidak cukup nama untuk membentuk kelompok!");
        return;
    }

    let kelompok = [];
    for (let i = 0; i < 5; i++) {
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