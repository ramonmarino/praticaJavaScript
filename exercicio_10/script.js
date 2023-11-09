// Radar de velocidade.


let velocidadeCarro = 50;
const velocidadeVia = 80;

if(velocidadeCarro > velocidadeVia){
    console.log(`Você está acima da velocidade,velocidade da via é: ${velocidadeVia}`);
    
}else if(velocidadeCarro <= velocidadeVia && velocidadeCarro <= 40){
    console.log("Você está muito devagar, por favor ande mais rápido!");

}else if(velocidadeCarro <= velocidadeVia){
    console.log("Você está dentro do limite da via, boa viagem!");
}
    




