class Pessoa{
    constructor(nome,altura,etnia){
        this.nome = nome;
        this.altura = altura;
        this.etnia = etnia;
    }

}

let pessoa1 = new Pessoa("Ramon",1.76,"Branco");
console.log(pessoa1);
console.log(pessoa1.nome)

let pessoa2 = new Pessoa("Gabriel",1.75,"Branco");
pessoa2.idade  = "30"
console.log(pessoa2)