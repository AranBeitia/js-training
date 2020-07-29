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
