
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find((item) => item === day);
            if (cek) {
                resolve(cek);
            } else {
                reject(new Error('Hari ini bukan hari kerja'));
            }
        }, 3000);
    });
}

// Menggunakan then-catch untuk menangani hasil dari Promise
cekHariKerja('kamis')
    .then((result) => {
        console.log(`${result} adalah hari kerja.`);
    })
    .catch((error) => {
        console.error(error.message);
    });

    
    
    // Menggunakan try-catch untuk menangani hasil dari Promise dengan async-await
    const cekHari = async (day) => {
        try {
            const result = await cekHariKerja(day);
            console.log(`${result} adalah hari kerja.`);
        } catch (error) {
            console.error(error.message);
        }
    }
    
    cekHari('minggu');
    