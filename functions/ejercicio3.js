function abbrevname(nombreCompleto){
    const palabras = nombreCompleto.split(" ")
    console.log(palabras)
    return palabras[0][0].toUpperCase() + "." + palabras[1][0].toUpperCase() 
}
module.exports = abbrevname