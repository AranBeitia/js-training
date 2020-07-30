// /* FUNCIONES TIPO FLECHA */
//siempre son anonimas
function holaMundo(){
  console.log('hola mundo');
}
holaMundo()

const nombre = (nombre, apellidos) => {
  return `me llamo ${nombre} ${apellidos}`
}
let nomb = nombre('aran', 'beitia')
console.log('Hola '+ nomb);

const sumaFn = (numUno, numDos) => {
  return numUno + numDos
}
let nums = sumaFn(5, 7)
console.log(`El total es ${nums}`);

// /* FUNCIONES ESPERA DE TIEMPO */

setTimeout(() => {
  console.log('hola kitty');
}, 2000)

setTimeout(() => { alert('apuntate')}, 3000)

const miFuncion= edad => { 
  console.log('estamos calculando tu edad')

  setTimeout(() => {
    calcularMiEdad(edad)
  }, 1000)

  const calcularMiEdad = edad => { console.log('tu edad es ' + edad) }
}

miFuncion(25)
