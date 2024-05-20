const dia = /\d\d/; 

console.log(dia.test("2019") && "2019".length == 2);
console.log(dia.test("04"));
console.log(dia.test("Pudim"));

const letras = /\w\w\w/; 

console.log(letras.test("asd"));
console.log(letras.test("asdd"));
console.log(letras.test("as"));




