function ejercicio2(numeros) {
    let sumaTotal = 0
    for (let i = 0; i < numeros.length; i++) {
        const numeroActual = numeros[i];
        sumaTotal += numeroActual
        
    }

    return sumaTotal
}
module.exports = ejercicio2
