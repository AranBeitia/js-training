const pendientes = [`Tareas`, 'Comer', 'Gimnasio', 'Estudiar JS'];

// For
for (let i = 0; i < pendientes.length; i++) {
	console.log(pendientes[i]);
}

//ForEach
pendientes.forEach(function (pendiente, index) {
	console.log(`${index}: ${pendiente}`);
});

//Map
const carrito = [
	{ id: 1, producto: `Libro` },
	{ id: 2, producto: `Camisa` },
	{ id: 3, producto: `Guitarra` },
	{ id: 4, producto: `Musica` }
];

const nombreProducto = carrito.map(function (carrito){
	return carrito.producto;
});
console.log(nombreProducto);

const coche = {
	modelo: `Camaro`,
	motor: `6.1`,
	anio: `1967`,
	marca: `Chevy`
}

for (let auto in coche) {
	console.log(`${auto}: ${coche[auto]}`);
}

console.log(coche);
