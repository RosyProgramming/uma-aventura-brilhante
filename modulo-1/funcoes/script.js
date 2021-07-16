// function escreva(texto){
//     console.log(texto);
// }

// escreva('Meu primeiro parametro');

// escreva('Meu segundo parametro');

// function somar(a,b){
//     return a+b;
// }

// let resultado = somar(1,3);
// console.log(resultado);

// const somar = (a,b) => a+b;

// console.log(somar(1,3));

// Definindo a função
// function geradorNumerico(){
//     for(let i = 0; i < 10; i++){
//         console.log(i);
//     }
// }

// // Chamando a função
// geradorNumerico();

// Definindo a função
// function geradorNumerico(comeco, fim){
//     for(let i = comeco; i <= fim; i++){
//         console.log(i);
//     }
// }

// // Chamando a função
// geradorNumerico(10,20);

// function soma(a,b){
//     return a+b;
// }

// const resultado = soma(2,3);

// console.log(resultado);

// // Usando function
// function soma1(a,b) { return a+b; }
// console.log(soma1);
// // Atribuindo uma função anônima em constantes
// const soma2 = function(a,b){ return a+b; };
// console.log(soma2);
// // Atribuindo uma função de "flecha" em constantes
// const soma3 = (a,b) => a+b;
// console.log(soma3);

let name = "Rosana";

const hello1 = () => "Hello World!";
const hello2 = (name) => "Hello " + name;
const hello3 = (name) => {return "Hello " + name;};

console.log(hello1);
console.log(hello2);
console.log(hello3);