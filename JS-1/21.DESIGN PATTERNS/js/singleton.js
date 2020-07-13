const alumnos = {
	//todos los alumnos
	listaAlumnos : [],

	//obtener un alumno
	get: function(id) {
		console.log(id)
		return this.listaAlumnos[id]
	},

	//crear alumno
	crear: function(datos) {
		console.log(datos)
		this.listaAlumnos.push(datos)
	},

	//listar todos los alumnos
	listado: function() {
		return this.listaAlumnos
	}
}

const infoAlumno = {
	nombre: 'Juan',
	edad: 20,
}

const infoAlumno2 = {
	nombre: 'Pablo',
	edad: 21
}

alumnos.crear(infoAlumno)
alumnos.crear(infoAlumno2)

const listado = alumnos.listado()
console.log(listado)

const alumno = alumnos.get(1)
console.log(alumno)
