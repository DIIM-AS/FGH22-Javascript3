const cekMataPelajaran = (subject) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataSubject = ['matematika', 'kimia', 'biologi', 'PPKN', 'olahraga'];
            let cek = dataSubject.find((item) => item === subject);
            if (cek) {
                resolve(cek);
            } else {
                reject(new Error('Hari ini tidak ada mata pelajaran tersebut'));
            }
        }, 2000);
    });
}

// Menggunakan then-catch untuk menangani hasil dari Promise
cekMataPelajaran('kimia')
    .then((result) => {
        console.log(`${result} adalah mata pelajaran yang tersedia hari ini.`);
    })
    .catch((error) => {
        console.error(error.message);
    });

    
   //Contoh tugas kedua
   const cekSiswaHadir = (nama) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataSiswa = ['Aji', 'Annam', 'Budi', 'Rofi', 'Zifa'];
            let cek = dataSiswa.find((item) => item === nama);
            if (cek) {
                resolve(cek);
            } else {
                reject(new Error('Siswa tidak hadir'));
            }
        }, 3000);
    });
}

// Menggunakan try-catch untuk menangani hasil dari Promise dengan async-await
const cekKehadiranSiswa = async (nama) => {
    try {
        // Mencoba untuk mendapatkan hasil dari cekSiswaHadir dengan await
        const result = await cekSiswaHadir(nama);
        // Jika berhasil, tampilkan pesan bahwa siswa hadir
        console.log(`${result} hadir di kelas.`);
    } catch (error) {
        // Jika terjadi error, tangkap dan tampilkan pesan error
        console.error(error.message);
    }
}

// Memanggil fungsi cekKehadiranSiswa dengan nama siswa yang ingin dicek
cekKehadiranSiswa('Budi');

    