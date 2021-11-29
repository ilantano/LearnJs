export function formatNumberToMoney(values) {
  return values?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '₫';
}
export function countUnitPrice(unitPrice, percent) {
  return (unitPrice * percent) / 100;
}
