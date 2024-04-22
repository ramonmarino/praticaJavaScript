const pessoa = {
    maos: 2,
    pernas:2,
    cabeca: 1,

}
    
//console.log(Object.getPrototypeOf(pessoa));
//console.log(Object.getPrototypeOf(pessoa) === Object.prototype);



const pessoaNova = Object.create(pessoa);
console.log(pessoaNova.pernas);

console.log(Object.getPrototypeOf(pessoaNova)=== pessoa);