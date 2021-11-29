export const formatTwoDigitNumber = value => {
  if (!value) return '00';
  return value.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
};

export function convertNumberToCurrency(data) {
  return data ? `${data?.toString()?.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}₫` : '0₫';
}

export function convertNumberToPercent(data) {
  return data ? `${data?.toString()?.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}%` : '0.00%';
}
