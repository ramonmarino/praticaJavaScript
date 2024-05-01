class Endereco {
  constructor(rua,bairro,cidade,estado){
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;

  }

  set novaRua(novaRua){
    this.rua = novaRua;
  }

  set novoBairro(novoBairro){
    this.bairro = novoBairro;
  }

  set novaCidade(novaCidade){
    this.cidade = novaCidade;
  }

  set novoEstado(novoEstado){
    this.estado = novoEstado;
  }



}

// criando o objeto em memória 
let endereco = new Endereco("Rua neverLand", "Bairro das estrelas","San Francisco", "Califórnia");

console.log(endereco);
//atribuindo através do método set uma nova rua para a classe

endereco.novaRua = "Rua dos famosos";
console.log(endereco);
endereco.novoBairro = "Rua do Tom Cruise";
console.log(endereco);
endereco.novaCidade = "Minas Gerais";
console.log(endereco);
