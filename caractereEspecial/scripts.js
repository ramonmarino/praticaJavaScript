const reg1 = /./; // aceita todos os tipos de dados

console.log(reg1.test(" "));
console.log(reg1.test("12312312 "));
console.log(reg1.test("asdada "));
console.log(reg1.test("asd124 "));

const reg2 =/\d/; //[0-9]

console.log(reg2.test(" "));
console.log(reg2.test("12312312 "));
console.log(reg2.test("asdada "));
console.log(reg2.test("asd124 "));

const reg3 =/\D/; // Só letras sendo sempre uma negação o maiúsculo 

console.log(reg3.test(" "));
console.log(reg3.test("12312312 "));
console.log(reg3.test("asdada "));
console.log(reg3.test("asd124 "));

