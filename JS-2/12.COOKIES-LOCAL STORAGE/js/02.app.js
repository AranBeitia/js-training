// /* JSON */

const coche = {
  color: 'rojo',
  marca: 'ferrari',
  precio: 600000
}
console.log(coche);
const cocheJson = JSON.stringify(coche);
console.log(cocheJson);

var jsonRecibido = '{ "color": "rojo", "marca": "ferrari", "precio": 600000 }'
console.log(jsonRecibido);

const jsonRecibidoObjeto = JSON.parse(jsonRecibido)
console.log(jsonRecibidoObjeto);
