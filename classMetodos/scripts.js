class Pessoa {
    constructor(nome,altura){
        this.nome = nome;
        this.altura = altura; 
    }
    andar(){
        console.log("Estou caminhando")
    }
}

let pessoa1 = new Pessoa("Ramon",1.77);
console.log(pessoa1)

Pessoa.prototype.idade = "28 anos"
console.log(pessoa1.idade)
pessoa1.andar()