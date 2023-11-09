// escreva uma função que retorne um número aleatório 

function numeroNaSorte(numero){
    return Math.floor(Math.random() * numero) + 1;

}

console.log(numeroNaSorte(10));
console.log(numeroNaSorte(50));
console.log(numeroNaSorte(25));
