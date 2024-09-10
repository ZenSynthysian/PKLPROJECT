function replaceSpacesAfterComma(text) {
    // Menggunakan regex untuk menemukan koma diikuti oleh satu atau lebih spasi
    return text.replace(/,(\s+)/g, function (match, p1) {
        // Mengganti spasi dengan &nbsp; sebanyak panjang spasi yang ditemukan
        return ',' + p1.replace(/ /g, '&nbsp;&nbsp;&nbsp;');
    });
}

// Contoh penggunaan:
// const kalimat = 'Ini adalah contoh, dengan spasi setelah koma, dan ini juga.';
// const hasil = replaceSpacesAfterComma(kalimat);
// console.log(hasil);

export const spaceAfterComma = replaceSpacesAfterComma;
