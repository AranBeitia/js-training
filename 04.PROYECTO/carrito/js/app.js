//Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');

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
}
