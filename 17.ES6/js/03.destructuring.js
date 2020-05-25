//Destructing a funciones

const ciudades = ['Londres', 'New York', 'Madrid', 'Paris', {
	idioma: 'ingles'
}];

const [
	primeraCiudad,
	segundaCiudad
] = ciudades;

console.log(primeraCiudad, segundaCiudad);

const [ , , ciudad , paris ] = ciudades;
console.log(ciudad, paris);

console.log(ciudades);

//ejemplo avanzado
const cliente = {
	tipo: 'premium',
	saldo: 30000,
	datos: {
		nombre: 'Pedro',
		apellido: 'Perez',
		residencia: {
			ciudad: 'Mexico'
		}
	},
	movimientos: ['12-03-2018', '12-03-2017', '12-03-2016']
}

let {
	tipo,
	datos,
	datos: {residencia},
	movimientos : [ , dos]
} = cliente;

console.log(tipo, datos.apellido, residencia, dos);