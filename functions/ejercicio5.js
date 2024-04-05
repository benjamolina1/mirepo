const estudiantes = [
    { nombre: "Juan", edad: 17, curso: "Primero" },
    { nombre: "Ana", edad: 18, curso: "Segundo" },
    { nombre: "Carlos", edad: 16, curso: "Primero" },
    { nombre: "María", edad: 19, curso: "Tercero" },
  ];
  function filtrado(arrayEstudiantes){
    const arrayPrimero = arrayEstudiantes.filter(((objeto) => objeto.curso==="Primero"))
    const arraySegundo = arrayPrimero.map((objeto)=> {return {nombre:objeto.nombre}})
    arraySegundo.sort((a, b) => a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase()));

    return arraySegundo
  }
  module.exports = filtrado