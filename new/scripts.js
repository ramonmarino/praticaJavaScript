function Cachorro(raca,patas,cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function(){
        console.log("Auuuuuuuuu");
    }
} 

let cachoro1 = new Cachorro("husk",4,"branco");
cachoro1.uivar();