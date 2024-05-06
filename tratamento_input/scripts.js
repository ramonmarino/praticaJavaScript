function checarNumero(num){
  let number = Number(num);
  if(Number.isNaN(number)){
    alert("Por favor digite apenas números.");
  }else{
    return number;
  }
}

checarNumero(5);
checarNumero("Não é número");

let numero = prompt("Digite um número: ");

checarNumero(numero);