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