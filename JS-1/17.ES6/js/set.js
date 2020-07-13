//SET: listas ordenadas

let carrito = new Set();
carrito.add('Camisa');
carrito.add('Disco 1');
carrito.add('Disco 2');
carrito.add('Disco 3');

console.log(carrito);
console.log(carrito.size);

//comprobar que un valor existe
console.log(carrito.has('Guitarra'));//devolverá false

//eliminar algo del set
// carrito.delete('Camisa');
// console.log(carrito);

// carrito.clear();

carrito.forEach((producto, index) => {
	console.log(`${index}: ${producto}`); //la llave y el valor son iguales
})

let numeros = new Set([1, 2, 3, 4, 5, 1, 2, 3, 4]);//no muestra los repetidos, util para eliminar duplicados
console.log(numeros);
console.log(numeros.size);

//convertir un set a array
const arrayCarrito = [...carrito];
console.log(arrayCarrito);