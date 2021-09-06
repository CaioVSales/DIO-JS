const user = {
    nome: 'Caio'
};
//Você não pode mudar o nome da const
console.log(user);
//Mas pode mudar o objeto
user.nome = 'Victor';

console.log(user.nome);

//Porém não pode mudar para onde aponta!!!!