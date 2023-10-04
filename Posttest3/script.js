var konfirmasi = confirm("yakin ingin liat?")
if(konfirmasi==true){
    console.log("oke");
}else{
    console.log("aksi batal")
}
document.addEventListener("DOMContentLoaded", function () {
    const icon = document.getElementById('icon');

    function toggleLightMode() {
        const body = document.body;
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }

    function toggleDarkMode() {
        const body = document.body;
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    }
    icon.addEventListener('click', function () {
        const body = document.body;
        if (body.classList.contains('light-mode')) {
            toggleDarkMode();
        } else {
            toggleLightMode();
        }
    });
});

document.getElementById('name').textContent = 'Alianur';
document.getElementById('nim').textContent = 'NIM: 2209106025';
document.getElementById('address').textContent = 'Alamat: Jl. jalan No.123 Kota Atlantis Utara';
document.getElementById('birth').textContent = 'Tempat, Tanggal Lahir: Kota Anda, 1-11-2000';
document.getElementById('contact').textContent = 'Kontak: +62 812 3456 7890 / email@example.com';
document.getElementById('year').textContent = new Date().getFullYear();