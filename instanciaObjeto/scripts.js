function criaCachorro(raca,patas,cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor= cor;
    return cachorro;
    
}

let cachorro = criaCachorro("Pastor alemão",4,"Marrom");

let cachorro2 = criaCachorro("rottweiler", 4, "Preto");

console.log(cachorro);

console.log(cachorro2);
