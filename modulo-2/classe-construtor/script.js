//classe e uma ideia de objeto
class Pessoa{
    construtor(nome, idade, sexo, sobrenome){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.sobrenome = sobrenome;
    }
}

const pessoa1 = new Pessoa('Maria', 20, 'F', 'sousa');
pessoa1.idade = 21;
pessoa1.sexo = 'M';
pessoa1.sobrenome = 'Oli';
console.log(pessoa1);
console.log(pessoa1.sexo);
console.log(pessoa1.sobrenome);



const pessoa2 = new Pessoa('Laura', 20);
pessoa2.idade = 25;
console.log(pessoa2.idade);