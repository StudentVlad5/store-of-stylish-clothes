export function selectCurrency(value) {
  if (value === 'ua') {
    return '₴';
  } else if (value === 'usd') {
    return '$';
  } else if (value === 'euro') {
    return '€';
  } else {
    return '₴';
  }
}
export function selectNewPrice(value, it) {
  return it[`newPrice_${value}`];
}
export function selectOldPrice(value, it) {
  return it[`oldPrice_${value}`];
}
