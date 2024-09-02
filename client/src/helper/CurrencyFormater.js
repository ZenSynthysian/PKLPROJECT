/**
 * Formats a number as a currency with two decimal places.
 * @param {string} currency - The currency code (e.g., 'IDR', 'USD').
 * @param {string} - The locale code (e.g., 'id-ID', 'en-US').
 * @param {number} number - The number to be formatted.
 * @returns {string} - The formatted currency string.
 */
function CurrencyFormaters(currency, number) {
    // Use Intl.NumberFormat to format the number as a currency with 2 decimal places
    const a = new Intl.NumberFormat({
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(number);
    return a + '.00';
}

export const CurrencyFormater = CurrencyFormaters;
// Example usage
// const amount = 1234567.89;
// console.log(CurrencyFormater('IDR', 'id-ID', amount)); // Outputs: "1.234.567,89 €"
