// ASIGNACIÓN POR DESTRUCTURING

const cliente = {
	nombre: 'Adriana',
	tipo: 'Premium'
}

/* Si fuera un objeto muy largo, esto sería interminable */
// let nombre = cliente.nombre,
// 		tipo = cliente.tipo;

/* Otra manera más rápida */
let {nombre, tipo} = cliente;

/* Pintado por pantalla */
const content = document.getElementById('app');
const prueba = document.createElement('main');

prueba.innerHTML = `
	<p>Nombre: ${nombre}</p>
	<p>Tipo: ${tipo}</p>
`;

content.appendChild(prueba);

//Ejemplo 2
const cliente1 = {
	tipo: 'Premium',
	nombre: 'Antonio',
	datos: {
		ubicacion: {
			ciudad: 'Jalisco',
			pais: 'Mexico'
		},
		cuenta: {
			desde: '10-12-2012',
			saldo: 4000
		}
	}
}

let { datos: {ubicacion}} = cliente1;
console.log(ubicacion.ciudad);
console.log(ubicacion.pais);

let { datos: {cuenta} } = cliente1;
console.log(cuenta.desde);
console.log(cuenta.saldo);

const cliente3 = {
	nomb: 'Pedro',
}

let { nomb, tip= 'Basico', sald= 0 } = cliente3;

console.log(nomb, tip, sald);
