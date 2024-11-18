document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nisInput = document.getElementById('nis').value;
  
  // Daftar NIS yang sudah ditentukan dengan nama
  const validNisList = {
      "24011801" :  "Abyakta",
      "24011802" :  "Adhhira",
      "24011803" :  "Ahmad",
      "24011804" :  "Alvarro",
      "24011805" :  "Bintang",
      "24011806" :  "Aqila",
      "24011807" :  "Ardyansah",
      "24011808" :  "Arifah",
      "24011809" :  "Aulia Cintya",
      "24011810" :  "Aulia Rossi",
      "24011811" :  "Avallent",
      "24011812" :  "Azizah",
      "24011813" :  "Bidhary",
      "24011814" :  "Denia",
      "24011815" :  "Dwi Handika",
      "24011816" :  "Hasya",
      "24011817" :  "Helambang",
      "24011818" :  "Ivo",
      "24011819" :  "Kelvin",
      "24011820" :  "Marvel",
      "24011821" :  "Fardan",
      "24011823" :  "Nova",
      "24011824" :  "Pratama",
      "24011825" :  "Puan",
      "24011826" :  "Putri",
      "24011827" :  "Revan",
      "24011828" :  "Ririn",
      "24011829" :  "Rizka",
      "24011830" :  "Septian",
      "24011831" :  "Sofyan",
      "24011832" :  "Syahid",
      "24011833" :  "Syahrul",
      "24011834" :  "Taraka",
      "24011835" :  "Moelmo"
  };

  // Cek apakah NIS yang dimasukkan ada di dalam daftar
  if (validNisList[nisInput]) {
    // Login berhasil dan loading
      userName = validNisList[nisInput];
      const loadingModal = document.getElementById('loadingModal');
      loadingModal.style.display = "block"; // tampilan modal loading

      // randam durasi loading biar real
      const randomDuration = Math.floor(Math.random() *5) + 2; // angka acar antara 2 hingga 10

      // simulasikan proses loading dengan durasi acak
      setTimeout(function() {
        const userName = validNisList[nisInput];
        //sembunyikan modoal loading dan arahkan ke halaman baru
        loadingModal.style.display = "none";
        window.location.href = 'public/home.html';
        console.log('welcome' + userName);
      }, randomDuration * 1000);
  } else {
    // Tampilkan pesan error jika NIS tidak valid
    document.getElementById('errorMessage').textContent = 'NIS tidak valid atau belum terdaftar';
  }
});