class Pessoa {
    constructor(nome,altura){
        this.nome = nome;
        this.altura = altura; 
    }
    andar(){
        console.log("Estou caminhando")
    }
}

Pessoa.prototype.nome = "Gabriel"
Pessoa.prototype.idade = "28 anos"

let pessoa1 = new Pessoa("Ramon",1.77);
console.log(pessoa1)



console.log(pessoa1.idade)
pessoa1.andar()

console.log(pessoa1.nome);
console.log(Pessoa.prototype.nome)