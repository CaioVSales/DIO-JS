const user = {
    name: 'Caio',
    lastName: 'Sales'
};

//Recuperar as chaves do objeto:
console.log(Object.keys(user));

//Recupera os valores das chaves do objeto:
console.log(Object.values(user));

//Retorna um array de arrays contendo [ nome_prop, valor_prop]:
console.log(Object.entries(user));

//Mergear propriedades de objetos:
Object.assign(user, {fullName: 'Caio Sales'});
console.log(user);
console.log(Object.assign({}, user, {age: 18}));

// Previne todas as alterações em um objeto:
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';
console.log(newObj);

// Permite apenas a alteração de propriedades existentes em um objeto:
const person = { name: 'Caio' };
Object.seal(person);

person.name = 'Caio Sales';
delete person.name;
person.age = 18;

console.log(person);