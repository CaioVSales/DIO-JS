// o VAR não respeita o escopo de bloco, diferente do let/const
var test = 'valor função';

(() => {
    let test = 'valor função';
    console.log(`valor dentro da função "${test}"`);

    if (true) {
        test = 'val função';
        console.log(`valor dentro do if "${test}"`);
    }

    console.log(`valor após a execução do if "${test}"`);

})();