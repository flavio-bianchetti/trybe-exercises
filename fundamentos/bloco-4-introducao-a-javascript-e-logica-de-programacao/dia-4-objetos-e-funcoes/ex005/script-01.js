/*
  Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

*/
function returnDecimalNumber(roman) {
  let romanInDecimal = [
    /*{ decimal: 4, roman: 'IV' },
    { decimal: 9, roman: 'IX' },
    { decimal: 40, roman: 'XL' },
    { decimal: 90, roman: 'XC' },
    { decimal: 400, roman: 'CD' },
    { decimal: 900, roman: 'CM' },*/
    { decimal:  1, roman: 'I' },
    { decimal: 5, roman: 'V' },
    { decimal: 10, roman: 'X' },
    { decimal: 50, roman: 'L' },
    { decimal: 100, roman: 'C' },
    { decimal: 500, roman: 'D' },
    { decimal: 1000, roman: 'M' }
  ];

  for (let index = 0; index < romanInDecimal.length; index += 1) {
    if (romanInDecimal[index].roman === roman) {
      return romanInDecimal[index].decimal;
    }
  }
  return 0;
}
function romanNumberInDecimal(romanNumber) {
  let result = returnDecimalNumber(romanNumber[0]);
  for (let index = 1; index < romanNumber.length; index += 1) {
    if (returnDecimalNumber(romanNumber[index]) > returnDecimalNumber(romanNumber[index - 1])) {
      result += (returnDecimalNumber(romanNumber[index]) - returnDecimalNumber(romanNumber[index - 1]) * 2);
    } else {
        result += returnDecimalNumber(romanNumber[index]);
    }
  }
  return result;
}

console.log(romanNumberInDecimal('XIV'));
console.log(romanNumberInDecimal('XXIX'));
console.log(romanNumberInDecimal('IL'));
console.log(romanNumberInDecimal('IC'));
console.log(romanNumberInDecimal('ICC'));
console.log(romanNumberInDecimal('IM'));
console.log(romanNumberInDecimal('MCCCLXXIX'));
