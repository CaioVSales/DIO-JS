const myNumber = 13.4032;

//Transformação de Number para String:

const numberAsString = myNumber.toString();
console.log(typeof numberAsString);

//Retorna Number com um número de casas decimais:
const fixedTwoDecimals = myNumber.toFixed(2);
console.log(fixedTwoDecimals);

//Transforma uma String em Float:
console.log(parseFloat('13.13'));

//Transforma uma String em Int:
console.log(parseInt('13.12'));