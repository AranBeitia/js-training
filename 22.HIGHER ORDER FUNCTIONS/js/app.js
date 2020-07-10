const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
];

/* forEach (para TODOS los elementos de un array)*/
// autos.forEach(item => console.log(item.color))
// autos.forEach(auto => console.log(auto.marca))

let resultado = []
autos.forEach(item => {
	if(item.color === 'Blanco') {
		resultado.push(item)
	}
})
// console.table(resultado)

/* map (a diferencia de forEach que sólo recorre el array, map lo crea también)*/
let resultados = autos.map(item => item)
// console.table(resultados)

/* filter */
let resultFilter = autos.filter(auto => {
	return auto.marca !== 'BMW'
})
let resultFilter1 = autos.filter(item => item.year <= 2017 && item.year>=2016)

// console.table(resultFilter)
let result = autos.filter(auto => auto.marca !== 'BMW')
let resul = autos.filter(auto => auto.color === 'Rojo')
let res = autos.filter (item => item.year === 2018)
let res1 = autos.filter(item => item.year <= 2017 && item.year>= 2016)
// console.table(res1)

/* find (la diferencia es que trae el primer elemento que encuentre)*/
let resFind = autos.find(auto => auto.modelo === 'Mustang')
// console.log(resFind)

/* reduce (toma todos los valores y devuelve un valor único)*/
let resReduce = autos.reduce((total, auto) => total + auto.precio, 0)
console.log(resReduce)

const numeros = [1, 2, 3]
let resulNumeros = numeros.reduce((total, numero) => total + numero, 100)
console.log(resulNumeros)

/* some (devueve booleano: si existe o no existe)*/
let resSom = autos.some(auto => auto.marca === 'BMW')
let resSom2 = autos.some(auto => auto.marca === 'Ferrari')
console.log(resSom2)
