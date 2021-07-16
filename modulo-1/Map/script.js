// const vetor = ["10","20","30"];
// //converter o vetor para número
// const stringToInt = (x) => parseInt(x);
// //map e usado para transformar vetores
// const vetor2 = vetor.map(stringToInt);
// console.log(vetor2);

// const vetor3 = vetor2.map(x => x*x);
// console.log(vetor3);


// const vetor4 = [1,2,3,4,5,6];

// const dobro = (item)=>2*item;

// const vetorDobrado = vetor4.map(dobro);

// const aoQuadrado = (item, indice, vetor4) => vetor4[indice]*item;

// const vetorTransformado = vetor4.map((x)=>x+1);

// console.log(vetorTransformado);

const vetor = ["a","b","c"];
const toUpper = (str) => str.toUpperCase(); //toUpper transforma em maiusculo e toUpperCase recebe uma string
const maiusculas = vetor.map(toUpper);

console.log(maiusculas);