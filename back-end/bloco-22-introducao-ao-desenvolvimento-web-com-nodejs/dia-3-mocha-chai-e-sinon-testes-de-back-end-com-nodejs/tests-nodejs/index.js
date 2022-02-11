function numberDetails(number) {
  if (typeof number !== 'number') {
    return 'o valor deve ser um número';
  }

  let result = 'neutro';
  if (number > 0) {
    result = 'positivo';
  }
  if (number < 0) {
    result = 'negativo';
  }
  return result;
}

console.log(numberDetails(1));
console.log(numberDetails(-1));
console.log(numberDetails(0));
console.log(numberDetails('a'));

module.exports = numberDetails;
