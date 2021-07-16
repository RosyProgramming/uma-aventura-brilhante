// const subtrair = (a,b) => a-b;
// const aplicaOperacao = (a,b, operacao) => operacao(a,b);

// let resultado = aplicaOperacao(4, 2, subtrair);
// console.log(resultado);

// const somarX = (x) => (y) => x+y;

// const somar2 = somarX(2);
// const somar3 = somarX(3);

// console.log(somar3(5));

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const aplicarOperacao = (a, b, operacao) => operacao(a,b);

const resultado1  = aplicarOperacao(1,2,somar);
const resultado2 = aplicarOperacao(1,2,subtrair); 

console.log(resultado1);
console.log(resultado2);

const somarX = (x) => (y) => x + y;

const somar1 = somarX(1);
const somar2 = somarX(2);
const somar3 = somarX(3);

console.log(somarX);
console.log(somar1);
console.log(somar2);
console.log(somar3);


