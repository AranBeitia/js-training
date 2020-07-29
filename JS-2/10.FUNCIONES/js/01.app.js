// /* FUNCIONES */

// funciones simples
function holaMundo() {
  console.log('hola mundo')
}
holaMundo()

// funciones con parametros
function holaPersona(nombre, apellidos) {
  console.log(`me llamo ${nombre} ${apellidos}`);
}
holaPersona('aran', 'beitia')

// funciones de calculo
function sumaNumeros(num1,num2){
  let total = num1 + num2
  console.log(total);
}
sumaNumeros(5, 6)

// tabla de multiplicar
function tablaMultiplicar(numero) {
  console.log('Tabla de multiplicar del ' + numero);
  let maxNum = 10
  for (var i = 0; i <= maxNum; i++) {
    let total = numero * i
    console.log(`${numero} x ${i} = ${total}`);
  }
}
tablaMultiplicar(3)

// funcion para calcular la edad pasandole el año de nacimiento
function miEdad(anioNacimiento) {
  let date = new Date()
  let anioActual = date.getFullYear()
  let edad = anioActual - anioNacimiento
  console.log(edad);
}
miEdad(1979)

// funcion con retorno
function menosUno(numero) {
  return numero - 1
}
let resultado = menosUno(10)
console.log(resultado);

// funcion con objeto
function miFuncionObjeto(objeto){
  let date = new Date()
  anioActual = date.getFullYear()
  objeto.anioActual = anioActual
  return objeto
}
let miObjeto = {
  nombre: 'Aran',
  apellido: 'Beitia'
}
let coche = {
  marca: 'BMW',
  precio: 100000,
  caballos: 390
}
let result = miFuncionObjeto(coche)
console.log(result);