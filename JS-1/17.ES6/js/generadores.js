// generadores: funciones que retornan iteradores

function *crearGenerador() {
	//yield
	yield 1;
	yield 'Nombre';
	yield 3 + 3;
	yield true;
}

const iterador = crearGenerador();

console.log(iterador.next().value); //1
console.log(iterador.next().value); //'Nombre'
console.log(iterador.next().value); //6
console.log(iterador.next().value); //true
console.log(iterador.next().value); //undefined

function *nuevoGenerador(carrito) {
	for (let i = 0; i < carrito.length; i++) {
		yield carrito[i];
	}
}

//creamos el carrito
const carrito = ['producto1', 'producto2', 'producto3', 'producto4'];

//recorremos el iterador
let iterador2 = nuevoGenerador(carrito);

console.log(iterador2.next().value); //producto 1
console.log(iterador2.next().done); //false
console.log(iterador2.next().value); //producto 3