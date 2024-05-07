let array = [1,2,3,4,5];
let array2 = [];

function interarArray(arr){
  if(arr.length == 0 ){
    throw new Error("o array precisa ter pelo menos um elemento.");
  }else{
    for( let i = 0; i < arr.length; i++){
      console.log(i);
    }
  }
}

function arrayVazio(arr){
  if(arr.length > 0){
    throw Error("O array não pode ter elementos");
  }else{
    console.log("Agora vai");
  }

}

interarArray(array);
interarArray(array2);