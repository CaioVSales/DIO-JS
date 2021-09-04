// tod array começa pela posicao 0
var lista = ["maça", "pera", "laranja"];
// o push() ira adicionar um novo elemento no array
lista.push("uva");
console.log(lista);
// o pop() irá retirar um elemento no array
lista.pop();
lista.pop();
// o length() ira mostrar a quantidade de elementos do meu array
console.log(lista.length);
// o reverse() ira inverter os elementos do array
lista.reverse();
console.log(lista);
// toString() ira transformar todo o array em uma string
console.log(lista.toString());
// console.log(lista[1]);

// o join() irá adicionar algo entre cada elemento, normalmente substituindo a vírgula separadora
console.log(lista.join("-"));