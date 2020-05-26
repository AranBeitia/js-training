function crearIterador (carrito) {
	//inicializamos el indice
	let i = 0;

	return {
		siguiente: () => {
			let fin = (i >= carrito.length);
			let valor = !fin ? carrito[i++] : undefined;

			return {
				fin: fin,
				valor: valor
			}
		}
	}
}

const carrito = ['producto1', 'producto2', 'producto3', 'producto4'];
const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());