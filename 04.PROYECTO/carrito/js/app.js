//Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');

//Listeners
cargarEventListeners();

function cargarEventListeners() {
	//dispara cuando se presiona 'agregar carrito'
	cursos.addEventListener('click', comprarCurso);
}

//Funciones
//funcion que añade el curso al carrito
function comprarCurso(e) {
	e.preventDefault();
	//Delegation para agregar carrito
	if(e.target.classList.contains('agregar-carrito')) {
		const curso = e.target.parentElement.parentElement;
		//Enviamos curso seleccionado pata tomar sus datos
		leerDatosCurso(curso);
	}
}

//funcion que lee los datos del curso
function leerDatosCurso(curso) {
	console.log(curso);
}