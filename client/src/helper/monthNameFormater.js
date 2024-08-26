function getMonthName(monthNumber) {
    // Array nama-nama bulan, Januari adalah indeks 0
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    // Validasi nomor bulan
    if (monthNumber < 1 || monthNumber > 12) {
        return 'Nomor bulan tidak valid';
    }

    // Mengembalikan nama bulan yang sesuai (nomor bulan dikurangi 1 untuk indeks array)
    return months[monthNumber - 1];
}

// Contoh penggunaan
export const monthNameFormater = getMonthName;
