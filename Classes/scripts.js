let cachorro ={
    patas:4,
    raca: "indefinida",
    latir: function(){
        console.log("au au");
    }
}

let labrador = Object.create(cachorro);
labrador.latir();
console.log(labrador.raca)
// atribuindo raça ao meu objeto/clase
labrador.raca = "Pastor Alemao"
console.log(labrador.raca)

console.log(cachorro.raca)