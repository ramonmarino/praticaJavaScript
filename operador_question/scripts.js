const padrao = /abacax?i/

console.log(padrao.test("abacaxi"));
console.log(padrao.test("abacai"));

const padrao2 = /\d+\w?/;

console.log(padrao2.test("1234"));
console.log(padrao2.test("1234a"));




