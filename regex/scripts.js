const reg1 = new RegExp("pessoa");

console.log(reg1.test("tem pessoa?"));
console.log(reg1.test("não encontrada."));

const reg2 = /bola/; //segunda forma de declarar

console.log(reg2.test("tem bola?"));
console.log(reg2.test("não tem"));

//declarando atráves de uma variavel

let text = "tem bola na mesa";

console.log(reg2.test(text));

console.log(/quadrado/.test("Onde tem quadrado?"));
