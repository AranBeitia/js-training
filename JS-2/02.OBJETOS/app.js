// /* Objetos */

let ventilador = {
  altura: '100cm',
  color: 'negro',
  potencia: '100w',
  helices: {
    tamano: '10cm',
    material: 'plastico',
    color: 'blanco',
    precio: {
      precio1: 20,
      precio2: 40,
      casa: {
        casa1: 'la mia',
        casa2: 'la tuya'
      }
    }
  }
}

console.log(ventilador)

//anotacion por puntos
console.log(ventilador.altura)
console.log(ventilador.color)
console.log(ventilador.helices.precio.casa.casa2);

//anotacion por corchetes
var opcionesUsuario = 'potencia'
console.log(ventilador[opcionesUsuario])

ventilador.color = 'Blanco'
ventilador.precio = 59
console.log(ventilador);
