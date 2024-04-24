class Pai{
    constructor(nome,peso){
        this.nome = nome;
        this.peso = peso

    }
}

pessoa1 = new Pai("Ramon","66 quilos")
console.log(pessoa1)

class Filho extends Pai{
    constructor(nome,peso,idade){
        super(nome,peso);
        this.idade = idade;
    }
}

let filho = new Filho("Ramon junior","1.190 quilos", "7 meses e meio")

console.log(filho);