/**
 * Converts a number to its word representation in Indonesian.
 * @param {number} num - The number to be converted.
 * @returns {string} - The word representation of the number.
 */
function numberToWords(num) {
    // Define the units, teens, tens, thousands, and thousands labels
    const units = ['', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan'];
    const teens = ['Sepuluh', 'Sebelas', 'Dua belas', 'Tiga belas', 'Empat belas', 'Lima belas', 'Enam belas', 'Tujuh belas', 'Delapan belas', 'Sembilan belas'];
    const tens = ['', 'Sepuluh', 'Dua puluh', 'Tiga puluh', 'Empat puluh', 'Lima puluh', 'Enam puluh', 'Tujuh puluh', 'Delapan puluh', 'Sembilan puluh'];
    const thousands = ['', 'Ribu', 'Juta', 'Miliar', 'Triliun'];

    // Handle the special cases of 0 and 00
    if (num === 0) return 'NOL';
    if (num === 0) return 'Nol';

    /**
     * Converts a three-digit number to its word representation.
     * @param {number} n - The three-digit number to be converted.
     * @returns {string} - The word representation of the number.
     */
    function convertHundreds(n) {
        if (n === 0) return '';
        if (n < 10) return units[n].toUpperCase();
        if (n < 20) return teens[n - 10].toUpperCase();
        if (n < 100) {
            const ten = Math.floor(n / 10);
            const unit = n % 10;
            return tens[ten].toUpperCase() + (unit ? ' ' + units[unit].toUpperCase() : '');
        }
        if (n < 200) {
            return 'SERATUS' + (n % 100 ? ' ' + convertHundreds(n % 100) : '').toUpperCase();
        }
        if (n < 1000) {
            const hundred = Math.floor(n / 100);
            const rest = n % 100;
            return units[hundred].toUpperCase() + ' RATUS' + (rest ? ' ' + convertHundreds(rest) : '').toUpperCase();
        }
    }

    let result = '';
    let thousandIndex = 0;

    // Convert the number to its word representation
    while (num > 0) {
        const chunk = num % 1000;
        if (chunk > 0) {
            result = convertHundreds(chunk) + (thousands[thousandIndex] ? ' ' + thousands[thousandIndex] : '') + (result ? ' ' + result : '');
        }
        num = Math.floor(num / 1000);
        thousandIndex++;
    }

    let value = result.trim().toUpperCase();
    return value;
}

console.log(numberToWords(8981347800000));

// Contoh penggunaan

export const numberToWord = numberToWords;
