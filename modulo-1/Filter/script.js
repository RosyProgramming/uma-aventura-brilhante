// filter  é filtrar elementos do vetor
const vetor = [1,2,3,4,5,6,7,8,9,10];

const pares = vetor.filter(x => x%2 === 0);

console.log(pares);


const vetor2 = [1,2,3,4,5,6,7,8,9,10];

const pares2 = vetor2.filter(function(x){return x%2===0});

console.log(pares2);


const vetor3 = [10,4,5,6,2,7,3,8,9,1];

const vetor4 = vetor3.filter(x => x < 8);

console.log(vetor4);
