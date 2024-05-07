let b = 2;

try {
    a = 1 + b; 
  
} catch (error) {
  console.log("Algo deu errado: " + error);
  
}finally{
  console.log("Executando o programa");
}

console.log( "O valor é: " + a );
console.log("fim do programa!")