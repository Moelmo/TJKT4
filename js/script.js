// home page
// welcome scrtipt
        // Fungsi untuk menampilkan popup
        function showPopup() {
            document.getElementById('popupBackground').style.display = 'block';
        }

        // Fungsi untuk logout
        function logout() {
            window.location.href = '../index.html'; // Arahkan kembali ke halaman login
        }

        // Fungsi untuk melanjutkan ke halaman utama
        function continueToPage() {
            document.getElementById('popupBackground').style.display = 'none'; // Tutup popup
        }

        // Menampilkan popup saat halaman dimuat
        window.onload = function () {
            showPopup();
        };

// update jadwal
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
        
        // animasi muncul gambar struktur 
        /* document.addEventListener("scroll", function() {
            const strukturElement = document.getElementById("Struktur");
            const rect = strukturElement.getBoundingClientRect();
        
            // Cek jika elemen terlihat di viewport
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                strukturElement.classList.add("visible");
            }
        }); */
