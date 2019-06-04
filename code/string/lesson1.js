export default (str) => {
  return str.split(' ').map(item => Array.from(item).reverse().join('')).join(' ')
}
