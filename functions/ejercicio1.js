const numeros = [10, 5, 20, 15];
function ejercicio1(numeros){
 let numeroMayor = -1;
 for (let i = 0; i < numeros.length; i++) {
    const numeroActual = numeros[i];
    if(numeroActual > numeroMayor){
        numeroMayor = numeroActual
    }
    
 }
 return numeroMayor;
}
module.exports = ejercicio1