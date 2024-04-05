function oneProperty(arrayObjetos, propiedad){
    const arrayNuevo = arrayObjetos.map(((objeto)=> {return {edad:objeto[propiedad]}}))
    return arrayNuevo
}
module.exports = oneProperty