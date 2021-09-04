// function soma(n1, n2){
//     return n1 + n2;
// }
// console.log(soma(10, 3));

// function validaIdade(idade){
//    if (idade >= 18){
//     var validar = true;
//    }else{
//        validar = false;
//    }
//    return validar
// }

// var idade = prompt("Qual a sua idade: ");
// console.log(validaIdade(idade));

function botao(){
    // console.log("Obrigado por clicar!");
    // console.log(document.getElementById("agradecimento"));
    //o innerHTML permite colocar qualquer elemento
    document.getElementById("agradecimento").innerHTML = "Obrigado por Clicar!";
}

function redirecionar(){
    window.open("https://digitalinnovation.one");
}

// function troca(){
//     document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
//     console.log("trocar texto");
// }

// function voltar(){
//     document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
// }

function troca(elemento){
    elemento.innerHTML = "Obrigado por passar!";
    console.log("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load(){
    console.log("Página carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}