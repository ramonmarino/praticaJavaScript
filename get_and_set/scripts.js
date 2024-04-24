class Pessoa{
    constructor(nome,peso){
        this.nome = nome;
        this.peso = peso

    }
    falar(){
        console.log("consegue falar");
    }

    get getNome(){
        return this.nome;
    }

    set setNome(nome){
        this.nome = nome;

    }

}

pessoa1 = new Pessoa("Ramon","76 quilos")

console.log(pessoa1)

pessoa1.setNome = "Michael jackson"

console.log(pessoa1.getNome)
