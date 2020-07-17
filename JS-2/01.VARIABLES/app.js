// /* String, Number, Float, Boolean, Array, Object, Function */

var name = "kitty"

name = 55
name = 109.7
name = true
name = ['hello', 'kitty']
name = {
  'hello': 'kitty',
  'satan': 'inferno'
}

console.log(name + ' es de tipo: ' + typeof name) //todas son de tipo string

// /* var let diferencias */

var marcaCoche = "seat"
let precioCoche = 16.000

console.log(marcaCoche)
console.log(precioCoche)

function miFuncion() {
  var marcaCoche = "BMW" //var no se destruye nunca (pesa más en memoria, se usa cada vez menos)

  if (marcaCoche === 'BMW') {
    var precio = 90.000
    let valor = 50.000 //let sólo vive y muere en su scope
  }

  //console.log(`${marcaCoche} => ${precio} y ${valor}`)
}

miFuncion()

// /* const */
// son variables que no se pueden actualizar. Si son globales se declaran en mayúsculas

const URL_API = 'http://google.es/api'
const VERSION_API = 'v1'
var LANG = 'es'
//para cuando haga la petición a el servidor de la API, le mandaré ese token que previamente me ha asignado
const TOKEN = 'efhovbhoijqeoivcjiejvasasdfsasvdsfb' 

console.log(URL_API)

function getSongs() {
  const url = `${URL_API}/${VERSION_API}/${LANG}/get-songs`
  console.log(url)
}

getSongs()

// /* Asignación por Destructuring  */

let miObjeto = {
  nombre: 'Aran',
  apellido: 'Beitia',
  edad: 30,
  ciudad: 'Bilbao',
  pais: 'España'
}
//tiene que ser el mismo nombre que en el objeto
let { nombre, apellido, ...resto } = miObjeto

// let nombre = miObjeto.nombre
// let apellido = miObjeto.apellido
// let edad = miObjeto.edad
// let ciudad = miObjeto.ciudad
// let pais = miObjeto.pais

console.log(nombre)
console.log(apellido)
console.log(resto)
// console.log(edad)
// console.log(ciudad)
// console.log(pais)