function CurrencyFormaters(currency, number) {
    return new Intl.NumberFormat({
        style: 'currency',
        currency: `${currency}`, // You can change this to your desired currency
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(number);
}

export const CurrencyFormater = CurrencyFormaters;
// Example usage
// const amount = 1234567.89;
// console.log(CurrencyFormater('IDR', 'id-ID', amount)); // Outputs: "1.234.567,89 €"
