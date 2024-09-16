// Menggunakan fetch untuk mendapatkan data dari API
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        // Memeriksa apakah responsnya sukses
        if (!response.ok) {
            throw new Error('Jaringan bermasalah, tidak bisa mengambil data');
        }
        // Mengubah respons menjadi format JSON
        return response.json();
    })
    .then(data => {
        // Mengambil dan menampilkan semua nama dari data yang didapat
        const names = data.map(user => user.name);
        console.log('Nama-nama pengguna:', names);
    })
    .catch(error => {
        // Menangani error jika terjadi masalah saat mengambil data
        console.error('Error:', error.message);
    });
