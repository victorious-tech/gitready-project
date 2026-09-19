// Menambahkan alert sederhana saat tombol "Submit" ditekan
document.addEventListener('DOMContentLoaded', () => {
    const joinForm = document.querySelector('.Join-us form');

    if (joinForm) {
        joinForm.addEventListener('submit', function (event) {
            // Mencegah form untuk submit/refresh halaman secara default
            event.preventDefault();

            // Mengambil nilai input dari form
            const name = document.getElementById('Name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            // Validasi sederhana
            if (name === '' || email === '' || phone === '') {
                alert('Mohon isi semua field (Full Name, Email, dan Phone Number) sebelum submit.');
            } else {
                alert(`Terima kasih ${name} telah mendaftar!\nKami akan segera menghubungi Anda di ${email}.`);
                
                // Mengosongkan form setelah berhasil "submit"
                joinForm.reset();
            }
        });
    }

    // Efek sederhana saat mengklik kontak (opsional)
    const contactBoxes = document.querySelectorAll('.contact-box');
    contactBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const platform = box.querySelector('.label').innerText;
            alert(`Membuka profil ${platform} BNCC...`);
        });
    });
});