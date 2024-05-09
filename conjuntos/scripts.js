const reg1 = /[12345]/;

console.log(reg1.test(" tem numero 2?"));
console.log(reg1.test(" tem numero 6?"));

// outra forma com intervalo

const reg2 = /[0-10]/;

console.log(reg2.test(" tem numero 6?"));

