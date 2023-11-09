
function verificandoTipos(dado) {
    if (dado === "boolean") {
        console.log("O tipo de dado passado foi: " + typeof (dado));
    } else if (dado === "number") {
        console.log("O tipo de dado passado foi: " + typeof (dado));
    }else{
        console.log("O tipo de dado passado foi: " + typeof(dado));
    }
}

verificandoTipos(true);
verificandoTipos(10);
verificandoTipos("Ramon Marino");
verificandoTipos(false);