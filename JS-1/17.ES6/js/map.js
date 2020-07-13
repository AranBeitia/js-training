//MAPS 

let cliente = new Map();

//forma de añadir valores
cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

//acceder a los valores
console.log(cliente.get('nombre'));
console.log(cliente.get('tipo'));
console.log(cliente.get('saldo'));

/* Metodos para los maps */
//tamaño del map:
console.log(cliente.size);

//comprobar si un valor existe
console.log(cliente.has('tipo'));

//borrar elemento del map
console.log(cliente.delete('nombre'));

//limpiar el map
cliente.clear()

console.log(cliente);

const paciente = new Map(
	[
		['nombre', 'paciente'],
		['habitacion', 'No definido']
	]
);

paciente.set('nombre', 'Antonio');
paciente.set('habitacion', 400);

console.log(paciente);

// for each a un map
paciente.forEach((datos, index) => {
	console.log(`${index}: ${datos}`);
})

