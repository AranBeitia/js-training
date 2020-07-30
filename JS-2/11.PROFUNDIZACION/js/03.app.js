// /* PALABRA RESERVADA NEW para crear Objetos con tipo */

var animal = {
  tipo: 'perro',
  nombre: 'Nala',
  edad: 4
}

console.log(animal);

//Si tiene tipo, nos aparece: Animal {tipo: 'perro', nombre: 'Nala', edad: 3}
function Animal () {
  this.tipo = 'perro',
  this.nombre = 'Nala',
  this.edad = 3
}

//Si NO tiene tipo, nos aparece: {nombre: 'Moni', edad: 5}
gato = {
  nombre: 'Mini',
  edad: 5
}

gatoDos = {
  nombre: 'Mua',
  edad: 3
}

var nala = new Animal()
console.log(nala);
console.log(gato);
console.log(gatoDos);

//Haciendo todo esto dinámico:
function Animal(tipo, nombre, edad) {
  this.tipo = tipo,
  this.nombre = nombre,
  this.edad = edad
}

var kitty = new Animal('Perro', 'Kitty', 8)
var minino = new Animal('Gato', 'Miau', 10)
var pio = new Animal('canario', 'Cuacua', 1)

//se puede modificar las propiedades, pero al inicializarlos vuelven a los que tenían
kitty.velocidad = '22km/h'

console.log(kitty);
console.log(minino);
console.log(pio);