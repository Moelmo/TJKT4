function updateJadwal() {
    // Mendapatkan hari saat ini
    const today = new Date();
    const day = today.getDay(); // 0 = Minggu, 1 = Senin, ..., 6 = Sabtu

    // Mendapatkan semua elemen jadwal
    const jadwalElements = document.querySelectorAll('.jadwal');

    // Mengatur warna untuk hari yang terpilih dan tidak terpilih
    jadwalElements.forEach((element) => {
        element.classList.remove('terpilih', 'tidak-terpilih'); // Hapus kelas sebelumnya
        const elementHari = parseInt(element.getAttribute('data-hari')); // Ambil hari dari atribut

        if (elementHari === day) {
            element.classList.add('terpilih'); // Hari terpilih
        } else {
            element.classList.add('tidak-terpilih'); // Hari tidak terpilih
        }
    });
}

// Memanggil fungsi updateJadwal saat halaman dimuat
updateJadwal();

// Mengatur interval untuk mengganti hari secara otomatis setiap 24 jam
setInterval(updateJadwal, 24 * 60 * 60 * 1000); // 24 jam dalam milidetik