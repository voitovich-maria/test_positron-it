export default function numberFormat(value) {
  return new Intl.NumberFormat('de', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(value);
}
