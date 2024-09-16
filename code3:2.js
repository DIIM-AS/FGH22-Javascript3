const getMonth = (callback) => {
        setTimeout(() => {
            let error = false;
            let months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
            if (!error) {
                callback(null, months);
            } else {
                callback(new Error('Sorry, Data Not Found'), []);
            }
        }, 4000);
    };
    
    const showMonths = (error, months) => {
        if (error) {
            console.error(error.message);
        } else {
            // Menggunakan map untuk menampilkan semua bulan
            months.map((month) => console.log(month));
        }
    };
    
    // Memanggil getMonth dengan callback showMonths
    getMonth(showMonths);
    