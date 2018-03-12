/*

forEach: chama uma função como callback percorrendo os elementos de um array

*/

let listaDeNomes = ['Flávio', 'Rogers', 'Júlia', 'Obama'];

function mostraNomes(valor) {
    return console.log(`valor da array: ${valor}.`);
};

let novaLista = listaDeNomes.forEach(mostraNomes);


//outro teszte
let saldo = 0;

let depositos = [50, 120, 300];

function juros(valor){
    return valor * 1.05
}

depositos = depositos.map(juros);

console.log(depositos);

function saldoTotal(valor){
    return saldo += valor
};

depositos.forEach(saldoTotal);

console.log(saldo)

//conteudo da aula 5, mas nao irei fazer um novo js
/*
numeros.reduce(function(total,num) {
    return total * num;
}, 1);
*/
numeros = [1, 5, 5, 6];
valorFinal = numeros.reduce((total,num) => total * num, 1);

console.log(valorFinal)