function saudacao(nome){
    if(typeof nome != "string"){
        throw new Error("Por favor o tipo do dado deve ser um texto");
    }else{
        console.log(`Olá ${nome},Tudo bem?` );
    }
}

saudacao("Ramon");
saudacao(5454);

console.log("teste");