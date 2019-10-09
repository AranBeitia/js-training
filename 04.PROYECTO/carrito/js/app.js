//Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

//Listeners
cargarEventListeners();

function cargarEventListeners() {
	//dispara cuando se presiona 'agregar carrito'
	cursos.addEventListener('click', comprarCurso);
	//cuando se elimina del carrito
	carrito.addEventListener('click', eliminarCurso);
	//al vaciar carrito
	vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
	//al cargar el documento, mostrar el localStorage
	document.addEventListener('DOMContentLoaded', leerLocalStorage);
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
	const infoCurso = {
		imagen: curso.querySelector('img').src,
		titulo: curso.querySelector('h4').textContent,
		precio: curso.querySelector('.precio span').textContent,
		id: curso.querySelector('a').getAttribute('data-id')
	}

	insertarCarrito(infoCurso);
}
//funcion muestra curso seleccionado en el carrito
function insertarCarrito(curso) {
	const row = document.createElement('tr');
	row.innerHTML = `
		<td>
			<img src="${curso.imagen}" width="100">
		</td>
		<td>${curso.titulo}</td>
		<td>${curso.precio}</td>
		<td>
			<a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
		</td>
	`;
	listaCursos.appendChild(row);
	guardarCursoLocalStorage(curso);
}
//Elimina el curso del carrito del DOM
function eliminarCurso(e) {
	e.preventDefault();
	let curso;
	if(e.target.classList.contains('borrar-curso')) {
		e.target.parentElement.parentElement.remove();
	}
}
//Vacia del carrito todos los cursos en el DOM
function vaciarCarrito() {
	//forma lenta
	/*listaCursos.innerHTML = '';*/
	//forma rapida recomendada
	while(listaCursos.firstChild) {
		listaCursos.removeChild(listaCursos.firstChild);
	}
	return false;
}
//Almacena cursos del carrito en el localStorage
function guardarCursoLocalStorage(curso) {
	let cursos;
	//toma el valor de un array con datos de LS o vacio
	cursos = obtenerCursoLocalStorage();
	//el curso seleccionado se añade al array
	cursos.push(curso);
	localStorage.setItem('cursos', JSON.stringify(cursos));
}
//comprueba que haya elementos en localStorge
function obtenerCursoLocalStorage () {
	let cursosLS;
	//comprobamos si hay algo en local storage
	if(localStorage.getItem('cursos') === null) {
		cursosLS = [];
	} else {
		cursosLS = JSON.parse( localStorage.getItem('cursos'));
	}
	return cursosLS;
}
//imprime los cursos de localstorage en el carrito
function leerLocalStorage() {
	let cursosLS;
	cursosLS = obtenerCursoLocalStorage();
	cursosLS.forEach(function(curso) {
		//construir el template
		const row = document.createElement('tr');
		row.innerHTML = `
		<td>
			<img src="${curso.imagen}" width="100">
		</td>
		<td>${curso.titulo}</td>
		<td>${curso.precio}</td>
		<td>
			<a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
		</td>
	`;
		listaCursos.appendChild(row);
		
	});
}
