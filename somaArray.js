/**Código que recebe um array e retorna soma dos elems
 */

var TAM_MAX = 230;
var arrayTeste = [10,22,33,44,46,51];

function calculaTotalArray(gameArray){
    var acm = 0;
    for(i=0; i < gameArray.length; i++){
        acm += gameArray[i];
    }
    return acm;
}

var result = calculaTotalArray(arrayTeste);

if( result < TAM_MAX){
    console.log("abaixo do limite:", result);
} else{
    console.log("acima do limite", result);
}





// // codigo sem funcoes
// var gameArray = [10,22,34,42,45,59];

// var acm =0;
// for(i =0 ; i < gameArray.length ; i++){
//     acm = gameArray[i];
// }
// console.log(acm);
